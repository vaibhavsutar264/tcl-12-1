"use strict";(self.webpackChunktclcpasstwentyfirstoct=self.webpackChunktclcpasstwentyfirstoct||[]).push([[912],{50130:function(r,t,e){e.d(t,{Z:function(){return w}});var o=e(63366),n=e(87462),a=e(67294),i=e(86010),s=e(94780),l=e(41796),c=e(94174),u=e(69474),p=e(45355),d=e(36622),m=e(1588),f=e(34867);function h(r){return(0,f.Z)("MuiIconButton",r)}var g=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),y=e(85893);const b=["edge","children","className","color","disabled","disableFocusRipple","size"],v=(0,c.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,"default"!==e.color&&t[`color${(0,d.Z)(e.color)}`],e.edge&&t[`edge${(0,d.Z)(e.edge)}`],t[`size${(0,d.Z)(e.size)}`]]}})((({theme:r,ownerState:t})=>(0,n.Z)({textAlign:"center",flex:"0 0 auto",fontSize:r.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(r.vars||r).palette.action.active,transition:r.transitions.create("background-color",{duration:r.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:r.vars?`rgba(${r.vars.palette.action.activeChannel} / ${r.vars.palette.action.hoverOpacity})`:(0,l.Fq)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:r,ownerState:t})=>{var e;const o=null==(e=(r.vars||r).palette)?void 0:e[t.color];return(0,n.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,n.Z)({color:null==o?void 0:o.main},!t.disableRipple&&{"&:hover":(0,n.Z)({},o&&{backgroundColor:r.vars?`rgba(${o.mainChannel} / ${r.vars.palette.action.hoverOpacity})`:(0,l.Fq)(o.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:r.typography.pxToRem(28)},{[`&.${g.disabled}`]:{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}})}));var w=a.forwardRef((function(r,t){const e=(0,u.Z)({props:r,name:"MuiIconButton"}),{edge:a=!1,children:l,className:c,color:p="default",disabled:m=!1,disableFocusRipple:f=!1,size:g="medium"}=e,w=(0,o.Z)(e,b),x=(0,n.Z)({},e,{edge:a,color:p,disabled:m,disableFocusRipple:f,size:g}),Z=(r=>{const{classes:t,disabled:e,color:o,edge:n,size:a}=r,i={root:["root",e&&"disabled","default"!==o&&`color${(0,d.Z)(o)}`,n&&`edge${(0,d.Z)(n)}`,`size${(0,d.Z)(a)}`]};return(0,s.Z)(i,h,t)})(x);return(0,y.jsx)(v,(0,n.Z)({className:(0,i.Z)(Z.root,c),centerRipple:!0,focusRipple:!f,disabled:m,ref:t,ownerState:x},w,{children:l}))}))},91647:function(r,t,e){e.d(t,{Z:function(){return w}});var o=e(63366),n=e(87462),a=e(67294),i=e(86010),s=e(39707),l=e(94780),c=e(94174),u=e(69474),p=e(36622),d=e(1588),m=e(34867);function f(r){return(0,m.Z)("MuiTypography",r)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=e(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t[`align${(0,p.Z)(e.align)}`],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((({theme:r,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=a.forwardRef((function(r,t){const e=(0,u.Z)({props:r,name:"MuiTypography"}),a=(r=>v[r]||r)(e.color),c=(0,s.Z)((0,n.Z)({},e,{color:a})),{align:d="inherit",className:m,component:w,gutterBottom:x=!1,noWrap:Z=!1,paragraph:S=!1,variant:j="body1",variantMapping:P=b}=c,O=(0,o.Z)(c,g),N=(0,n.Z)({},c,{align:d,color:a,className:m,component:w,gutterBottom:x,noWrap:Z,paragraph:S,variant:j,variantMapping:P}),R=w||(S?"p":P[j]||b[j])||"span",I=(r=>{const{align:t,gutterBottom:e,noWrap:o,paragraph:n,variant:a,classes:i}=r,s={root:["root",a,"inherit"!==r.align&&`align${(0,p.Z)(t)}`,e&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,f,i)})(N);return(0,h.jsx)(y,(0,n.Z)({as:R,ref:t,ownerState:N,className:(0,i.Z)(I.root,m)},O))}))},39707:function(r,t,e){e.d(t,{Z:function(){return l}});var o=e(87462),n=e(63366),a=e(59766),i=e(86977);const s=["sx"];function l(r){const{sx:t}=r,e=(0,n.Z)(r,s),{systemProps:l,otherProps:c}=(r=>{const t={systemProps:{},otherProps:{}};return Object.keys(r).forEach((e=>{i.Gc[e]?t.systemProps[e]=r[e]:t.otherProps[e]=r[e]})),t})(e);let u;return u=Array.isArray(t)?[l,...t]:"function"==typeof t?(...r)=>{const e=t(...r);return(0,a.P)(e)?(0,o.Z)({},l,e):l}:(0,o.Z)({},l,t),(0,o.Z)({},c,{sx:u})}},87233:function(r,t,e){e.r(t);var o=e(67294),n=e(87536),a=e(2305),i=e(61045),s=e(25782),l=e(94174),c=e(95305),u=e(18720),p=e(91647),d=e(52922),m=e(17888),f=e(36954),h=e(44297),g=e(180),y=e(44908),b=e(89250),v=e(76386),w=e(29320),x=e(49034),Z=e(85893);function S(r){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},S(r)}function j(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,o)}return e}function P(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?j(Object(e),!0).forEach((function(t){O(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function O(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==S(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,"string");if("object"!==S(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===S(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function N(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var o,n,a,i,s=[],l=!0,c=!1;try{if(a=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;l=!1}else for(;!(l=(o=a.call(e)).done)&&(s.push(o.value),s.length!==t);l=!0);}catch(r){c=!0,n=r}finally{try{if(!l&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw n}}return s}}(r,t)||function(r,t){if(r){if("string"==typeof r)return R(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?R(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=r[e];return o}var I=(0,l.ZP)(c.Z)((function(r){return{color:r.theme.palette.getContrastText(f.Z[500]),backgroundColor:f.Z[500],height:"70px",width:"100%",borderRadius:"35px",mixBlendMode:"luminosity",opacity:.5,"&:hover":{backgroundColor:f.Z[700]}}}));t.default=function(){var r=(0,b.s0)(),t=N((0,o.useState)(""),2),e=t[0],l=t[1],c=N((0,o.useState)(""),2),f=c[0],S=c[1],j=(0,s.v9)((function(r){return r.auth||{}})),O=(j.isError,j.isSuccess,j.message),R=(j.user,j.resetmessage),C=(0,s.I0)(),_=(0,h.Z)().t;"SUCCESS"===R&&r(g.VP.WELCOME);var z=(0,n.cI)({mode:"onChange",resolver:(0,a.X)(w.mp)}),B=z.register,M=z.handleSubmit,k=z.formState;return z.control,z.getValues,(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(u.Z,{sx:{flexGrow:1},id:"login-form",className:"account__form login-form",children:(0,Z.jsxs)("div",{className:"form__inner",children:[(0,Z.jsxs)(u.Z,{sx:{width:1},className:"account__form__header",children:[(0,Z.jsx)("h3",{className:"title",children:_("resetPassword")}),(0,Z.jsx)(p.Z,{className:"helper__title",variant:"body1",sx:{textAlign:"center",fontFamily:"ubuntu",letterSpacing:0,opacity:.6},children:_("resetPasswordSubTitle")})]}),(0,Z.jsx)(u.Z,{sx:{width:1},className:"account__form__error",children:(0,Z.jsx)("p",{className:"error__msg",children:O&&O})}),(0,Z.jsx)(u.Z,{sx:{flexGrow:1},className:"account__form__body",children:(0,Z.jsx)(x.R,{onSubmit:M((function(r){return function(r){try{var t={newPassword:(0,y.h)(r.newPass),username:null};C((0,i.c0)(t))}catch(r){console.error(r)}}(r)})),children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(v.i,{register:P({},B("newPass")),label:"password",classNameInput:"input-field",fieldName:"newPass",formState:k,typeName:"password",onInput:l,setpassword:!0,variantForInput:"standard",sxForInput:{width:1,borderRadius:"10px !important",border:"none !important"},dataTestId:"password-element"}),(0,Z.jsx)(v.i,{register:P({},B("cnfPassword")),label:"confirmPassword",classNameInput:"input-field",fieldName:"cnfPassword",formState:k,typeName:"password",onInput:S,variantForInput:"standard",sxForInput:{width:1,borderRadius:"10px !important",border:"none !important"},dataTestId:"confirm-password-element"}),(0,Z.jsx)("div",{style:{position:"relative",minHeight:"15px"},children:!k.errors.newPass&&!k.errors.cnfPassword&&""!=e&&(0,Z.jsx)("p",{className:e!==f?"CnfPass error":"CnfPass success",children:"".concat(_(e!==f?"bothPasswordMustMatch":"paswordsMatched"))})}),(0,Z.jsx)(m.Z,{className:"input-wrapper submitBtn",sx:{display:"flex",alignItems:"flex-end",position:"relative",width:1,marginTop:"50px"},children:(0,Z.jsx)(I,{variant:"contained",id:"btn-enable-style","data-testid":"button-element",type:"submit",name:"submit",sx:{fontSize:"18px",lineHeight:"21px",fontFamily:"ubuntu",letterSpacing:"-0.72px"},className:"customBtn-01 ".concat(""==e||e!=f||k.errors.newPass?"no-pointers":"btn-enable-style"," "),children:_("done")})})]})})})]})})})}},44908:function(r,t,e){e.d(t,{h:function(){return n}});var o=e(48764);function n(r){return o.lW.from(r).toString("base64")}}}]);
//# sourceMappingURL=912.bundle.js.map