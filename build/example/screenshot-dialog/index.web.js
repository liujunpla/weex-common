(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-common/example/screenshot-dialog/index"] = factory();
	else
		root["npm/weex-common/example/screenshot-dialog/index"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Utils = {
  //<summary>获得字符串实际长度，中文2，英文1</summary>
  //<param name="str">要获得长度的字符串</param>
  GetLength: function GetLength(str) {
    var realLength = 0,
        len = str.length,
        charCode = -1;

    for (var i = len - 1; i >= 0; i--) {
      charCode = str.charCodeAt(i);

      if (charCode >= 0 && charCode <= 128) {
        realLength += 1;
      } else {
        realLength += 2;
      }
    }

    return realLength;
  }
};
var _default = Utils;
exports["default"] = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ScreenshotDialog", {
  enumerable: true,
  get: function get() {
    return _screenshotDialog["default"];
  }
});
Object.defineProperty(exports, "Utils", {
  enumerable: true,
  get: function get() {
    return _utils["default"];
  }
});

var _screenshotDialog = _interopRequireDefault(__webpack_require__(6));

var _utils = _interopRequireDefault(__webpack_require__(2));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)
__webpack_require__(11)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  "data-v-64b7ffa8",
  /* cssModules */
  null
)
Component.options.__file = "F:\\WorkSpace\\test\\ng\\packages\\screenshot-dialog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64b7ffa8", Component.options)
  } else {
    hotAPI.reload("data-v-64b7ffa8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("11335aee", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-64b7ffa8!./common.css", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-64b7ffa8!./common.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n* {\r\n    margin: 0;\r\n    padding: 0;\n}\r\n\r\n\r\n\r\n/* 边框 */\n.border-bottom {\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: #d7d7d7;\n}\n.border-top {\r\n    border-top-width: 1px;\r\n    border-top-color: #d7d7d7;\n}\n.border-right {\r\n    border-right-width: 1px;\r\n    border-right-color: #d7d7d7;\n}\n.border-left {\r\n    border-left-width: 1px;\r\n    border-left-color: #d7d7d7;\n}\n.border-blue {\r\n    border-width: 1px;\r\n    border-color: #27B5E8;\n}\n.border-white {\r\n    border-width: 1px;\r\n    border-color: #fff;\n}\n.border-grey {\r\n    border-width: 1px;\r\n    border-color: #ddd;\n}\r\n\r\n\r\n\r\n/* 布局划分 */\n.flex-1 {\r\n    flex: 1;\n}\n.flex-row {\r\n    flex-direction: row;\r\n    align-items: center;\n}\n.flex-row-center {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.flex-col-center {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.flex-row-top {\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: center;\n}\n.flex-row-top-top {\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\n}\n.flex-row-between {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.flex-row-end {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\n}\n.flex-row-wrap {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\n}\n.match-parent {\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\n}\n.match-parent-bottom {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\n}\n.match-parent-top {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\n}\n.align-center {\r\n    justify-content: center;\r\n    align-items: center;\n}\n.line {\r\n    border-width: 1px;\r\n    border-color: #f2f2f2;\n}\n.divider-line {\r\n    width: 750px;\r\n    height: 20px;\r\n    background-color: #f8f8f8;\n}\n.bold {\r\n    font-weight: bold;\n}\n.line-to-left {\r\n    flex: 1;\r\n    height: 3px;\r\n    background-image: linear-gradient(to left, #E5E8EC, #FFFFFF);\n}\n.line-to-right {\r\n    flex: 1;\r\n    height: 3px;\r\n    background-image: linear-gradient(to right, #E5E8EC, #FFFFFF);\n}", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0f069ece", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-64b7ffa8&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-64b7ffa8&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.root[data-v-64b7ffa8] {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 0px;\r\n  right: 0px;\r\n  bottom: 0px;\n}\n.icon-list[data-v-64b7ffa8] {\r\n  width: 750px;\r\n  padding-top: 38px;\r\n  padding-bottom: 32px;\r\n  background-color: white;\r\n  padding-left: 10px;\n}\n.share-item[data-v-64b7ffa8] {\r\n  width: 146;\n}\n.share-type-icon[data-v-64b7ffa8] {\r\n  width: 80;\r\n  height: 80;\r\n  margin-bottom: 22;\n}\n.share-title[data-v-64b7ffa8] {\r\n  color: #939393;\r\n  font-size: 26;\r\n  letter-spacing: 1.49;\n}\n.content[data-v-64b7ffa8] {\r\n  background-color: white;\r\n  padding-top: 32px;\r\n  padding-left: 38px;\r\n  padding-right: 38px;\r\n  padding-bottom: 36px;\n}\n.screen-image[data-v-64b7ffa8] {\r\n  width: 120px;\r\n  height: 120px;\r\n  margin-right: 38px;\n}\n.title[data-v-64b7ffa8] {\r\n  font-size: 32px;\r\n  color: #03a9f4;\r\n  letter-spacing: 1.83px;\r\n  margin-top: 6px;\r\n  margin-bottom: 14px;\n}\n.notice[data-v-64b7ffa8] {\r\n  font-size: 28px;\r\n  color: #5d5d5d;\r\n  letter-spacing: 1.6px;\n}\n.button-container[data-v-64b7ffa8] {\r\n  border-top-width: 1px;\r\n  border-top-color: #d8d8d8;\r\n  padding-top: 32px;\r\n  margin-top: 32px;\n}\n.button[data-v-64b7ffa8] {\r\n  width: 328px;\r\n  height: 60px;\r\n  background-color: #03a9f4;\r\n  border-radius: 4px;\n}\n.button-text[data-v-64b7ffa8] {\r\n  font-size: 28px;\r\n  color: #ffffff;\r\n  letter-spacing: 1.6px;\n}\r\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_index__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const resUrl = "https://web.dxwt.cn/10000/images/";
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      //   resUrl: "https://web.dxwt.cn/10000/images/",
      iconList: [{
        iconUrl: resUrl + "share_wechat.png",
        iconText: "微信好友",
        iconType: 0
      }, {
        iconUrl: resUrl + "share_moment.png",
        iconText: "朋友圈",
        iconType: 1
      }, {
        iconUrl: resUrl + "share_qq.png",
        iconText: "QQ",
        iconType: 3
      }, {
        iconUrl: resUrl + "share_qzone.png",
        iconText: "QQ空间",
        iconType: 4
      }, {
        iconUrl: resUrl + "share_sms.png",
        iconText: "短信",
        iconType: 5
      }],
      isShowShare: true,
      appVersion: "7.0.2"
    };
  },

  props: {
    screenshotImage: {
      default: ""
    }
  },
  created: function () {
    const str = "10000社区，你好！";
    const len = __WEBPACK_IMPORTED_MODULE_0__utils_index___default.a.GetLength(str);
    console.log(`"${str}"真实长度 = ${len}`);
  },
  methods: {
    onFeedbackClick: function () {},
    onShareClick: function () {},
    onShareIconClick: function (shareType) {
      this.onClose();
    },
    onClose: function () {
      this.$emit("close", {});
    },
    onContentClick: function () {
      return;
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "root",
    on: {
      "click": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "match-parent-bottom",
    on: {
      "click": _vm.onContentClick
    }
  }, [(_vm.isShowShare) ? _c('div', {
    staticClass: "icon-list flex-row"
  }, _vm._l((_vm.iconList), function(icon) {
    return _c('div', {
      staticClass: "share-item align-center",
      on: {
        "click": function($event) {
          _vm.onShareIconClick(icon.iconType)
        }
      }
    }, [_c('image', {
      staticClass: "share-type-icon",
      attrs: {
        "src": icon.iconUrl
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "share-title"
    }, [_vm._v(_vm._s(icon.iconText))])])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "flex-row"
  }, [_c('image', {
    staticClass: "screen-image",
    attrs: {
      "src": _vm.screenshotImage
    }
  }), _vm._v(" "), _c('div', [_c('text', {
    staticClass: "title"
  }, [_vm._v("截屏成功")]), _vm._v(" "), _c('text', {
    staticClass: "notice"
  }, [_vm._v("是否联系客服反馈问题？")])])]), _vm._v(" "), _c('div', {
    staticClass: "flex-row-between button-container"
  }, [_c('div', {
    staticClass: "button align-center",
    on: {
      "click": _vm.onFeedbackClick
    }
  }, [_c('text', {
    staticClass: "button-text"
  }, [_vm._v("联系客服")])]), _vm._v(" "), _c('div', {
    staticClass: "button align-center",
    on: {
      "click": _vm.onShareClick
    }
  }, [_c('text', {
    staticClass: "button-text"
  }, [_vm._v("分享页面")])])])])]), _vm._v(" "), _c('WebView', {
    attrs: {
      "url": "https://web.dxwt.cn/10000/views/common/creenshotShare.html"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-64b7ffa8", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(__webpack_require__(16));

_index["default"].el = '#root';

var _default = new Vue(_index["default"]);

exports["default"] = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-7bc14ee5",
  /* cssModules */
  null
)
Component.options.__file = "F:\\WorkSpace\\test\\ng\\example\\screenshot-dialog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bc14ee5", Component.options)
  } else {
    hotAPI.reload("data-v-7bc14ee5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("4f7356ac", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7bc14ee5&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7bc14ee5&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.wxc-demo[data-v-7bc14ee5] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: #ffffff;\n}\n.button-list[data-v-7bc14ee5] {\r\n  padding-left: 24px;\n}\n.button-text[data-v-7bc14ee5] {\r\n  margin-top: 40px;\r\n  margin-left: 8px;\r\n  margin-bottom: 16px;\n}\n.scroller[data-v-7bc14ee5] {\r\n  flex: 1;\n}\n.demo[data-v-7bc14ee5] {\r\n  align-items: center;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\n}\n.input[data-v-7bc14ee5] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.size[data-v-7bc14ee5] {\r\n  flex-direction: row;\r\n  justify-content: space-around;\n}\n.button-size-text[data-v-7bc14ee5] {\r\n  margin-left: 24px;\r\n  margin-bottom: 24px;\r\n  margin-top: 40px;\n}\r\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = __webpack_require__(5);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var modal = weex.requireModule("modal");
var _default = {
  components: {
    ScreenshotDialog: _index.ScreenshotDialog
  },
  data: function data() {
    return {
      type: "red",
      text: "按钮文字",
      width: "702px",
      height: "88px",
      disabled: false,
      backgroundColor: "#FF5000",
      borderColor: "#FF5000",
      borderRadius: "12px",
      fontSize: "36px",
      color: "#FFFFFF",
      btnLoginStyle: {
        width: "620px",
        height: "94px",
        // fontSize: '100px',//不起作用（bug）
        borderRadius: "94px",
        backgroundColor: "#008D92" // 3B444D

      }
    };
  },
  computed: {},
  created: function created() {},
  methods: {}
};
exports["default"] = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wxc-demo"
  }, [_c('screenshot-dialog', {
    staticClass: "input"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7bc14ee5", module.exports)
  }
}

/***/ })
/******/ ]);
});