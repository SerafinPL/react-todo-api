(this["webpackJsonpreact-todo-api"]=this["webpackJsonpreact-todo-api"]||[]).push([[0],{17:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var c=n(4),o=Object(c.b)({key:"listStateMain",default:[]}),a=Object(c.b)({key:"fatchData",default:!1})},24:function(e,t,n){"use strict";var c=n(51),o=n.n(c).a.create({baseURL:"https://gorest.co.in/public/v1",headers:{Authorization:"Bearer 1c85a0a718a12c114f4ea88e552208e0769bacdff616d209a75e187b5eff5924"}});t.a=o},57:function(e,t,n){},58:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(30),r=n.n(a),i=(n(57),n(58),n(14)),s=n(2),d=n(24),l=n(4),b=n(90),u=n(3),j=n(23),f=n(17),h=n(1),m=function(e){var t=e.task,n=Object(l.d)(f.b),c=Object(s.a)(n,2),o=c[0],a=c[1],r=o.findIndex((function(e){return e===t})),m=function(e,t,n){return[].concat(Object(i.a)(e.slice(0,t)),[n],Object(i.a)(e.slice(t+1)))};return Object(h.jsx)(b.h,{sx:{margin:15},bg:"mess",children:Object(h.jsxs)(b.g,{children:[Object(h.jsx)(b.c,{checked:t.completed,onChange:function(e){return function(e){var n=m(o,r,Object(u.a)(Object(u.a)({},t),{},{completed:e}));a(n),d.a.put("/todos/"+t.id,{completed:e,title:t.title,user_id:"1292"}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}(e.target.checked)}}),Object(h.jsx)(j.b,{style:{textDecoration:"none"},to:"/"+t.id,children:Object(h.jsx)(b.l,{sx:{flexGrow:1,color:"tasks"},children:t.title})})]})})},x=Object(l.b)({key:"todoListSearch",default:""}),g=Object(l.c)({key:"searchState",get:function(e){var t=e.get,n=t(f.b),c=t(x);return n.filter((function(e){return-1!==e.title.toLowerCase().search(c.toLowerCase())}))}}),y=Object(l.c)({key:"ListStats",get:function(e){var t=(0,e.get)(f.b),n=t.length,c=t.filter((function(e){return e.completed})).length;return{totalNum:n,totalCompletedNum:c,totalUncompletedNum:n-c}}}),O=Object(l.b)({key:"selectViews",default:"Wszystkie"}),p=Object(l.c)({key:"selectChosenes",get:function(e){var t=e.get,n=t(g);switch(t(O)){case"Wykonane":return n.filter((function(e){return e.completed}));case"Niewykonane":return n.filter((function(e){return!e.completed}));default:return n}}}),k=function(e){var t=Object(l.d)(x),n=Object(s.a)(t,2),c=n[0],o=n[1],a=Object(l.d)(O),r=Object(s.a)(a,2),i=r[0],d=r[1],u=Object(l.e)(f.a),g=Object(l.e)(f.b),k=Object(l.e)(p),w=Object(l.e)(y),v=Object(h.jsx)(b.k,{sx:{margin:"25% auto"}});return u&&(v=g.length?k.map((function(e){return Object(h.jsx)(m,{task:e},e.id)})):Object(h.jsx)(b.i,{sx:{color:"mess"},children:" Brak zada\u0144 do wy\u015bwietlenia, dodaj nowe."})),Object(h.jsxs)(b.d,{sx:{flexDirection:"column",height:"100vh",position:"fixed",width:"100vw",maxHeight:"-webkit-fill-available"},bg:"muted",children:[Object(h.jsxs)(b.a,{sx:{padding:"5px",textAlign:"right",borderBottom:"1px solid #442929",bg:"nextPrimary"},children:[Object(h.jsx)(b.f,{placeholder:"Wyszukaj",value:c,onChange:function(e){return o(e.target.value)}}),Object(h.jsxs)(b.j,{value:i,onChange:function(e){d(e.target.value)},children:[Object(h.jsx)("option",{children:"Wszystkie"}),Object(h.jsx)("option",{children:"Wykonane"}),Object(h.jsx)("option",{children:"Niewykonane"})]}),Object(h.jsx)(b.i,{sx:{color:"mess"},children:"Wykonane: ".concat(w.totalCompletedNum," / Niewykonane ").concat(w.totalUncompletedNum)})]}),Object(h.jsx)(b.a,{sx:{flexGrow:1,overflowY:"auto",textAlign:"center",display:"flex",flexDirection:"column"},children:v}),Object(h.jsx)(b.a,{children:Object(h.jsx)(j.b,{to:"/newtask",children:Object(h.jsx)(b.b,{children:"Dodaj Zadanie"})})})]})},w=n(5),v=o.a.lazy((function(){return n.e(3).then(n.bind(null,92))})),F=o.a.lazy((function(){return n.e(4).then(n.bind(null,93))})),z=function(){var e,t=Object(l.d)(f.b),n=Object(s.a)(t,2),a=n[0],r=n[1],u=Object(l.f)(f.a);return Object(c.useEffect)((function(){d.a.get("/users/1000/todos").then((function(e){var t=Object(i.a)(e.data.data),n=Object(i.a)(t);if(e.data.meta.pagination.pages>1)for(var c=2;c<=e.data.meta.pagination.pages;c++)d.a.get("/users/1000/todos?page="+c).then((function(e){n=[].concat(Object(i.a)(n),Object(i.a)(e.data.data)),r(n)})).catch((function(e){return console.log(e)}));else r(t);u(!0)})).catch((function(e){return console.log(e)}))}),[r,u]),a&&(e=a.map((function(e){return Object(h.jsx)(w.b,{exact:!0,path:"/"+e.id,render:function(){return Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(b.k,{}),children:Object(h.jsx)(F,{task:e})})}},e.id)}))),Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(w.d,{children:[Object(h.jsx)(w.b,{path:"/newtask",render:function(){return Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(b.k,{}),children:Object(h.jsx)(v,{setlist:r})})}}),e,Object(h.jsx)(w.b,{path:"/",render:function(){return Object(h.jsx)(k,{list:a,setlist:r})}}),Object(h.jsx)(w.a,{to:"/"})]})})})},C=n(91),D={space:[0,4,8,16,32,64,128,256,512],fonts:{body:"geomanistregular, sans-serif",heading:"geomanistregular, sans-serif",monospace:"Menlo, monospace"},fontWeights:{body:300,heading:500,bold:700},lineHeights:{body:1.5,heading:2.5},colors:{text:"#442929",background:"#fff",primary:"#4c8573",nextPrimary:"#4444cf",secondary:"#d8f3eb",secondaryDark:"#33ff7a",muted:"#0e0e2f",mess:"#d8f3eb",tasks:"#0e0e2f"},forms:{select:{bg:"secondary",fontFamily:"body"},textarea:{bg:"secondary",fontFamily:"body"},input:{bg:"secondary",marginRight:"10px",fontFamily:"body","@media screen and (min-width: 500px)":{width:"75%",float:"left"}},checkbox:{cursor:"pointer"}},buttons:{primary:{fontFamily:"body",cursor:"pointer",color:"secondary",bg:"primary","&:hover":{bg:"mess",color:"primary"},width:"100%",height:"auto","@media screen and (min-width: 500px)":{width:"max-content",position:"fixed",bottom:"10px",right:"10px"}},secondary:{fontFamily:"body",cursor:"pointer",color:"background",bg:"secondary","&:hover":{bg:"secondaryDark"}},triple:{fontFamily:"body",cursor:"pointer",color:"secondary",bg:"primary","&:hover":{bg:"mess",color:"primary"},width:"31.33%",margin:"1%"},add:{fontFamily:"body",cursor:"pointer",color:"secondary",bg:"primary","&:hover":{bg:"mess",color:"primary"},margin:"1%","@media screen and (min-width: 500px)":{}}},a:{color:"#000",textDecoration:"none",fontFamily:"body"},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},code:{fontFamily:"monospace",fontSize:"inherit"}}},N=function(){return Object(h.jsx)(l.a,{children:Object(h.jsx)(C.a,{theme:D,children:Object(h.jsx)(z,{})})})};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.8f0e4577.chunk.js.map