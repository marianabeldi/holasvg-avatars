exports.ids = [9,1,2,4,5,6,7];
exports.modules = Array(20).concat([
/* 20 */
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
/* 21 */
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
  add("b135c55e", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("33164fa7", content, true, context)
};

/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=65f94930&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<p>\n    Created by\n    <a href=\"https://www.holasvg.com/\" target=\"_blank\" rel=\"noopener\">Hola svg</a> 👋<br> <small>Holasvg-avatars is free and <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/marianabeldi/holasvg-avatars\">open-source</a>, licensed under <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/marianabeldi/holasvg-avatars/blob/main/LICENSE\">MIT</a>.</small></p> <div class=\"social\"><a href=\"https://www.buymeacoffee.com/marianabeldi\" target=\"_blank\"><svg viewBox=\"-400 -100 1400 1400\" fill=\"#6ebfb5\"><title id=\"Cafesito\">Buy me a coffee</title><path d=\"M791.109 297.518l-.878-.516-2.03-.619a4.833 4.833 0 002.908 1.135zM803.896 388.891l-.98.275.98-.275zM791.484 297.377a1.773 1.773 0 01-.366-.087 1.42 1.42 0 000 .244.738.738 0 00.366-.157z\" fill=\"#0D0C22\"></path><path d=\"M791.113 297.529h.131v-.082l-.131.082zM803.111 388.726l1.48-.843.551-.31.499-.533a8.447 8.447 0 00-2.53 1.686zM793.669 299.515l-1.446-1.377-.98-.533a4.077 4.077 0 002.426 1.91zM430.019 1186.18a7.55 7.55 0 00-2.943 2.27l.912-.58c.62-.57 1.497-1.24 2.031-1.69zM641.187 1144.63c0-1.3-.636-1.06-.482 3.58 0-.37.155-.75.224-1.11.086-.83.155-1.64.258-2.47zM619.284 1186.18a7.546 7.546 0 00-2.942 2.27l.912-.58c.619-.57 1.497-1.24 2.03-1.69zM281.304 1196.06a6.299 6.299 0 00-3.097-1.45c.929.45 1.858.9 2.477 1.24l.62.21zM247.841 1164.01a9.895 9.895 0 00-1.222-3.85c.474 1.23.87 2.5 1.187 3.78l.035.07z\"></path><path d=\"M472.623 590.836c-45.941 19.667-98.077 41.966-165.647 41.966a313.577 313.577 0 01-83.623-11.528l46.733 479.806a80.166 80.166 0 0025.593 52.38 80.18 80.18 0 0054.313 21.19s66.262 3.44 88.373 3.44c23.796 0 95.151-3.44 95.151-3.44 20.12 0 39.503-7.57 54.303-21.2a80.149 80.149 0 0025.587-52.37l50.053-530.204c-22.368-7.639-44.943-12.715-70.391-12.715-44.014-.017-79.477 15.142-120.445 32.675z\" class=\"liquid\"></path><path d=\"M78.689 386.132l.79.74.517.31a7.95 7.95 0 00-1.307-1.05z\"></path><path d=\"M879.567 341.849l-7.037-35.497c-6.315-31.849-20.648-61.943-53.34-73.454-10.479-3.683-22.369-5.265-30.404-12.888-8.035-7.622-10.41-19.46-12.268-30.438-3.442-20.149-6.676-40.315-10.204-60.429-3.045-17.293-5.454-36.719-13.386-52.583-10.324-21.302-31.746-33.76-53.048-42.001a305.493 305.493 0 00-33.363-10.324C613.297 10.195 557.342 5.033 502.591 2.09a1376.266 1376.266 0 00-197.169 3.27c-48.797 4.439-100.193 9.807-146.564 26.687-16.948 6.177-34.413 13.593-47.3 26.687-15.813 16.088-20.975 40.969-9.43 61.031 8.208 14.247 22.111 24.313 36.857 30.972a298.948 298.948 0 0059.844 19.478c57.297 12.664 116.642 17.636 175.178 19.753a1333.99 1333.99 0 00194.433-6.35 1106.995 1106.995 0 0047.817-6.314c18.738-2.874 30.765-27.376 25.242-44.445-6.608-20.406-24.365-28.321-44.444-25.241-2.96.464-5.902.894-8.862 1.324l-2.133.31c-6.803.861-13.605 1.663-20.407 2.409a1083.055 1083.055 0 01-42.259 3.717c-31.626 2.202-63.337 3.217-95.031 3.269-31.144 0-62.305-.878-93.38-2.925a1187.382 1187.382 0 01-42.431-3.545 1019.94 1019.94 0 01-19.219-2.168l-6.092-.774-1.324-.189-6.315-.912c-12.905-1.945-25.81-4.181-38.577-6.883a5.8 5.8 0 010-11.322h.241c11.064-2.357 22.213-4.37 33.397-6.125 3.729-.585 7.468-1.159 11.219-1.72h.103c7.003-.465 14.041-1.722 21.009-2.547A1336.183 1336.183 0 01469.538 73.1c29.577.86 59.138 2.599 88.578 5.593a979.44 979.44 0 0118.927 2.116c2.409.293 4.835.636 7.262.93l4.886.705a678.058 678.058 0 0142.517 7.725c20.889 4.543 47.714 6.022 57.005 28.907 2.96 7.261 4.302 15.331 5.936 22.953l2.082 9.722c.055.174.095.353.121.533 4.921 22.942 9.848 45.884 14.78 68.826a12.608 12.608 0 01-2.006 9.871 12.612 12.612 0 01-8.593 5.254h-.138l-3.011.413-2.976.395c-9.43 1.228-18.87 2.375-28.322 3.442a1829.308 1829.308 0 01-55.938 5.506 1957.204 1957.204 0 01-111.55 6.074c-18.984.504-37.963.74-56.936.705a1975.736 1975.736 0 01-225.989-13.146c-8.122-.963-16.243-1.996-24.365-3.045 6.298.809-4.577-.62-6.779-.929a1447.245 1447.245 0 01-15.486-2.254c-17.327-2.599-34.55-5.799-51.843-8.604-20.906-3.441-40.9-1.72-59.81 8.604a86.994 86.994 0 00-36.012 37.338c-8.156 16.862-10.582 35.221-14.23 53.34C4 342.193-1.678 361.688.473 380.288 5.1 420.431 33.165 453.054 73.53 460.35c37.975 6.882 76.156 12.457 114.44 17.206a2114.804 2114.804 0 00489.988 2.822 25.814 25.814 0 0121.003 7.339 25.806 25.806 0 017.491 20.948l-3.82 37.132-23.091 225.077a178840.62 178840.62 0 01-31.126 302.866c-2.203 21.84-2.512 44.36-6.659 65.94-6.539 33.93-29.509 54.77-63.027 62.39a439.172 439.172 0 01-93.569 10.94c-34.912.19-69.806-1.36-104.718-1.17-37.27.21-82.918-3.23-111.687-30.97-25.277-24.36-28.77-62.51-32.211-95.5-4.588-43.67-9.136-87.331-13.645-130.989l-25.293-242.766-16.363-157.077c-.276-2.598-.551-5.162-.809-7.778-1.962-18.737-15.228-37.079-36.134-36.133-17.894.791-38.232 16.002-36.133 36.133l12.13 116.454 25.087 240.89a378681.11 378681.11 0 0121.388 205.306c1.377 13.11 2.667 26.26 4.112 39.37 7.864 71.65 62.58 110.26 130.339 121.13 39.575 6.37 80.113 7.68 120.273 8.33 51.482.83 103.48 2.81 154.118-6.52 75.038-13.77 131.337-63.87 139.372-141.59 2.295-22.44 4.589-44.88 6.883-67.33 7.628-74.241 15.245-148.487 22.85-222.739l24.881-242.61 11.408-111.188a25.812 25.812 0 0120.785-22.696c21.456-4.181 41.967-11.322 57.229-27.651 24.295-25.998 29.13-59.895 20.544-94.067zM72.43 365.835c.327-.155-.275 2.649-.533 3.957-.052-1.979.051-3.734.533-3.957zm2.082 16.105c.172-.121.688.568 1.222 1.394-.809-.758-1.325-1.325-1.24-1.394h.018zm2.048 2.701c.74 1.256 1.135 2.048 0 0zm4.112 3.338h.103c0 .121.19.241.258.362a2.666 2.666 0 00-.378-.362h.017zm720.124-4.99c-7.708 7.33-19.323 10.737-30.8 12.441-128.704 19.099-259.283 28.769-389.399 24.502-93.121-3.183-185.261-13.525-277.453-26.55-9.034-1.273-18.824-2.925-25.036-9.584-11.7-12.561-5.953-37.854-2.908-53.03 2.788-13.903 8.122-32.434 24.657-34.413 25.81-3.028 55.783 7.863 81.318 11.735a1539.798 1539.798 0 0092.57 11.27c132.18 12.045 266.58 10.169 398.175-7.45a1661.346 1661.346 0 0071.699-11.236c21.216-3.803 44.737-10.943 57.556 11.029 8.792 14.97 9.962 34.998 8.603 51.912a28.942 28.942 0 01-8.999 19.374h.017z\"></path></svg></a> <a href=\"https://twitter.com/marianabeldi\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"30 30 410 410\"><title id=\"Twitter\">Mariana Beldi on Twitter</title><path d=\"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z\"></path></svg></a> <a href=\"https://dribbble.com/marianabeldi\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"0 0 512 512\"><title id=\"Dribbble\">Mariana Beldi on Dribbble</title><path d=\"M256 68.4C152.4 68.4 68.4 152.4 68.4 256c0 103.6 84 187.6 187.6 187.6S443.6 359.6 443.6 256C443.6 152.4 359.6 68.4 256 68.4zM410.6 247.3c-40.3-6.6-77.3-7-111-1.1 -3.8-8.8-7.8-17.6-12-26.3 36.1-15.6 65.1-36.9 86.7-63.8C395.4 181 408.6 212.6 410.6 247.3zM350.5 133.4c-18.8 24.3-44.8 43.5-78 57.5 -15.9-29.1-34-57.5-54.5-85 12.2-3.1 24.9-4.9 38-4.9C291.6 101 324.3 113.2 350.5 133.4zM186.1 117.9c20.8 27.2 39.3 55.3 55.3 84.1 -38 11.2-83.4 16.9-135.8 17.3C116.4 175 146.3 138.1 186.1 117.9zM101 256c0-1.3 0.2-2.7 0.2-4 60.2-0.1 112.1-7 155.6-20.7 3.6 7.4 7.1 14.9 10.5 22.4 -52.8 16.5-96.4 50.4-130.3 101.3C114.5 328.2 101 293.6 101 256zM160.9 378.1c30.8-48.3 70.1-79.7 118.8-94.2 14.5 37.8 25.2 76.8 31.9 116.6 -17.3 6.7-36 10.5-55.6 10.5C220.1 411 187.2 398.6 160.9 378.1zM342 384.8c-6.9-36.8-16.9-72.8-30-107.8 29.3-4.1 61.6-3.1 96.9 3.1C402.1 323.6 377.2 361.3 342 384.8z\"></path></svg></a> <a href=\"https://codepen.io/marianab/\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"30 30 456 446\"><title id=\"Codepen\">Mariana Beldi on Codepen</title><path d=\"M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z\"></path></svg></a> <a href=\"https://www.linkedin.com/in/marianabeldi/\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"30 30 456 446\"><title id=\"Linkedin\">Linkedin Profile</title><path d=\"M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z\"></path></svg></a> <a href=\"https://marianabeldi.medium.com/\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"2 0 46 46\"><title id=\"Medium\">Mariana Beldi on Medium</title><path d=\"M5 40V5h35v35H5zm8.56-12.627c0 .555-.027.687-.318 1.03l-2.457 2.985v.396h6.974v-.396l-2.456-2.985c-.291-.343-.344-.502-.344-1.03V18.42l6.127 13.364h.714l5.256-13.364v10.644c0 .29 0 .342-.185.528l-1.848 1.796v.396h9.19v-.396l-1.822-1.796c-.184-.186-.21-.238-.21-.528V15.937c0-.291.026-.344.21-.528l1.823-1.797v-.396h-6.471l-4.622 11.542-5.203-11.542h-6.79v.396l2.14 2.64c.239.292.291.37.291.768v10.353z\"></path></svg></a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=65f94930&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "718fc5e8"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(26).default})


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-aside{background-color:var(--bgColor);border:1px solid var(--borderColor);display:flex;flex-direction:column;flex:1;grid-gap:1rem;gap:1rem;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;padding:1rem;text-align:left}@media(min-width:40em){.main-aside{display:grid}}.btn.btn-lucky{grid-column:1/3;margin:0;order:2;width:100%}@media(min-width:56em){.btn.btn-lucky{order:0}}.side-box{border:1px solid var(--borderColor);margin:1rem 0;padding:1rem}.side-box,.side-box>h3{background-color:var(--siteYellow)}.side-box>h3{margin-top:-1.7rem;padding:0 .4rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.side-box-option{align-items:center;display:grid;grid-template-columns:1fr 1fr;margin-bottom:1.5rem}.side-box-option:last-child{margin-bottom:.5rem}.side-box-option label{margin-right:.5rem;text-align:right}.side-box-option label:after{content:\":\"}input[type=color]{aspect-ratio:1;background:transparent;border:none;border:1px solid var(--textColor);border-radius:4px;height:32px;padding:0;width:32px}input[type=color]::-webkit-color-swatch-wrapper{padding:0}input[type=color]::-webkit-color-swatch{border-color:currentColor;border-radius:3px}input[type=range]{border-radius:10px;height:12px;-webkit-appearance:none;outline:none;background:none}input[type=range]::-webkit-slider-runnable-track{background-color:var(--siteBlue);height:12px}input[type=range]::-webkit-slider-runnable-track:focus,input[type=range]::-webkit-slider-runnable-track:hover{background:#465479}input[type=range]::-webkit-slider-thumb{background:var(--siteOrange);border-radius:2px;cursor:ew-resize;margin-top:-8px;width:12px;height:28px;-webkit-appearance:none;vertical-align:middle}input[type=range]::-webkit-slider-thumb:focus,input[type=range]::-webkit-slider-thumb:hover{background:#ff5463;background:#84c9d2}.checkmark-input{cursor:pointer;grid-area:2/2;opacity:0;height:32px;width:32px}.checkmark-bg{grid-area:2/2;pointer-events:none}input[type=checkbox]:checked *{transition:all .1s linear}input[type=checkbox]:checked+.checkmark-bg rect,input[type=checkbox]:hover+.checkmark-bg rect{fill:var(--siteOrange)}input[type=checkbox]:checked+.checkmark-bg .checkmark{-webkit-animation:checkdraw .2s ease forwards;animation:checkdraw .2s ease forwards;stroke:var(--siteYellow)}.checkmark-bg .checkmark{stroke-dasharray:28px;stroke-dashoffset:28px}@-webkit-keyframes checkdraw{to{stroke-dashoffset:0}}@keyframes checkdraw{to{stroke-dashoffset:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-avatar{background-color:var(--siteYellow);border:1px solid var(--borderColor);display:grid;grid-template-rows:1fr auto;flex:1;min-width:320px}#avatar{max-height:640px;-o-object-fit:cover;object-fit:cover;width:100%}.animationOn{filter:url(#scribble)}.btn-row{display:flex;flex-wrap:wrap;grid-gap:1rem;gap:1rem;margin:1rem}.btn-row .btn,.btn-row .btn-form{background-color:#ff5463;background-color:var(--siteOrange);border-radius:4px;flex-grow:1;margin:0}.btn-row .btn-form:hover,.btn-row .btn:hover{background-color:var(--textColor);cursor:pointer}.btn-row .btn-form .btn{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "footer{color:var(--textColor);padding:.4em .8em}@media(min-width:40em){footer{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between}}footer p{text-align:left;margin:0}footer p a{color:var(--siteOrange);font-weight:900;text-decoration:none}footer p a:hover{color:var(--siteRed)}@media(min-width:40em){footer .social{display:flex}}footer .social svg{fill:var(--siteBlue);margin:.6em 1em 0 0;transition:fill .2s;width:2rem}footer .social svg:hover{fill:var(--siteOrange)}footer .social svg:hover .liquid{fill:#fd0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("28f1127f", content, true, context)
};

/***/ }),
/* 34 */,
/* 35 */
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


/***/ }),
/* 36 */
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
  null,
  "104cd0f2"
  
)

/* harmony default export */ var AvatarContainer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--bgLighter:#fffaf4;--borderColor:#3b4257;--bgColor:#202540;--siteRed:#293045;--siteOrange:#ffb000;--siteOrange:#ff9a8a;--siteYellow:#ffb000;--siteYellow:#161225;--siteLightblue:#84c9d2;--siteBlue:#8899c9;--siteGreen:#9ee6cf;--textColor:#ffeae1;--borderColor:#222831;--stripedColor:hsla(0,0%,100%,0.7)}html{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before{box-sizing:border-box}button,input,select,textarea{font:inherit}.top{background-color:#8899c9;background-color:var(--siteBlue);background-color:#ff9a8a;background-color:var(--siteOrange);border-bottom:1px solid #222831;border-bottom:1px solid var(--borderColor);height:.5rem;width:100%}body{background-color:#161225;background-color:var(--siteYellow);background-image:linear-gradient(0deg,transparent 24%,#293045 25%,#293045 26%,transparent 27%,transparent 74%,#293045 75%,#293045 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,#293045 25%,#293045 26%,transparent 27%,transparent 74%,#293045 75%,#293045 76%,transparent 77%,transparent);background-image:linear-gradient(0deg,transparent 24%,var(--siteRed) 25%,var(--siteRed) 26%,transparent 27%,transparent 74%,var(--siteRed) 75%,var(--siteRed) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,var(--siteRed) 25%,var(--siteRed) 26%,transparent 27%,transparent 74%,var(--siteRed) 75%,var(--siteRed) 76%,transparent 77%,transparent);background-size:40px 40px;color:#ffeae1;color:var(--textColor);height:100%;margin:0;text-align:center}.main-wrapper{display:grid;grid-template-rows:auto auto 1fr auto;min-height:100vh}h1{font-weight:900;letter-spacing:.05em;margin:3rem 0 0;text-transform:uppercase}a{transition:all .2s}.btn{background-color:#ff9a8a;background-color:var(--siteOrange);border:0;border-radius:4px;color:#161225;color:var(--siteYellow);font-family:inherit;font-size:1.2rem;font-weight:600;margin:1rem;padding:.8rem 1.6rem;transition:all .3s ease}.btn:hover{cursor:pointer;background-color:#ffeae1;background-color:var(--textColor)}.highlight{color:#ff9a8a;color:var(--siteOrange)}.home-link{display:block;font-size:1rem}.home-link a{color:#8899c9;color:var(--siteBlue);transition:color .2s;text-decoration:none}.home-link a:hover{color:#84c9d2;color:var(--siteLightblue)}.main-container{display:flex;flex-wrap:wrap;grid-gap:1rem;gap:1rem;margin:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=037313ad&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrapper"},[_vm._ssrNode("<b class=\"top\"></b> <h1><span class=\"home-link\"><a href=\"https://holasvg.com/\">hola svg</a></span>Free Open SVG <span class=\"highlight\">Avatars</span></h1> "),_vm._ssrNode("<main class=\"main-container\">","</main>",[_c('Sidebar'),_vm._ssrNode(" "),_c('AvatarContainer')],2),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=037313ad&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',

  head() {
    return {
      title: 'Hola SVG Avatars',
      meta: [{
        name: 'title',
        content: "Hola SVG Avatars"
      }, {
        name: 'description',
        content: "Free Open SVG Avatars"
      }, {
        property: 'og:type',
        content: "website"
      }, {
        property: 'og:url',
        content: "https://avatars.holasvg.com"
      }, {
        property: 'og:title',
        content: "Hola SVG Avatars"
      }, {
        property: 'og:description',
        content: "Free Open SVG Avatars"
      }, {
        property: 'og:image',
        content: "/holasvg-icons.gif"
      }, {
        property: 'twitter:card',
        content: "summary_large_image"
      }, {
        property: 'twitter:url',
        content: "https://avatars.holasvg.com"
      }, {
        property: 'twitter:title',
        content: "Hola SVG Icons"
      }, {
        property: 'twitter:description',
        content: "Free Open SVG Avatars"
      }, {
        property: 'twitter:image',
        content: "/holasvg-icons.gif"
      }]
    };
  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2045b902"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Sidebar: __webpack_require__(35).default,AvatarContainer: __webpack_require__(36).default,Footer: __webpack_require__(26).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map