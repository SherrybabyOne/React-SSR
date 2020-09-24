/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/app/index.js","libs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/index.js":
/*!*********************************!*\
  !*** ./src/client/app/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/index */ \"./src/client/router/index.js\");\n/* harmony import */ var _share_match_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/match-route */ \"./src/share/match-route.js\");\n/* harmony import */ var _router_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router/route-config */ \"./src/client/router/route-config.js\");\n//浏览器端页面结构渲染入口\n\n\n\n\n\n //初始数据\n\nvar initialData = JSON.parse(document.getElementById('ssrTextInitData').value); //查找路由\n\nvar route = Object(_share_match_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(document.location.pathname, _router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); //设置组件初始化数据 [关键点]\n\nroute.initialData = initialData; //渲染index\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  routeList: _router_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n})), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/client/app/index.js?");

/***/ }),

/***/ "./src/client/app/layout.js":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.scss */ \"./src/client/app/layout.scss\");\n/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Index);\n\n    return _super.call(this, props);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"layout-box\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"NavLink\"], {\n        to: \"/index\",\n        style: {\n          marginLeft: \"10px\"\n        }\n      }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"NavLink\"], {\n        style: {\n          marginLeft: \"10px\"\n        },\n        onClick: this.click,\n        to: \"/list\"\n      }, \"\\u5217\\u8868\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"NavLink\"], {\n        to: \"/about\",\n        style: {\n          marginLeft: \"10px\"\n        }\n      }, \"\\u5173\\u4E8E\"), this.props.children);\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //带入路由信息\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_7__[\"withRouter\"])(Index));\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

/***/ }),

/***/ "./src/client/app/layout.scss":
/*!************************************!*\
  !*** ./src/client/app/layout.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/app/layout.scss?");

/***/ }),

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ \"./src/client/pages/index/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n //组件\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Index);\n\n    _this = _super.call(this, props);\n    var initData = props.initialData || {};\n    _this.state = {\n      fetchData: initData.fetchData,\n      page: initData.page\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      if (!this.state.fetchData) {\n        Index.getInitialProps().then(function (res) {\n          var _res$fetchData = res.fetchData,\n              fetchData = _res$fetchData === void 0 ? {} : _res$fetchData,\n              _res$page = res.page,\n              page = _res$page === void 0 ? {} : _res$page;\n\n          _this2.setState({\n            fetchData: fetchData,\n            page: page\n          });\n        });\n      }\n    }\n  }, {\n    key: \"handlerClick\",\n    value: function handlerClick() {\n      alert('一起来玩 react ssr 呀。');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _ref = this.state.page || {},\n          _ref$tdk = _ref.tdk,\n          tdk = _ref$tdk === void 0 ? {} : _ref$tdk;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"page\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"title\", null, tdk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: tdk.description\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"meta\", {\n        name: \"keywords\",\n        content: tdk.keywords\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"page-index-box\"\n      }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h1\", {\n        onClick: this.handlerClick\n      }, \"click here!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h2\", null, \"\\u542C\\u8BF4\\uFF1F\\uFF1F\\uFF1F\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log('fetch data index');\n                return _context.abrupt(\"return\", {\n                  page: {\n                    tdk: {\n                      title: '首页 - react ssr',\n                      keywords: 'React SSR 列表',\n                      description: 'React-SSR 首页相关描述'\n                    }\n                  }\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

/***/ }),

/***/ "./src/client/pages/index/index.scss":
/*!*******************************************!*\
  !*** ./src/client/pages/index/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/pages/index/index.scss?");

/***/ }),

/***/ "./src/client/pages/list/data.js":
/*!***************************************!*\
  !*** ./src/client/pages/list/data.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar data = [{\n  \"title\": \"深入浅出TypeScript：从基础知识到类型编程\",\n  \"desc\": \"Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"SVG 动画开发实战手册\",\n  \"desc\": \"从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"预售JavaScript 设计模式核⼼原理与应⽤实践\",\n  \"desc\": \"通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/client/pages/list/data.js?");

/***/ }),

/***/ "./src/client/pages/list/index.js":
/*!****************************************!*\
  !*** ./src/client/pages/list/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data */ \"./src/client/pages/list/data.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n //组件\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Index);\n\n    _this = _super.call(this, props);\n    var initData = props.initialData || {};\n    var fetchData = initData.fetchData,\n        page = initData.page;\n    _this.state = {\n      fetchData: fetchData,\n      page: page\n    };\n    return _this;\n  } //静态方法  数据预取方法\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Index, [{\n    key: \"handlerClick\",\n    value: function () {\n      var _handlerClick = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                alert('一起来玩 react ssr 呀。');\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function handlerClick() {\n        return _handlerClick.apply(this, arguments);\n      }\n\n      return handlerClick;\n    }()\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      if (!this.state.fetchData) {\n        Index.getInitialProps().then(function (res) {\n          var _res$fetchData = res.fetchData,\n              fetchData = _res$fetchData === void 0 ? {} : _res$fetchData,\n              _res$page = res.page,\n              page = _res$page === void 0 ? {} : _res$page;\n\n          _this2.setState({\n            fetchData: fetchData,\n            page: page\n          });\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      //渲染逻辑\n      var _ref = this.state.fetchData || {},\n          code = _ref.code,\n          data = _ref.data;\n\n      var _ref2 = this.state.page || {},\n          _ref2$tdk = _ref2.tdk,\n          tdk = _ref2$tdk === void 0 ? {} : _ref2$tdk;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"title\", null, tdk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: tdk.description\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"meta\", {\n        name: \"keywords\",\n        content: tdk.keywords\n      })), data && data.map(function (item, index) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n          key: index\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h3\", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"p\", null, item.desc));\n      }), !data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var fetchData, res;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                // 模拟数据请求方法\n                fetchData = function fetchData() {\n                  return new Promise(function (resolve) {\n                    setTimeout(function () {\n                      resolve({\n                        code: 0,\n                        data: _data__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                      });\n                    }, 100);\n                  });\n                };\n\n                _context2.next = 3;\n                return fetchData();\n\n              case 3:\n                res = _context2.sent;\n                return _context2.abrupt(\"return\", {\n                  fetchData: res,\n                  page: {\n                    tdk: {\n                      title: '列表页 - react ssr',\n                      keywords: 'React SSR 列表',\n                      description: 'React-SSR 列表相关描述'\n                    }\n                  }\n                });\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/client/pages/list/index.js?");

/***/ }),

/***/ "./src/client/router/index.js":
/*!************************************!*\
  !*** ./src/client/router/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n //服务端也会用到所以通过参数的方式将配置传递进来\n\nfunction App(_ref) {\n  var routeList = _ref.routeList;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_app_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, // 判断是否有初始数据\n  routeList.map(function (item) {\n    return item.initialData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n      key: item.path,\n      exact: item.exact,\n      path: item.path,\n      render: function render(props) {\n        props.initialData = item.initialData;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(item.component, props);\n      }\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      key: item.path\n    }, item));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/router/index.js?");

/***/ }),

/***/ "./src/client/router/route-config.js":
/*!*******************************************!*\
  !*** ./src/client/router/route-config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index/index */ \"./src/client/pages/index/index.js\");\n/* harmony import */ var _pages_list_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/list/index */ \"./src/client/pages/list/index.js\");\n//路由配置文件\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/index',\n  component: _pages_index_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true //是否精确匹配\n\n}, {\n  path: '/list',\n  component: _pages_list_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/route-config.js?");

/***/ }),

/***/ "./src/share/match-route.js":
/*!**********************************!*\
  !*** ./src/share/match-route.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (path, routeList) {\n  var route;\n\n  var _iterator = _createForOfIteratorHelper(routeList),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n\n      if (Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])(path, item)) {\n        route = item;\n        break;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return route;\n});\n\n//# sourceURL=webpack:///./src/share/match-route.js?");

/***/ })

/******/ });