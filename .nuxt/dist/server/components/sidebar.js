exports.ids = [4,5,6,7];
exports.modules = {

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("04c6a0d1", content, true, context)
};

/***/ }),

/***/ 23:
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

/***/ 24:
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

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarEyes.vue?vue&type=template&id=47604d46&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-box"},[_vm._ssrNode("<h3 data-v-47604d46>Eyes</h3> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyeFill\" data-v-47604d46>Fill</label> <input type=\"color\" id=\"eyeFill\" name=\"eyeFill\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.eyeFill)))+" data-v-47604d46></div> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyeBorder\" data-v-47604d46>Border</label> <input type=\"color\" id=\"eyeBorder\" name=\"eyeBorder\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.eyeBorder)))+" data-v-47604d46></div> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyeBorderSize\" data-v-47604d46>Border Width</label> <input type=\"range\" id=\"eyeBorderSize\" name=\"eyeBorderSize\" min=\"0\" max=\"100\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyeBorderSize.value)))+" data-v-47604d46></div> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyeSize\" data-v-47604d46>Size</label> <input type=\"range\" id=\"eyeSize\" name=\"eyeSize\" min=\"0\" max=\"100\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyeSize.value)))+" data-v-47604d46></div> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyePositionLX\" data-v-47604d46>Position Left X</label> <input type=\"range\" id=\"eyePositionLX\" name=\"eyePositionLX\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionLX.value)))+" data-v-47604d46></div> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyePositionLY\" data-v-47604d46>Position Left Y</label> <input type=\"range\" id=\"eyePositionLY\" name=\"eyePositionLY\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionLY.value)))+" data-v-47604d46></div> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyePositionRX\" data-v-47604d46>Position Right X</label> <input type=\"range\" id=\"eyePositionRX\" name=\"eyePositionRX\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionRX.value)))+" data-v-47604d46></div> <div class=\"side-box-option\" data-v-47604d46><label for=\"eyePositionRY\" data-v-47604d46>Position Right Y</label> <input type=\"range\" id=\"eyePositionRY\" name=\"eyePositionRY\" min=\"-50\" max=\"150\""+(_vm._ssrAttr("value",(_vm.$state.numberValues.eyePositionRY.value)))+" data-v-47604d46></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SidebarEyes.vue?vue&type=template&id=47604d46&scoped=true&

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
  "47604d46",
  "fd855286"
  
)

/* harmony default export */ var SidebarEyes = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-aside{background-color:var(--bgColor);border:1px solid var(--borderColor);flex:1;grid-gap:1rem;gap:1rem;grid-template-columns:1fr 1fr;grid-template-rows:auto;padding:1rem;text-align:left}@media(min-width:40em){.main-aside{display:grid}}.btn.btn-lucky{grid-column:1/3;margin:0 0 1rem;width:100%}.side-box{border:1px solid var(--borderColor);margin:1rem 0;padding:1rem}.side-box,.side-box>h3{background-color:var(--siteYellow)}.side-box>h3{margin-top:-1.7rem;padding:0 .4rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.side-box-option{align-items:center;display:grid;grid-template-columns:1fr 1fr;margin-bottom:1.5rem}.side-box-option:last-child{margin-bottom:.5rem}.side-box-option label{margin-right:.5rem;text-align:right}.side-box-option label:after{content:\":\"}input[type=color]{aspect-ratio:1;background:transparent;border:none;border:1px solid var(--textColor);border-radius:4px;height:32px;padding:0;width:32px}input[type=color]::-webkit-color-swatch-wrapper{padding:0}input[type=color]::-webkit-color-swatch{border-color:currentColor;border-radius:3px}input[type=range]{border-radius:10px;height:12px;-webkit-appearance:none;outline:none;background:none}input[type=range]::-webkit-slider-runnable-track{background-color:var(--siteBlue);height:12px}input[type=range]::-webkit-slider-runnable-track:focus,input[type=range]::-webkit-slider-runnable-track:hover{background:#465479}input[type=range]::-webkit-slider-thumb{background:var(--siteOrange);border-radius:2px;cursor:ew-resize;margin-top:-8px;width:12px;height:28px;-webkit-appearance:none;vertical-align:middle}input[type=range]::-webkit-slider-thumb:focus,input[type=range]::-webkit-slider-thumb:hover{background:#ff5463}.checkmark-input{cursor:pointer;grid-area:2/2;opacity:0;height:32px;width:32px}.checkmark-bg{grid-area:2/2;pointer-events:none}input[type=checkbox]:checked *{transition:all .1s linear}input[type=checkbox]:checked+.checkmark-bg rect,input[type=checkbox]:hover+.checkmark-bg rect{fill:var(--siteOrange)}input[type=checkbox]:checked+.checkmark-bg .checkmark{-webkit-animation:checkdraw .2s ease forwards;animation:checkdraw .2s ease forwards;stroke:var(--siteYellow)}.checkmark-bg .checkmark{stroke-dasharray:28px;stroke-dashoffset:28px}@-webkit-keyframes checkdraw{to{stroke-dashoffset:0}}@keyframes checkdraw{to{stroke-dashoffset:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sidebar.vue?vue&type=template&id=57bbd45c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"main-aside"},[_vm._ssrNode("<button class=\"btn btn-lucky\">I'm feeling lucky</button> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"side-box\"><h3>General</h3> <div class=\"side-box-option\"><label for=\"bg\">Background Color</label> <input type=\"color\" id=\"bg\" name=\"bg\""+(_vm._ssrAttr("value",(_vm.$state.colorValues.bgColor)))+"> <label for=\"animation\" class=\"checkmark-label\">Animation</label> <input type=\"checkbox\" id=\"animation\" name=\"animation\""+(_vm._ssrAttr("checked",_vm.$state.isChecked))+" class=\"checkmark-input\"> <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\" class=\"checkmark-bg\"><rect x=\"1\" y=\"1\" width=\"30\" height=\"30\" stroke=\"#202640\" fill=\"none\" stroke-width=\"1\" rx=\"3\" ry=\"3\"></rect><polyline points=\"8,17 14,23 25,8\" stroke=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" fill=\"none\" class=\"checkmark\"></polyline></svg></div></div> "),_c('SidebarFace'),_vm._ssrNode(" "),_c('SidebarMouth')],2),_vm._ssrNode(" "),_c('SidebarEyes')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=template&id=57bbd45c&

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
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  methods: {
    randomColors() {
      for (var i in this.$state.colorValues) {
        this.$state.colorValues[i] = this.randomHex();
      }

      ;

      for (var e in this.$state.numberValues) {
        this.$state.numberValues[e].value = this.randomNum(e);
      }
    },

    randomHex() {
      return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
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
  
  var style0 = __webpack_require__(27)
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
installComponents(component, {SidebarFace: __webpack_require__(23).default,SidebarMouth: __webpack_require__(24).default,SidebarEyes: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=sidebar.js.map