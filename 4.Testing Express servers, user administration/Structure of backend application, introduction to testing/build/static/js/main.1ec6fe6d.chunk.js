(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(15),o=n.n(r),i=(n(20),n(6)),a=n(3),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},j=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},l=n(4),f=n.n(l),b="/api/notes",d=function(){return f.a.get(b).then((function(t){return t.data}))},m=function(t){return f.a.post(b,t).then((function(t){return t.data}))},p=function(t,e){return f.a.put("".concat(b,"/").concat(t),e).then((function(t){return t.data}))},O=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},h=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),l=Object(a.a)(o,2),f=l[0],b=l[1],h=Object(c.useState)(!1),x=Object(a.a)(h,2),v=x[0],g=x[1],S=Object(c.useState)("some error happened..."),k=Object(a.a)(S,2),y=k[0],w=k[1];Object(c.useEffect)((function(){console.log("effect"),d().then((function(t){r(t)}))}),[]);var N=v?n:n.filter((function(t){return!0===t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:y}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return g(!v)},children:["show ",v?"important":"all"]})}),Object(u.jsx)("ul",{children:N.map((function(t,e){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});p(t,c).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(c){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),r(n.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:new Date,important:Math.random()<.5};m(e).then((function(t){r(n.concat(t)),b("")}))},children:[Object(u.jsx)("input",{onChange:function(t){b(t.target.value)},value:f}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]}),Object(u.jsx)(O,{})]})};o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1ec6fe6d.chunk.js.map