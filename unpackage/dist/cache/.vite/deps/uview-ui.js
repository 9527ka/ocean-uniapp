var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/mixin/mixin.js
var require_mixin = __commonJS({
  "../../../../../../Users/feitt/node_modules/uview-ui/libs/mixin/mixin.js"(exports, module) {
    module.exports = {
      data() {
        return {};
      },
      onLoad() {
        this.$u.getRect = this.$uGetRect;
      },
      methods: {
        // 查询节点信息
        // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
        // 解决办法为在组件根部再套一个没有任何作用的view元素
        $uGetRect(selector, all) {
          return new Promise((resolve) => {
            uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
              if (all && Array.isArray(rect) && rect.length) {
                resolve(rect);
              }
              if (!all && rect) {
                resolve(rect);
              }
            }).exec();
          });
        },
        getParentData(parentName = "") {
          if (!this.parent)
            this.parent = false;
          this.parent = this.$u.$parent.call(this, parentName);
          if (this.parent) {
            Object.keys(this.parentData).map((key) => {
              this.parentData[key] = this.parent[key];
            });
          }
        },
        // 阻止事件冒泡
        preventEvent(e) {
          e && e.stopPropagation && e.stopPropagation();
        }
      },
      onReachBottom() {
        uni.$emit("uOnReachBottom");
      },
      beforeDestroy() {
        if (this.parent && uni.$u.test.array(this.parent.children)) {
          const childrenList = this.parent.children;
          childrenList.map((child, index) => {
            if (child === this) {
              childrenList.splice(index, 1);
            }
          });
        }
      }
    };
  }
});

// ../../../../../../Users/feitt/node_modules/uview-ui/index.js
var import_mixin = __toESM(require_mixin());

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/deepClone.js
function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (cache.has(obj))
    return cache.get(obj);
  let clone;
  if (obj instanceof Date) {
    clone = new Date(obj.getTime());
  } else if (obj instanceof RegExp) {
    clone = new RegExp(obj);
  } else if (obj instanceof Map) {
    clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
  } else if (obj instanceof Set) {
    clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
  } else if (Array.isArray(obj)) {
    clone = obj.map((value) => deepClone(value, cache));
  } else if (Object.prototype.toString.call(obj) === "[object Object]") {
    clone = Object.create(Object.getPrototypeOf(obj));
    cache.set(obj, clone);
    for (const [key, value] of Object.entries(obj)) {
      clone[key] = deepClone(value, cache);
    }
  } else {
    clone = Object.assign({}, obj);
  }
  cache.set(obj, clone);
  return clone;
}
var deepClone_default = deepClone;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/deepMerge.js
function deepMerge(target = {}, source = {}) {
  target = deepClone_default(target);
  if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
    return target;
  const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
  for (const prop in source) {
    if (!source.hasOwnProperty(prop))
      continue;
    const sourceValue = source[prop];
    const targetValue = merged[prop];
    if (sourceValue instanceof Date) {
      merged[prop] = new Date(sourceValue);
    } else if (sourceValue instanceof RegExp) {
      merged[prop] = new RegExp(sourceValue);
    } else if (sourceValue instanceof Map) {
      merged[prop] = new Map(sourceValue);
    } else if (sourceValue instanceof Set) {
      merged[prop] = new Set(sourceValue);
    } else if (typeof sourceValue === "object" && sourceValue !== null) {
      merged[prop] = deepMerge(targetValue, sourceValue);
    } else {
      merged[prop] = sourceValue;
    }
  }
  return merged;
}
var deepMerge_default = deepMerge;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/test.js
function email(value) {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value);
}
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}
function digits(value) {
  return /^\d+$/.test(value);
}
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value
  );
}
function carNo(value) {
  const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}
function amount(value) {
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}
function chinese(value) {
  let reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}
function enOrNum(value) {
  let reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}
function contains(value, param) {
  return value.indexOf(param) >= 0;
}
function range(value, param) {
  return value >= param[0] && value <= param[1];
}
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}
function landline(value) {
  let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}
function empty(value) {
  switch (typeof value) {
    case "undefined":
      return true;
    case "string":
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
        return true;
      break;
    case "boolean":
      if (!value)
        return true;
      break;
    case "number":
      if (0 === value || isNaN(value))
        return true;
      break;
    case "object":
      if (null === value || value.length === 0)
        return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}
function jsonString(value) {
  if (typeof value == "string") {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}
function object(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
function code(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value);
}
var test_default = {
  email,
  mobile,
  url,
  date,
  dateISO,
  number,
  digits,
  idCard,
  carNo,
  amount,
  chinese,
  letter,
  enOrNum,
  contains,
  range,
  rangeLength,
  empty,
  isEmpty: empty,
  jsonString,
  landline,
  object,
  array,
  code
};

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/request/index.js
var Request = class {
  // 设置全局默认配置
  setConfig(customConfig) {
    this.config = deepMerge_default(this.config, customConfig);
  }
  // 主要请求部分
  request(options = {}) {
    if (this.interceptor.request && typeof this.interceptor.request === "function") {
      let tmpConfig = {};
      let interceptorRequest = this.interceptor.request(options);
      if (interceptorRequest === false) {
        return new Promise(() => {
        });
      }
      this.options = interceptorRequest;
    }
    options.dataType = options.dataType || this.config.dataType;
    options.responseType = options.responseType || this.config.responseType;
    options.url = options.url || "";
    options.params = options.params || {};
    options.header = Object.assign({}, this.config.header, options.header);
    options.method = options.method || this.config.method;
    return new Promise((resolve, reject) => {
      options.complete = (response) => {
        uni.hideLoading();
        clearTimeout(this.config.timer);
        this.config.timer = null;
        if (this.config.originalData) {
          if (this.interceptor.response && typeof this.interceptor.response === "function") {
            let resInterceptors = this.interceptor.response(response);
            if (resInterceptors !== false) {
              resolve(resInterceptors);
            } else {
              reject(response);
            }
          } else {
            resolve(response);
          }
        } else {
          if (response.statusCode == 200) {
            if (this.interceptor.response && typeof this.interceptor.response === "function") {
              let resInterceptors = this.interceptor.response(response.data);
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                reject(response.data);
              }
            } else {
              resolve(response.data);
            }
          } else {
            reject(response);
          }
        }
      };
      options.url = test_default.url(options.url) ? options.url : this.config.baseUrl + (options.url.indexOf("/") == 0 ? options.url : "/" + options.url);
      if (this.config.showLoading && !this.config.timer) {
        this.config.timer = setTimeout(() => {
          uni.showLoading({
            title: this.config.loadingText,
            mask: this.config.loadingMask
          });
          this.config.timer = null;
        }, this.config.loadingTime);
      }
      uni.request(options);
    });
  }
  constructor() {
    this.config = {
      baseUrl: "",
      // 请求的根域名
      // 默认的请求头
      header: {},
      method: "POST",
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: "json",
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: "text",
      showLoading: true,
      // 是否显示请求中的loading
      loadingText: "请求中...",
      loadingTime: 800,
      // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null,
      // 定时器
      originalData: false,
      // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true
      // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null
    };
    this.get = (url2, data = {}, header = {}) => {
      return this.request({
        method: "GET",
        url: url2,
        header,
        data
      });
    };
    this.post = (url2, data = {}, header = {}) => {
      return this.request({
        url: url2,
        method: "POST",
        header,
        data
      });
    };
    this.put = (url2, data = {}, header = {}) => {
      return this.request({
        url: url2,
        method: "PUT",
        header,
        data
      });
    };
    this.delete = (url2, data = {}, header = {}) => {
      return this.request({
        url: url2,
        method: "DELETE",
        header,
        data
      });
    };
  }
};
var request_default = new Request();

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/queryParams.js
function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
  let prefix = isPrefix ? "?" : "";
  let _result = [];
  if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
    arrayFormat = "brackets";
  for (let key in data) {
    let value = data[key];
    if (["", void 0, null].indexOf(value) >= 0) {
      continue;
    }
    if (value.constructor === Array) {
      switch (arrayFormat) {
        case "indices":
          for (let i = 0; i < value.length; i++) {
            _result.push(key + "[" + i + "]=" + value[i]);
          }
          break;
        case "brackets":
          value.forEach((_value) => {
            _result.push(key + "[]=" + _value);
          });
          break;
        case "repeat":
          value.forEach((_value) => {
            _result.push(key + "=" + _value);
          });
          break;
        case "comma":
          let commaStr = "";
          value.forEach((_value) => {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + "=" + commaStr);
          break;
        default:
          value.forEach((_value) => {
            _result.push(key + "[]=" + _value);
          });
      }
    } else {
      _result.push(key + "=" + value);
    }
  }
  return _result.length ? prefix + _result.join("&") : "";
}
var queryParams_default = queryParams;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/route.js
var Router = class {
  constructor() {
    this.config = {
      type: "navigateTo",
      url: "",
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: "pop-in",
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false
      // 是否需要拦截
    };
    this.route = this.route.bind(this);
  }
  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  addRootPath(url2) {
    return url2[0] === "/" ? url2 : `/${url2}`;
  }
  // 整合路由参数
  mixinParam(url2, params) {
    url2 = url2 && this.addRootPath(url2);
    let query = "";
    if (/.*\/.*\?.*=.*/.test(url2)) {
      query = uni.$u.queryParams(params, false);
      return url2 += "&" + query;
    } else {
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
  }
  // 对外的方法名称
  async route(options = {}, params = {}) {
    let mergeConfig = {};
    if (typeof options === "string") {
      mergeConfig.url = this.mixinParam(options, params);
      mergeConfig.type = "navigateTo";
    } else {
      mergeConfig = uni.$u.deepMerge(this.config, options);
      mergeConfig.url = this.mixinParam(options.url, options.params);
    }
    if (params.intercept) {
      this.config.intercept = params.intercept;
    }
    mergeConfig.params = params;
    mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
    if (typeof uni.$u.routeIntercept === "function") {
      const isNext = await new Promise((resolve, reject) => {
        uni.$u.routeIntercept(mergeConfig, resolve);
      });
      isNext && this.openPage(mergeConfig);
    } else {
      this.openPage(mergeConfig);
    }
  }
  // 执行路由跳转
  openPage(config) {
    const {
      url: url2,
      type,
      delta,
      animationType,
      animationDuration
    } = config;
    if (config.type == "navigateTo" || config.type == "to") {
      uni.navigateTo({
        url: url2,
        animationType,
        animationDuration
      });
    }
    if (config.type == "redirectTo" || config.type == "redirect") {
      uni.redirectTo({
        url: url2
      });
    }
    if (config.type == "switchTab" || config.type == "tab") {
      uni.switchTab({
        url: url2
      });
    }
    if (config.type == "reLaunch" || config.type == "launch") {
      uni.reLaunch({
        url: url2
      });
    }
    if (config.type == "navigateBack" || config.type == "back") {
      uni.navigateBack({
        delta
      });
    }
  }
};
var route_default = new Router().route;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/timeFormat.js
if (!String.prototype.padStart) {
  String.prototype.padStart = function(maxLength, fillString = " ") {
    if (Object.prototype.toString.call(fillString) !== "[object String]")
      throw new TypeError(
        "fillString must be String"
      );
    let str = this;
    if (str.length >= maxLength)
      return String(str);
    let fillLength = maxLength - str.length, times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}
function timeFormat(dateTime = null, fmt = "yyyy-mm-dd") {
  if (!dateTime)
    dateTime = Number(/* @__PURE__ */ new Date());
  if (dateTime.toString().length == 10)
    dateTime *= 1e3;
  let date2 = new Date(dateTime);
  let ret;
  let opt = {
    "y+": date2.getFullYear().toString(),
    // 年
    "m+": (date2.getMonth() + 1).toString(),
    // 月
    "d+": date2.getDate().toString(),
    // 日
    "h+": date2.getHours().toString(),
    // 时
    "M+": date2.getMinutes().toString(),
    // 分
    "s+": date2.getSeconds().toString()
    // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
    ;
  }
  ;
  return fmt;
}
var timeFormat_default = timeFormat;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/timeFrom.js
function timeFrom(dateTime = null, format = "yyyy-mm-dd") {
  if (!dateTime)
    dateTime = Number(/* @__PURE__ */ new Date());
  if (dateTime.toString().length == 10)
    dateTime *= 1e3;
  let timestamp = +new Date(Number(dateTime));
  let timer2 = (Number(/* @__PURE__ */ new Date()) - timestamp) / 1e3;
  let tips = "";
  switch (true) {
    case timer2 < 300:
      tips = "刚刚";
      break;
    case (timer2 >= 300 && timer2 < 3600):
      tips = parseInt(timer2 / 60) + "分钟前";
      break;
    case (timer2 >= 3600 && timer2 < 86400):
      tips = parseInt(timer2 / 3600) + "小时前";
      break;
    case (timer2 >= 86400 && timer2 < 2592e3):
      tips = parseInt(timer2 / 86400) + "天前";
      break;
    default:
      if (format === false) {
        if (timer2 >= 2592e3 && timer2 < 365 * 86400) {
          tips = parseInt(timer2 / (86400 * 30)) + "个月前";
        } else {
          tips = parseInt(timer2 / (86400 * 365)) + "年前";
        }
      } else {
        tips = timeFormat_default(timestamp, format);
      }
  }
  return tips;
}
var timeFrom_default = timeFrom;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/colorGradient.js
function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
  let startRGB = hexToRgb(startColor, false);
  let startR = startRGB[0];
  let startG = startRGB[1];
  let startB = startRGB[2];
  let endRGB = hexToRgb(endColor, false);
  let endR = endRGB[0];
  let endG = endRGB[1];
  let endB = endRGB[2];
  let sR = (endR - startR) / step;
  let sG = (endG - startG) / step;
  let sB = (endB - startB) / step;
  let colorArr = [];
  for (let i = 0; i < step; i++) {
    let hex = rgbToHex("rgb(" + Math.round(sR * i + startR) + "," + Math.round(sG * i + startG) + "," + Math.round(sB * i + startB) + ")");
    colorArr.push(hex);
  }
  return colorArr;
}
function hexToRgb(sColor, str = true) {
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map((val) => Number(val));
  } else {
    return sColor;
  }
}
function rgbToHex(rgb) {
  let _this = rgb;
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    let strHex = "#";
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? "0" + hex : hex;
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    let aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      let numHex = "#";
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}
function colorToRgba(color2, alpha = 0.3) {
  color2 = rgbToHex(color2);
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = color2.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    var sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return "rgba(" + sColorChange.join(",") + "," + alpha + ")";
  } else {
    return sColor;
  }
}
var colorGradient_default = {
  colorGradient,
  hexToRgb,
  rgbToHex,
  colorToRgba
};

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/guid.js
function guid(len = 32, firstU = true, radix = null) {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  let uuid = [];
  radix = radix || chars.length;
  if (len) {
    for (let i = 0; i < len; i++)
      uuid[i] = chars[0 | Math.random() * radix];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
      }
    }
  }
  if (firstU) {
    uuid.shift();
    return "u" + uuid.join("");
  } else {
    return uuid.join("");
  }
}
var guid_default = guid;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/color.js
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",
  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",
  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",
  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",
  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",
  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed"
};
var color_default = color;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/type2icon.js
function type2icon(type = "success", fill = false) {
  if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
    type = "success";
  let iconName = "";
  switch (type) {
    case "primary":
      iconName = "info-circle";
      break;
    case "info":
      iconName = "info-circle";
      break;
    case "error":
      iconName = "close-circle";
      break;
    case "warning":
      iconName = "error-circle";
      break;
    case "success":
      iconName = "checkmark-circle";
      break;
    default:
      iconName = "checkmark-circle";
  }
  if (fill)
    iconName += "-fill";
  return iconName;
}
var type2icon_default = type2icon;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/randomArray.js
function randomArray(array2 = []) {
  return array2.sort(() => Math.random() - 0.5);
}
var randomArray_default = randomArray;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/addUnit.js
function addUnit(value = "auto", unit = "rpx") {
  value = String(value);
  return test_default.number(value) ? `${value}${unit}` : value;
}

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/random.js
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    let gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}
var random_default = random;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/trim.js
function trim(str, pos = "both") {
  if (pos == "both") {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, "");
  } else if (pos == "right") {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == "all") {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}
var trim_default = trim;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/toast.js
function toast(title, duration = 1500) {
  uni.showToast({
    title,
    icon: "none",
    duration
  });
}
var toast_default = toast;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/getParent.js
function getParent(name, keys) {
  let parent = this.$parent;
  while (parent) {
    if (parent.$options.name !== name) {
      parent = parent.$parent;
    } else {
      let data = {};
      if (Array.isArray(keys)) {
        keys.map((val) => {
          data[val] = parent[val] ? parent[val] : "";
        });
      } else {
        for (let i in keys) {
          if (Array.isArray(keys[i])) {
            if (keys[i].length) {
              data[i] = keys[i];
            } else {
              data[i] = parent[i];
            }
          } else if (keys[i].constructor === Object) {
            if (Object.keys(keys[i]).length) {
              data[i] = keys[i];
            } else {
              data[i] = parent[i];
            }
          } else {
            data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
          }
        }
      }
      return data;
    }
  }
  return {};
}

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/$parent.js
function $parent(name = void 0) {
  let parent = this.$parent;
  while (parent) {
    if (parent.$options && parent.$options.name !== name) {
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/sys.js
function os() {
  return uni.getSystemInfoSync().platform;
}
function sys() {
  return uni.getSystemInfoSync();
}

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/debounce.js
var timeout = null;
function debounce(func, wait = 500, immediate = false) {
  if (timeout !== null)
    clearTimeout(timeout);
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function() {
      timeout = null;
    }, wait);
    if (callNow)
      typeof func === "function" && func();
  } else {
    timeout = setTimeout(function() {
      typeof func === "function" && func();
    }, wait);
  }
}
var debounce_default = debounce;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/function/throttle.js
var timer;
var flag;
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      typeof func === "function" && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      timer = setTimeout(() => {
        flag = false;
        typeof func === "function" && func();
      }, wait);
    }
  }
}
var throttle_default = throttle;

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/config/config.js
var version = "1.8.8";
var config_default = {
  v: version,
  version,
  // 主题名称
  type: [
    "primary",
    "success",
    "info",
    "error",
    "warning"
  ]
};

// ../../../../../../Users/feitt/node_modules/uview-ui/libs/config/zIndex.js
var zIndex_default = {
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};

// ../../../../../../Users/feitt/node_modules/uview-ui/index.js
function wranning(str) {
  if (true) {
    console.warn(str);
  }
}
var $u = {
  queryParams: queryParams_default,
  route: route_default,
  timeFormat: timeFormat_default,
  date: timeFormat_default,
  // 另名date
  timeFrom: timeFrom_default,
  colorGradient: colorGradient_default.colorGradient,
  colorToRgba: colorGradient_default.colorToRgba,
  guid: guid_default,
  color: color_default,
  sys,
  os,
  type2icon: type2icon_default,
  randomArray: randomArray_default,
  wranning,
  get: request_default.get,
  post: request_default.post,
  put: request_default.put,
  "delete": request_default.delete,
  hexToRgb: colorGradient_default.hexToRgb,
  rgbToHex: colorGradient_default.rgbToHex,
  test: test_default,
  random: random_default,
  deepClone: deepClone_default,
  deepMerge: deepMerge_default,
  getParent,
  $parent,
  addUnit,
  trim: trim_default,
  type: ["primary", "success", "error", "warning", "info"],
  http: request_default,
  toast: toast_default,
  config: config_default,
  // uView配置信息相关，比如版本号
  zIndex: zIndex_default,
  debounce: debounce_default,
  throttle: throttle_default
};
uni.$u = $u;
var install = (Vue) => {
  Vue.mixin(import_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  Vue.filter("timeFormat", (timestamp, format) => {
    return timeFormat_default(timestamp, format);
  });
  Vue.filter("date", (timestamp, format) => {
    return timeFormat_default(timestamp, format);
  });
  Vue.filter("timeFrom", (timestamp, format) => {
    return timeFrom_default(timestamp, format);
  });
  Vue.prototype.$u = $u;
};
var uview_ui_default = {
  install
};
export {
  uview_ui_default as default
};
//# sourceMappingURL=uview-ui.js.map
