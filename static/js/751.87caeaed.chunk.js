"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[751],{9063:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r,o,a,d,s=t(168),p=t(4709),c=p.Z.h1(i||(i=(0,s.Z)(["\n  color: var(--page-title-color);\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: -0.56px;\n  padding-top: 35px;\n  padding-bottom: 3px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    letter-spacing: -0.64px;\n    padding-bottom: 6px;\n    padding-top: 46px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 44px;\n    letter-spacing: -0.88px;\n    padding-top: 44px;\n  }\n"]))),l=p.Z.div(r||(r=(0,s.Z)(["\n  position: absolute;\n  top: 0;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--accent-color);\n\n  @media screen and (min-width: 768px) {\n    width: 14px;\n    height: 14px;\n  }\n"]))),x=(0,p.Z)(l)(o||(o=(0,s.Z)(["\n  top: 30px;\n  left: 333px;\n\n  @media screen and (min-width: 768px) {\n    top: 13px;\n    left: 694px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 1150px;\n  }\n"]))),h=p.Z.div(a||(a=(0,s.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 241px;\n  width: 6px;\n  height: 6px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--background-color-circle);\n\n  @media screen and (min-width: 768px) {\n    width: 12px;\n    height: 12px;\n    border-radius: 3px;\n\n    left: 405px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 707px;\n  }\n"]))),m=p.Z.section(d||(d=(0,s.Z)(["\n  position: relative;\n"]))),u=t(184),g=function(n){var e=n.title;return(0,u.jsxs)(m,{children:[(0,u.jsx)(c,{children:e}),(0,u.jsx)(l,{}),(0,u.jsx)(x,{}),(0,u.jsx)(h,{})]})}},5390:function(n,e,t){t.d(e,{X:function(){return i}});var i=function(n){if(n<0)return"0 min";var e=Math.floor(n/60),t=n%60;return 0===e?"".concat(t," min"):0===t?"".concat(e,e>1?" hours":" hour"):"".concat(e," h ").concat(t," min")}},7751:function(n,e,t){t.r(e),t.d(e,{default:function(){return se}});var i,r=t(2791),o=t(5048),a=t(8509),d=t(6739),s=t(2730),p=t(9439),c=t(5705),l=t(6727),x=[{id:1,time:"5"},{id:2,time:"10"},{id:3,time:"15"},{id:4,time:"20"},{id:5,time:"40"},{id:6,time:"45"},{id:7,time:"50"},{id:8,time:"60"},{id:9,time:"65"},{id:10,time:"70"},{id:11,time:"80"},{id:12,time:"85"},{id:13,time:"90"},{id:14,time:"95"},{id:15,time:"100"},{id:16,time:"105"},{id:17,time:"110"},{id:18,time:"115"},{id:19,time:"120"}],h=x.map((function(n){return n.time})),m=l.Ry().shape({photo:l.nK().required("You need to provide a file").test("fileSize","To limit the file size to a maximum of 3MB",(function(n){return n.size<=3e6})).test("type","Only the following formats are accepted: .jpeg, .jpg, .bmp, .png, .svg, and .webp",(function(n){return n&&("image/jpeg"===n.type||"image/bmp"===n.type||"image/png"===n.type)})),title:l.Z_().required("Please enter the recipe title").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Title must contain letters"),about:l.Z_().required("Please describe the recipe").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Describe must contain letters"),category:l.Z_().required("Please choose a category for your recipe"),time:l.Z_().required("Please select the cooking time").oneOf(h),ingredients:l.IX().of(l.Ry().shape({id:l.Z_().required("Please select an ingredient"),measure:l.Z_().required("Please enter the measure")})),preparation:l.IX().of(l.Z_().required("Please enter the recipe")).test("notEmptyStrings","Please enter the recipe",(function(n){return n&&n[0]&&n[0].length>0&&/[^\s\n]/.test(n[0])&&n.every((function(n){return n&&n.length>0}))}))}),u=t(536),g=t(168),f=t(4709),b=f.Z.p(i||(i=(0,g.Z)(["\n  color: var(--error-color);\n  font-size: 12px;\n\n  @media screen and (min-width: 768px) {\n        font-size: 14px;\n      }\n"]))),v=t(184),j=function(n){var e=n.name,t=n.style;return(0,v.jsx)(c.Bc,{name:e,render:function(n){return(0,v.jsx)(b,{style:t,children:n})}})};var w=t.p+"static/media/sprite.621d1cf85f7aeed90666e3323bba8f71.svg",Z=t(5600),y=function(n,e,t,i){var r=e(t,n);return e(i,n)&&r},_=t(5390),k=t(974),z=t(9278);var P,C,F,N,S,q,I,A,E,O,R,L=(0,k.Z)("div",{target:"e160gzhj8"})({name:"ryfeq5",styles:"position:relative;margin-bottom:100px"}),T=(0,k.Z)("h2",{target:"e160gzhj7"})({name:"1mjbzy3",styles:"color:#3e4462;font-size:24px;font-weight:600;line-height:1;letter-spacing:-0.48px;margin-bottom:24px;@media screen and (min-width: 768px){margin-bottom:36px;}"}),X=(0,k.Z)("div",{target:"e160gzhj6"})({name:"w7nyri",styles:"margin-right:14px;min-width:194px;@media screen and (min-width: 768px){margin-right:32px;min-width:398px;}"}),B=(0,k.Z)(z.ZP,{target:"e160gzhj5"})({name:"15atqa6",styles:"&:hover,&:focus{border:1px solid rgba(217, 217, 217, 1);border-radius:6px;}.custom-select{&__control{font-family:'Poppins';border:none;border-radius:6px;background-color:rgba(217, 217, 217, 0.157);font-size:14px;line-height:1;cursor:text;@media screen and (min-width: 768px){font-size:18px;}}&__menu{padding:4px 4px 4px 18px;box-shadow:0px 6.518518447875977px 7.8222222328186035px 0px rgba(0, 0, 0, 0.03);border:none;border-radius:6px;}&__menu-is-open{}&__menu-list{border:none;height:calc(6 * 20px + 10px);}&__value-container{padding:12px 8px;}&__single-value{color:#23262a;line-height:1;letter-spacing:-0.28px;}&__option{margin:6px 0;padding:0 3px;font-size:12px;color:#000000;letter-spacing:-0.24px;opacity:0.5;cursor:pointer;@media screen and (min-width: 768px){font-size:14px;}}&__option--is-focused{background-color:rgba(139, 170, 54, 0.2);}&__option--is-selected{background-color:var(--accent-color);}&__indicator-separator{display:none;}&__indicator{cursor:pointer;color:var(--accent-color);transition:stroke var(--transition-duration) var(--timing-function);&:hover,&:focus{transform:scale(1.1);}}&__menu-list::-webkit-scrollbar{width:4px;height:0px;}&__menu-list::-webkit-scrollbar-track{background:transparent;}&__menu-list::-webkit-scrollbar-thumb{padding:4px 0;border-radius:12px;background:#e7e5e5;cursor:pointer;}&__menu-list::-webkit-scrollbar-thumb:hover{background:var(--accent-color);}}"}),M=(0,k.Z)("div",{target:"e160gzhj4"})({name:"1d0i03h",styles:"margin-right:8px;width:109px;@media screen and (min-width: 768px){margin-right:40px;width:214px;}"}),Y=(0,k.Z)(c.gN,{target:"e160gzhj3"})({name:"1jgsjz9",styles:"outline:none;width:109px;height:54px;padding:0 0 0 5px;border:none;border-radius:6px;background-color:rgba(217, 217, 217, 0.157);color:#23262a;font-size:14px;line-height:1;letter-spacing:-0.28px;font-family:'Poppins';color:#23262a;cursor:text;&:focus,&:hover{border:1px solid rgba(217, 217, 217, 1);}@media screen and (min-width: 768px){font-size:18px;height:59px;width:214px;}"}),V=(0,k.Z)("div",{target:"e160gzhj2"})({name:"1eea9sv",styles:"display:flex;margin-bottom:18px"}),D=(0,k.Z)("svg",{target:"e160gzhj1"})({name:"xrsjvm",styles:"stroke:#333333;@media screen and (min-width: 768px){width:20px;height:20px;}transition:stroke var(--transition-duration) var(--timing-function)"}),U=(0,k.Z)("button",{target:"e160gzhj0"})("padding:0;outline:none;border:none;background-color:transparent;cursor:pointer;&:active{transform:scale(1.01);}&:hover{",D,"{stroke:var(--accent-color);}}&:focus{border:1px solid rgba(217, 217, 217, 1);border-radius:4px;",D,"{stroke:var(--accent-color);}}"),J=f.Z.div(P||(P=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 67px;\n  padding-top: 97px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    margin-bottom: 104px;\n  }\n"]))),G=f.Z.div(C||(C=(0,g.Z)(["\n  margin-bottom: 32px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    margin-right: 32px;\n    margin-bottom: 0;\n  }\n"]))),K=f.Z.div(F||(F=(0,g.Z)(["\n  width: 279px;\n  height: 268px;\n\n  @media screen and (min-width: 1280px) {\n    width: 357px;\n    height: 344px;\n  }\n"]))),H=f.Z.label(N||(N=(0,g.Z)(["\n  /* width: 279px;\n  height: 268px; */\n"]))),Q=f.Z.div(S||(S=(0,g.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n\n  background-color: var(--accent-color);\n  border-radius: 8px;\n  cursor: pointer;\n\n  &:active {\n    transform: scale(1.01);\n  }\n"]))),W=f.Z.img(q||(q=(0,g.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n"]))),$=f.Z.div(I||(I=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  @media screen and (min-width: 1280px) {\n    width: 393px;\n  }\n"]))),nn=f.Z.div(A||(A=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n  border-bottom: 1px solid var(--input-border-color);\n\n  :not(:last-child) {\n    margin-bottom: 24px;\n  }\n\n  &.error {\n    border-bottom-color: var(--error-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 43px;\n    :not(:last-child) {\n      margin-bottom: 32px;\n    }\n  }\n\n   @media screen and (min-width: 1280px) {\n    :not(:last-child) {\n      margin-bottom: 40px;\n    } \n  }\n"]))),en=(0,f.Z)(c.gN)(E||(E=(0,g.Z)(["\n  font-family: 'Poppins';\n  font-size: 12px;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  color: #000000;\n  height: 100%;\n  outline: none;\n  padding-top: 23px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),tn=f.Z.label(O||(O=(0,g.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 14px;\n  color: #797979;\n  pointer-events: none;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),rn=(0,f.Z)(B)(R||(R=(0,g.Z)(["\n  position: absolute;\n  top: 4px;\n  right: 0;\n\n  .custom-select {\n    &__control {\n      box-shadow: none;\n      background-color: var(--background-color);\n      min-height: 20px;\n      min-width: 87px;\n      font-size: 12px;\n      line-height: 1;\n      cursor: pointer;\n      font-weight: 500;\n\n      @media screen and (min-width: 768px) {\n        font-size: 14px;\n        min-width: 94px;\n      }\n    }\n\n    &__input-container {\n      padding: 1px;\n      margin: 0;\n    }\n\n    &__menu {\n      width: 123px;\n      top: 15px;\n      right: 5px;\n\n      padding: 4px 4px 4px 14px;\n    }\n\n    &__menu-is-open {\n    }\n\n    &__menu-list {\n      height: calc(6 * 18px + 8px);\n\n      /* @media screen and (min-width: 768px) {\n        height: calc(6 * 22px + 20px);\n      } */\n    }\n    &__value-container {\n      padding: 0px 8px;\n    }\n    &__option {\n      margin: 4px 0;\n    }\n\n    &__indicator {\n      padding: 0;\n    }\n  }\n"]))),on=function(n){var e=n.file,t=n.handleFileChange,i=(0,o.v9)(Z.DS),r=i.map((function(n){return{value:n._id,label:n.name}})),a=x.map((function(n){return{value:n.time,label:(0,_.X)(n.time)}})),d=(0,c.u6)(),s=d.setFieldValue,p=d.errors,l=d.touched;return(0,v.jsxs)(J,{children:[(0,v.jsxs)(G,{children:[(0,v.jsx)(c.gN,{name:"photo",type:"file",children:function(n){var i=n.field;return(0,v.jsxs)(K,{children:[(0,v.jsx)(H,{htmlFor:i.name,children:(0,v.jsx)(Q,{children:e?(0,v.jsx)(W,{src:URL.createObjectURL(e),alt:"Uploaded"}):(0,v.jsxs)("svg",{width:64,height:64,children:[(0,v.jsx)("use",{href:"".concat(w,"#capture")}),(0,v.jsx)("use",{href:"".concat(w,"#photo-camera"),width:24,height:24,x:20,y:20})]})})}),(0,v.jsx)("input",{accept:"image/*",type:"file",id:i.name,style:{display:"none"},onChange:function(n){s("photo",n.target.files[0]),t(n)}})]})}}),(0,v.jsx)(j,{name:"photo"})]}),(0,v.jsxs)($,{children:[(0,v.jsxs)(nn,{className:y("title",c.u9,p,l)?"error":"",children:[(0,v.jsx)(tn,{htmlFor:"title",children:"Enter item title"}),(0,v.jsx)(en,{name:"title",id:"title",type:"text"}),(0,v.jsx)(j,{name:"title"})]}),(0,v.jsxs)(nn,{className:y("about",c.u9,p,l)?"error":"",children:[(0,v.jsx)(tn,{htmlFor:"about",children:"Enter about recipe"}),(0,v.jsx)(en,{name:"about",id:"about",type:"text"}),(0,v.jsx)(j,{name:"about"})]}),(0,v.jsxs)(nn,{className:y("category",c.u9,p,l)?"error":"",children:[(0,v.jsx)(tn,{htmlFor:"category",children:"Category"}),(0,v.jsx)(rn,{name:"category",as:"select",options:r,classNamePrefix:"custom-select",isSearchable:!1,onChange:function(n){return s("category",n.label)},children:i.map((function(n){var e=n._id,t=n.name;return(0,v.jsx)("option",{value:t,children:t},e)}))}),(0,v.jsx)(j,{name:"category",style:{position:"absolute",bottom:"-14px"}})]}),(0,v.jsxs)(nn,{className:y("time",c.u9,p,l)?"error":"",children:[(0,v.jsx)(tn,{htmlFor:"time",children:"Cooking time"}),(0,v.jsx)(rn,{name:"time",as:"select",options:a,classNamePrefix:"custom-select",onChange:function(n){return s("time",n.value)},isSearchable:!1,children:x.map((function(n){var e=n.id,t=n.time;return(0,v.jsx)("option",{value:t,children:t},e)}))}),(0,v.jsx)(j,{name:"time",style:{position:"absolute",bottom:"-14px"}})]})]})]})},an=t(3433),dn=function(n){return n.ingredients.ingredientsList};var sn,pn,cn,ln,xn,hn,mn,un,gn,fn,bn,vn,jn,wn,Zn,yn,_n,kn,zn,Pn=(0,k.Z)("div",{target:"eftt0nu4"})({name:"19ox3yp",styles:"position:absolute;top:0;right:0;border-radius:18px;border:1px solid rgba(51, 51, 51, 0.3)"}),Cn=(0,k.Z)("svg",{target:"eftt0nu3"})({name:"ilg561",styles:"stroke:#333333;stroke-opacity:0.3;transition:stroke var(--transition-duration) var(--timing-function);@media screen and (min-width: 768px){width:16px;height:16px;}"}),Fn=(0,k.Z)("button",{target:"eftt0nu2"})("outline:none;width:auto;height:auto;padding:0;background:none;border:none;cursor:pointer;&:active{transform:scale(1.01);}&:hover{",Cn,"{stroke:var(--accent-color);stroke-opacity:1;}}&:focus{border:1px solid rgba(217, 217, 217, 1);border-radius:4px;",Cn,"{stroke:var(--accent-color);stroke-opacity:1;}}"),Nn=(0,k.Z)("span",{target:"eftt0nu1"})({name:"ni24c4",styles:"color:#333333;margin-left:14px;margin-right:14px;font-size:14px;line-height:1.3;@media screen and (min-width: 768px){font-size:16px;}"}),Sn=(0,k.Z)("div",{target:"eftt0nu0"})({name:"1dy5vju",styles:"padding:7px 14px;display:flex"}),qn=function(n){var e=n.remove,t=n.push,i=n.ingredients;return(0,v.jsx)(Pn,{children:(0,v.jsxs)(Sn,{children:[(0,v.jsx)(Fn,{type:"button",onClick:function(){i.length>1&&e(i.length-1)},children:(0,v.jsx)(Cn,{width:14,height:14,children:(0,v.jsx)("use",{href:"".concat(w,"#minus")})})}),(0,v.jsx)(Nn,{children:i.length}),(0,v.jsx)(Fn,{type:"button",onClick:function(){return t({id:"",measure:""})},children:(0,v.jsx)(Cn,{width:14,height:14,children:(0,v.jsx)("use",{href:"".concat(w,"#plus")})})})]})})},In=function(){var n=(0,o.v9)(dn).map((function(n){return{value:n._id,label:n.name}}));return(0,v.jsxs)(L,{children:[(0,v.jsx)(T,{children:"Ingredients"}),(0,v.jsx)(c.F2,{validateOnChange:!0,name:"ingredients",children:function(e){var t=e.push,i=e.remove,r=e.form,o=r.values,a=r.setFieldValue,d=o.ingredients;return(0,v.jsxs)("div",{children:[(0,v.jsx)(qn,{remove:i,push:t,ingredients:d}),d.map((function(e,t){return(0,v.jsxs)(V,{children:[(0,v.jsxs)(X,{children:[(0,v.jsx)(B,{classNamePrefix:"custom-select",name:"ingredients[".concat(t,"].id"),placeholder:"",options:n,onChange:function(n){return function(n,e){var t=(0,an.Z)(d);t[n].id=e.value,a("ingredients",t)}(t,n)}}),(0,v.jsx)(j,{name:"ingredients[".concat(t,"].id"),style:{marginTop:"5px"}})]}),(0,v.jsxs)(M,{children:[(0,v.jsx)(Y,{name:"ingredients[".concat(t,"].measure"),type:"text",value:d[t].measure||"",onChange:function(n){!function(n,e){var t=(0,an.Z)(d);t[n].measure=e,a("ingredients",t)}(t,n.target.value)},placeholder:"Enter measure"}),(0,v.jsx)(j,{name:"ingredients[".concat(t,"].measure"),style:{marginTop:"5px"}})]}),(0,v.jsx)(U,{type:"button",onClick:function(){i(t)},children:(0,v.jsx)(D,{width:18,height:18,children:(0,v.jsx)("use",{href:"".concat(w,"#delete-button")})})})]},t)}))]})}})]})},An=(0,f.Z)(T)(sn||(sn=(0,g.Z)(["\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),En=f.Z.div(pn||(pn=(0,g.Z)(["\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),On=(0,f.Z)(c.gN)(cn||(cn=(0,g.Z)(["\n  width: 100%;\n  height: 154px;\n  resize: none;\n  border: none;\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n  background-color: rgba(217, 217, 217, 0.157);\n  padding: 10px 16px;\n\n  color: #23262a;\n  font-family: 'Poppins';\n  font-size: 14px;\n  letter-spacing: -0.28px;\n\n  &::placeholder {\n    color: #000000;\n    opacity: 0.5;\n  }\n\n  &:focus,\n  &:hover {\n    outline: 1px solid rgba(217, 217, 217, 1);\n  }\n\n  &.error {\n    border: 1px solid var(--error-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 505px;\n  height: 224px;\n  }\n"]))),Rn=function(){var n=(0,r.useState)([""]),e=(0,p.Z)(n,2),t=e[0],i=e[1],o=(0,c.u6)(),a=o.errors,d=o.touched;return(0,v.jsxs)(En,{children:[(0,v.jsx)(An,{children:"Recipe Preparation"}),(0,v.jsx)(On,{name:"preparation",as:"textarea",placeholder:"Enter recipe",onChange:function(n){var e=n.target.value;i([e]);var r=t[0].split("\n").map((function(n){return 0===n.length?"\n":n})),a=r.length>1?r:[e];o.setFieldValue("preparation",a)},value:t,className:y("preparation",c.u9,a,d)?"error":""}),a.preparation&&(0,v.jsx)(j,{name:"preparation"})]})},Ln={photo:"",title:"",about:"",category:"",time:"",ingredients:[{id:"",measure:""},{id:"",measure:""},{id:"",measure:""}],preparation:[""]},Tn=function(){var n=(0,r.useState)(null),e=(0,p.Z)(n,2),t=e[0],i=e[1],d=(0,o.I0)();return(0,v.jsx)(c.J9,{initialValues:Ln,validationSchema:m,onSubmit:function(n,e){e.resetForm,e.setSubmitting;console.log(n);var i=JSON.stringify({title:n.title,description:n.about,category:n.category,time:n.time,ingredients:n.ingredients,instructions:n.preparation}),r=new FormData;r.append("recipeImg",t),r.append("data",i),d(a.A.addOwnRecipe(r))},children:(0,v.jsxs)(c.l0,{children:[(0,v.jsx)(on,{handleFileChange:function(n){var e=n.target.files[0];i(e),console.log(e)},file:t}),(0,v.jsx)(In,{}),(0,v.jsx)(Rn,{}),(0,v.jsx)(u.Z,{nameButton:"Add",type:"submit",cofByMedia768:{font:1,padX:1.17,padY:1.333},cofByMedia1280:{font:1,padX:1.17,padY:1.333}})]})})},Xn=t(9063),Bn=function(n,e){return Math.random()-.5},Mn=t(1087),Yn=(0,f.Z)(Mn.OL)(ln||(ln=(0,g.Z)(["\n  width: 343px;\n  padding-bottom: 13px;\n  border-bottom: 1px solid #7070702b;\n  display: flex;\n\n  @media (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 319px;\n    gap: 11px;\n  }\n"]))),Vn=f.Z.div(xn||(xn=(0,g.Z)(["\n  width: 104px;\n  height: 85px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    width: 102px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 97px;\n  }\n"]))),Dn=f.Z.img(hn||(hn=(0,g.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n"]))),Un=f.Z.div(mn||(mn=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n"]))),Jn=f.Z.h3(un||(un=(0,g.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.25;\n  color: var(--secondary-text-color);\n"]))),Gn=f.Z.p(gn||(gn=(0,g.Z)(["\n  font-size: 12px;\n  line-height: 1.3;\n  color: #7e7e7e;\n"]))),Kn=function(n){var e=n._id,t=n.title,i=n.description,r=n.thumb;return(0,v.jsxs)(Yn,{to:"recipes/".concat(e),children:[(0,v.jsx)(Vn,{children:(0,v.jsx)(Dn,{src:r})}),(0,v.jsxs)(Un,{children:[(0,v.jsx)(Jn,{children:t}),(0,v.jsx)(Gn,{children:i})]})]})},Hn=f.Z.ul(fn||(fn=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 32px;\n  }\n\n  @media (min-width: 1280px) {\n    flex-direction: column;\n    gap: 24px;\n  }\n"]))),Qn=f.Z.li(bn||(bn=(0,g.Z)(["\n  @media (min-width: 768px) and (max-width: 1279px) {\n    &:nth-of-type(3),\n    &:nth-of-type(4) {\n      display: none;\n    }\n  }\n"]))),Wn=function(){var n=(0,o.v9)(Z.Gn),e=(0,an.Z)(n).sort(Bn).slice(0,4);return(0,v.jsx)(Hn,{children:e.map((function(n){var e,t,i=n._id,r=n.title,o=n.description,a=n.thumb;return(0,v.jsx)(Qn,{children:(0,v.jsx)(Kn,{_id:i,title:r,description:(e=o,t=100,e.length>t?"".concat(e.slice(0,t-1),"..."):e),thumb:a})},i)}))})},$n=t(1122),ne=f.Z.div(vn||(vn=(0,g.Z)(["\n  padding-top: 12px;\n\n  @media (min-width: 768px) {\n    padding-top: 20px;\n  }\n  @media (min-width: 1280px) {\n    padding-top: 55px;\n  }\n"]))),ee=f.Z.div(jn||(jn=(0,g.Z)(["\n  @media (min-width: 1280px) {\n    display: flex;\n  }\n"]))),te=f.Z.div(wn||(wn=(0,g.Z)(["\n  padding-bottom: 100px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 200px;\n  }\n\n  @media (min-width: 1280px) {\n    padding-top: 100px;\n    margin-left: 121px;\n  }\n"]))),ie=f.Z.section(Zn||(Zn=(0,g.Z)(["\n  padding-bottom: 72px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 100px;\n  }\n  @media (min-width: 1280px) {\n    padding-bottom: 200px;\n  }\n"]))),re=f.Z.section(yn||(yn=(0,g.Z)(["\n"]))),oe=(0,f.Z)(T)(_n||(_n=(0,g.Z)(["\n  margin-bottom: 32px;\n"]))),ae=f.Z.section(kn||(kn=(0,g.Z)(["\n  display: none;\n  @media (min-width: 1280px) {\n    display: block;\n    padding-bottom: 100px;\n  }\n"]))),de=(0,f.Z)(T)(zn||(zn=(0,g.Z)(["\n  margin-bottom: 40px;\n"]))),se=function(){var n=(0,o.I0)();(0,r.useEffect)((function(){n(d.x.getIngredientsList()),n(a.A.getCategoryList()),n(a.A.getPopularRecipes())}),[n]);var e=(0,o.v9)(dn);return(0,v.jsxs)(s.t,{children:[(0,v.jsx)(ne,{children:(0,v.jsx)(Xn.Z,{title:"Add recipe"})}),(0,v.jsxs)(ee,{children:[(0,v.jsx)(ie,{children:e&&(0,v.jsx)(Tn,{})}),(0,v.jsxs)(te,{children:[(0,v.jsxs)(ae,{children:[(0,v.jsx)(de,{children:"Follow us"}),(0,v.jsx)($n.Z,{wFacebook:26,hFacebook:26,wYoutube:28,hYoutube:22,wTwitter:25,hTwitter:22,wInstagram:24,hInstagram:24,hoverColor:"#1E1F28",flex:"start"})]}),(0,v.jsxs)(re,{children:[(0,v.jsx)(oe,{children:"Popular recipe"}),(0,v.jsx)(Wn,{})]})]})]})]})}}}]);
//# sourceMappingURL=751.87caeaed.chunk.js.map