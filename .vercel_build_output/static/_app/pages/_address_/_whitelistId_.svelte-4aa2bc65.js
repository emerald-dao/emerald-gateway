var ft=Object.defineProperty,it=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var Le=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable;var Re=(a,e,t)=>e in a?ft(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Ke=(a,e)=>{for(var t in e||(e={}))mt.call(e,t)&&Re(a,t,e[t]);if(Le)for(var t of Le(e))_t.call(e,t)&&Re(a,t,e[t]);return a},Qe=(a,e)=>it(a,dt(e));import{S as nt,i as at,s as rt,j as ee,m as te,o as oe,x as I,u as C,v as le,e as k,k as E,t as G,c as b,a as $,d,n as y,g as N,H as D,P as ze,b as W,a6 as pt,a2 as Xe,f as R,D as u,h as Ye,r as Oe,w as Ve,ai as vt,l as ne,ah as gt,aj as ht,E as ie,a3 as ue,I as _,a7 as ct,J as kt,p as bt,q as $t,B as Et}from"../../chunks/vendor-d21acaa6.js";import{d as yt,b as It,p as Mt}from"../../chunks/stores-0e91bd47.js";import{I as Tt,D as Dt}from"../../chunks/Dialog-c2c2028d.js";import{a as De,t as Ce,V as Ze,j as xe,C as Ct}from"../../chunks/stores-116c8e4d.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/stores-01d0a976.js";async function Ot(a,e){const t=await yt(a,e),o=t.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsToken"];console.log(o);let l=[];for(let r=0;r<o.length;r++){const n=o[r],s={identifier:n.identifier,amount:n.amount,imgUrl:"https://res.cloudinary.com/do4mactw0/image/upload/v1647145425/FlowLogo_myf3sv.svg",label:"FLOW"};l.push(s)}let f=Qe(Ke({},t.variables),{modules:{token:l}});return console.log(f),f}function we(a){let e,t;return e=new Tt({props:{icon:"line-md:confirm-circle",color:"var(--primary)",height:"2.6rem"}}),{c(){ee(e.$$.fragment)},l(o){te(e.$$.fragment,o)},m(o,l){oe(e,o,l),t=!0},i(o){t||(I(e.$$.fragment,o),t=!0)},o(o){C(e.$$.fragment,o),t=!1},d(o){le(e,o)}}}function Vt(a){let e,t,o,l,f,r,n,s=a[0].label+"",M,q,V,c=parseFloat(a[0].amount).toFixed(2)+"",j,B,F,v=a[1]&&we();return{c(){e=k("div"),t=k("div"),o=k("div"),l=k("img"),r=E(),n=k("div"),M=G(s),q=E(),V=k("div"),j=G(c),B=E(),v&&v.c(),this.h()},l(g){e=b(g,"DIV",{style:!0,class:!0});var T=$(e);t=b(T,"DIV",{style:!0,class:!0});var S=$(t);o=b(S,"DIV",{style:!0});var Y=$(o);l=b(Y,"IMG",{style:!0,src:!0,alt:!0}),Y.forEach(d),r=y(S),n=b(S,"DIV",{style:!0});var Z=$(n);M=N(Z,s),Z.forEach(d),q=y(S),V=b(S,"DIV",{class:!0});var U=$(V);j=N(U,c),U.forEach(d),S.forEach(d),B=y(T),v&&v.l(T),T.forEach(d),this.h()},h(){D(l,"height","100%"),D(l,"width","2.6rem"),D(l,"border-radius","50px"),D(l,"object-fit","cover"),ze(l.src,f=a[0].imgUrl)||W(l,"src",f),W(l,"alt","logo"),D(o,"display","flex"),D(o,"justify-content","space-between"),D(o,"align-items","center"),D(o,"width","2.6rem"),D(o,"height","2.6rem"),D(n,"margin-right","1rem"),W(V,"class","amount-container svelte-9fiaf2"),D(t,"--width","30%"),D(t,"--margin-left",a[2]===0?"0rem":"0.8rem"),W(t,"class",pt("token-container")+" svelte-9fiaf2"),D(e,"height","70%"),D(e,"width","100%"),W(e,"class","svelte-9fiaf2"),Xe(e,"valid",a[1])},m(g,T){R(g,e,T),u(e,t),u(t,o),u(o,l),u(t,r),u(t,n),u(n,M),u(t,q),u(t,V),u(V,j),u(e,B),v&&v.m(e,null),F=!0},p(g,[T]){(!F||T&1&&!ze(l.src,f=g[0].imgUrl))&&W(l,"src",f),(!F||T&1)&&s!==(s=g[0].label+"")&&Ye(M,s),(!F||T&1)&&c!==(c=parseFloat(g[0].amount).toFixed(2)+"")&&Ye(j,c),(!F||T&4)&&D(t,"--margin-left",g[2]===0?"0rem":"0.8rem"),g[1]?v?T&2&&I(v,1):(v=we(),v.c(),I(v,1),v.m(e,null)):v&&(Oe(),C(v,1,1,()=>{v=null}),Ve()),T&2&&Xe(e,"valid",g[1])},i(g){F||(I(v),F=!0)},o(g){C(v),F=!1},d(g){g&&d(e),v&&v.d()}}}function Ft(a,e,t){let{tokenModule:o}=e,{token1valid:l}=e,{i:f}=e;return a.$$set=r=>{"tokenModule"in r&&t(0,o=r.tokenModule),"token1valid"in r&&t(1,l=r.token1valid),"i"in r&&t(2,f=r.i)},[o,l,f]}class St extends nt{constructor(e){super();at(this,e,Ft,Vt,rt,{tokenModule:0,token1valid:1,i:2})}}function et(a,e,t){const o=a.slice();return o[9]=e[t],o}function tt(a,e,t){const o=a.slice();return o[12]=e[t],o[14]=t,o}function jt(a){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function At(a){let e,t,o,l=a[2].name+"",f,r,n,s=a[2].description+"",M,q,V,c,j,B,F,v,g,T,S,Y,Z,U,de,me,x,_e,K,ae,pe,ve,re,ge,he,O,ke,Q,be,$e,z,Ee,ye,ce,w,Ie,fe,Me,Fe,X=a[2].modules.token,h=[];for(let m=0;m<X.length;m+=1)h[m]=ot(tt(a,X,m));const st=m=>C(h[m],1,1,()=>{h[m]=null});let A=a[2].modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"]&&Gt(a),H=a[2].modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsEmeraldID"]&&Wt();Q=new Ze({props:{value:"0.8rem"}});let J=a[2].modules["A.f8d6e0586b0a20c7.GatewayModules.DiscordRoles"]&&qt();z=new Ze({props:{value:"0.8rem"}});let L=a[2].modules["A.f8d6e0586b0a20c7.GatewayModules.TwitterFollows"]&&Pt();function ut(){return a[3](a[2])}return{c(){e=k("article"),t=k("blockquote"),o=k("h1"),f=G(l),r=E(),n=k("p"),M=G(s),q=E(),V=k("h1"),c=G("Tokens"),j=E(),B=k("p"),F=G("Something about the tokens"),v=E(),g=k("div");for(let m=0;m<h.length;m+=1)h[m].c();T=E(),S=k("h1"),Y=G("Collections"),Z=E(),U=k("p"),de=G("Something about the collections"),me=E(),x=k("div"),A&&A.c(),_e=E(),K=k("div"),ae=k("h1"),pe=G("Verification"),ve=E(),re=k("p"),ge=G("Something about the verification"),he=E(),O=k("div"),H&&H.c(),ke=E(),ee(Q.$$.fragment),be=E(),J&&J.c(),$e=E(),ee(z.$$.fragment),Ee=E(),L&&L.c(),ye=E(),ce=k("footer"),w=k("button"),Ie=G("JOIN"),this.h()},l(m){e=b(m,"ARTICLE",{});var i=$(e);t=b(i,"BLOCKQUOTE",{});var p=$(t);o=b(p,"H1",{});var se=$(o);f=N(se,l),se.forEach(d),r=y(p),n=b(p,"P",{});var Se=$(n);M=N(Se,s),Se.forEach(d),p.forEach(d),q=y(i),V=b(i,"H1",{});var je=$(V);c=N(je,"Tokens"),je.forEach(d),j=y(i),B=b(i,"P",{});var Ae=$(B);F=N(Ae,"Something about the tokens"),Ae.forEach(d),v=y(i),g=b(i,"DIV",{style:!0,class:!0});var Ge=$(g);for(let Te=0;Te<h.length;Te+=1)h[Te].l(Ge);Ge.forEach(d),T=y(i),S=b(i,"H1",{});var Ne=$(S);Y=N(Ne,"Collections"),Ne.forEach(d),Z=y(i),U=b(i,"P",{});var We=$(U);de=N(We,"Something about the collections"),We.forEach(d),me=y(i),x=b(i,"DIV",{class:!0});var qe=$(x);A&&A.l(qe),qe.forEach(d),_e=y(i),K=b(i,"DIV",{class:!0,style:!0});var Pe=$(K);ae=b(Pe,"H1",{});var Be=$(ae);pe=N(Be,"Verification"),Be.forEach(d),Pe.forEach(d),ve=y(i),re=b(i,"P",{});var Ue=$(re);ge=N(Ue,"Something about the verification"),Ue.forEach(d),he=y(i),O=b(i,"DIV",{class:!0});var P=$(O);H&&H.l(P),ke=y(P),te(Q.$$.fragment,P),be=y(P),J&&J.l(P),$e=y(P),te(z.$$.fragment,P),Ee=y(P),L&&L.l(P),P.forEach(d),ye=y(i),ce=b(i,"FOOTER",{});var He=$(ce);w=b(He,"BUTTON",{});var Je=$(w);Ie=N(Je,"JOIN"),Je.forEach(d),He.forEach(d),i.forEach(d),this.h()},h(){D(g,"display","flex"),W(g,"class","mt-1"),W(x,"class","mt-1"),W(K,"class","mt-2"),D(K,"display","flex"),W(O,"class","mt-1")},m(m,i){R(m,e,i),u(e,t),u(t,o),u(o,f),u(t,r),u(t,n),u(n,M),u(e,q),u(e,V),u(V,c),u(e,j),u(e,B),u(B,F),u(e,v),u(e,g);for(let p=0;p<h.length;p+=1)h[p].m(g,null);u(e,T),u(e,S),u(S,Y),u(e,Z),u(e,U),u(U,de),u(e,me),u(e,x),A&&A.m(x,null),u(e,_e),u(e,K),u(K,ae),u(ae,pe),u(e,ve),u(e,re),u(re,ge),u(e,he),u(e,O),H&&H.m(O,null),u(O,ke),oe(Q,O,null),u(O,be),J&&J.m(O,null),u(O,$e),oe(z,O,null),u(O,Ee),L&&L.m(O,null),u(e,ye),u(e,ce),u(ce,w),u(w,Ie),fe=!0,Me||(Fe=kt(w,"click",ut),Me=!0)},p(m,i){if(a=m,i&5){X=a[2].modules.token;let p;for(p=0;p<X.length;p+=1){const se=tt(a,X,p);h[p]?(h[p].p(se,i),I(h[p],1)):(h[p]=ot(se),h[p].c(),I(h[p],1),h[p].m(g,null))}for(Oe(),p=X.length;p<h.length;p+=1)st(p);Ve()}a[2].modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"]&&A.p(a,i)},i(m){if(!fe){for(let i=0;i<X.length;i+=1)I(h[i]);I(A),I(Q.$$.fragment,m),I(z.$$.fragment,m),fe=!0}},o(m){h=h.filter(Boolean);for(let i=0;i<h.length;i+=1)C(h[i]);C(A),C(Q.$$.fragment,m),C(z.$$.fragment,m),fe=!1},d(m){m&&d(e),ct(h,m),A&&A.d(),H&&H.d(),le(Q),J&&J.d(),le(z),L&&L.d(),Me=!1,Fe()}}}function ot(a){let e,t;return e=new St({props:{token1valid:a[0],tokenModule:a[12],i:a[14]}}),{c(){ee(e.$$.fragment)},l(o){te(e.$$.fragment,o)},m(o,l){oe(e,o,l),t=!0},p(o,l){const f={};l&1&&(f.token1valid=o[0]),e.$set(f)},i(o){t||(I(e.$$.fragment,o),t=!0)},o(o){C(e.$$.fragment,o),t=!1},d(o){le(e,o)}}}function Gt(a){let e,t,o=a[2].modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"],l=[];for(let r=0;r<o.length;r+=1)l[r]=lt(et(a,o,r));const f=r=>C(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ne()},l(r){for(let n=0;n<l.length;n+=1)l[n].l(r);e=ne()},m(r,n){for(let s=0;s<l.length;s+=1)l[s].m(r,n);R(r,e,n),t=!0},p(r,n){if(n&4){o=r[2].modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"];let s;for(s=0;s<o.length;s+=1){const M=et(r,o,s);l[s]?(l[s].p(M,n),I(l[s],1)):(l[s]=lt(M),l[s].c(),I(l[s],1),l[s].m(e.parentNode,e))}for(Oe(),s=o.length;s<l.length;s+=1)f(s);Ve()}},i(r){if(!t){for(let n=0;n<o.length;n+=1)I(l[n]);t=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)C(l[n]);t=!1},d(r){ct(l,r),r&&d(e)}}}function Nt(a){let e,t,o,l;const f=[a[9]];let r={};for(let n=0;n<f.length;n+=1)r=Et(r,f[n]);return t=new Ct({props:r}),{c(){e=k("div"),ee(t.$$.fragment),o=E(),this.h()},l(n){e=b(n,"DIV",{class:!0});var s=$(e);te(t.$$.fragment,s),o=y(s),s.forEach(d),this.h()},h(){W(e,"class","mt-1")},m(n,s){R(n,e,s),oe(t,e,null),u(e,o),l=!0},p(n,s){const M=s&4?bt(f,[$t(n[9])]):{};t.$set(M)},i(n){l||(I(t.$$.fragment,n),l=!0)},o(n){C(t.$$.fragment,n),l=!1},d(n){n&&d(e),le(t)}}}function lt(a){let e,t,o=a[9].selected&&Nt(a);return{c(){o&&o.c(),e=ne()},l(l){o&&o.l(l),e=ne()},m(l,f){o&&o.m(l,f),R(l,e,f),t=!0},p(l,f){l[9].selected&&o.p(l,f)},i(l){t||(I(o),t=!0)},o(l){C(o),t=!1},d(l){o&&o.d(l),l&&d(e)}}}function Wt(a){return{c:_,l:_,m:_,d:_}}function qt(a){return{c:_,l:_,m:_,d:_}}function Pt(a){return{c:_,l:_,m:_,d:_}}function Bt(a){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function Ut(a){let e,t,o,l,f;t=new Dt({});let r={ctx:a,current:null,token:null,hasCatch:!1,pending:Bt,then:At,catch:jt,value:2,blocks:[,,,]};return vt(a[2],r),{c(){e=E(),ee(t.$$.fragment),o=E(),l=ne(),r.block.c(),this.h()},l(n){gt('[data-svelte="svelte-2bhab6"]',document.head).forEach(d),e=y(n),te(t.$$.fragment,n),o=y(n),l=ne(),r.block.l(n),this.h()},h(){document.title="Whitelist details"},m(n,s){R(n,e,s),oe(t,n,s),R(n,o,s),R(n,l,s),r.block.m(n,r.anchor=s),r.mount=()=>l.parentNode,r.anchor=l,f=!0},p(n,[s]){a=n,ht(r,a,s)},i(n){f||(I(t.$$.fragment,n),I(r.block),f=!0)},o(n){C(t.$$.fragment,n);for(let s=0;s<3;s+=1){const M=r.blocks[s];C(M)}f=!1},d(n){n&&d(e),le(t,n),n&&d(o),n&&d(l),r.block.d(n),r.token=null,r=null}}}function Ht(a,e,t){let o,l,f,r;ie(a,Ce,c=>t(4,o=c)),ie(a,De,c=>t(5,l=c)),ie(a,xe,c=>t(6,f=c)),ie(a,Mt,c=>t(7,r=c));let n=Ot(r.params.address,r.params.whitelistId),s=null;function M(c){const j={variables:{active:c==null?void 0:c.active,dateCreated:c==null?void 0:c.dateCreated,description:c==null?void 0:c.description,extraMetadata:c==null?void 0:c.extraMetadata,host:c==null?void 0:c.host,image:c==null?void 0:c.image,modules:c==null?void 0:c.modules,name:c==null?void 0:c.name,registered:c==null?void 0:c.registered,totalCount:c==null?void 0:c.totalCount,url:c==null?void 0:c.url,uuid:c==null?void 0:c.uuid,whitelistId:c==null?void 0:c.whitelistId},modules:c.modules};console.log("wl",j),ue(xe,f=[...f,j],f)}function q(c){ue(Ce,o=!0,o),ue(De,l=1,l),setTimeout(()=>{t(0,s=!0),ue(De,l=4,l),M(c),ue(Ce,o=!1,o)},2e3),setTimeout(()=>{It("/?tab=joined")},3500)}return[s,q,n,c=>q(c)]}class Yt extends nt{constructor(e){super();at(this,e,Ht,Ut,rt,{})}}export{Yt as default};
