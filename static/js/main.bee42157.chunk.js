(this["webpackJsonpstudent-card"]=this["webpackJsonpstudent-card"]||[]).push([[0],{31:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(17),r=a.n(s),i=a(8),l=a(10),o=(a(24),a(7)),d=a(2),b=a(12);var m=a(0),j=function(){return Object(m.jsx)("div",{className:"fixed-top bg-dark d-flex justify-content-center align-items-center h-100 bg-opacity-25 shadow",children:Object(m.jsxs)("div",{className:"col-md-4 offset-md-0 bg-light rounded-3 m-0",children:[Object(m.jsx)("p",{className:"text-success p-3 m-0",children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e!"}),Object(m.jsx)("div",{className:"container d-flex justify-content-end border w-100",children:Object(m.jsx)(o.b,{to:"/student-card",children:Object(m.jsx)("button",{type:"button",className:"btn text-primary",children:"close"})})})]})})},u=function(e){var t=e.label,a=e.type,c=e.value,n=e.name,s=e.error,r=e.onChange;return Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:n,children:t}),Object(m.jsx)("input",{type:a,className:"form-control ".concat(s?"is-invalid":"is-valid"),value:c,name:n,id:n,onChange:r,autoComplete:"off"}),Object(m.jsx)("p",{className:"invalid-feedback",children:s})]})},p=function(e){var t=e.data,a=e.getData,n=e.history,s=Object(c.useState)(t||{name:{name:"name",description:"\u0418\u043c\u044f",value:""},soname:{name:"soname",description:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:""},date:{name:"date",description:"\u0413\u043e\u0434 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:""},portfolio:{name:"portfolio",description:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",value:""}}),r=Object(l.a)(s,2),o=r[0],d=r[1],p=Object(c.useState)({}),O=Object(l.a)(p,2),h=O[0],x=O[1],f=Object(c.useState)(!1),v=Object(l.a)(f,2),g=v[0],N=v[1];Object(c.useEffect)((function(){return k()}),[o]);var y=function(e){var t=e.target;d((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(b.a)({},t.name,Object(i.a)(Object(i.a)({},e[t.name]),{},{value:t.value})))}))},w={name:{isRequired:{message:'\u041f\u043e\u043b\u0435 "'.concat(o.name.description,'" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u0435\u043d\u0438\u044f')}},soname:{isRequired:{message:'\u041f\u043e\u043b\u0435 "'.concat(o.soname.description,'" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u0435\u043d\u0438\u044f')}},date:{isRequired:{message:'\u041f\u043e\u043b\u0435 "'.concat(o.date.description,'" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u0435\u043d\u0438\u044f')},isCorrectDate:{message:'\u041f\u043e\u043b\u0435 "'.concat(o.date.description,'" \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e')}},portfolio:{isRequired:{message:'\u041f\u043e\u043b\u0435 "'.concat(o.portfolio.description,'" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u0435\u043d\u0438\u044f')},isUrl:{message:'\u041f\u043e\u043b\u0435 "'.concat(o.portfolio.description,'" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u043e\u0439')}}};function k(){var e=function(e,t){var a={};function c(e,t,a){var c=!1;switch(e){case"isRequired":c=""===t.trim();break;case"isCorrectDate":c=t<1900||t>(new Date).getFullYear();break;case"isUrl":c=!/^https?:\/\/[\w.-_]+\.[a-z]{2,4}(\/[\w-_/]+)*$/.test(t)}if(c)return a.message}for(var n in e)for(var s in t[n]){var r=c(s,e[n].value,t[n][s]);r&&!a[e[n].name]&&(a[e[n].name]=r)}return a}(o,w);return x(e),0===Object.keys(e).length}var S=0===Object.keys(h).length;return Object(m.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(m.jsx)("h1",{children:t?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k()&&(a(o),t?N(!0):n.push("/student-card"))},className:"form",children:[Object(m.jsx)(u,{label:o.name.description,type:"text",name:o.name.name,value:o.name.value,onChange:y,error:h[o.name.name]}),Object(m.jsx)(u,{label:o.soname.description,type:"text",name:o.soname.name,value:o.soname.value,onChange:y,error:h[o.soname.name]}),Object(m.jsx)(u,{label:o.date.description,type:"number",name:o.date.name,value:o.date.value,onChange:y,error:h[o.date.name]}),Object(m.jsx)(u,{label:o.portfolio.description,type:"text",name:o.portfolio.name,value:o.portfolio.value,onChange:y,error:h[o.portfolio.name]}),t?Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("button",{type:"button",className:"btn bg-secondary mt-3 w-10 me-3 text-light",onClick:function(){n.push("/student-card")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(m.jsx)("button",{className:"btn bg-primary mt-3 px-3 text-light",type:"submit",disabled:!S,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]}):Object(m.jsx)("button",{className:"btn bg-primary mt-3 px-3 text-light",type:"submit",disabled:!S,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]}),g&&Object(m.jsx)(j,{})]})},O=function(){return Object(m.jsx)("nav",{className:"main-nav mb-2 col-md-6 offset-md-3",children:Object(m.jsxs)("ul",{className:"nav",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link active px-0",to:"/student-card",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link",to:"/student-card/edit",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})})},h=function(e){var t=e.data;return Object(m.jsx)("div",{className:"col-md-6 offset-md-3",children:t?Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"mb-3",children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(m.jsxs)("ul",{className:"list-group list-group-flush mb-2",children:[Object(m.jsxs)("li",{className:"list-group-item border-0 mb-2 p-0",children:[Object(m.jsx)("span",{className:"fw-bold",children:"".concat(t.name.description,":")}),"\xa0",t.name.value]}),Object(m.jsxs)("li",{className:"list-group-item border-0 mb-2 p-0",children:[Object(m.jsx)("span",{className:"fw-bold",children:"".concat(t.soname.description,":")}),"\xa0",t.soname.value]}),Object(m.jsxs)("li",{className:"list-group-item border-0 mb-2 p-0",children:[Object(m.jsx)("span",{className:"fw-bold",children:"".concat(t.date.description,":")}),"\xa0",function(e){var t,a=(new Date).getFullYear()-e;return t=a>=5&&a<=20?"\u043b\u0435\u0442":/\d*[234]/.test(String(a))?"\u0433\u043e\u0434\u0430":"\u043b\u0435\u0442","".concat(e," (").concat(a," ").concat(1===a?"\u0433\u043e\u0434":t,")")}(t.date.value)]}),Object(m.jsxs)("li",{className:"list-group-item border-0 mb-2 p-0",children:[Object(m.jsx)("span",{className:"fw-bold",children:"".concat(t.portfolio.description,":")}),"\xa0",t.portfolio.value]})]}),Object(m.jsx)(o.b,{to:"/student-card/edit",children:Object(m.jsx)("button",{className:"btn bg-primary px-3 text-light",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(m.jsx)(o.b,{to:"/student-card/edit",children:Object(m.jsx)("button",{className:"btn btn-primary mt-1",type:"button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"})})]})})};var x=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){n(JSON.parse(localStorage.getItem("data")))}),[]);var s=function(e){n(e),localStorage.setItem("data",JSON.stringify(e))};return Object(m.jsxs)(o.a,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(d.a,{path:"/student-card",exact:!0,render:function(e){return Object(m.jsx)(h,Object(i.a)({data:a},e))}}),Object(m.jsx)(d.a,{path:"/student-card/edit",render:function(e){return Object(m.jsx)(p,Object(i.a)({data:a,getData:s},e))}})]})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.bee42157.chunk.js.map