(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c),i=(a(93),a(20)),l=a(35),u=a(77),s=a.n(u),d=a(26),m=a(17),p={ADD_TO_DO:"ADD_TO_DO",EDIT_TO_DO:"EDIT_TO_DO",DELETE_TO_DO:"DELETE_TO_DO",TOGGLE_STATUS_CHECKITEM_TO_DO:"TOGGLE_STATUS_CHECKITEM_TO_DO"},f={todoList:[{id:1,subject:"Subject Todo",describe:"Summary Describetion",checkList:[{id:1,text:"first job",status:!1},{id:2,text:"second job",status:!1}]},{id:2,subject:"Subject Todo",describe:"Summary Describetion",checkList:[{id:1,text:"first job",status:!1},{id:2,text:"second job",status:!1}]}]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p.ADD_TO_DO:return Object(m.a)({},e,{todoList:[].concat(Object(d.a)(e.todoList),[n])});case p.EDIT_TO_DO:return Object(m.a)({},e,{todoList:e.todoList.map((function(e){return e.id==n.id?n:e}))});case p.DELETE_TO_DO:return Object(m.a)({},e,{todoList:e.todoList.filter((function(e){return e.id!==n}))});case p.TOGGLE_STATUS_CHECKITEM_TO_DO:return Object(m.a)({},e,{todoList:e.todoList.map((function(e){return e.id==n.todoId?Object(m.a)({},e,{checkList:e.checkList.map((function(e){return e.id==n.itemId?Object(m.a)({},e,{status:!e.status}):e}))}):e}))});default:return e}},E=Object(l.c)({todo:b}),h=[s.a],O=Object(l.d)(E,l.a.apply(void 0,h)),T=a(154),g=a(155),j=a(156),k=a(157),v=a(36),D=a(151),y=a(152),C=a(145),_=a(153),x=a(80),L=a(166),I=a(28),S=a(64),B=a.n(S),N=a(79),w=a.n(N),A=(a(98),a(165)),G=a(167),W=a(149),z=a(150),M=a(78),H=a.n(M),K=(a(99),Object(C.a)({root:{width:"100%"},inputCheck:{marginRight:10},checkItem:{cursor:"pointer"},describeTitle:{paddingLeft:5,marginBottom:5}}));function R(e){var t=e.todo,a=e.toggleStatusCheckItem,n=K();return o.a.createElement("div",{className:n.root},o.a.createElement(A.a,null,o.a.createElement(G.a,{className:n.describeTitle,expandIcon:o.a.createElement(H.a,null),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header"},o.a.createElement("p",{className:n.describeTitle},t.describe)),o.a.createElement(W.a,null,o.a.createElement(z.a,{color:"textSecondary"},o.a.createElement("ul",null,t.checkList.map((function(e){return o.a.createElement("span",{onClick:function(){return a(t.id,e.id)},key:"".concat(t.id).concat(e.id)},o.a.createElement("li",null,e.status?o.a.createElement("span",{className:n.checkItem},o.a.createElement("input",{className:n.inputCheck,type:"checkbox",checked:!0}),o.a.createElement("del",null,e.text)):o.a.createElement("span",{className:n.checkItem},o.a.createElement("input",{className:n.inputCheck,type:"checkbox",null:!0}),e.text)))})))))))}var U=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},editBtn:{color:"blue","&:hover":{color:"darkblue",textDecoration:"none",fontWeight:"bold"}},deleteBtn:{color:"gray","&:hover":{color:"#d5172d",textDecoration:"none",fontWeight:"bold"}},iconTodo:{color:"#929292",marginRight:10}}}));var Y=Object(i.b)(null,{deleteTodo:function(e){return{type:p.DELETE_TO_DO,payload:e}},toggleStatusCheckItem:function(e,t){return{type:p.TOGGLE_STATUS_CHECKITEM_TO_DO,payload:{todoId:e,itemId:t}}}})((function(e){var t=e.todo,a=e.deleteTodo,n=e.toggleStatusCheckItem,c=U(),r=o.a.useState(null),i=Object(v.a)(r,2),l=i[0],u=i[1],s=function(){u(null)};return o.a.createElement(D.a,null,o.a.createElement(y.a,null,o.a.createElement("div",null,o.a.createElement(_.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},o.a.createElement(w.a,{className:c.iconTodo}),o.a.createElement("p",null,t.subject)),o.a.createElement(x.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:s},o.a.createElement(L.a,null,o.a.createElement(I.b,{to:"/update/".concat(t.id),className:c.editBtn},"Edit")),o.a.createElement(L.a,{onClick:function(){s(),B.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,cancelButtonColor:"#3085d6",confirmButtonColor:"#eee",confirmButtonText:"Yes, delete it!",showClass:{popup:"swal2-noanimation",backdrop:"swal2-noanimation"},hideClass:{popup:"",backdrop:""},customClass:{container:"container-class",popup:"popup-class",header:"header-class",title:"title-class",closeButton:"close-button-class",icon:"icon-class",image:"image-class",content:"content-class",input:"input-class",actions:"actions-class",confirmButton:"confirm-button-class",cancelButton:"cancel-button-class",footer:"footer-class"}}).then((function(e){e.value&&(a(t.id),B.a.fire("Deleted!","Your file has been deleted.","success"))}))},className:c.deleteBtn},"Delete"))),o.a.createElement(R,{todo:t,toggleStatusCheckItem:n})))})),F=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),marginTop:"50px"}},addBtn:{backgroundColor:"#0b9b67",color:"white"},addLink:{"&:hover":{textDecoration:"none"}}}}));var J=Object(i.b)((function(e){return{todoList:e.todo.todoList}}),{})((function(e){var t=e.todoList,a=(e.props,F());return o.a.createElement(T.a,{className:a.root},o.a.createElement(g.a,{id:"card"},o.a.createElement(j.a,null,o.a.createElement(I.b,{to:"/add",className:a.addLink},o.a.createElement(_.a,{size:"large",className:a.addBtn},o.a.createElement("p",null,"Add Todo")))),o.a.createElement(k.a,null,t.map((function(e){return o.a.createElement(Y,{key:e.id,todo:e})})))))})),q=a(13),P=a(25),Q=a(160),V=a(161),X=a(56),Z=Object(X.a)((function(e){return e.todo.todoList}),(function(e){return e.length+1})),$=a(158),ee=a(162),te=a(159),ae=a(163),ne=Object(C.a)((function(e){return{root:{minWidth:275,marginTop:"50px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:20,marginBottom:"50px"},pos:{marginBottom:12},margin:{margin:e.spacing(1)},addCheckItemBtn:{backgroundColor:"#f54189","&:hover":{color:"#fff",fontWeight:"bold"}},saveBtn:{backgroundColor:"#2db378","&:hover":{backgroundColor:"#17744b",color:"#fff",fontWeight:"bold"}}}}));var oe=Object(X.b)({todoId:Z}),ce=Object(i.b)(oe,{addTodo:function(e){return{type:p.ADD_TO_DO,payload:e}},editTodo:function(e){return{type:p.EDIT_TO_DO,payload:e}}})((function(e){var t=e.addTodo,a=e.todoId,c=e.editTodo,r=ne(),l=Object(q.e)(),u=Object(q.f)().id,s=Object(i.c)((function(e){return e.todo.todoList.find((function(e){return e.id==u}))})),p=Object(n.useState)(s?{subject:s.subject,describe:s.describe}:{subject:"",describe:""}),f=Object(v.a)(p,2),b=f[0],E=f[1],h=Object(n.useState)(s?s.checkList:[{id:1,text:"",status:!1}]),O=Object(v.a)(h,2),T=O[0],g=O[1],j=function(e){var t=e.target,a=t.name,n=t.value;E(Object(m.a)({},b,Object(P.a)({},a,n)))};return o.a.createElement($.a,{className:r.root},o.a.createElement(te.a,null,o.a.createElement(z.a,{className:r.title,color:"textSecondary",gutterBottom:!0},"Add ToDo"),o.a.createElement(Q.a,{onSubmit:function(e){return function(e){e.preventDefault(),s&&c(Object(m.a)({id:s.id},b,{checkList:T})),!s&&t(Object(m.a)({id:a},b,{checkList:T})),l.push("/")}(e)}},o.a.createElement(V.a,null,o.a.createElement(ae.a,{value:b.subject,onChange:j,name:"subject",id:"title",fullWidth:!0,label:"subject Todo",variant:"outlined"})),o.a.createElement(V.a,null,o.a.createElement(ae.a,{value:b.describe,onChange:j,name:"describe",id:"describe",fullWidth:!0,label:"Describetion Todo",variant:"outlined"})),T.map((function(e){return o.a.createElement(V.a,{key:e.id},o.a.createElement(ae.a,{value:e.text,onChange:function(t){return function(e,t){g(T.map((function(a){return a.id===t?Object(m.a)({},a,{text:e.target.value}):a})))}(t,e.id)},type:"text",name:"title",id:"title",fullWidth:!0,label:"Check Todo",variant:"outlined"}))})),o.a.createElement(ee.a,null,o.a.createElement(_.a,{type:"button",variant:"contained",color:"secondary",className:r.addCheckItemBtn,onClick:function(){g([].concat(Object(d.a)(T),[{id:T.length+1,text:"",status:!1}]))}},"Add checkItem"),"  ",o.a.createElement(_.a,{type:"submit",className:r.saveBtn},"Save")))))})),re=a(164),ie=(a(102),a(57)),le=(a(103),[{id:0,url:"goldengate.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59"},{id:1,url:"mountains.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59"},{id:2,url:"alarmclock.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59"},{id:3,url:"bridge.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59"},{id:4,url:"motorbike.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59"}]),ue=function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],c=t[1],r=Object(ie.c)(le[a],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:ie.b.molasses});return Object(n.useEffect)((function(){setInterval((function(){return c((function(e){return(e+1)%4}))}),2e3)}),[]),r.map((function(e){var t=e.item,a=e.props,n=e.key;return o.a.createElement(ie.a.div,{key:n,className:"bg",style:Object(m.a)({},a,{backgroundImage:"url(https://assets.imgix.net/unsplash/".concat(t.url,"&auto=format&fit=crop)")})})}))},se=[{path:"/update/:id",name:"AddTodoForm",Component:ce},{path:"/add",name:"AddTodoForm",Component:ce},{path:"/maktab_React-Redux-ToDo",name:"TodoList",Component:J},{path:"/",name:"TodoList",Component:J}];var de=function(){return o.a.createElement(i.a,{store:O},o.a.createElement("div",null,o.a.createElement(ue,null),o.a.createElement(I.a,null,o.a.createElement("div",{className:"container"},se.map((function(e){var t=e.path,a=e.Component;return o.a.createElement(q.a,{key:t,exact:!0,path:t},(function(e){var t=e.match;return o.a.createElement(re.a,{in:null!=t,timeout:800,classNames:"page",unmountOnExit:!0},o.a.createElement("div",{className:"page"},o.a.createElement(a,null)))}))}))))))};a(104);r.a.render(o.a.createElement(de,null),document.getElementById("root"))},88:function(e,t,a){e.exports=a(105)},93:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.3af8efbe.chunk.js.map