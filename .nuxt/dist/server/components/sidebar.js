exports.ids = [5,6,7,8];
exports.modules = {

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("04c6a0d1", content, true, context)
};

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarFace.vue?vue&type=template&id=8e50e024&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-box"},[_vm._ssrNode("<h3 data-v-8e50e024>Face</h3> <div class=\"side-box-option\" data-v-8e50e024><label for=\"faceFill\" data-v-8e50e024>Fill</label> <input type=\"color\" id=\"faceFill\" name=\"faceFill\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.faceFill)))+" data-v-8e50e024></div> <div class=\"side-box-option\" data-v-8e50e024><label for=\"faceBorder\" data-v-8e50e024>Border</label> <input type=\"color\" id=\"faceBorder\" name=\"faceBorder\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.faceBorder)))+" data-v-8e50e024></div> <div class=\"side-box-option\" data-v-8e50e024><label for=\"faceSize\" data-v-8e50e024>Size</label> <input type=\"range\" id=\"faceSize\" name=\"faceSize\" min=\"0\" max=\"100\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.faceSize.value)))+" data-v-8e50e024></div> <div class=\"side-box-option\" data-v-8e50e024><label for=\"facePositionX\" data-v-8e50e024>Position X</label> <input type=\"range\" id=\"facePositionX\" name=\"facePositionX\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.facePositionX.value)))+" data-v-8e50e024></div> <div class=\"side-box-option\" data-v-8e50e024><label for=\"facePositionX\" data-v-8e50e024>Position Y</label> <input type=\"range\" id=\"facePositionY\" name=\"facePositionY\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.facePositionY.value)))+" data-v-8e50e024></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SidebarFace.vue?vue&type=template&id=8e50e024&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarFace.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SidebarFacevue_type_script_lang_js_ = ({
  methods: {}
});
// CONCATENATED MODULE: ./components/SidebarFace.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarFacevue_type_script_lang_js_ = (SidebarFacevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SidebarFace.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarFacevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8e50e024",
  "214c0990"
  
)

/* harmony default export */ var SidebarFace = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarMouth.vue?vue&type=template&id=1bcdb01a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-box"},[_vm._ssrNode("<h3 data-v-1bcdb01a>Mouth</h3> <div class=\"side-box-option\" data-v-1bcdb01a><label for=\"mouthSize\" data-v-1bcdb01a>Size</label> <input type=\"range\" id=\"mouthSize\" name=\"mouthSize\" min=\"0\" max=\"100\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.mouthSize.value)))+" data-v-1bcdb01a></div> <div class=\"side-box-option\" data-v-1bcdb01a><label for=\"mouthPositionX\" data-v-1bcdb01a>Position X</label> <input type=\"range\" id=\"mouthPositionX\" name=\"mouthPositionX\" min=\"-100\" max=\"100\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.mouthPositionX.value)))+" data-v-1bcdb01a></div> <div class=\"side-box-option\" data-v-1bcdb01a><label for=\"mouthPositionX\" data-v-1bcdb01a>Position Y</label> <input type=\"range\" id=\"mouthPositionY\" name=\"mouthPositionY\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.mouthPositionY.value)))+" data-v-1bcdb01a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SidebarMouth.vue?vue&type=template&id=1bcdb01a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarMouth.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SidebarMouthvue_type_script_lang_js_ = ({
  methods: {}
});
// CONCATENATED MODULE: ./components/SidebarMouth.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarMouthvue_type_script_lang_js_ = (SidebarMouthvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SidebarMouth.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarMouthvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1bcdb01a",
  "e6233908"
  
)

/* harmony default export */ var SidebarMouth = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarEyes.vue?vue&type=template&id=7d141948&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-box"},[_vm._ssrNode("<h3 data-v-7d141948>Eyes</h3> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyeFill\" data-v-7d141948>Fill</label> <input type=\"color\" id=\"eyeFill\" name=\"eyeFill\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.eyeFill)))+" data-v-7d141948></div> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyeBorder\" data-v-7d141948>Border</label> <input type=\"color\" id=\"eyeBorder\" name=\"eyeBorder\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.eyeBorder)))+" data-v-7d141948></div> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyeSize\" data-v-7d141948>Size</label> <input type=\"range\" id=\"eyeSize\" name=\"eyeSize\" min=\"0\" max=\"100\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyeSize.value)))+" data-v-7d141948></div> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyeBorderSize\" data-v-7d141948>Border Width</label> <input type=\"range\" id=\"eyeBorderSize\" name=\"eyeBorderSize\" min=\"0\" max=\"100\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyeBorderSize.value)))+" data-v-7d141948></div> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyePositionLX\" data-v-7d141948>Position Left X</label> <input type=\"range\" id=\"eyePositionLX\" name=\"eyePositionLX\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionLX.value)))+" data-v-7d141948></div> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyePositionLY\" data-v-7d141948>Position Left Y</label> <input type=\"range\" id=\"eyePositionLY\" name=\"eyePositionLY\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionLY.value)))+" data-v-7d141948></div> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyePositionRX\" data-v-7d141948>Position Right X</label> <input type=\"range\" id=\"eyePositionRX\" name=\"eyePositionRX\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionRX.value)))+" data-v-7d141948></div> <div class=\"side-box-option\" data-v-7d141948><label for=\"eyePositionRY\" data-v-7d141948>Position Right Y</label> <input type=\"range\" id=\"eyePositionRY\" name=\"eyePositionRY\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionRY.value)))+" data-v-7d141948></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SidebarEyes.vue?vue&type=template&id=7d141948&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarEyes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SidebarEyesvue_type_script_lang_js_ = ({
  methods: {}
});
// CONCATENATED MODULE: ./components/SidebarEyes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarEyesvue_type_script_lang_js_ = (SidebarEyesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SidebarEyes.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarEyesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d141948",
  "fd855286"
  
)

/* harmony default export */ var SidebarEyes = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-aside{background-color:var(--bgColor);border:1px solid var(--borderColor);display:flex;flex-direction:column;flex:1;grid-gap:1rem;gap:1rem;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;padding:1rem;text-align:left}@media(min-width:40em){.main-aside{display:grid}}.btn.btn-lucky{grid-column:1/3;margin:0;order:2;width:100%}@media(min-width:56em){.btn.btn-lucky{order:0}}.side-box{border:1px solid var(--borderColor);margin:1rem 0;padding:1rem}.side-box,.side-box>h3{background-color:var(--siteYellow)}.side-box>h3{margin-top:-1.7rem;padding:0 .4rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.side-box-option{align-items:center;display:grid;grid-template-columns:1fr 1fr;margin-bottom:1.5rem}.side-box-option:last-child{margin-bottom:.5rem}.side-box-option label{margin-right:.5rem;text-align:right}.side-box-option label:after{content:\":\"}input[type=color]{aspect-ratio:1;background:transparent;border:none;border:1px solid var(--textColor);border-radius:4px;height:32px;padding:0;width:32px}input[type=color]::-webkit-color-swatch-wrapper{padding:0}input[type=color]::-webkit-color-swatch{border-color:currentColor;border-radius:3px}input[type=range]{border-radius:10px;height:12px;-webkit-appearance:none;outline:none;background:none}input[type=range]::-webkit-slider-runnable-track{background-color:var(--siteBlue);height:12px}input[type=range]::-webkit-slider-runnable-track:focus,input[type=range]::-webkit-slider-runnable-track:hover{background:#465479}input[type=range]::-webkit-slider-thumb{background:var(--siteOrange);border-radius:2px;cursor:ew-resize;margin-top:-8px;width:12px;height:28px;-webkit-appearance:none;vertical-align:middle}input[type=range]::-webkit-slider-thumb:focus,input[type=range]::-webkit-slider-thumb:hover{background:#ff5463;background:#84c9d2}.checkmark-input{cursor:pointer;grid-area:2/2;opacity:0;height:32px;width:32px}.checkmark-bg{grid-area:2/2;pointer-events:none}input[type=checkbox]:checked *{transition:all .1s linear}input[type=checkbox]:checked+.checkmark-bg rect,input[type=checkbox]:hover+.checkmark-bg rect{fill:var(--siteOrange)}input[type=checkbox]:checked+.checkmark-bg .checkmark{-webkit-animation:checkdraw .2s ease forwards;animation:checkdraw .2s ease forwards;stroke:var(--siteYellow)}.checkmark-bg .checkmark{stroke-dasharray:28px;stroke-dashoffset:28px}@-webkit-keyframes checkdraw{to{stroke-dashoffset:0}}@keyframes checkdraw{to{stroke-dashoffset:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sidebar.vue?vue&type=template&id=6dad29e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"main-aside"},[_vm._ssrNode("<button class=\"btn btn-lucky\">\n    I'm feeling lucky\n  </button> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"side-box\"><h3>General</h3> <div class=\"side-box-option\"><label for=\"bg\">Background Color</label> <input type=\"color\" id=\"bg\" name=\"bg\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.bgColor)))+"> <label for=\"animation\" class=\"checkmark-label\">Animation</label> <input type=\"checkbox\" id=\"animation\" name=\"animation\""+(_vm._ssrAttr("checked",_vm.$state.isChecked))+" class=\"checkmark-input\"> <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\" class=\"checkmark-bg\"><rect x=\"1\" y=\"1\" width=\"30\" height=\"30\" stroke=\"#202640\" fill=\"none\" stroke-width=\"1\" rx=\"3\" ry=\"3\"></rect> <polyline points=\"8,17 14,23 25,8\" stroke=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" fill=\"none\" class=\"checkmark\"></polyline></svg></div></div> "),_c('SidebarFace'),_vm._ssrNode(" "),_c('SidebarMouth')],2),_vm._ssrNode(" "),_c('SidebarEyes')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=template&id=6dad29e1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  data() {
    return {
      colorsMabel: ["#F44336", "#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#E53935", "#D32F2F", "#C62828", "#B71C1C", "#FF8A80", "#FF5252", "#FF1744", "#D50000", "#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457", "#880E4F", "#FF80AB", "#FF4081", "#F50057", "#C51162", "#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C", "#EA80FC", "#E040FB", "#D500F9", "#AA00FF", "#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92", "#B388FF", "#7C4DFF", "#651FFF", "#6200EA", "#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E", "#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE", "#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1", "#82B1FF", "#448AFF", "#2979FF", "#2962FF", "#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B", "#80D8FF", "#40C4FF", "#00B0FF", "#0091EA", "#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F", "#006064", "#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4", "#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C", "#004D40", "#A7FFEB", "#64FFDA", "#1DE9B6", "#00BFA5", "#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20", "#B9F6CA", "#69F0AE", "#00E676", "#00C853", "#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F", "#33691E", "#CCFF90", "#B2FF59", "#76FF03", "#64DD17", "#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B", "#9E9D24", "#827717", "#F4FF81", "#EEFF41", "#C6FF00", "#AEEA00", "#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825", "#F57F17", "#FFFF8D", "#FFFF00", "#FFEA00", "#FFD600", "#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00", "#FF6F00", "#FFE57F", "#FFD740", "#FFC400", "#FFAB00", "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100", "#FFD180", "#FFAB40", "#FF9100", "#FF6D00", "#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315", "#BF360C", "#FF9E80", "#FF6E40", "#FF3D00", "#DD2C00", "#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#795548", "#6D4C41", "#5D4037", "#4E342E", "#3E2723", "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121", "#ECEFF1", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F", "#263238", "#000000"]
    };
  },

  methods: {
    randomColors() {
      for (var i in this.$state.colorValues) {
        this.$state.colorValues[i] = this.colorsMabel[Math.floor(Math.random() * this.colorsMabel.length)];
      }

      for (var e in this.$state.numberValues) {
        this.$state.numberValues[e].value = this.randomNum(e);
      }
    },

    randomHex() {
      return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    },

    randomNum(e) {
      var min = this.$state.numberValues[e].min;
      var max = this.$state.numberValues[e].max;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  }
});
// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Sidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6f13fe8a"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SidebarFace: __webpack_require__(24).default,SidebarMouth: __webpack_require__(25).default,SidebarEyes: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=sidebar.js.map