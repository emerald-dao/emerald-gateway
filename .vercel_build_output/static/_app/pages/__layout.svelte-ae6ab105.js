import{S as ce,i as ue,s as _e,e as m,t as L,k as T,c as d,a as k,g as I,d as n,n as N,b as _,f as A,D as c,r as te,u as O,w as le,x,E as Z,F as Te,G as Ne,j as q,m as K,H as re,o as U,I as ae,v as W,J as xe,K as Re,L as oe,l as H,M as fe,h as V,N as Be,O as ze,P as Me,Q as Se,R as Ae,T as je,U as Oe,V as De,A as Ge}from"../chunks/vendor-7812b4f9.js";import{u as qe,t as Ke,a as Ue,b as We}from"../chunks/stores-0e4ffa59.js";import{H as Fe,C as He,U as Ve}from"../chunks/Header.svelte_svelte_type_style_lang-600df42f.js";import{p as Qe}from"../chunks/stores-1420235c.js";import $e from"./MediaQuery.svelte-5251fe83.js";import{t as Je,a as Ze,b as Xe}from"../chunks/stores-72de02c6.js";/* empty css                                                      */import"../chunks/singletons-12a22614.js";function Ye(b){let t,l,e;return l=new Fe({}),{c(){t=m("div"),q(l.$$.fragment),this.h()},l(s){t=d(s,"DIV",{style:!0});var f=k(t);K(l.$$.fragment,f),f.forEach(n),this.h()},h(){re(t,"margin-right","1rem")},m(s,f){A(s,t,f),U(l,t,null),e=!0},p:ae,i(s){e||(x(l.$$.fragment,s),e=!0)},o(s){O(l.$$.fragment,s),e=!1},d(s){s&&n(t),W(l)}}}function et(b){let t,l,e,s,f,p,u,a,o;const v=[lt,tt],S=[];function $(g,E){var i;return(i=g[1])!=null&&i.loggedIn?0:1}return u=$(b),a=S[u]=v[u](b),{c(){t=m("li"),l=m("a"),e=L("Whitelists"),f=T(),p=m("li"),a.c(),this.h()},l(g){t=d(g,"LI",{class:!0});var E=k(t);l=d(E,"A",{href:!0});var i=k(l);e=I(i,"Whitelists"),i.forEach(n),E.forEach(n),f=N(g),p=d(g,"LI",{class:!0});var y=k(p);a.l(y),y.forEach(n),this.h()},h(){_(l,"href",s="/"+b[1].addr+"/whitelists"),_(t,"class","svelte-9oim8o"),_(p,"class","svelte-9oim8o")},m(g,E){A(g,t,E),c(t,l),c(l,e),A(g,f,E),A(g,p,E),S[u].m(p,null),o=!0},p(g,E){(!o||E&2&&s!==(s="/"+g[1].addr+"/whitelists"))&&_(l,"href",s);let i=u;u=$(g),u===i?S[u].p(g,E):(te(),O(S[i],1,1,()=>{S[i]=null}),le(),a=S[u],a?a.p(g,E):(a=S[u]=v[u](g),a.c()),x(a,1),a.m(p,null))},i(g){o||(x(a),o=!0)},o(g){O(a),o=!1},d(g){g&&n(t),g&&n(f),g&&n(p),S[u].d()}}}function tt(b){let t,l;return t=new He({}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},p:ae,i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function lt(b){var p;let t,l,e,s,f;return l=new Ve({props:{address:((p=b[1])==null?void 0:p.addr)||"0x0",abbreviated:!0}}),{c(){t=m("button"),q(l.$$.fragment),this.h()},l(u){t=d(u,"BUTTON",{class:!0});var a=k(t);K(l.$$.fragment,a),a.forEach(n),this.h()},h(){_(t,"class","outline svelte-9oim8o")},m(u,a){A(u,t,a),U(l,t,null),e=!0,s||(f=xe(t,"click",b[2]),s=!0)},p(u,a){var v;const o={};a&2&&(o.address=((v=u[1])==null?void 0:v.addr)||"0x0"),l.$set(o)},i(u){e||(x(l.$$.fragment,u),e=!0)},o(u){O(l.$$.fragment,u),e=!1},d(u){u&&n(t),W(l),s=!1,f()}}}function st(b){let t,l,e,s,f,p,u,a,o,v;const S=[et,Ye],$=[];function g(E,i){return E[0]!=="mobile"?0:1}return a=g(b),o=$[a]=S[a](b),{c(){t=m("nav"),l=m("ul"),e=m("li"),s=m("h3"),f=L("LOGO"),p=T(),u=m("ul"),o.c(),this.h()},l(E){t=d(E,"NAV",{class:!0});var i=k(t);l=d(i,"UL",{});var y=k(l);e=d(y,"LI",{class:!0});var R=k(e);s=d(R,"H3",{});var r=k(s);f=I(r,"LOGO"),r.forEach(n),R.forEach(n),y.forEach(n),p=N(i),u=d(i,"UL",{});var h=k(u);o.l(h),h.forEach(n),i.forEach(n),this.h()},h(){_(e,"class","svelte-9oim8o"),_(t,"class","container")},m(E,i){A(E,t,i),c(t,l),c(l,e),c(e,s),c(s,f),c(t,p),c(t,u),$[a].m(u,null),v=!0},p(E,[i]){let y=a;a=g(E),a===y?$[a].p(E,i):(te(),O($[y],1,1,()=>{$[y]=null}),le(),o=$[a],o?o.p(E,i):(o=$[a]=S[a](E),o.c()),x(o,1),o.m(u,null))},i(E){v||(x(o),v=!0)},o(E){O(o),v=!1},d(E){E&&n(t),$[a].d()}}}function rt(b,t,l){let e;Z(b,qe,u=>l(1,e=u));let{screenSize:s}=t;function f(){e&&e.loggedIn?Te():Ne()}return document.querySelector("html").setAttribute("data-theme","dark"),b.$$set=u=>{"screenSize"in u&&l(0,s=u.screenSize)},[s,e,f]}class ke extends ce{constructor(t){super();ue(this,t,rt,st,_e,{screenSize:0})}}function we(b){let t,l,e,s,f;function p(o,v){return o[1]<0?ut:o[1]<2?ct:o[1]===2?ft:o[1]===3?ot:o[1]===4?it:o[1]===5?nt:at}let u=p(b),a=u(b);return{c(){t=m("article"),l=L(`Transaction status:
    `),a.c(),this.h()},l(o){t=d(o,"ARTICLE",{class:!0});var v=k(t);l=I(v,`Transaction status:
    `),a.l(v),v.forEach(n),this.h()},h(){_(t,"class",e="accent-border "+(b[1]==99?"error":null)+" svelte-11j8u0c")},m(o,v){A(o,t,v),c(t,l),a.m(t,null),f=!0},p(o,v){u===(u=p(o))&&a?a.p(o,v):(a.d(1),a=u(o),a&&(a.c(),a.m(t,null))),(!f||v&2&&e!==(e="accent-border "+(o[1]==99?"error":null)+" svelte-11j8u0c"))&&_(t,"class",e)},i(o){f||(Re(()=>{s||(s=oe(t,fe,{},!0)),s.run(1)}),f=!0)},o(o){s||(s=oe(t,fe,{},!1)),s.run(0),f=!1},d(o){o&&n(t),a.d(),o&&s&&s.end()}}}function at(b){let t,l;return{c(){t=m("span"),l=L("Unexpected parameters were passed into the transaction."),this.h()},l(e){t=d(e,"SPAN",{"data-theme":!0});var s=k(t);l=I(s,"Unexpected parameters were passed into the transaction."),s.forEach(n),this.h()},h(){_(t,"data-theme","invalid")},m(e,s){A(e,t,s),c(t,l)},p:ae,d(e){e&&n(t)}}}function nt(b){var E;let t,l,e=((E=b[2])==null?void 0:E.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Expired"),S=m("br"),$=m("small"),g=L("The transaction was submitted past its expiration block height."),this.h()},l(i){t=d(i,"SPAN",{class:!0});var y=k(t);l=d(y,"A",{href:!0,target:!0});var R=k(l);s=I(R,e),f=I(R,"..."),R.forEach(n),y.forEach(n),u=N(i),a=d(i,"SPAN",{});var r=k(a);o=d(r,"KBD",{});var h=k(o);v=I(h,"Expired"),h.forEach(n),S=d(r,"BR",{}),$=d(r,"SMALL",{class:!0});var P=k($);g=I(P,"The transaction was submitted past its expiration block height."),P.forEach(n),r.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-11j8u0c")},m(i,y){A(i,t,y),c(t,l),c(l,s),c(l,f),A(i,u,y),A(i,a,y),c(a,o),c(o,v),c(a,S),c(a,$),c($,g)},p(i,y){var R;y&4&&e!==(e=((R=i[2])==null?void 0:R.slice(0,8))+"")&&V(s,e),y&4&&p!==(p=`https://testnet.flowscan.org/transaction/${i[2]}`)&&_(l,"href",p)},d(i){i&&n(t),i&&n(u),i&&n(a)}}}function it(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("\u2713 Sealed"),S=m("br"),$=m("small"),g=L(`The verification nodes have verified the transaction, and the seal is
          included in the latest block.`),E=T(),i=m("progress"),y=L("Sealed!"),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"\u2713 Sealed"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,`The verification nodes have verified the transaction, and the seal is
          included in the latest block.`),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(i);y=I(M,"Sealed!"),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-11j8u0c"),_(i,"min","0"),_(i,"max","100"),i.value="100",_(i,"class","svelte-11j8u0c")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function ot(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Executed"),S=m("br"),$=m("small"),g=L("The execution nodes have produced a result for the transaction."),E=T(),i=m("progress"),y=L("Sealing..."),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"Executed"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,"The execution nodes have produced a result for the transaction."),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(i);y=I(M,"Sealing..."),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-11j8u0c"),_(i,"min","0"),_(i,"max","100"),i.value="80",_(i,"class","svelte-11j8u0c")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function ft(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Finalized"),S=m("br"),$=m("small"),g=L(`The consensus nodes have finalized the block that the transaction is
          included in.`),E=T(),i=m("progress"),y=L("Executing..."),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"Finalized"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,`The consensus nodes have finalized the block that the transaction is
          included in.`),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(i);y=I(M,"Executing..."),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-11j8u0c"),_(i,"min","0"),_(i,"max","100"),i.value="80",_(i,"class","svelte-11j8u0c")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function ct(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Pending"),S=m("br"),$=m("small"),g=L(`The transaction has been received by a collector but not yet
          finalized in a block.`),E=T(),i=m("progress"),y=L("Executing"),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"Pending"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,`The transaction has been received by a collector but not yet
          finalized in a block.`),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{indeterminate:!0,class:!0});var M=k(i);y=I(M,"Executing"),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-11j8u0c"),_(i,"indeterminate",""),_(i,"class","svelte-11j8u0c")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function ut(b){let t,l,e,s,f,p,u,a,o;return{c(){t=m("span"),l=m("kbd"),e=L("Initializing"),s=m("br"),f=m("small"),p=L("Waiting for transaction approval."),u=T(),a=m("progress"),o=L("Initializing..."),this.h()},l(v){t=d(v,"SPAN",{});var S=k(t);l=d(S,"KBD",{});var $=k(l);e=I($,"Initializing"),$.forEach(n),s=d(S,"BR",{}),f=d(S,"SMALL",{class:!0});var g=k(f);p=I(g,"Waiting for transaction approval."),g.forEach(n),S.forEach(n),u=N(v),a=d(v,"PROGRESS",{indeterminate:!0,class:!0});var E=k(a);o=I(E,"Initializing..."),E.forEach(n),this.h()},h(){_(f,"class","svelte-11j8u0c"),_(a,"indeterminate",""),_(a,"class","svelte-11j8u0c")},m(v,S){A(v,t,S),c(t,l),c(l,e),c(t,s),c(t,f),c(f,p),A(v,u,S),A(v,a,S),c(a,o)},p:ae,d(v){v&&n(t),v&&n(u),v&&n(a)}}}function _t(b){let t,l,e=b[0]&&we(b);return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,f){e&&e.m(s,f),A(s,t,f),l=!0},p(s,[f]){s[0]?e?(e.p(s,f),f&1&&x(e,1)):(e=we(s),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&n(t)}}}function ht(b,t,l){let e,s,f;return Z(b,Ke,p=>l(0,e=p)),Z(b,Ue,p=>l(1,s=p)),Z(b,We,p=>l(2,f=p)),[e,s,f]}class pt extends ce{constructor(t){super();ue(this,t,ht,_t,_e,{})}}function ye(b){let t,l,e,s,f;function p(o,v){return o[1]<0?Et:o[1]<2?kt:o[1]===2?$t:o[1]===3?bt:o[1]===4?vt:o[1]===5?dt:mt}let u=p(b),a=u(b);return{c(){t=m("article"),l=L(`Transaction status:
  `),a.c(),this.h()},l(o){t=d(o,"ARTICLE",{style:!0,class:!0});var v=k(t);l=I(v,`Transaction status:
  `),a.l(v),v.forEach(n),this.h()},h(){re(t,"width","40%"),_(t,"class",e="accent-border "+(b[1]==99?"error":null)+" svelte-1amyy12")},m(o,v){A(o,t,v),c(t,l),a.m(t,null),f=!0},p(o,v){u===(u=p(o))&&a?a.p(o,v):(a.d(1),a=u(o),a&&(a.c(),a.m(t,null))),(!f||v&2&&e!==(e="accent-border "+(o[1]==99?"error":null)+" svelte-1amyy12"))&&_(t,"class",e)},i(o){f||(Re(()=>{s||(s=oe(t,fe,{},!0)),s.run(1)}),f=!0)},o(o){s||(s=oe(t,fe,{},!1)),s.run(0),f=!1},d(o){o&&n(t),a.d(),o&&s&&s.end()}}}function mt(b){let t,l;return{c(){t=m("span"),l=L("Unexpected parameters were passed into the transaction."),this.h()},l(e){t=d(e,"SPAN",{"data-theme":!0});var s=k(t);l=I(s,"Unexpected parameters were passed into the transaction."),s.forEach(n),this.h()},h(){_(t,"data-theme","invalid")},m(e,s){A(e,t,s),c(t,l)},p:ae,d(e){e&&n(t)}}}function dt(b){var E;let t,l,e=((E=b[2])==null?void 0:E.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Expired"),S=m("br"),$=m("small"),g=L("The transaction was submitted past its expiration block height."),this.h()},l(i){t=d(i,"SPAN",{class:!0});var y=k(t);l=d(y,"A",{href:!0,target:!0});var R=k(l);s=I(R,e),f=I(R,"..."),R.forEach(n),y.forEach(n),u=N(i),a=d(i,"SPAN",{});var r=k(a);o=d(r,"KBD",{});var h=k(o);v=I(h,"Expired"),h.forEach(n),S=d(r,"BR",{}),$=d(r,"SMALL",{class:!0});var P=k($);g=I(P,"The transaction was submitted past its expiration block height."),P.forEach(n),r.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-1amyy12")},m(i,y){A(i,t,y),c(t,l),c(l,s),c(l,f),A(i,u,y),A(i,a,y),c(a,o),c(o,v),c(a,S),c(a,$),c($,g)},p(i,y){var R;y&4&&e!==(e=((R=i[2])==null?void 0:R.slice(0,8))+"")&&V(s,e),y&4&&p!==(p=`https://testnet.flowscan.org/transaction/${i[2]}`)&&_(l,"href",p)},d(i){i&&n(t),i&&n(u),i&&n(a)}}}function vt(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("\u2713 Sealed"),S=m("br"),$=m("small"),g=L(`The verification nodes have verified the transaction, and the seal is
        included in the latest block.`),E=T(),i=m("progress"),y=L("Sealed!"),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"\u2713 Sealed"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,`The verification nodes have verified the transaction, and the seal is
        included in the latest block.`),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(i);y=I(M,"Sealed!"),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-1amyy12"),_(i,"min","0"),_(i,"max","100"),i.value="100",_(i,"class","svelte-1amyy12")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function bt(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Executed"),S=m("br"),$=m("small"),g=L("The execution nodes have produced a result for the transaction."),E=T(),i=m("progress"),y=L("Sealing..."),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"Executed"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,"The execution nodes have produced a result for the transaction."),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(i);y=I(M,"Sealing..."),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-1amyy12"),_(i,"min","0"),_(i,"max","100"),i.value="80",_(i,"class","svelte-1amyy12")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function $t(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Finalized"),S=m("br"),$=m("small"),g=L(`The consensus nodes have finalized the block that the transaction is
        included in.`),E=T(),i=m("progress"),y=L("Executing..."),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"Finalized"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,`The consensus nodes have finalized the block that the transaction is
        included in.`),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(i);y=I(M,"Executing..."),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-1amyy12"),_(i,"min","0"),_(i,"max","100"),i.value="80",_(i,"class","svelte-1amyy12")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function kt(b){var R;let t,l,e=((R=b[2])==null?void 0:R.slice(0,8))+"",s,f,p,u,a,o,v,S,$,g,E,i,y;return{c(){t=m("span"),l=m("a"),s=L(e),f=L("..."),u=T(),a=m("span"),o=m("kbd"),v=L("Pending"),S=m("br"),$=m("small"),g=L(`The transaction has been received by a collector but not yet
        finalized in a block.`),E=T(),i=m("progress"),y=L("Executing"),this.h()},l(r){t=d(r,"SPAN",{class:!0});var h=k(t);l=d(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),f=I(P,"..."),P.forEach(n),h.forEach(n),u=N(r),a=d(r,"SPAN",{});var C=k(a);o=d(C,"KBD",{});var B=k(o);v=I(B,"Pending"),B.forEach(n),S=d(C,"BR",{}),$=d(C,"SMALL",{class:!0});var z=k($);g=I(z,`The transaction has been received by a collector but not yet
        finalized in a block.`),z.forEach(n),C.forEach(n),E=N(r),i=d(r,"PROGRESS",{indeterminate:!0,class:!0});var M=k(i);y=I(M,"Executing"),M.forEach(n),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${b[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_($,"class","svelte-1amyy12"),_(i,"indeterminate",""),_(i,"class","svelte-1amyy12")},m(r,h){A(r,t,h),c(t,l),c(l,s),c(l,f),A(r,u,h),A(r,a,h),c(a,o),c(o,v),c(a,S),c(a,$),c($,g),A(r,E,h),A(r,i,h),c(i,y)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&n(t),r&&n(u),r&&n(a),r&&n(E),r&&n(i)}}}function Et(b){let t,l,e,s,f,p,u,a,o;return{c(){t=m("span"),l=m("kbd"),e=L("Initializing"),s=m("br"),f=m("small"),p=L("Waiting for transaction approval."),u=T(),a=m("progress"),o=L("Initializing..."),this.h()},l(v){t=d(v,"SPAN",{});var S=k(t);l=d(S,"KBD",{});var $=k(l);e=I($,"Initializing"),$.forEach(n),s=d(S,"BR",{}),f=d(S,"SMALL",{class:!0});var g=k(f);p=I(g,"Waiting for transaction approval."),g.forEach(n),S.forEach(n),u=N(v),a=d(v,"PROGRESS",{indeterminate:!0,class:!0});var E=k(a);o=I(E,"Initializing..."),E.forEach(n),this.h()},h(){_(f,"class","svelte-1amyy12"),_(a,"indeterminate",""),_(a,"class","svelte-1amyy12")},m(v,S){A(v,t,S),c(t,l),c(l,e),c(t,s),c(t,f),c(f,p),A(v,u,S),A(v,a,S),c(a,o)},p:ae,d(v){v&&n(t),v&&n(u),v&&n(a)}}}function gt(b){let t,l,e=b[0]&&ye(b);return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,f){e&&e.m(s,f),A(s,t,f),l=!0},p(s,[f]){s[0]?e?(e.p(s,f),f&1&&x(e,1)):(e=ye(s),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&n(t)}}}function St(b,t,l){let e,s,f;return Z(b,Je,p=>l(0,e=p)),Z(b,Ze,p=>l(1,s=p)),Z(b,Xe,p=>l(2,f=p)),[e,s,f]}class At extends ce{constructor(t){super();ue(this,t,St,gt,_e,{})}}function Pe(b){let t,l;return t=new ke({props:{screenSize:"desktop"}}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function wt(b){let t,l,e=b[3]&&Pe();return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,f){e&&e.m(s,f),A(s,t,f),l=!0},p(s,f){s[3]?e?f&8&&x(e,1):(e=Pe(),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&n(t)}}}function Le(b){let t,l;return t=new ke({props:{screenSize:"tablet"}}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function yt(b){let t,l,e=b[3]&&Le();return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,f){e&&e.m(s,f),A(s,t,f),l=!0},p(s,f){s[3]?e?f&8&&x(e,1):(e=Le(),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&n(t)}}}function Ie(b){let t,l;return t=new ke({props:{screenSize:"mobile"}}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function Pt(b){let t,l,e=b[3]&&Ie();return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,f){e&&e.m(s,f),A(s,t,f),l=!0},p(s,f){s[3]?e?f&8&&x(e,1):(e=Ie(),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&n(t)}}}function Ce(b){let t,l,e,s,f;return{c(){t=m("small"),l=L(`Live claiming feed powered by
      `),e=m("a"),s=m("img"),this.h()},l(p){t=d(p,"SMALL",{class:!0});var u=k(t);l=I(u,`Live claiming feed powered by
      `),e=d(u,"A",{href:!0,target:!0,class:!0});var a=k(e);s=d(a,"IMG",{class:!0,src:!0,alt:!0}),a.forEach(n),u.forEach(n),this.h()},h(){_(s,"class","graffle svelte-j5rx0t"),Me(s.src,f="/graffle-logo.png")||_(s,"src",f),_(s,"alt","Graffle logo"),_(e,"href","https://graffle.io"),_(e,"target","_blank"),_(e,"class","svelte-j5rx0t"),_(t,"class","graffle svelte-j5rx0t")},m(p,u){A(p,t,u),c(t,l),c(t,e),c(e,s)},d(p){p&&n(t)}}}function Lt(b){let t,l,e,s,f,p,u,a,o,v,S,$,g,E,i,y,R,r,h,P,C,B,z,M,he,X,pe,Q,F,J,me,se;t=new $e({props:{query:"(min-width: 1281px)",$$slots:{default:[wt,({matches:w})=>({3:w}),({matches:w})=>w?8:0]},$$scope:{ctx:b}}}),e=new $e({props:{query:"(min-width: 481px) and (max-width: 1280px)",$$slots:{default:[yt,({matches:w})=>({3:w}),({matches:w})=>w?8:0]},$$scope:{ctx:b}}}),f=new $e({props:{query:"(max-width: 480px)",$$slots:{default:[Pt,({matches:w})=>({3:w}),({matches:w})=>w?8:0]},$$scope:{ctx:b}}}),a=new Be({});const de=b[1].default,G=ze(de,b,b[2],null);S=new pt({}),E=new At({});let D=b[0].path==="/live"&&Ce();return{c(){q(t.$$.fragment),l=T(),q(e.$$.fragment),s=T(),q(f.$$.fragment),p=T(),u=m("main"),q(a.$$.fragment),o=T(),G&&G.c(),v=T(),q(S.$$.fragment),$=T(),g=m("div"),q(E.$$.fragment),i=T(),y=m("footer"),D&&D.c(),R=T(),r=m("p"),h=m("small"),P=L(`Created by
      `),C=m("a"),B=L("Emerald City DAO"),z=T(),M=m("br"),he=T(),X=m("span"),pe=L(`Contribute on
        `),Q=m("a"),F=Se("svg"),J=Se("path"),me=L(" Github"),this.h()},l(w){K(t.$$.fragment,w),l=N(w),K(e.$$.fragment,w),s=N(w),K(f.$$.fragment,w),p=N(w),u=d(w,"MAIN",{class:!0});var j=k(u);K(a.$$.fragment,j),o=N(j),G&&G.l(j),v=N(j),K(S.$$.fragment,j),j.forEach(n),$=N(w),g=d(w,"DIV",{style:!0});var ne=k(g);K(E.$$.fragment,ne),ne.forEach(n),i=N(w),y=d(w,"FOOTER",{class:!0});var Y=k(y);D&&D.l(Y),R=N(Y),r=d(Y,"P",{class:!0});var ie=k(r);h=d(ie,"SMALL",{});var ee=k(h);P=I(ee,`Created by
      `),C=d(ee,"A",{href:!0,target:!0,class:!0});var Ee=k(C);B=I(Ee,"Emerald City DAO"),Ee.forEach(n),z=N(ee),M=d(ee,"BR",{}),he=N(ee),X=d(ee,"SPAN",{class:!0});var ve=k(X);pe=I(ve,`Contribute on
        `),Q=d(ve,"A",{href:!0,target:!0,class:!0});var be=k(Q);F=Ae(be,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var ge=k(F);J=Ae(ge,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0,fill:!0}),k(J).forEach(n),ge.forEach(n),me=I(be," Github"),be.forEach(n),ve.forEach(n),ee.forEach(n),ie.forEach(n),Y.forEach(n),this.h()},h(){_(u,"class","container"),re(g,"position","sticky"),re(g,"bottom","140px"),re(g,"left","10px"),re(g,"height","6rem"),_(C,"href","https://discord.gg/emeraldcity"),_(C,"target","_blank"),_(C,"class","svelte-j5rx0t"),_(J,"fill-rule","evenodd"),_(J,"clip-rule","evenodd"),_(J,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),_(J,"transform","scale(64)"),_(J,"fill","currentColor"),_(F,"width","16"),_(F,"height","16"),_(F,"viewBox","0 0 1024 1024"),_(F,"fill","none"),_(F,"xmlns","http://www.w3.org/2000/svg"),_(Q,"href","https://github.com/muttoni/float"),_(Q,"target","_blank"),_(Q,"class","svelte-j5rx0t"),_(X,"class","contribute"),_(r,"class","svelte-j5rx0t"),_(y,"class","svelte-j5rx0t")},m(w,j){U(t,w,j),A(w,l,j),U(e,w,j),A(w,s,j),U(f,w,j),A(w,p,j),A(w,u,j),U(a,u,null),c(u,o),G&&G.m(u,null),c(u,v),U(S,u,null),A(w,$,j),A(w,g,j),U(E,g,null),A(w,i,j),A(w,y,j),D&&D.m(y,null),c(y,R),c(y,r),c(r,h),c(h,P),c(h,C),c(C,B),c(h,z),c(h,M),c(h,he),c(h,X),c(X,pe),c(X,Q),c(Q,F),c(F,J),c(Q,me),se=!0},p(w,[j]){const ne={};j&12&&(ne.$$scope={dirty:j,ctx:w}),t.$set(ne);const Y={};j&12&&(Y.$$scope={dirty:j,ctx:w}),e.$set(Y);const ie={};j&12&&(ie.$$scope={dirty:j,ctx:w}),f.$set(ie),G&&G.p&&(!se||j&4)&&je(G,de,w,w[2],se?De(de,w[2],j,null):Oe(w[2]),null),w[0].path==="/live"?D||(D=Ce(),D.c(),D.m(y,R)):D&&(D.d(1),D=null)},i(w){se||(x(t.$$.fragment,w),x(e.$$.fragment,w),x(f.$$.fragment,w),x(a.$$.fragment,w),x(G,w),x(S.$$.fragment,w),x(E.$$.fragment,w),se=!0)},o(w){O(t.$$.fragment,w),O(e.$$.fragment,w),O(f.$$.fragment,w),O(a.$$.fragment,w),O(G,w),O(S.$$.fragment,w),O(E.$$.fragment,w),se=!1},d(w){W(t,w),w&&n(l),W(e,w),w&&n(s),W(f,w),w&&n(p),w&&n(u),W(a),G&&G.d(w),W(S),w&&n($),w&&n(g),W(E),w&&n(i),w&&n(y),D&&D.d()}}}function It(b,t,l){let e;Z(b,Qe,p=>l(0,e=p));let{$$slots:s={},$$scope:f}=t;return Ge(()=>{let p=localStorage.getItem("theme");p&&(console.log("retrieving saved theme preference"),document.querySelector("html").setAttribute("data-theme",p))}),b.$$set=p=>{"$$scope"in p&&l(2,f=p.$$scope)},[e,s,f]}class jt extends ce{constructor(t){super();ue(this,t,It,Lt,_e,{})}}export{jt as default};
