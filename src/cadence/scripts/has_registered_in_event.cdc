import Gateway from "../Gateway.cdc"

pub fun main(hostAddress: Address, eventId: UInt64, accountAddress: Address): Bool {
  let registry = getAccount(hostAddress).getCapability(Gateway.RegistryPublicPath)
                              .borrow<&Gateway.Registry{Gateway.RegistryPublic}>()
                              ?? panic("Could not borrow the Public Registry from the account.")
  let whitelist = registry.borrowPublicEventRef(eventId: eventId)

  return whitelist.hasRegistered(account: accountAddress)
}