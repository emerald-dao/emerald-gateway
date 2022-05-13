import Gateway from "../Gateway.cdc"

transaction(active: Bool, name: String, description: String, image: String, url: String, moduleTypes: [String], moduleRequirements: [AnyStruct]) {

  let Registry: &Gateway.Registry

  prepare(acct: AuthAccount) {
    // set up the Registry where users will store all their created events
    if acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath) == nil {
      acct.save(<- Gateway.createEmptyRegistry(), to: Gateway.RegistryStoragePath)
      acct.link<&Gateway.Registry{Gateway.RegistryPublic}>(Gateway.RegistryPublicPath, target: Gateway.RegistryStoragePath)
    }

    self.Registry = acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath)
                        ?? panic("Could not borrow the Registry from the signer.")
  }

  execute {
    let modules: [Gateway.Module] = []
    var i = 0
    while i < moduleTypes.length {
      modules.append(Gateway.Module(_type: moduleTypes[i], _requirement: moduleRequirements[i]))
      i = i + 1
    }
    self.Registry.createWhitelist(active: active, description: description, image: image, name: name, url: url, modules: modules, {})
    log("Created a new whitelist.")
  }
}

