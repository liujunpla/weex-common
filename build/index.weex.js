// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-common/index"] = factory();
	else
		root["npm/weex-common/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

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

var _screenshotDialog = _interopRequireDefault(__webpack_require__(3));

var _utils = _interopRequireDefault(__webpack_require__(0));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\WorkSpace\\test\\ng\\packages\\screenshot-dialog\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5b966800"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "border-bottom": {
    "borderBottomWidth": 1,
    "borderBottomColor": "#d7d7d7"
  },
  "border-top": {
    "borderTopWidth": 1,
    "borderTopColor": "#d7d7d7"
  },
  "border-right": {
    "borderRightWidth": 1,
    "borderRightColor": "#d7d7d7"
  },
  "border-left": {
    "borderLeftWidth": 1,
    "borderLeftColor": "#d7d7d7"
  },
  "border-blue": {
    "borderWidth": 1,
    "borderColor": "#27B5E8"
  },
  "border-white": {
    "borderWidth": 1,
    "borderColor": "#ffffff"
  },
  "border-grey": {
    "borderWidth": 1,
    "borderColor": "#dddddd"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-row": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "flex-row-center": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "flex-col-center": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "flex-row-top": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "center"
  },
  "flex-row-top-top": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "flex-start"
  },
  "flex-row-between": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "flex-row-end": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end"
  },
  "flex-row-wrap": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "match-parent": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "match-parent-bottom": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "match-parent-top": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0
  },
  "align-center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "line": {
    "borderWidth": 1,
    "borderColor": "#f2f2f2"
  },
  "divider-line": {
    "width": 750,
    "height": 20,
    "backgroundColor": "#f8f8f8"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "line-to-left": {
    "flex": 1,
    "height": 3,
    "backgroundImage": "linear-gradient(to left, #E5E8EC, #FFFFFF)"
  },
  "line-to-right": {
    "flex": 1,
    "height": 3,
    "backgroundImage": "linear-gradient(to right, #E5E8EC, #FFFFFF)"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "root": {
    "backgroundColor": "rgba(0,0,0,0.3)",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "icon-list": {
    "width": 750,
    "paddingTop": 38,
    "paddingBottom": 32,
    "backgroundColor": "#FFFFFF",
    "paddingLeft": 10
  },
  "share-item": {
    "width": 146
  },
  "share-type-icon": {
    "width": 80,
    "height": 80,
    "marginBottom": 22
  },
  "share-title": {
    "color": "#939393",
    "fontSize": 26,
    "letterSpacing": 1.49
  },
  "content": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": 32,
    "paddingLeft": 38,
    "paddingRight": 38,
    "paddingBottom": 36
  },
  "screen-image": {
    "width": 120,
    "height": 120,
    "marginRight": 38
  },
  "title": {
    "fontSize": 32,
    "color": "#03a9f4",
    "letterSpacing": 1.83,
    "marginTop": 6,
    "marginBottom": 14
  },
  "notice": {
    "fontSize": 28,
    "color": "#5d5d5d",
    "letterSpacing": 1.6
  },
  "button-container": {
    "borderTopWidth": 1,
    "borderTopColor": "#d8d8d8",
    "paddingTop": 32,
    "marginTop": 32
  },
  "button": {
    "width": 328,
    "height": 60,
    "backgroundColor": "#03a9f4",
    "borderRadius": 4
  },
  "button-text": {
    "fontSize": 28,
    "color": "#ffffff",
    "letterSpacing": 1.6
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);
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
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["root"],
    on: {
      "click": _vm.onClose
    }
  }, [_c('div', {
    staticClass: ["match-parent-bottom"],
    on: {
      "click": _vm.onContentClick
    }
  }, [(_vm.isShowShare) ? _c('div', {
    staticClass: ["icon-list", "flex-row"]
  }, _vm._l((_vm.iconList), function(icon) {
    return _c('div', {
      staticClass: ["share-item", "align-center"],
      on: {
        "click": function($event) {
          _vm.onShareIconClick(icon.iconType)
        }
      }
    }, [_c('image', {
      staticClass: ["share-type-icon"],
      attrs: {
        "src": icon.iconUrl
      }
    }), _c('text', {
      staticClass: ["share-title"]
    }, [_vm._v(_vm._s(icon.iconText))])])
  })) : _vm._e(), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["flex-row"]
  }, [_c('image', {
    staticClass: ["screen-image"],
    attrs: {
      "src": _vm.screenshotImage
    }
  }), _vm._m(0)]), _c('div', {
    staticClass: ["flex-row-between", "button-container"]
  }, [_c('div', {
    staticClass: ["button", "align-center"],
    on: {
      "click": _vm.onFeedbackClick
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("联系客服")])]), _c('div', {
    staticClass: ["button", "align-center"],
    on: {
      "click": _vm.onShareClick
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("分享页面")])])])])]), _c('WebView', {
    attrs: {
      "url": "https://web.dxwt.cn/10000/views/common/creenshotShare.html"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("截屏成功")]), _c('text', {
    staticClass: ["notice"]
  }, [_vm._v("是否联系客服反馈问题？")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
});