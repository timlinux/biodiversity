const qgis_observer = new IntersectionObserver((entries) => {
    console.log("Animation observer");
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-show');
            entry.target.classList.remove('animation-hide-left');
            entry.target.classList.remove('animation-hide-right');
        } else {
            if (entry.target.classList.contains('animate-from-left'))
            {
                entry.target.classList.add('animation-hide-left');
            };
            if (entry.target.classList.contains('animate-from-right'))
            {
                entry.target.classList.add('animation-hide-right');
            };       
            // Disable next line to have animations run on first time scrolling
            // the page only     
            //entry.target.classList.remove('animation-show');
            
        }
    })
});
const animationElements = document.querySelectorAll('.animation-element');
animationElements.forEach((element) => qgis_observer.observe(element));

;
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $toggles = Array.prototype.slice.call(
        document.querySelectorAll('.pulldown-toggle'), 0);

    // Add a click event on each of them
    $toggles.forEach( el => {
        el.addEventListener('click', () => {
            console.log("Card expander clicked");
            // Get the target from the "data-contentid" attribute
            const target = el.dataset.contentid;
            const $target = document.getElementById(target);
            $target.classList.toggle("is-hidden");
            let child = el.firstChild.nextElementSibling.childNodes[1];
            const $child = document.getElementById(child);
            if (child.classList.contains("fa-angle-down"))
            {
                child.classList.remove("fa-angle-down");
                child.classList.add("fa-angle-up");
            }
            else
            {
                child.classList.remove("fa-angle-up");
                child.classList.add("fa-angle-down");
            }            
        })
    })
}); 
;
// first handler for hide / show of search box when magnifying glass is clicked
document.addEventListener('DOMContentLoaded', () => {
  const $toggles = Array.prototype.slice.call(
      document.querySelectorAll('.search-icon'), 0);

    $toggles.forEach( el => {
        el.addEventListener('click', () => {
            console.log("Search icon clicked");
          // Get the target from the "data-target" attribute
          const $target = document.getElementById("search-control");
          // Toggle the search control
          el.classList.toggle('is-hidden');
          $target.classList.toggle('is-hidden');
    })
  })
});


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
;
const qrCodeElements = document.querySelectorAll('.qr-code');
qrCodeElements.forEach(renderQr);    


// Creates a single QR Code, then appends it to the document.
function renderQr(container) {
    // See https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
    text = container.dataset.url;
    const errCorLvl = qrcodegen.QrCode.Ecc.LOW;  // Error correction level
    const qr = qrcodegen.QrCode.encodeText(text, errCorLvl);  // Make the QR Code symbol
    drawCanvas(qr, 5, 4, "#FFFFFF", "#000000", container);  // Draw it on screen
}

// Draws the given QR Code, with the given module scale and border modules, onto the given HTML
// canvas element. The canvas's width and height is resized to (qr.size + border * 2) * scale.
// The drawn image is purely dark and light, and fully opaque.
// The scale must be a positive integer and the border must be a non-negative integer.
function drawCanvas(qr, scale, border, lightColor, darkColor, canvas) {
    if (scale <= 0 || border < 0)
        throw new RangeError("Value out of range");
    const width = (qr.size + border * 2) * scale;
    canvas.width = width;
    canvas.height = width;
    let ctx = canvas.getContext("2d");
    for (let y = -border; y < qr.size + border; y++) {
        for (let x = -border; x < qr.size + border; x++) {
            ctx.fillStyle = qr.getModule(x, y) ? darkColor : lightColor;
            ctx.fillRect((x + border) * scale, (y + border) * scale, scale, scale);
        }
    }
}
;
/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Fuse = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    Object.defineProperty(subClass, "prototype", {
      value: Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      }),
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function isArray(value) {
    return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
  } // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js

  var INFINITY = 1 / 0;
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }
  function isString(value) {
    return typeof value === 'string';
  }
  function isNumber(value) {
    return typeof value === 'number';
  } // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js

  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
  }
  function isObject(value) {
    return _typeof(value) === 'object';
  } // Checks if `value` is object-like.

  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== undefined && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  } // Gets the `toStringTag` of `value`.
  // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js

  function getTag(value) {
    return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
  }

  var EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key) {
    return "Invalid value for key ".concat(key);
  };
  var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE(max) {
    return "Pattern length exceeds max of ".concat(max, ".");
  };
  var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY(name) {
    return "Missing ".concat(name, " property in key");
  };
  var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE(key) {
    return "Property 'weight' in key '".concat(key, "' must be a positive integer");
  };

  var hasOwn = Object.prototype.hasOwnProperty;

  var KeyStore = /*#__PURE__*/function () {
    function KeyStore(keys) {
      var _this = this;

      _classCallCheck(this, KeyStore);

      this._keys = [];
      this._keyMap = {};
      var totalWeight = 0;
      keys.forEach(function (key) {
        var obj = createKey(key);
        totalWeight += obj.weight;

        _this._keys.push(obj);

        _this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      }); // Normalize weights so that their sum is equal to 1

      this._keys.forEach(function (key) {
        key.weight /= totalWeight;
      });
    }

    _createClass(KeyStore, [{
      key: "get",
      value: function get(keyId) {
        return this._keyMap[keyId];
      }
    }, {
      key: "keys",
      value: function keys() {
        return this._keys;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return JSON.stringify(this._keys);
      }
    }]);

    return KeyStore;
  }();
  function createKey(key) {
    var path = null;
    var id = null;
    var src = null;
    var weight = 1;
    var getFn = null;

    if (isString(key) || isArray(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, 'name')) {
        throw new Error(MISSING_KEY_PROPERTY('name'));
      }

      var name = key.name;
      src = name;

      if (hasOwn.call(key, 'weight')) {
        weight = key.weight;

        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }

      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn;
    }

    return {
      path: path,
      id: id,
      weight: weight,
      src: src,
      getFn: getFn
    };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split('.');
  }
  function createKeyId(key) {
    return isArray(key) ? key.join('.') : key;
  }

  function get(obj, path) {
    var list = [];
    var arr = false;

    var deepGet = function deepGet(obj, path, index) {
      if (!isDefined(obj)) {
        return;
      }

      if (!path[index]) {
        // If there's no path left, we've arrived at the object we care about.
        list.push(obj);
      } else {
        var key = path[index];
        var value = obj[key];

        if (!isDefined(value)) {
          return;
        } // If we're at the last value in the path, and if it's a string/number/bool,
        // add it to the list


        if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true; // Search each item in the array.

          for (var i = 0, len = value.length; i < len; i += 1) {
            deepGet(value[i], path, index + 1);
          }
        } else if (path.length) {
          // An object. Recurse further.
          deepGet(value, path, index + 1);
        }
      }
    }; // Backwards compatibility (since path used to be a string)


    deepGet(obj, isString(path) ? path.split('.') : path, 0);
    return arr ? list : list[0];
  }

  var MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: function sortFn(a, b) {
      return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
    }
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
  };
  var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);

  var SPACE = /[^ ]+/g; // Field-length norm: the shorter the field, the higher the weight.
  // Set to 3 decimals to reduce index size.

  function norm() {
    var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var mantissa = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var cache = new Map();
    var m = Math.pow(10, mantissa);
    return {
      get: function get(value) {
        var numTokens = value.match(SPACE).length;

        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        } // Default function is 1/sqrt(x), weight makes that variable


        var norm = 1 / Math.pow(numTokens, 0.5 * weight); // In place of `toFixed(mantissa)`, for faster computation

        var n = parseFloat(Math.round(norm * m) / m);
        cache.set(numTokens, n);
        return n;
      },
      clear: function clear() {
        cache.clear();
      }
    };
  }

  var FuseIndex = /*#__PURE__*/function () {
    function FuseIndex() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$getFn = _ref.getFn,
          getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn,
          _ref$fieldNormWeight = _ref.fieldNormWeight,
          fieldNormWeight = _ref$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref$fieldNormWeight;

      _classCallCheck(this, FuseIndex);

      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }

    _createClass(FuseIndex, [{
      key: "setSources",
      value: function setSources() {
        var docs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.docs = docs;
      }
    }, {
      key: "setIndexRecords",
      value: function setIndexRecords() {
        var records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.records = records;
      }
    }, {
      key: "setKeys",
      value: function setKeys() {
        var _this = this;

        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.keys = keys;
        this._keysMap = {};
        keys.forEach(function (key, idx) {
          _this._keysMap[key.id] = idx;
        });
      }
    }, {
      key: "create",
      value: function create() {
        var _this2 = this;

        if (this.isCreated || !this.docs.length) {
          return;
        }

        this.isCreated = true; // List is Array<String>

        if (isString(this.docs[0])) {
          this.docs.forEach(function (doc, docIndex) {
            _this2._addString(doc, docIndex);
          });
        } else {
          // List is Array<Object>
          this.docs.forEach(function (doc, docIndex) {
            _this2._addObject(doc, docIndex);
          });
        }

        this.norm.clear();
      } // Adds a doc to the end of the index

    }, {
      key: "add",
      value: function add(doc) {
        var idx = this.size();

        if (isString(doc)) {
          this._addString(doc, idx);
        } else {
          this._addObject(doc, idx);
        }
      } // Removes the doc at the specified index of the index

    }, {
      key: "removeAt",
      value: function removeAt(idx) {
        this.records.splice(idx, 1); // Change ref index of every subsquent doc

        for (var i = idx, len = this.size(); i < len; i += 1) {
          this.records[i].i -= 1;
        }
      }
    }, {
      key: "getValueForItemAtKeyId",
      value: function getValueForItemAtKeyId(item, keyId) {
        return item[this._keysMap[keyId]];
      }
    }, {
      key: "size",
      value: function size() {
        return this.records.length;
      }
    }, {
      key: "_addString",
      value: function _addString(doc, docIndex) {
        if (!isDefined(doc) || isBlank(doc)) {
          return;
        }

        var record = {
          v: doc,
          i: docIndex,
          n: this.norm.get(doc)
        };
        this.records.push(record);
      }
    }, {
      key: "_addObject",
      value: function _addObject(doc, docIndex) {
        var _this3 = this;

        var record = {
          i: docIndex,
          $: {}
        }; // Iterate over every key (i.e, path), and fetch the value at that key

        this.keys.forEach(function (key, keyIndex) {
          var value = key.getFn ? key.getFn(doc) : _this3.getFn(doc, key.path);

          if (!isDefined(value)) {
            return;
          }

          if (isArray(value)) {
            (function () {
              var subRecords = [];
              var stack = [{
                nestedArrIndex: -1,
                value: value
              }];

              while (stack.length) {
                var _stack$pop = stack.pop(),
                    nestedArrIndex = _stack$pop.nestedArrIndex,
                    _value = _stack$pop.value;

                if (!isDefined(_value)) {
                  continue;
                }

                if (isString(_value) && !isBlank(_value)) {
                  var subRecord = {
                    v: _value,
                    i: nestedArrIndex,
                    n: _this3.norm.get(_value)
                  };
                  subRecords.push(subRecord);
                } else if (isArray(_value)) {
                  _value.forEach(function (item, k) {
                    stack.push({
                      nestedArrIndex: k,
                      value: item
                    });
                  });
                } else ;
              }

              record.$[keyIndex] = subRecords;
            })();
          } else if (isString(value) && !isBlank(value)) {
            var subRecord = {
              v: value,
              n: _this3.norm.get(value)
            };
            record.$[keyIndex] = subRecord;
          }
        });
        this.records.push(record);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          keys: this.keys,
          records: this.records
        };
      }
    }]);

    return FuseIndex;
  }();
  function createIndex(keys, docs) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$getFn = _ref2.getFn,
        getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn,
        _ref2$fieldNormWeight = _ref2.fieldNormWeight,
        fieldNormWeight = _ref2$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref2$fieldNormWeight;

    var myIndex = new FuseIndex({
      getFn: getFn,
      fieldNormWeight: fieldNormWeight
    });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$getFn = _ref3.getFn,
        getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn,
        _ref3$fieldNormWeight = _ref3.fieldNormWeight,
        fieldNormWeight = _ref3$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref3$fieldNormWeight;

    var keys = data.keys,
        records = data.records;
    var myIndex = new FuseIndex({
      getFn: getFn,
      fieldNormWeight: fieldNormWeight
    });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }

  function computeScore$1(pattern) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$errors = _ref.errors,
        errors = _ref$errors === void 0 ? 0 : _ref$errors,
        _ref$currentLocation = _ref.currentLocation,
        currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation,
        _ref$expectedLocation = _ref.expectedLocation,
        expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
        _ref$ignoreLocation = _ref.ignoreLocation,
        ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

    var accuracy = errors / pattern.length;

    if (ignoreLocation) {
      return accuracy;
    }

    var proximity = Math.abs(expectedLocation - currentLocation);

    if (!distance) {
      // Dodge divide by zero error.
      return proximity ? 1.0 : accuracy;
    }

    return accuracy + proximity / distance;
  }

  function convertMaskToIndices() {
    var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.minMatchCharLength;
    var indices = [];
    var start = -1;
    var end = -1;
    var i = 0;

    for (var len = matchmask.length; i < len; i += 1) {
      var match = matchmask[i];

      if (match && start === -1) {
        start = i;
      } else if (!match && start !== -1) {
        end = i - 1;

        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }

        start = -1;
      }
    } // (i-1 - start) + 1 => i - start


    if (matchmask[i - 1] && i - start >= minMatchCharLength) {
      indices.push([start, i - 1]);
    }

    return indices;
  }

  // Machine word size
  var MAX_BITS = 32;

  function search(text, pattern, patternAlphabet) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? Config.location : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
        _ref$ignoreLocation = _ref.ignoreLocation,
        ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }

    var patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

    var textLen = text.length; // Handle the case when location > text.length

    var expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

    var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

    var bestLocation = expectedLocation; // Performance: only computer matches when the minMatchCharLength > 1
    // OR if `includeMatches` is true.

    var computeMatches = minMatchCharLength > 1 || includeMatches; // A mask of the matches, used for building the indices

    var matchMask = computeMatches ? Array(textLen) : [];
    var index; // Get all exact matches, here for speed up

    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
      var score = computeScore$1(pattern, {
        currentLocation: index,
        expectedLocation: expectedLocation,
        distance: distance,
        ignoreLocation: ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;

      if (computeMatches) {
        var i = 0;

        while (i < patternLen) {
          matchMask[index + i] = 1;
          i += 1;
        }
      }
    } // Reset the best location


    bestLocation = -1;
    var lastBitArr = [];
    var finalScore = 1;
    var binMax = patternLen + textLen;
    var mask = 1 << patternLen - 1;

    for (var _i = 0; _i < patternLen; _i += 1) {
      // Scan for the best match; each iteration allows for one more error.
      // Run a binary search to determine how far from the match location we can stray
      // at this error level.
      var binMin = 0;
      var binMid = binMax;

      while (binMin < binMid) {
        var _score2 = computeScore$1(pattern, {
          errors: _i,
          currentLocation: expectedLocation + binMid,
          expectedLocation: expectedLocation,
          distance: distance,
          ignoreLocation: ignoreLocation
        });

        if (_score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }

        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      } // Use the result from this iteration as the maximum for the next.


      binMax = binMid;
      var start = Math.max(1, expectedLocation - binMid + 1);
      var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

      var bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << _i) - 1;

      for (var j = finish; j >= start; j -= 1) {
        var currentLocation = j - 1;
        var charMatch = patternAlphabet[text.charAt(currentLocation)];

        if (computeMatches) {
          // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
          matchMask[currentLocation] = +!!charMatch;
        } // First pass: exact match


        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

        if (_i) {
          bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
        }

        if (bitArr[j] & mask) {
          finalScore = computeScore$1(pattern, {
            errors: _i,
            currentLocation: currentLocation,
            expectedLocation: expectedLocation,
            distance: distance,
            ignoreLocation: ignoreLocation
          }); // This match will almost certainly be better than any existing match.
          // But check anyway.

          if (finalScore <= currentThreshold) {
            // Indeed it is
            currentThreshold = finalScore;
            bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

            if (bestLocation <= expectedLocation) {
              break;
            } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      } // No hope for a (better) match at greater error levels.


      var _score = computeScore$1(pattern, {
        errors: _i + 1,
        currentLocation: expectedLocation,
        expectedLocation: expectedLocation,
        distance: distance,
        ignoreLocation: ignoreLocation
      });

      if (_score > currentThreshold) {
        break;
      }

      lastBitArr = bitArr;
    }

    var result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(0.001, finalScore)
    };

    if (computeMatches) {
      var indices = convertMaskToIndices(matchMask, minMatchCharLength);

      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }

    return result;
  }

  function createPatternAlphabet(pattern) {
    var mask = {};

    for (var i = 0, len = pattern.length; i < len; i += 1) {
      var _char = pattern.charAt(i);

      mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
    }

    return mask;
  }

  var BitapSearch = /*#__PURE__*/function () {
    function BitapSearch(pattern) {
      var _this = this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$location = _ref.location,
          location = _ref$location === void 0 ? Config.location : _ref$location,
          _ref$threshold = _ref.threshold,
          threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
          _ref$includeMatches = _ref.includeMatches,
          includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
          _ref$findAllMatches = _ref.findAllMatches,
          findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
          _ref$minMatchCharLeng = _ref.minMatchCharLength,
          minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
          _ref$isCaseSensitive = _ref.isCaseSensitive,
          isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive,
          _ref$ignoreLocation = _ref.ignoreLocation,
          ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

      _classCallCheck(this, BitapSearch);

      this.options = {
        location: location,
        threshold: threshold,
        distance: distance,
        includeMatches: includeMatches,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength,
        isCaseSensitive: isCaseSensitive,
        ignoreLocation: ignoreLocation
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.chunks = [];

      if (!this.pattern.length) {
        return;
      }

      var addChunk = function addChunk(pattern, startIndex) {
        _this.chunks.push({
          pattern: pattern,
          alphabet: createPatternAlphabet(pattern),
          startIndex: startIndex
        });
      };

      var len = this.pattern.length;

      if (len > MAX_BITS) {
        var i = 0;
        var remainder = len % MAX_BITS;
        var end = len - remainder;

        while (i < end) {
          addChunk(this.pattern.substr(i, MAX_BITS), i);
          i += MAX_BITS;
        }

        if (remainder) {
          var startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }

    _createClass(BitapSearch, [{
      key: "searchIn",
      value: function searchIn(text) {
        var _this$options = this.options,
            isCaseSensitive = _this$options.isCaseSensitive,
            includeMatches = _this$options.includeMatches;

        if (!isCaseSensitive) {
          text = text.toLowerCase();
        } // Exact match


        if (this.pattern === text) {
          var _result = {
            isMatch: true,
            score: 0
          };

          if (includeMatches) {
            _result.indices = [[0, text.length - 1]];
          }

          return _result;
        } // Otherwise, use Bitap algorithm


        var _this$options2 = this.options,
            location = _this$options2.location,
            distance = _this$options2.distance,
            threshold = _this$options2.threshold,
            findAllMatches = _this$options2.findAllMatches,
            minMatchCharLength = _this$options2.minMatchCharLength,
            ignoreLocation = _this$options2.ignoreLocation;
        var allIndices = [];
        var totalScore = 0;
        var hasMatches = false;
        this.chunks.forEach(function (_ref2) {
          var pattern = _ref2.pattern,
              alphabet = _ref2.alphabet,
              startIndex = _ref2.startIndex;

          var _search = search(text, pattern, alphabet, {
            location: location + startIndex,
            distance: distance,
            threshold: threshold,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            includeMatches: includeMatches,
            ignoreLocation: ignoreLocation
          }),
              isMatch = _search.isMatch,
              score = _search.score,
              indices = _search.indices;

          if (isMatch) {
            hasMatches = true;
          }

          totalScore += score;

          if (isMatch && indices) {
            allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
          }
        });
        var result = {
          isMatch: hasMatches,
          score: hasMatches ? totalScore / this.chunks.length : 1
        };

        if (hasMatches && includeMatches) {
          result.indices = allIndices;
        }

        return result;
      }
    }]);

    return BitapSearch;
  }();

  var BaseMatch = /*#__PURE__*/function () {
    function BaseMatch(pattern) {
      _classCallCheck(this, BaseMatch);

      this.pattern = pattern;
    }

    _createClass(BaseMatch, [{
      key: "search",
      value: function
        /*text*/
      search() {}
    }], [{
      key: "isMultiMatch",
      value: function isMultiMatch(pattern) {
        return getMatch(pattern, this.multiRegex);
      }
    }, {
      key: "isSingleMatch",
      value: function isSingleMatch(pattern) {
        return getMatch(pattern, this.singleRegex);
      }
    }]);

    return BaseMatch;
  }();

  function getMatch(pattern, exp) {
    var matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }

  var ExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(ExactMatch, _BaseMatch);

    var _super = _createSuper(ExactMatch);

    function ExactMatch(pattern) {
      _classCallCheck(this, ExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(ExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = text === this.pattern;
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, this.pattern.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^="(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^=(.*)$/;
      }
    }]);

    return ExactMatch;
  }(BaseMatch);

  var InverseExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(InverseExactMatch, _BaseMatch);

    var _super = _createSuper(InverseExactMatch);

    function InverseExactMatch(pattern) {
      _classCallCheck(this, InverseExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(InverseExactMatch, [{
      key: "search",
      value: function search(text) {
        var index = text.indexOf(this.pattern);
        var isMatch = index === -1;
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'inverse-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^!"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^!(.*)$/;
      }
    }]);

    return InverseExactMatch;
  }(BaseMatch);

  var PrefixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(PrefixExactMatch, _BaseMatch);

    var _super = _createSuper(PrefixExactMatch);

    function PrefixExactMatch(pattern) {
      _classCallCheck(this, PrefixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(PrefixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = text.startsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, this.pattern.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'prefix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^\^"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^\^(.*)$/;
      }
    }]);

    return PrefixExactMatch;
  }(BaseMatch);

  var InversePrefixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(InversePrefixExactMatch, _BaseMatch);

    var _super = _createSuper(InversePrefixExactMatch);

    function InversePrefixExactMatch(pattern) {
      _classCallCheck(this, InversePrefixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(InversePrefixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = !text.startsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'inverse-prefix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^!\^"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^!\^(.*)$/;
      }
    }]);

    return InversePrefixExactMatch;
  }(BaseMatch);

  var SuffixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(SuffixExactMatch, _BaseMatch);

    var _super = _createSuper(SuffixExactMatch);

    function SuffixExactMatch(pattern) {
      _classCallCheck(this, SuffixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(SuffixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = text.endsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [text.length - this.pattern.length, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'suffix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^"(.*)"\$$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^(.*)\$$/;
      }
    }]);

    return SuffixExactMatch;
  }(BaseMatch);

  var InverseSuffixExactMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(InverseSuffixExactMatch, _BaseMatch);

    var _super = _createSuper(InverseSuffixExactMatch);

    function InverseSuffixExactMatch(pattern) {
      _classCallCheck(this, InverseSuffixExactMatch);

      return _super.call(this, pattern);
    }

    _createClass(InverseSuffixExactMatch, [{
      key: "search",
      value: function search(text) {
        var isMatch = !text.endsWith(this.pattern);
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'inverse-suffix-exact';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^!"(.*)"\$$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^!(.*)\$$/;
      }
    }]);

    return InverseSuffixExactMatch;
  }(BaseMatch);

  var FuzzyMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(FuzzyMatch, _BaseMatch);

    var _super = _createSuper(FuzzyMatch);

    function FuzzyMatch(pattern) {
      var _this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$location = _ref.location,
          location = _ref$location === void 0 ? Config.location : _ref$location,
          _ref$threshold = _ref.threshold,
          threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
          _ref$includeMatches = _ref.includeMatches,
          includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
          _ref$findAllMatches = _ref.findAllMatches,
          findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
          _ref$minMatchCharLeng = _ref.minMatchCharLength,
          minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
          _ref$isCaseSensitive = _ref.isCaseSensitive,
          isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive,
          _ref$ignoreLocation = _ref.ignoreLocation,
          ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;

      _classCallCheck(this, FuzzyMatch);

      _this = _super.call(this, pattern);
      _this._bitapSearch = new BitapSearch(pattern, {
        location: location,
        threshold: threshold,
        distance: distance,
        includeMatches: includeMatches,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength,
        isCaseSensitive: isCaseSensitive,
        ignoreLocation: ignoreLocation
      });
      return _this;
    }

    _createClass(FuzzyMatch, [{
      key: "search",
      value: function search(text) {
        return this._bitapSearch.searchIn(text);
      }
    }], [{
      key: "type",
      get: function get() {
        return 'fuzzy';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^(.*)$/;
      }
    }]);

    return FuzzyMatch;
  }(BaseMatch);

  var IncludeMatch = /*#__PURE__*/function (_BaseMatch) {
    _inherits(IncludeMatch, _BaseMatch);

    var _super = _createSuper(IncludeMatch);

    function IncludeMatch(pattern) {
      _classCallCheck(this, IncludeMatch);

      return _super.call(this, pattern);
    }

    _createClass(IncludeMatch, [{
      key: "search",
      value: function search(text) {
        var location = 0;
        var index;
        var indices = [];
        var patternLen = this.pattern.length; // Get all exact matches

        while ((index = text.indexOf(this.pattern, location)) > -1) {
          location = index + patternLen;
          indices.push([index, location - 1]);
        }

        var isMatch = !!indices.length;
        return {
          isMatch: isMatch,
          score: isMatch ? 0 : 1,
          indices: indices
        };
      }
    }], [{
      key: "type",
      get: function get() {
        return 'include';
      }
    }, {
      key: "multiRegex",
      get: function get() {
        return /^'"(.*)"$/;
      }
    }, {
      key: "singleRegex",
      get: function get() {
        return /^'(.*)$/;
      }
    }]);

    return IncludeMatch;
  }(BaseMatch);

  var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
  var searchersLen = searchers.length; // Regex to split by spaces, but keep anything in quotes together

  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = '|'; // Return a 2D array representation of the query, for simpler parsing.
  // Example:
  // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]

  function parseQuery(pattern) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return pattern.split(OR_TOKEN).map(function (item) {
      var query = item.trim().split(SPACE_RE).filter(function (item) {
        return item && !!item.trim();
      });
      var results = [];

      for (var i = 0, len = query.length; i < len; i += 1) {
        var queryItem = query[i]; // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)

        var found = false;
        var idx = -1;

        while (!found && ++idx < searchersLen) {
          var searcher = searchers[idx];
          var token = searcher.isMultiMatch(queryItem);

          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }

        if (found) {
          continue;
        } // 2. Handle single query matches (i.e, once that are *not* quoted)


        idx = -1;

        while (++idx < searchersLen) {
          var _searcher = searchers[idx];

          var _token = _searcher.isSingleMatch(queryItem);

          if (_token) {
            results.push(new _searcher(_token, options));
            break;
          }
        }
      }

      return results;
    });
  }

  // to a singl match

  var MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
  /**
   * Command-like searching
   * ======================
   *
   * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
   * search in a given text.
   *
   * Search syntax:
   *
   * | Token       | Match type                 | Description                            |
   * | ----------- | -------------------------- | -------------------------------------- |
   * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
   * | `=scheme`   | exact-match                | Items that are `scheme`                |
   * | `'python`   | include-match              | Items that include `python`            |
   * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
   * | `^java`     | prefix-exact-match         | Items that start with `java`           |
   * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
   * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
   * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
   *
   * A single pipe character acts as an OR operator. For example, the following
   * query matches entries that start with `core` and end with either`go`, `rb`,
   * or`py`.
   *
   * ```
   * ^core go$ | rb$ | py$
   * ```
   */

  var ExtendedSearch = /*#__PURE__*/function () {
    function ExtendedSearch(pattern) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isCaseSensitive = _ref.isCaseSensitive,
          isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive,
          _ref$includeMatches = _ref.includeMatches,
          includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
          _ref$minMatchCharLeng = _ref.minMatchCharLength,
          minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng,
          _ref$ignoreLocation = _ref.ignoreLocation,
          ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation,
          _ref$findAllMatches = _ref.findAllMatches,
          findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches,
          _ref$location = _ref.location,
          location = _ref$location === void 0 ? Config.location : _ref$location,
          _ref$threshold = _ref.threshold,
          threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance;

      _classCallCheck(this, ExtendedSearch);

      this.query = null;
      this.options = {
        isCaseSensitive: isCaseSensitive,
        includeMatches: includeMatches,
        minMatchCharLength: minMatchCharLength,
        findAllMatches: findAllMatches,
        ignoreLocation: ignoreLocation,
        location: location,
        threshold: threshold,
        distance: distance
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.query = parseQuery(this.pattern, this.options);
    }

    _createClass(ExtendedSearch, [{
      key: "searchIn",
      value: function searchIn(text) {
        var query = this.query;

        if (!query) {
          return {
            isMatch: false,
            score: 1
          };
        }

        var _this$options = this.options,
            includeMatches = _this$options.includeMatches,
            isCaseSensitive = _this$options.isCaseSensitive;
        text = isCaseSensitive ? text : text.toLowerCase();
        var numMatches = 0;
        var allIndices = [];
        var totalScore = 0; // ORs

        for (var i = 0, qLen = query.length; i < qLen; i += 1) {
          var searchers = query[i]; // Reset indices

          allIndices.length = 0;
          numMatches = 0; // ANDs

          for (var j = 0, pLen = searchers.length; j < pLen; j += 1) {
            var searcher = searchers[j];

            var _searcher$search = searcher.search(text),
                isMatch = _searcher$search.isMatch,
                indices = _searcher$search.indices,
                score = _searcher$search.score;

            if (isMatch) {
              numMatches += 1;
              totalScore += score;

              if (includeMatches) {
                var type = searcher.constructor.type;

                if (MultiMatchSet.has(type)) {
                  allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                } else {
                  allIndices.push(indices);
                }
              }
            } else {
              totalScore = 0;
              numMatches = 0;
              allIndices.length = 0;
              break;
            }
          } // OR condition, so if TRUE, return


          if (numMatches) {
            var result = {
              isMatch: true,
              score: totalScore / numMatches
            };

            if (includeMatches) {
              result.indices = allIndices;
            }

            return result;
          }
        } // Nothing was matched


        return {
          isMatch: false,
          score: 1
        };
      }
    }], [{
      key: "condition",
      value: function condition(_, options) {
        return options.useExtendedSearch;
      }
    }]);

    return ExtendedSearch;
  }();

  var registeredSearchers = [];
  function register() {
    registeredSearchers.push.apply(registeredSearchers, arguments);
  }
  function createSearcher(pattern, options) {
    for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
      var searcherClass = registeredSearchers[i];

      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }

    return new BitapSearch(pattern, options);
  }

  var LogicalOperator = {
    AND: '$and',
    OR: '$or'
  };
  var KeyType = {
    PATH: '$path',
    PATTERN: '$val'
  };

  var isExpression = function isExpression(query) {
    return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  };

  var isPath = function isPath(query) {
    return !!query[KeyType.PATH];
  };

  var isLeaf = function isLeaf(query) {
    return !isArray(query) && isObject(query) && !isExpression(query);
  };

  var convertToExplicit = function convertToExplicit(query) {
    return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function (key) {
      return _defineProperty({}, key, query[key]);
    }));
  }; // When `auto` is `true`, the parse function will infer and initialize and add
  // the appropriate `Searcher` instance


  function parse(query, options) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref3$auto = _ref3.auto,
        auto = _ref3$auto === void 0 ? true : _ref3$auto;

    var next = function next(query) {
      var keys = Object.keys(query);
      var isQueryPath = isPath(query);

      if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
        return next(convertToExplicit(query));
      }

      if (isLeaf(query)) {
        var key = isQueryPath ? query[KeyType.PATH] : keys[0];
        var pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }

        var obj = {
          keyId: createKeyId(key),
          pattern: pattern
        };

        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }

        return obj;
      }

      var node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach(function (key) {
        var value = query[key];

        if (isArray(value)) {
          value.forEach(function (item) {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };

    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }

    return next(query);
  }

  function computeScore(results, _ref) {
    var _ref$ignoreFieldNorm = _ref.ignoreFieldNorm,
        ignoreFieldNorm = _ref$ignoreFieldNorm === void 0 ? Config.ignoreFieldNorm : _ref$ignoreFieldNorm;
    results.forEach(function (result) {
      var totalScore = 1;
      result.matches.forEach(function (_ref2) {
        var key = _ref2.key,
            norm = _ref2.norm,
            score = _ref2.score;
        var weight = key ? key.weight : null;
        totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
      });
      result.score = totalScore;
    });
  }

  function transformMatches(result, data) {
    var matches = result.matches;
    data.matches = [];

    if (!isDefined(matches)) {
      return;
    }

    matches.forEach(function (match) {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }

      var indices = match.indices,
          value = match.value;
      var obj = {
        indices: indices,
        value: value
      };

      if (match.key) {
        obj.key = match.key.src;
      }

      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }

      data.matches.push(obj);
    });
  }

  function transformScore(result, data) {
    data.score = result.score;
  }

  function format(results, docs) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === void 0 ? Config.includeScore : _ref$includeScore;

    var transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map(function (result) {
      var idx = result.idx;
      var data = {
        item: docs[idx],
        refIndex: idx
      };

      if (transformers.length) {
        transformers.forEach(function (transformer) {
          transformer(result, data);
        });
      }

      return data;
    });
  }

  var Fuse$1 = /*#__PURE__*/function () {
    function Fuse(docs) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var index = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, Fuse);

      this.options = _objectSpread2(_objectSpread2({}, Config), options);

      if (this.options.useExtendedSearch && !true) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }

      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index);
    }

    _createClass(Fuse, [{
      key: "setCollection",
      value: function setCollection(docs, index) {
        this._docs = docs;

        if (index && !(index instanceof FuseIndex)) {
          throw new Error(INCORRECT_INDEX_TYPE);
        }

        this._myIndex = index || createIndex(this.options.keys, this._docs, {
          getFn: this.options.getFn,
          fieldNormWeight: this.options.fieldNormWeight
        });
      }
    }, {
      key: "add",
      value: function add(doc) {
        if (!isDefined(doc)) {
          return;
        }

        this._docs.push(doc);

        this._myIndex.add(doc);
      }
    }, {
      key: "remove",
      value: function remove() {
        var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function
          /* doc, idx */
        () {
          return false;
        };
        var results = [];

        for (var i = 0, len = this._docs.length; i < len; i += 1) {
          var doc = this._docs[i];

          if (predicate(doc, i)) {
            this.removeAt(i);
            i -= 1;
            len -= 1;
            results.push(doc);
          }
        }

        return results;
      }
    }, {
      key: "removeAt",
      value: function removeAt(idx) {
        this._docs.splice(idx, 1);

        this._myIndex.removeAt(idx);
      }
    }, {
      key: "getIndex",
      value: function getIndex() {
        return this._myIndex;
      }
    }, {
      key: "search",
      value: function search(query) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$limit = _ref.limit,
            limit = _ref$limit === void 0 ? -1 : _ref$limit;

        var _this$options = this.options,
            includeMatches = _this$options.includeMatches,
            includeScore = _this$options.includeScore,
            shouldSort = _this$options.shouldSort,
            sortFn = _this$options.sortFn,
            ignoreFieldNorm = _this$options.ignoreFieldNorm;
        var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
        computeScore(results, {
          ignoreFieldNorm: ignoreFieldNorm
        });

        if (shouldSort) {
          results.sort(sortFn);
        }

        if (isNumber(limit) && limit > -1) {
          results = results.slice(0, limit);
        }

        return format(results, this._docs, {
          includeMatches: includeMatches,
          includeScore: includeScore
        });
      }
    }, {
      key: "_searchStringList",
      value: function _searchStringList(query) {
        var searcher = createSearcher(query, this.options);
        var records = this._myIndex.records;
        var results = []; // Iterate over every string in the index

        records.forEach(function (_ref2) {
          var text = _ref2.v,
              idx = _ref2.i,
              norm = _ref2.n;

          if (!isDefined(text)) {
            return;
          }

          var _searcher$searchIn = searcher.searchIn(text),
              isMatch = _searcher$searchIn.isMatch,
              score = _searcher$searchIn.score,
              indices = _searcher$searchIn.indices;

          if (isMatch) {
            results.push({
              item: text,
              idx: idx,
              matches: [{
                score: score,
                value: text,
                norm: norm,
                indices: indices
              }]
            });
          }
        });
        return results;
      }
    }, {
      key: "_searchLogical",
      value: function _searchLogical(query) {
        var _this = this;

        var expression = parse(query, this.options);

        var evaluate = function evaluate(node, item, idx) {
          if (!node.children) {
            var keyId = node.keyId,
                searcher = node.searcher;

            var matches = _this._findMatches({
              key: _this._keyStore.get(keyId),
              value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
              searcher: searcher
            });

            if (matches && matches.length) {
              return [{
                idx: idx,
                item: item,
                matches: matches
              }];
            }

            return [];
          }

          var res = [];

          for (var i = 0, len = node.children.length; i < len; i += 1) {
            var child = node.children[i];
            var result = evaluate(child, item, idx);

            if (result.length) {
              res.push.apply(res, _toConsumableArray(result));
            } else if (node.operator === LogicalOperator.AND) {
              return [];
            }
          }

          return res;
        };

        var records = this._myIndex.records;
        var resultMap = {};
        var results = [];
        records.forEach(function (_ref3) {
          var item = _ref3.$,
              idx = _ref3.i;

          if (isDefined(item)) {
            var expResults = evaluate(expression, item, idx);

            if (expResults.length) {
              // Dedupe when adding
              if (!resultMap[idx]) {
                resultMap[idx] = {
                  idx: idx,
                  item: item,
                  matches: []
                };
                results.push(resultMap[idx]);
              }

              expResults.forEach(function (_ref4) {
                var _resultMap$idx$matche;

                var matches = _ref4.matches;

                (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
              });
            }
          }
        });
        return results;
      }
    }, {
      key: "_searchObjectList",
      value: function _searchObjectList(query) {
        var _this2 = this;

        var searcher = createSearcher(query, this.options);
        var _this$_myIndex = this._myIndex,
            keys = _this$_myIndex.keys,
            records = _this$_myIndex.records;
        var results = []; // List is Array<Object>

        records.forEach(function (_ref5) {
          var item = _ref5.$,
              idx = _ref5.i;

          if (!isDefined(item)) {
            return;
          }

          var matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

          keys.forEach(function (key, keyIndex) {
            matches.push.apply(matches, _toConsumableArray(_this2._findMatches({
              key: key,
              value: item[keyIndex],
              searcher: searcher
            })));
          });

          if (matches.length) {
            results.push({
              idx: idx,
              item: item,
              matches: matches
            });
          }
        });
        return results;
      }
    }, {
      key: "_findMatches",
      value: function _findMatches(_ref6) {
        var key = _ref6.key,
            value = _ref6.value,
            searcher = _ref6.searcher;

        if (!isDefined(value)) {
          return [];
        }

        var matches = [];

        if (isArray(value)) {
          value.forEach(function (_ref7) {
            var text = _ref7.v,
                idx = _ref7.i,
                norm = _ref7.n;

            if (!isDefined(text)) {
              return;
            }

            var _searcher$searchIn2 = searcher.searchIn(text),
                isMatch = _searcher$searchIn2.isMatch,
                score = _searcher$searchIn2.score,
                indices = _searcher$searchIn2.indices;

            if (isMatch) {
              matches.push({
                score: score,
                key: key,
                value: text,
                idx: idx,
                norm: norm,
                indices: indices
              });
            }
          });
        } else {
          var text = value.v,
              norm = value.n;

          var _searcher$searchIn3 = searcher.searchIn(text),
              isMatch = _searcher$searchIn3.isMatch,
              score = _searcher$searchIn3.score,
              indices = _searcher$searchIn3.indices;

          if (isMatch) {
            matches.push({
              score: score,
              key: key,
              value: text,
              norm: norm,
              indices: indices
            });
          }
        }

        return matches;
      }
    }]);

    return Fuse;
  }();

  Fuse$1.version = '6.6.2';
  Fuse$1.createIndex = createIndex;
  Fuse$1.parseIndex = parseIndex;
  Fuse$1.config = Config;

  {
    Fuse$1.parseQuery = parse;
  }

  {
    register(ExtendedSearch);
  }

  var Fuse = Fuse$1;

  return Fuse;

}));

;
/*!***************************************************
* mark.js v9.0.0
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mark=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=
/* */
function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=o,this.iframesTimeout=i}return r(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach(function(t){var n=e.filter(function(e){return e.contains(t)}).length>0;-1!==e.indexOf(t)||n||e.push(t)}),e}},{key:"getIframeContents",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};try{var o=e.contentWindow;if(n=o.document,!o||!n)throw new Error("iframe inaccessible")}catch(e){r()}n&&t(n)}},{key:"isIframeBlank",value:function(e){var t="about:blank",n=e.getAttribute("src").trim();return e.contentWindow.location.href===t&&n!==t&&n}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,o=!1,i=null,a=function a(){if(!o){o=!0,clearTimeout(i);try{r.isIframeBlank(e)||(e.removeEventListener("load",a),r.getIframeContents(e,t,n))}catch(e){n()}}};e.addEventListener("load",a),i=setTimeout(a,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(e){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,function(){return!0},function(e){r++,n.waitForIframes(e.querySelector("html"),function(){--r||t()})},function(e){e||t()})}},{key:"forEachIframe",value:function(t,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=t.querySelectorAll("iframe"),s=a.length,c=0;a=Array.prototype.slice.call(a);var u=function(){--s<=0&&i(c)};s||u(),a.forEach(function(t){e.matches(t,o.exclude)?u():o.onIframeReady(t,function(e){n(t)&&(c++,r(e)),u()},u)})}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:null===t?e.nextNode():e.nextNode()&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,n,r){var o=!1,i=!1;return r.forEach(function(e,t){e.val===n&&(o=t,i=e.handled)}),this.compareNodeIframe(e,t,n)?(!1!==o||i?!1===o||i||(r[o].handled=!0):r.push({val:n,handled:!0}),!0):(!1===o&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var o=this;e.forEach(function(e){e.handled||o.getIframeContents(e.val,function(e){o.createInstanceOnIframe(e).forEachNode(t,n,r)})})}},{key:"iterateThroughNodes",value:function(e,t,n,r,o){for(var i,a,s,c=this,u=this.createIterator(t,e,r),l=[],h=[];s=void 0,s=c.getIteratorNode(u),a=s.prevNode,i=s.node;)this.iframes&&this.forEachIframe(t,function(e){return c.checkIframeFilter(i,a,e,l)},function(t){c.createInstanceOnIframe(t).forEachNode(e,function(e){return h.push(e)},r)}),h.push(i);h.forEach(function(e){n(e)}),this.iframes&&this.handleOpenIframes(l,e,n,r),o()}},{key:"forEachNode",value:function(e,t,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=this.getContexts(),a=i.length;a||o(),i.forEach(function(i){var s=function(){r.iterateThroughNodes(e,i,t,n,function(){--a<=0&&o()})};r.iframes?r.waitForIframes(i,s):s()})}}],[{key:"matches",value:function(e,t){var n="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var o=!1;return n.every(function(t){return!r.call(e,t)||(o=!0,!1)}),o}return!1}}]),e}(),a=
/* */
function(){function e(n){t(this,e),this.opt=o({},{diacritics:!0,synonyms:{},accuracy:"partially",caseSensitive:!1,ignoreJoiners:!1,ignorePunctuation:[],wildcards:"disabled"},n)}return r(e,[{key:"create",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e),new RegExp(e,"gm".concat(this.opt.caseSensitive?"":"i"))}},{key:"sortByLength",value:function(e){return e.sort(function(e,t){return e.length===t.length?e>t?1:-1:t.length-e.length})}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createSynonymsRegExp",value:function(e){var t=this,n=this.opt.synonyms,r=this.opt.caseSensitive?"":"i",o=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var i in n)if(n.hasOwnProperty(i)){var a=Array.isArray(n[i])?n[i]:[n[i]];a.unshift(i),(a=this.sortByLength(a).map(function(e){return"disabled"!==t.opt.wildcards&&(e=t.setupWildcardsRegExp(e)),e=t.escapeStr(e)}).filter(function(e){return""!==e})).length>1&&(e=e.replace(new RegExp("(".concat(a.map(function(e){return t.escapeStr(e)}).join("|"),")"),"gm".concat(r)),o+"(".concat(a.map(function(e){return t.processSynonyms(e)}).join("|"),")")+o))}return e}},{key:"processSynonyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,function(e){return"\\"===e.charAt(0)?"?":""})).replace(/(?:\\)*\*/g,function(e){return"\\"===e.charAt(0)?"*":""})}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("[".concat(t.join(""),"]*")):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach(function(o){n.every(function(n){if(-1!==n.indexOf(o)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("[".concat(n,"]"),"gm".concat(t)),"[".concat(n,"]")),r.push(n)}return!0})}),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,o="string"==typeof n?[]:n.limiters,i="";switch(o.forEach(function(e){i+="|".concat(t.escapeStr(e))}),r){case"partially":default:return"()(".concat(e,")");case"complementary":return i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")),"()([^".concat(i,"]*").concat(e,"[^").concat(i,"]*)");case"exactly":return"(^|\\s".concat(i,")(").concat(e,")(?=$|\\s").concat(i,")")}}}]),e}(),s=
/* */
function(){function n(e){t(this,n),this.ctx=e,this.ie=!1;var r=window.navigator.userAgent;(r.indexOf("MSIE")>-1||r.indexOf("Trident")>-1)&&(this.ie=!0)}return r(n,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===e(r)&&"function"==typeof r[n]&&r[n]("mark.js: ".concat(t))}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach(function(e){t.opt.separateWordSearch?e.split(" ").forEach(function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)}):e.trim()&&-1===n.indexOf(e)&&n.push(e)}),{keywords:n.sort(function(e,t){return t.length-e.length}),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort(function(e,t){return e.start-t.start}).forEach(function(e){var o=t.callNoMatchOnInvalidRanges(e,r),i=o.start,a=o.end;o.valid&&(e.start=i,e.length=a-i,n.push(e),r=a)}),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n,r,o=!1;return e&&void 0!==e.start?(r=(n=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?o=!0:(this.log("Ignoring invalid or overlapping range: "+"".concat(JSON.stringify(e))),this.opt.noMatch(e))):(this.log("Ignoring invalid range: ".concat(JSON.stringify(e))),this.opt.noMatch(e)),{start:n,end:r,valid:o}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r,o=!0,i=n.length,a=t-i,s=parseInt(e.start,10)-a;return(r=(s=s>i?i:s)+parseInt(e.length,10))>i&&(r=i,this.log("End range automatically set to the max value of ".concat(i))),s<0||r-s<0||s>i||r>i?(o=!1,this.log("Invalid range: ".concat(JSON.stringify(e))),this.opt.noMatch(e)):""===n.substring(s,r).replace(/\s+/g,"")&&(o=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:o}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})},function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){e({value:n,nodes:r})})}},{key:"matchesExclude",value:function(e){return i.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",o=e.splitText(t),i=o.splitText(n-t),a=document.createElement(r);return a.setAttribute("data-markjs","true"),this.opt.className&&a.setAttribute("class",this.opt.className),a.textContent=o.textContent,o.parentNode.replaceChild(a,o),i}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,o){var i=this;e.nodes.every(function(a,s){var c=e.nodes[s+1];if(void 0===c||c.start>t){if(!r(a.node))return!1;var u=t-a.start,l=(n>a.end?a.end:n)-a.start,h=e.value.substr(0,a.start),f=e.value.substr(l+a.start);if(a.node=i.wrapRangeInTextNode(a.node,u,l),e.value=h+f,e.nodes.forEach(function(t,n){n>=s&&(e.nodes[n].start>0&&n!==s&&(e.nodes[n].start-=l),e.nodes[n].end-=l)}),n-=l,o(a.node.previousSibling,a.start),!(n>a.end))return!1;t=a.end}return!0})}},{key:"wrapGroups",value:function(e,t,n,r){return r((e=this.wrapRangeInTextNode(e,t,t+n)).previousSibling),e}},{key:"separateGroups",value:function(e,t,n,r,o){for(var i=t.length,a=1;a<i;a++){var s=e.textContent.indexOf(t[a]);t[a]&&s>-1&&r(t[a],e)&&(e=this.wrapGroups(e,s,t[a].length,o))}return e}},{key:"wrapMatches",value:function(e,t,n,r,o){var i=this,a=0===t?0:t+1;this.getTextNodes(function(t){t.nodes.forEach(function(t){var o;for(t=t.node;null!==(o=e.exec(t.textContent))&&""!==o[a];){if(i.opt.separateGroups)t=i.separateGroups(t,o,a,n,r);else{if(!n(o[a],t))continue;var s=o.index;if(0!==a)for(var c=1;c<a;c++)s+=o[c].length;t=i.wrapGroups(t,s,o[a].length,r)}e.lastIndex=0}}),o()})}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,o){var i=this,a=0===t?0:t+1;this.getTextNodes(function(t){for(var s;null!==(s=e.exec(t.value))&&""!==s[a];){var c=s.index;if(0!==a)for(var u=1;u<a;u++)c+=s[u].length;var l=c+s[a].length;i.wrapRangeInMappedTextNode(t,c,l,function(e){return n(s[a],e)},function(t,n){e.lastIndex=n,r(t)})}o()})}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var o=this;this.getTextNodes(function(i){var a=i.value.length;e.forEach(function(e,r){var s=o.checkWhitespaceRanges(e,a,i.value),c=s.start,u=s.end;s.valid&&o.wrapRangeInMappedTextNode(i,c,u,function(n){return t(n,e,i.value.substring(c,u),r)},function(t){n(t,e)})}),r()})}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'.concat(e,'"'));var r=0,o="wrapMatches";this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),this[o](e,this.opt.ignoreGroups,function(e,t){return n.opt.filter(t,e,r)},function(e){r++,n.opt.each(e)},function(){0===r&&n.opt.noMatch(e),n.opt.done(r)})}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,o="wrapMatches",i=this.getSeparatedKeywords("string"==typeof e?[e]:e),s=i.keywords,c=i.length;this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),0===c?this.opt.done(r):function e(t){var i=new a(n.opt).create(t),u=0;n.log('Searching with expression "'.concat(i,'"')),n[o](i,1,function(e,o){return n.opt.filter(o,t,r,u)},function(e){u++,r++,n.opt.each(e)},function(){0===u&&n.opt.noMatch(t),s[c-1]===t?n.opt.done(r):e(s[s.indexOf(t)+1])})}(s[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,o=this.checkRanges(e);o&&o.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(o)),this.wrapRangeFromIndex(o,function(e,t,r,o){return n.opt.filter(e,t,r,o)},function(e,t){r++,n.opt.each(e,t)},function(){n.opt.done(r)})):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+=".".concat(this.opt.className)),this.log('Removal selector "'.concat(n,'"')),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(e){t.unwrapMatches(e)},function(e){var r=i.matches(e,n),o=t.matchesExclude(e);return!r||o?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(e){this._opt=o({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,acrossElements:!1,ignoreGroups:0,each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new i(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),n}();return function(e){var t=this,n=new s(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}});
