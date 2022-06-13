exports.ids = [6];
exports.modules = {

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("74bb51ef", content, true, context)
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFace_vue_vue_type_style_index_0_id_8f94aeaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFace_vue_vue_type_style_index_0_id_8f94aeaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFace_vue_vue_type_style_index_0_id_8f94aeaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFace_vue_vue_type_style_index_0_id_8f94aeaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFace_vue_vue_type_style_index_0_id_8f94aeaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-aside[data-v-8f94aeaa]{background-color:var(--siteYellow);border:1px solid;flex:1;text-align:left}.side-box[data-v-8f94aeaa]{border:1px solid;background-color:hsla(0,0%,100%,.15);margin:1rem;padding:1rem}.side-box h3[data-v-8f94aeaa]{margin-top:0}input[type=color][data-v-8f94aeaa]{aspect-ratio:1;background:transparent;border:none;height:1.8rem;padding:0;width:1.8rem}input[type=color][data-v-8f94aeaa]::-webkit-color-swatch-wrapper{padding:0}input[type=color][data-v-8f94aeaa]::-webkit-color-swatch{border:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarFace.vue?vue&type=template&id=8f94aeaa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-box"},[_vm._ssrNode("<h3 data-v-8f94aeaa>Face</h3> <div class=\"side-box-option\" data-v-8f94aeaa><label for=\"faceFill\" data-v-8f94aeaa>Fill</label> <input type=\"color\" id=\"faceFill\" name=\"faceFill\""+(_vm._ssrAttr("value",(_vm.$state.valueFaceFill)))+" data-v-8f94aeaa></div> <div class=\"side-box-option\" data-v-8f94aeaa><label for=\"faceBorder\" data-v-8f94aeaa>Border</label> <input type=\"color\" id=\"faceBorder\" name=\"faceBorder\""+(_vm._ssrAttr("value",(_vm.$state.valueFaceBorder)))+" data-v-8f94aeaa></div> <div class=\"side-box-option\" data-v-8f94aeaa><label for=\"faceSize\" data-v-8f94aeaa>Size</label> <input type=\"range\" id=\"faceSize\" name=\"faceSize\""+(_vm._ssrAttr("value",(_vm.$state.valueFaceSize)))+" data-v-8f94aeaa></div> <div class=\"side-box-option\" data-v-8f94aeaa><label for=\"facePositionX\" data-v-8f94aeaa>Position X</label> <input type=\"range\" id=\"facePositionX\" name=\"facePositionX\""+(_vm._ssrAttr("value",(_vm.$state.valueFacePositionX)))+" data-v-8f94aeaa></div> <div class=\"side-box-option\" data-v-8f94aeaa><label for=\"facePositionX\" data-v-8f94aeaa>Position Y</label> <input type=\"range\" id=\"facePositionY\" name=\"facePositionY\""+(_vm._ssrAttr("value",(_vm.$state.valueFacePositionY)))+" data-v-8f94aeaa></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SidebarFace.vue?vue&type=template&id=8f94aeaa&scoped=true&

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
  methods: {
    changeFaceFill() {
      this.$state.avatarFaceFill = this.$state.valueFaceFill;
    },

    changeFaceBorder() {
      this.$state.avatarFaceBorder = this.$state.valueFaceBorder;
    },

    changeFaceSize() {
      this.$state.avatarFaceSize = this.$state.valueFaceSize;
    },

    changeFacePositionX() {
      this.$state.avatarFacePositionX = this.$state.valueFacePositionX;
    },

    changeFacePositionY() {
      this.$state.avatarFacePositionY = this.$state.valueFacePositionY;
    }

  }
});
// CONCATENATED MODULE: ./components/SidebarFace.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarFacevue_type_script_lang_js_ = (SidebarFacevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SidebarFace.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarFacevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8f94aeaa",
  "214c0990"
  
)

/* harmony default export */ var SidebarFace = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sidebar-face.js.map