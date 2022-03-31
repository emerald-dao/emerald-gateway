import Gateway from "../Gateway.cdc"

pub fun main(): {Gateway.IModule} {
  let registry = getAccount(0xf8d6e0586b0a20c7).getCapability(Gateway.RegistryPublicPath)
                  .borrow<&Gateway.Registry{Gateway.RegistryPublic}>()
                  ?? panic("Can't borrow the Public Registry.")
  let ids = registry.getIDs()
  let whitelistPublic = registry.borrowPublicWhitelistRef(whitelistId: ids[0])
  let modules = whitelistPublic.getModules()
  return modules[0]
}
 