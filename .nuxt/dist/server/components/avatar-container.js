exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5a4f1afe", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_ceaba3f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_ceaba3f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_ceaba3f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_ceaba3f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_ceaba3f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-avatar[data-v-ceaba3f0]{border:1px solid;flex:1}#avatar[data-v-ceaba3f0]{filter:url(#scribble)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AvatarContainer.vue?vue&type=template&id=ceaba3f0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main-avatar"},[_vm._ssrNode("<svg id=\"avatar\" viewBox=\"0 0 100 100\" width=\"600\" height=\"600\" fill"+(_vm._ssrStyle(null,{backgroundColor: _vm.$state.avatarBgColor}, null))+" data-v-ceaba3f0>","</svg>",[_vm._ssrNode("<filter id=\"scribble\" data-v-ceaba3f0>","</filter>",[_c('feTurbulence',{attrs:{"type":"fractalNoise","baseFrequency":"0.02","numOctaves":"2"}},[_c('animate',{attrs:{"attributeName":"seed","dur":"1s","repeatCount":"indefinite","values":"1;10"}})]),_vm._ssrNode(" "),_c('feDisplacementMap',{attrs:{"scale":"3","in":"SourceGraphic"}})],2),_vm._ssrNode(" <g id=\"face\""+(_vm._ssrAttr("fill",_vm.$state.avatarFaceFill))+(_vm._ssrAttr("stroke",_vm.$state.avatarFaceBorder))+" data-v-ceaba3f0><circle"+(_vm._ssrAttr("cx",_vm.$state.avatarFacePositionX))+(_vm._ssrAttr("cy",_vm.$state.avatarFacePositionY))+(_vm._ssrAttr("r",_vm.$state.avatarFaceSize))+" data-v-ceaba3f0></circle></g> <g id=\"eyes\""+(_vm._ssrAttr("fill",_vm.$state.avatarEyeFill))+(_vm._ssrAttr("stroke",_vm.$state.avatarEyeBorder))+(_vm._ssrAttr("stroke-width",_vm.$state.avatarEyeBorderSize))+" data-v-ceaba3f0><circle"+(_vm._ssrAttr("cx",_vm.$state.avatarEyePositionLX))+(_vm._ssrAttr("cy",_vm.$state.avatarEyePositionLY))+(_vm._ssrAttr("r",_vm.$state.avatarEyeSize))+" data-v-ceaba3f0></circle> <circle"+(_vm._ssrAttr("cx",_vm.$state.avatarEyePositionRX))+(_vm._ssrAttr("cy",_vm.$state.avatarEyePositionRY))+(_vm._ssrAttr("r",_vm.$state.avatarEyeSize))+" data-v-ceaba3f0></circle></g> <g id=\"mouth\""+(_vm._ssrAttr("fill",_vm.$state.avatarMouthFill))+(_vm._ssrAttr("stroke",_vm.$state.avatarFaceBorder))+" data-v-ceaba3f0><line x1=\"40\" x2=\"60\" y1=\"60\" y2=\"60\" data-v-ceaba3f0></line></g>")],2),_vm._ssrNode(" <div data-v-ceaba3f0><button data-v-ceaba3f0>CSS</button> <button data-v-ceaba3f0>SVG</button> <button data-v-ceaba3f0>Codepen</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AvatarContainer.vue?vue&type=template&id=ceaba3f0&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AvatarContainer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ceaba3f0",
  "104cd0f2"
  
)

/* harmony default export */ var AvatarContainer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=avatar-container.js.map