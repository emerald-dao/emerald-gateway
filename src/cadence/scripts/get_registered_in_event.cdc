import Gateway from "../Gateway.cdc"

pub fun main(account: Address, eventId: UInt64): [Address] {
  let registry = getAccount(account).getCapability(Gateway.RegistryPublicPath)
                              .borrow<&Gateway.Registry{Gateway.RegistryPublic}>()
                              ?? panic("Could not borrow the Public Registry from the account.")
  return registry.borrowPublicEventRef(eventId: eventId).getRegistered()
}