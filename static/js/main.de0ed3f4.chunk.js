(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(10),a=c.n(s),n=(c(15),c(16),c(8)),l=c.n(n),r=c(7),i=c(6),o=c(2),d=c(3),j=c.n(d),u=c(1);function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){return b("/users/".concat(e))},O=c(0),m=Object(u.createContext)(null),x=function(e){var t=e.children,c=Object(u.useState)(!1),s=Object(o.a)(c,2),a=s[0],n=s[1],l=Object(u.useState)({userId:null,todo:null}),d=Object(o.a)(l,2),h=d[0],x=d[1],f=Object(u.useState)(null),v=Object(o.a)(f,2),p=v[0],N=v[1],y=Object(u.useState)(null),g=Object(o.a)(y,2),k=g[0],T=g[1],w=Object(u.useState)(""),S=Object(o.a)(w,2),C=S[0],D=S[1];Object(u.useEffect)((function(){n(!0);var e=function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/todos");case 2:t=e.sent,N(t),T(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().finally((function(){return n(!1)}))}),[]);var I={todos:p,visibleTodos:Object(u.useMemo)((function(){if(!k)return[];var e=Object(r.a)(k);return e=e.filter((function(e){return e.title.toLocaleLowerCase().includes(C.toLocaleLowerCase())}))}),[k,C]),filteredTodos:k,query:C,setQuery:D,setFilteredTodos:T,isLoading:a,selectedTodoData:h,setSelectedTodoData:x};return Object(O.jsx)(m.Provider,{value:I,children:t})},f=function(){var e=Object(u.useContext)(m);if(!e)throw new Error("No context provided");return e},v=function(){var e=f(),t=e.setSelectedTodoData,c=e.visibleTodos,s=e.selectedTodoData,a=s.todo;return Object(O.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:"fas fa-check"})})}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:" "})]})}),Object(O.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e){return Object(O.jsxs)("tr",{"data-cy":"todo",className:l()({"has-background-info-light":e.id===(null===a||void 0===a?void 0:a.id)}),children:[Object(O.jsx)("td",{className:"is-vcentered",children:e.id}),Object(O.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(O.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(O.jsx)("i",{className:"fas fa-check"})})}),Object(O.jsx)("td",{className:"is-vcentered is-expanded",children:Object(O.jsx)("p",{className:l()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(O.jsx)("td",{className:"has-text-right is-vcentered",children:Object(O.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){t({userId:e.userId,todo:e})}(e)},children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:l()({"far fa-eye":e.id!==(null===a||void 0===a?void 0:a.id),"far fa-eye-slash":e.id===(null===a||void 0===a?void 0:a.id)})})})})})]})}))})]})},p=function(){var e=f(),t=e.todos,c=e.setFilteredTodos,s=e.query,a=e.setQuery;return Object(O.jsxs)("form",{className:"field has-addons",children:[Object(O.jsx)("p",{className:"control",children:Object(O.jsx)("span",{className:"select",children:Object(O.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var s=e.target.value;if(t){var a=Object(r.a)(t);switch(s){case"all":c(t);break;case"completed":a=a.filter((function(e){return e.completed}));break;case"active":a=a.filter((function(e){return!e.completed}))}c(a)}},children:[Object(O.jsx)("option",{value:"all",children:"All"}),Object(O.jsx)("option",{value:"active",children:"Active"}),Object(O.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(O.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(O.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value)}}),Object(O.jsx)("span",{className:"icon is-left",children:Object(O.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(O.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(O.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},N=(c(19),function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(O.jsx)("div",{className:"Loader__content"})})}),y=function(){var e=Object(u.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(u.useState)(!1),n=Object(o.a)(a,2),l=n[0],r=n[1],d=f(),b=d.setSelectedTodoData,m=d.selectedTodoData,x=m.userId,v=m.todo;return Object(u.useEffect)((function(){var e=function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(!0),null===x){e.next=6;break}return e.next=4,h(x);case 4:t=e.sent,s(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().finally((function(){return r(!1)}))}),[x]),Object(O.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(O.jsx)("div",{className:"modal-background"}),l?Object(O.jsx)(N,{}):Object(O.jsxs)("div",{className:"modal-card",children:[Object(O.jsxs)("header",{className:"modal-card-head",children:[Object(O.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===v||void 0===v?void 0:v.id)}),Object(O.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return b({userId:null,todo:null})}})]}),Object(O.jsxs)("div",{className:"modal-card-body",children:[Object(O.jsx)("p",{className:"block","data-cy":"modal-title",children:null===v||void 0===v?void 0:v.title}),Object(O.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==v&&void 0!==v&&v.completed?Object(O.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(O.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(O.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===c||void 0===c?void 0:c.name})]})]})]})]})},g=function(){var e=f(),t=e.isLoading,c=e.selectedTodoData;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("h1",{className:"title",children:"Todos:"}),Object(O.jsx)("div",{className:"block",children:Object(O.jsx)(p,{})}),Object(O.jsxs)("div",{className:"block",children:[t&&Object(O.jsx)(N,{}),Object(O.jsx)(v,{})]})]})})}),c.userId&&Object(O.jsx)(y,{})]})};a.a.render(Object(O.jsx)(x,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.de0ed3f4.chunk.js.map