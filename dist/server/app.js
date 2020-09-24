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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/layout.js":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"layout-box\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/index\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      style: {\n        marginLeft: \"10px\"\n      },\n      onClick: this.click,\n      to: \"/list\"\n    }, \"\\u5217\\u8868\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/about\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u5173\\u4E8E\"), this.props.children);\n  }\n\n} //带入路由信息\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Index));\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

/***/ }),

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//组件\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    const initData = props.initialData || {};\n    this.state = {\n      fetchData: initData.fetchData,\n      page: initData.page\n    };\n  }\n\n  static async getInitialProps() {\n    console.log('fetch data index');\n    return {\n      page: {\n        tdk: {\n          title: '首页 - react ssr',\n          keywords: 'React SSR 列表',\n          description: 'React-SSR 首页相关描述'\n        }\n      }\n    };\n  }\n\n  componentDidMount() {\n    if (!this.state.fetchData) {\n      Index.getInitialProps().then(res => {\n        const {\n          fetchData = {},\n          page = {}\n        } = res;\n        this.setState({\n          fetchData,\n          page\n        });\n      });\n    }\n  }\n\n  handlerClick() {\n    alert('一起来玩 react ssr 呀。');\n  }\n\n  render() {\n    const {\n      tdk = {}\n    } = this.state.page || {};\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"page\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, tdk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: tdk.description\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"keywords\",\n      content: tdk.keywords\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"page-index-box\"\n    }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      onClick: this.handlerClick\n    }, \"click here!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u542C\\u8BF4\\uFF1F\\uFF1F\\uFF1F\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

/***/ }),

/***/ "./src/client/pages/list/data.js":
/*!***************************************!*\
  !*** ./src/client/pages/list/data.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [{\n  \"title\": \"深入浅出TypeScript：从基础知识到类型编程\",\n  \"desc\": \"Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"SVG 动画开发实战手册\",\n  \"desc\": \"从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"预售JavaScript 设计模式核⼼原理与应⽤实践\",\n  \"desc\": \"通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/client/pages/list/data.js?");

/***/ }),

/***/ "./src/client/pages/list/index.js":
/*!****************************************!*\
  !*** ./src/client/pages/list/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/client/pages/list/data.js\");\n\n\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    const initData = props.initialData || {};\n    const {\n      fetchData,\n      page\n    } = initData;\n    this.state = {\n      fetchData,\n      page\n    };\n  } //静态方法  数据预取方法\n\n\n  static async getInitialProps() {\n    // 模拟数据请求方法\n    const fetchData = () => {\n      return new Promise(resolve => {\n        setTimeout(() => {\n          resolve({\n            code: 0,\n            data: _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n          });\n        }, 100);\n      });\n    };\n\n    const res = await fetchData();\n    return {\n      fetchData: res,\n      page: {\n        tdk: {\n          title: '列表页 - react ssr',\n          keywords: 'React SSR 列表',\n          description: 'React-SSR 列表相关描述'\n        }\n      }\n    };\n  }\n\n  async handlerClick() {\n    alert('一起来玩 react ssr 呀。');\n  }\n\n  componentDidMount() {\n    if (!this.state.fetchData) {\n      Index.getInitialProps().then(res => {\n        const {\n          fetchData = {},\n          page = {}\n        } = res;\n        this.setState({\n          fetchData,\n          page\n        });\n      });\n    }\n  }\n\n  render() {\n    //渲染逻辑\n    const {\n      code,\n      data\n    } = this.state.fetchData || {};\n    const {\n      tdk = {}\n    } = this.state.page || {};\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, tdk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: tdk.description\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"keywords\",\n      content: tdk.keywords\n    })), data && data.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.desc));\n    }), !data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/list/index.js?");

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

/***/ "./src/server/app/index.js":
/*!*********************************!*\
  !*** ./src/server/app/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/react-ssr */ \"./src/server/middlewares/react-ssr.js\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2 */ \"koa2\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/pro-config.js */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config_js__WEBPACK_IMPORTED_MODULE_3__);\n//web 服务启动入口对象\n\n\n\n\nconst port = _share_pro_config_js__WEBPACK_IMPORTED_MODULE_3___default.a.nodeServerPort || Object({\"NODE_ENV\":\"undefined\"}).PORT;\nconst app = new koa2__WEBPACK_IMPORTED_MODULE_1___default.a(); //设置可访问的静态资源\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist/static')); //ssr 中间件\n\napp.use(_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //启动服务\n\napp.listen(port);\nconsole.log('server is start .', `http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/app/index.js?");

/***/ }),

/***/ "./src/server/common/assets.js":
/*!*************************************!*\
  !*** ./src/server/common/assets.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//生产环境中 静态资源的处理\nmodule.exports = function () {\n  let devHost = '//localhost:9001';\n  let jsFiles = ['libs.js', 'main.js'];\n  let cssFiles = ['main.css'];\n  const assets = {\n    js: [],\n    css: []\n  };\n\n  if (true) {\n    //开发环境\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/libs.js\"></script>`);\n    assets.js.push(`<script type=\"text/javascript\"  src=\"${devHost}/main.js\"></script>`);\n    assets.css.push(`<link rel=\"stylesheet\" type=\"text/css\" href=\"${devHost}/main.css\" />`);\n  } else {}\n\n  return assets;\n};\n\n//# sourceURL=webpack:///./src/server/common/assets.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_router_route_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/router/route-config */ \"./src/client/router/route-config.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_app_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var _share_match_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/match-route */ \"./src/share/match-route.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  //获得请求的 path\n  const path = ctx.request.path; //查找到的目标路由对象\n\n  const targetRoute = Object(_share_match_route__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(path, _client_router_route_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]); //数据预取 -> fetchResult\n\n  const fetchDataFn = targetRoute.component.getInitialProps;\n  let fetchResult = {};\n\n  if (fetchDataFn) {\n    fetchResult = await fetchDataFn();\n    targetRoute.initialData = fetchResult;\n  } //渲染组件为 html 字符串\n\n\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_app_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(targetRoute.component, {\n    initialData: fetchResult\n  }))));\n  const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_4__[\"Helmet\"].renderStatic(); //导入资源处理库\n\n  const getAssets = __webpack_require__(/*! ../common/assets */ \"./src/server/common/assets.js\"); // 得到静态资源\n\n\n  const assetsMap = getAssets();\n  ctx.body = `<!DOCTYPE html>\n\t\t<html lang=\"en\">\n\t\t<head>\n\t\t\t<meta charset=\"UTF-8\">\n\t\t\t${helmet.title.toString()}\n\t\t\t${helmet.meta.toString()}\n\t\t\t${assetsMap.css.join('')}\n\t\t</head>\n\t\t<body>\n\t\t\t\t<div id=\"root\">\n\t\t\t\t\t${html}\n\t\t\t\t</div>\n\t\t\t\t<textarea id=\"ssrTextInitData\" style=\"display:none;\">\n\t\t\t\t${JSON.stringify(fetchResult)}\n\t\t\t\t</textarea>\n\t\t</body>\n\t\t</html>\n\t\t${assetsMap.js.join('')}\n\t\t`;\n  await next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

/***/ }),

/***/ "./src/share/match-route.js":
/*!**********************************!*\
  !*** ./src/share/match-route.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((path, routeList) => {\n  let route;\n\n  for (var item of routeList) {\n    if (Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])(path, item)) {\n      route = item;\n      break;\n    }\n  }\n\n  return route;\n});\n\n//# sourceURL=webpack:///./src/share/match-route.js?");

/***/ }),

/***/ "./src/share/pro-config.js":
/*!*********************************!*\
  !*** ./src/share/pro-config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//双端公用的配置文件\nmodule.exports = {\n  wdsPort: 9002,\n  //webpack dev server 服务的运行端口\n  nodeServerPort: 9001 //node server 的监听端口\n\n};\n\n//# sourceURL=webpack:///./src/share/pro-config.js?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "koa2":
/*!***********************!*\
  !*** external "koa2" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2\");\n\n//# sourceURL=webpack:///external_%22koa2%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });