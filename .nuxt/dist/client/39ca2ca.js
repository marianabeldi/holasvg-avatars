(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{223:function(e,t,r){var content=r(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(127).default)("75dfd35a",content,!0,{sourceMap:!1})},231:function(e,t,r){"use strict";r(223)},232:function(e,t,r){var o=r(126)(!1);o.push([e.i,".main-avatar[data-v-7668d814]{background-color:var(--siteYellow);border:1px solid var(--borderColor);display:grid;grid-template-rows:1fr auto;flex:1;min-width:300px}#avatar[data-v-7668d814]{max-height:640px;-o-object-fit:cover;object-fit:cover;width:100%}.animationOn[data-v-7668d814]{filter:url(#scribble)}.btn-row[data-v-7668d814]{display:flex;flex-wrap:wrap;grid-gap:1rem;gap:1rem;margin:1rem}.btn-row .btn[data-v-7668d814]{background-color:#ff5463;background-color:var(--siteOrange);flex-grow:1;margin:0}.btn-row .btn[data-v-7668d814]:hover{background-color:var(--textColor);cursor:pointer}",""]),e.exports=o},238:function(e,t,r){"use strict";r.r(t);var o={methods:{}},l=(r(231),r(44)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-avatar"},[r("svg",{class:{animationOn:e.$state.isChecked},style:{backgroundColor:e.$state.colorValues.bgColor},attrs:{id:"avatar",viewBox:"0 0 100 100",fill:""}},[r("filter",{attrs:{id:"scribble"}},[r("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:"0.02",numOctaves:"2"}},[r("animate",{attrs:{attributeName:"seed",dur:"1s",repeatCount:"indefinite",values:"1;10"}})]),e._v(" "),r("feDisplacementMap",{attrs:{scale:"3",in:"SourceGraphic"}})],1),e._v(" "),r("g",{attrs:{id:"face",fill:e.$state.colorValues.faceFill,stroke:e.$state.colorValues.faceBorder}},[r("circle",{attrs:{cx:e.$state.numberValues.facePositionX.value,cy:e.$state.numberValues.facePositionY.value,r:e.$state.numberValues.faceSize.value}})]),e._v(" "),r("g",{attrs:{id:"eyes",fill:e.$state.colorValues.eyeFill,stroke:e.$state.colorValues.eyeBorder,"stroke-width":e.$state.numberValues.eyeBorderSize.value}},[r("circle",{attrs:{cx:e.$state.numberValues.eyePositionLX.value,cy:e.$state.numberValues.eyePositionLY.value,r:e.$state.numberValues.eyeSize.value}}),e._v(" "),r("circle",{attrs:{cx:e.$state.numberValues.eyePositionRX.value,cy:e.$state.numberValues.eyePositionRY.value,r:e.$state.numberValues.eyeSize.value}})]),e._v(" "),r("g",{attrs:{id:"mouth",fill:e.$state.colorValues.mouthFill,stroke:e.$state.colorValues.faceBorder}},[r("line",{attrs:{x1:"40",x2:e.$state.numberValues.mouthSize.value,y1:e.$state.numberValues.mouthPositionY.value,y2:e.$state.numberValues.mouthPositionY.value,transform:"translate("+e.$state.numberValues.mouthPositionX.value+" 0)"}})])]),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"btn-row"},[r("button",{staticClass:"btn"},[e._v("CSS")]),e._v(" "),r("button",{staticClass:"btn"},[e._v("SVG")]),e._v(" "),r("button",{staticClass:"btn"},[e._v("Codepen")])])}],!1,null,"7668d814",null);t.default=component.exports}}]);