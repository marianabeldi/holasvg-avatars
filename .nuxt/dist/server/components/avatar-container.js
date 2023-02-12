exports.ids = [1];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("75dfd35a", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_7668d814_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_7668d814_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_7668d814_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_7668d814_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_id_7668d814_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-avatar[data-v-7668d814]{background-color:var(--siteYellow);border:1px solid var(--borderColor);display:grid;grid-template-rows:1fr auto;flex:1;min-width:300px}#avatar[data-v-7668d814]{max-height:640px;-o-object-fit:cover;object-fit:cover;width:100%}.animationOn[data-v-7668d814]{filter:url(#scribble)}.btn-row[data-v-7668d814]{display:flex;flex-wrap:wrap;grid-gap:1rem;gap:1rem;margin:1rem}.btn-row .btn[data-v-7668d814]{background-color:#ff5463;background-color:var(--siteOrange);flex-grow:1;margin:0}.btn-row .btn[data-v-7668d814]:hover{background-color:var(--textColor);cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AvatarContainer.vue?vue&type=template&id=7668d814&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main-avatar"},[_vm._ssrNode("<svg id=\"avatar\" viewBox=\"0 0 100 100\" fill"+(_vm._ssrClass(null,{ 'animationOn' : _vm.$state.isChecked }))+(_vm._ssrStyle(null,{backgroundColor: _vm.$state.colorValues.bgColor}, null))+" data-v-7668d814>","</svg>",[_vm._ssrNode("<filter id=\"scribble\" data-v-7668d814>","</filter>",[_c('feTurbulence',{attrs:{"type":"fractalNoise","baseFrequency":"0.02","numOctaves":"2"}},[_c('animate',{attrs:{"attributeName":"seed","dur":"1s","repeatCount":"indefinite","values":"1;10"}})]),_vm._ssrNode(" "),_c('feDisplacementMap',{attrs:{"scale":"3","in":"SourceGraphic"}})],2),_vm._ssrNode(" <g id=\"face\""+(_vm._ssrAttr("fill",_vm.$state.colorValues.faceFill))+(_vm._ssrAttr("stroke",_vm.$state.colorValues.faceBorder))+" data-v-7668d814><circle"+(_vm._ssrAttr("cx",_vm.$state.numberValues.facePositionX.value))+(_vm._ssrAttr("cy",_vm.$state.numberValues.facePositionY.value))+(_vm._ssrAttr("r",_vm.$state.numberValues.faceSize.value))+" data-v-7668d814></circle></g> <g id=\"eyes\""+(_vm._ssrAttr("fill",_vm.$state.colorValues.eyeFill))+(_vm._ssrAttr("stroke",_vm.$state.colorValues.eyeBorder))+(_vm._ssrAttr("stroke-width",_vm.$state.numberValues.eyeBorderSize.value))+" data-v-7668d814><circle"+(_vm._ssrAttr("cx",_vm.$state.numberValues.eyePositionLX.value))+(_vm._ssrAttr("cy",_vm.$state.numberValues.eyePositionLY.value))+(_vm._ssrAttr("r",_vm.$state.numberValues.eyeSize.value))+" data-v-7668d814></circle> <circle"+(_vm._ssrAttr("cx",_vm.$state.numberValues.eyePositionRX.value))+(_vm._ssrAttr("cy",_vm.$state.numberValues.eyePositionRY.value))+(_vm._ssrAttr("r",_vm.$state.numberValues.eyeSize.value))+" data-v-7668d814></circle></g> <g id=\"mouth\""+(_vm._ssrAttr("fill",_vm.$state.colorValues.mouthFill))+(_vm._ssrAttr("stroke",_vm.$state.colorValues.faceBorder))+" data-v-7668d814><line x1=\"40\""+(_vm._ssrAttr("x2",_vm.$state.numberValues.mouthSize.value))+(_vm._ssrAttr("y1",_vm.$state.numberValues.mouthPositionY.value))+(_vm._ssrAttr("y2",_vm.$state.numberValues.mouthPositionY.value))+(_vm._ssrAttr("transform",("translate(" + (_vm.$state.numberValues.mouthPositionX.value) + " 0)")))+" data-v-7668d814></line></g>")],2),_vm._ssrNode(" <div class=\"btn-row\" data-v-7668d814><button class=\"btn\" data-v-7668d814>CSS</button> <button class=\"btn\" data-v-7668d814>SVG</button> <button class=\"btn\" data-v-7668d814>Codepen</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AvatarContainer.vue?vue&type=template&id=7668d814&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AvatarContainer.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var AvatarContainervue_type_script_lang_js_ = ({
  methods: {}
});
// CONCATENATED MODULE: ./components/AvatarContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AvatarContainervue_type_script_lang_js_ = (AvatarContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AvatarContainer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AvatarContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7668d814",
  "104cd0f2"
  
)

/* harmony default export */ var AvatarContainer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=avatar-container.js.map