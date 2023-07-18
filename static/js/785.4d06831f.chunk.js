"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{9063:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r,o,a,d,s=t(168),p=t(4709),c=p.Z.h1(i||(i=(0,s.Z)(["\n  color: var(--page-title-color);\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: -0.56px;\n  padding-top: 35px;\n  padding-bottom: 3px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    letter-spacing: -0.64px;\n    padding-bottom: 6px;\n    padding-top: 46px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 44px;\n    letter-spacing: -0.88px;\n    padding-top: 44px;\n  }\n"]))),l=p.Z.div(r||(r=(0,s.Z)(["\n  position: absolute;\n  top: 0;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--accent-color);\n\n  @media screen and (min-width: 768px) {\n    width: 14px;\n    height: 14px;\n  }\n"]))),x=(0,p.Z)(l)(o||(o=(0,s.Z)(["\n  top: 30px;\n  left: 333px;\n\n  @media screen and (min-width: 768px) {\n    top: 13px;\n    left: 694px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 1150px;\n  }\n"]))),h=p.Z.div(a||(a=(0,s.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 241px;\n  width: 6px;\n  height: 6px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--background-color-circle);\n\n  @media screen and (min-width: 768px) {\n    width: 12px;\n    height: 12px;\n    border-radius: 3px;\n\n    left: 405px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 707px;\n  }\n"]))),m=p.Z.section(d||(d=(0,s.Z)(["\n  position: relative;\n\n  background-color: ","\n"])),(function(n){return n.theme.colors.backgroundColor})),u=t(184),g=function(n){var e=n.title;return(0,u.jsxs)(m,{children:[(0,u.jsx)(c,{children:e}),(0,u.jsx)(l,{}),(0,u.jsx)(x,{}),(0,u.jsx)(h,{})]})}},5390:function(n,e,t){t.d(e,{X:function(){return i}});var i=function(n){if(n<0)return"0 min";var e=Math.floor(n/60),t=n%60;return 0===e?"".concat(t," min"):0===t?"".concat(e,e>1?" hours":" hour"):"".concat(e," h ").concat(t," min")}},2785:function(n,e,t){t.r(e),t.d(e,{default:function(){return fe}});var i,r=t(2791),o=t(9434),a=t(8509),d=t(6739),s=t(2730),p=t(9439),c=t(5705),l=t(7689),x=t(6727),h=[{id:1,time:"5"},{id:2,time:"10"},{id:3,time:"15"},{id:4,time:"20"},{id:5,time:"40"},{id:6,time:"45"},{id:7,time:"50"},{id:8,time:"60"},{id:9,time:"65"},{id:10,time:"70"},{id:11,time:"80"},{id:12,time:"85"},{id:13,time:"90"},{id:14,time:"95"},{id:15,time:"100"},{id:16,time:"105"},{id:17,time:"110"},{id:18,time:"115"},{id:19,time:"120"}],m=h.map((function(n){return n.time})),u=x.Ry().shape({photo:x.nK().required("You need to provide a file").test("fileSize","To limit the file size to a maximum of 3MB",(function(n){return n.size<=3e6})).test("type","Only the following formats are accepted: .jpeg, .jpg, .bmp, .png, .svg, and .webp",(function(n){return n&&("image/jpeg"===n.type||"image/bmp"===n.type||"image/png"===n.type)})),title:x.Z_().required("Please enter the recipe title").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Title must contain letters"),about:x.Z_().required("Please describe the recipe").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Describe must contain letters"),category:x.Z_().required("Please choose a category for your recipe"),time:x.Z_().required("Please select the cooking time").oneOf(m),ingredients:x.IX().of(x.Ry().shape({id:x.Z_().required("Please select an ingredient"),measure:x.Z_().required("Please enter the measure")})),preparation:x.IX().of(x.Z_().required("Please enter the recipe")).test("notEmptyStrings","Please enter the recipe",(function(n){return n&&n[0]&&n[0].length>0&&/[^\s\n]/.test(n[0])&&n.every((function(n){return n&&n.length>0}))}))}),g=t(5600),f=t(3201),b=t(536),v=t(168),w=t(4709),j=w.Z.p(i||(i=(0,v.Z)(["\n  color: var(--error-color);\n  font-size: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Z=t(184),y=function(n){var e=n.name,t=n.style;return(0,Z.jsx)(c.Bc,{name:e,render:function(n){return(0,Z.jsx)(j,{style:t,children:n})}})};var _=t.p+"static/media/sprite.2907ddde8e16a69e5625ef68527eb9d4.svg",k=function(n,e,t,i){var r=e(t,n);return e(i,n)&&r},z=t(5390),C=t(340),F=t(965);var P,N,S,I,q,A,E,O,R,L,M,T=(0,C.Z)("div",{target:"e160gzhj8"})({name:"ryfeq5",styles:"position:relative;margin-bottom:100px"}),X=(0,C.Z)("h2",{target:"e160gzhj7"})({name:"1mjbzy3",styles:"color:#3e4462;font-size:24px;font-weight:600;line-height:1;letter-spacing:-0.48px;margin-bottom:24px;@media screen and (min-width: 768px){margin-bottom:36px;}"}),Y=(0,C.Z)("div",{target:"e160gzhj6"})({name:"w7nyri",styles:"margin-right:14px;min-width:194px;@media screen and (min-width: 768px){margin-right:32px;min-width:398px;}"}),B=(0,C.Z)(F.ZP,{target:"e160gzhj5"})({name:"g620oz",styles:"&:hover,&:focus{border:1px solid rgba(217, 217, 217, 1);border-radius:6px;}.custom-select{&__control{font-family:'Poppins';border:none;box-shadow:none;border-radius:6px;background-color:rgba(217, 217, 217, 0.157);font-size:14px;line-height:1;cursor:text;@media screen and (min-width: 768px){font-size:18px;}}&__menu{padding:4px 4px 4px 18px;box-shadow:0px 6.518518447875977px 7.8222222328186035px 0px rgba(0, 0, 0, 0.03);border:none;border-radius:6px;}&__menu{margin:0;}&__menu-list{height:calc(6 * 24px + 2px);@media screen and (min-width: 768px){height:calc(6 * 27px + 2px);}}&__value-container{padding:12px 8px;}&__single-value{color:#23262a;line-height:1;letter-spacing:-0.28px;}&__option{margin:6px 0;padding:2px 0;font-size:12px;color:#000000;letter-spacing:-0.24px;opacity:0.5;cursor:pointer;@media screen and (min-width: 768px){font-size:14px;}}&__option--is-focused{background-color:rgba(139, 170, 54, 0.2);}&__option--is-selected{background-color:var(--accent-color);}&__indicator-separator{display:none;}&__indicator{cursor:pointer;color:var(--accent-color);transition:stroke var(--transition-duration) var(--timing-function);&:hover,&:focus{transform:scale(1.1);}}&__menu-list::-webkit-scrollbar{width:4px;height:0px;}&__menu-list::-webkit-scrollbar-track{background:transparent;}&__menu-list::-webkit-scrollbar-thumb{padding:4px 0;border-radius:12px;background:#e7e5e5;cursor:pointer;}&__menu-list::-webkit-scrollbar-thumb:hover{background:var(--accent-color);}}"}),U=(0,C.Z)("div",{target:"e160gzhj4"})({name:"1d0i03h",styles:"margin-right:8px;width:109px;@media screen and (min-width: 768px){margin-right:40px;width:214px;}"}),V=(0,C.Z)(c.gN,{target:"e160gzhj3"})({name:"1fj095k",styles:"outline:none;width:109px;height:54px;padding:0 0 0 5px;border:none;border-radius:6px;background-color:rgba(217, 217, 217, 0.157);color:#23262a;font-size:14px;line-height:1;letter-spacing:-0.28px;font-family:'Poppins';color:#23262a;cursor:text;&:focus,&:hover{border:1px solid rgba(217, 217, 217, 1);}@media screen and (min-width: 768px){font-size:18px;height:59px;width:214px;}&.error{border:1px solid var(--error-color);}"}),D=(0,C.Z)("div",{target:"e160gzhj2"})({name:"1eea9sv",styles:"display:flex;margin-bottom:18px"}),J=(0,C.Z)("svg",{target:"e160gzhj1"})({name:"xrsjvm",styles:"stroke:#333333;@media screen and (min-width: 768px){width:20px;height:20px;}transition:stroke var(--transition-duration) var(--timing-function)"}),G=(0,C.Z)("button",{target:"e160gzhj0"})("padding:0;outline:none;border:none;background-color:transparent;cursor:pointer;&:active{transform:scale(1.01);}&:hover{",J,"{stroke:var(--accent-color);}}&:focus{border:1px solid rgba(217, 217, 217, 1);border-radius:4px;",J,"{stroke:var(--accent-color);}}"),K=w.Z.div(P||(P=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 67px;\n  padding-top: 97px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    padding-bottom: 104px;\n  }\n"]))),H=w.Z.div(N||(N=(0,v.Z)(["\n  margin-bottom: 32px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    margin-right: 32px;\n    margin-bottom: 0;\n  }\n"]))),Q=w.Z.div(S||(S=(0,v.Z)(["\n  width: 279px;\n  height: 268px;\n\n  @media screen and (min-width: 1280px) {\n    width: 357px;\n    height: 344px;\n  }\n"]))),W=w.Z.label(I||(I=(0,v.Z)([""]))),$=w.Z.div(q||(q=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n\n  background-color: var(--accent-color);\n  border-radius: 8px;\n  cursor: pointer;\n\n  &:active {\n    transform: scale(1.01);\n  }\n"]))),nn=w.Z.img(A||(A=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n"]))),en=w.Z.div(E||(E=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  @media screen and (min-width: 1280px) {\n    width: 393px;\n  }\n"]))),tn=w.Z.div(O||(O=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n  border-bottom: 1px solid var(--input-border-color);\n\n  :not(:last-child) {\n    margin-bottom: 24px;\n  }\n\n  &.error {\n    border-bottom-color: var(--error-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 43px;\n    :not(:last-child) {\n      margin-bottom: 32px;\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    :not(:last-child) {\n      margin-bottom: 40px;\n    }\n  }\n"]))),rn=(0,w.Z)(c.gN)(R||(R=(0,v.Z)(["\n  font-family: 'Poppins';\n  font-size: 12px;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  color: #000000;\n  height: 100%;\n  outline: none;\n  padding-top: 23px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),on=w.Z.label(L||(L=(0,v.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 14px;\n  color: #797979;\n  pointer-events: none;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),an=(0,w.Z)(B)(M||(M=(0,v.Z)(["\n  position: absolute;\n  top: 4px;\n  right: 0;\n\n  .custom-select {\n    &__control {\n      box-shadow: none;\n      background-color: var(--background-color);\n      min-height: 20px;\n      min-width: 87px;\n      font-size: 12px;\n      line-height: 1;\n      font-weight: 500;\n      cursor: pointer;\n\n      @media screen and (min-width: 768px) {\n        font-size: 14px;\n        min-width: 94px;\n      }\n    }\n\n    &__input-container {\n      padding: 1px;\n      margin: 0;\n    }\n\n    &__menu {\n      font-size: 12px;\n      padding: 0 4px 0 14px;\n      width: 123px;\n      top: 22px;\n      right: 0px;\n\n      @media screen and (min-width: 768px) {\n        width: 132px;\n        font-size: 14px;\n      }\n    }\n\n    &__value-container {\n      padding: 0px 8px;\n    }\n    &__option {\n      font-size: 12px;\n      padding: 3px 0;\n      gap: 4px;\n      font-size: 12px;\n    }\n\n    &__menu-list {\n      height: calc(6 * 22px + 16px);\n\n      /* @media screen and (min-width: 768px) {\n        height: calc(6 * 22px + 20px);\n      } */\n    }\n\n    &__indicator {\n      padding: 0;\n    }\n  }\n"]))),dn=function(n){var e=n.file,t=n.handleFileChange,i=(0,o.v9)(g.DS),r=i.map((function(n){return{value:n._id,label:n.name}})),a=h.map((function(n){return{value:n.time,label:(0,z.X)(n.time)}})),d=(0,c.u6)(),s=d.setFieldValue,p=d.errors,l=d.touched;return(0,Z.jsxs)(K,{children:[(0,Z.jsxs)(H,{children:[(0,Z.jsx)(c.gN,{name:"photo",type:"file",children:function(n){var i=n.field;return(0,Z.jsxs)(Q,{children:[(0,Z.jsx)(W,{htmlFor:i.name,children:(0,Z.jsx)($,{children:e?(0,Z.jsx)(nn,{src:URL.createObjectURL(e),alt:"Uploaded"}):(0,Z.jsxs)("svg",{width:64,height:64,children:[(0,Z.jsx)("use",{href:"".concat(_,"#capture")}),(0,Z.jsx)("use",{href:"".concat(_,"#photo-camera"),width:24,height:24,x:20,y:20})]})})}),(0,Z.jsx)("input",{accept:"image/*",type:"file",id:i.name,style:{display:"none"},onChange:function(n){s("photo",n.target.files[0]),t(n)}})]})}}),(0,Z.jsx)(y,{name:"photo"})]}),(0,Z.jsxs)(en,{children:[(0,Z.jsxs)(tn,{className:k("title",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(on,{htmlFor:"title",children:"Enter item title"}),(0,Z.jsx)(rn,{name:"title",id:"title",type:"text"}),(0,Z.jsx)(y,{name:"title"})]}),(0,Z.jsxs)(tn,{className:k("about",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(on,{htmlFor:"about",children:"Enter about recipe"}),(0,Z.jsx)(rn,{name:"about",id:"about",type:"text"}),(0,Z.jsx)(y,{name:"about"})]}),(0,Z.jsxs)(tn,{className:k("category",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(on,{htmlFor:"category",children:"Category"}),(0,Z.jsx)(an,{name:"category",as:"select",options:r,classNamePrefix:"custom-select",isSearchable:!1,onChange:function(n){s("category",n.label),console.log(n)},children:i.map((function(n){var e=n._id,t=n.name;return(0,Z.jsx)("option",{value:t,children:t},e)}))}),(0,Z.jsx)(y,{name:"category",style:{position:"absolute",bottom:"-16px"}})]}),(0,Z.jsxs)(tn,{className:k("time",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(on,{htmlFor:"time",children:"Cooking time"}),(0,Z.jsx)(an,{name:"time",as:"select",options:a,classNamePrefix:"custom-select",onChange:function(n){return s("time",n.value)},isSearchable:!1,children:h.map((function(n){var e=n.id,t=n.time;return(0,Z.jsx)("option",{value:t,children:t},e)}))}),(0,Z.jsx)(y,{name:"time",style:{position:"absolute",bottom:"-16px"}})]})]})]})},sn=t(3433),pn=function(n){return n.ingredients.ingredientsList};var cn,ln,xn,hn,mn,un,gn,fn,bn,vn,wn,jn,Zn,yn,_n,kn,zn,Cn,Fn,Pn,Nn,Sn=(0,C.Z)("div",{target:"eftt0nu4"})({name:"19ox3yp",styles:"position:absolute;top:0;right:0;border-radius:18px;border:1px solid rgba(51, 51, 51, 0.3)"}),In=(0,C.Z)("svg",{target:"eftt0nu3"})({name:"ilg561",styles:"stroke:#333333;stroke-opacity:0.3;transition:stroke var(--transition-duration) var(--timing-function);@media screen and (min-width: 768px){width:16px;height:16px;}"}),qn=(0,C.Z)("button",{target:"eftt0nu2"})("outline:none;width:auto;height:auto;padding:0;background:none;border:none;cursor:pointer;&:active{transform:scale(1.01);}&:hover{",In,"{stroke:var(--accent-color);stroke-opacity:1;}}&:focus{border:1px solid rgba(217, 217, 217, 1);border-radius:4px;",In,"{stroke:var(--accent-color);stroke-opacity:1;}}"),An=(0,C.Z)("span",{target:"eftt0nu1"})({name:"ni24c4",styles:"color:#333333;margin-left:14px;margin-right:14px;font-size:14px;line-height:1.3;@media screen and (min-width: 768px){font-size:16px;}"}),En=(0,C.Z)("div",{target:"eftt0nu0"})({name:"1dy5vju",styles:"padding:7px 14px;display:flex"}),On=function(n){var e=n.remove,t=n.push,i=n.ingredients;return(0,Z.jsx)(Sn,{children:(0,Z.jsxs)(En,{children:[(0,Z.jsx)(qn,{type:"button",onClick:function(){i.length>1&&e(i.length-1)},children:(0,Z.jsx)(In,{width:14,height:14,children:(0,Z.jsx)("use",{href:"".concat(_,"#minus")})})}),(0,Z.jsx)(An,{children:i.length}),(0,Z.jsx)(qn,{type:"button",onClick:function(){return t({id:"",measure:""})},children:(0,Z.jsx)(In,{width:14,height:14,children:(0,Z.jsx)("use",{href:"".concat(_,"#plus")})})})]})})},Rn=function(){var n=(0,o.v9)(pn).map((function(n){return{value:n._id,label:n.name}}));return(0,Z.jsxs)(T,{children:[(0,Z.jsx)(X,{children:"Ingredients"}),(0,Z.jsx)(c.F2,{validateOnChange:!0,name:"ingredients",children:function(e){var t=e.push,i=e.remove,r=e.form,o=r.values,a=r.setFieldValue,d=r.errors,s=r.touched,p=o.ingredients;return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(On,{remove:i,push:t,ingredients:p}),p.map((function(e,t){return(0,Z.jsxs)(D,{children:[(0,Z.jsxs)(Y,{children:[(0,Z.jsx)(B,{classNamePrefix:"custom-select",name:"ingredients[".concat(t,"].id"),placeholder:"Select ingredient",options:n,onChange:function(n){return function(n,e){var t=(0,sn.Z)(p);t[n].id=e.value,a("ingredients",t)}(t,n)}}),(0,Z.jsx)(y,{name:"ingredients[".concat(t,"].id"),style:{marginTop:"5px"}})]}),(0,Z.jsxs)(U,{children:[(0,Z.jsx)(V,{name:"ingredients[".concat(t,"].measure"),type:"text",value:p[t].measure||"",onChange:function(n){!function(n,e){var t=(0,sn.Z)(p);t[n].measure=e,a("ingredients",t)}(t,n.target.value)},placeholder:"Enter measure",className:k("ingredients[".concat(t,"].measure"),c.u9,d,s)?"error":""}),(0,Z.jsx)(y,{name:"ingredients[".concat(t,"].measure"),style:{marginTop:"5px"}})]}),(0,Z.jsx)(G,{type:"button",onClick:function(){i(t)},children:(0,Z.jsx)(J,{width:18,height:18,children:(0,Z.jsx)("use",{href:"".concat(_,"#delete-button")})})})]},t)}))]})}})]})},Ln=(0,w.Z)(X)(cn||(cn=(0,v.Z)(["\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Mn=w.Z.div(ln||(ln=(0,v.Z)(["\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Tn=(0,w.Z)(c.gN)(xn||(xn=(0,v.Z)(["\n  width: 100%;\n  height: 154px;\n  resize: none;\n  border: none;\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n  background-color: rgba(217, 217, 217, 0.157);\n  padding: 10px 16px;\n\n  color: #23262a;\n  font-family: 'Poppins';\n  font-size: 14px;\n  letter-spacing: -0.28px;\n\n  &::placeholder {\n    color: #000000;\n    opacity: 0.5;\n  }\n\n  &:focus,\n  &:hover {\n    outline: 1px solid rgba(217, 217, 217, 1);\n  }\n\n  &.error {\n    border: 1px solid var(--error-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 505px;\n  height: 224px;\n  }\n"]))),Xn=function(){var n=(0,r.useState)([""]),e=(0,p.Z)(n,2),t=e[0],i=e[1],o=(0,c.u6)(),a=o.errors,d=o.touched;return(0,Z.jsxs)(Mn,{children:[(0,Z.jsx)(Ln,{children:"Recipe Preparation"}),(0,Z.jsx)(Tn,{name:"preparation",as:"textarea",placeholder:"Enter recipe",onChange:function(n){var e=n.target.value;i([e]);var r=t[0].split("\n").map((function(n){return 0===n.length?"\n":n})),a=r.length>1?r:[e];o.setFieldValue("preparation",a)},value:t,className:k("preparation",c.u9,a,d)?"error":""}),a.preparation&&(0,Z.jsx)(y,{name:"preparation"})]})},Yn=t(1953),Bn={photo:"",title:"",about:"",category:"",time:"",ingredients:[{id:"",measure:""},{id:"",measure:""},{id:"",measure:""}],preparation:[""]},Un=function(){var n=(0,r.useState)(null),e=(0,p.Z)(n,2),t=e[0],i=e[1],d=(0,l.s0)(),s=(0,o.v9)(g.F),x=(0,o.v9)(g.zh),h=(0,o.I0)();(0,r.useEffect)((function(){if(!x)return s&&(0,f.U)("Congratulations! You have added a recipe."),s&&d("/recipes/".concat(s)),function(){h((0,Yn.FA)(""))};(0,f.E)("Oops... Something went wrong.")}),[x,s,d,h]);return(0,Z.jsx)(c.J9,{initialValues:Bn,validationSchema:u,onSubmit:function(n,e){e.resetForm,e.setSubmitting;console.log(n);var i=JSON.stringify({title:n.title,description:n.about,category:n.category,time:n.time,ingredients:n.ingredients,instructions:n.preparation}),r=new FormData;r.append("recipeImg",t),r.append("data",i),h(a.A.addOwnRecipe(r))},children:(0,Z.jsxs)(c.l0,{children:[(0,Z.jsx)(dn,{handleFileChange:function(n){var e=n.target.files[0];i(e),console.log(e)},file:t}),(0,Z.jsx)(Rn,{}),(0,Z.jsx)(Xn,{}),(0,Z.jsx)(b.Z,{nameButton:"Add",type:"submit",cofByMedia768:{font:1,padX:1.17,padY:1.333},cofByMedia1280:{font:1,padX:1.17,padY:1.333}})]})})},Vn=t(9063),Dn=function(n,e){if(n.length<=e)return n;var t=n.lastIndexOf(" ",e);if(t<=0)return n.slice(0,e-1)+"...";var i=n.slice(0,t);return i[i.length-1].match(/[A-Za-z0-9]/)||(i=i.slice(0,-1)),i+"..."},Jn=function(n,e){return Math.random()-.5},Gn=t(1087),Kn=(0,w.Z)(Gn.OL)(hn||(hn=(0,v.Z)(["\n  width: 343px;\n  padding-bottom: 13px;\n  border-bottom: 1px solid #7070702b;\n  display: flex;\n\n  @media (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 319px;\n    gap: 11px;\n  }\n"]))),Hn=w.Z.div(mn||(mn=(0,v.Z)(["\n  width: 104px;\n  height: 85px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    width: 102px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 97px;\n  }\n"]))),Qn=w.Z.img(un||(un=(0,v.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n"]))),Wn=w.Z.div(gn||(gn=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n"]))),$n=w.Z.h3(fn||(fn=(0,v.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.25;\n  color: var(--secondary-text-color);\n"]))),ne=w.Z.p(bn||(bn=(0,v.Z)(["\n  font-size: 12px;\n  line-height: 1.3;\n  color: #7e7e7e;\n"]))),ee=function(n){var e=n._id,t=n.title,i=n.description,r=n.thumb;return(0,Z.jsxs)(Kn,{to:"/recipes/".concat(e),children:[(0,Z.jsx)(Hn,{children:(0,Z.jsx)(Qn,{src:r})}),(0,Z.jsxs)(Wn,{children:[(0,Z.jsx)($n,{children:t}),(0,Z.jsx)(ne,{children:i})]})]})},te=w.Z.svg(vn||(vn=(0,v.Z)(["\nwidth: 100% ;\nheight: 300px;\nfill: var(--accent-color);\nmargin-bottom: 15px;\n\n@media screen and (min-width: 1280px) {\n    width: 319px;\n    height: 319px;\n  }\n"]))),ie=(0,w.Z)($n)(wn||(wn=(0,v.Z)(["\ntext-align: center;\n"]))),re=function(){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(te,{children:(0,Z.jsx)("use",{href:"".concat(_,"#cat")})}),(0,Z.jsx)(ie,{children:"No new popular recipes yet"})]})},oe=w.Z.ul(jn||(jn=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 32px;\n  }\n\n  @media (min-width: 1280px) {\n    flex-direction: column;\n    gap: 24px;\n  }\n"]))),ae=w.Z.li(Zn||(Zn=(0,v.Z)(["\n  @media (min-width: 768px) and (max-width: 1279px) {\n    &:nth-of-type(3),\n    &:nth-of-type(4) {\n      display: none;\n    }\n  }\n"]))),de=function(){var n=(0,o.v9)(g.Gn),e=(0,r.useMemo)((function(){return(0,sn.Z)(n).sort(Jn).slice(0,4)}),[n]);return(0,Z.jsx)(Z.Fragment,{children:n.length>0?(0,Z.jsx)(oe,{children:e.map((function(n){var e=n._id,t=n.title,i=n.description,r=n.thumb;return(0,Z.jsx)(ae,{children:(0,Z.jsx)(ee,{_id:e,title:t,description:Dn(i,70),thumb:r})},e)}))}):(0,Z.jsx)(re,{})})},se=t(1122),pe=w.Z.div(yn||(yn=(0,v.Z)(["\n  padding-top: 12px;\n\n  @media (min-width: 768px) {\n    padding-top: 20px;\n  }\n  @media (min-width: 1280px) {\n    padding-top: 55px;\n  }\n"]))),ce=w.Z.div(_n||(_n=(0,v.Z)(["\n  @media (min-width: 1280px) {\n    display: flex;\n  }\n"]))),le=w.Z.div(kn||(kn=(0,v.Z)(["\n  padding-bottom: 100px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 200px;\n  }\n\n  @media (min-width: 1280px) {\n    padding-top: 100px;\n    margin-left: 121px;\n  }\n"]))),xe=w.Z.section(zn||(zn=(0,v.Z)(["\n  padding-bottom: 72px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 100px;\n  }\n  @media (min-width: 1280px) {\n    padding-bottom: 200px;\n  }\n"]))),he=w.Z.section(Cn||(Cn=(0,v.Z)(["\n"]))),me=(0,w.Z)(X)(Fn||(Fn=(0,v.Z)(["\n  margin-bottom: 32px;\n"]))),ue=w.Z.section(Pn||(Pn=(0,v.Z)(["\n  display: none;\n  @media (min-width: 1280px) {\n    display: block;\n    padding-bottom: 100px;\n  }\n"]))),ge=(0,w.Z)(X)(Nn||(Nn=(0,v.Z)(["\n  margin-bottom: 40px;\n"]))),fe=function(){var n=(0,o.I0)();(0,r.useEffect)((function(){n(d.x.getIngredientsList()),n(a.A.getCategoryList()),n(a.A.getPopularRecipes())}),[n]);var e=(0,o.v9)(pn);return(0,Z.jsxs)(s.t,{children:[(0,Z.jsx)(pe,{children:(0,Z.jsx)(Vn.Z,{title:"Add recipe"})}),(0,Z.jsxs)(ce,{children:[(0,Z.jsx)(xe,{children:e&&(0,Z.jsx)(Un,{})}),(0,Z.jsxs)(le,{children:[(0,Z.jsxs)(ue,{children:[(0,Z.jsx)(ge,{children:"Follow us"}),(0,Z.jsx)(se.Z,{wFacebook:26,hFacebook:26,wYoutube:28,hYoutube:22,wTwitter:25,hTwitter:22,wInstagram:24,hInstagram:24,hoverColor:"#1E1F28",flex:"start"})]}),(0,Z.jsxs)(he,{children:[(0,Z.jsx)(me,{children:"Popular recipe"}),(0,Z.jsx)(de,{})]})]})]})]})}}}]);
//# sourceMappingURL=785.4d06831f.chunk.js.map