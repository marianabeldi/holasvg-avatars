exports.ids = [1];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b135c55e", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-avatar{background-color:var(--siteYellow);border:1px solid var(--borderColor);display:grid;grid-template-rows:1fr auto;flex:1;min-width:320px}#avatar{max-height:640px;-o-object-fit:cover;object-fit:cover;width:100%}.animationOn{filter:url(#scribble)}.btn-row{display:flex;flex-wrap:wrap;grid-gap:1rem;gap:1rem;margin:1rem}.btn-row .btn,.btn-row .btn-form{background-color:#ff5463;background-color:var(--siteOrange);border-radius:4px;flex-grow:1;margin:0}.btn-row .btn-form:hover,.btn-row .btn:hover{background-color:var(--textColor);cursor:pointer}.btn-row .btn-form .btn{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AvatarContainer.vue?vue&type=template&id=5d6592fd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main-avatar"},[_vm._ssrNode("<svg id=\"avatar\" viewBox=\"0 0 100 100\" width=\"640\" height=\"640\""+(_vm._ssrClass(null,{ animationOn: _vm.$state.isChecked }))+(_vm._ssrStyle(null,{ backgroundColor: _vm.$state.colorValues.bgColor }, null))+">","</svg>",[_vm._ssrNode("<style>.animationOn { filter: url(#scribble); </style> "),_vm._ssrNode("<filter id=\"scribble\">","</filter>",[_c('feTurbulence',{attrs:{"type":"fractalNoise","baseFrequency":"0.02","numOctaves":"2"}},[_c('animate',{attrs:{"attributeName":"seed","dur":"1s","repeatCount":"indefinite","values":"1;10"}})]),_vm._ssrNode(" "),_c('feDisplacementMap',{attrs:{"scale":"3","in":"SourceGraphic"}})],2),_vm._ssrNode(" <g id=\"face\""+(_vm._ssrAttr("fill",_vm.$state.colorValues.faceFill))+(_vm._ssrAttr("stroke",_vm.$state.colorValues.faceBorder))+"><circle"+(_vm._ssrAttr("cx",_vm.$state.numberValues.facePositionX.value))+(_vm._ssrAttr("cy",_vm.$state.numberValues.facePositionY.value))+(_vm._ssrAttr("r",_vm.$state.numberValues.faceSize.value))+"></circle></g> <g id=\"eyes\""+(_vm._ssrAttr("fill",_vm.$state.colorValues.eyeFill))+(_vm._ssrAttr("stroke",_vm.$state.colorValues.eyeBorder))+(_vm._ssrAttr("stroke-width",_vm.$state.numberValues.eyeBorderSize.value))+"><circle"+(_vm._ssrAttr("cx",_vm.$state.numberValues.eyePositionLX.value))+(_vm._ssrAttr("cy",_vm.$state.numberValues.eyePositionLY.value))+(_vm._ssrAttr("r",_vm.$state.numberValues.eyeSize.value))+"></circle> <circle"+(_vm._ssrAttr("cx",_vm.$state.numberValues.eyePositionRX.value))+(_vm._ssrAttr("cy",_vm.$state.numberValues.eyePositionRY.value))+(_vm._ssrAttr("r",_vm.$state.numberValues.eyeSize.value))+"></circle></g> <g id=\"mouth\""+(_vm._ssrAttr("fill",_vm.$state.colorValues.mouthFill))+(_vm._ssrAttr("stroke",_vm.$state.colorValues.faceBorder))+"><line x1=\"40\""+(_vm._ssrAttr("x2",_vm.$state.numberValues.mouthSize.value))+(_vm._ssrAttr("y1",_vm.$state.numberValues.mouthPositionY.value))+(_vm._ssrAttr("y2",_vm.$state.numberValues.mouthPositionY.value))+(_vm._ssrAttr("transform",("translate(" + (_vm.$state.numberValues.mouthPositionX.value) + " 0)")))+"></line></g>")],2),_vm._ssrNode(" <div class=\"btn-row\"><button type=\"button\" class=\"btn btn-copy\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.$state.copyText)+"\n    ")+"</button> <button type=\"button\" class=\"btn btn-download\">\n      Download\n    </button> <form action=\"https://codepen.io/pen/define\" method=\"POST\" target=\"_blank\" class=\"btn-form\"><input type=\"hidden\" name=\"data\""+(_vm._ssrAttr("value",_vm.$state.codepenvalue))+"> <button tabindex=\"0\" type=\"button\" class=\"btn btn-codepen\">\n        Create CodePen\n      </button></form></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AvatarContainer.vue?vue&type=template&id=5d6592fd&

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
/* harmony default export */ var AvatarContainervue_type_script_lang_js_ = ({
  methods: {
    clipboard() {
      var el = document.getElementById('avatar');
      var avatarCode = new XMLSerializer().serializeToString(el); // var precode = document.getElementById('avatar').innerHTML
      // var animationOn = this.$state.isChecked
      // var avatarCode = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 100 100"' + ' ' + 'class="' + animationOn + '"' + ' ' + 'style="background-color:' + this.$state.colorValues.bgColor +
      //   '">' +
      //   precode +
      //   "</svg>";

      this.$state.copyText = "Copied!";
      setTimeout(() => this.$state.copyText = "Copy", 1000);
      this.copyToClipboard(avatarCode);
    },

    copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.

        document.body.appendChild(textarea);
        textarea.select();

        try {
          return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    },

    loaderURL() {
      const DOMURL = self.URL || self.webkitURL || self;
      var svgString;
      svgString = new XMLSerializer().serializeToString(document.getElementById('avatar'));
      svgString = svgString.replaceAll('<viewBox="0 0 100 100" width="640" height="640">', 'viewBox="0 0 100 100"');
      const svg = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8"
      });
      return DOMURL.createObjectURL(svg);
    },

    downloadSvg() {
      const link = document.createElement("a");
      link.download = "my-avatar.svg";
      link.href = this.loaderURL();
      link.click();
    },

    holacodepen() {
      var pre = document.getElementById('avatar');
      var codepenhtml = new XMLSerializer().serializeToString(pre);
      var penArr = {
        title: "Hola SVG weird avatar",
        html: codepenhtml
      };
      this.$state.codepenvalue = JSON.stringify(penArr);
      this.$nextTick(() => {
        event.target.parentElement.submit();
      });
    }

  }
});
// CONCATENATED MODULE: ./components/AvatarContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AvatarContainervue_type_script_lang_js_ = (AvatarContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AvatarContainer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AvatarContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "104cd0f2"
  
)

/* harmony default export */ var AvatarContainer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=avatar-container.js.map