import ZayVerifierV2 from "./core-contracts/ZayVerifierV2.cdc"

pub contract Gateway {

    /***********************************************/
    /******************** PATHS ********************/
    /***********************************************/

    pub let RegistryStoragePath: StoragePath
    pub let RegistryPublicPath: PublicPath

    /************************************************/
    /******************** EVENTS ********************/
    /************************************************/

    pub event ContractInitialized()

    /***********************************************/
    /******************** STATE ********************/
    /***********************************************/


    /***********************************************/
    /**************** FUNCTIONALITY ****************/
    /***********************************************/

    pub struct Module {
        // ex. CustomToken
        pub let type: String
        // ex. FlowToken
        pub let requirement: AnyStruct

        init(_type: String, _requirement: AnyStruct) {
            self.type = _type
            self.requirement = _requirement
        }
    }

    pub struct VerifySig {
        pub let acctAddress: Address
        pub let message: String 
        pub let signatures: [String] 
        pub let keyIds: [Int]
        pub let signatureBlock: UInt64

        init(
        _acctAddress: Address, 
        _message: String, 
        _signatures: [String], 
        _keyIds: [Int], 
        _signatureBlock: UInt64
        ) {
        self.acctAddress = _acctAddress
        self.message = _message
        self.signatures = _signatures
        self.keyIds = _keyIds
        self.signatureBlock = _signatureBlock
        }
    }

    pub resource interface WhitelistPublic {
        pub var active: Bool
        pub let dateCreated: UFix64
        pub let description: String 
        pub let whitelistId: UInt64
        pub let host: Address
        pub let image: String 
        pub let name: String
        pub var totalCount: UInt64
        pub let url: String
        pub fun getRegistered(): [Address]
        pub fun getExtraMetadata(): {String: String}
        pub fun hasRegistered(account: Address): Bool
        pub fun getModules(): [Module]
        pub fun register(registrant: Address, verify: VerifySig)
    }

    //
    // Event
    //
    pub resource Whitelist: WhitelistPublic {
        pub var active: Bool
        access(account) var registered: {Address: Bool}
        pub let dateCreated: UFix64
        pub let description: String 
        pub let whitelistId: UInt64
        access(account) var extraMetadata: {String: String}
        pub let host: Address
        pub let image: String 
        pub let name: String
        pub var totalCount: UInt64
        pub let url: String
        pub let modules: [Module]

        /***************** Setters for the Whitelist Owner *****************/

        // Toggles claiming on/off
        pub fun toggleActive(): Bool {
            self.active = !self.active
            return self.active
        }

        // Updates the metadata in case you want
        // to add something. Not currently used for anything
        // on Whitelist, so it's empty.
        pub fun updateMetadata(newExtraMetadata: {String: String}) {
            self.extraMetadata = newExtraMetadata
        }

        /***************** Getters (all exposed to the public) *****************/

        pub fun getRegistered(): [Address] {
            return self.registered.keys
        }

        pub fun hasRegistered(account: Address): Bool {
            return self.registered[account] != nil
        }

        pub fun getExtraMetadata(): {String: String} {
            return self.extraMetadata
        }

        pub fun getModules(): [Module] {
            return self.modules
        }

        /****************** Registering ******************/

        pub fun register(registrant: Address, verify: VerifySig) {
            pre {
                self.active: 
                    "This Whitelist is not registerable, and thus not currently active."
                verify.acctAddress == 0xf8d6e0586b0a20c7:
                    "The signature must come from a Gateway Admin."
            }
            let intent = "Register ".concat((registrant as Address).toString())
                                    .concat(" to ")
                                    .concat(self.uuid.toString())
            let identifier = self.uuid.toString()
            
            let result = ZayVerifierV2.verifySignature(
                acctAddress: verify.acctAddress, 
                message: verify.message, 
                keyIds: verify.keyIds, 
                signatures: verify.signatures, 
                signatureBlock: verify.signatureBlock, 
                intent: intent, 
                identifier: identifier
            )

            self.registered[registrant] = true
            self.totalCount = self.totalCount + 1
        }

        init (
            _active: Bool,
            _description: String, 
            _extraMetadata: {String: String},
            _host: Address, 
            _image: String, 
            _name: String,
            _url: String,
            _modules: [Module],
        ) {
            self.active = _active
            self.dateCreated = getCurrentBlock().timestamp
            self.description = _description
            self.whitelistId = self.uuid
            self.extraMetadata = _extraMetadata
            self.host = _host
            self.image = _image
            self.name = _name
            self.registered = {}
            self.totalCount = 0
            self.url = _url
            self.modules = _modules
        }

        destroy() {
           
        }
    }
 
    // 
    // Registry
    //
    pub resource interface RegistryPublic {
        // Public Getters
        pub fun borrowPublicWhitelistRef(whitelistId: UInt64): &Whitelist{WhitelistPublic}
        pub fun getIDs(): [UInt64]
    }

    pub resource Registry: RegistryPublic {
        access(account) var whitelists: @{UInt64: Whitelist}

        // Create a new Whitelist.
        pub fun createWhitelist(
            active: Bool,
            description: String,
            image: String, 
            name: String, 
            url: String,
            modules: [Module],
            _ extraMetadata: {String: String}
        ): UInt64 {
            let Whitelist <- create Whitelist(
                _active: active,
                _description: description, 
                _extraMetadata: extraMetadata,
                _host: self.owner!.address, 
                _image: image, 
                _name: name, 
                _url: url,
                _modules: modules
            )
            let whitelistId = Whitelist.whitelistId
            self.whitelists[Whitelist.whitelistId] <-! Whitelist
            return whitelistId
        }

        pub fun deleteWhitelist(whitelistId: UInt64) {
            let whitelist <- self.whitelists.remove(key: whitelistId) ?? panic("This whitelist does not exist")
            destroy whitelist
        }

        pub fun borrowWhitelistRef(whitelistId: UInt64): &Whitelist {
            return &self.whitelists[whitelistId] as &Whitelist
        }

        /************* Getters (for anyone) *************/

        // Get a public reference to the Whitelist
        // so you can call some helpful getters
        pub fun borrowPublicWhitelistRef(whitelistId: UInt64): &Whitelist{WhitelistPublic} {
            return &self.whitelists[whitelistId] as &Whitelist{WhitelistPublic}
        }

        pub fun getIDs(): [UInt64] {
            return self.whitelists.keys
        }

        init() {
            self.whitelists <- {}
        }

        destroy() {
            destroy self.whitelists
        }
    }

    pub fun createEmptyRegistry(): @Registry {
        return <- create Registry()
    }

    init() {
        emit ContractInitialized()

        self.RegistryStoragePath = /storage/GatewayRegistryStoragePath002
        self.RegistryPublicPath = /public/GatewayRegistryPublicPath002
    }
}