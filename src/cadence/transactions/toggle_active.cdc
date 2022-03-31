import Gateway from "../Gateway.cdc"

transaction(whitelistId: UInt64) {

  let Whitelist: &Gateway.Whitelist

  prepare(acct: AuthAccount) {
    let Registry = acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath)
                        ?? panic("Could not borrow the Registry from the signer.")
    self.Whitelist = Registry.borrowWhitelistRef(whitelistId: whitelistId)
  }

  execute {
    self.Whitelist.toggleActive()
    log("Toggled the Whitelist active.")
  }
}