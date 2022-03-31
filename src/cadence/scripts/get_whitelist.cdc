import Gateway from "../Gateway.cdc"

pub fun main(account: Address, whitelistId: UInt64): Whitelist {
  let registry = getAccount(account).getCapability(Gateway.RegistryPublicPath)
                              .borrow<&Gateway.Registry{Gateway.RegistryPublic}>()
                              ?? panic("Could not borrow the Public Registry from the account.")

  let event = registry.borrowPublicWhitelistRef(whitelistId: whitelistId)
  let whitelist = Whitelist(_variables: event, _modules: event.getModules())
  return whitelist
}

pub struct Whitelist {
  pub let variables: &Gateway.Whitelist{Gateway.WhitelistPublic}
  pub var modules: {String: [{Gateway.IModule}]}

  init(_variables: &Gateway.Whitelist{Gateway.WhitelistPublic}, _modules: [{Gateway.IModule}]) {
    self.variables = _variables
    self.modules = {}
    
    for module in _modules {
      let identifier = module.getType().identifier
      if self.modules[identifier] == nil {
        self.modules[identifier] = [module]
      } else {
        self.modules[identifier]!.append(module)
      }
    }
  }
}