import { browser } from '$app/env';

import * as fcl from "@samatech/onflow-fcl-esm";
import { goto } from "$app/navigation";

import "./config.js";
import {
  user,
  txId,
  transactionStatus,
  transactionInProgress,
} from './stores.js';

import { respondWithError, respondWithSuccess } from '$lib/response';
import { parseErrorMessageFromFCL } from './utils.js';

if (browser) {
  // set Svelte $user store to currentUser, 
  // so other components can access it
  fcl.currentUser.subscribe(user.set, [])
}

// Lifecycle FCL Auth functions
export const unauthenticate = () => fcl.unauthenticate();
export const authenticate = () => fcl.authenticate();

export const createWhitelist = async (project) => {
  console.log(project);
  let transactionId = false;
  initTransactionState();

  try {
    transactionId = await fcl.mutate({
      cadence: `
      import Gateway from 0xGateway
      import GatewayModules from 0xGateway

      transaction(active: Bool, name: String, description: String, image: String, url: String, tokenPaths: [PublicPath], amounts: [UFix64], identifiers: [String]) {

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
          let modules: [{Gateway.IModule}] = []
          var i = 0
          while i < identifiers.length {
            modules.append(GatewayModules.OwnsToken(_path: tokenPaths[i], amount: amounts[i], identifier: identifiers[i]))
            i = i + 1
          }
          self.Registry.createWhitelist(active: active, description: description, image: image, name: name, url: url, modules: modules, {})
          log("Started a new event.")
        }
      }
      `,
      args: (arg, t) => [
        arg(true, t.Bool),
        arg(project.name, t.String),
        arg(project.description, t.String),
        arg("", t.String),
        arg("", t.String),
        arg([project.tokens[0].path], t.Array(t.Path)),
        arg([project.tokens[0].amount + ".0"], t.Array(t.UFix64)),
        arg([project.tokens[0].identifier], t.Array(t.String))
      ],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999
    })

    txId.set(transactionId);

    fcl.tx(transactionId).subscribe(res => {
      transactionStatus.set(res.status)
      if (res.status === 4) {
        // handlenav
                goto(`/`);

        setTimeout(() => transactionInProgress.set(false), 2000)
      }
    })

    let res = await fcl.tx(transactionId).onceSealed()
    return res;

  } catch (e) {
    transactionStatus.set(99);
    console.log(e)
  }
}


/****************************** GETTERS ******************************/

export const getWhitelists = async (addr) => {
  try {
    let queryResult = await fcl.query({
      cadence: `
      import Gateway from 0xGateway

      pub fun main(account: Address): {String: Whitelist} {
        let registry = getAccount(account).getCapability(Gateway.RegistryPublicPath)
                                    .borrow<&Gateway.Registry{Gateway.RegistryPublic}>()
                                    ?? panic("Could not borrow the Public Registry from the account.")
        let whitelists: [UInt64] = registry.getIDs()
        let returnVal: {String: Whitelist} = {}
      
        for whitelistId in whitelists {
          let event = registry.borrowPublicWhitelistRef(whitelistId: whitelistId)
          let whitelist = Whitelist(_variables: event, _modules: event.getModules())
          returnVal[event.name] = whitelist
        }
        return returnVal
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
      `,
      args: (arg, t) => [
        arg(addr, t.Address)
      ]
    })
    // console.log(queryResult);
    return queryResult || {};
  } catch (e) {
    console.log(e);
  }
}

export const getWhitelist = async (addr, whitelistId) => {
  try {
    let queryResult = await fcl.query({
      cadence: `
      import Gateway from 0xGateway

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
      `,
      args: (arg, t) => [
        arg(addr, t.Address),
        arg(parseInt(whitelistId), t.UInt64)
      ]
    })
    // console.log(queryResult);
    return queryResult || {};
  } catch (e) {
    console.log(e);
  }
}


function initTransactionState() {
  transactionInProgress.set(true);
  transactionStatus.set(-1);
}