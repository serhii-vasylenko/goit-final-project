"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{9063:function(n,e,t){t.d(e,{Z:function(){return m}});var i,o,r,s,a,c=t(168),p=t(4709),d=p.Z.h1(i||(i=(0,c.Z)(["\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: -0.56px;\n  padding-bottom: 3px;\n\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n    letter-spacing: -0.64px;\n    padding-bottom: 6px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: ","px;\n    letter-spacing: -0.88px;\n  }\n"])),(function(n){return n.theme.colors.pageTitleColor}),(function(n){return n.theme.fontSizes[28]}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.lineHeights[1]}),(function(n){return n.theme.fontSizes[32]}),(function(n){return n.theme.fontSizes[44]})),l=p.Z.div(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 76px;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    left: 187px;\n    width: 14px;\n    height: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 247px;\n  }\n"])),(function(n){return n.theme.colors.accentColor})),f=(0,p.Z)(l)(r||(r=(0,c.Z)(["\n  top: 106px;\n  left: 333px;\n\n  @media screen and (min-width: 768px) {\n    top: 89px;\n    left: 694px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 1150px;\n  }\n"]))),h=p.Z.div(s||(s=(0,c.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 241px;\n  width: 6px;\n  height: 6px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 12px;\n    height: 12px;\n    border-radius: 3px;\n\n    left: 405px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 707px;\n  }\n"])),(function(n){return n.theme.colors.pageTitleColor})),u=p.Z.section(a||(a=(0,c.Z)(["\n  position: relative;\n  padding-top: 114px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 136px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 164px;\n  }\n"]))),x=t(184),m=function(n){var e=n.title;return(0,x.jsxs)(u,{children:[(0,x.jsx)(d,{children:e}),(0,x.jsx)(l,{}),(0,x.jsx)(f,{}),(0,x.jsx)(h,{})]})}},7215:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,o,r,s=t(9439),a=t(9434),c=t(2791),p=t(7689),d=t(4543),l=t(1087),f=t(5600),h=t(168),u=t(4709),x=u.Z.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  padding-top: 100px;\n  /* width:100%; */\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),m=u.Z.li(o||(o=(0,h.Z)(["\n  position: relative;\n  color:  ",";\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1;\n  padding-bottom: 27px;\n  text-transform: capitalize;\n  transition: color "," ",";\n\n  &:not(:last-child) {\n    margin-right: 55px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &.active::after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 3px;\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.categoryListItem}),(function(n){return n.theme.transforms.transitionDuration}),(function(n){return n.theme.transforms.timingFunction}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor})),g=u.Z.span(r||(r=(0,h.Z)(["\n  display: block;\n  width: 1240px;\n  height: 1px;\n  background: ",";\n"])),(function(n){return n.theme.colors.categoryListLine})),w=t(184),b=function(n){var e=n.currentCategory,t=(0,a.v9)(f.DS),i=(0,c.useRef)(null);return(0,w.jsxs)("div",{style:{overflow:"hidden"},children:[(0,w.jsx)(x,{ref:i,children:t.map((function(n,t){return(0,w.jsx)(m,{className:n.name.toLowerCase()===e.toLowerCase()?"active":null,onClick:function(n){return function(n,e){var t=i.current,o=t.children[e],r=t.offsetWidth,s=o.offsetWidth,a=o.offsetLeft-(r-s)/2;t.scrollTo({left:a,behavior:"smooth"})}(0,t)},children:(0,w.jsx)(l.rU,{to:"/categories/".concat(n.name),children:n.name})},n._id)}))}),(0,w.jsx)(g,{})]})},v=t(9063),Z=t(2730),j=function(){var n=(0,c.useState)("beef"),e=(0,s.Z)(n,2),t=e[0],i=e[1],o=(0,p.UO)().categoryName,r=(0,a.I0)();return(0,c.useEffect)((function(){i(o),r(d.A.getRecipesByCategory(o))}),[o,r]),(0,c.useEffect)((function(){r(d.A.getCategoryList())}),[r]),(0,w.jsxs)(Z.t,{style:{paddingTop:"58px"},children:[(0,w.jsx)(v.Z,{title:"Categories"}),(0,w.jsx)(b,{currentCategory:t}),(0,w.jsx)(c.Suspense,{children:(0,w.jsx)(p.j3,{})})]})}}}]);
//# sourceMappingURL=215.5af95b49.chunk.js.map