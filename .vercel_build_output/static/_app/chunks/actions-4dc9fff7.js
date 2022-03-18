import{C as T,W as h,X as C,Y as f,Z as A,_ as n,$ as l,a0 as b,a1 as V}from"./vendor-d28e1e71.js";import{d as E}from"./stores-a999c3f7.js";const S=T(null),r=T(null),F=T(null),c=T(!1),v=T(!1),O=T(!1),d=T(!1),u=T(!1);h({"accessNode.api":{}.VITE_ACCESS_NODE_API,"discovery.wallet":{}.VITE_DISCOVERY_WALLET,"0xFLOAT":{}.VITE_FLOAT_ADDRESS,"0xFMDV":{}.VITE_FLOAT_ADDRESS,"0xNFT":{}.VITE_CORE_CONTRACTS_ADDRESS,"0xMDV":{}.VITE_CORE_CONTRACTS_ADDRESS});function p(a,e,o,s,t){return{success:a,body:e,error:o,errorCode:s,retryable:t}}function w(a){return p(!0,a||{},null,null,!1)}function m(a,e,o,s){return p(!1,s||!1,a,e,o)}function g(a){let e=a==null?void 0:a.replace(`[Error Code: 1101] cadence runtime error Execution failed:
error: assertion failed:`,"Error:");return e=e.replace(/-->.*/,""),e}C.subscribe(S.set,[]);const P=()=>b(),x=()=>V(),I=async a=>{let e={claimable:a.claimable,name:a.name,description:a.description,image:a.ipfsHash,url:a.url,transferrable:a.transferrable,timelock:a.timelock,dateStart:+new Date(a.startTime)/1e3,timePeriod:+new Date(a.endTime)/1e3-+new Date(a.startTime)/1e3,secret:a.claimCodeEnabled,secretPhrase:a.claimCode,limited:!!a.quantity,capacity:a.quantity?a.quantity:0};v.set(!0);let o=!1;L();try{return o=await A({cadence:`
      import FLOAT from 0xFLOAT
      import NonFungibleToken from 0xNFT
      import MetadataViews from 0xMDV

      transaction(claimable: Bool, name: String, description: String, image: String, url: String, transferrable: Bool, timelock: Bool, dateStart: UFix64, timePeriod: UFix64, secret: Bool, secretPhrase: String, limited: Bool, capacity: UInt64) {

        let FLOATEvents: &FLOAT.FLOATEvents
      
        prepare(acct: AuthAccount) {
          // set up the FLOAT Collection where users will store their FLOATs
          if acct.borrow<&FLOAT.Collection>(from: FLOAT.FLOATCollectionStoragePath) == nil {
              acct.save(<- FLOAT.createEmptyCollection(), to: FLOAT.FLOATCollectionStoragePath)
              acct.link<&FLOAT.Collection{NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>
                      (FLOAT.FLOATCollectionPublicPath, target: FLOAT.FLOATCollectionStoragePath)
          }
      
          if acct.borrow<&FLOAT.FLOATEvents>(from: FLOAT.FLOATEventsStoragePath) == nil {
            // set up the FLOAT Events where users will store all their created events
            acct.save(<- FLOAT.createEmptyFLOATEventCollection(), to: FLOAT.FLOATEventsStoragePath)
            acct.link<&FLOAT.FLOATEvents{FLOAT.FLOATEventsPublic, MetadataViews.ResolverCollection}>(FLOAT.FLOATEventsPublicPath, target: FLOAT.FLOATEventsStoragePath)
          }
      
          self.FLOATEvents = acct.borrow<&FLOAT.FLOATEvents>(from: FLOAT.FLOATEventsStoragePath)
                              ?? panic("Could not borrow the FLOATEvents from the signer.")
        }
      
        execute {
          var Timelock: FLOAT.Timelock? = nil
          var Secret: FLOAT.Secret? = nil
          var Limited: FLOAT.Limited? = nil
          
          if timelock {
            Timelock = FLOAT.Timelock(_dateStart: dateStart, _timePeriod: timePeriod)
          }
          
          if secret {
            Secret = FLOAT.Secret(_secretPhrase: secretPhrase)
          }
      
          if limited  {
            Limited = FLOAT.Limited(_capacity: capacity)
          }
          
          self.FLOATEvents.createEvent(claimable: claimable, timelock: Timelock, secret: Secret, limited: Limited, name: name, description: description, image: image, url: url, transferrable: transferrable, {})
          log("Started a new event.")
        }
      }  
      `,args:(t,i)=>[t(e.claimable,i.Bool),t(e.name,i.String),t(e.description,i.String),t(e.image,i.String),t(e.url,i.String),t(e.transferrable,i.Bool),t(e.timelock,i.Bool),t(e.dateStart.toFixed(1),i.UFix64),t(e.timePeriod.toFixed(1),i.UFix64),t(e.secret,i.Bool),t(e.secretPhrase,i.String),t(e.limited,i.Bool),t(e.capacity,i.UInt64)],payer:n,proposer:n,authorizations:[n],limit:999}),F.set(o),l(o).subscribe(t=>{r.set(t.status),t.status===4&&(t.statusCode===0?O.set(w()):O.set(m(g(t.errorMessage),t.statusCode)),v.set(!1),setTimeout(()=>c.set(!1),2e3))}),await l(o).onceSealed()}catch(s){O.set(!1),r.set(99),console.log(s),setTimeout(()=>c.set(!1),1e4)}},D=async(a,e,o)=>{let s=!1;L(),d.set(!0);try{s=await A({cadence:`
      import FLOAT from 0xFLOAT
      import NonFungibleToken from 0xNFT
      import MetadataViews from 0xMDV
      
      transaction(id: UInt64, host: Address, secret: String) {
 
        let FLOATEvents: &FLOAT.FLOATEvents{FLOAT.FLOATEventsPublic}
        let Collection: &FLOAT.Collection
      
        prepare(acct: AuthAccount) {
          // set up the FLOAT Collection where users will store their FLOATs
          if acct.borrow<&FLOAT.Collection>(from: FLOAT.FLOATCollectionStoragePath) == nil {
              acct.save(<- FLOAT.createEmptyCollection(), to: FLOAT.FLOATCollectionStoragePath)
              acct.link<&FLOAT.Collection{NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>
                      (FLOAT.FLOATCollectionPublicPath, target: FLOAT.FLOATCollectionStoragePath)
          }
          
          self.FLOATEvents = getAccount(host).getCapability(FLOAT.FLOATEventsPublicPath)
                              .borrow<&FLOAT.FLOATEvents{FLOAT.FLOATEventsPublic}>()
                              ?? panic("Could not borrow the public FLOATEvents from the host.")
          self.Collection = acct.borrow<&FLOAT.Collection>(from: FLOAT.FLOATCollectionStoragePath)
                              ?? panic("Could not get the Collection from the signer.")
        }
      
        execute {
          self.FLOATEvents.claim(id: id, recipient: self.Collection, secret: secret)
          log("Claimed the FLOAT.")
        }
      }
      `,args:(t,i)=>[t(e,i.UInt64),t(a,i.Address),t(o,i.String)],payer:n,proposer:n,authorizations:[n],limit:999}),F.set(s),l(s).subscribe(t=>{r.set(t.status),t.status===4&&(console.log(t),t.statusCode===0?u.set(w()):u.set(m(g(t.errorMessage),t.statusCode)),d.set(!1),E.set({claimable:!0,transferrable:!0}),setTimeout(()=>c.set(!1),2e3))})}catch(t){r.set(99),u.set(m(t)),d.set(!1),console.log(t)}},R=async a=>{let e=!1;L();try{e=await A({cadence:`
      import FLOAT from 0xFLOAT

      transaction(id: UInt64) {

        let Collection: &FLOAT.Collection

        prepare(acct: AuthAccount) {
          self.Collection = acct.borrow<&FLOAT.Collection>(from: FLOAT.FLOATCollectionStoragePath)
                              ?? panic("Could not get the Collection from the signer.")
        }

        execute {
          self.Collection.destroyFLOAT(id: id)
          log("Destroyed the FLOAT.")
        }
      }
      `,args:(o,s)=>[o(a,s.UInt64)],payer:n,proposer:n,authorizations:[n],limit:999}),F.set(e),l(e).subscribe(o=>{r.set(o.status),o.status===4&&(E.set({claimable:!0,transferrable:!0}),setTimeout(()=>c.set(!1),2e3))})}catch(o){r.set(99),console.log(o)}},k=async(a,e)=>{try{let o=await f({cadence:`
      import FLOAT from 0xFLOAT
      import MetadataViews from 0xMDV
      import FLOATMetadataViews from 0xFMDV

      pub fun main(account: Address, id: UInt64): FLOATMetadataViews.FLOATEventMetadataView? {
        let floatEventCollection = getAccount(account).getCapability(FLOAT.FLOATEventsPublicPath)
                                    .borrow<&FLOAT.FLOATEvents{FLOAT.FLOATEventsPublic, MetadataViews.ResolverCollection}>()
                                    ?? panic("Could not borrow the FLOAT Events Collection from the account.")
        let floatEvent = floatEventCollection.borrowViewResolver(id: id)

        if let metadata = floatEvent.resolveView(Type<FLOATMetadataViews.FLOATEventMetadataView>()) {
          return metadata as! FLOATMetadataViews.FLOATEventMetadataView
        }
        return nil
      }
      `,args:(s,t)=>[s(a,t.Address),s(parseInt(e),t.UInt64)]});return console.log(o),o||{}}catch(o){console.log(o)}},_=async a=>{try{return await f({cadence:`
      import FLOAT from 0xFLOAT
      import MetadataViews from 0xMDV
      import FLOATMetadataViews from 0xFMDV

      pub fun main(account: Address): {String: FLOATMetadataViews.FLOATEventMetadataView} {
        let floatEventCollection = getAccount(account).getCapability(FLOAT.FLOATEventsPublicPath)
                                    .borrow<&FLOAT.FLOATEvents{FLOAT.FLOATEventsPublic, MetadataViews.ResolverCollection}>()
                                    ?? panic("Could not borrow the FLOAT Events Collection from the account.")
        let floatEvents: [UInt64] = floatEventCollection.getIDs()
        let returnVal: {String: FLOATMetadataViews.FLOATEventMetadataView} = {}

        for id in floatEvents {
          let view = floatEventCollection.borrowViewResolver(id: id)
          if var metadata = view.resolveView(Type<FLOATMetadataViews.FLOATEventMetadataView>()) {
            var floatEvent = metadata as! FLOATMetadataViews.FLOATEventMetadataView
            returnVal[floatEvent.name] = floatEvent
          }
        }
        return returnVal
      }
      `,args:(o,s)=>[o(a,s.Address)]})||{}}catch(e){console.log(e)}},U=async a=>{try{let e=await f({cadence:`
      import FLOAT from 0xFLOAT
      import MetadataViews from 0xMDV
      import FLOATMetadataViews from 0xFMDV

      pub fun main(account: Address): [FLOATMetadataViews.FLOATMetadataView] {
        let nftCollection = getAccount(account).getCapability(FLOAT.FLOATCollectionPublicPath)
                              .borrow<&FLOAT.Collection{MetadataViews.ResolverCollection}>()
                              ?? panic("Could not borrow the Collection from the account.")
        let floats = nftCollection.getIDs()
        var returnVal: [FLOATMetadataViews.FLOATMetadataView] = []
        for id in floats {
          let view = nftCollection.borrowViewResolver(id: id)
          if var metadata = view.resolveView(Type<FLOATMetadataViews.FLOATMetadataView>()) {
            var float = metadata as! FLOATMetadataViews.FLOATMetadataView
            returnVal.append(float)
          }
        }

        return returnVal
      }
      `,args:(o,s)=>[o(a,s.Address)]});return console.log(e),e||[]}catch(e){console.log(e)}},N=async a=>{let e=!1;L();try{return e=await A({cadence:`
      import FLOAT from 0xFLOAT

      transaction(id: UInt64) {

        let FLOATEvent: &FLOAT.FLOATEvent

        prepare(acct: AuthAccount) {
          let FLOATEvents = acct.borrow<&FLOAT.FLOATEvents>(from: FLOAT.FLOATEventsStoragePath)
                              ?? panic("Could not borrow the FLOATEvents from the signer.")
          self.FLOATEvent = FLOATEvents.getEvent(id: id)
        }

        execute {
          self.FLOATEvent.toggleActive()
          log("Toggled the FLOAT Event.")
        }
      }
      `,args:(s,t)=>[s(a,t.UInt64)],payer:n,proposer:n,authorizations:[n],limit:999}),F.set(e),l(e).subscribe(s=>{r.set(s.status),s.status===4&&setTimeout(()=>c.set(!1),2e3)}),await l(e).onceSealed()}catch(o){r.set(99),console.log(o)}},B=async a=>{let e=!1;L();try{return e=await A({cadence:`
      import FLOAT from 0xFLOAT

      transaction(id: UInt64) {

        let FLOATEvent: &FLOAT.FLOATEvent

        prepare(acct: AuthAccount) {
          let FLOATEvents = acct.borrow<&FLOAT.FLOATEvents>(from: FLOAT.FLOATEventsStoragePath)
                              ?? panic("Could not borrow the FLOATEvents from the signer.")
          self.FLOATEvent = FLOATEvents.getEvent(id: id)
        }

        execute {
          self.FLOATEvent.toggleTransferrable()
          log("Toggled the FLOAT Event.")
        }
      }
      `,args:(s,t)=>[s(a,t.UInt64)],payer:n,proposer:n,authorizations:[n],limit:999}),F.set(e),l(e).subscribe(s=>{r.set(s.status),s.status===4&&setTimeout(()=>c.set(!1),2e3)}),await l(e).onceSealed()}catch(o){r.set(99),console.log(o)}},q=async a=>{let e=!1;L();try{return e=await A({cadence:`
      import FLOAT from 0xFLOAT

      transaction(id: UInt64) {

        let FLOATEvents: &FLOAT.FLOATEvents

        prepare(acct: AuthAccount) {
          self.FLOATEvents = acct.borrow<&FLOAT.FLOATEvents>(from: FLOAT.FLOATEventsStoragePath)
                              ?? panic("Could not borrow the FLOATEvents from the signer.")
        }

        execute {
          self.FLOATEvents.deleteEvent(id: id)
          log("Removed the FLOAT Event.")
        }
      }
      `,args:(s,t)=>[s(a,t.UInt64)],payer:n,proposer:n,authorizations:[n],limit:999}),F.set(e),l(e).subscribe(s=>{r.set(s.status),s.status===4&&setTimeout(()=>c.set(!1),2e3)}),await l(e).onceSealed()}catch(o){r.set(99),console.log(o)}};function L(){c.set(!0),r.set(-1),u.set(!1),O.set(!1)}export{x as a,r as b,F as c,P as d,U as e,I as f,_ as g,v as h,O as i,k as j,R as k,D as l,N as m,B as n,q as o,d as p,u as q,c as t,S as u};
