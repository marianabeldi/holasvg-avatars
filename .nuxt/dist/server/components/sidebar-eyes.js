exports.ids = [5];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("fcdb8a70", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarEyes_vue_vue_type_style_index_0_id_286dba1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarEyes_vue_vue_type_style_index_0_id_286dba1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarEyes_vue_vue_type_style_index_0_id_286dba1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarEyes_vue_vue_type_style_index_0_id_286dba1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarEyes_vue_vue_type_style_index_0_id_286dba1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-aside[data-v-286dba1d]{background-color:var(--siteYellow);border:1px solid;flex:1;text-align:left}.side-box[data-v-286dba1d]{border:1px solid;background-color:hsla(0,0%,100%,.15);margin:1rem;padding:1rem}.side-box h3[data-v-286dba1d]{margin-top:0}input[type=color][data-v-286dba1d]{aspect-ratio:1;background:transparent;border:none;height:1.8rem;padding:0;width:1.8rem}input[type=color][data-v-286dba1d]::-webkit-color-swatch-wrapper{padding:0}input[type=color][data-v-286dba1d]::-webkit-color-swatch{border:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SidebarEyes.vue?vue&type=template&id=286dba1d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-box"},[_vm._ssrNode("<input type=\"checkbox\" data-v-286dba1d> <h3 data-v-286dba1d>Eyes</h3> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyeFill\" data-v-286dba1d>Fill</label> <input type=\"color\" id=\"eyeFill\" name=\"eyeFill\""+(_vm._ssrAttr("value",(_vm.$state.valueEyeFill)))+" data-v-286dba1d></div> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyeBorder\" data-v-286dba1d>Border</label> <input type=\"color\" id=\"eyeBorder\" name=\"eyeBorder\""+(_vm._ssrAttr("value",(_vm.$state.valueEyeBorder)))+" data-v-286dba1d></div> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyeBorderSize\" data-v-286dba1d>Border Width</label> <input type=\"range\" id=\"eyeBorderSize\" name=\"eyeBorderSize\""+(_vm._ssrAttr("value",(_vm.$state.valueEyeBorderSize)))+" data-v-286dba1d></div> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyeSize\" data-v-286dba1d>Size</label> <input type=\"range\" id=\"eyeSize\" name=\"eyeSize\""+(_vm._ssrAttr("value",(_vm.$state.valueEyeSize)))+" data-v-286dba1d></div> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyePositionLX\" data-v-286dba1d>Position Left X</label> <input type=\"range\" id=\"eyePositionLX\" name=\"eyePositionLX\""+(_vm._ssrAttr("value",(_vm.$state.valueEyePositionLX)))+" data-v-286dba1d></div> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyePositionLY\" data-v-286dba1d>Position Left Y</label> <input type=\"range\" id=\"eyePositionLY\" name=\"eyePositionLY\""+(_vm._ssrAttr("value",(_vm.$state.valueEyePositionLY)))+" data-v-286dba1d></div> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyePositionRX\" data-v-286dba1d>Position Right X</label> <input type=\"range\" id=\"eyePositionRX\" name=\"eyePositionRX\""+(_vm._ssrAttr("value",(_vm.$state.valueEyePositionRX)))+" data-v-286dba1d></div> <div class=\"side-box-option\" data-v-286dba1d><label for=\"eyePositionRY\" data-v-286dba1d>Position Right Y</label> <input type=\"range\" id=\"eyePositionRY\" name=\"eyePositionRY\""+(_vm._ssrAttr("value",(_vm.$state.valueEyePositionRY)))+" data-v-286dba1d></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SidebarEyes.vue?vue&type=template&id=286dba1d&scoped=true&

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
//
/* harmony default export */ var SidebarEyesvue_type_script_lang_js_ = ({
  methods: {
    changeEyeFill() {
      this.$state.avatarEyeFill = this.$state.valueEyeFill;
    },

    changeEyeBorder() {
      this.$state.avatarEyeBorder = this.$state.valueEyeBorder;
    },

    changeEyeBorderSize() {
      this.$state.avatarEyeBorderSize = this.$state.valueEyeBorderSize;
    },

    changeEyeSize() {
      this.$state.avatarEyeSize = this.$state.valueEyeSize;
    },

    changeEyePositionLX() {
      this.$state.avatarEyePositionLX = this.$state.valueEyePositionLX;
    },

    changeEyePositionLY() {
      this.$state.avatarEyePositionLY = this.$state.valueEyePositionLY;
    },

    changeEyePositionRX() {
      this.$state.avatarEyePositionRX = this.$state.valueEyePositionRX;
    },

    changeEyePositionRY() {
      this.$state.avatarEyePositionRY = this.$state.valueEyePositionRY;
    }

  }
});
// CONCATENATED MODULE: ./components/SidebarEyes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarEyesvue_type_script_lang_js_ = (SidebarEyesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SidebarEyes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarEyesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "286dba1d",
  "fd855286"
  
)

/* harmony default export */ var SidebarEyes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sidebar-eyes.js.map