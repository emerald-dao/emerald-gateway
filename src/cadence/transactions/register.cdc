import Gateway from "../Gateway.cdc"

transaction(host: Address, whitelistId: UInt64) {
 
  let Registry: &Gateway.Registry
  let Whitelist: &Gateway.Whitelist{Gateway.WhitelistPublic}

  prepare(acct: AuthAccount) {
    // set up the Registry where users will store all their created events
    if acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath) == nil {
      acct.save(<- Gateway.createEmptyRegistry(), to: Gateway.RegistryStoragePath)
      acct.link<&Gateway.Registry{Gateway.RegistryPublic}>(Gateway.RegistryPublicPath, target: Gateway.RegistryStoragePath)
    }

    let HostRegistry = getAccount(host).getCapability(Gateway.RegistryPublicPath)
                        .borrow<&Gateway.Registry{Gateway.RegistryPublic}>()
                        ?? panic("Could not borrow the public Registry from the host.")
    
    self.Whitelist = HostRegistry.borrowPublicWhitelistRef(whitelistId: whitelistId)

    self.Registry = acct.borrow<&Gateway.Registry>(from:  Gateway.RegistryStoragePath)
                      ?? panic("Could not borrow the Registry from the signer of registering.")
  }

  execute {
    self.Registry.register(whitelist: self.Whitelist, params: {})
  }
}
 