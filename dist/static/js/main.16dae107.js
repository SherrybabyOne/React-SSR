!function(u){function t(t){for(var e,n,r=t[0],a=t[1],c=t[2],i=0,o=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(f,n)&&f[n]&&o.push(f[n][0]),f[n]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(u[e]=a[e]);for(p&&p(t);o.length;)o.shift()();return s.push.apply(s,c||[]),l()}function l(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==f[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},f={1:0},s=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=u,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var p=r;s.push([28,0]),l()}({28:function(t,e,n){t.exports=n(43)},36:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(23),c=n.n(a),i=n(9),u=n(24),l=n.n(u),f=n(11),s=n.n(f),p=n(12),d=n.n(p),h=n(13),m=n.n(h),y=n(14),v=n.n(y),g=n(7),b=n.n(g),w=n(2);n(36);function k(r){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=b()(r);return e=a?(t=b()(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),v()(this,e)}}var E=function(t){m()(n,t);var e=k(n);function n(t){return s()(this,n),e.call(this,t)}return d()(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"layout-box"},o.a.createElement(i.b,{to:"/index",style:{marginLeft:"10px"}},"首页"),o.a.createElement(i.b,{style:{marginLeft:"10px"},onClick:this.click,to:"/list"},"列表页"),o.a.createElement(i.b,{to:"/about",style:{marginLeft:"10px"}},"关于"),this.props.children)}}]),n}(o.a.Component),x=Object(w.f)(E);var S=function(t){var e=t.routeList;return o.a.createElement(x,null,o.a.createElement(w.c,null,e.map(function(e){return e.initialData?o.a.createElement(w.a,{key:e.path,exact:e.exact,path:e.path,render:function(t){return t.initialData=e.initialData,o.a.createElement(e.component,t)}}):o.a.createElement(w.a,l()({key:e.path},e))})))};function D(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function a(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){o=!0,c=t},f:function(){try{i||null==n["return"]||n["return"]()}finally{if(o)throw c}}}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O=n(8),P=n.n(O),j=n(15),I=n.n(j),C=n(17);n(42);function M(r){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=b()(r);return e=a?(t=b()(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),v()(this,e)}}var V=function(t){m()(a,t);var e,r=M(a);function a(t){var e;s()(this,a),e=r.call(this,t);var n=t.initialData||{};return e.state={fetchData:n.fetchData,page:n.page},e}return d()(a,[{key:"componentDidMount",value:function(){var c=this;this.state.fetchData||a.getInitialProps().then(function(t){var e=t.fetchData,n=void 0===e?{}:e,r=t.page,a=void 0===r?{}:r;c.setState({fetchData:n,page:a})})}},{key:"handlerClick",value:function(){alert("一起来玩 react ssr 呀。")}},{key:"render",value:function(){var t=(this.state.page||{}).tdk,e=void 0===t?{}:t;return o.a.createElement("div",{className:"page"},o.a.createElement(C.a,null,o.a.createElement("title",null,e.title),o.a.createElement("meta",{name:"description",content:e.description}),o.a.createElement("meta",{name:"keywords",content:e.keywords})),o.a.createElement("div",{className:"page-index-box"},"首页"),o.a.createElement("h1",{onClick:this.handlerClick},"click here!"),o.a.createElement("h2",null,"听说？？？"))}}],[{key:"getInitialProps",value:(e=I()(P.a.mark(function n(){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{page:{tdk:{title:"首页 - react ssr",keywords:"React SSR 列表",description:"React-SSR 首页相关描述"}}});case 2:case"end":return t.stop()}},n)})),function(){return e.apply(this,arguments)})}]),a}(o.a.Component),A=[{title:"深入浅出TypeScript：从基础知识到类型编程",desc:"Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。",img:"https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"SVG 动画开发实战手册",desc:"从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。",img:"https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"},{title:"预售JavaScript 设计模式核⼼原理与应⽤实践",desc:"通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。",img:"https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"}];function T(r){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=b()(r);return e=a?(t=b()(this).constructor,Reflect.construct(n,arguments,t)):n.apply(this,arguments),v()(this,e)}}var _=[{path:"/index",component:V,exact:!0},{path:"/list",component:function(t){m()(i,t);var e,n,c=T(i);function i(t){var e;s()(this,i),e=c.call(this,t);var n=t.initialData||{},r=n.fetchData,a=n.page;return e.state={fetchData:r,page:a},e}return d()(i,[{key:"handlerClick",value:(n=I()(P.a.mark(function r(){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:alert("一起来玩 react ssr 呀。");case 1:case"end":return t.stop()}},r)})),function(){return n.apply(this,arguments)})},{key:"componentDidMount",value:function(){var c=this;this.state.fetchData||i.getInitialProps().then(function(t){var e=t.fetchData,n=void 0===e?{}:e,r=t.page,a=void 0===r?{}:r;c.setState({fetchData:n,page:a})})}},{key:"render",value:function(){var t=this.state.fetchData||{},e=t.data,n=(this.state.page||{}).tdk,r=void 0===n?{}:n;return o.a.createElement("div",null,o.a.createElement(C.a,null,o.a.createElement("title",null,r.title),o.a.createElement("meta",{name:"description",content:r.description}),o.a.createElement("meta",{name:"keywords",content:r.keywords})),e&&e.map(function(t,e){return o.a.createElement("div",{key:e},o.a.createElement("h3",null,t.title),o.a.createElement("p",null,t.desc))}),!e&&o.a.createElement("div",null,"暂无数据"))}}],[{key:"getInitialProps",value:(e=I()(P.a.mark(function a(){var e,n;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function e(){return new Promise(function(t){setTimeout(function(){t({code:0,data:A})},100)})},t.next=3,e();case 3:return n=t.sent,t.abrupt("return",{fetchData:n,page:{tdk:{title:"列表页 - react ssr",keywords:"React SSR 列表",description:"React-SSR 列表相关描述"}}});case 5:case"end":return t.stop()}},a)})),function(){return e.apply(this,arguments)})}]),i}(o.a.Component),exact:!0}],L=JSON.parse(document.getElementById("ssrTextInitData").value);(function(t,e){var n,r,a=D(e);try{for(a.s();!(r=a.n()).done;){var c=r.value;if(Object(w.e)(t,c)){n=c;break}}}catch(i){a.e(i)}finally{a.f()}return n})(document.location.pathname,_).initialData=L,c.a.hydrate(o.a.createElement(i.a,null,o.a.createElement(S,{routeList:_})),document.getElementById("root"))}});