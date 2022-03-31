import Gateway from "../Gateway.cdc"

transaction(whitelistId: UInt64) {

  let Registry: &Gateway.Registry

  prepare(acct: AuthAccount) {
    self.Registry = acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath)
                        ?? panic("Could not borrow the Registry from the signer.")
  }

  execute {
    self.Registry.deleteWhitelist(whitelistId: whitelistId)
    log("Removed the Whitelist.")
  }
}