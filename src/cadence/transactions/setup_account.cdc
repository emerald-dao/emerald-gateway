import Gateway from "../Gateway.cdc"

transaction {

  prepare(acct: AuthAccount) {
    // set up the Registry where users will store all their created events
    if acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath) == nil {
      acct.save(<- Gateway.createEmptyRegistry(), to: Gateway.RegistryStoragePath)
      acct.link<&Gateway.Registry{Gateway.RegistryPublic}>(Gateway.RegistryPublicPath, target: Gateway.RegistryStoragePath)
    }
  }

  execute {
    log("Finished setting up the account for Gateway.")
  }
}
