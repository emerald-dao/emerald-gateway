import{S as Pe,i as Ae,s as Ge,l as ie,f as Y,e as I,k as w,t as J,c as C,a as T,d as p,n as D,g as K,L as j,Q as we,b as B,a6 as Me,D as a,h as se,x as d,j as Z,m as x,o as ee,p as ae,q as ce,u as q,v as te,w as Qe,a2 as Re,a5 as De,B as fe,r as Ue}from"../chunks/vendor-59f8b443.js";import{V as Ie,t as ze,a as Fe,c as Je,e as Ke,d as Oe,b as We,C as Xe,f as de}from"../chunks/VerificationComponent-ec3f06dc.js";function Ce(s,t,l){const e=s.slice();return e[7]=t[l],e}function je(s,t,l){const e=s.slice();return e[10]=t[l].imgUrl,e[11]=t[l].label,e[12]=t[l].amount,e[13]=t[l].selected,e[14]=t[l].id,e}function Te(s){let t,l,e,i,o,f,c=s[11]+"",h,u,y,L=s[12]+"",H,A,le;return{c(){t=I("div"),l=I("div"),e=I("img"),o=w(),f=I("div"),h=J(c),u=w(),y=I("div"),H=J(L),A=w(),this.h()},l(v){t=C(v,"DIV",{style:!0,class:!0});var g=T(t);l=C(g,"DIV",{style:!0});var N=T(l);e=C(N,"IMG",{style:!0,src:!0,alt:!0}),N.forEach(p),o=D(g),f=C(g,"DIV",{style:!0});var O=T(f);h=K(O,c),O.forEach(p),u=D(g),y=C(g,"DIV",{class:!0});var W=T(y);H=K(W,L),W.forEach(p),A=D(g),g.forEach(p),this.h()},h(){j(e,"height","100%"),j(e,"width","2.6rem"),j(e,"border-radius","50px"),j(e,"object-fit","cover"),we(e.src,i=s[10])||B(e,"src",i),B(e,"alt","logo"),j(l,"display","flex"),j(l,"justify-content","space-between"),j(l,"align-items","center"),j(l,"width","2.6rem"),j(l,"height","2.6rem"),j(f,"margin-right","1rem"),B(y,"class","amount-container svelte-1v562r5"),j(t,"--width","30%"),j(t,"--margin-left",s[14]===0?"0rem":"0.8rem"),B(t,"class",le=Me("token-container")+" svelte-1v562r5")},m(v,g){Y(v,t,g),a(t,l),a(l,e),a(t,o),a(t,f),a(f,h),a(t,u),a(t,y),a(y,H),a(t,A)},p(v,g){g&2&&!we(e.src,i=v[10])&&B(e,"src",i),g&2&&c!==(c=v[11]+"")&&se(h,c),g&2&&L!==(L=v[12]+"")&&se(H,L),g&2&&j(t,"--margin-left",v[14]===0?"0rem":"0.8rem")},d(v){v&&p(t)}}}function qe(s){let t,l=(s[13]||!0)&&Te(s);return{c(){l&&l.c(),t=ie()},l(e){l&&l.l(e),t=ie()},m(e,i){l&&l.m(e,i),Y(e,t,i)},p(e,i){e[13],l?l.p(e,i):(l=Te(e),l.c(),l.m(t.parentNode,t))},d(e){l&&l.d(e),e&&p(t)}}}function ye(s){let t,l,e,i;const o=[s[7]];let f={};for(let c=0;c<o.length;c+=1)f=fe(f,o[c]);return l=new Xe({props:f}),{c(){t=I("div"),Z(l.$$.fragment),e=w(),this.h()},l(c){t=C(c,"DIV",{class:!0});var h=T(t);x(l.$$.fragment,h),e=D(h),h.forEach(p),this.h()},h(){B(t,"class","mt-1")},m(c,h){Y(c,t,h),ee(l,t,null),a(t,e),i=!0},p(c,h){const u=h&4?ae(o,[ce(c[7])]):{};l.$set(u)},i(c){i||(d(l.$$.fragment,c),i=!0)},o(c){q(l.$$.fragment,c),i=!1},d(c){c&&p(t),te(l)}}}function He(s){let t,l,e=(s[7].selected||!0)&&ye(s);return{c(){e&&e.c(),t=ie()},l(i){e&&e.l(i),t=ie()},m(i,o){e&&e.m(i,o),Y(i,t,o),l=!0},p(i,o){i[7].selected,e?(e.p(i,o),o&4&&d(e,1)):(e=ye(i),e.c(),d(e,1),e.m(t.parentNode,t))},i(i){l||(d(e),l=!0)},o(i){q(e),l=!1},d(i){e&&e.d(i),i&&p(t)}}}function Se(s){let t,l;const e=[s[3]];let i={};for(let o=0;o<e.length;o+=1)i=fe(i,e[o]);return t=new de({props:i}),{c(){Z(t.$$.fragment)},l(o){x(t.$$.fragment,o)},m(o,f){ee(t,o,f),l=!0},p(o,f){const c=f&8?ae(e,[ce(o[3])]):{};t.$set(c)},i(o){l||(d(t.$$.fragment,o),l=!0)},o(o){q(t.$$.fragment,o),l=!1},d(o){te(t,o)}}}function Be(s){let t,l;const e=[s[4]];let i={};for(let o=0;o<e.length;o+=1)i=fe(i,e[o]);return t=new de({props:i}),{c(){Z(t.$$.fragment)},l(o){x(t.$$.fragment,o)},m(o,f){ee(t,o,f),l=!0},p(o,f){const c=f&16?ae(e,[ce(o[4])]):{};t.$set(c)},i(o){l||(d(t.$$.fragment,o),l=!0)},o(o){q(t.$$.fragment,o),l=!1},d(o){te(t,o)}}}function Le(s){let t,l;const e=[s[5]];let i={};for(let o=0;o<e.length;o+=1)i=fe(i,e[o]);return t=new de({props:i}),{c(){Z(t.$$.fragment)},l(o){x(t.$$.fragment,o)},m(o,f){ee(t,o,f),l=!0},p(o,f){const c=f&32?ae(e,[ce(o[5])]):{};t.$set(c)},i(o){l||(d(t.$$.fragment,o),l=!0)},o(o){q(t.$$.fragment,o),l=!1},d(o){te(t,o)}}}function Ye(s){let t,l,e,i,o=s[0].name+"",f,c,h,u=s[0].description+"",y,L,H,A,le,v,g,N,O,W,G,_e,M,oe,ue,me,b,re,Q,pe,ne,R,he,U;document.title=t=s[0].name+" details";let X=s[1],E=[];for(let r=0;r<X.length;r+=1)E[r]=qe(je(s,X,r));let z=s[2],m=[];for(let r=0;r<z.length;r+=1)m[r]=He(Ce(s,z,r));const Ne=r=>q(m[r],1,1,()=>{m[r]=null});let $=(s[3].active||!0)&&Se(s);Q=new Ie({props:{value:"0.8rem"}});let k=(s[4].active||!0)&&Be(s);R=new Ie({props:{value:"0.8rem"}});let V=(s[5].active||!0)&&Le(s);return{c(){l=w(),e=I("article"),i=I("h1"),f=J(o),c=w(),h=I("p"),y=J(u),L=w(),H=I("h1"),A=J("Tokens"),le=w(),v=I("div");for(let r=0;r<E.length;r+=1)E[r].c();g=w(),N=I("h1"),O=J("Collections"),W=w(),G=I("div");for(let r=0;r<m.length;r+=1)m[r].c();_e=w(),M=I("div"),oe=I("h1"),ue=J("Verification"),me=w(),b=I("div"),$&&$.c(),re=w(),Z(Q.$$.fragment),pe=w(),k&&k.c(),ne=w(),Z(R.$$.fragment),he=w(),V&&V.c(),this.h()},l(r){Re('[data-svelte="svelte-14j8a1g"]',document.head).forEach(p),l=D(r),e=C(r,"ARTICLE",{});var n=T(e);i=C(n,"H1",{});var P=T(i);f=K(P,o),P.forEach(p),c=D(n),h=C(n,"P",{});var ve=T(h);y=K(ve,u),ve.forEach(p),L=D(n),H=C(n,"H1",{});var ge=T(H);A=K(ge,"Tokens"),ge.forEach(p),le=D(n),v=C(n,"DIV",{style:!0,class:!0});var be=T(v);for(let F=0;F<E.length;F+=1)E[F].l(be);be.forEach(p),g=D(n),N=C(n,"H1",{});var $e=T(N);O=K($e,"Collections"),$e.forEach(p),W=D(n),G=C(n,"DIV",{class:!0});var ke=T(G);for(let F=0;F<m.length;F+=1)m[F].l(ke);ke.forEach(p),_e=D(n),M=C(n,"DIV",{class:!0,style:!0});var Ve=T(M);oe=C(Ve,"H1",{});var Ee=T(oe);ue=K(Ee,"Verification"),Ee.forEach(p),Ve.forEach(p),me=D(n),b=C(n,"DIV",{class:!0});var S=T(b);$&&$.l(S),re=D(S),x(Q.$$.fragment,S),pe=D(S),k&&k.l(S),ne=D(S),x(R.$$.fragment,S),he=D(S),V&&V.l(S),S.forEach(p),n.forEach(p),this.h()},h(){j(v,"display","flex"),B(v,"class","mt-1"),B(G,"class","mt-1"),B(M,"class","mt-2"),j(M,"display","flex"),B(b,"class","mt-1")},m(r,_){Y(r,l,_),Y(r,e,_),a(e,i),a(i,f),a(e,c),a(e,h),a(h,y),a(e,L),a(e,H),a(H,A),a(e,le),a(e,v);for(let n=0;n<E.length;n+=1)E[n].m(v,null);a(e,g),a(e,N),a(N,O),a(e,W),a(e,G);for(let n=0;n<m.length;n+=1)m[n].m(G,null);a(e,_e),a(e,M),a(M,oe),a(oe,ue),a(e,me),a(e,b),$&&$.m(b,null),a(b,re),ee(Q,b,null),a(b,pe),k&&k.m(b,null),a(b,ne),ee(R,b,null),a(b,he),V&&V.m(b,null),U=!0},p(r,[_]){if((!U||_&1)&&t!==(t=r[0].name+" details")&&(document.title=t),(!U||_&1)&&o!==(o=r[0].name+"")&&se(f,o),(!U||_&1)&&u!==(u=r[0].description+"")&&se(y,u),_&2){X=r[1];let n;for(n=0;n<X.length;n+=1){const P=je(r,X,n);E[n]?E[n].p(P,_):(E[n]=qe(P),E[n].c(),E[n].m(v,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=X.length}if(_&4){z=r[2];let n;for(n=0;n<z.length;n+=1){const P=Ce(r,z,n);m[n]?(m[n].p(P,_),d(m[n],1)):(m[n]=He(P),m[n].c(),d(m[n],1),m[n].m(G,null))}for(Ue(),n=z.length;n<m.length;n+=1)Ne(n);Qe()}r[3].active,$?($.p(r,_),_&8&&d($,1)):($=Se(r),$.c(),d($,1),$.m(b,re)),r[4].active,k?(k.p(r,_),_&16&&d(k,1)):(k=Be(r),k.c(),d(k,1),k.m(b,ne)),r[5].active,V?(V.p(r,_),_&32&&d(V,1)):(V=Le(r),V.c(),d(V,1),V.m(b,null))},i(r){if(!U){for(let _=0;_<z.length;_+=1)d(m[_]);d($),d(Q.$$.fragment,r),d(k),d(R.$$.fragment,r),d(V),U=!0}},o(r){m=m.filter(Boolean);for(let _=0;_<m.length;_+=1)q(m[_]);q($),q(Q.$$.fragment,r),q(k),q(R.$$.fragment,r),q(V),U=!1},d(r){r&&p(l),r&&p(e),De(E,r),De(m,r),$&&$.d(),te(Q),k&&k.d(),te(R),V&&V.d()}}}function Ze(s,t,l){let e,i,o,f,c,h;return ze.subscribe(u=>l(0,e=u)),Fe.subscribe(u=>l(1,i=u)),Je.subscribe(u=>l(2,o=u)),Ke.subscribe(u=>l(3,f=u)),Oe.subscribe(u=>l(4,c=u)),We.subscribe(u=>l(5,h=u)),[e,i,o,f,c,h]}class tt extends Pe{constructor(t){super();Ae(this,t,Ze,Ye,Ge,{})}}export{tt as default};