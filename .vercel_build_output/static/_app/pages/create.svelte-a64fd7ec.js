import{S as bt,i as _t,s as ht,e as d,t as T,k as C,j as ct,c as m,a as _,g as E,d as n,n as O,m as ft,b as u,f as A,D as l,o as dt,x as Ne,u as De,v as mt,a2 as vt,a4 as M,a5 as $,E as Y,w as yt,a6 as Qe,K as Fe,A as Tt,r as Et,L as ue,aa as pt,G as Se,ab as tt,l as lt,h as At,a3 as Lt}from"../chunks/vendor-44e19924.js";import{h as Q,i as kt,a as Ct,t as Ot,u as wt,j as Ft,k as Nt}from"../chunks/actions-5a0281a3.js";import{P as at}from"../chunks/constants-358452f5.js";import{L as St}from"../chunks/LibLoader-99fa7df4.js";import{F as It}from"../chunks/Float-4a1ca74a.js";function Pt(i){let t,a;return{c(){t=d("p"),a=T("IPFS not loaded")},l(e){t=m(e,"P",{});var s=_(t);a=E(s,"IPFS not loaded"),s.forEach(n)},m(e,s){A(e,t,s),l(t,a)},p:Se,d(e){e&&n(t)}}}function Ut(i){let t,a,e,s,b,o,p,c,r=i[1]&&nt(i),v=i[3]&&st();return{c(){t=d("label"),a=T(`Event Image
        `),e=d("input"),b=C(),r&&r.c(),o=C(),v&&v.c(),this.h()},l(L){t=m(L,"LABEL",{for:!0});var y=_(t);a=E(y,`Event Image
        `),e=m(y,"INPUT",{"aria-busy":!0,type:!0,id:!0,name:!0,accept:!0}),b=O(y),r&&r.l(y),o=O(y),v&&v.l(y),y.forEach(n),this.h()},h(){u(e,"aria-busy",s=!!i[1]),u(e,"type","file"),u(e,"id","image"),u(e,"name","image"),u(e,"accept","image/png, image/gif, image/jpeg"),u(t,"for","image")},m(L,y){A(L,t,y),l(t,a),l(t,e),l(t,b),r&&r.m(t,null),l(t,o),v&&v.m(t,null),p||(c=Y(e,"change",i[18]),p=!0)},p(L,y){y[0]&2&&s!==(s=!!L[1])&&u(e,"aria-busy",s),L[1]?r?r.p(L,y):(r=nt(L),r.c(),r.m(t,o)):r&&(r.d(1),r=null),L[3]?v||(v=st(),v.c(),v.m(t,null)):v&&(v.d(1),v=null)},d(L){L&&n(t),r&&r.d(),v&&v.d(),p=!1,c()}}}function nt(i){let t,a;return{c(){t=d("progress"),this.h()},l(e){t=m(e,"PROGRESS",{max:!0}),_(t).forEach(n),this.h()},h(){t.value=a=i[2]*100,u(t,"max","100")},m(e,s){A(e,t,s)},p(e,s){s[0]&4&&a!==(a=e[2]*100)&&(t.value=a)},d(e){e&&n(t)}}}function st(i){let t,a;return{c(){t=d("small"),a=T("\u2713 Image uploaded successfully to IPFS!")},l(e){t=m(e,"SMALL",{});var s=_(t);a=E(s,"\u2713 Image uploaded successfully to IPFS!"),s.forEach(n)},m(e,s){A(e,t,s),l(t,a)},d(e){e&&n(t)}}}function it(i){var c;let t,a,e,s,b,o,p;return s=new It({props:{float:{eventMetadata:{name:i[5].name,totalSupply:"SERIAL_NUM",image:i[5].ipfsHash},eventHost:((c=i[7])==null?void 0:c.addr)||"0x0000000000"},preview:!0}}),{c(){t=d("h3"),a=T("Preview"),e=C(),ct(s.$$.fragment),b=C(),o=d("div"),this.h()},l(r){t=m(r,"H3",{});var v=_(t);a=E(v,"Preview"),v.forEach(n),e=O(r),ft(s.$$.fragment,r),b=O(r),o=m(r,"DIV",{class:!0}),_(o).forEach(n),this.h()},h(){u(o,"class","mb-2")},m(r,v){A(r,t,v),l(t,a),A(r,e,v),dt(s,r,v),A(r,b,v),A(r,o,v),p=!0},p(r,v){var y;const L={};v[0]&160&&(L.float={eventMetadata:{name:r[5].name,totalSupply:"SERIAL_NUM",image:r[5].ipfsHash},eventHost:((y=r[7])==null?void 0:y.addr)||"0x0000000000"}),s.$set(L)},i(r){p||(Ne(s.$$.fragment,r),p=!0)},o(r){De(s.$$.fragment,r),p=!1},d(r){r&&n(t),r&&n(e),mt(s,r),r&&n(b),r&&n(o)}}}function gt(i){let t,a,e,s,b,o;return{c(){t=d("h5"),a=T("This is how you would distribute your FLOAT to a user in Cadence:"),e=C(),s=d("xmp"),b=T(i[14]),this.h()},l(p){t=m(p,"H5",{class:!0});var c=_(t);a=E(c,"This is how you would distribute your FLOAT to a user in Cadence:"),c.forEach(n),e=O(p),s=m(p,"XMP",{class:!0});var r=_(s);b=E(r,i[14]),r.forEach(n),this.h()},h(){u(t,"class","svelte-44wbyu"),u(s,"class",o=tt(i[6]==="light"?"xmp-light":"xmp-dark")+" svelte-44wbyu")},m(p,c){A(p,t,c),l(t,a),A(p,e,c),A(p,s,c),l(s,b)},p(p,c){c[0]&64&&o!==(o=tt(p[6]==="light"?"xmp-light":"xmp-dark")+" svelte-44wbyu")&&u(s,"class",o)},d(p){p&&n(t),p&&n(e),p&&n(s)}}}function Rt(i){let t,a,e,s,b,o,p,c,r,v,L,y,q,N,x,P,I,S,U,H,le,ce,ne,W,K,X,J,j,me,ae,z,pe,G,be,Z,F,ee,he,g=i[5].quantity&&rt(i),R=i[5].timelock&&ot(i),w=i[5].claimCodeEnabled&&ut(i);return{c(){t=d("div"),a=d("button"),e=T(`Unlimited Quantity
          `),s=d("span"),b=T(`Select this if you don't want your FLOAT to have a limited
            quantity.`),o=C(),p=d("button"),c=T(`Limited Quantity
          `),r=d("span"),v=T("You can set the maximum number of times the FLOAT can be minted."),L=C(),g&&g.c(),y=C(),q=d("div"),N=d("button"),x=T(`No Time Limit
          `),P=d("span"),I=T("Can be minted at any point in the future."),S=C(),U=d("button"),H=T(`Time Limit
          `),le=d("span"),ce=T("Can only be minted between a specific time interval."),ne=C(),R&&R.c(),W=C(),K=d("div"),X=d("button"),J=T(`Anyone Can Claim
          `),j=d("span"),me=T("Your FLOAT can be minted freely by anyone that knows its address."),ae=C(),z=d("button"),pe=T(`Use Claim Code
          `),G=d("span"),be=T("Your FLOAT can only be minted if people know the claim code."),Z=C(),w&&w.c(),F=lt(),this.h()},l(f){t=m(f,"DIV",{class:!0});var k=_(t);a=m(k,"BUTTON",{class:!0});var fe=_(a);e=E(fe,`Unlimited Quantity
          `),s=m(fe,"SPAN",{class:!0});var Ae=_(s);b=E(Ae,`Select this if you don't want your FLOAT to have a limited
            quantity.`),Ae.forEach(n),fe.forEach(n),o=O(k),p=m(k,"BUTTON",{class:!0});var ye=_(p);c=E(ye,`Limited Quantity
          `),r=m(ye,"SPAN",{class:!0});var te=_(r);v=E(te,"You can set the maximum number of times the FLOAT can be minted."),te.forEach(n),ye.forEach(n),k.forEach(n),L=O(f),g&&g.l(f),y=O(f),q=m(f,"DIV",{class:!0});var ve=_(q);N=m(ve,"BUTTON",{class:!0});var de=_(N);x=E(de,`No Time Limit
          `),P=m(de,"SPAN",{class:!0});var Le=_(P);I=E(Le,"Can be minted at any point in the future."),Le.forEach(n),de.forEach(n),S=O(ve),U=m(ve,"BUTTON",{class:!0});var Te=_(U);H=E(Te,`Time Limit
          `),le=m(Te,"SPAN",{class:!0});var Ee=_(le);ce=E(Ee,"Can only be minted between a specific time interval."),Ee.forEach(n),Te.forEach(n),ve.forEach(n),ne=O(f),R&&R.l(f),W=O(f),K=m(f,"DIV",{class:!0});var se=_(K);X=m(se,"BUTTON",{class:!0});var _e=_(X);J=E(_e,`Anyone Can Claim
          `),j=m(_e,"SPAN",{class:!0});var ke=_(j);me=E(ke,"Your FLOAT can be minted freely by anyone that knows its address."),ke.forEach(n),_e.forEach(n),ae=O(se),z=m(se,"BUTTON",{class:!0});var Ce=_(z);pe=E(Ce,`Use Claim Code
          `),G=m(Ce,"SPAN",{class:!0});var Oe=_(G);be=E(Oe,"Your FLOAT can only be minted if people know the claim code."),Oe.forEach(n),Ce.forEach(n),se.forEach(n),Z=O(f),w&&w.l(f),F=lt(),this.h()},h(){u(s,"class","svelte-44wbyu"),u(a,"class","outline svelte-44wbyu"),M(a,"secondary",i[5].quantity),u(r,"class","svelte-44wbyu"),u(p,"class","outline svelte-44wbyu"),M(p,"secondary",!i[5].quantity),u(t,"class","grid no-break mb-1"),u(P,"class","svelte-44wbyu"),u(N,"class","outline svelte-44wbyu"),M(N,"secondary",i[5].timelock),u(le,"class","svelte-44wbyu"),u(U,"class","outline svelte-44wbyu"),M(U,"secondary",!i[5].timelock),u(q,"class","grid no-break mb-1"),u(j,"class","svelte-44wbyu"),u(X,"class","outline svelte-44wbyu"),M(X,"secondary",i[5].claimCodeEnabled),u(G,"class","svelte-44wbyu"),u(z,"class","outline svelte-44wbyu"),M(z,"secondary",!i[5].claimCodeEnabled),u(K,"class","grid no-break mb-1")},m(f,k){A(f,t,k),l(t,a),l(a,e),l(a,s),l(s,b),l(t,o),l(t,p),l(p,c),l(p,r),l(r,v),A(f,L,k),g&&g.m(f,k),A(f,y,k),A(f,q,k),l(q,N),l(N,x),l(N,P),l(P,I),l(q,S),l(q,U),l(U,H),l(U,le),l(le,ce),A(f,ne,k),R&&R.m(f,k),A(f,W,k),A(f,K,k),l(K,X),l(X,J),l(X,j),l(j,me),l(K,ae),l(K,z),l(z,pe),l(z,G),l(G,be),A(f,Z,k),w&&w.m(f,k),A(f,F,k),ee||(he=[Y(a,"click",i[23]),Y(p,"click",i[24]),Y(N,"click",i[26]),Y(U,"click",i[27]),Y(X,"click",i[30]),Y(z,"click",i[31])],ee=!0)},p(f,k){k[0]&32&&M(a,"secondary",f[5].quantity),k[0]&32&&M(p,"secondary",!f[5].quantity),f[5].quantity?g?g.p(f,k):(g=rt(f),g.c(),g.m(y.parentNode,y)):g&&(g.d(1),g=null),k[0]&32&&M(N,"secondary",f[5].timelock),k[0]&32&&M(U,"secondary",!f[5].timelock),f[5].timelock?R?R.p(f,k):(R=ot(f),R.c(),R.m(W.parentNode,W)):R&&(R.d(1),R=null),k[0]&32&&M(X,"secondary",f[5].claimCodeEnabled),k[0]&32&&M(z,"secondary",!f[5].claimCodeEnabled),f[5].claimCodeEnabled?w?w.p(f,k):(w=ut(f),w.c(),w.m(F.parentNode,F)):w&&(w.d(1),w=null)},d(f){f&&n(t),f&&n(L),g&&g.d(f),f&&n(y),f&&n(q),f&&n(ne),R&&R.d(f),f&&n(W),f&&n(K),f&&n(Z),w&&w.d(f),f&&n(F),ee=!1,Qe(he)}}}function rt(i){let t,a,e,s,b,o,p;return{c(){t=d("label"),a=T(`How many can be claimed?
          `),e=d("input"),s=C(),b=d("hr"),this.h()},l(c){t=m(c,"LABEL",{for:!0});var r=_(t);a=E(r,`How many can be claimed?
          `),e=m(r,"INPUT",{type:!0,name:!0,min:!0,placeholder:!0}),r.forEach(n),s=O(c),b=m(c,"HR",{}),this.h()},h(){u(e,"type","number"),u(e,"name","quantity"),u(e,"min","1"),u(e,"placeholder","ex. 100"),u(t,"for","quantity")},m(c,r){A(c,t,r),l(t,a),l(t,e),$(e,i[5].quantity),A(c,s,r),A(c,b,r),o||(p=Y(e,"input",i[25]),o=!0)},p(c,r){r[0]&32&&pt(e.value)!==c[5].quantity&&$(e,c[5].quantity)},d(c){c&&n(t),c&&n(s),c&&n(b),o=!1,p()}}}function ot(i){let t,a,e,s,b,o,p,c,r,v,L,y,q,N,x,P;return{c(){t=d("div"),a=d("label"),e=T("Start ("),s=T(i[10]),b=T(`)
            `),o=d("input"),p=C(),c=d("label"),r=T("End ("),v=T(i[10]),L=T(`)
            `),y=d("input"),q=C(),N=d("hr"),this.h()},l(I){t=m(I,"DIV",{class:!0});var S=_(t);a=m(S,"LABEL",{for:!0});var U=_(a);e=E(U,"Start ("),s=E(U,i[10]),b=E(U,`)
            `),o=m(U,"INPUT",{type:!0,id:!0,name:!0}),U.forEach(n),p=O(S),c=m(S,"LABEL",{for:!0});var H=_(c);r=E(H,"End ("),v=E(H,i[10]),L=E(H,`)
            `),y=m(H,"INPUT",{type:!0,id:!0,name:!0}),H.forEach(n),S.forEach(n),q=O(I),N=m(I,"HR",{}),this.h()},h(){u(o,"type","datetime-local"),u(o,"id","start"),u(o,"name","start"),u(a,"for","start"),u(y,"type","datetime-local"),u(y,"id","start"),u(y,"name","start"),u(c,"for","start"),u(t,"class","grid")},m(I,S){A(I,t,S),l(t,a),l(a,e),l(a,s),l(a,b),l(a,o),$(o,i[5].startTime),l(t,p),l(t,c),l(c,r),l(c,v),l(c,L),l(c,y),$(y,i[5].endTime),A(I,q,S),A(I,N,S),x||(P=[Y(o,"input",i[28]),Y(y,"input",i[29])],x=!0)},p(I,S){S[0]&32&&$(o,I[5].startTime),S[0]&32&&$(y,I[5].endTime)},d(I){I&&n(t),I&&n(q),I&&n(N),x=!1,Qe(P)}}}function ut(i){let t,a,e,s,b,o,p;return{c(){t=d("label"),a=T(`Enter a claim code (Note: it is case-sensitive)
          `),e=d("input"),s=C(),b=d("hr"),this.h()},l(c){t=m(c,"LABEL",{for:!0});var r=_(t);a=E(r,`Enter a claim code (Note: it is case-sensitive)
          `),e=m(r,"INPUT",{type:!0,name:!0,placeholder:!0}),r.forEach(n),s=O(c),b=m(c,"HR",{}),this.h()},h(){u(e,"type","text"),u(e,"name","claimCode"),u(e,"placeholder","ex. mySecretCode"),u(t,"for","claimCode")},m(c,r){A(c,t,r),l(t,a),l(t,e),$(e,i[5].claimCode),A(c,s,r),A(c,b,r),o||(p=Y(e,"input",i[32]),o=!0)},p(c,r){r[0]&32&&e.value!==c[5].claimCode&&$(e,c[5].claimCode)},d(c){c&&n(t),c&&n(s),c&&n(b),o=!1,p()}}}function Bt(i){let t,a,e,s;return{c(){t=d("button"),a=T("Create FLOAT")},l(b){t=m(b,"BUTTON",{});var o=_(t);a=E(o,"Create FLOAT"),o.forEach(n)},m(b,o){A(b,t,o),l(t,a),e||(s=Y(t,"click",i[13]),e=!0)},p:Se,d(b){b&&n(t),e=!1,s()}}}function Dt(i){let t,a=i[9].error+"",e;return{c(){t=d("button"),e=T(a),this.h()},l(s){t=m(s,"BUTTON",{class:!0});var b=_(t);e=E(b,a),b.forEach(n),this.h()},h(){u(t,"class","error svelte-44wbyu"),t.disabled=!0},m(s,b){A(s,t,b),l(t,e)},p(s,b){b[0]&512&&a!==(a=s[9].error+"")&&At(e,a)},d(s){s&&n(t)}}}function qt(i){let t,a;return{c(){t=d("a"),a=T("Event created successfully!"),this.h()},l(e){t=m(e,"A",{role:!0,class:!0,href:!0,style:!0});var s=_(t);a=E(s,"Event created successfully!"),s.forEach(n),this.h()},h(){u(t,"role","button"),u(t,"class","d-block"),u(t,"href","/account"),Lt(t,"display","block")},m(e,s){A(e,t,s),l(t,a)},p:Se,d(e){e&&n(t)}}}function Ht(i){let t,a;return{c(){t=d("button"),a=T("Creating FLOAT"),this.h()},l(e){t=m(e,"BUTTON",{"aria-busy":!0});var s=_(t);a=E(s,"Creating FLOAT"),s.forEach(n),this.h()},h(){u(t,"aria-busy","true"),t.disabled=!0},m(e,s){A(e,t,s),l(t,a)},p:Se,d(e){e&&n(t)}}}function Vt(i){let t,a,e,s,b;return{c(){t=d("div"),a=d("button"),e=T("Connect Wallet"),this.h()},l(o){t=m(o,"DIV",{class:!0});var p=_(t);a=m(p,"BUTTON",{class:!0});var c=_(a);e=E(c,"Connect Wallet"),c.forEach(n),p.forEach(n),this.h()},h(){u(a,"class","contrast small-button"),u(t,"class","mt-2 mb-2")},m(o,p){A(o,t,p),l(t,a),l(a,e),s||(b=Y(a,"click",Ct),s=!0)},p:Se,d(o){o&&n(t),s=!1,b()}}}function Mt(i){let t,a,e,s,b,o,p,c,r,v,L,y,q,N,x,P,I,S,U,H,le,ce,ne,W,K,X,J,j,me,ae,z,pe,G,be,Z,F,ee,he,g,R,w,f,k,fe,Ae,ye,te,ve,de,Le,Te,Ee,se,_e,ke,Ce;document.title=t="Create a new FLOAT "+at,e=new St({props:{url:"https://cdn.jsdelivr.net/npm/ipfs-http-client@56.0.0/index.min.js",uniqueId:+new Date}}),e.$on("loaded",i[12]);function Oe(h,B){return h[0]?Ut:Pt}let Ie=Oe(i),ie=Ie(i),V=i[4]&&it(i);function Xe(h,B){return h[5].claimable?Rt:gt}let Pe=Xe(i),re=Pe(i);function ze(h,B){var we;return(we=h[7])!=null&&we.loggedIn?h[8]?Ht:h[9].success?qt:!h[9].success&&h[9].error?Dt:Bt:Vt}let Ue=ze(i),oe=Ue(i);return{c(){a=C(),ct(e.$$.fragment),s=C(),b=d("div"),o=d("article"),p=d("h1"),c=T("Create a new FLOAT"),r=C(),v=d("label"),L=T(`Event Name
      `),y=d("input"),q=C(),N=d("label"),x=T(`Event URL
      `),P=d("input"),I=C(),S=d("label"),U=T(`Event Description
      `),H=d("textarea"),le=C(),ie.c(),ce=C(),V&&V.c(),ne=C(),W=d("h3"),K=T("Configure your FLOAT"),X=C(),J=d("div"),j=d("button"),me=T(`Transferrable
        `),ae=d("span"),z=T("This FLOAT can be transferred to other accounts."),pe=C(),G=d("button"),be=T(`Non-Transferrable
        `),Z=d("span"),F=T("This FLOAT "),ee=d("strong"),he=T("cannot"),g=T(" be transferred to others (i.e. soul-bound)."),R=C(),w=d("div"),f=d("button"),k=T(`Claimable
        `),fe=d("span"),Ae=T("Users can mint their own FLOAT based on the parameters defined below."),ye=C(),te=d("button"),ve=T(`Not Claimable
        `),de=d("span"),Le=T(`You will be responsible for distributing the FLOAT to accounts in
          your own custom transactions.`),Te=C(),re.c(),Ee=C(),se=d("footer"),oe.c(),this.h()},l(h){vt('[data-svelte="svelte-1h2p3x4"]',document.head).forEach(n),a=O(h),ft(e.$$.fragment,h),s=O(h),b=m(h,"DIV",{class:!0});var we=_(b);o=m(we,"ARTICLE",{});var D=_(o);p=m(D,"H1",{class:!0});var We=_(p);c=E(We,"Create a new FLOAT"),We.forEach(n),r=O(D),v=m(D,"LABEL",{for:!0});var qe=_(v);L=E(qe,`Event Name
      `),y=m(qe,"INPUT",{type:!0,id:!0,name:!0}),qe.forEach(n),q=O(D),N=m(D,"LABEL",{for:!0});var He=_(N);x=E(He,`Event URL
      `),P=m(He,"INPUT",{type:!0,id:!0,name:!0}),He.forEach(n),I=O(D),S=m(D,"LABEL",{for:!0});var Ve=_(S);U=E(Ve,`Event Description
      `),H=m(Ve,"TEXTAREA",{id:!0,name:!0}),_(H).forEach(n),Ve.forEach(n),le=O(D),ie.l(D),ce=O(D),V&&V.l(D),ne=O(D),W=m(D,"H3",{class:!0});var Ke=_(W);K=E(Ke,"Configure your FLOAT"),Ke.forEach(n),X=O(D),J=m(D,"DIV",{class:!0});var ge=_(J);j=m(ge,"BUTTON",{class:!0});var Me=_(j);me=E(Me,`Transferrable
        `),ae=m(Me,"SPAN",{class:!0});var Ze=_(ae);z=E(Ze,"This FLOAT can be transferred to other accounts."),Ze.forEach(n),Me.forEach(n),pe=O(ge),G=m(ge,"BUTTON",{class:!0});var Ye=_(G);be=E(Ye,`Non-Transferrable
        `),Z=m(Ye,"SPAN",{class:!0});var Re=_(Z);F=E(Re,"This FLOAT "),ee=m(Re,"STRONG",{});var Je=_(ee);he=E(Je,"cannot"),Je.forEach(n),g=E(Re," be transferred to others (i.e. soul-bound)."),Re.forEach(n),Ye.forEach(n),ge.forEach(n),R=O(D),w=m(D,"DIV",{class:!0});var Be=_(w);f=m(Be,"BUTTON",{class:!0});var je=_(f);k=E(je,`Claimable
        `),fe=m(je,"SPAN",{class:!0});var $e=_(fe);Ae=E($e,"Users can mint their own FLOAT based on the parameters defined below."),$e.forEach(n),je.forEach(n),ye=O(Be),te=m(Be,"BUTTON",{class:!0});var Ge=_(te);ve=E(Ge,`Not Claimable
        `),de=m(Ge,"SPAN",{class:!0});var xe=_(de);Le=E(xe,`You will be responsible for distributing the FLOAT to accounts in
          your own custom transactions.`),xe.forEach(n),Ge.forEach(n),Be.forEach(n),Te=O(D),re.l(D),Ee=O(D),se=m(D,"FOOTER",{});var et=_(se);oe.l(et),et.forEach(n),D.forEach(n),we.forEach(n),this.h()},h(){u(p,"class","mb-1"),u(y,"type","text"),u(y,"id","name"),u(y,"name","name"),u(v,"for","name"),u(P,"type","text"),u(P,"id","name"),u(P,"name","name"),u(N,"for","name"),u(H,"id","description"),u(H,"name","description"),u(S,"for","description"),u(W,"class","mb-1"),u(ae,"class","svelte-44wbyu"),u(j,"class","outline svelte-44wbyu"),M(j,"secondary",!i[5].transferrable),u(Z,"class","svelte-44wbyu"),u(G,"class","outline svelte-44wbyu"),M(G,"secondary",i[5].transferrable),u(J,"class","grid no-break mb-1"),u(fe,"class","svelte-44wbyu"),u(f,"class","outline svelte-44wbyu"),M(f,"secondary",!i[5].claimable),u(de,"class","svelte-44wbyu"),u(te,"class","outline svelte-44wbyu"),M(te,"secondary",i[5].claimable),u(w,"class","grid no-break mb-1"),u(b,"class","container")},m(h,B){A(h,a,B),dt(e,h,B),A(h,s,B),A(h,b,B),l(b,o),l(o,p),l(p,c),l(o,r),l(o,v),l(v,L),l(v,y),$(y,i[5].name),l(o,q),l(o,N),l(N,x),l(N,P),$(P,i[5].url),l(o,I),l(o,S),l(S,U),l(S,H),$(H,i[5].description),l(o,le),ie.m(o,null),l(o,ce),V&&V.m(o,null),l(o,ne),l(o,W),l(W,K),l(o,X),l(o,J),l(J,j),l(j,me),l(j,ae),l(ae,z),l(J,pe),l(J,G),l(G,be),l(G,Z),l(Z,F),l(Z,ee),l(ee,he),l(Z,g),l(o,R),l(o,w),l(w,f),l(f,k),l(f,fe),l(fe,Ae),l(w,ye),l(w,te),l(te,ve),l(te,de),l(de,Le),l(o,Te),re.m(o,null),l(o,Ee),l(o,se),oe.m(se,null),_e=!0,ke||(Ce=[Y(y,"input",i[15]),Y(P,"input",i[16]),Y(H,"input",i[17]),Y(j,"click",i[19]),Y(G,"click",i[20]),Y(f,"click",i[21]),Y(te,"click",i[22])],ke=!0)},p(h,B){(!_e||B&0)&&t!==(t="Create a new FLOAT "+at)&&(document.title=t),B[0]&32&&y.value!==h[5].name&&$(y,h[5].name),B[0]&32&&P.value!==h[5].url&&$(P,h[5].url),B[0]&32&&$(H,h[5].description),Ie===(Ie=Oe(h))&&ie?ie.p(h,B):(ie.d(1),ie=Ie(h),ie&&(ie.c(),ie.m(o,ce))),h[4]?V?(V.p(h,B),B[0]&16&&Ne(V,1)):(V=it(h),V.c(),Ne(V,1),V.m(o,ne)):V&&(Et(),De(V,1,1,()=>{V=null}),yt()),B[0]&32&&M(j,"secondary",!h[5].transferrable),B[0]&32&&M(G,"secondary",h[5].transferrable),B[0]&32&&M(f,"secondary",!h[5].claimable),B[0]&32&&M(te,"secondary",h[5].claimable),Pe===(Pe=Xe(h))&&re?re.p(h,B):(re.d(1),re=Pe(h),re&&(re.c(),re.m(o,Ee))),Ue===(Ue=ze(h))&&oe?oe.p(h,B):(oe.d(1),oe=Ue(h),oe&&(oe.c(),oe.m(se,null)))},i(h){_e||(Ne(e.$$.fragment,h),Ne(V),_e=!0)},o(h){De(e.$$.fragment,h),De(V),_e=!1},d(h){h&&n(a),mt(e,h),h&&n(s),h&&n(b),ie.d(),V&&V.d(),re.d(),oe.d(),ke=!1,Qe(Ce)}}}function Yt(i,t,a){let e,s,b,o,p;Fe(i,Q,F=>a(5,e=F)),Fe(i,Ot,F=>a(6,s=F)),Fe(i,wt,F=>a(7,b=F)),Fe(i,Ft,F=>a(8,o=F)),Fe(i,Nt,F=>a(9,p=F));let c=new Date().toLocaleTimeString("en-us",{timeZoneName:"short"}).split(" ")[2],r=!1,v=!1,L=0,y=!1,q=null;console.log(s),Tt(()=>{var F;a(0,r=(F=window==null?void 0:window.IpfsHttpClient)!=null?F:!1)});let N=async F=>{a(1,v=!0),a(2,L=0);let ee=F.target.files[0];function he(f){a(2,L=f/ee.size)}console.log("uploading");const g=window.IpfsHttpClient.create({host:"ipfs.infura.io",port:5001,protocol:"https"});console.log(ee);const R=await g.add(ee,{progress:he});a(3,y=!0),a(1,v=!1);const w=R.path;ue(Q,e.ipfsHash=w,e),a(4,q=`https://ipfs.infura.io/ipfs/${w}`)};function x(){console.log("ipfs is ready"),a(0,r=!0)}function P(){kt(e)}let I=`
import FLOAT from ${{}.VITE_FLOAT_ADDRESS}
import NonFungibleToken from ${{}.VITE_CORE_CONTRACTS_ADDRESS}

transaction(eventId: UInt64, recipient: Address) {

	let FLOATEvents: &FLOAT.FLOATEvents
	let RecipientCollection: &FLOAT.Collection{NonFungibleToken.CollectionPublic}

	prepare(signer: AuthAccount) {
		self.FLOATEvents = 
			signer.borrow<&FLOAT.FLOATEvents>(from: FLOAT.FLOATEventsStoragePath)
					?? panic("Could not borrow the signer's FLOAT Events resource.")
		self.RecipientCollection = 
			getAccount(recipient).getCapability(FLOAT.FLOATCollectionPublicPath)
				.borrow<&FLOAT.Collection{NonFungibleToken.CollectionPublic}>()
				?? panic("Could not get the public FLOAT Collection from the recipient.")
	}

	execute {
		//
		// Give the "recipient" a FLOAT from the event with "id"
		//

		self.FLOATEvents.distributeDirectly(id: eventId, recipient: self.RecipientCollection)
		log("Distributed the FLOAT.")

		//
		// SOME OTHER ACTION HAPPENS
		//
	}
}
	`;function S(){e.name=this.value,Q.set(e)}function U(){e.url=this.value,Q.set(e)}function H(){e.description=this.value,Q.set(e)}const le=F=>N(F),ce=()=>ue(Q,e.transferrable=!0,e),ne=()=>ue(Q,e.transferrable=!1,e),W=()=>ue(Q,e.claimable=!0,e),K=()=>ue(Q,e.claimable=!1,e),X=()=>ue(Q,e.quantity=!1,e),J=()=>ue(Q,e.quantity=!0,e);function j(){e.quantity=pt(this.value),Q.set(e)}const me=()=>ue(Q,e.timelock=!1,e),ae=()=>ue(Q,e.timelock=!0,e);function z(){e.startTime=this.value,Q.set(e)}function pe(){e.endTime=this.value,Q.set(e)}const G=()=>ue(Q,e.claimCodeEnabled=!1,e),be=()=>ue(Q,e.claimCodeEnabled=!0,e);function Z(){e.claimCode=this.value,Q.set(e)}return[r,v,L,y,q,e,s,b,o,p,c,N,x,P,I,S,U,H,le,ce,ne,W,K,X,J,j,me,ae,z,pe,G,be,Z]}class Wt extends bt{constructor(t){super();_t(this,t,Yt,Mt,ht,{},null,[-1,-1])}}export{Wt as default};
