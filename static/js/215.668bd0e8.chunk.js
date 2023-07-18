"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{9063:function(n,e,t){t.d(e,{Z:function(){return m}});var o,r,i,a,s,c=t(168),l=t(4709),p=l.Z.h1(o||(o=(0,c.Z)(["\n  color: var(--page-title-color);\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: -0.56px;\n  padding-top: 35px;\n  padding-bottom: 3px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    letter-spacing: -0.64px;\n    padding-bottom: 6px;\n    padding-top: 46px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 44px;\n    letter-spacing: -0.88px;\n    padding-top: 44px;\n  }\n"]))),d=l.Z.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  top: 0;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--accent-color);\n\n  @media screen and (min-width: 768px) {\n    width: 14px;\n    height: 14px;\n  }\n"]))),x=(0,l.Z)(d)(i||(i=(0,c.Z)(["\n  top: 30px;\n  left: 333px;\n\n  @media screen and (min-width: 768px) {\n    top: 13px;\n    left: 694px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 1150px;\n  }\n"]))),f=l.Z.div(a||(a=(0,c.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 241px;\n  width: 6px;\n  height: 6px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--background-color-circle);\n\n  @media screen and (min-width: 768px) {\n    width: 12px;\n    height: 12px;\n    border-radius: 3px;\n\n    left: 405px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 707px;\n  }\n"]))),h=l.Z.section(s||(s=(0,c.Z)(["\n  position: relative;\n\n  background-color: ","\n"])),(function(n){return n.theme.colors.backgroundColor})),u=t(184),m=function(n){var e=n.title;return(0,u.jsxs)(h,{children:[(0,u.jsx)(p,{children:e}),(0,u.jsx)(d,{}),(0,u.jsx)(x,{}),(0,u.jsx)(f,{})]})}},7215:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var o,r,i,a=t(9439),s=t(9434),c=t(2791),l=t(7689),p=t(4543),d=t(1087),x=t(5600),f=t(168),h=t(4709),u=h.Z.ul(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  padding-top: 100px;\n  /* width:100%; */\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),m=h.Z.li(r||(r=(0,f.Z)(["\n  position: relative;\n  color:  ",";\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1;\n  padding-bottom: 27px;\n  text-transform: capitalize;\n  transition: color "," ",";\n\n  &:not(:last-child) {\n    margin-right: 55px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &.active::after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 3px;\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.categoryListItem}),(function(n){return n.theme.transforms.transitionDuration}),(function(n){return n.theme.transforms.timingFunction}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor})),g=h.Z.span(i||(i=(0,f.Z)(["\n  display: block;\n  width: 1240px;\n  height: 1px;\n  background: ",";\n"])),(function(n){return n.theme.colors.categoryListLine})),w=t(184),b=function(n){var e=n.currentCategory,t=(0,s.v9)(x.DS),o=(0,c.useRef)(null);return(0,w.jsxs)("div",{style:{overflow:"hidden"},children:[(0,w.jsx)(u,{ref:o,children:t.map((function(n,t){return(0,w.jsx)(m,{className:n.name.toLowerCase()===e.toLowerCase()?"active":null,onClick:function(n){return function(n,e){var t=o.current,r=t.children[e],i=t.offsetWidth,a=r.offsetWidth,s=r.offsetLeft-(i-a)/2;t.scrollTo({left:s,behavior:"smooth"})}(0,t)},children:(0,w.jsx)(d.rU,{to:"/categories/".concat(n.name),children:n.name})},n._id)}))}),(0,w.jsx)(g,{})]})},v=t(9063),k=t(2730),Z=function(){var n=(0,c.useState)("beef"),e=(0,a.Z)(n,2),t=e[0],o=e[1],r=(0,l.UO)().categoryName,i=(0,s.I0)();return(0,c.useEffect)((function(){o(r),i(p.A.getRecipesByCategory(r))}),[r,i]),(0,c.useEffect)((function(){i(p.A.getCategoryList())}),[i]),(0,w.jsxs)(k.t,{style:{paddingTop:"58px"},children:[(0,w.jsx)(v.Z,{title:"Categories"}),(0,w.jsx)(b,{currentCategory:t}),(0,w.jsx)(c.Suspense,{children:(0,w.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=215.668bd0e8.chunk.js.map