(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,a,t){e.exports=t(55)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c),s=t(5),o=t(3),i=t(2),m=t.n(i),u=t(4),d=t(7),p=(t(33),t(14)),v=t.n(p),E={apiKey:"AIzaSyCe7Vw5m1iAkeqwZPTYuJgzP_z7NpfGHzs",authDomain:"corona-festival-app.firebaseapp.com",databaseURL:"https://corona-festival-app.firebaseio.com",projectId:"corona-festival-app",storageBucket:"corona-festival-app.appspot.com",messagingSenderId:"540722814614",appId:"1:540722814614:web:e91726e29da3cd41b62cb7",measurementId:"G-MGDZGKTV0N"},f=r.a.createContext(null),g=function(){return Object(n.useContext)(f)},b=function(e){var a=e.children,t=Object(n.useState)(v.a.apps.length?v.a.app():v.a.initializeApp(E)),c=Object(d.a)(t,1)[0];return r.a.createElement(f.Provider,{value:{app:c}},a)},N=r.a.createContext(null),h=function(){return Object(n.useContext)(N)},w=function(e){var a=e.children,t=Object(n.useState)(JSON.parse(localStorage.getItem("corona-festival:currentUser"))),c=Object(d.a)(t,2),l=c[0],s=c[1],o=g().app.auth();Object(n.useEffect)((function(){var e=o.onAuthStateChanged((function(e){localStorage.setItem("corona-festival:currentUser",JSON.stringify(e)),s(e)}));return function(){e()}}),[]);var i=function(){var e=Object(u.a)(m.a.mark((function e(a,t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.signInWithEmailAndPassword(a,t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("corona-festival:currentUser",null),e.next=3,o.signOut();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N.Provider,{value:{currentUser:l,signInWithEmailAndPassword:i,signOut:p}},a)},k=t(9),x=(t(35),r.a.createContext(null)),y=function(){return Object(n.useContext)(x)},O=function(e){var a=e.children,t=g().app.firestore(),n=function(){var e=Object(u.a)(m.a.mark((function e(){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.collection("messages").orderBy("createdAt","desc"),e.next=3,a.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(k.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(u.a)(m.a.mark((function e(){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.collection("bookmarks").orderBy("createdAt","desc"),e.next=3,a.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(k.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(u.a)(m.a.mark((function e(){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.collection("pokemons").orderBy("name","asc"),e.next=3,a.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(k.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(m.a.mark((function e(a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.collection("bookmarks"),e.next=3,n.add(a);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(x.Provider,{value:{addBookmark:s,getBookmarks:c,getMessages:n,getPokemons:l}},a)},j=(Object(n.createContext)(),t(26)),S=function(e){var a=e.component,t=e.layout,n=Object(j.a)(e,["component","layout"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return function(e,a,t){return a?r.a.createElement(a,t,r.a.createElement(e,t)):r.a.createElement(e,t)}(a,t,e)}}))},C=(t(42),function(e){e.children;return r.a.createElement("footer",{className:"app-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4 col-lg-3"},r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/home",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/messages",className:"nav-link"},"Messages")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/bookmarks",className:"nav-link"},"Bookmarks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/auth/signin",className:"nav-link"},"Sign-In")))),r.a.createElement("div",{className:"col-12 col-md-4 col-lg-3"},"3"),r.a.createElement("div",{className:"col-12 col-md-4 col-lg-6"},"6"))))}),P=function(e){e.children;var a=h(),t=a.currentUser;a.signOut;return r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},t?r.a.createElement(n.Fragment,null):r.a.createElement(s.b,{className:"nav-link",to:"/register"},"Register")))},I=(t(43),function(e){e.children;var a=h(),t=a.currentUser,n=a.signOut;return r.a.createElement("ul",{className:"navbar-nav courtesy-navigation"},r.a.createElement("li",{className:"nav-item"},t?r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("img",{className:"profile__picture",src:t.photoURL})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},r.a.createElement(s.b,{to:"/settings",className:"dropdown-item"},"Settings"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#",onClick:n},"Logout"))):r.a.createElement(s.b,{className:"nav-link",to:"/auth/signin"},"Sign In")))}),B=(t(44),function(e){var a=e.type;return r.a.createElement("img",{className:"logo",src:"text"==a?window.location.origin+"/logo+text.png":window.location.origin+"/logo.png",alt:"logo Corona Festival"})}),_=(t(45),function(e){e.children;return r.a.createElement("header",{className:"app-header"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light navigation"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/",className:"logo__link"},r.a.createElement(B,{type:"text"}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse navitems",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto justify-content-end flex-grow-1"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{to:"/home",className:"nav-link",activeClassName:"active"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{to:"/categories",className:"nav-link",activeClassName:"active"},"Categories")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{to:"/browse",className:"nav-link",activeClassName:"active"},"Browse")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{to:"/stream",className:"nav-link",activeClassName:"active"},"Stream"))),r.a.createElement(I,null),r.a.createElement(P,null))))}),U=function(e){var a=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(_,null),r.a.createElement("main",{className:"app-main"},a),r.a.createElement(C,null))},A=(t(46),function(){var e=Object(n.useState)(),a=Object(d.a)(e,2),t=a[0],c=a[1],l=y().getBookmarks;return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement("div",{className:"row align-items-stretch bookmarks-list"},t?t.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-3",key:e.uid},r.a.createElement("div",{className:"card bookmark","data-id":e.uid},r.a.createElement("picture",{className:"card-img-top bookmark__picture"},e.image?r.a.createElement("img",{src:e.image,alt:e.title}):r.a.createElement(n.Fragment,null)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},e.provider),r.a.createElement("h5",{className:"card-title  text-truncate"},e.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:e.url,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},"Visit website"))))})):r.a.createElement("p",null,"No bookmarks."))}),F=function(e){e.children;return r.a.createElement("div",{className:"page page--bookmarks"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",null,"Bookmarks"))),r.a.createElement(A,null)))},M=(t(47),function(e){e.children;return r.a.createElement("div",{className:"page page--home"},r.a.createElement("section",{className:"pt-4 pt-md-11 featured"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-5 col-lg-6 order-md-2"},"Iets anders"),r.a.createElement("div",{className:"col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate"},r.a.createElement("h1",{className:"display-3 text-center text-md-left"},"Welcome to ",r.a.createElement("span",{className:"font-weight-bold"},"Firebase React Boilerplate"),". ",r.a.createElement("br",null),"Firebase everything."))))))}),W=(t(48),function(){var e=Object(n.useState)(),a=Object(d.a)(e,2),t=a[0],c=a[1],l=y().getMessages;return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement("div",{className:"row messages-list"},t?t.map((function(e){return r.a.createElement("div",{className:"col-12",key:e.uid},r.a.createElement("article",{className:"row message","data-id":e.uid},r.a.createElement("span",{className:"col-3 message__sender"},e.sender),r.a.createElement("div",{className:"col-9 message__body"},e.content)))})):r.a.createElement("p",null,"No messages"))}),z=function(e){e.children;return r.a.createElement("div",{className:"page page--messages"},r.a.createElement("section",{className:"pt-4 pt-md-11"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",null,"Messages"))),r.a.createElement(W,null))))},H=(t(49),function(){var e=Object(n.useState)(),a=Object(d.a)(e,2),t=a[0],c=a[1],l=y().getPokemons;return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"row pokemons-list"},t?t.map((function(e){return r.a.createElement("div",{className:"col-12",key:e.uid},r.a.createElement("div",{class:"media",d:!0,"ata-id":e.uid},r.a.createElement("img",{src:e.pictureURL,class:"align-self-start mr-3",alt:e.name,width:"148"}),r.a.createElement("div",{class:"media-body"},r.a.createElement("h5",{class:"mt-0"},e.name),r.a.createElement("table",{class:"table table-striped"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Type"),r.a.createElement("td",null,e.type)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Best Move"),r.a.createElement("td",null,e.bestMove)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Next Evolution"),r.a.createElement("td",null,e.evolution_next)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Shiny"),r.a.createElement("td",null,e.shiny?"Yes":"No")))))))})):r.a.createElement("p",null,"No pokemons"))}),J=function(e){e.children;return r.a.createElement("div",{className:"page page--pokemons"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",null,"Pokemons"))),r.a.createElement(H,null)))},R=t(13),G=(t(50),function(e){e.children;var a=Object(n.useState)({txtEmail:"",txtPassword:""}),t=Object(d.a)(a,2),c=t[0],l=t[1],s=h(),o=(s.currentUser,s.signInWithEmailAndPassword),i=(s.signOut,function(){var e=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,o(c.txtEmail,c.txtPassword);case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),p=function(){var e=Object(u.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(Object(k.a)({},c,Object(R.a)({},a.target.name,a.target.value)));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page page--sign-in"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"},r.a.createElement("form",{onSubmit:function(e){return i(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"txtEmail"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"txtEmail",name:"txtEmail","aria-describedby":"emailHelp",onChange:p,value:c.txtEmail}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"txtPassword"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"txtPassword",name:"txtPassword",onChange:p,value:c.txtPassword})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In"))))))});t(51);var L=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,null,r.a.createElement(w,null,r.a.createElement(O,null,r.a.createElement(s.a,{basename:"/corona-festival"},r.a.createElement(o.d,null,r.a.createElement(S,{exact:!0,path:"/",layout:U,component:M}),r.a.createElement(o.a,{from:"/home",to:"/"}),r.a.createElement(S,{exact:!0,path:"/messages",layout:U,component:z}),r.a.createElement(S,{exact:!0,path:"/bookmarks",layout:U,component:F}),r.a.createElement(S,{exact:!0,path:"/pokemons",layout:U,component:J}),r.a.createElement(S,{exact:!0,path:"/auth/signin",layout:U,component:G})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(52),t(53);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.195a0985.chunk.js.map