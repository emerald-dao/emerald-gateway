import{C as r,W as d,X as y,Y as u,Z as g,_ as l,$ as n,G as w,a0 as h}from"./vendor-716abb8a.js";import{r as b}from"./singletons-12a22614.js";const m=r(null),o=r(null),f=r(null),c=r(!1),p=b,G=v;async function v(e,s){return p.goto(e,s,[])}d({"accessNode.api":"http://localhost:8080","discovery.wallet":"http://localhost:8701/fcl/authn","0xGateway":"0xf8d6e0586b0a20c7"});y.subscribe(m.set,[]);const I=()=>w(),_=async e=>{console.log(e);let s=!1;R();try{return s=await g({cadence:`
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
      `,args:(t,i)=>[t(!0,i.Bool),t(e.name,i.String),t(e.description,i.String),t("",i.String),t("",i.String),t([e.tokens[0].path],i.Array(i.Path)),t([e.tokens[0].amount+".0"],i.Array(i.UFix64)),t([e.tokens[0].identifier],i.Array(i.String))],payer:l,proposer:l,authorizations:[l],limit:999}),f.set(s),n(s).subscribe(t=>{o.set(t.status),t.status===4&&(G("/"),setTimeout(()=>c.set(!1),2e3))}),await n(s).onceSealed()}catch(a){o.set(99),console.log(a)}},x=async e=>{try{return await u({cadence:`
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
      `,args:(a,t)=>[a(e,t.Address)]})||{}}catch(s){console.log(s)}},A=async(e,s)=>{try{return await u({cadence:`
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
      `,args:(t,i)=>[t(e,i.Address),t(parseInt(s),i.UInt64)]})||{}}catch(a){console.log(a)}};function R(){c.set(!0),o.set(-1)}const P=()=>{const e=h("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},M={subscribe(e){return P().page.subscribe(e)}};export{o as a,f as b,I as c,G as d,_ as e,A as f,x as g,M as p,c as t,m as u};
