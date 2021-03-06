/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* make sure to set some focus styles for accessibility */\\n:focus {\\n  outline: 0;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput[type=search]::-webkit-search-cancel-button,\\ninput[type=search]::-webkit-search-decoration,\\ninput[type=search]::-webkit-search-results-button,\\ninput[type=search]::-webkit-search-results-decoration {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n}\\n\\ninput[type=search] {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  -webkit-box-sizing: content-box;\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box;\\n}\\n\\ntextarea {\\n  overflow: auto;\\n  vertical-align: top;\\n  resize: vertical;\\n}\\n\\n/**\\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\\n */\\naudio,\\ncanvas,\\nvideo {\\n  display: inline-block;\\n  *display: inline;\\n  *zoom: 1;\\n  max-width: 100%;\\n}\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0;\\n}\\n\\n/**\\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\\n * Known issue: no IE 6 support.\\n */\\n[hidden] {\\n  display: none;\\n}\\n\\n/**\\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\\n *    `em` units.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\nhtml {\\n  font-size: 100%;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */\\n  -ms-text-size-adjust: 100%;\\n  /* 2 */\\n}\\n\\n/**\\n * Address `outline` inconsistency between Chrome and other browsers.\\n */\\na:focus {\\n  outline: thin dotted;\\n}\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\na:active,\\na:hover {\\n  outline: 0;\\n}\\n\\n/**\\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\\n * 2. Improve image quality when scaled in IE 7.\\n */\\nimg {\\n  border: 0;\\n  /* 1 */\\n  -ms-interpolation-mode: bicubic;\\n  /* 2 */\\n}\\n\\n/**\\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\\n */\\nfigure {\\n  margin: 0;\\n}\\n\\n/**\\n * Correct margin displayed oddly in IE 6/7.\\n */\\nform {\\n  margin: 0;\\n}\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\nfieldset {\\n  border: 1px solid #c0c0c0;\\n  margin: 0 2px;\\n  padding: 0.35em 0.625em 0.75em;\\n}\\n\\n/**\\n * 1. Correct color not being inherited in IE 6/7/8/9.\\n * 2. Correct text not wrapping in Firefox 3.\\n * 3. Correct alignment displayed oddly in IE 6/7.\\n */\\nlegend {\\n  border: 0;\\n  /* 1 */\\n  padding: 0;\\n  white-space: normal;\\n  /* 2 */\\n  *margin-left: -7px;\\n  /* 3 */\\n}\\n\\n/**\\n * 1. Correct font size not being inherited in all browsers.\\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\\n *    and Chrome.\\n * 3. Improve appearance and consistency in all browsers.\\n */\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n  font-size: 100%;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */\\n  vertical-align: baseline;\\n  /* 3 */\\n  *vertical-align: middle;\\n  /* 3 */\\n  border: 0;\\n}\\n\\n/**\\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\nbutton,\\ninput {\\n  line-height: normal;\\n}\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\\n * Correct `select` style inheritance in Firefox 4+ and Opera.\\n */\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\\n *    Known issue: inner spacing remains in IE 6.\\n */\\nbutton,\\nhtml input[type=button],\\ninput[type=reset],\\ninput[type=submit] {\\n  -webkit-appearance: button;\\n  /* 2 */\\n  cursor: pointer;\\n  /* 3 */\\n  *overflow: visible;\\n  /* 4 */\\n}\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default;\\n}\\n\\n/**\\n * 1. Address box sizing set to content-box in IE 8/9.\\n * 2. Remove excess padding in IE 8/9.\\n * 3. Remove excess padding in IE 7.\\n *    Known issue: excess padding remains in IE 6.\\n */\\ninput[type=checkbox],\\ninput[type=radio] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */\\n  *height: 13px;\\n  /* 3 */\\n  *width: 13px;\\n  /* 3 */\\n}\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\\n *    (include `-moz` to future-proof).\\n */\\ninput[type=search] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  -moz-box-sizing: content-box;\\n  -webkit-box-sizing: content-box;\\n  /* 2 */\\n  box-sizing: content-box;\\n}\\n\\n/**\\n * Remove inner padding and search cancel button in Safari 5 and Chrome\\n * on OS X.\\n */\\ninput[type=search]::-webkit-search-cancel-button,\\ninput[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * Remove inner padding and border in Firefox 3+.\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0;\\n}\\n\\n/**\\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\\n * 2. Improve readability and alignment in all browsers.\\n */\\ntextarea {\\n  overflow: auto;\\n  /* 1 */\\n  vertical-align: top;\\n  /* 2 */\\n}\\n\\n/**\\n * Remove most spacing between table cells.\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml,\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n  color: #222;\\n}\\n\\n::-moz-selection {\\n  background: #b3d4fc;\\n  text-shadow: none;\\n}\\n\\n::selection {\\n  background: #b3d4fc;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  vertical-align: middle;\\n}\\n\\nfieldset {\\n  border: 0;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n.chromeframe {\\n  margin: 0.2em 0;\\n  background: #ccc;\\n  color: #000;\\n  padding: 0.2em 0;\\n}\\n\\n@font-face {\\n  font-family: \\\"Avenir Black\\\";\\n  src: url(\\\"/dist/fonts/AvenirLTStd-Black.eot\\\") format(\\\"embedded-opentype\\\"), url(\\\"/dist/fonts/AvenirLTStd-Black.ttf\\\") format(\\\"truetype\\\"), url(\\\"/dist/fonts/AvenirLTStd-Black.woff\\\") format(\\\"woff\\\"), url(\\\"/dist/fonts/AvenirLTStd-Black.woff2\\\") format(\\\"woff2\\\");\\n  font-weight: 800;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\\"Kreon bold\\\";\\n  src: url(\\\"/dist/fonts/Kreon-Bold.ttf\\\") format(\\\"truetype\\\"), url(\\\"/dist/fonts/kreon-bold-webfont.woff\\\") format(\\\"woff\\\"), url(\\\"/dist/fonts/kreon-bold-webfont.woff2\\\") format(\\\"woff2\\\");\\n  font-weight: 800;\\n  font-style: normal;\\n}\\nh6, h5, h4, h3, h2, h1 {\\n  font-family: \\\"Kreon bold\\\", cursive;\\n  font-weight: bold;\\n  line-height: 1;\\n}\\n\\nh1 {\\n  font-size: 3rem;\\n}\\n\\nh2 {\\n  font-size: 3rem;\\n}\\n\\nh3 {\\n  font-size: 2rem;\\n}\\n\\nh4 {\\n  font-size: 1.8;\\n}\\n\\nh5 {\\n  font-size: 1.6;\\n}\\n\\nh6 {\\n  font-size: 1.4rem;\\n}\\n\\np, span {\\n  font-family: georgia, sans-serif;\\n  font-size: 1.2rem;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  width: 99vw;\\n  background-color: #172130;\\n}\\n.wrapper #timetable {\\n  background-color: white;\\n  padding: 2.5rem;\\n  height: 40rem;\\n  width: 50rem;\\n  border-radius: 1rem;\\n  box-shadow: 0px 0px 50px 10px rgba(13, 31, 3, 0.2), inset 2px 2px 8px 10px #10051a;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.wrapper #timetable #time {\\n  opacity: 1;\\n}\\n.wrapper #timetable #heading {\\n  margin-bottom: 1rem;\\n  margin-top: 5rem;\\n  font-family: \\\"Kreon Bold\\\", sans-serif;\\n}\\n.wrapper #timetable #author {\\n  margin-bottom: 1rem;\\n  color: #4b4b4b;\\n}\\n.wrapper #timetable #content {\\n  line-height: 1.4;\\n}\\n\\n.headline {\\n  position: relative;\\n}\\n.headline__container img {\\n  position: absolute;\\n  width: 100%;\\n  height: calc(100% - 80px);\\n  object-fit: cover;\\n}\\n.headline__container .scrim {\\n  position: absolute;\\n  height: calc(100% - 160px);\\n  width: 920px;\\n  background-color: rgba(0, 0, 0, 0.3);\\n  padding: 40px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n}\\n.headline__container .scrim h1 {\\n  z-index: 3;\\n  position: relative;\\n  color: white;\\n  text-align: left;\\n}\\n\\n.subline {\\n  position: relative;\\n}\\n.subline img {\\n  position: absolute;\\n  height: calc(100% - 80px);\\n  width: 100%;\\n  object-fit: cover;\\n}\\n.subline .scrim {\\n  position: absolute;\\n  height: calc(100% - 80px);\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n.subline__container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n}\\n.subline__container h3 {\\n  z-index: 3;\\n  position: relative;\\n  color: white;\\n  line-height: 1.2;\\n  text-align: left;\\n}\\n\\n.page-grid {\\n  display: grid;\\n  max-width: 1750px;\\n  margin: 50px 0 50px 70px;\\n  grid-template-columns: 240px 400px 500px 500px;\\n  grid-template-rows: 500px 500px;\\n  grid-template-areas: \\\"commercial feed headline headline\\\" \\\"commercial feed sub-headline1 sub-headline2\\\";\\n}\\n.page-grid .commercial {\\n  grid-area: commercial;\\n  margin-right: 100px;\\n  object-fit: cover;\\n  width: 100%;\\n}\\n.page-grid .feed {\\n  grid-area: feed;\\n  padding: 30px 0px 30px;\\n  background-color: white;\\n  border-top: 1px solid lightgrey;\\n  border-bottom: 1px solid lightgrey;\\n  border-right: 1px solid lightgrey;\\n}\\n.page-grid .feed__container {\\n  background-color: whitesmoke;\\n  width: 320px;\\n  height: 860px;\\n  padding: 30px;\\n}\\n.page-grid .feed__list ul {\\n  list-style-type: none;\\n}\\n.page-grid .feed__item {\\n  background-color: white;\\n  padding: 20px;\\n  margin-bottom: 15px;\\n}\\n.page-grid .feed__item h6 {\\n  margin-bottom: 20px;\\n}\\n.page-grid .headline {\\n  grid-area: headline;\\n  padding: 40px 0 40px 40px;\\n  border-top: 1px solid lightgrey;\\n  border-bottom: 1px solid lightgrey;\\n}\\n.page-grid .headline__container {\\n  background-color: whitesmoke;\\n  width: 100%;\\n  height: 100%;\\n}\\n.page-grid .headline__heading {\\n  font-family: \\\"Taviraj\\\", serif;\\n  text-align: center;\\n  margin-bottom: 35px;\\n}\\n.page-grid .subline {\\n  padding: 40px;\\n  background-color: white;\\n  border-bottom: 1px solid lightgrey;\\n}\\n.page-grid .subline__container {\\n  background-color: whitesmoke;\\n  width: 380px;\\n  height: 360px;\\n  padding: 30px;\\n}\\n.page-grid .subline1 {\\n  grid-area: sub-headline1;\\n}\\n.page-grid .subline2 {\\n  grid-area: sub-headline2;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/javascript/class.js":
/*!*********************************!*\
  !*** ./src/javascript/class.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sounds; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sounds = function Sounds(animal, name) {\n  _classCallCheck(this, Sounds);\n\n  this.animal = animal;\n  this.name = name;\n};\n\n\n\n//# sourceURL=webpack:///./src/javascript/class.js?");

/***/ }),

/***/ "./src/javascript/export.js":
/*!**********************************!*\
  !*** ./src/javascript/export.js ***!
  \**********************************/
/*! exports provided: elephant, dog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elephant\", function() { return elephant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dog\", function() { return dog; });\nvar elephant = \"Johnny\";\nvar dog = \"Kutsu\";\n\n\n//# sourceURL=webpack:///./src/javascript/export.js?");

/***/ }),

/***/ "./src/javascript/import.js":
/*!**********************************!*\
  !*** ./src/javascript/import.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export */ \"./src/javascript/export.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ \"./src/javascript/class.js\");\n // console.log(elephant);\n// console.log(dog);\n\n\n // console.log(a);\n\nvar cat = new _class__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cat, \"Garfield\");\nconsole.log(cat.name);\nconsole.log(cat.animal);\n\n//# sourceURL=webpack:///./src/javascript/import.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testing */ \"./src/javascript/testing.js\");\n/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_testing__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import */ \"./src/javascript/import.js\");\n // import './time';\n// import './news-controls';\n\n\n // import './export';\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/testing.js":
/*!***********************************!*\
  !*** ./src/javascript/testing.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// var arr = [];\n// while(arr.length < 8){\n//     var r = Math.floor(Math.random() * 100) + 1;\n//     if(arr.indexOf(r) === -1) arr.push(r);\n//     // sellest ifist ei saa siin aru \n// }\n// console.log(arr);\n//  1 kuni 10, ilma +1-ta oleks 0-9\n// console.log(Math.floor(Math.random() * 10) + 1);\n// indexOf - saab kasutada nii stringis kui ka arrays\n// var states = ['off', 'on', 'muted', 'active'];\n// console.log(states.indexOf('on')); //1\n// console.log(states.indexOf('non-existent')); //-1\nvar obj = {\n  hobune: \"tori\",\n  treener: \"doris\",\n  varss: 2\n}; // console.log(obj[\"hobune\"]); //annab vasteks selle prop value\n// obj.hasOwnProperty(\"hobune\"); //true\n// for(var property in obj){\n//     console.log(property); //hobune treener varss\n// }\n// -----------------------------------\n// arrays kindla key ja value vaste indexi leidmine\n// function findWithAttr(array, attr, value) {\n//     for(var i = 0; i < array.length; i += 1) {\n//         if(array[i][attr] === value) {\n//             console.log(i);\n//             return i;\n//         }\n//     }\n//     console.log(i); //2... aga returnib -1..\n//     return -1;\n// }\n// var Data = [\n//     {id_list: 2, name: 'John', token: '123123'},\n//     {id_list: 1, name: 'Nick', token: '312312'}\n// ];\n// findWithAttr(Data, 'name', 'John'); // returns 0\n// console.log(findWithAttr(Data, 'id_list', '10')); //returns -1\n// MAKE OBJECTD TO AN ARRAY \n// var newArray = Object.keys(obj);\n// var values= Object.values(obj);\n// var both = Object.entries(obj); //array within array, iga key-value pair muutub arrayks [\"Hobune\", \"tori\"]\n// console.log(newArray);\n// console.log(values);\n// console.log(both);\n// KUIDAS SAADA KÄTTE OBJEKT KEYS\n// TULEMUSED STRINGINA:\n// for (var key in news) {\n//     console.log(key);\n// tulemused on stringidena\n// }\n// SAAD KÄTTE NII KEY KUI KA VALUE VÕI VALI KUMB TAHAD\n// for (let key in news) {\n//     console.log(`${key} -> ${news[key]}`);\n//     // console.log(`${news[key][0]}`);\n//     for (i=0; i < news[key].length ; i++) {\n//         console.log(news[key][i].Heading);\n//     }\n// }\n// JA NII SAINGI KÄTTE KÕIK PEALKIRJAD\n// TULEMUSED ARRAYNA\n// console.log('Object.keys method: ' + Object.keys(news)+ ' data type: ' + typeof Object.keys(news));\n// let keysMethod = Object.keys(news);\n// console.log(keysMethod);\n// NÄITAB ÄRA, ET VALUEKS ON ARRAY, MILLE SEES ON OBJEKTID\n// let valuesMethod = Object.values(news);\n// console.log(valuesMethod);\n// MAP FUNCTION\n\nvar allData = [];\n\nfunction pushData() {\n  news.Politics.map(function (e) {\n    allData.push(e);\n  });\n  news.Culture.map(function (e) {\n    allData.push(e);\n  });\n  news.Digi.map(function (e) {\n    allData.push(e);\n  });\n}\n\npushData(); // console.log(allData);\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.info = allData.map(function (item) {\n      return new News(item);\n    });\n  }\n\n  _createClass(App, [{\n    key: \"log\",\n    value: function log() {\n      console.log(this.info);\n    }\n  }]);\n\n  return App;\n}();\n\nvar News = /*#__PURE__*/function () {\n  function News(item) {\n    _classCallCheck(this, News);\n\n    this.heading = item.Heading;\n  }\n\n  _createClass(News, [{\n    key: \"showHeading\",\n    value: function showHeading() {\n      console.log(this.heading);\n    }\n  }]);\n\n  return News;\n}();\n\nvar app = new App(); // app.info[0].showHeading();\n\nconsole.log(app.info[1].heading);\n\n//# sourceURL=webpack:///./src/javascript/testing.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?url=false!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });