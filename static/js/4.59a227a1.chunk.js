(this["webpackJsonpreact-todo-api"]=this["webpackJsonpreact-todo-api"]||[]).push([[4],{93:function(e,t,c){"use strict";c.r(t);var n=c(14),i=c(3),a=c(2),o=c(0),r=c(4),l=c(90),s=c(24),j=c(5),u=c(23),b=c(17),d=c(1),O=Object(r.b)({key:"textState",default:""}),f=Object(r.c)({key:"charCountState",get:function(e){return(0,e.get)(O).length}});t.default=function(e){var t=e.task,c=Object(o.useRef)(null),x=Object(r.d)(b.b),h=Object(a.a)(x,2),g=h[0],p=h[1],m=g.findIndex((function(e){return e===t})),v=Object(r.d)(O),k=Object(a.a)(v,2),y=k[0],C=k[1],w=Object(o.useState)(t.completed),S=Object(a.a)(w,2),I=S[0],z=S[1],E=Object(o.useState)(null),Z=Object(a.a)(E,2),D=Z[0],G=Z[1];Object(o.useEffect)((function(){C(t.title)}),[C,t.title]),Object(o.useEffect)((function(){c.current.focus()}),[]);var J=function(e,t,c){return[].concat(Object(n.a)(e.slice(0,t)),[c],Object(n.a)(e.slice(t+1)))};var A=Object(r.e)(f);return Object(d.jsxs)(l.d,{sx:{height:"100vh",flexDirection:"column"},bg:"muted",children:[D,Object(d.jsx)(l.a,{sx:{height:"77px",padding:"5px",textAlign:"center",borderBottom:"1px solid #442929",bg:"nextPrimary",color:"secondary"},children:Object(d.jsx)(l.e,{children:"Edycja zadania"})}),Object(d.jsxs)(l.a,{sx:{flexGrow:1,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:"20px"},children:[Object(d.jsxs)(l.g,{sx:{alignItems:"center"},children:[Object(d.jsx)(l.c,{checked:I,onChange:function(e){return z(e.target.checked)}}),Object(d.jsx)(l.m,{ref:c,sx:{flexGrow:1},value:y,onChange:function(e){return C(e.target.value)}})]}),Object(d.jsxs)(l.i,{sx:{alignSelf:"end",color:"secondary"},children:["Ilo\u015b\u0107 znak\xf3w: ",A]})]}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.b,{variant:"triple",onClick:function(){var e=J(g,m,Object(i.a)(Object(i.a)({},t),{},{title:y,completed:I}));p(e),s.a.put("/todos/"+t.id,{completed:I,title:y,user_id:"1292"}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),G(Object(d.jsx)(j.a,{to:"/"}))},children:"Zapisz Zmiany"}),Object(d.jsx)(l.b,{variant:"triple",onClick:function(){var e=function(e,t){return[].concat(Object(n.a)(e.slice(0,t)),Object(n.a)(e.slice(t+1)))}(g,m);p(e),s.a.delete("/todos/"+t.id).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},children:"Usu\u0144 Zadanie"}),Object(d.jsx)(u.b,{to:"/",children:Object(d.jsx)(l.b,{variant:"triple",children:"Wr\xf3\u0107"})})]})]})}}}]);
//# sourceMappingURL=4.59a227a1.chunk.js.map