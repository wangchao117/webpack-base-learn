(function (modules) {
  // 模块的缓存
  var installedModules = {};
  // 申明一个require方法
  function __webpack_require__(moduleId) {
    // 如果缓存已经有了人，说明模块已经加载过了
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // 没有加载过就创建一个模块，并放入缓存
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    // 执行模块函数 modules[moduleId]其实就是下面对象的函数体
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    // 标记模块是加载过的
    module.l = true;
    // 最后返回导出对象 
    return module.exports;
    
  }
  // 向外暴露模块对象
  __webpack_require__.m = modules;
  // 向外暴露模块缓存
  __webpack_require__.c = installedModules;
  // 定义getter方法，为了兼容
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      // 在expport对象定义name属性，它的值是不可配置的，可枚举的，并指定获取器
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  }; 
  // 在到处对象定义__esModule对象，为了兼容
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
    }
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != 'string')
      for (var key in value) __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault() {
        return module['default'];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
({
  "./src/index.js": (function (module, exports) {
    eval("console.log('hello')\ndocument.getElementById('app').innerHTML='webpack'\n\n//# sourceURL=webpack:///./src/index.js?");
  })
});