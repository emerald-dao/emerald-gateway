import{C as l,Y as y,Z as d,_ as u,$ as w,a0 as r,a1 as n,J as h}from"./vendor-59f8b443.js";const g=l(null),o=l(null),m=l(null),c=l(!1);y({"accessNode.api":"http://localhost:8080","discovery.wallet":"http://localhost:8701/fcl/authn","0xGateway":"0xf8d6e0586b0a20c7"});d.subscribe(g.set,[]);const G=()=>h(),p=async i=>{console.log(i);let a=!1;f();try{return a=await w({cadence:`
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
      `,args:(e,t)=>[e(!0,t.Bool),e(i.name,t.String),e(i.description,t.String),e("",t.String),e("",t.String),e([i.tokens[0].path],t.Array(t.Path)),e([i.tokens[0].amount+".0"],t.Array(t.UFix64)),e([i.tokens[0].identifier],t.Array(t.String))],payer:r,proposer:r,authorizations:[r],limit:999}),m.set(a),n(a).subscribe(e=>{o.set(e.status),e.status===4&&setTimeout(()=>c.set(!1),2e3)}),await n(a).onceSealed()}catch(s){o.set(99),console.log(s)}},R=async i=>{try{return await u({cadence:`
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
      `,args:(s,e)=>[s(i,e.Address)]})||{}}catch(a){console.log(a)}},v=async(i,a)=>{try{return await u({cadence:`
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
      `,args:(e,t)=>[e(i,t.Address),e(parseInt(a),t.UInt64)]})||{}}catch(s){console.log(s)}};function f(){c.set(!0),o.set(-1)}export{G as a,o as b,m as c,p as d,v as e,R as g,c as t,g as u};
