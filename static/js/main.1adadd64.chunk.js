(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),o=a.n(c);a(13),a(14);var i=function(){const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)(""),[o,i]=Object(n.useState)("Medium"),[r,s]=Object(n.useState)(!1),[m,d]=Object(n.useState)(""),[u,p]=Object(n.useState)("all"),[E,g]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=JSON.parse(localStorage.getItem("tasks"));e&&t(e);const a=JSON.parse(localStorage.getItem("darkMode"));null!==a&&g(a)},[]),Object(n.useEffect)(()=>{localStorage.setItem("tasks",JSON.stringify(e))},[e]),Object(n.useEffect)(()=>{localStorage.setItem("darkMode",JSON.stringify(E))},[E]);const b=e.filter(e=>"completed"===u?e.completed:"pending"!==u||!e.completed);return l.a.createElement("div",{className:"App ".concat(E?"dark":"light")},l.a.createElement("h1",null,"To-Do List"),l.a.createElement("button",{onClick:()=>{g(!E)},className:"toggle-dark-mode"},"Toggle Dark Mode"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:a,onChange:e=>c(e.target.value),placeholder:"Add a new task"}),l.a.createElement("select",{value:o,onChange:e=>i(e.target.value)},l.a.createElement("option",{value:"Low"},"Low"),l.a.createElement("option",{value:"Medium"},"Medium"),l.a.createElement("option",{value:"High"},"High")),l.a.createElement("button",{onClick:()=>{a&&(t([...e,{text:a,completed:!1,priority:o,id:Date.now()}]),c(""))}},"Add Task")),r&&l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:m,onChange:e=>d(e.target.value)}),l.a.createElement("button",{onClick:()=>(a=>{const n=[...e];n[a].text=m,t(n),s(!1)})(e.findIndex(e=>e.text===m))},"Save Edit")),l.a.createElement("div",null,l.a.createElement("button",{onClick:()=>p("all")},"All"),l.a.createElement("button",{onClick:()=>p("completed")},"Completed"),l.a.createElement("button",{onClick:()=>p("pending")},"Pending")),l.a.createElement("div",{className:"task-list"},b.map((a,n)=>l.a.createElement("div",{key:a.id,className:"todo-item"},l.a.createElement("span",{onClick:()=>(a=>{const n=[...e];n[a].completed=!n[a].completed,t(n)})(n),className:a.completed?"completed":""},a.text),l.a.createElement("div",null,l.a.createElement("button",{className:"edit-btn",onClick:()=>(t=>{s(!0),d(e[t].text)})(n)},"Edit"),l.a.createElement("button",{onClick:()=>(a=>{const n=e.filter((e,t)=>t!==a);t(n)})(n),className:"delete-btn"},"Delete"))))))};var r=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:o}=t;a(e),n(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),r()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.1adadd64.chunk.js.map