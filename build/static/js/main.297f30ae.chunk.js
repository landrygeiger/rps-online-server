(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(32),r=a.n(s),i=a(83),l=a(84),j=a(92),o=a(91),u=a(10),d=a.n(u),b=a(15),h=a(9),m=a(21),x=a(11),O=a(148),p=a(147),f=a(142),v=a(149),y=a(61),g={apiKey:"AIzaSyBaIFCic3PdUDmvCIMNPdSNpBuap4gpE2o",authDomain:"rock-paper-scissors-onli-dc6c4.firebaseapp.com",projectId:"rock-paper-scissors-onli-dc6c4",storageBucket:"rock-paper-scissors-onli-dc6c4.appspot.com",messagingSenderId:"97204497145",appId:"1:97204497145:web:3dd9899fc51de2d9929028",measurementId:"G-7TP1KX6P4K"},w=(a(98),a(140),y.a.initializeApp(g)),N=w.auth(),S=y.a.firestore(),k=a(2),D=Object(c.createContext)(),C=function(){return Object(c.useContext)(D)},I=function(e){var t=e.children,a=Object(c.useState)(),n=Object(h.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(!0),l=Object(h.a)(i,2),j=l[0],o=l[1],u=function(){var e=Object(b.a)(d.a.mark((function e(t,a,c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.createUserWithEmailAndPassword(t,c);case 2:return n=e.sent,e.next=5,S.collection("users").doc(n.user.uid).set({username:a,ranking:1e3,xp:0,matchesPlayed:[]});case 5:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.signInWithEmailAndPassword(t,a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return N.onAuthStateChanged(function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=6;break}return e.next=4,S.collection("users").doc(t.uid).get();case 4:a=e.sent,t.username=a.data().username;case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("oops");case 11:r(t),o(!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var x={currentUser:s,signup:u,login:m,signout:function(){return N.signOut()}};return Object(k.jsx)(D.Provider,{value:x,children:!j&&t})},P=function(){var e,t,a=Object(c.useState)(null!==(e=null===(t=Object(x.h)().state)||void 0===t?void 0:t.redirect)&&void 0!==e?e:"/"),n=Object(h.a)(a,2),s=n[0];n[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(m.b,{to:{pathname:"/login",state:{redirect:s}},children:Object(k.jsxs)(f.a,{variant:"primary",children:[Object(k.jsx)("i",{className:"far fa-user"})," Login"]})}),Object(k.jsx)(m.b,{to:{pathname:"/signup",state:{redirect:s}},children:Object(k.jsxs)(f.a,{variant:"outline-primary",style:{marginLeft:"15px"},children:[Object(k.jsx)("i",{className:"far fa-edit"})," Sign Up"]})})]})},U=function(){var e=C(),t=e.currentUser,a=e.signout,n=Object(c.useState)(!1),s=Object(h.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)(""),j=Object(h.a)(l,2),o=j[0],u=j[1],m=Object(x.g)(),O=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(""),i(!0),e.next=5,a();case 5:i(!1),m.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u("Failed to sign out");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"d-flex align-items-center",children:[o&&Object(k.jsx)(v.a,{variant:"danger",children:o}),Object(k.jsx)("p",{className:"mx-3 my-auto",children:t.username}),Object(k.jsx)(f.a,{disabled:r,variant:"outline-primary",onClick:O,children:"Sign Out"})]})},R=function(){var e=C().currentUser;return Object(k.jsxs)(O.a,{bg:"light",expand:"md",style:{maxWidth:"1500px",borderRadius:"0 0 15px 15px"},className:"mx-auto shadow px-5",children:[Object(k.jsx)(O.a.Brand,{style:{minHeight:"100px"},className:"d-flex align-items-center",children:Object(k.jsx)(m.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(k.jsxs)("p",{className:"text-title",children:[Object(k.jsx)("i",{className:"fas fa-signal",style:{color:"#0275d8",fontSize:17}})," Rock Paper Scissors Online"]})})}),Object(k.jsx)(O.a.Toggle,{"aria-controls":"navbar-nav",style:{border:"none"}}),Object(k.jsx)(O.a.Collapse,{id:"navbar-nav",children:Object(k.jsx)(p.a,{className:"d-flex justify-content-end w-100",children:Object(k.jsx)("div",{className:"d-flex justify-content-end",children:e?Object(k.jsx)(U,{}):Object(k.jsx)(P,{})})})})]})},B=a(150),E=a(143),F=a(89),L=a(88),A=Object(c.createContext)(),z=function(){return Object(c.useContext)(A)},G=function(e){var t=e.children,a=Object(c.useState)(!1),n=Object(h.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(),l=Object(h.a)(i,2),j=l[0],o=l[1],u={connect:function(){return new Promise((function(e,t){var a=Object(L.io)();a.on("connect",(function(){r(!0),o(a),e(a)})),a.on("connect_error",(function(){t()})),a.on("connect_timeout",(function(){t()})),a.on("disconnect",(function(){r(!1)}))}))},connected:s,socket:j};return Object(k.jsx)(A.Provider,{value:u,children:t})},W=a(50),q=a.n(W),T=function(e){var t=e.matchData["player".concat(e.player,"Score")]>=e.number,a={backgroundColor:t?"#0275d8":"white",border:t?"none":"2px solid gray",borderRadius:"50%",width:e.small?"15px":"20px",height:e.small?"15px":"20px",margin:"0 5px"};return Object(k.jsx)("div",{style:a})},H=function(e){var t=C().currentUser;return Object(k.jsx)("div",{className:"shadow mb-4 mx-4 w-100",style:{borderRadius:"20px",position:"relative",maxWidth:"625px"},children:Object(k.jsx)("div",{className:"px-3 d-flex flex-column justify-content-center",style:{backgroundColor:"white",height:"100px",borderRadius:"20px"},children:Object(k.jsxs)(E.a,{children:[Object(k.jsxs)(F.a,{className:"d-flex flex-column",children:[Object(k.jsx)("p",{className:"mb-1",children:e.matchData.player1}),Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsx)(T,{number:1,player:1,matchData:e.matchData,small:!0}),Object(k.jsx)(T,{number:2,player:1,matchData:e.matchData,small:!0}),Object(k.jsx)(T,{number:3,player:1,matchData:e.matchData,small:!0})]})]}),Object(k.jsx)(F.a,{xs:"auto",className:"d-flex justify-content-center align-items-center",children:e.matchData.status.data.winner===t.username&&Object(k.jsx)("i",{style:{fontSize:"25px",textAlign:"center"},className:"fas fa-trophy"})}),Object(k.jsxs)(F.a,{className:"d-flex flex-column",children:[Object(k.jsx)("p",{className:"mb-1",style:{textAlign:"right"},children:e.matchData.player2}),Object(k.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(k.jsx)(T,{number:1,player:2,matchData:e.matchData,small:!0}),Object(k.jsx)(T,{number:2,player:2,matchData:e.matchData,small:!0}),Object(k.jsx)(T,{number:3,player:2,matchData:e.matchData,small:!0})]})]})]})})})},M=function(e){return Object(k.jsx)("div",{className:"d-flex flex-column align-items-center px-2 py-2",style:{height:"100%",overflowY:"auto",overflowX:"hidden",borderRadius:"15px"},children:e.matchData.reverse().map((function(e,t){return Object(k.jsx)(H,{matchData:e},"match".concat(t))}))})},K=function(){return Object(k.jsx)("div",{className:"d-flex align-items-center justify-content-center w-100 h-100 p-5",style:{flexGrow:1},children:Object(k.jsx)("div",{className:"loader"})})},J=function(e){var t=C().currentUser,a=Object(c.useState)(0),n=Object(h.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){var a=0;e.matchData.forEach((function(e){e.status.data.winner===t.username&&a++})),r(a/e.matchData.length)}),[e.matchData]),Object(k.jsx)("div",{className:"pie-chart-container shadow",children:Object(k.jsx)("div",{className:"pie-chart",style:{background:e.matchData.length>0?"conic-gradient( #9aff63 ".concat(180*s,"deg,  #ff745c 0 180deg,  white 0)"):"white"},children:Object(k.jsxs)("div",{className:"pie-chart-cover",children:[Object(k.jsx)("p",{style:{fontSize:"30px"},className:"mt-5",children:e.matchData.length>0?s.toFixed(2):"0.00"}),Object(k.jsx)("p",{className:"mt-0 text-muted",children:"WLR"})]})})})},X=function(e){var t=Object(x.g)(),a=Object(c.useState)(!1),n=Object(h.a)(a,2),s=n[0],r=n[1],i=z(),l=i.connect,j=i.connected,o=i.socket,u=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(!0),j?m(o):l().then((function(e){m(e)}),(function(){e.setError("Failed to connect to server."),r(!1)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(e){e.emit("create-match",(function(e){r(!1),t.push("/game/".concat(e))}))};return Object(k.jsxs)(f.a,{variant:"outline-primary",className:"w-100",onClick:u,disabled:s,children:[Object(k.jsx)("i",{className:"fas fa-plus"})," Create Match"]})},_=function(e){var t=C().currentUser,a=Object(c.useState)(""),n=Object(h.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)({}),l=Object(h.a)(i,2),j=l[0],o=l[1],u=Object(c.useState)([]),m=Object(h.a)(u,2),x=m[0],O=m[1],p=Object(c.useState)(!0),f=Object(h.a)(p,2),y=f[0],g=f[1];return Object(c.useEffect)((function(){(function(){var t=Object(b.a)(d.a.mark((function t(){var a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.collection("users").doc(e.uid).get();case 2:return a=t.sent,o(a.data()),t.next=6,Promise.all(a.data().matchesPlayed.slice(0,20).map(function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.collection("completed-matches").doc(t).get();case 2:return a=e.sent,e.abrupt("return",Promise.resolve(a.data()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:c=t.sent,O(c),g(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(k.jsxs)("div",{className:"w-100",children:[s&&Object(k.jsx)(v.a,{variant:"danger",className:"shadow",children:s}),Object(k.jsxs)(E.a,{children:[Object(k.jsx)(F.a,{md:9,className:"mb-3",children:Object(k.jsx)(B.a,{className:"content-card shadow",children:Object(k.jsx)(B.a.Body,{children:Object(k.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(k.jsx)("p",{className:"text-title",children:t.username}),Object(k.jsxs)("div",{className:"d-flex align-items-center text-title",children:[y?"----":Object(k.jsx)(q.a,{animateToNumber:j.ranking})," ",Object(k.jsx)("i",{className:"fas fa-trophy mx-1",style:{fontSize:16}})]})]})})})}),Object(k.jsx)(F.a,{className:"mb-3",children:Object(k.jsx)(B.a,{className:"content-card shadow",children:Object(k.jsx)(B.a.Body,{children:Object(k.jsx)("div",{className:"d-flex justify-content-end w-100",children:Object(k.jsx)(X,{setError:r})})})})})]}),Object(k.jsxs)(E.a,{className:"h-100",children:[Object(k.jsx)(F.a,{md:3,className:"h-100 mb-3",children:Object(k.jsx)(B.a,{className:"content-card shadow",style:{minHeight:"500px"},children:Object(k.jsxs)(B.a.Body,{className:"h-100",children:[Object(k.jsxs)("p",{className:"text-title mb-2",children:["Statistics ",Object(k.jsx)("i",{className:"fas fa-chart-pie",style:{fontSize:16}})]}),y?Object(k.jsx)(K,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(J,{matchData:x}),Object(k.jsxs)("p",{className:"mt-4",children:["Matches played: ",Object(k.jsx)("span",{className:"text-muted",children:j.matchesPlayed.length})]}),Object(k.jsxs)("p",{className:"mt-1",children:["Date joined: ",Object(k.jsx)("span",{className:"text-muted",children:t.metadata.creationTime.split(" ").slice(0,4).join(" ")})]})]})]})})}),Object(k.jsx)(F.a,{className:"mb-3",children:Object(k.jsx)(B.a,{className:"content-card shadow",style:{height:"500px"},children:Object(k.jsxs)(B.a.Body,{className:"h-100 pb-5",children:[Object(k.jsxs)("p",{className:"text-title mb-2",children:["Match History ",Object(k.jsx)("i",{className:"fas fa-history",style:{fontSize:16}})]}),y?Object(k.jsx)(K,{}):Object(k.jsx)(M,{matchData:x})]})})})]})]})},Y=function(){return Object(k.jsx)(B.a,{className:"shadow",style:{borderRadius:"15px",padding:"30px"},children:Object(k.jsxs)(B.a.Body,{children:[Object(k.jsx)("h2",{children:"Competitive RPS Action"}),Object(k.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(k.jsx)("p",{style:{width:"100%",textAlign:"right"},children:"filler text this is filler text i am filling up this space with text because i need it to look like there is actually something here please disregard what this actually says thank you."})})]})})},Q=function(){var e=C().currentUser;return Object(k.jsx)("div",{className:"w-100 h-100",children:e?Object(k.jsx)(_,{uid:e.uid}):Object(k.jsx)(Y,{})})},V=a(144),Z=a(90),$=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(k.jsx)("p",{className:"player-title",children:e.matchData.player1}),Object(k.jsx)("p",{className:"player-title",children:e.matchData.player2})]}),Object(k.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsx)(T,{number:1,player:1,matchData:e.matchData}),Object(k.jsx)(T,{number:2,player:1,matchData:e.matchData}),Object(k.jsx)(T,{number:3,player:1,matchData:e.matchData})]}),Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsx)(T,{number:1,player:2,matchData:e.matchData}),Object(k.jsx)(T,{number:2,player:2,matchData:e.matchData}),Object(k.jsx)(T,{number:3,player:2,matchData:e.matchData})]})]})]})},ee=function(e){var t={backgroundColor:e.colored.buttonId===e.buttonId?e.colored.shade:"#696969"};return Object(k.jsx)("button",{className:"game-button",style:t,id:e.buttonId,disabled:e.disabled,onClick:function(){return e.handleClick(e.buttonId)},children:Object(k.jsx)("i",{className:"far fa-hand-".concat(e.buttonId)})})},te=function(e){var t=Object(c.useState)({buttonId:"none",shade:"#696969"}),a=Object(h.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)("none"),i=Object(h.a)(r,2),l=i[0],j=i[1];Object(c.useEffect)((function(){var t=e.matchStatus;"between-rounds"===t.state?s({buttonId:l,shade:t.data.winner===e.currentUser.username?"green":"tie"===t.data.winner?"yellow":"red"}):"in-progress"===t.state&&s({buttonId:l,shade:"#0275d8"})}),[l,e.matchStatus]),Object(c.useEffect)((function(){"in-progress"===e.matchStatus.state&&(e.disableButtons(!1),j("none"))}),[e.matchStatus.state]);var o=function(t){e.socket.emit("send-move",e.currentUser.username,e.gameId,t),e.disableButtons(!0),j(t)};return Object(k.jsxs)("div",{className:"game-buttons",children:[Object(k.jsx)(ee,{disabled:e.disabled,handleClick:o,buttonId:"rock",colored:n}),Object(k.jsx)(ee,{disabled:e.disabled,handleClick:o,buttonId:"paper",colored:n}),Object(k.jsx)(ee,{disabled:e.disabled,handleClick:o,buttonId:"scissors",colored:n})]})},ae=function(e){return Object(k.jsx)(q.a,{animateToNumber:e.count})},ce=function(e){return Object(k.jsxs)("p",{style:{fontSize:"40px",textAlign:"center"},children:[e.matchStatus.data.winner," wins!"]})},ne=function(){var e=Object(x.i)().gameId,t=C().currentUser,a=z(),n=a.connected,s=a.connect,r=a.socket,i=Object(c.useState)(!0),l=Object(h.a)(i,2),j=l[0],o=l[1],u=Object(c.useState)(!1),m=Object(h.a)(u,2),O=m[0],p=m[1],v=Object(c.useState)(),y=Object(h.a)(v,2),g=y[0],w=y[1],N=Object(c.useState)("waiting-for-players"),D=Object(h.a)(N,2),I=D[0],P=D[1],U=Object(x.g)(),R=Object(c.useRef)();Object(c.useEffect)((function(){return function(){var t=Object(b.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:return a=t.sent,t.abrupt("return",(function(){a(),r.emit("leave-match",e)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]);var E=function(){var a=Object(b.a)(d.a.mark((function a(){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(){var a=Object(b.a)(d.a.mark((function a(c,i){var l;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l=r,n){a.next=5;break}return a.next=4,s();case 4:l=a.sent;case 5:l.emit("join-match",t,e,(function(t){if(t){var a=S.collection("active-matches").doc(e).onSnapshot((function(e){w(e.data()),P(e.data().status),o(!1)}));l.on("kick-match",(function(){a(),U.push("/")})),c(a)}else U.push("/")}));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(k.jsx)(B.a,{className:"w-100 content-card shadow mb-5",children:Object(k.jsx)(B.a.Body,{className:"d-flex flex-column",style:{minHeight:"500px",boxSizing:"border-box"},children:j?Object(k.jsx)(K,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)($,{matchData:g}),Object(k.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{flexGrow:1},children:"waiting-for-players"===I.state?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{children:"Waiting for players..."}),Object(k.jsxs)(V.a,{style:{maxWidth:"450px"},children:[Object(k.jsx)(Z.a,{value:window.location.href,readOnly:!0,ref:R}),Object(k.jsx)(f.a,{variant:"primary",onClick:function(){R.current.select(),R.current.setSelectionRange(0,99999),document.execCommand("copy")},children:Object(k.jsx)("i",{className:"fas fa-clipboard"})})]})]}):"starting"===I.state?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{children:"Match starting in..."}),Object(k.jsx)(ae,{count:I.data.count})]}):"in-progress"===I.state||"between-rounds"===I.state?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(te,{disabled:O,socket:r,gameId:e,currentUser:t,disableButtons:p,matchStatus:I}),Object(k.jsx)(ae,{count:I.data.count})]}):"complete"===I.state?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ce,{matchStatus:I}),Object(k.jsx)(ae,{count:I.data.count})]}):Object(k.jsx)("div",{children:"uh oh"})})]})})})},se=function(e){var t=C().currentUser,a=Object(c.useState)(Object(x.h)()),n=Object(h.a)(a,2),s=n[0];n[1];return Object(k.jsx)(x.b,{path:e.path,children:t?Object(k.jsx)(ne,{}):Object(k.jsx)(x.a,{to:{pathname:"/login",state:{redirect:s.pathname}}})})},re=a(146),ie=function(){var e,t,a=Object(c.useRef)(),n=Object(c.useRef)(),s=Object(c.useRef)(),r=Object(c.useRef)(),i=C().signup,l=Object(x.g)(),j=Object(c.useState)(""),o=Object(h.a)(j,2),u=o[0],O=o[1],p=Object(c.useState)(!1),y=Object(h.a)(p,2),g=y[0],w=y[1],N=Object(c.useState)(null!==(e=null===(t=Object(x.h)().state)||void 0===t?void 0:t.redirect)&&void 0!==e?e:"/"),S=Object(h.a)(N,2),D=S[0],I=(S[1],function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.current.value===s.current.value){e.next=3;break}return e.abrupt("return",O("Passwords do not match."));case 3:if(!(r.current.value.length>16)){e.next=5;break}return e.abrupt("return",O("Username must be 16 characters or less."));case 5:return e.prev=5,O(""),w(!0),e.next=10,i(a.current.value,r.current.value,n.current.value);case 10:l.push(D),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),O("Failed to create account.");case 16:w(!1);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}());return Object(k.jsx)(B.a,{className:"shadow content-card card-2 mb-3",children:Object(k.jsxs)(B.a.Body,{children:[Object(k.jsx)("p",{className:"text-center mb-4 text-title",children:"Sign Up"}),u&&Object(k.jsx)(v.a,{variant:"danger",children:u}),Object(k.jsxs)(re.a,{className:"mb-4",onSubmit:I,children:[Object(k.jsxs)(re.a.Group,{id:"username",className:"mb-2",children:[Object(k.jsx)(re.a.Label,{children:"Username"}),Object(k.jsx)(re.a.Control,{type:"text",ref:r,required:!0})]}),Object(k.jsxs)(re.a.Group,{id:"email",className:"mb-2",children:[Object(k.jsx)(re.a.Label,{children:"Email"}),Object(k.jsx)(re.a.Control,{type:"email",ref:a,required:!0})]}),Object(k.jsxs)(re.a.Group,{id:"password",className:"mb-2",children:[Object(k.jsx)(re.a.Label,{children:"Password"}),Object(k.jsx)(re.a.Control,{type:"password",ref:n,required:!0})]}),Object(k.jsxs)(re.a.Group,{id:"confirm-password",className:"mb-4",children:[Object(k.jsx)(re.a.Label,{children:"Confirm Password"}),Object(k.jsx)(re.a.Control,{type:"password",ref:s,required:!0})]}),Object(k.jsxs)(f.a,{disabled:g,type:"submit",className:"w-100",children:[Object(k.jsx)("i",{className:"far fa-edit"})," Sign Up"]})]}),Object(k.jsx)("div",{className:"text-center mt-4",children:Object(k.jsxs)("p",{children:["Already have an account? ",Object(k.jsx)(m.b,{to:{pathname:"/login",state:{redirect:D}},children:"Log in"})]})})]})})},le=function(){var e,t,a=Object(c.useRef)(),n=Object(c.useRef)(),s=C().login,r=Object(x.g)(),i=Object(c.useState)(""),l=Object(h.a)(i,2),j=l[0],o=l[1],u=Object(c.useState)(!1),O=Object(h.a)(u,2),p=O[0],y=O[1],g=Object(c.useState)(null!==(e=null===(t=Object(x.h)().state)||void 0===t?void 0:t.redirect)&&void 0!==e?e:"/"),w=Object(h.a)(g,2),N=w[0],S=(w[1],Object(c.useState)(!1)),D=Object(h.a)(S,2),I=D[0],P=(D[1],function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,o(""),y(!0),e.next=6,s(a.current.value,n.current.value);case 6:setTimeout((function(){r.push(N)}),500),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o("Failed to login.");case 12:y(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}());return Object(k.jsxs)(B.a,{className:"shadow content-card card-2",children:[I&&Object(k.jsx)(x.a,{to:N}),Object(k.jsxs)(B.a.Body,{children:[Object(k.jsx)("p",{className:"mb-2 text-center text-title",children:"Login"}),j&&Object(k.jsx)(v.a,{variant:"danger",children:j}),Object(k.jsxs)(re.a,{children:[Object(k.jsxs)(re.a.Group,{id:"email",className:"mb-2",children:[Object(k.jsx)(re.a.Label,{children:"Email"}),Object(k.jsx)(re.a.Control,{type:"email",ref:a,required:!0})]}),Object(k.jsxs)(re.a.Group,{id:"password",className:"mb-2",children:[Object(k.jsx)(re.a.Label,{children:"Password"}),Object(k.jsx)(re.a.Control,{type:"password",ref:n,required:!0})]}),Object(k.jsx)(f.a,{disabled:p,type:"submit",className:"w-100 mt-4",onClick:P,children:"Login"})]}),Object(k.jsx)("div",{className:"mt-4 text-center",children:Object(k.jsxs)("p",{children:["Don't have an account? ",Object(k.jsx)(m.b,{to:{pathname:"/signup",state:{redirect:N}},children:"Sign up"})]})})]})]})},je=a(145),oe=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(k.jsx)(I,{children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(R,{}),Object(k.jsx)(je.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"calc(100vh - 225px",margin:"50px auto"},children:Object(k.jsx)(x.d,{children:Object(k.jsxs)(G,{children:[Object(k.jsx)(x.b,{path:"/",exact:!0,component:Q}),Object(k.jsx)(x.b,{path:"/login",component:le,exact:!0}),Object(k.jsx)(x.b,{path:"/signup",component:ie,exact:!0}),Object(k.jsx)(se,{path:"/game/:gameId",component:ne})]})})})]})})}}]),a}(n.a.Component);a(138);r.a.render(Object(k.jsx)(oe,{}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.297f30ae.chunk.js.map