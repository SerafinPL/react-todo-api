(this["webpackJsonpreact-todo-api"]=this["webpackJsonpreact-todo-api"]||[]).push([[3],{92:function(e,t,c){"use strict";c.r(t);var a=c(14),n=c(2),o=c(0),i=c.n(o),d=c(4),s=c(24),r=c(90),l=c(5),j=c(23),u=c(17),b=c(1);t.default=function(e){var t=Object(o.useRef)(null),c=Object(d.f)(u.b),x=Object(o.useState)(""),h=Object(n.a)(x,2),O=h[0],f=h[1],p=Object(o.useState)(null),g=Object(n.a)(p,2),m=g[0],v=g[1],w=Object(o.useState)(!1),y=Object(n.a)(w,2),D=y[0],k=y[1];Object(o.useEffect)((function(){t.current.focus()}),[]);var C=function(){""!==O&&(k(!0),s.a.post("/users/1292/todos",{completed:"false",title:O,user_id:"1292"}).then((function(e){f(""),c((function(t){return[].concat(Object(a.a)(t),[{id:e.data.data.id,title:e.data.data.title,completed:e.data.data.completed,user_id:e.data.data.user_id}])})),k(!1),v(Object(b.jsx)(l.a,{to:"/"}))})).catch((function(e){return console.log(e)})))};return console.log(D),Object(b.jsxs)(r.d,{sx:{height:"100vh",flexDirection:"column"},bg:"muted",children:[m,Object(b.jsx)(r.a,{sx:{height:"77px",padding:"5px",textAlign:"center",borderBottom:"1px solid #442929",bg:"nextPrimary",color:"secondary"},children:Object(b.jsx)(r.e,{children:"Dodawanie zadania"})}),Object(b.jsx)(r.d,{sx:{flexGrow:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},children:D?Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)(r.k,{}),Object(b.jsx)(r.l,{sx:{color:"secondary"},children:"Dodaje Zadanie"})]}):Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)(r.f,{ref:t,sx:{width:"80%"},value:O,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){13===e.keyCode&&C()}}),Object(b.jsx)(r.b,{variant:"add",onClick:C,children:"Dodaj zadanie"})]})}),Object(b.jsx)(r.d,{children:Object(b.jsx)(j.b,{to:"/",exact:e.exact,style:{width:"100vw"},children:Object(b.jsx)(r.b,{children:"Lista Zada\u0144"})})})]})}}}]);
//# sourceMappingURL=3.b9d1874e.chunk.js.map