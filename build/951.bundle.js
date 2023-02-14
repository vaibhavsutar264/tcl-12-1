"use strict";(self.webpackChunktclcpasstwentyfirstoct=self.webpackChunktclcpasstwentyfirstoct||[]).push([[951,72],{61394:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(63366),o=n(87462),M=n(67294),i=n(86010),u=n(94780),s=n(36622),c=n(94174),a=n(69474),L=n(76052),l=n(84771),N=n(91647),j=n(1588),y=n(34867);function D(e){return(0,y.Z)("MuiLink",e)}var x=(0,j.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=n(54844),I=n(41796);const z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var S=({theme:e,ownerState:t})=>{const n=(e=>z[e]||e)(t.color),r=(0,w.DW)(e,`palette.${n}`,!1)||t.color,o=(0,w.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,I.Fq)(r,.4)},g=n(85893);const T=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],d=(0,c.ZP)(N.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,s.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:S({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})));var m=M.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiLink"}),{className:c,color:N="primary",component:j="a",onBlur:y,onFocus:x,TypographyClasses:w,underline:I="always",variant:S="inherit",sx:m}=n,p=(0,r.Z)(n,T),{isFocusVisibleRef:A,onBlur:E,onFocus:b,ref:f}=(0,L.Z)(),[C,O]=M.useState(!1),h=(0,l.Z)(t,f),Y=(0,o.Z)({},n,{color:N,component:j,focusVisible:C,underline:I,variant:S}),k=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,M={root:["root",`underline${(0,s.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,u.Z)(M,D,t)})(Y);return(0,g.jsx)(d,(0,o.Z)({color:N,className:(0,i.Z)(k.root,c),classes:w,component:j,onBlur:e=>{E(e),!1===A.current&&O(!1),y&&y(e)},onFocus:e=>{b(e),!0===A.current&&O(!0),x&&x(e)},ref:h,ownerState:Y,variant:S,sx:[...Object.keys(z).includes(N)?[]:[{color:N}],...Array.isArray(m)?m:[m]]},p))}))},61951:function(e,t,n){n.r(t);var r=n(67294),o=n(25782),M=n(61045),i=n(94174),u=n(95305),s=n(18720),c=n(52922),a=n(17888),L=n(36954),l=n(44297),N=n(91072),j=n(76386),y=n(51809),D=n(87536),x=n(2305),w=n(29320),I=n(49034),z=n(85893);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=(0,i.ZP)(u.Z)((function(e){return{color:e.theme.palette.getContrastText(L.Z[500]),backgroundColor:L.Z[500],height:"70px",width:"100%",borderRadius:"35px",mixBlendMode:"luminosity",opacity:.5,"&:hover":{backgroundColor:L.Z[700]}}}));t.default=function(){var e,t,n=(0,o.v9)((function(e){return e.auth})).forgotPassEmail,i=(0,o.I0)(),u=(0,l.Z)().t,L=(e=(0,r.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,M,i,u=[],s=!0,c=!1;try{if(M=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=M.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),S=L[0],g=L[1],d=(0,D.cI)({mode:"onChange",resolver:(0,x.X)(w.sw)}),A=d.register,E=d.handleSubmit,b=d.formState,f=d.getValues,C=function(e){var t={email:f().user};i((0,M.gF)(t))};return(0,r.useEffect)((function(){i((0,M.Iy)())}),[]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(s.Z,{sx:{flexGrow:1},id:"login-form",className:"account__form",children:(0,z.jsxs)("div",{className:"form__inner",children:[(0,z.jsxs)(s.Z,{sx:{width:1},className:"account__form__header",children:[(0,z.jsx)("h3",{className:"title",children:u("forgotPassword")}),(0,z.jsx)("span",{className:"box-help-text",children:u("forgotPassHelpTxt")})]}),(0,z.jsx)(s.Z,{sx:{flexGrow:1,paddingTop:"0 !important"},className:"account__form__body",children:(0,z.jsx)(I.R,{onSubmit:E((function(e){return C()})),children:(0,z.jsxs)(c.Z,{children:[(0,z.jsx)(j.i,{register:T({},A("user")),label:"enterYourRegisteredEmailId",classNameInput:"input-field",fieldName:"user",formState:b,typeName:"email",onInput:g,variantForInput:"standard",sxForInput:{width:1,borderRadius:"10px !important",border:"none !important"},dataTestId:"email-element"}),(0,z.jsx)(a.Z,{className:"input-wrapper submitBtn",sx:{display:"flex",alignItems:"flex-end",position:"relative",width:1,marginTop:"50px"},children:(0,z.jsx)(p,{type:"submit",id:"btn-enable-style","data-testid":"button-element",variant:"contained",className:"customBtn-01 ".concat((0,y.oH)(S)?"btn-enable-style":"no-pointers"," "),sx:{fontSize:"18px",lineHeight:"21px",fontFamily:"ubuntu",letterSpacing:"-0.72px"},children:u("getLink")})})]})})})]})}),(0,z.jsx)(N.default,{modalData:{email:f().user,action:C},open:n,setOpen:function(e){i((0,M.Iy)())}})]})}},91072:function(e,t,n){n.r(t),n(67294);var r=n(58653),o=n(50130),M=n(61394),i=n(24498),u=n(94439),s=n(77745),c=n(61225),a=n(62097),L=n(83752),l=n(36191),N=n(85893);t.default=function(e){var t=e.open,n=e.setOpen,j=e.modalData,y=(0,a.Z)(),D=(0,c.Z)(y.breakpoints.down("md")),x=function(){n(!1)};return(0,N.jsx)("div",{children:(0,N.jsxs)(r.Z,{fullScreen:D,open:t,onClose:x,"aria-labelledby":"responsive-dialog-title",children:[(0,N.jsx)(o.Z,{onClick:x,children:(0,N.jsx)(l.Z,{})}),(0,N.jsx)("img",{src:L,alt:""}),(0,N.jsx)(s.Z,{id:"responsive-dialog-title",textAlign:"center",children:"Check Your Mail"}),(0,N.jsx)(i.Z,{children:(0,N.jsxs)(u.Z,{textAlign:"center",children:[(0,N.jsxs)("p",{className:"darker-text",children:["We have sent a link on your registered email ",(0,N.jsx)("span",{className:"bolder-text",children:j.email})]}),(0,N.jsxs)("p",{className:"lighter-text",children:["Didn‘t receive link? ",(0,N.jsx)(M.Z,{style:{cursor:"pointer"},onClick:j.action,color:"error",underline:"always",children:"Resend"})]})]})})]})})}},83752:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAuMzAzIiBoZWlnaHQ9IjEwNy4xMzQiIHZpZXdCb3g9IjAgMCAxMDAuMzAzIDEwNy4xMzQiPgogIDxnIGlkPSJHcm91cF8xNjgyNTQiIGRhdGEtbmFtZT0iR3JvdXAgMTY4MjU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDIpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzEzNDM5IiBkYXRhLW5hbWU9IlBhdGggMTM0MzkiIGQ9Ik03MTEuMzUyLTEwNjkuNDI1bDQ1LjY2MywzNC42NjYsNDYuNTUzLTM2LjA2MXY1Ny41MDdINzExLjM1MnYtNTQuNTQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzA2Ljg3NSAxMTE2LjUyOSkiIGZpbGw9IiNmM2JkYzUiLz4KICAgIDxnIGlkPSJHcm91cF8xNjgwNzMiIGRhdGEtbmFtZT0iR3JvdXAgMTY4MDczIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzE2ODA3MiIgZGF0YS1uYW1lPSJHcm91cCAxNjgwNzIiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzEzNDQwIiBkYXRhLW5hbWU9IlBhdGggMTM0NDAiIGQ9Ik03NDYuNTc2LTExMTYuMDZxLTIwLjcxLDAtNDEuNDIsMGE4LjI4NCw4LjI4NCwwLDAsMS04LjUyOC02LjUwOCwxMC4yMTYsMTAuMjE2LDAsMCwxLS4xNzktMi4zNDRxMC0yNy43ODItLjAyMS01NS41NjRhOC45NjMsOC45NjMsMCwwLDEsMy42ODctNy42NDhjMS44NDYtMS40LDMuNi0yLjkxOSw1LjQzOS00LjMzN2ExLjk3NywxLjk3NywwLDAsMCwuODc0LTEuNzc2Yy0uMDQ4LTMuMjkyLS4wMjUtNi41ODUtLjAxOS05Ljg3Ny4wMS01LjM2MSwzLjQ3MS04LjgzMSw4Ljg1MS04Ljg0OXE3LjM1Mi0uMDI1LDE0LjcuMDA5YTIuNjcxLDIuNjcxLDAsMCwwLDEuODMtLjYzOXE0LjYtMy43NjYsOS4yNTUtNy40NzNhOC4zLDguMywwLDAsMSwxMS4wODUsMHE0LjcsMy43MzksOS4zNDUsNy41NGEyLjM3MywyLjM3MywwLDAsMCwxLjYyNC41NzFxNy4zNTItLjAzMSwxNC43LS4wMDljNS41MjMuMDEzLDguOTQ1LDMuNDUyLDguOTUyLDguOTc2LDAsMy4yNTUuMDIyLDYuNTExLS4wMTUsOS43NjZhMS44ODQsMS44ODQsMCwwLDAsLjgsMS43YzEuOTUyLDEuNTEsMy44NDUsMy4xLDUuNzg1LDQuNjI0YTguNTg2LDguNTg2LDAsMCwxLDMuNCw3LjIxNmMtLjAzNiw1LjAxNC0uMDA5LDEwLjAyNy0uMDA5LDE1LjA0MXEwLDIwLjQyOS0uMDA1LDQwLjg1OWMwLDQuMzc0LTIuNDgxLDcuNi02LjQ4OSw4LjU0MWExMS42MjUsMTEuNjI1LDAsMCwxLTIuNjguMTg1UTc2Ny4wNjItMTExNi4wNTgsNzQ2LjU3Ni0xMTE2LjA2Wm00My41MzItNTUuNzgxYy0uNTA2LjQtLjk0NS43NDItMS4zNzksMS4wOTJxLTE4LjMxNywxNC43MzctMzYuNjM1LDI5LjQ3MWE4LjI4OCw4LjI4OCwwLDAsMS0xMSwuMDEzcS0xNy45MjYtMTQuNDE2LTM1Ljg0My0yOC44NDRjLS43MTItLjU3NC0xLjQzMS0xLjEzOS0yLjE3NC0xLjczMWEyLjIzOCwyLjIzOCwwLDAsMC0uMTg0LDEuMzI3cS0uMDA5LDIyLjU2MSwwLDQ1LjEyM2MwLDIuNDMxLjQ2LDIuODkzLDIuODgsMi44OTNoODEuNmMyLjQ0NSwwLDIuOTExLS40NTgsMi45MTEtMi44NjJxMC0yMi41NjIsMC00NS4xMjNBMi42MDUsMi42MDUsMCwwLDAsNzkwLjEwOC0xMTcxLjg0Wm0tNDMuNTI2LTM0LjY2cS0xNS42LDAtMzEuMjA1LDBjLTEuOTIzLDAtMi40ODUuNTYxLTIuNDg2LDIuNDU3cTAsMTUuMzc4LS4wMTcsMzAuNzU2YTEuOTI5LDEuOTI5LDAsMCwwLC44LDEuNjkycTE1LjY3MSwxMi41NjcsMzEuMzEyLDI1LjE3MWMxLjIzNS45OTQsMS45NCwxLDMuMTgzLDBxMTUuNjEtMTIuNTUzLDMxLjIyMy0yNS4xYTIuMTI3LDIuMTI3LDAsMCwwLC45LTEuODc2Yy0uMDMxLTEwLjE0LS4wMi0yMC4yOC0uMDItMzAuNDE5LDAtMi4yMDktLjQ3Ny0yLjY4Mi0yLjcxMS0yLjY4M1E3NjIuMDcyLTEyMDYuNSw3NDYuNTgyLTEyMDYuNVptNS4yMzctNi41MjdjLTEuNTYxLTEuMjUtMi44NTMtMi4zMTItNC4xNzgtMy4zMzFhMS40NjEsMS40NjEsMCwwLDAtMS43ODYtLjE2NWMtMS40NTgsMS4wNTYtMi44NTgsMi4xOTMtNC41MzgsMy41Wm0zNC45NjcsMzUuNTQ1YzEuMS0uOSwyLjA1My0xLjYwNSwyLjkxNC0yLjRhMS42LDEuNiwwLDAsMCwuMjYxLTIuMjMxLDIxLjQ3NSwyMS40NzUsMCwwLDAtMy4xNzUtMi43N1ptLTgwLjQ2LS4wNnYtNy4yNjNjLTEuMDIxLjgyNS0xLjkzOSwxLjUxLTIuNzksMi4yNjlhMS43MzMsMS43MzMsMCwwLDAtLjE0MSwyLjU4MkM3MDQuMjcyLTExNzkuMTI0LDcwNS4yNTktMTE3OC40MTEsNzA2LjMyNy0xMTc3LjU0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OTYuNDI4IDEyMjEuMTkyKSIgZmlsbD0iI2Q2MzU0OCIvPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzEzNDQxIiBkYXRhLW5hbWU9IlBhdGggMTM0NDEiIGQ9Ik04MDguMDMtMTA4Mi41OTNoMjAuNDE0Yy4zNzQsMCwuNzUtLjAxNywxLjEyMS4wMTVhMy4yMzMsMy4yMzMsMCwwLDEsMy4wMzIsMy4xNjksMy4yNSwzLjI1LDAsMCwxLTMuMDM2LDMuMjg1Yy0uMzM0LjAzLS42NzMuMDE2LTEuMDA5LjAxNkg3ODcuMjc2Yy0uMzM3LDAtLjY3NS4wMTQtMS4wMDktLjAxNmEzLjIzMSwzLjIzMSwwLDAsMS0zLjAyNC0zLjI4NywzLjIxNiwzLjIxNiwwLDAsMSwzLjAyNy0zLjE2N2MuMzcxLS4wMzIuNzQ3LS4wMTUsMS4xMjEtLjAxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTcuMiAxMTI0Ljc3MykiIGZpbGw9IiNkNjM1NDgiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8xMzQ0MiIgZGF0YS1uYW1lPSJQYXRoIDEzNDQyIiBkPSJNNzk3LjEyOS0xMTMyLjA3OGMzLjQzNywwLDYuODc0LS4wMDcsMTAuMzEyLDAsMi4xMzguMDA2LDMuNTYxLDEuMjY3LDMuNiwzLjE1NmEzLjI3NywzLjI3NywwLDAsMS0zLjU3OSwzLjMxNXEtMTAuMzExLjAyMi0yMC42MjMsMGMtMi4xNjUsMC0zLjYxOS0xLjM2NS0zLjU5NC0zLjI5NC4wMjUtMS44OTMsMS40NDQtMy4xNywzLjU3My0zLjE3N0M3OTAuMjU1LTExMzIuMDg2LDc5My42OTItMTEzMi4wNzgsNzk3LjEyOS0xMTMyLjA3OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTcuMjAxIDExNTkuNDEyKSIgZmlsbD0iI2Q2MzU0OCIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=951.bundle.js.map