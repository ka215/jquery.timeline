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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/timeline.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/core-js/es/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! ../modules/es.symbol.async-iterator */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
__webpack_require__(/*! ../modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! ../modules/es.symbol.has-instance */ "./node_modules/core-js/modules/es.symbol.has-instance.js");
__webpack_require__(/*! ../modules/es.symbol.is-concat-spreadable */ "./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js");
__webpack_require__(/*! ../modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! ../modules/es.symbol.match */ "./node_modules/core-js/modules/es.symbol.match.js");
__webpack_require__(/*! ../modules/es.symbol.match-all */ "./node_modules/core-js/modules/es.symbol.match-all.js");
__webpack_require__(/*! ../modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
__webpack_require__(/*! ../modules/es.symbol.search */ "./node_modules/core-js/modules/es.symbol.search.js");
__webpack_require__(/*! ../modules/es.symbol.species */ "./node_modules/core-js/modules/es.symbol.species.js");
__webpack_require__(/*! ../modules/es.symbol.split */ "./node_modules/core-js/modules/es.symbol.split.js");
__webpack_require__(/*! ../modules/es.symbol.to-primitive */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! ../modules/es.symbol.to-string-tag */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! ../modules/es.symbol.unscopables */ "./node_modules/core-js/modules/es.symbol.unscopables.js");
__webpack_require__(/*! ../modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! ../modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! ../modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! ../modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! ../modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
__webpack_require__(/*! ../modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
__webpack_require__(/*! ../modules/es.object.from-entries */ "./node_modules/core-js/modules/es.object.from-entries.js");
__webpack_require__(/*! ../modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! ../modules/es.object.get-own-property-names */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es.object.is */ "./node_modules/core-js/modules/es.object.is.js");
__webpack_require__(/*! ../modules/es.object.is-extensible */ "./node_modules/core-js/modules/es.object.is-extensible.js");
__webpack_require__(/*! ../modules/es.object.is-frozen */ "./node_modules/core-js/modules/es.object.is-frozen.js");
__webpack_require__(/*! ../modules/es.object.is-sealed */ "./node_modules/core-js/modules/es.object.is-sealed.js");
__webpack_require__(/*! ../modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! ../modules/es.object.prevent-extensions */ "./node_modules/core-js/modules/es.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es.object.seal */ "./node_modules/core-js/modules/es.object.seal.js");
__webpack_require__(/*! ../modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! ../modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! ../modules/es.object.define-getter */ "./node_modules/core-js/modules/es.object.define-getter.js");
__webpack_require__(/*! ../modules/es.object.define-setter */ "./node_modules/core-js/modules/es.object.define-setter.js");
__webpack_require__(/*! ../modules/es.object.lookup-getter */ "./node_modules/core-js/modules/es.object.lookup-getter.js");
__webpack_require__(/*! ../modules/es.object.lookup-setter */ "./node_modules/core-js/modules/es.object.lookup-setter.js");
__webpack_require__(/*! ../modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! ../modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! ../modules/es.function.has-instance */ "./node_modules/core-js/modules/es.function.has-instance.js");
__webpack_require__(/*! ../modules/es.global-this */ "./node_modules/core-js/modules/es.global-this.js");
__webpack_require__(/*! ../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! ../modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! ../modules/es.array.of */ "./node_modules/core-js/modules/es.array.of.js");
__webpack_require__(/*! ../modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! ../modules/es.array.copy-within */ "./node_modules/core-js/modules/es.array.copy-within.js");
__webpack_require__(/*! ../modules/es.array.every */ "./node_modules/core-js/modules/es.array.every.js");
__webpack_require__(/*! ../modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
__webpack_require__(/*! ../modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! ../modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! ../modules/es.array.find-index */ "./node_modules/core-js/modules/es.array.find-index.js");
__webpack_require__(/*! ../modules/es.array.flat */ "./node_modules/core-js/modules/es.array.flat.js");
__webpack_require__(/*! ../modules/es.array.flat-map */ "./node_modules/core-js/modules/es.array.flat-map.js");
__webpack_require__(/*! ../modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! ../modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! ../modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! ../modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! ../modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
__webpack_require__(/*! ../modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! ../modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
__webpack_require__(/*! ../modules/es.array.reduce-right */ "./node_modules/core-js/modules/es.array.reduce-right.js");
__webpack_require__(/*! ../modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! ../modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! ../modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! ../modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! ../modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! ../modules/es.array.species */ "./node_modules/core-js/modules/es.array.species.js");
__webpack_require__(/*! ../modules/es.array.unscopables.flat */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");
__webpack_require__(/*! ../modules/es.array.unscopables.flat-map */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! ../modules/es.string.from-code-point */ "./node_modules/core-js/modules/es.string.from-code-point.js");
__webpack_require__(/*! ../modules/es.string.raw */ "./node_modules/core-js/modules/es.string.raw.js");
__webpack_require__(/*! ../modules/es.string.code-point-at */ "./node_modules/core-js/modules/es.string.code-point-at.js");
__webpack_require__(/*! ../modules/es.string.ends-with */ "./node_modules/core-js/modules/es.string.ends-with.js");
__webpack_require__(/*! ../modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! ../modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! ../modules/es.string.match-all */ "./node_modules/core-js/modules/es.string.match-all.js");
__webpack_require__(/*! ../modules/es.string.pad-end */ "./node_modules/core-js/modules/es.string.pad-end.js");
__webpack_require__(/*! ../modules/es.string.pad-start */ "./node_modules/core-js/modules/es.string.pad-start.js");
__webpack_require__(/*! ../modules/es.string.repeat */ "./node_modules/core-js/modules/es.string.repeat.js");
__webpack_require__(/*! ../modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! ../modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
__webpack_require__(/*! ../modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
__webpack_require__(/*! ../modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
__webpack_require__(/*! ../modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! ../modules/es.string.trim-start */ "./node_modules/core-js/modules/es.string.trim-start.js");
__webpack_require__(/*! ../modules/es.string.trim-end */ "./node_modules/core-js/modules/es.string.trim-end.js");
__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../modules/es.string.anchor */ "./node_modules/core-js/modules/es.string.anchor.js");
__webpack_require__(/*! ../modules/es.string.big */ "./node_modules/core-js/modules/es.string.big.js");
__webpack_require__(/*! ../modules/es.string.blink */ "./node_modules/core-js/modules/es.string.blink.js");
__webpack_require__(/*! ../modules/es.string.bold */ "./node_modules/core-js/modules/es.string.bold.js");
__webpack_require__(/*! ../modules/es.string.fixed */ "./node_modules/core-js/modules/es.string.fixed.js");
__webpack_require__(/*! ../modules/es.string.fontcolor */ "./node_modules/core-js/modules/es.string.fontcolor.js");
__webpack_require__(/*! ../modules/es.string.fontsize */ "./node_modules/core-js/modules/es.string.fontsize.js");
__webpack_require__(/*! ../modules/es.string.italics */ "./node_modules/core-js/modules/es.string.italics.js");
__webpack_require__(/*! ../modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
__webpack_require__(/*! ../modules/es.string.small */ "./node_modules/core-js/modules/es.string.small.js");
__webpack_require__(/*! ../modules/es.string.strike */ "./node_modules/core-js/modules/es.string.strike.js");
__webpack_require__(/*! ../modules/es.string.sub */ "./node_modules/core-js/modules/es.string.sub.js");
__webpack_require__(/*! ../modules/es.string.sup */ "./node_modules/core-js/modules/es.string.sup.js");
__webpack_require__(/*! ../modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../modules/es.regexp.flags */ "./node_modules/core-js/modules/es.regexp.flags.js");
__webpack_require__(/*! ../modules/es.regexp.sticky */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! ../modules/es.regexp.test */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! ../modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! ../modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! ../modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! ../modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! ../modules/es.number.epsilon */ "./node_modules/core-js/modules/es.number.epsilon.js");
__webpack_require__(/*! ../modules/es.number.is-finite */ "./node_modules/core-js/modules/es.number.is-finite.js");
__webpack_require__(/*! ../modules/es.number.is-integer */ "./node_modules/core-js/modules/es.number.is-integer.js");
__webpack_require__(/*! ../modules/es.number.is-nan */ "./node_modules/core-js/modules/es.number.is-nan.js");
__webpack_require__(/*! ../modules/es.number.is-safe-integer */ "./node_modules/core-js/modules/es.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es.number.max-safe-integer */ "./node_modules/core-js/modules/es.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es.number.min-safe-integer */ "./node_modules/core-js/modules/es.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es.number.parse-float */ "./node_modules/core-js/modules/es.number.parse-float.js");
__webpack_require__(/*! ../modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
__webpack_require__(/*! ../modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
__webpack_require__(/*! ../modules/es.number.to-precision */ "./node_modules/core-js/modules/es.number.to-precision.js");
__webpack_require__(/*! ../modules/es.math.acosh */ "./node_modules/core-js/modules/es.math.acosh.js");
__webpack_require__(/*! ../modules/es.math.asinh */ "./node_modules/core-js/modules/es.math.asinh.js");
__webpack_require__(/*! ../modules/es.math.atanh */ "./node_modules/core-js/modules/es.math.atanh.js");
__webpack_require__(/*! ../modules/es.math.cbrt */ "./node_modules/core-js/modules/es.math.cbrt.js");
__webpack_require__(/*! ../modules/es.math.clz32 */ "./node_modules/core-js/modules/es.math.clz32.js");
__webpack_require__(/*! ../modules/es.math.cosh */ "./node_modules/core-js/modules/es.math.cosh.js");
__webpack_require__(/*! ../modules/es.math.expm1 */ "./node_modules/core-js/modules/es.math.expm1.js");
__webpack_require__(/*! ../modules/es.math.fround */ "./node_modules/core-js/modules/es.math.fround.js");
__webpack_require__(/*! ../modules/es.math.hypot */ "./node_modules/core-js/modules/es.math.hypot.js");
__webpack_require__(/*! ../modules/es.math.imul */ "./node_modules/core-js/modules/es.math.imul.js");
__webpack_require__(/*! ../modules/es.math.log10 */ "./node_modules/core-js/modules/es.math.log10.js");
__webpack_require__(/*! ../modules/es.math.log1p */ "./node_modules/core-js/modules/es.math.log1p.js");
__webpack_require__(/*! ../modules/es.math.log2 */ "./node_modules/core-js/modules/es.math.log2.js");
__webpack_require__(/*! ../modules/es.math.sign */ "./node_modules/core-js/modules/es.math.sign.js");
__webpack_require__(/*! ../modules/es.math.sinh */ "./node_modules/core-js/modules/es.math.sinh.js");
__webpack_require__(/*! ../modules/es.math.tanh */ "./node_modules/core-js/modules/es.math.tanh.js");
__webpack_require__(/*! ../modules/es.math.to-string-tag */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! ../modules/es.math.trunc */ "./node_modules/core-js/modules/es.math.trunc.js");
__webpack_require__(/*! ../modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! ../modules/es.date.to-json */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! ../modules/es.date.to-iso-string */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! ../modules/es.date.to-primitive */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! ../modules/es.json.stringify */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! ../modules/es.json.to-string-tag */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! ../modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! ../modules/es.promise.all-settled */ "./node_modules/core-js/modules/es.promise.all-settled.js");
__webpack_require__(/*! ../modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
__webpack_require__(/*! ../modules/es.map */ "./node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! ../modules/es.set */ "./node_modules/core-js/modules/es.set.js");
__webpack_require__(/*! ../modules/es.weak-map */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! ../modules/es.weak-set */ "./node_modules/core-js/modules/es.weak-set.js");
__webpack_require__(/*! ../modules/es.array-buffer.constructor */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
__webpack_require__(/*! ../modules/es.array-buffer.is-view */ "./node_modules/core-js/modules/es.array-buffer.is-view.js");
__webpack_require__(/*! ../modules/es.array-buffer.slice */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
__webpack_require__(/*! ../modules/es.data-view */ "./node_modules/core-js/modules/es.data-view.js");
__webpack_require__(/*! ../modules/es.typed-array.int8-array */ "./node_modules/core-js/modules/es.typed-array.int8-array.js");
__webpack_require__(/*! ../modules/es.typed-array.uint8-array */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
__webpack_require__(/*! ../modules/es.typed-array.uint8-clamped-array */ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es.typed-array.int16-array */ "./node_modules/core-js/modules/es.typed-array.int16-array.js");
__webpack_require__(/*! ../modules/es.typed-array.uint16-array */ "./node_modules/core-js/modules/es.typed-array.uint16-array.js");
__webpack_require__(/*! ../modules/es.typed-array.int32-array */ "./node_modules/core-js/modules/es.typed-array.int32-array.js");
__webpack_require__(/*! ../modules/es.typed-array.uint32-array */ "./node_modules/core-js/modules/es.typed-array.uint32-array.js");
__webpack_require__(/*! ../modules/es.typed-array.float32-array */ "./node_modules/core-js/modules/es.typed-array.float32-array.js");
__webpack_require__(/*! ../modules/es.typed-array.float64-array */ "./node_modules/core-js/modules/es.typed-array.float64-array.js");
__webpack_require__(/*! ../modules/es.typed-array.from */ "./node_modules/core-js/modules/es.typed-array.from.js");
__webpack_require__(/*! ../modules/es.typed-array.of */ "./node_modules/core-js/modules/es.typed-array.of.js");
__webpack_require__(/*! ../modules/es.typed-array.copy-within */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
__webpack_require__(/*! ../modules/es.typed-array.every */ "./node_modules/core-js/modules/es.typed-array.every.js");
__webpack_require__(/*! ../modules/es.typed-array.fill */ "./node_modules/core-js/modules/es.typed-array.fill.js");
__webpack_require__(/*! ../modules/es.typed-array.filter */ "./node_modules/core-js/modules/es.typed-array.filter.js");
__webpack_require__(/*! ../modules/es.typed-array.find */ "./node_modules/core-js/modules/es.typed-array.find.js");
__webpack_require__(/*! ../modules/es.typed-array.find-index */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
__webpack_require__(/*! ../modules/es.typed-array.for-each */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
__webpack_require__(/*! ../modules/es.typed-array.includes */ "./node_modules/core-js/modules/es.typed-array.includes.js");
__webpack_require__(/*! ../modules/es.typed-array.index-of */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
__webpack_require__(/*! ../modules/es.typed-array.iterator */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
__webpack_require__(/*! ../modules/es.typed-array.join */ "./node_modules/core-js/modules/es.typed-array.join.js");
__webpack_require__(/*! ../modules/es.typed-array.last-index-of */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
__webpack_require__(/*! ../modules/es.typed-array.map */ "./node_modules/core-js/modules/es.typed-array.map.js");
__webpack_require__(/*! ../modules/es.typed-array.reduce */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
__webpack_require__(/*! ../modules/es.typed-array.reduce-right */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
__webpack_require__(/*! ../modules/es.typed-array.reverse */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
__webpack_require__(/*! ../modules/es.typed-array.set */ "./node_modules/core-js/modules/es.typed-array.set.js");
__webpack_require__(/*! ../modules/es.typed-array.slice */ "./node_modules/core-js/modules/es.typed-array.slice.js");
__webpack_require__(/*! ../modules/es.typed-array.some */ "./node_modules/core-js/modules/es.typed-array.some.js");
__webpack_require__(/*! ../modules/es.typed-array.sort */ "./node_modules/core-js/modules/es.typed-array.sort.js");
__webpack_require__(/*! ../modules/es.typed-array.subarray */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
__webpack_require__(/*! ../modules/es.typed-array.to-locale-string */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
__webpack_require__(/*! ../modules/es.typed-array.to-string */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
__webpack_require__(/*! ../modules/es.reflect.apply */ "./node_modules/core-js/modules/es.reflect.apply.js");
__webpack_require__(/*! ../modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__(/*! ../modules/es.reflect.define-property */ "./node_modules/core-js/modules/es.reflect.define-property.js");
__webpack_require__(/*! ../modules/es.reflect.delete-property */ "./node_modules/core-js/modules/es.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es.reflect.get */ "./node_modules/core-js/modules/es.reflect.get.js");
__webpack_require__(/*! ../modules/es.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es.reflect.get-prototype-of */ "./node_modules/core-js/modules/es.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es.reflect.has */ "./node_modules/core-js/modules/es.reflect.has.js");
__webpack_require__(/*! ../modules/es.reflect.is-extensible */ "./node_modules/core-js/modules/es.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es.reflect.own-keys */ "./node_modules/core-js/modules/es.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es.reflect.prevent-extensions */ "./node_modules/core-js/modules/es.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es.reflect.set */ "./node_modules/core-js/modules/es.reflect.set.js");
__webpack_require__(/*! ../modules/es.reflect.set-prototype-of */ "./node_modules/core-js/modules/es.reflect.set-prototype-of.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-native.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-native.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ "./node_modules/core-js/internals/array-buffer-native.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ "./node_modules/core-js/internals/array-buffer-native.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ "./node_modules/core-js/internals/ieee754.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var arrayFill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-copy-within.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-weak.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/collection-weak.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var getWeakData = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").getWeakData;
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js");
var $has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/date-to-iso-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-iso-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var padStart = __webpack_require__(/*! ../internals/string-pad */ "./node_modules/core-js/internals/string-pad.js").start;

var abs = Math.abs;
var DatePrototype = Date.prototype;
var getTime = DatePrototype.getTime;
var nativeDateToISOString = DatePrototype.toISOString;

// `Date.prototype.toISOString` method implementation
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var date = this;
  var year = date.getUTCFullYear();
  var milliseconds = date.getUTCMilliseconds();
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
    '-' + padStart(date.getUTCDate(), 2, 0) +
    'T' + padStart(date.getUTCHours(), 2, 0) +
    ':' + padStart(date.getUTCMinutes(), 2, 0) +
    ':' + padStart(date.getUTCSeconds(), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),

/***/ "./node_modules/core-js/internals/date-to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

module.exports = function (hint) {
  if (hint !== 'string' && hint !== 'number' && hint !== 'default') {
    throw TypeError('Incorrect hint');
  } return toPrimitive(anObject(this), hint !== 'number');
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/ieee754.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/is-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.github.io/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/math-expm1.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-expm1.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var nativeExpm1 = Math.expm1;
var exp = Math.exp;

// `Math.expm1` method implementation
// https://tc39.github.io/ecma262/#sec-math.expm1
module.exports = (!nativeExpm1
  // Old FF bug
  || nativeExpm1(10) > 22025.465794806719 || nativeExpm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || nativeExpm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
} : nativeExpm1;


/***/ }),

/***/ "./node_modules/core-js/internals/math-fround.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/math-fround.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var sign = __webpack_require__(/*! ../internals/math-sign */ "./node_modules/core-js/internals/math-sign.js");

var abs = Math.abs;
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

// `Math.fround` method implementation
// https://tc39.github.io/ecma262/#sec-math.fround
module.exports = Math.fround || function fround(x) {
  var $abs = abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/math-log1p.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-log1p.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var log = Math.log;

// `Math.log1p` method implementation
// https://tc39.github.io/ecma262/#sec-math.log1p
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/internals/math-sign.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/math-sign.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `Math.sign` method implementation
// https://tc39.github.io/ecma262/#sec-math.sign
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-is-finite.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-is-finite.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var globalIsFinite = global.isFinite;

// `Number.isFinite` method
// https://tc39.github.io/ecma262/#sec-number.isfinite
module.exports = Number.isFinite || function isFinite(it) {
  return typeof it == 'number' && globalIsFinite(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-prototype-accessors-forced.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-prototype-accessors-forced.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function () {
  var key = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete global[key];
});


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-pad-webkit-bug.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/string-pad-webkit-bug.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

// eslint-disable-next-line unicorn/no-unsafe-regex
module.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/string-pad.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/string-pad.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = String(requireObjectCoercible($this));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-punycode-to-ascii.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/string-punycode-to-ascii.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ "./node_modules/core-js/internals/to-positive-integer.js");

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "./node_modules/core-js/internals/typed-array-from.js");
var forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var aTypedArrayConstructor = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];
    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var arrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.github.io/ecma262/#sec-arraybuffer-constructor
$({ global: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.is-view.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.is-view.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

// `ArrayBuffer.isView` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.isview
$({ target: 'ArrayBuffer', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
  isView: ArrayBufferViewCore.isView
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.slice.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.slice.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var nativeArrayBufferSlice = ArrayBuffer.prototype.slice;

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice !== undefined && end === undefined) {
      return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      viewTarget.setUint8(index++, viewSource.getUint8(first++));
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.copy-within.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.copy-within.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var copyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "./node_modules/core-js/internals/array-copy-within.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
$({ target: 'Array', proto: true }, {
  copyWithin: copyWithin
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.every.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.every.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $every = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js/internals/flatten-into-array.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flatMap` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js/internals/flatten-into-array.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flat` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.last-index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.of.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.of.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var ISNT_GENERIC = fails(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
});

// `Array.of` method
// https://tc39.github.io/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
  of: function of(/* ...args */) {
    var index = 0;
    var argumentsLength = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(argumentsLength);
    while (argumentsLength > index) createProperty(result, index, arguments[index++]);
    result.length = argumentsLength;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").right;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('reduceRight');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduceRight` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.some.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.some.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.species.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.species.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");

// `Array[@@species]` getter
// https://tc39.github.io/ecma262/#sec-get-array-@@species
setSpecies('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

addToUnscopables('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

addToUnscopables('flat');


/***/ }),

/***/ "./node_modules/core-js/modules/es.data-view.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.data-view.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ "./node_modules/core-js/internals/array-buffer-native.js");

// `DataView` constructor
// https://tc39.github.io/ecma262/#sec-dataview-constructor
$({ global: true, forced: !NATIVE_ARRAY_BUFFER }, {
  DataView: ArrayBufferModule.DataView
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-iso-string.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-iso-string.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toISOString = __webpack_require__(/*! ../internals/date-to-iso-string */ "./node_modules/core-js/internals/date-to-iso-string.js");

// `Date.prototype.toISOString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-primitive.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-primitive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var dateToPrimitive = __webpack_require__(/*! ../internals/date-to-primitive */ "./node_modules/core-js/internals/date-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;

// `Date.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-date.prototype-@@toprimitive
if (!(TO_PRIMITIVE in DatePrototype)) {
  createNonEnumerableProperty(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.has-instance.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.has-instance.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var HAS_INSTANCE = wellKnownSymbol('hasInstance');
var FunctionPrototype = Function.prototype;

// `Function.prototype[@@hasInstance]` method
// https://tc39.github.io/ecma262/#sec-function.prototype-@@hasinstance
if (!(HAS_INSTANCE in FunctionPrototype)) {
  definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, { value: function (O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
    return false;
  } });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.global-this.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.global-this.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// `globalThis` object
// https://github.com/tc39/proposal-global
$({ global: true }, {
  globalThis: global
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);
  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
    return '\\u' + match.charCodeAt(0).toString(16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.to-string-tag.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.acosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.acosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var log1p = __webpack_require__(/*! ../internals/math-log1p */ "./node_modules/core-js/internals/math-log1p.js");

var nativeAcosh = Math.acosh;
var log = Math.log;
var sqrt = Math.sqrt;
var LN2 = Math.LN2;

var FORCED = !nativeAcosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  || Math.floor(nativeAcosh(Number.MAX_VALUE)) != 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  || nativeAcosh(Infinity) != Infinity;

// `Math.acosh` method
// https://tc39.github.io/ecma262/#sec-math.acosh
$({ target: 'Math', stat: true, forced: FORCED }, {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? log(x) + LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.asinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.asinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var nativeAsinh = Math.asinh;
var log = Math.log;
var sqrt = Math.sqrt;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
}

// `Math.asinh` method
// https://tc39.github.io/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
$({ target: 'Math', stat: true, forced: !(nativeAsinh && 1 / nativeAsinh(0) > 0) }, {
  asinh: asinh
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.atanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.atanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var nativeAtanh = Math.atanh;
var log = Math.log;

// `Math.atanh` method
// https://tc39.github.io/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
$({ target: 'Math', stat: true, forced: !(nativeAtanh && 1 / nativeAtanh(-0) < 0) }, {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.cbrt.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.cbrt.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var sign = __webpack_require__(/*! ../internals/math-sign */ "./node_modules/core-js/internals/math-sign.js");

var abs = Math.abs;
var pow = Math.pow;

// `Math.cbrt` method
// https://tc39.github.io/ecma262/#sec-math.cbrt
$({ target: 'Math', stat: true }, {
  cbrt: function cbrt(x) {
    return sign(x = +x) * pow(abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.clz32.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.clz32.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var floor = Math.floor;
var log = Math.log;
var LOG2E = Math.LOG2E;

// `Math.clz32` method
// https://tc39.github.io/ecma262/#sec-math.clz32
$({ target: 'Math', stat: true }, {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - floor(log(x + 0.5) * LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.cosh.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.cosh.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var expm1 = __webpack_require__(/*! ../internals/math-expm1 */ "./node_modules/core-js/internals/math-expm1.js");

var nativeCosh = Math.cosh;
var abs = Math.abs;
var E = Math.E;

// `Math.cosh` method
// https://tc39.github.io/ecma262/#sec-math.cosh
$({ target: 'Math', stat: true, forced: !nativeCosh || nativeCosh(710) === Infinity }, {
  cosh: function cosh(x) {
    var t = expm1(abs(x) - 1) + 1;
    return (t + 1 / (t * E * E)) * (E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.expm1.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.expm1.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var expm1 = __webpack_require__(/*! ../internals/math-expm1 */ "./node_modules/core-js/internals/math-expm1.js");

// `Math.expm1` method
// https://tc39.github.io/ecma262/#sec-math.expm1
$({ target: 'Math', stat: true, forced: expm1 != Math.expm1 }, { expm1: expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.fround.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.fround.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fround = __webpack_require__(/*! ../internals/math-fround */ "./node_modules/core-js/internals/math-fround.js");

// `Math.fround` method
// https://tc39.github.io/ecma262/#sec-math.fround
$({ target: 'Math', stat: true }, { fround: fround });


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.hypot.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.hypot.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var $hypot = Math.hypot;
var abs = Math.abs;
var sqrt = Math.sqrt;

// Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546
var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

// `Math.hypot` method
// https://tc39.github.io/ecma262/#sec-math.hypot
$({ target: 'Math', stat: true, forced: BUGGY }, {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.imul.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.imul.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeImul = Math.imul;

var FORCED = fails(function () {
  return nativeImul(0xFFFFFFFF, 5) != -5 || nativeImul.length != 2;
});

// `Math.imul` method
// https://tc39.github.io/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
$({ target: 'Math', stat: true, forced: FORCED }, {
  imul: function imul(x, y) {
    var UINT16 = 0xFFFF;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log10.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log10.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var log = Math.log;
var LOG10E = Math.LOG10E;

// `Math.log10` method
// https://tc39.github.io/ecma262/#sec-math.log10
$({ target: 'Math', stat: true }, {
  log10: function log10(x) {
    return log(x) * LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log1p.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log1p.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var log1p = __webpack_require__(/*! ../internals/math-log1p */ "./node_modules/core-js/internals/math-log1p.js");

// `Math.log1p` method
// https://tc39.github.io/ecma262/#sec-math.log1p
$({ target: 'Math', stat: true }, { log1p: log1p });


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.log2.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.log2.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var log = Math.log;
var LN2 = Math.LN2;

// `Math.log2` method
// https://tc39.github.io/ecma262/#sec-math.log2
$({ target: 'Math', stat: true }, {
  log2: function log2(x) {
    return log(x) / LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.sign.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.sign.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var sign = __webpack_require__(/*! ../internals/math-sign */ "./node_modules/core-js/internals/math-sign.js");

// `Math.sign` method
// https://tc39.github.io/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.sinh.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.sinh.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var expm1 = __webpack_require__(/*! ../internals/math-expm1 */ "./node_modules/core-js/internals/math-expm1.js");

var abs = Math.abs;
var exp = Math.exp;
var E = Math.E;

var FORCED = fails(function () {
  return Math.sinh(-2e-17) != -2e-17;
});

// `Math.sinh` method
// https://tc39.github.io/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
$({ target: 'Math', stat: true, forced: FORCED }, {
  sinh: function sinh(x) {
    return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.tanh.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.tanh.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var expm1 = __webpack_require__(/*! ../internals/math-expm1 */ "./node_modules/core-js/internals/math-expm1.js");

var exp = Math.exp;

// `Math.tanh` method
// https://tc39.github.io/ecma262/#sec-math.tanh
$({ target: 'Math', stat: true }, {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.to-string-tag.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.trunc.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.trunc.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.github.io/ecma262/#sec-math.trunc
$({ target: 'Math', stat: true }, {
  trunc: function trunc(it) {
    return (it > 0 ? floor : ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.epsilon.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.epsilon.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Number.EPSILON` constant
// https://tc39.github.io/ecma262/#sec-number.epsilon
$({ target: 'Number', stat: true }, {
  EPSILON: Math.pow(2, -52)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-finite.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-finite.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var numberIsFinite = __webpack_require__(/*! ../internals/number-is-finite */ "./node_modules/core-js/internals/number-is-finite.js");

// `Number.isFinite` method
// https://tc39.github.io/ecma262/#sec-number.isfinite
$({ target: 'Number', stat: true }, { isFinite: numberIsFinite });


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isInteger = __webpack_require__(/*! ../internals/is-integer */ "./node_modules/core-js/internals/is-integer.js");

// `Number.isInteger` method
// https://tc39.github.io/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-nan.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-nan.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-safe-integer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-safe-integer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isInteger = __webpack_require__(/*! ../internals/is-integer */ "./node_modules/core-js/internals/is-integer.js");

var abs = Math.abs;

// `Number.isSafeInteger` method
// https://tc39.github.io/ecma262/#sec-number.issafeinteger
$({ target: 'Number', stat: true }, {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1FFFFFFFFFFFFF;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.max-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.max-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.github.io/ecma262/#sec-number.max_safe_integer
$({ target: 'Number', stat: true }, {
  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.min-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.min-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.github.io/ecma262/#sec-number.min_safe_integer
$({ target: 'Number', stat: true }, {
  MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.parse-float.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.parse-float.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `Number.parseFloat` method
// https://tc39.github.io/ecma262/#sec-number.parseFloat
$({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.parse-int.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.parse-int.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `Number.parseInt` method
// https://tc39.github.io/ecma262/#sec-number.parseint
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-precision.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-precision.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");

var nativeToPrecision = 1.0.toPrecision;

var FORCED = fails(function () {
  // IE7-
  return nativeToPrecision.call(1, undefined) !== '1';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToPrecision.call({});
});

// `Number.prototype.toPrecision` method
// https://tc39.github.io/ecma262/#sec-number.prototype.toprecision
$({ target: 'Number', proto: true, forced: FORCED }, {
  toPrecision: function toPrecision(precision) {
    return precision === undefined
      ? nativeToPrecision.call(thisNumberValue(this))
      : nativeToPrecision.call(thisNumberValue(this), precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-getter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-getter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "./node_modules/core-js/internals/object-prototype-accessors-forced.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.prototype.__defineGetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-setter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-setter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "./node_modules/core-js/internals/object-prototype-accessors-forced.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.prototype.__defineSetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__defineSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineSetter__: function __defineSetter__(P, setter) {
      definePropertyModule.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $entries = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.freeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var onFreeze = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.from-entries.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.from-entries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, undefined, true);
    return obj;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-names.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js").f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is-extensible.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is-extensible.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var nativeIsExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { nativeIsExtensible(1); });

// `Object.isExtensible` method
// https://tc39.github.io/ecma262/#sec-object.isextensible
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isExtensible: function isExtensible(it) {
    return isObject(it) ? nativeIsExtensible ? nativeIsExtensible(it) : true : false;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is-frozen.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is-frozen.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var nativeIsFrozen = Object.isFrozen;
var FAILS_ON_PRIMITIVES = fails(function () { nativeIsFrozen(1); });

// `Object.isFrozen` method
// https://tc39.github.io/ecma262/#sec-object.isfrozen
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isFrozen: function isFrozen(it) {
    return isObject(it) ? nativeIsFrozen ? nativeIsFrozen(it) : false : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is-sealed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is-sealed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var nativeIsSealed = Object.isSealed;
var FAILS_ON_PRIMITIVES = fails(function () { nativeIsSealed(1); });

// `Object.isSealed` method
// https://tc39.github.io/ecma262/#sec-object.issealed
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isSealed: function isSealed(it) {
    return isObject(it) ? nativeIsSealed ? nativeIsSealed(it) : false : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var is = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");

// `Object.is` method
// https://tc39.github.io/ecma262/#sec-object.is
$({ target: 'Object', stat: true }, {
  is: is
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.lookup-getter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.lookup-getter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "./node_modules/core-js/internals/object-prototype-accessors-forced.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

// `Object.prototype.__lookupGetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this);
      var key = toPrimitive(P, true);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
      } while (O = getPrototypeOf(O));
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.lookup-setter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.lookup-setter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "./node_modules/core-js/internals/object-prototype-accessors-forced.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

// `Object.prototype.__lookupSetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = toObject(this);
      var key = toPrimitive(P, true);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
      } while (O = getPrototypeOf(O));
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.prevent-extensions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.prevent-extensions.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var onFreeze = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").onFreeze;
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativePreventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES = fails(function () { nativePreventExtensions(1); });

// `Object.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-object.preventextensions
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(it) {
    return nativePreventExtensions && isObject(it) ? nativePreventExtensions(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.seal.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.seal.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var onFreeze = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").onFreeze;
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeSeal = Object.seal;
var FAILS_ON_PRIMITIVES = fails(function () { nativeSeal(1); });

// `Object.seal` method
// https://tc39.github.io/ecma262/#sec-object.seal
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  seal: function seal(it) {
    return nativeSeal && isObject(it) ? nativeSeal(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.all-settled.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.all-settled.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

// `Promise.allSettled` method
// https://github.com/tc39/proposal-promise-allSettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (e) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: e };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.apply.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  nativeApply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.github.io/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    aFunction(target);
    anObject(argumentsList);
    return nativeApply
      ? nativeApply(target, thisArgument, argumentsList)
      : functionApply.call(target, thisArgument, argumentsList);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.delete-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.delete-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

// `Reflect.deleteProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

// `Reflect.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.has.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.has.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Reflect.has` method
// https://tc39.github.io/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var objectIsExtensible = Object.isExtensible;

// `Reflect.isExtensible` method
// https://tc39.github.io/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return objectIsExtensible ? objectIsExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.own-keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.own-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");

// `Reflect.ownKeys` method
// https://tc39.github.io/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

// `Reflect.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-reflect.preventextensions
$({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");
var objectSetPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// `Reflect.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.set.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

// `Reflect.set` method
// https://tc39.github.io/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (has(ownDescriptor, 'value')) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    return true;
  }
  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var object = definePropertyModule.f({}, 'a', { configurable: true });
  // eslint-disable-next-line no-undef
  return Reflect.set(getPrototypeOf(object), 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var getFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var setInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").set;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.flags.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var UNSUPPORTED_Y = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js").UNSUPPORTED_Y;

// `RegExp.prototype.flags` getter
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && (/./g.flags != 'g' || UNSUPPORTED_Y)) {
  objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.sticky.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.sticky.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var UNSUPPORTED_Y = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js").UNSUPPORTED_Y;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get;
var RegExpPrototype = RegExp.prototype;

// `RegExp.prototype.sticky` getter
if (DESCRIPTORS && UNSUPPORTED_Y) {
  defineProperty(RegExp.prototype, 'sticky', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (this instanceof RegExp) {
        return !!getInternalState(this).sticky;
      }
      throw TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.test.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.test.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    if (typeof this.exec !== 'function') {
      return nativeTest.call(this, str);
    }
    var result = this.exec(str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.anchor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.anchor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.anchor` method
// https://tc39.github.io/ecma262/#sec-string.prototype.anchor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
  anchor: function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.big.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.big.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.big` method
// https://tc39.github.io/ecma262/#sec-string.prototype.big
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('big') }, {
  big: function big() {
    return createHTML(this, 'big', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.blink.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.blink.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.blink` method
// https://tc39.github.io/ecma262/#sec-string.prototype.blink
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('blink') }, {
  blink: function blink() {
    return createHTML(this, 'blink', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.bold.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.bold.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.bold` method
// https://tc39.github.io/ecma262/#sec-string.prototype.bold
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {
  bold: function bold() {
    return createHTML(this, 'b', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.code-point-at.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.code-point-at.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").codeAt;

// `String.prototype.codePointAt` method
// https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
$({ target: 'String', proto: true }, {
  codePointAt: function codePointAt(pos) {
    return codeAt(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fixed.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fixed.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.fixed` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fontcolor.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fontcolor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.fontcolor` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fontcolor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontcolor') }, {
  fontcolor: function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fontsize.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fontsize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.fontsize` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fontsize
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontsize') }, {
  fontsize: function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.from-code-point.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.from-code-point.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

var fromCharCode = String.fromCharCode;
var nativeFromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!nativeFromCodePoint && nativeFromCodePoint.length != 1;

// `String.fromCodePoint` method
// https://tc39.github.io/ecma262/#sec-string.fromcodepoint
$({ target: 'String', stat: true, forced: INCORRECT_LENGTH }, {
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
      elements.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00)
      );
    } return elements.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.italics.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.italics.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.italics` method
// https://tc39.github.io/ecma262/#sec-string.prototype.italics
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('italics') }, {
  italics: function italics() {
    return createHTML(this, 'i', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match-all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var MATCH_ALL = wellKnownSymbol('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var regExpBuiltinExec = RegExpPrototype.exec;
var nativeMatchAll = ''.matchAll;

var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function () {
  'a'.matchAll(/./);
});

var regExpExec = function (R, S) {
  var exec = R.exec;
  var result;
  if (typeof exec == 'function') {
    result = exec.call(R, S);
    if (typeof result != 'object') throw TypeError('Incorrect exec result');
    return result;
  } return regExpBuiltinExec.call(R, S);
};

// eslint-disable-next-line max-len
var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, global, fullUnicode) {
  setInternalState(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState(this);
  if (state.done) return { value: undefined, done: true };
  var R = state.regexp;
  var S = state.string;
  var match = regExpExec(R, S);
  if (match === null) return { value: undefined, done: state.done = true };
  if (state.global) {
    if (String(match[0]) == '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
    return { value: match, done: false };
  }
  state.done = true;
  return { value: match, done: false };
});

var $matchAll = function (string) {
  var R = anObject(this);
  var S = String(string);
  var C, flagsValue, flags, matcher, global, fullUnicode;
  C = speciesConstructor(R, RegExp);
  flagsValue = R.flags;
  if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype)) {
    flagsValue = getRegExpFlags.call(R);
  }
  flags = flagsValue === undefined ? '' : String(flagsValue);
  matcher = new C(C === RegExp ? R.source : R, flags);
  global = !!~flags.indexOf('g');
  fullUnicode = !!~flags.indexOf('u');
  matcher.lastIndex = toLength(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, global, fullUnicode);
};

// `String.prototype.matchAll` method
// https://github.com/tc39/proposal-string-matchall
$({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible(this);
    var flags, S, matcher, rx;
    if (regexp != null) {
      if (isRegExp(regexp)) {
        flags = String(requireObjectCoercible('flags' in RegExpPrototype
          ? regexp.flags
          : getRegExpFlags.call(regexp)
        ));
        if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes');
      }
      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
      matcher = regexp[MATCH_ALL];
      if (matcher === undefined && IS_PURE && classof(regexp) == 'RegExp') matcher = $matchAll;
      if (matcher != null) return aFunction(matcher).call(regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
    S = String(O);
    rx = new RegExp(regexp, 'g');
    return IS_PURE ? $matchAll.call(rx, S) : rx[MATCH_ALL](S);
  }
});

IS_PURE || MATCH_ALL in RegExpPrototype || createNonEnumerableProperty(RegExpPrototype, MATCH_ALL, $matchAll);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.pad-end.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.pad-end.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $padEnd = __webpack_require__(/*! ../internals/string-pad */ "./node_modules/core-js/internals/string-pad.js").end;
var WEBKIT_BUG = __webpack_require__(/*! ../internals/string-pad-webkit-bug */ "./node_modules/core-js/internals/string-pad-webkit-bug.js");

// `String.prototype.padEnd` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.pad-start.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.pad-start.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $padStart = __webpack_require__(/*! ../internals/string-pad */ "./node_modules/core-js/internals/string-pad.js").start;
var WEBKIT_BUG = __webpack_require__(/*! ../internals/string-pad-webkit-bug */ "./node_modules/core-js/internals/string-pad-webkit-bug.js");

// `String.prototype.padStart` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `String.raw` method
// https://tc39.github.io/ecma262/#sec-string.raw
$({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject(template.raw);
    var literalSegments = toLength(rawTemplate.length);
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (literalSegments > i) {
      elements.push(String(rawTemplate[i++]));
      if (i < argumentsLength) elements.push(String(arguments[i]));
    } return elements.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.repeat.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.repeat.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");

// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.small.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.small.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.small` method
// https://tc39.github.io/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.strike.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.strike.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.strike` method
// https://tc39.github.io/ecma262/#sec-string.prototype.strike
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('strike') }, {
  strike: function strike() {
    return createHTML(this, 'strike', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.sub.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.sub.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.sub` method
// https://tc39.github.io/ecma262/#sec-string.prototype.sub
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sub') }, {
  sub: function sub() {
    return createHTML(this, 'sub', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.sup.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.sup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.sup` method
// https://tc39.github.io/ecma262/#sec-string.prototype.sup
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sup') }, {
  sup: function sup() {
    return createHTML(this, 'sup', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trimEnd = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").end;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

var FORCED = forcedStringTrimMethod('trimEnd');

var trimEnd = FORCED ? function trimEnd() {
  return $trimEnd(this);
} : ''.trimEnd;

// `String.prototype.{ trimEnd, trimRight }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
$({ target: 'String', proto: true, forced: FORCED }, {
  trimEnd: trimEnd,
  trimRight: trimEnd
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trimStart = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").start;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

var FORCED = forcedStringTrimMethod('trimStart');

var trimStart = FORCED ? function trimStart() {
  return $trimStart(this);
} : ''.trimStart;

// `String.prototype.{ trimStart, trimLeft }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
$({ target: 'String', proto: true, forced: FORCED }, {
  trimStart: trimStart,
  trimLeft: trimStart
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.async-iterator.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.async-iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.has-instance.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.has-instance.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.match-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.match-all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-primitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-string-tag.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.unscopables.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.unscopables.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.copy-within.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $copyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "./node_modules/core-js/internals/array-copy-within.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.every.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $every = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.fill.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float32-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float32-array.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Float32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float64-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float64-array.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Float64Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.from.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.from.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");
var exportTypedArrayStaticMethod = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").exportTypedArrayStaticMethod;
var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "./node_modules/core-js/internals/typed-array-from.js");

// `%TypedArray%.from` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.from
exportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int16-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int16-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Int16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int32-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int32-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Int32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int8-array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int8-array.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Int8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.join.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.last-index-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod;

// `%TypedArray%.of` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.of
exportTypedArrayStaticMethod('of', function of(/* ...items */) {
  var index = 0;
  var length = arguments.length;
  var result = new (aTypedArrayConstructor(this))(length);
  while (length > index) result[index] = arguments[index++];
  return result;
}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.some.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.sort.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.subarray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.subarray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").exportTypedArrayMethod;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint16-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint16-array.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint32-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint32-array.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8ClampedArray` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-map.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "./node_modules/core-js/internals/collection-weak.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var enforceIternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").enforce;
var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.github.io/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-set.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-set.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "./node_modules/core-js/internals/collection-weak.js");

// `WeakSet` constructor
// https://tc39.github.io/ecma262/#sec-weakset-constructor
collection('WeakSet', function (init) {
  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionWeak);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js");

var FORCED = !global.setImmediate || !global.clearImmediate;

// http://w3c.github.io/setImmediate/
$({ global: true, bind: true, enumerable: true, forced: FORCED }, {
  // `setImmediate` method
  // http://w3c.github.io/setImmediate/#si-setImmediate
  setImmediate: task.set,
  // `clearImmediate` method
  // http://w3c.github.io/setImmediate/#si-clearImmediate
  clearImmediate: task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.queue-microtask.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/web.queue-microtask.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var process = global.process;
var isNode = classof(process) == 'process';

// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
$({ global: true, enumerable: true, noTargetGet: true }, {
  queueMicrotask: function queueMicrotask(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var hasOwn = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");
var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").codeAt;
var toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ "./node_modules/core-js/internals/string-punycode-to-ascii.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/stable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/stable/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../es */ "./node_modules/core-js/es/index.js");
__webpack_require__(/*! ../web */ "./node_modules/core-js/web/index.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path;


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! ../modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.queue-microtask */ "./node_modules/core-js/modules/web.queue-microtask.js");
__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.url */ "./node_modules/core-js/modules/web.url.js");
__webpack_require__(/*! ../modules/web.url.to-json */ "./node_modules/core-js/modules/web.url.to-json.js");
__webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/timeline.js":
/*!*************************!*\
  !*** ./src/timeline.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find-index */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_39__);








































function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/*!
 * jQuery Timeline
 * ------------------------
 * Version: 2.1.0
 * Author: Ka2 (https://ka2.org/)
 * Repository: https://github.com/ka215/jquery.timeline
 * Lisenced: MIT
 */

/* ----------------------------------------------------------------------------------------------------------------
 * Constants
 * ----------------------------------------------------------------------------------------------------------------
 */

var NAME = "Timeline";
var VERSION = "2.1.0";
var DATA_KEY = "jq.timeline";
var EVENT_KEY = ".".concat(DATA_KEY);
var PREFIX = "jqtl-";
var IS_TOUCH = ('ontouchstart' in window);
var MIN_POINTER_SIZE = 12;
var JQUERY_NO_CONFLICT = $.fn[NAME];
var Default = {
  type: "bar",
  scale: "day",
  startDatetime: "currently",
  endDatetime: "auto",
  range: 3,
  rows: "auto",
  rowHeight: 48,
  width: "auto",
  height: "auto",
  minGridSize: 30,
  marginHeight: 2,
  headline: {
    display: true,
    title: "",
    range: true,
    locale: "en-US",
    format: {
      hour12: false
    }
  },
  sidebar: {
    sticky: false,
    overlay: false,
    list: []
  },
  ruler: {
    truncateLowers: false,
    top: {
      lines: [],
      height: 30,
      fontSize: 14,
      color: "inherit",
      // Changed since v2.1.0, an old value is "#777777"
      background: "inherit",
      // Changed since v2.1.0, an old value is "#FFFFFF"
      locale: "en-US",
      format: {
        hour12: false
      }
    },
    bottom: {
      // Added since v2.1.0 to fix #61
      lines: [],
      height: 30,
      fontSize: 14,
      color: "inherit",
      background: "inherit",
      locale: "en-US",
      format: {
        hour12: false
      }
    }
  },
  footer: {
    display: true,
    content: "",
    range: false,
    locale: "en-US",
    format: {
      hour12: false
    }
  },
  eventMeta: {
    display: false,
    scale: "day",
    locale: "en-US",
    format: {
      hour12: false
    },
    content: ""
  },
  eventData: [],
  effects: {
    presentTime: true,
    hoverEvent: true,
    stripedGridRow: true,
    horizontalGridStyle: "dotted",
    verticalGridStyle: "solid"
  },
  //startHour       : 0, // Merge PR#37
  //endHour         : 23, // Merge PR#37

  /*
  hourPeriod      : { // Added new option inspired from PR#37; Available only if the scale is "day"( or "week")
      start       : 0,
      end         : 23,
  },
  */
  colorScheme: {
    // Added new option since v2.0.0
    theme: {
      // Added new option since v2.1.0
      name: "default",
      text: "#343A40",
      subtext: "#707070",
      offtext: "#BBBBBB",
      modesttext: "#969696",
      line: "#6C757D",
      offline: "#DDDDDD",
      activeline: "#DC3545",
      background: "#FFFFFF",
      invertbg: "#121212",
      striped1: "#F7F7F7",
      striped2: "#F0F0F0",
      active: "#F73333",
      marker: "#2C7CFF",
      gridbase: "#333333"
    },
    event: {
      text: "#343A40",
      border: "#6C757D",
      background: "#E7E7E7"
    },
    hookEventColors: function hookEventColors() {
      return null;
    } // Added instead of merging setColorEvent of PR#37 since v2.0.0

  },
  // onOpenEvent     : () => null, // Merge PR#37; (event) => null
  rangeAlign: "latest",
  loader: "default",
  loadingMessage: "",
  hideScrollbar: false,
  storage: "session",
  reloadCacheKeep: true,
  zoom: false,
  wrapScale: true,
  firstDayOfWeek: 0,
  // 0: Sunday, 1: Monday, ... 6: Saturday
  engine: "canvas",
  debug: false // datetimeFormat : {},       // --> Deprecated since v2.0.0
  // datetimePrefix : "",       // --> Deprecated since v2.0.0
  // duration     : 150,        // --> Deprecated since v2.0.0
  // showPointer  : true,       // --> Deprecated since v2.0.0
  // httpLanguage : false,      // --> Deprecated since v2.0.0
  // i18n         : {},         // --> Deprecated since v2.0.0
  // langsDir     : "./langs/", // --> Deprecated since v2.0.0
  // minGridPer   : 2,          // --> Deprecated since v2.0.0
  // minuteInterval : 30,       // --> Deprecated since v2.0.0
  // naviIcon     : {},         // --> Deprecated since v2.0.0
  // showHeadline : true,       // --> Deprecated since v2.0.0
  // zerofillYear   : false,    // --> Deprecated since v2.0.0

};
var LimitScaleGrids = {
  millennium: 100,
  century: 100 * 5,
  decade: 10 * 50,
  lustrum: 5 * 100,
  year: 500,
  month: 12 * 45,
  week: 53 * 10,
  day: 366,
  hour: 24 * 30,
  quarterHour: 24 * 4 * 7.5,
  halfHour: 24 * 2 * 15,
  minute: 60 * 12,
  second: 60 * 15
};
var EventParams = {
  uid: "",
  eventId: "",
  x: 0,
  y: Default.marginHeight,
  width: Default.minGridSize,
  height: Default.rowHeight - Default.marginHeight * 2,
  start: "",
  end: "",
  row: 1,
  bgColor: Default.colorScheme.event.background,
  // Modified since v2.0.0
  color: Default.colorScheme.event.text,
  // Modified since v2.0.0
  bdColor: Default.colorScheme.event.border,
  // Modified since v2.0.0
  label: "",
  content: "",
  category: "",
  // Added new option since v2.0.0
  image: "",
  margin: Default.marginHeight,
  rangeMeta: "",
  size: "normal",
  type: "",
  extend: {},
  remote: false,
  relation: {},
  callback: function callback() {}
};
var Event = {
  INITIALIZED: "initialized".concat(EVENT_KEY),
  HIDE: "hide".concat(EVENT_KEY),
  SHOW: "show".concat(EVENT_KEY),
  CLICK_EVENT: "click.open".concat(EVENT_KEY),
  FOCUSIN_EVENT: "focusin.event".concat(EVENT_KEY),
  FOCUSOUT_EVENT: "focusout.event".concat(EVENT_KEY),
  TOUCHSTART_TIMELINE: "mousedown.timeline".concat(EVENT_KEY),
  // Deleted touchstart.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
  TOUCHMOVE_TIMELINE: "mousemove.timeline".concat(EVENT_KEY),
  // Deleted touchmove.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
  TOUCHEND_TIMELINE: "mouseup.timeline".concat(EVENT_KEY),
  // Deleted touchend.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
  MOUSEENTER_POINTER: "mouseenter.pointer".concat(EVENT_KEY),
  MOUSELEAVE_POINTER: "mouseleave.pointer".concat(EVENT_KEY),
  ZOOMIN_SCALE: "dblclick.zoom".concat(EVENT_KEY)
};
var ClassName = {
  TIMELINE_CONTAINER: "".concat(PREFIX, "container"),
  TIMELINE_MAIN: "".concat(PREFIX, "main"),
  TIMELINE_HEADLINE: "".concat(PREFIX, "headline"),
  TIMELINE_HEADLINE_WRAPPER: "".concat(PREFIX, "headline-wrapper"),
  HEADLINE_TITLE: "".concat(PREFIX, "timeline-title"),
  RANGE_META: "".concat(PREFIX, "range-meta"),
  RANGE_SPAN: "".concat(PREFIX, "range-span"),
  TIMELINE_EVENT_CONTAINER: "".concat(PREFIX, "event-container"),
  TIMELINE_BACKGROUND_GRID: "".concat(PREFIX, "bg-grid"),
  TIMELINE_RELATION_LINES: "".concat(PREFIX, "relation-lines"),
  TIMELINE_EVENTS: "".concat(PREFIX, "events"),
  TIMELINE_EVENT_NODE: "".concat(PREFIX, "event-node"),
  TIMELINE_EVENT_LABEL: "".concat(PREFIX, "event-label"),
  TIMELINE_EVENT_THUMBNAIL: "".concat(PREFIX, "event-thumbnail"),
  TIMELINE_RULER_LINES: "".concat(PREFIX, "ruler-line-rows"),
  TIMELINE_RULER_ITEM: "".concat(PREFIX, "ruler-line-item"),
  TIMELINE_SIDEBAR: "".concat(PREFIX, "side-index"),
  TIMELINE_SIDEBAR_MARGIN: "".concat(PREFIX, "side-index-margin"),
  TIMELINE_SIDEBAR_ITEM: "".concat(PREFIX, "side-index-item"),
  TIMELINE_FOOTER: "".concat(PREFIX, "footer"),
  TIMELINE_FOOTER_CONTENT: "".concat(PREFIX, "footer-content"),
  VIEWER_EVENT_TITLE: "".concat(PREFIX, "event-title"),
  VIEWER_EVENT_CONTENT: "".concat(PREFIX, "event-content"),
  VIEWER_EVENT_META: "".concat(PREFIX, "event-meta"),
  VIEWER_EVENT_IMAGE_WRAPPER: "".concat(PREFIX, "event-image-wrapper"),
  VIEWER_EVENT_IMAGE: "".concat(PREFIX, "event-image"),
  VIEWER_EVENT_TYPE_POINTER: "".concat(PREFIX, "event-type-pointer"),
  HIDE_SCROLLBAR: "".concat(PREFIX, "hide-scrollbar"),
  HIDE: "".concat(PREFIX, "hide"),
  RULER_ITEM_ALIGN_LEFT: "".concat(PREFIX, "rli-left"),
  STICKY_LEFT: "".concat(PREFIX, "sticky-left"),
  OVERLAY: "".concat(PREFIX, "overlay"),
  ALIGN_SELF_RIGHT: "".concat(PREFIX, "align-self-right"),
  PRESENT_TIME_MARKER: "".concat(PREFIX, "present-time"),
  LOADER_CONTAINER: "".concat(PREFIX, "loader"),
  LOADER_ITEM: "".concat(PREFIX, "loading")
};
var Selector = {
  EVENT_NODE: ".".concat(PREFIX, "event-node"),
  EVENT_VIEW: ".timeline-event-view, .".concat(PREFIX, "event-view"),
  RULER_TOP: ".".concat(PREFIX, "ruler-top"),
  RULER_BOTTOM: ".".concat(PREFIX, "ruler-bottom"),
  TIMELINE_CONTAINER: ".".concat(ClassName.TIMELINE_CONTAINER),
  TIMELINE_MAIN: ".".concat(ClassName.TIMELINE_MAIN),
  HEADLINE_TITLE: ".".concat(ClassName.HEADLINE_TITLE),
  // Added since v2.1.0
  RANGE_META: ".".concat(ClassName.RANGE_META),
  // Added since v2.1.0
  TIMELINE_RULER_TOP: ".".concat(PREFIX, "ruler-top"),
  TIMELINE_EVENT_CONTAINER: ".".concat(ClassName.TIMELINE_EVENT_CONTAINER),
  TIMELINE_RULER_BOTTOM: ".".concat(PREFIX, "ruler-bottom"),
  TIMELINE_RULER_LINES: ".".concat(ClassName.TIMELINE_RULER_LINES),
  // Added since v2.1.0
  TIMELINE_RULER_ITEM: ".".concat(ClassName.TIMELINE_RULER_ITEM),
  TIMELINE_RELATION_LINES: ".".concat(ClassName.TIMELINE_RELATION_LINES),
  TIMELINE_EVENTS: ".".concat(ClassName.TIMELINE_EVENTS),
  TIMELINE_SIDEBAR: ".".concat(ClassName.TIMELINE_SIDEBAR),
  TIMELINE_SIDEBAR_MARGIN: ".".concat(ClassName.TIMELINE_SIDEBAR_MARGIN),
  // Added since v2.1.0
  TIMELINE_SIDEBAR_ITEM: ".".concat(ClassName.TIMELINE_SIDEBAR_ITEM),
  TIMELINE_EVENT_NODE: ".".concat(ClassName.TIMELINE_EVENT_NODE),
  VIEWER_EVENT_TITLE: ".".concat(ClassName.VIEWER_EVENT_TITLE),
  // Added since v2.1.0
  VIEWER_EVENT_CONTENT: ".".concat(ClassName.VIEWER_EVENT_CONTENT),
  // Added since v2.1.0
  VIEWER_EVENT_META: ".".concat(ClassName.VIEWER_EVENT_META),
  // Added since v2.1.0
  VIEWER_EVENT_TYPE_POINTER: ".".concat(ClassName.VIEWER_EVENT_TYPE_POINTER),
  OVERLAY: ".".concat(ClassName.OVERLAY),
  // Added since v2.1.0
  PRESENT_TIME_MARKER: ".".concat(ClassName.PRESENT_TIME_MARKER),
  // Added since v2.1.0
  LOADER: ".".concat(ClassName.LOADER_CONTAINER),
  LOADER_ITEM: ".".concat(ClassName.LOADER_ITEM),
  // Added since v2.1.0
  DEFAULT_EVENTS: ".timeline-events"
};

var mapData = function () {
  var storeData = {};
  var id = 1;
  return {
    set: function set(element, key, data) {
      if (typeof element.key === 'undefined') {
        element.key = {
          key: key,
          id: id
        };
        id++;
      }

      storeData[element.key.id] = data;
    },
    get: function get(element, key) {
      if (!element || typeof element.key === 'undefined') {
        return null;
      }

      var keyProperties = element.key;

      if (keyProperties.key === key) {
        return storeData[keyProperties.id];
      }

      return null;
    },
    delete: function _delete(element, key) {
      if (typeof element.key === 'undefined') {
        return;
      }

      var keyProperties = element.key;

      if (keyProperties.key === key) {
        delete storeData[keyProperties.id];
        delete element.key;
      }
    }
  };
}();

var Data = {
  setData: function setData(instance, key, data) {
    mapData.set(instance, key, data);
  },
  getData: function getData(instance, key) {
    return mapData.get(instance, key);
  },
  removeData: function removeData(instance, key) {
    mapData.delete(instance, key);
  }
};
/* ----------------------------------------------------------------------------------------------------------------
 * Plugin Core Class
 * ----------------------------------------------------------------------------------------------------------------
 */

var Timeline = /*#__PURE__*/function () {
  function Timeline(element, config) {
    _classCallCheck(this, Timeline);

    this._config = this._getConfig(config);
    this._element = element;
    this._selector = null;
    this._isInitialized = false;
    this._isCached = false;
    this._isCompleted = false;
    this._isShown = false;
    this._isTouched = false;
    this._instanceProps = {};
    this._observer = null; // Added new since v2.0.0

    this._beforeOpenEvent = null; // Added new since v2.0.0
    //this._countEventinCell = {} // since v2.0.0

    Data.setData(element, DATA_KEY, this);
  } // Getters


  _createClass(Timeline, [{
    key: "_getConfig",
    // Private

    /*
     * @private: Define the default options of this plugin
     */
    value: function _getConfig(config) {
      // config = { ...Default, ...config } // Note: this is NG because two objects have not merged deeply
      if (config.startDatetime instanceof Date) {
        config.startDatetime = config.startDatetime.toString();
      }

      if (config.endDatetime instanceof Date) {
        config.endDatetime = config.endDatetime.toString();
      }

      return this.mergeDeep(Default, config);
    }
    /*
     * @private: Filter the given scale key name to allowed for plugin
     */

  }, {
    key: "_filterScaleKeyName",
    value: function _filterScaleKeyName(key) {
      var filteredKey = null;

      switch (true) {
        case /^millenniums?|millennia$/i.test(key):
          filteredKey = 'millennium';
          break;

        case /^century$/i.test(key):
          filteredKey = 'century';
          break;

        case /^dec(ade|ennium)$/i.test(key):
          filteredKey = 'decade';
          break;

        case /^lustrum$/i.test(key):
          filteredKey = 'lustrum';
          break;

        case /^years?$/i.test(key):
          filteredKey = 'year';
          break;

        case /^months?$/i.test(key):
          filteredKey = 'month';
          break;

        case /^weeks?$/i.test(key):
          filteredKey = 'week';
          break;

        case /^weekdays?$/i.test(key):
          filteredKey = 'weekday';
          break;

        case /^da(y|te)s?$/i.test(key):
          filteredKey = 'day';
          break;

        case /^hours?$/i.test(key):
          filteredKey = 'hour';
          break;

        case /^quarter-?(|hour)$/i.test(key):
          filteredKey = 'quarterHour';
          break;

        case /^half-?(|hour)$/i.test(key):
          filteredKey = 'halfHour';
          break;

        case /^minutes?$/i.test(key):
          filteredKey = 'minute';
          break;

        case /^seconds?$/i.test(key):
          filteredKey = 'second';
          break;

        default:
          filteredKey = 'millisecond';
      }

      return filteredKey;
    }
    /*
     * @private: Initialize the plugin
     */

  }, {
    key: "_init",
    value: function () {
      var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _elem, _selector, afterInitEvent;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._debug('_init');

                _elem = this._element, _selector = "".concat(_elem.tagName).concat(_elem.id ? "#".concat(_elem.id) : '').concat(_elem.className ? ".".concat(_elem.className.replace(/\s/g, '.')) : '');
                this._selector = _selector.toLowerCase();

                if (!(this._isInitialized || this._isCompleted)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this);

              case 5:
                this._calcVars();

                this.showLoader();

                if (this._verifyMaxRenderableRange()) {
                  _context.next = 9;
                  break;
                }

                throw new RangeError("Timeline display period exceeds maximum renderable range.");

              case 9:
                this._renderView();

                if (!this._isCached) {
                  this._loadEvent();
                }

                if (!this._isCached) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return this._placeEvent();

              case 14:
                // Assign events for the timeline
                $(document).on(Event.CLICK_EVENT, "".concat(this._selector, " ").concat(Selector.EVENT_NODE), function (event) {
                  return _this2.openEvent(event);
                });
                $(_elem).on(Event.FOCUSIN_EVENT, Selector.TIMELINE_EVENT_NODE, function (event) {
                  return _this2._activeEvent(event);
                });
                $(_elem).on(Event.FOCUSOUT_EVENT, Selector.TIMELINE_EVENT_NODE, function (event) {
                  return _this2._activeEvent(event);
                });
                $(_elem).on(Event.TOUCHSTART_TIMELINE, Selector.TIMELINE_MAIN, function (event) {
                  return _this2._swipeStart(event);
                });
                $(_elem).on(Event.TOUCHMOVE_TIMELINE, Selector.TIMELINE_MAIN, function (event) {
                  return _this2._swipeMove(event);
                });
                $(_elem).on(Event.TOUCHEND_TIMELINE, Selector.TIMELINE_MAIN, function (event) {
                  return _this2._swipeEnd(event);
                });

                if (/^point(|er)$/i.test(this._config.type)) {
                  $(_elem).on(Event.MOUSEENTER_POINTER, Selector.VIEWER_EVENT_TYPE_POINTER, function (event) {
                    return _this2._hoverPointer(event);
                  });
                  $(_elem).on(Event.MOUSELEAVE_POINTER, Selector.VIEWER_EVENT_TYPE_POINTER, function (event) {
                    return _this2._hoverPointer(event);
                  });
                }

                if (this._config.zoom) {
                  $(_elem).on(Event.ZOOMIN_SCALE, Selector.TIMELINE_RULER_ITEM, function (event) {
                    return _this2.zoomScale(event);
                  });
                }

                $(_elem).find(Selector.TIMELINE_CONTAINER).on('scroll', function (event) {
                  return _this2._scrollTimeline(event);
                });
                this._isCompleted = true;
                _context.next = 26;
                return this.hideLoader();

              case 26:
                this.alignment();

                if (!this._isInitialized) {
                  afterInitEvent = $.Event(Event.INITIALIZED, _elem);
                  $(_elem).trigger(afterInitEvent);
                  $(_elem).off(Event.INITIALIZED);
                } // Binding bs.popover


                if ($.fn['popover']) {
                  $('[data-toggle="popover"]').popover();
                }

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _init() {
        return _init2.apply(this, arguments);
      }

      return _init;
    }()
    /*
     * @private: Calculate each properties of the timeline instance
     */

  }, {
    key: "_calcVars",
    value: function _calcVars() {
      var _this3 = this;

      var _opts = this._config,
          _props = {},
          _callback = function _callback(_ac, _cv) {
        if (_this3.verifyScale(_cv)) {
          _cv = _this3._filterScaleKeyName(_cv);

          if (_ac.indexOf(_cv) === -1) {
            _ac.push(_cv);
          }
        }

        return _ac;
      };

      _props.begin = this.supplement(null, this._getPluggableDatetime(_opts.startDatetime, 'first')); // The milliseconds as start datetime (:> 開始日時のミリ秒

      _props.end = this.supplement(null, this._getPluggableDatetime(_opts.endDatetime, 'last')); // The milliseconds as end datetime (:> 終了日時のミリ秒

      _props.scaleSize = this.supplement(null, _opts.minGridSize, this.validateNumeric); // The minimum width of one grid on the base scale (:> 基本スケール上の1グリッドの最小幅

      _props.rows = this._getPluggableRows(); // The number of rows on the timeline container (:> タイムラインコンテナの行数

      _props.rowSize = this.supplement(null, _opts.rowHeight, this.validateNumeric); // The height of one row on the timeline container (:> タイムラインコンテナの1行の高さ

      _props.width = this.supplement(null, _opts.width, this.validateNumeric); // ?

      _props.height = this.supplement(null, _opts.height, this.validateNumeric); // ?

      _props.isVLS = true; // Whether is the variable length scale, fixed as constraint value of the "true" since v2.0.0b2
      // _props.scale         // The basic millisecond of one base grid on the setting scale (:> 設定スケールにおける起点グリッド1目盛の基準ミリ秒
      // _props.grids         // Number of base grids on the setting scale (= number of grids displayed) (:> 設定スケールにおける起点グリッド数（=表示されるグリッド数）
      // _props.variableScale // An object that referable as the width of the base grid on the setting scale (:> 設定スケールにおける起点グリッド幅の幅員基準値となるオブジェクト
      // _props.gridsMap      // An object that mapped the available grids (:> 有効グリッドをマップしたオブジェクト -> これを定義するとメモリを食うのでNG
      // _props.rulers        // The available scale list on the ruler (:> 有効な目盛のスケールリスト
      // _props.fullwidth     // The total width of the timeline container (:> タイムラインコンテナの横幅の全長
      // _props.fullheight    // The total height of the timeline container (:> タイムラインコンテナの縦幅の全長
      // _props.visibleWidth  // The width of the timeline that will display (:> 表示されるタイムラインの横幅
      // _props.visibleHeight // The height of the timeline that will display (:> 表示されるタイムラインの縦幅

      _props.absX = 0; // An absolute X position on the page for using in swipe event (:> スワイプイベント用

      _props.moveX = 0; // The moving position after doing the touchstart for using in swipe event (:> スワイプイベント用
      // get all scales on ruler

      var _rulers = _opts.ruler.top.lines.reduce(_callback, []);

      if (Object.hasOwnProperty.call(_opts.ruler, 'bottom') && Object.hasOwnProperty.call(_opts.ruler.bottom, 'lines')) {
        _rulers = [].concat(_toConsumableArray(_rulers), _toConsumableArray(_opts.ruler.bottom.lines)).reduce(_callback, []);
      }

      if (this.is_empty(_rulers)) {
        _opts.ruler.top.lines.push(_opts.scale);

        _rulers.push(_opts.scale);
      }

      _props.rulers = _rulers;
      this._instanceProps = _props; // pre-cache

      if (_props.isVLS) {
        // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
        var _temp = this.verifyScale(_opts.scale, _props.begin, _props.end, _props.isVLS),
            _values = Object.values(_temp),
            _averageVar = this.numRound(_values.reduce(function (a, v) {
          return a + v;
        }, 0) / _values.length, 4),
            // Average value within the range
        _minVar = Math.min.apply(Math, _toConsumableArray(_values)),
            _totalWidth = 0,
            _base_is_min = true,
            // Whether use min value of scale as base grid width
        _baseVar = _base_is_min ? _minVar : _averageVar;

        switch (true) {
          case /^millenniums?|millennia$/i.test(_opts.scale):
          case /^century$/i.test(_opts.scale):
            // unit: years = 365.25 * 24 * 60 * 60 * 1000
            _props.scale = _baseVar * (365.25 * 24 * 60 * 60 * 1000);
            break;

          case /^dec(ade|ennium)$/i.test(_opts.scale):
          case /^lustrum$/i.test(_opts.scale):
          case /^years?$/i.test(_opts.scale):
          case /^months?$/i.test(_opts.scale):
            // unit: days = 24 * 60 * 60 * 1000
            _props.scale = _baseVar * (24 * 60 * 60 * 1000);
            break;

          case /^weeks?$/i.test(_opts.scale):
          case /^(|week)days?$/i.test(_opts.scale):
            // unit: hours = 60 * 60 * 1000
            _props.scale = _baseVar * (60 * 60 * 1000);
            break;

          case /^hours?$/i.test(_opts.scale):
            // unit: minutes = 60 * 1000
            _props.scale = _baseVar * (60 * 1000);
            break;

          case /^minutes?$/i.test(_opts.scale):
            // unit: seconds = 1000
            _props.scale = _baseVar * 1000;
            break;

          case /^seconds?$/i.test(_opts.scale):
          default:
            // unit: milliseconds = 1
            _props.scale = _baseVar * 1;
            break;
        } //console.log( '!_calcVars::', _opts.scale, _temp, _values )


        _values.forEach(function (val) {
          //console.log( `!!_calcVars::_totalWidth: ${_totalWidth} + ${this.numRound( ( val * _props.scaleSize ) / _baseVar, 2 )}` )
          _totalWidth += _this3.numRound(val * _props.scaleSize / _baseVar, 2);
        });

        _props.grids = _values.length;
        _props.variableScale = _temp;
        _props.fullwidth = _totalWidth;
      } else {// Deprecated since v2.0.0 stable; in case of fixed length scale
      }

      _props.fullheight = _props.rows * _props.rowSize; // Provisional value as theoretical value
      // Define visible size according to full size of timeline (:> タイムラインのフルサイズに準じた可視サイズを定義

      _props.visibleWidth = _props.width > 0 ? "".concat(_props.width <= _props.fullwidth ? _props.width : _props.fullwidth, "px") : '100%';
      _props.visibleHeight = _props.height > 0 ? "".concat(_props.height <= _props.fullheight ? _props.height : _props.fullheight, "px") : 'auto';

      for (var _prop in _props) {
        if (/^(width|height|variableScale|absX|moveX)$/.test(_prop)) {
          continue;
        }

        if (this.is_empty(_props[_prop])) {
          throw new TypeError("Property \"".concat(_prop, "\" cannot set because undefined or invalid variable."));
        }
      }

      if (_props.fullwidth < 2 || _props.fullheight < 2) {
        throw new TypeError("The range of the timeline to be rendered is incorrect.");
      } //console.log( '!_calcVars::return:', _props )


      this._instanceProps = _props;
    }
    /*
     * @private: Retrieve the pluggable datetime as milliseconds depend on specific preset keyword
     *
     * @param mixed key (required; preset keywords 'current', 'currently', 'auto' or seed of datetime)
     * @param string round_type (optional; defaults to '')
     *
     * @return int (milliseconds as valid datetime)
     */

  }, {
    key: "_getPluggableDatetime",
    value: function _getPluggableDatetime(key) {
      var round_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _opts = this._config,
          _date = null,
          getFirstDate = function getFirstDate(dateObj, scale) {
        var _fullYear = dateObj.getFullYear(),
            _remapYear = _fullYear >= 0 && Math.abs(_fullYear) < 100 ? true : false,
            _tmpDate;

        switch (true) {
          case /^millenniums?|millennia$/i.test(scale):
          case /^century$/i.test(scale):
          case /^dec(ade|ennium)$/i.test(scale):
          case /^lustrum$/i.test(scale):
          case /^years?$/i.test(scale):
            _tmpDate = new Date(_fullYear, 0, 1);
            break;

          case /^months?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), 1);
            break;

          case /^(week|day)s?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate());
            break;

          case /^(|half|quarter)-?hours?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours());
            break;

          case /^minutes?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes());
            break;

          case /^seconds?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds());
            break;

          default:
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds());
            break;
        }

        if (_remapYear) {
          _tmpDate.setFullYear(_fullYear);
        }

        return _tmpDate;
      },
          getLastDate = function getLastDate(dateObj, scale) {
        var _fullYear = dateObj.getFullYear(),
            _remapYear = _fullYear >= 0 && Math.abs(_fullYear) < 100 ? true : false,
            _offset = _fullYear >= 0 ? -1 : 1,
            _tmpDate;

        switch (true) {
          case /^millenniums?|millennia$/i.test(scale):
          case /^century$/i.test(scale):
          case /^dec(ade|ennium)$/i.test(scale):
          case /^lustrum$/i.test(scale):
          case /^years?$/i.test(scale):
            _tmpDate = new Date(_fullYear + 1, 0, 1);
            _remapYear = _fullYear + 1 >= 0 && Math.abs(_fullYear + 1) < 100 ? true : false;
            _offset = _fullYear + 1 >= 0 ? -1 : 1;
            break;

          case /^months?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth() + 1, 1);
            break;

          case /^(week|day)s?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate() + 1);
            break;

          case /^(|half|quarter)-?hours?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours() + 1);
            break;

          case /^minutes?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes() + 1);
            break;

          case /^seconds?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds() + 1);
            break;

          default:
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds() + 1);
            break;
        }

        if (_remapYear) {
          _tmpDate.setFullYear(_fullYear);
        }

        return new Date(_tmpDate.getTime() + _offset);
      }; //console.log( '!_getPluggableDatetime::return:', key )


      switch (true) {
        case /^current(|ly)$/i.test(key):
          // now date
          _date = new Date();
          break;

        case /^auto$/i.test(key):
          {
            var _auto_range = _opts.range && _opts.range > 0 ? parseInt(_opts.range, 10) : 3,
                _higherScale = /^(|week)days?$/i.test(_opts.scale) ? 'month' : this.getHigherScale(_opts.scale);

            if (/^current(|ly)$/i.test(_opts.startDatetime)) {
              _date = getFirstDate(new Date(), _opts.scale);
            } else {
              _date = this.getCorrectDatetime(_opts.startDatetime);
            }

            _date = this.modifyDate(_date, _auto_range, _higherScale);
            break;
          }

        default:
          _date = this.getCorrectDatetime(key);
          break;
      }

      if (!this.is_empty(round_type)) {
        if ('first' === round_type) {
          _date = getFirstDate(_date, _opts.scale);
        } else if ('last' === round_type) {
          _date = getLastDate(_date, _opts.scale);
        }
      } //console.log( '!!_getPluggableDatetime::return:', _date )


      return _date.getTime();
    }
    /*
     * @private: Retrieve the pluggable parameter as an object
     */

  }, {
    key: "_getPluggableParams",
    value: function _getPluggableParams(str_like_params) {
      var params = {};

      if (typeof str_like_params === 'string' && str_like_params) {
        try {
          params = JSON.parse(JSON.stringify(new Function("return ".concat(str_like_params))()));

          if (Object.hasOwnProperty.call(params, 'extend') && typeof params.extend === 'string') {
            params.extend = JSON.parse(JSON.stringify(new Function("return ".concat(params.extend))()));
          }
        } catch (e) {
          //console.warn( 'Can not parse to object therefor invalid param.' )
          this._error('Can not parse to object therefor invalid param.', 'warn');
        }
      }

      return params;
    }
    /*
     * @private: Retrieve the pluggable rows of the timeline (:> プラガブルなタイムラインの行数を取得する
     */

  }, {
    key: "_getPluggableRows",
    value: function _getPluggableRows() {
      var _opts = this._config,
          fixed_rows = this.supplement('auto', _opts.rows, this.validateNumeric);

      if (fixed_rows === 'auto') {
        fixed_rows = _opts.sidebar.list.length;
      }

      return fixed_rows > 0 ? fixed_rows : 1;
    }
    /*
     * @private: Verify the display period of the timeline does not exceed the maximum renderable range (:> タイムラインの表示期間が最大描画可能範囲を超過していないか検証する
     */

  }, {
    key: "_verifyMaxRenderableRange",
    value: function _verifyMaxRenderableRange() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._config.scale;

      this._debug("Verify max renderable range::".concat(scale, ": ").concat(this._instanceProps.grids, " / ").concat(LimitScaleGrids[this._filterScaleKeyName(scale)]));

      return this._instanceProps.grids <= LimitScaleGrids[this._filterScaleKeyName(scale)];
    }
    /*
     * @private: Render the view of timeline container
     */

  }, {
    key: "_renderView",
    value: function _renderView() {
      this._debug('_renderView');

      var _elem = this._element,
          _opts = this._config,
          _props = this._instanceProps,
          _tl_container = $('<div></div>', {
        class: ClassName.TIMELINE_CONTAINER,
        style: "width: ".concat(_props.visibleWidth, "; height: ").concat(_props.visibleHeight, ";")
      }),
          // .jqtl-container
      _tl_main = $('<div></div>', {
        class: ClassName.TIMELINE_MAIN
      }),
          // .jqtl-main
      $_el = $(_elem); // Cached an element
      //console.log( _elem, _opts, _props )


      if ($_el.length == 0) {
        throw new TypeError('Does not exist the element to render a timeline container.');
      }

      this._debug("Timeline:{ fullWidth: ".concat(_props.fullwidth, "px, fullHeight: ").concat(_props.fullheight, "px, viewWidth: ").concat(_props.visibleWidth, ", viewHeight: ").concat(_props.visibleHeight, " }"));

      $_el.css('position', 'relative'); // initialize; not .empty()

      if (_opts.hideScrollbar) {
        _tl_container.addClass(ClassName.HIDE_SCROLLBAR); // .jqtl-hide-scrollbar

      } // Create the timeline headline (:> タイムラインの見出しを生成


      $_el.prepend(this._createHeadline()); // Create the timeline event container (:> タイムラインのイベントコンテナを生成

      _tl_main.append(this._createEventContainer()); // Create the timeline ruler (:> タイムラインの目盛を生成


      if (Object.hasOwnProperty.call(_opts.ruler, 'top') && Object.hasOwnProperty.call(_opts.ruler.top, 'lines') && !this.is_empty(_opts.ruler.top.lines)) {
        _tl_main.prepend(this._createRuler('top'));
      }

      if (Object.hasOwnProperty.call(_opts.ruler, 'bottom') && Object.hasOwnProperty.call(_opts.ruler.bottom, 'lines') && !this.is_empty(_opts.ruler.bottom.lines)) {
        _tl_main.append(this._createRuler('bottom'));
      } // Create the timeline side index (:> タイムラインのサイドインデックスを生成


      var margin = {
        top: parseInt(_tl_main.find(Selector.RULER_TOP).height(), 10) - 1,
        bottom: parseInt(_tl_main.find(Selector.RULER_BOTTOM).height(), 10) - 1
      };

      if (_opts.sidebar.list.length > 0) {
        _tl_container.prepend(this._createSideIndex(margin));
      } // Append the timeline container in the timeline element (:> タイムライン要素にタイムラインコンテナを追加


      _tl_container.append(_tl_main);

      $_el.append(_tl_container); // Create the timeline footer (:> タイムラインのフッタを生成

      $_el.append(this._createFooter()); // Apply the theme color scheme (:> テーマ配色設定を適用

      this.applyThemeStyle();
      this._isShown = true;
    }
    /*
     * @private: Create the headline of the timeline (:> タイムラインの見出しを作成する
     */

  }, {
    key: "_createHeadline",
    value: function _createHeadline() {
      var _opts = this._config,
          _props = this._instanceProps,
          _display = this.supplement(Default.headline.display, _opts.headline.display, this.validateBoolean),
          _title = this.supplement(null, _opts.headline.title),
          _range = this.supplement(Default.headline.range, _opts.headline.range, this.validateBoolean),
          _locale = this.supplement(Default.headline.locale, _opts.headline.locale),
          _format = this.supplement(Default.headline.format, _opts.headline.format),
          _begin = this.supplement(null, _props.begin),
          _end = this.supplement(null, _props.end),
          _scale = _opts.scale,
          _tl_headline = $('<div></div>', {
        class: ClassName.TIMELINE_HEADLINE
      }),
          // .jqtl-headline
      _wrapper = $('<div></div>', {
        class: ClassName.TIMELINE_HEADLINE_WRAPPER
      }); // .jqtl-headline-wrapper


      if (_title) {
        _wrapper.append("<h3 class=\"".concat(ClassName.HEADLINE_TITLE, "\">").concat(_opts.headline.title, "</h3>")); // .jqtl-timeline-title

      }

      if (_range) {
        if (_begin && _end) {
          var _meta = '';

          if (Object.hasOwnProperty.call(_format, 'custom')) {
            _scale = 'custom';
          }

          if (['year', 'month', 'day', 'week'].includes(_scale)) {
            _meta = "".concat(this.getLocaleString(_opts.startDatetime, _scale, _locale, _format), "<span class=\"").concat(ClassName.RANGE_SPAN, "\"></span>").concat(this.getLocaleString(_opts.endDatetime, _scale, _locale, _format));
          } else {
            _meta = "".concat(this.getLocaleString(_begin, _scale, _locale, _format), "<span class=\"").concat(ClassName.RANGE_SPAN, "\"></span>").concat(this.getLocaleString(_end, _scale, _locale, _format));
          }

          _wrapper.append("<div class=\"".concat(ClassName.RANGE_META, "\">").concat(_meta, "</div>")); // .jqtl-range-meta

        }
      }

      if (!_display) {
        _tl_headline.addClass(ClassName.HIDE); // .jqtl-hide

      }

      return _tl_headline.append(_wrapper);
    }
    /*
     * @private: Create the event container of the timeline (:> タイムラインのイベントコンテナを作成する
     */

  }, {
    key: "_createEventContainer",
    value: function _createEventContainer() {
      var _this4 = this;

      var _opts = this._config,
          _props = this._instanceProps,
          _actualHeight = _props.fullheight + Math.ceil(_props.rows / 2) + 1,
          _container = $('<div></div>', {
        class: ClassName.TIMELINE_EVENT_CONTAINER,
        style: "height:".concat(_actualHeight, "px;")
      }),
          _events_bg = $("<canvas width=\"".concat(_props.fullwidth - 1, "\" height=\"").concat(_actualHeight, "\" class=\"").concat(ClassName.TIMELINE_BACKGROUND_GRID, "\"></canvas>")),
          _events_lines = $("<canvas width=\"".concat(_props.fullwidth - 1, "\" height=\"").concat(_actualHeight, "\" class=\"").concat(ClassName.TIMELINE_RELATION_LINES, "\"></canvas>")),
          _events_body = $('<div></div>', {
        class: ClassName.TIMELINE_EVENTS
      }),
          _cy = 0,
          ctx_grid = _events_bg[0].getContext('2d'),
          _grid_style = {
        horizontal: 'dotted',
        vertical: 'solid'
      },
          drawRowRect = function drawRowRect(pos_y, color) {
        color = _this4.supplement(_opts.colorScheme.theme.background, color); // console.log( 0, pos_y, _fullwidth, _size_row, color )

        ctx_grid.fillStyle = color;
        ctx_grid.fillRect(0, pos_y + 0.5, _props.fullwidth, _props.rowSize + 1.5);
        ctx_grid.stroke();
      },
          drawHorizontalLine = function drawHorizontalLine(pos_y, style) {
        var _correction = 0.5;

        switch (true) {
          case /^solid$/i.test(style):
            style = 'solid';
            break;

          case /^dotted$/i.test(style):
            style = 'dotted';
            break;

          case /^none$/i.test(style):
          default:
            return;
        }

        ctx_grid.strokeStyle = _this4.hexToRgbA(_opts.colorScheme.theme.gridbase, 0.1); // 'rgba( 51, 51, 51, 0.1 )'

        ctx_grid.lineWidth = 1;
        ctx_grid.filter = 'url(#crisp)';
        ctx_grid.beginPath();

        if (style === 'dotted') {
          ctx_grid.setLineDash([1, 2]);
        } else {
          ctx_grid.setLineDash([]);
        }

        ctx_grid.moveTo(0, pos_y + _correction);
        ctx_grid.lineTo(_props.fullwidth, pos_y + _correction);
        ctx_grid.closePath();
        ctx_grid.stroke();
      },
          drawVerticalLine = function drawVerticalLine(pos_x, style) {
        var _correction = -0.5;

        switch (true) {
          case /^solid$/i.test(style):
            style = 'solid';
            break;

          case /^dotted$/i.test(style):
            style = 'dotted';
            break;

          case /^none$/i.test(style):
          default:
            return;
        }

        ctx_grid.strokeStyle = _this4.hexToRgbA(_opts.colorScheme.theme.gridbase, 0.1); // 'rgba( 51, 51, 51, 0.025 )'

        ctx_grid.lineWidth = 1;
        ctx_grid.filter = 'url(#crisp)';
        ctx_grid.beginPath();

        if (style === 'dotted') {
          ctx_grid.setLineDash([1, 2]);
        } else {
          ctx_grid.setLineDash([]);
        }

        ctx_grid.moveTo(pos_x + _correction, 0);
        ctx_grid.lineTo(pos_x + _correction, _actualHeight);
        ctx_grid.closePath();
        ctx_grid.stroke();
      };

      if (Object.hasOwnProperty.call(_opts.effects, 'horizontalGridStyle')) {
        _grid_style.horizontal = _opts.effects.horizontalGridStyle;
      }

      if (Object.hasOwnProperty.call(_opts.effects, 'verticalGridStyle')) {
        _grid_style.vertical = _opts.effects.verticalGridStyle;
      }

      _cy = 0;

      for (var i = 0; i < _props.rows; i++) {
        _cy += i % 2 == 0 ? 1 : 0;

        var _pos_y = i * _props.rowSize + _cy,
            _color = this.hexToRgbA(_opts.colorScheme.theme.striped1, 0.1); // '#FEFEFE'


        if (Object.hasOwnProperty.call(_opts.effects, 'stripedGridRow') && _opts.effects.stripedGridRow) {
          _color = i % 2 == 0 ? this.hexToRgbA(_opts.colorScheme.theme.striped1, 0.1) : this.hexToRgbA(_opts.colorScheme.theme.striped2, 0.25); // '#FEFEFE' : '#F8F8F8'
        }

        drawRowRect(_pos_y, _color);
      }

      _cy = 0;

      for (var _i2 = 1; _i2 < _props.rows; _i2++) {
        _cy += _i2 % 2 == 0 ? 1 : 0;

        var _pos_y2 = _i2 * _props.rowSize + _cy;

        drawHorizontalLine(_pos_y2, _grid_style.horizontal);
      }

      if (_props.isVLS) {
        // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
        var _sy = 0,
            _baseVar;

        switch (true) {
          case /^millenniums?|millennia$/i.test(_opts.scale):
          case /^century$/i.test(_opts.scale):
            // unit: years = 365.25 * 24 * 60 * 60 * 1000
            _baseVar = _props.scale / (365.25 * 24 * 60 * 60 * 1000);
            break;

          case /^dec(ade|ennium)$/i.test(_opts.scale):
          case /^lustrum$/i.test(_opts.scale):
          case /^years?$/i.test(_opts.scale):
          case /^months?$/i.test(_opts.scale):
            // unit: days = 24 * 60 * 60 * 1000
            _baseVar = _props.scale / (24 * 60 * 60 * 1000);
            break;

          case /^weeks?$/i.test(_opts.scale):
          case /^(|week)days?$/i.test(_opts.scale):
            // unit: hours = 60 * 60 * 1000
            _baseVar = _props.scale / (60 * 60 * 1000);
            break;

          case /^hours?$/i.test(_opts.scale):
            // unit: minutes = 60 * 1000
            _baseVar = _props.scale / (60 * 1000);
            break;

          case /^minutes?$/i.test(_opts.scale):
            // unit: seconds = 1000
            _baseVar = _props.scale / 1000;
            break;

          case /^seconds?$/i.test(_opts.scale):
          default:
            // unit: milliseconds = 1
            _baseVar = _props.scale / 1;
            break;
        }

        for (var _i3 = 0, _Object$keys = Object.keys(_props.variableScale); _i3 < _Object$keys.length; _i3++) {
          var _key = _Object$keys[_i3];
          _sy += this.numRound(_props.variableScale[_key] * _props.scaleSize / _baseVar, 2);
          drawVerticalLine(_sy, _grid_style.vertical);
        }
      } else {
        // In case of fixed length scale; Deprecated
        for (var _i4 = 1; _i4 < _props.grids; _i4++) {
          drawVerticalLine(_i4 * _props.scaleSize, false);
        }
      }

      return _container.append(_events_bg).append(_events_lines).append(_events_body);
    }
    /*
     * @private: Create the ruler of the timeline (:> タイムラインの目盛を作成する
     */

  }, {
    key: "_createRuler",
    value: function _createRuler(position) {
      var _this5 = this;

      var _opts = this._config,
          _props = this._instanceProps,
          ruler_line = this.supplement([_opts.scale], _opts.ruler[position].lines, function (def, val) {
        if (Array.isArray(val) && val.length > 0) {
          if (Object.hasOwnProperty.call(_opts.ruler, 'truncateLowers') && _opts.ruler.truncateLowers) {
            var _ignore_scales = _this5.findScale(_opts.scale, 'lower all'),
                _filter_scales = val.filter(function (scl) {
              return !_ignore_scales.includes(_this5._filterScaleKeyName(scl));
            }); //console.log( '!_createRuler::truncateLowers:', _opts.scale, _ignore_scales, val, _filter_scales )


            val = _filter_scales;
          }

          return val;
        } else {
          return def;
        }
      }),
          line_height = this.supplement(Default.ruler.top.height, _opts.ruler[position].height),
          font_size = this.supplement(Default.ruler.top.fontSize, _opts.ruler[position].fontSize),
          text_color = this.supplement(Default.ruler.top.color, _opts.ruler[position].color),
          background = this.supplement(Default.ruler.top.background, _opts.ruler[position].background),
          locale = this.supplement(Default.ruler.top.locale, _opts.ruler[position].locale),
          format = this.supplement(Default.ruler.top.format, _opts.ruler[position].format),
          ruler_opts = {
        lines: ruler_line,
        height: line_height,
        fontSize: font_size,
        color: text_color,
        background: background,
        locale: locale,
        format: format
      },
          _fullwidth = _props.fullwidth - 1,
          _fullheight = ruler_line.length * line_height,
          _ruler = $('<div></div>', {
        class: "".concat(PREFIX, "ruler-").concat(position),
        style: "height:".concat(_fullheight, "px;")
      }),
          _ruler_bg = $("<canvas class=\"".concat(PREFIX, "ruler-bg-").concat(position, "\" width=\"").concat(_fullwidth, "\" height=\"").concat(_fullheight, "\"></canvas>")),
          _ruler_body = $('<div></div>', {
        class: "".concat(PREFIX, "ruler-content-").concat(position)
      }),
          _finalLines = 0,
          ctx_ruler = _ruler_bg[0].getContext('2d'); // Override ruler options for applying theme; added since v2.1.0


      if ('inherit' === ruler_opts.color) {
        ruler_opts.color = _opts.colorScheme.theme.subtext;
      }

      if ('inherit' === ruler_opts.background) {
        ruler_opts.background = _opts.colorScheme.theme.background;
      } //console.log( '!_createRuler:', ruler_line, ruler_opts )
      // Draw background of ruler


      ctx_ruler.fillStyle = ruler_opts.background;
      ctx_ruler.fillRect(0, 0, ctx_ruler.canvas.width, ctx_ruler.canvas.height); // Draw stroke of ruler

      ctx_ruler.strokeStyle = this.hexToRgbA(_opts.colorScheme.theme.gridbase, 0.1); // 'rgba( 51, 51, 51, 0.1 )'

      ctx_ruler.lineWidth = 1;
      ctx_ruler.filter = 'url(#crisp)';
      ruler_line.some(function (line_scale, idx) {
        if (/^(quarter|half)-?(|hour)$/i.test(line_scale)) {
          return true; // break
        }

        ctx_ruler.beginPath(); // Draw rows
        //let _line_x = position === 'top' ? 0 : ctx_ruler.canvas.width,

        var _line_y = position === 'top' ? line_height * (idx + 1) - 0.5 : line_height * idx + 0.5;

        ctx_ruler.moveTo(0, _line_y);
        ctx_ruler.lineTo(ctx_ruler.canvas.width, _line_y); // Draw cols

        var _line_grids = null,
            _grid_x = 0,
            _correction = -0.5; // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合


        _line_grids = _this5._filterVariableScale(line_scale); //console.log( '!!_createRuler:', line_scale, _line_grids )

        for (var _i5 = 0, _Object$keys2 = Object.keys(_line_grids); _i5 < _Object$keys2.length; _i5++) {
          var _key = _Object$keys2[_i5];
          _grid_x += _this5.numRound(_line_grids[_key], 2);
          ctx_ruler.moveTo(_grid_x + _correction, position === 'top' ? _line_y - line_height : _line_y);
          ctx_ruler.lineTo(_grid_x + _correction, position === 'top' ? _line_y : _line_y + line_height);
        }

        ctx_ruler.closePath();
        ctx_ruler.stroke();

        _ruler_body.append(_this5._createRulerContent(_line_grids, line_scale, ruler_opts));

        _finalLines++;
      });

      if (ruler_line.length != _finalLines) {
        _ruler.css('height', "".concat(_finalLines * line_height, "px"));
      }

      return _ruler.append(_ruler_bg).append(_ruler_body);
    }
    /*
     * @private: Filter to aggregate the grid width of the variable length scale (:> 可変長スケールのグリッド幅を集約するフィルタ
     *
     * @param: target_scale = a scale of one line on the ruler (:> 目盛1行分のスケール
     * @return: An object of actual grid widths for each individual scale on the set scale of the timeline container (:> タイムラインコンテナの指定スケール上における各個別スケールの実際のグリッド幅のオブジェクト
     */

  }, {
    key: "_filterVariableScale",
    value: function _filterVariableScale(target_scale) {
      var _opts = this._config,
          _props = this._instanceProps,
          // _opts.scale が day の場合は時間/日、それ以外の場合は日/年となる
      scales = _props.variableScale,
          retObj = {},
          _baseVar;

      switch (true) {
        case /^millenniums?|millennia$/i.test(_opts.scale):
        case /^century$/i.test(_opts.scale):
          // unit: years = 365.25 * 24 * 60 * 60 * 1000
          _baseVar = _props.scale / (365.25 * 24 * 60 * 60 * 1000);
          break;

        case /^dec(ade|ennium)$/i.test(_opts.scale):
        case /^lustrum$/i.test(_opts.scale):
        case /^years?$/i.test(_opts.scale):
        case /^months?$/i.test(_opts.scale):
          // unit: days = 24 * 60 * 60 * 1000
          _baseVar = _props.scale / (24 * 60 * 60 * 1000);
          break;

        case /^weeks?$/i.test(_opts.scale):
        case /^(|week)days?$/i.test(_opts.scale):
          // unit: hours = 60 * 60 * 1000
          _baseVar = _props.scale / (60 * 60 * 1000);
          break;

        case /^hours?$/i.test(_opts.scale):
          // unit: minutes = 60 * 1000
          _baseVar = _props.scale / (60 * 1000);
          break;

        case /^minutes?$/i.test(_opts.scale):
          // unit: seconds = 1000
          _baseVar = _props.scale / 1000;
          break;

        case /^seconds?$/i.test(_opts.scale):
        default:
          // unit: milliseconds = 1
          _baseVar = _props.scale / 1;
          break;
      } // グリッド幅の起点となるスケールは _opts.scale で、表示用にフィルタされるスケールは target_scale なので、それに合わせてサイズを計算する
      //console.log( `!_filterVariableScale::${_opts.scale} -> ${target_scale}:`, scales )


      for (var _i6 = 0, _Object$keys3 = Object.keys(scales); _i6 < _Object$keys3.length; _i6++) {
        var _dt = _Object$keys3[_i6];

        var grid_size = this.numRound(scales[_dt] * _props.scaleSize / _baseVar, 2),
            _newKey = null,
            _arr = _dt.split(','),
            _tmpDt = /^weeks?$/i.test(_opts.scale) ? this.getFirstDayOfWeek(parseInt(_arr[1], 10), parseInt(_arr[0], 10)) : this.getCorrectDatetime(_arr[0]),
            _temp = void 0; //console.log( '!!_filterVariableScale:', _dt, this.getCorrectDatetime( _dt ), _props.scaleSize, scales[_dt], grid_size )


        switch (true) {
          case /^millenniums?|millennia$/i.test(target_scale):
            //_years = 1000
            _newKey = Math.ceil(_tmpDt.getFullYear() / 1000); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^century$/i.test(target_scale):
            //_years = 100
            _newKey = Math.ceil(_tmpDt.getFullYear() / 100); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^dec(ade|ennium)$/i.test(target_scale):
            //_years = 10
            _newKey = Math.ceil(_tmpDt.getFullYear() / 10); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^lustrum$/i.test(target_scale):
            //_years = 5
            _newKey = Math.ceil(_tmpDt.getFullYear() / 5); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^years?$/i.test(target_scale):
            //_days = scales[_dt]
            _newKey = "".concat(_tmpDt.getFullYear()); //grid_size = this.numRound( ( _days * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^months?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1);
            break;

          case /^weeks?$/i.test(target_scale):
            if (/^weeks?$/i.test(_opts.scale)) {
              _newKey = _arr.join();
            } else {
              _temp = this.getWeek(_tmpDt);
              _newKey = "".concat(_tmpDt.getFullYear(), ",").concat(_temp);
            } //console.log( `!!_filterVariableScale::${target_scale}:`, _opts.scale, _arr, _tmpDt, _temp, _newKey )


            break;

          case /^weekdays?$/i.test(target_scale):
            if (/^weeks?$/i.test(_opts.scale) && this.is_empty(retObj)) {
              _tmpDt = new Date(_props.begin);
            }

            _temp = _tmpDt.getDay();
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), ",").concat(_temp);
            break;

          case /^days?$/i.test(target_scale):
            if (/^weeks?$/i.test(_opts.scale) && this.is_empty(retObj)) {
              _tmpDt = new Date(_props.begin);
            }

            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate());
            break;

          case /^hours?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0`] = grid_size

            break;

          case /^minutes?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours(), ":").concat(_tmpDt.getMinutes()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00`] = grid_size

            break;

          case /^seconds?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours(), ":").concat(_tmpDt.getMinutes(), ":").concat(_tmpDt.getSeconds()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00:00`] = grid_size

            break;

          default:
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours(), ":").concat(_tmpDt.getMinutes(), ":").concat(_tmpDt.getSeconds(), ".").concat(_tmpDt.getMilliseconds()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}`] = grid_size

            break;
        } //console.log( `!!!_filterVariableScale::${target_scale}:`, _dt, _newKey, grid_size )


        if (Object.hasOwnProperty.call(retObj, _newKey)) {
          retObj[_newKey] += grid_size;
        } else {
          retObj[_newKey] = grid_size;
        }
      } //console.log( `!!!_filterVariableScale::${_opts.scale} -> ${target_scale}:`, retObj )


      return retObj;
    }
    /*
     * @private: Create the content of ruler of the timeline (:> タイムラインの目盛本文を作成する
     */

  }, {
    key: "_createRulerContent",
    value: function _createRulerContent(_line_grids, line_scale, ruler) {
      var line_height = this.supplement(Default.ruler.top.height, ruler.height),
          font_size = this.supplement(Default.ruler.top.fontSize, ruler.fontSize),
          text_color = this.supplement(Default.ruler.top.color, ruler.color),
          locale = this.supplement(Default.ruler.top.locale, ruler.locale, this.validateString),
          format = this.supplement(Default.ruler.top.format, ruler.format, this.validateObject),
          _ruler_lines = $('<div></div>', {
        class: ClassName.TIMELINE_RULER_LINES,
        style: "width:100%;height:".concat(line_height, "px;")
      }); //console.log( '!_createRulerContent::', ruler, line_scale, text_color, locale, format )


      for (var _i7 = 0, _Object$keys4 = Object.keys(_line_grids); _i7 < _Object$keys4.length; _i7++) {
        var _key = _Object$keys4[_i7];

        var _item_width = _line_grids[_key],
            _line = $('<div></div>', {
          class: ClassName.TIMELINE_RULER_ITEM,
          style: "width:".concat(_item_width, "px;height:").concat(line_height, "px;line-height:").concat(line_height, "px;font-size:").concat(font_size, "px;color:").concat(text_color, ";")
        }),
            _ruler_string = this.getLocaleString(_key, this._filterScaleKeyName(line_scale), locale, format),
            _data_ruler_item = ''; //console.log( '!_createRulerContent::', _key, line_scale, _ruler_string )


        _data_ruler_item = "".concat(line_scale, "-").concat(_data_ruler_item === '' ? String(_key) : _data_ruler_item);

        _line.attr('data-ruler-item', _data_ruler_item).html("<span>".concat(_ruler_string, "</span>"));

        if (_item_width > this.strWidth(_ruler_string)) {// Adjust position of ruler item string

          /*
          //console.log( _item_width, _ruler_string, _ruler_string.toString().length, this.strWidth( _ruler_string ), $(this._element).get(0).clientWidth )
          if ( _item_width > $(this._element).width() ) {
              _line.children('span').addClass( ClassName.RULER_ITEM_ALIGN_LEFT )
          }
          */
        }

        _ruler_lines.append(_line).attr('data-ruler-scope', line_scale);
      }

      return _ruler_lines;
    }
    /*
     * @private: Create the side indexes of the timeline (:> タイムラインのサイド・インデックスを作成する
     */

  }, {
    key: "_createSideIndex",
    value: function _createSideIndex(margin) {
      var _opts = this._config,
          _props = this._instanceProps,
          _sticky = this.supplement(Default.sidebar.sticky, _opts.sidebar.sticky),
          _overlay = this.supplement(Default.sidebar.overlay, _opts.sidebar.overlay),
          _sbList = this.supplement(Default.sidebar.list, _opts.sidebar.list),
          _wrapper = $('<div></div>', {
        class: ClassName.TIMELINE_SIDEBAR
      }),
          _margin = $('<div></div>', {
        class: ClassName.TIMELINE_SIDEBAR_MARGIN
      }),
          _list = $('<div></div>', {
        class: ClassName.TIMELINE_SIDEBAR_ITEM
      }),
          _item_h = this.numRound((_props.fullheight + Math.ceil(_props.rows / 2)) / _props.rows, 2),
          // Actual height of container: fullheight + Math.ceil( rows / 2 )
      _c = -0.5;

      if (_sticky) {
        _wrapper.addClass(ClassName.STICKY_LEFT);
      }

      if (_overlay) {
        _list.addClass(ClassName.OVERLAY);
      }

      if (margin.top > 0) {
        _wrapper.prepend(_margin.clone().css('height', "".concat(margin.top, "px")));
      }

      for (var i = 0; i < _props.rows; i++) {
        var _item = _list.clone().html("".concat(_sbList[i]));

        if (i + 1 == _props.rows) {
          _item.css('height', "".concat(_item_h + _c, "px")).css('line-height', "".concat(_item_h + _c, "px"));
        } else {
          _item.css('height', "".concat(_item_h - 1, "px")).css('line-height', "".concat(_item_h - 1, "px"));
        }

        _wrapper.append(_item);
      }

      if (margin.bottom > 0) {
        _wrapper.append(_margin.clone().css('height', "".concat(margin.bottom + _c, "px")));
      }

      return _wrapper;
    }
    /*
     * @private: Create the footer of the timeline (:> タイムラインのフッターを作成する
     */

  }, {
    key: "_createFooter",
    value: function _createFooter() {
      var _opts = this._config,
          _props = this._instanceProps,
          _display = this.supplement(Default.footer.display, _opts.footer.display),
          _content = this.supplement(null, _opts.footer.content),
          _range = this.supplement(Default.footer.range, _opts.footer.range),
          _locale = this.supplement(Default.footer.locale, _opts.footer.locale),
          _format = this.supplement(Default.footer.format, _opts.footer.format),
          _begin = this.supplement(null, _props.begin),
          _end = this.supplement(null, _props.end),
          _scale = _opts.scale,
          _tl_footer = $('<div></div>', {
        class: ClassName.TIMELINE_FOOTER
      });

      if (_range) {
        if (_begin && _end) {
          if (Object.hasOwnProperty.call(_format, 'custom')) {
            _scale = 'custom';
          }

          var _meta = "".concat(this.getLocaleString(_begin, _scale, _locale, _format), "<span class=\"").concat(ClassName.RANGE_SPAN, "\"></span>").concat(this.getLocaleString(_end, _scale, _locale, _format));

          _tl_footer.append("<div class=\"".concat(ClassName.RANGE_META, " ").concat(ClassName.ALIGN_SELF_RIGHT, "\">").concat(_meta, "</div>"));
        }
      }

      if (_content) {
        _tl_footer.append("<div class=\"".concat(ClassName.TIMELINE_FOOTER_CONTENT, "\">").concat(_content, "</div>"));
      }

      if (!_display) {
        _tl_footer.addClass(ClassName.HIDE);
      }

      return _tl_footer;
    }
    /*
     * @private: Load all enabled events markupped on target element to the timeline object (:> 対象要素にマークアップされたすべての有効なイベントをタイムラインにロードする
     *           Firstly load default events bound to plugin config (:> 最初にプラグイン設定にバインドされた初期イベントをロードする
     */

  }, {
    key: "_loadEvent",
    value: function _loadEvent() {
      var _this6 = this;

      this._debug('_loadEvent');

      var _that = this,
          _elem = this._element,
          _opts = this._config,
          _default_events = _opts.eventData,
          _event_list = $(_elem).find(Selector.DEFAULT_EVENTS),
          _cnt = _default_events.length,
          events = [],
          lastEventId = 0;

      _event_list.children().each(function () {
        var _attr = $(this).attr('data-timeline-node');

        if (typeof _attr !== 'undefined' && _attr !== false) {
          _cnt++;
        }
      });

      if (_cnt == 0) {
        //this._debug( 'Enable event does not exist.' )
        //console.warn( 'Enable event does not exist.' )
        this._error('Enable event does not exist.', 'warn');
      } // Register Event Data


      if (_default_events.length > 0) {
        _default_events.forEach(function (_evt_obj) {
          var _one_event = {};

          if (!_this6.is_empty(_evt_obj)) {
            _one_event = _this6._registerEventData('<div></div>', _evt_obj);
            events.push(_one_event);
            lastEventId = Math.max(lastEventId, parseInt(_one_event.eventId, 10));
          }
        });
      }

      _event_list.children().each(function () {
        var _evt_params = _that._getPluggableParams($(this).attr('data-timeline-node')),
            _one_event = {};

        if (!_that.is_empty(_evt_params)) {
          _one_event = _that._registerEventData(this, _evt_params);
          events.push(_one_event);
          lastEventId = Math.max(lastEventId, parseInt(_one_event.eventId, 10));
        }
      }); // Set event id with auto increment


      var cacheIds = []; // for checking duplication of id

      events.forEach(function (_evt, _i, _this) {
        var _chkId = parseInt(_this[_i].eventId, 10);

        if (_chkId == 0 || cacheIds.includes(_chkId)) {
          lastEventId++;
          _this[_i].eventId = lastEventId;
        } else {
          _this[_i].eventId = _chkId;
        }

        cacheIds.push(_this[_i].eventId);
      }); // Hook to event colors; Added instead of merging setColorEvent of PR#37

      events.forEach(function (_evt, _i, _this) {
        if (Object.hasOwnProperty.call(_opts.colorScheme, 'event') && _typeof(_opts.colorScheme.event) === 'object') {
          // Firstly overwrite default colors
          if (Object.hasOwnProperty.call(_opts.colorScheme.event, 'text') && _evt.color === Default.colorScheme.event.text && Default.colorScheme.event.text !== _opts.colorScheme.event.text) {
            _this[_i].color = _opts.colorScheme.event.text;
          }

          if (Object.hasOwnProperty.call(_opts.colorScheme.event, 'background') && _evt.bgColor === Default.colorScheme.event.background && Default.colorScheme.event.background !== _opts.colorScheme.event.background) {
            _this[_i].bgColor = _opts.colorScheme.event.background;
          }

          if (Object.hasOwnProperty.call(_opts.colorScheme.event, 'border') && _evt.bdColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _opts.colorScheme.event.border) {
            _this[_i].bdColor = _opts.colorScheme.event.border;
          }
        }

        if (Object.hasOwnProperty.call(_opts.colorScheme, 'hookEventColors') && typeof _opts.colorScheme.hookEventColors === 'function') {
          // Lastly, overwrite current colors
          var _new_colors = _opts.colorScheme.hookEventColors(_evt, {
            text: _this[_i].color,
            border: _this[_i].bdColor,
            background: _this[_i].bgColor
          }) || undefined;

          if (_typeof(_new_colors) === 'object') {
            if (Object.hasOwnProperty.call(_new_colors, 'text') && _evt.color !== _new_colors.text) {
              _this[_i].color = _new_colors.text;
            }

            if (Object.hasOwnProperty.call(_new_colors, 'background') && _evt.bgColor !== _new_colors.background) {
              _this[_i].bgColor = _new_colors.background;
            }

            if (Object.hasOwnProperty.call(_new_colors, 'border') && _evt.bdColor !== _new_colors.border) {
              _this[_i].bdColor = _new_colors.border;
            }
          }
        }
      });
      this._isCached = this._saveToCache(events);
    }
    /*
     * @private: Register one event data as object (:> イベントデータをオブジェクトとして登録する
     */

  }, {
    key: "_registerEventData",
    value: function _registerEventData(event_element, params) {
      var _this7 = this;

      var _opts = this._config,
          _props = this._instanceProps,
          new_event = _objectSpread(_objectSpread({}, EventParams), {
        uid: this.generateUniqueID(),
        label: $(event_element).html()
      }),
          _relation = {},
          _x,
          _w,
          _row,
          _c; //, _pointSize
      //console.log( '!_registerEventData:', EventParams, new_event )


      if (Object.hasOwnProperty.call(params, 'start') && !this.is_empty(params.start)) {
        _x = this._getCoordinateX(params.start);
        new_event.x = this.numRound(_x, 2);

        if (Object.hasOwnProperty.call(params, 'end') && !this.is_empty(params.end)) {
          _x = this._getCoordinateX(params.end);
          _w = _x - new_event.x;
          new_event.width = this.numRound(_w, 2);

          if (_opts.eventMeta.display) {
            if (this.is_empty(_opts.eventMeta.content) && !Object.hasOwnProperty.call(params, 'rangeMeta')) {
              //console.log( '!_registerEventData::', _opts.eventMeta.locale, _opts.eventMeta.format, _opts.scale, params )
              new_event.rangeMeta += this.getLocaleString(params.start, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format);
              new_event.rangeMeta += " - ".concat(this.getLocaleString(params.end, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format));
            } else {
              new_event.rangeMeta = _opts.eventMeta.content;
            }
          }
        } else {
          new_event.width = 0;
        }

        _row = Object.hasOwnProperty.call(params, 'row') ? parseInt(params.row, 10) : 1;
        _c = Math.floor(_row / 2);
        new_event.y = (_row - 1) * _opts.rowHeight + new_event.margin + _c;
        new_event.height = _opts.rowHeight - _opts.marginHeight * 2;
        Object.keys(new_event).forEach(function (_prop) {
          switch (true) {
            case /^eventId$/i.test(_prop):
              if (Object.hasOwnProperty.call(params, 'id')) {
                new_event.eventId = parseInt(params.id, 10);
              } else {
                new_event.eventId = parseInt(params[_prop], 10) || 0;
              }

              break;

            case /^(label|content)$/i.test(_prop):
              if (Object.hasOwnProperty.call(params, _prop) && !_this7.is_empty(params[_prop])) {
                new_event[_prop] = params[_prop];
              } // Override the children element to label or content setting


              if ($(event_element).children(".event-".concat(_prop)).length > 0) {
                new_event[_prop] = $(event_element).children(".event-".concat(_prop)).html();
              }

              break;

            case /^relation$/i.test(_prop):
              // For drawing the relation line
              if (/^mix(|ed)$/i.test(_opts.type) || /^point(|er)$/i.test(_opts.type)) {
                //let _pointSize  = this._getPointerSize( new_event.size, new_event.margin )
                _relation.x = _this7.numRound(new_event.x, 2);
                _relation.y = _this7.numRound(_props.rowSize * ((params.row || 1) - 1) + _props.rowSize / 2, 2) + ((params.row || 1) - 1) * 0.5; //console.log( '!_registerEventData:', params, _props, new_event.x, new_event.y, _pointSize, _relation )

                new_event[_prop] = _objectSpread(_objectSpread({}, params[_prop]), _relation);
              }

              break;

            default:
              if (Object.hasOwnProperty.call(params, _prop) && !_this7.is_empty(params[_prop])) {
                new_event[_prop] = params[_prop];
              }

              break;
          }
        });
      } //console.log( '!_registerEventData:', new_event )


      return new_event;
    }
    /*
     * @private: Get the coordinate X on the timeline of any date
     */

  }, {
    key: "_getCoordinateX",
    value: function _getCoordinateX(date) {
      /*
      // add new since v2.0.0 : start
      if ( this._config.scale === "day" ) {
          let dateAdjust = new Date( date )
           if ( dateAdjust.getHours() <= this._config.startHour ) {
              date = `${dateAdjust.getFullYear()}-${(dateAdjust.getMonth() + 1)}-${dateAdjust.getDate()} 00:00:00`
          } else
          if ( dateAdjust.getHours() >= this._config.endHour ) {
              date = `${dateAdjust.getFullYear()}-${(dateAdjust.getMonth() + 1)}-${dateAdjust.getDate()} 23:59:59`
          }
      }
      // add new since v2.0.0 : end
      */
      var _props = this._instanceProps,
          _date = this.supplement(null, this._getPluggableDatetime(date)),
          coordinate_x = 0; //console.log( '!_getCoordinateX::', _props, _date )


      if (_date) {
        if (_date - _props.begin >= 0 && _props.end - _date >= 0) {
          // When the given date is within the range of timeline begin and end (:> 指定された日付がタイムラインの開始と終了の範囲内にある場合
          coordinate_x = Math.abs(_date - _props.begin) / _props.scale * _props.scaleSize;
        } else {
          // When the given date is out of timeline range (:> 指定された日付がタイムラインの範囲外にある場合
          coordinate_x = (_date - _props.begin) / _props.scale * _props.scaleSize;
        }
      } else {
        //console.warn( 'Cannot parse date because invalid format or undefined.' )
        this._error('Cannot parse date because invalid format or undefined.', 'warn');
      }

      return coordinate_x;
    }
    /*
     * @private: Cache the event data to the web storage
     */

  }, {
    key: "_saveToCache",
    value: function _saveToCache(data) {
      var strageEngine = /^local(|Storage)$/i.test(this._config.storage) ? 'localStorage' : 'sessionStorage',
          is_available = strageEngine in window && (strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage) !== null;

      if (is_available) {
        if (strageEngine === 'localStorage') {
          localStorage.setItem(this._selector, JSON.stringify(data));
        } else {
          sessionStorage.setItem(this._selector, JSON.stringify(data));
        }

        return true;
      } else {
        throw new TypeError("The storage named \"".concat(strageEngine, "\" can not be available."));
      }
    }
    /*
     * @private: Load the cached event data from the web storage
     */

  }, {
    key: "_loadToCache",
    value: function _loadToCache() {
      var strageEngine = /^local(|Storage)$/i.test(this._config.storage) ? 'localStorage' : 'sessionStorage',
          is_available = strageEngine in window && (strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage) !== null,
          data = null;

      if (is_available) {
        if (strageEngine === 'localStorage') {
          data = JSON.parse(localStorage.getItem(this._selector));
        } else {
          data = JSON.parse(sessionStorage.getItem(this._selector));
        }
      } else {
        throw new TypeError("The storage named \"".concat(strageEngine, "\" can not be available."));
      }

      return data;
    }
    /*
     * @private: Remove the cache data on the web storage
     */

  }, {
    key: "_removeCache",
    value: function _removeCache() {
      var strageEngine = /^local(|Storage)$/i.test(this._config.storage) ? 'localStorage' : 'sessionStorage',
          is_available = strageEngine in window && (strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage) !== null;

      if (is_available) {
        if (strageEngine === 'localStorage') {
          localStorage.removeItem(this._selector);
        } else {
          sessionStorage.removeItem(this._selector);
        }
      } else {
        throw new TypeError("The storage named \"".concat(strageEngine, "\" can not be available."));
      }
    }
    /*
     * @private: Controller method to place event data on timeline
     */

  }, {
    key: "_placeEvent",
    value: function _placeEvent() {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        _this8._debug('_placeEvent');

        if (!_this8._isCached) {
          //return
          reject('No Cached Event');
        }

        var _elem = _this8._element,
            _opts = _this8._config,
            _evt_container = $(_elem).find(Selector.TIMELINE_EVENTS),
            _relation_lines = $(_elem).find(Selector.TIMELINE_RELATION_LINES),
            events = _this8._loadToCache(),
            placedEvents = []; // c.f. https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver


        _this8._observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            var _self = mutation.target;

            switch (mutation.type) {
              case 'childList':
                // console.log( 'MutationObserver::childList:', mutation.addedNodes.length, placedEvents.length )
                if (mutation.addedNodes.length == placedEvents.length) {
                  _relation_lines.attr('data-state', 'show');

                  _evt_container.attr('data-state', 'show');
                }

                break;

              case 'attributes':
                if (mutation.attributeName === 'data-state') {
                  // console.log( 'MutationObserver::attributes:', $(_self).attr('data-state') )
                  if ($(_self).attr('data-state') === 'shown') {
                    resolve('Completed Placing');
                  } else if ($(_self).attr('data-state') === 'show') {
                    setTimeout(function () {
                      _relation_lines.attr('data-state', 'shown');

                      _evt_container.attr('data-state', 'shown');
                    }, 300);
                  }
                }

                break;
            }
          });
        });

        _this8._observer.observe(_evt_container.get(0), {
          childList: true,
          attributes: true,
          subtree: true,
          attributeOldValue: true
        });

        if (events.length > 0) {
          _evt_container.empty();
          /*
          // add new since v2.0.0 : start
          events = events.sort( (a, b) => a.width < b.width ? 1 : -1 ) // sort elements
          // add new since v2.0.0 : end
          */


          events.forEach(function (_evt) {
            // Apply color scheme to the creation event
            if (_evt.color === Default.colorScheme.event.text && Default.colorScheme.event.text !== _opts.colorScheme.event.text) {
              _evt.color = _opts.colorScheme.event.text;
            }

            if (_evt.bgColor === Default.colorScheme.event.background && Default.colorScheme.event.background !== _opts.colorScheme.event.background) {
              _evt.bgColor = _opts.colorScheme.event.background;
            }

            if (_evt.bdColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _opts.colorScheme.event.border) {
              _evt.bdColor = _opts.colorScheme.event.border;
            }

            var _evt_elem = _this8._createEventNode(_evt);

            if (_evt_elem) {
              //_evt_container.append( _evt_elem )
              placedEvents.push(_evt_elem);
            }
          });

          if (placedEvents.length > 0) {
            _evt_container.append.apply(_evt_container, placedEvents);
          }
        } else {
          _relation_lines.attr('data-state', 'show');

          _evt_container.attr('data-state', 'show');
        }

        if (/^mix(|ed)$/i.test(_opts.type) || /^point(|er)$/i.test(_opts.type)) {
          _this8._drawRelationLine(events);
        }

        if (Object.hasOwnProperty.call(_opts.effects, 'presentTime') && _opts.effects.presentTime) {
          _this8._viewPresentTime();
        }

        resolve(true);
      }); // return Promise
    }
    /*
     * @private: Create an event element on the timeline (:> タイムライン上にイベント要素を作成する
     */

  }, {
    key: "_createEventNode",
    value: function _createEventNode(params) {
      var _opts = this._config,
          _props = this._instanceProps,
          _evt_elem = $('<div></div>', {
        class: ClassName.TIMELINE_EVENT_NODE,
        id: "evt-".concat(params.eventId),
        css: {
          left: "".concat(params.x, "px"),
          top: "".concat(params.y, "px"),
          width: "".concat(params.width, "px"),
          height: "".concat(params.height, "px"),
          color: this.hexToRgbA(params.color),
          backgroundColor: this.hexToRgbA(params.bgColor)
        },
        html: "<div class=\"".concat(ClassName.TIMELINE_EVENT_LABEL, "\">").concat(params.label, "</div>")
      }),
          _is_bar = true; // Whether this event type is bar or point


      if (/^point(|er)$/i.test(_opts.type)) {
        _is_bar = false; // point type
      } else if (/^mix(|ed)$/i.test(_opts.type)) {
        if (/^point(|er)$/i.test(params.type)) {
          _is_bar = false; // point type
        } else if (params.width < 1) {
          _is_bar = !/^bar$/i.test(params.type) ? false : true;
        }
      } //console.log( '!_createEventNode:', params, _is_bar )
      // Whether this event is within the display range of the timeline (:> タイムライン表示範囲内のイベントかどうか
      // For events excluded, set the width to -1 (:> 除外イベントは幅を -1 に設定する


      if (params.x >= 0) {
        // The event start datetime is over the start datetime of the timeline (:> イベント始点がタイムラインの始点以上
        if (params.x <= _props.fullwidth) {
          // The event start datetime is less than or equal to the timeline end datetime (:> イベントの始点がタイムラインの終点以下
          if (params.x + params.width <= _props.fullwidth) {// The event end datetime is less than before the timeline end datetime (regular event) (:> イベント終点がタイムラインの終点以下（通常イベント）
            // OK
          } else {
            // The event end datetime is after the timeline end datetime (event exceeded end datetime) (:> イベント終点がタイムラインの終点より後（終点超過イベント）
            params.width = _props.fullwidth - params.x; // add new since v2.0.0 : start
            //_evt_elem.append( `<span class="${ClassName.TIMELINE_EVENT_NODE}-next glyphicon glyphicon-search glyphicon-chevron-right" aria-hidden="true"></span>` )
            // add new since v2.0.0 : end
          }
        } else {
          // The event start datetime is after the timeline end datetime (exclude event) (:> イベント始点がタイムラインの終点より後（除外イベント）
          params.width = -1;
        }
      } else {
        // The event start datetime is before the timeline start datetime (:> イベント始点がタイムラインの始点より前
        if (!_is_bar) {
          // In the case of "point" type, that is an exclude event (:> ポインター型の場合は除外イベント
          params.width = -1;
        } else {
          // The case of "bar" type
          if (params.x + params.width <= 0) {
            // The event end datetime is less than before the timeline start datetime (exclude event) (:> イベント終点がタイムラインの始点より前（除外イベント）
            params.width = -1;
          } else {
            // The event end datetime is after the timeline start datetime (:> イベント終点がタイムラインの始点より後
            if (params.x + params.width <= _props.fullwidth) {
              // The event end datetime is less than or equal the timeline end datetime (event exceeded start datetime) (:> イベント終点がタイムラインの終点以下（始点超過イベント）
              params.width = Math.abs(params.x + params.width); // add new since v2.0.0 : start
              //_evt_elem.prepend( `<span class="${ClassName.TIMELINE_EVENT_NODE}-before glyphicon glyphicon-search glyphicon-chevron-left" aria-hidden="true"></span>` )
              // add new since v2.0.0 : end

              params.x = 0;
            } else {
              // The event end datetime is after the timeline end datetime (event exceeded both start and end datetime) (:> イベント終点がタイムラインの終点より後（始点・終点ともに超過イベント）
              params.width = _props.fullwidth; // add new since v2.0.0 : start
              //_evt_elem.append( `<span class="${ClassName.TIMELINE_EVENT_NODE}-next glyphicon glyphicon-search glyphicon-chevron-right" aria-hidden="true"></span>` )
              //_evt_elem.prepend( `<span class="${ClassName.TIMELINE_EVENT_NODE}-before glyphicon glyphicon-search glyphicon-chevron-left" aria-hidden="true"></span>` )
              // add new since v2.0.0 : end

              params.x = 0;
            }
          }
        }
      } //console.log( 'x:', params.x, 'w:', params.width, 'x-end:', Math.abs( params.x ) + params.width, 'fw:', _props.fullwidth, 'ps:', params.size )


      if (!_is_bar) {
        // If this event is the point type
        if (params.width < 0) {
          return null;
        }

        var _pointSize = this._getPointerSize(params.size, params.margin),
            _shiftX = this.numRound(params.x - _pointSize / 2, 2) - params.margin,
            _shiftY = this.numRound(params.y + (params.height - _pointSize) / 2, 2) - params.margin; //console.log( '!!_createEventNode::', params, _pointSize, _shiftX, _shiftY )


        _evt_elem.addClass(ClassName.VIEWER_EVENT_TYPE_POINTER).css('border-color', params.bdColor).css('left', "".concat(_shiftX, "px")).css('top', "".concat(_shiftY, "px")).css('width', "".concat(_pointSize, "px")).css('height', "".concat(_pointSize, "px")).attr('data-base-size', _pointSize).attr('data-base-left', _shiftX).attr('data-base-top', _shiftY);
      } else {
        // If this event is the bar type
        if (params.width < 1) {
          return null;
        }

        _evt_elem.css('left', "".concat(params.x, "px")).css('width', "".concat(params.width, "px"));
        /*
        // add new since v2.0.0 : start
        if ( params.width < 15 ) {
            // Create Event info on bullet point
            let date_start = new Date( params.start ),
                date_start_grid, correction_x, correction_y
             switch ( true ) {
                case /^months?$/i.test( _opts.scale ):
                    correction_x = 6
                    date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                     _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getDate()} : ${params.label}</div>` )
                    break
                case /^(|week)days?$/i.test( _opts.scale ):
                    correction_x = 0
                    date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                     _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getHours()}:${date_start.getMinutes()} : ${params.label}</div>` )
                    break
                case /^hours?$/i.test( _opts.scale ):
                    correction_x = 0
                    date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                     _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getHours()}:${date_start.getMinutes()} : ${params.label}</div>` )
                    break
            }
            if ( this._countEventinCell[params.row] == null ) {
                this._countEventinCell[params.row] = {}
            }
            if ( this._countEventinCell[params.row][date_start_grid] == null ) {
                this._countEventinCell[params.row][date_start_grid] = 0
            }
            correction_y = this._countEventinCell[params.row][date_start_grid] * EventParams.height
            this._countEventinCell[params.row][date_start_grid]++
             if ( (this._countEventinCell[params.row][date_start_grid] * EventParams.height) > this._config.rowHeight ) {
                 this._config.rowHeight = this._countEventinCell[params.row][date_start_grid] * EventParams.height
                 this.reload( this._config )
                 //console.log("Reload : " + this._config.rowHeight);
            }
             params.x = this._getCoordinateX( date_start_grid )
            _evt_elem.css( 'top', `${this.numRound( params.y+correction_y, 2 )}px` ).css( 'backgroundColor', 'transparent' )
            .css( 'color', 'black' ).css( 'left', `${this.numRound( params.x+correction_x, 2 )}px` )
            .css( 'width', `${this._config.minGridSize}px` ) // .css('height', `12px`)
            //return null
        } else {
            let date_start = new Date( params.start ),
                date_end   = new Date( params.end ),
                date_test_grid, correction_y, date_test_grid_index
             switch ( true ) {
                case /^months?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                    break
                case /^(|week)days?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                    break
                case /^hours?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                    break
            }
            if ( this._countEventinCell[params.row] == null ) {
                this._countEventinCell[params.row] = {}
            }
            if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                this._countEventinCell[params.row][date_test_grid_index] = 0
            }
            correction_y = this._countEventinCell[params.row][date_test_grid_index]
             // For all grid between start / end, search max Position Y
            date_test_grid = date_start
            while ( date_test_grid <= date_end ) {
                switch ( true ) {
                    case /^months?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth() + 1, 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-1`
                        break;
                    case /^(|week)days?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} 00:00`
                        break;
                    case /^hours?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate(), date_test_grid.getHours() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} ${date_test_grid.getHours()}:00`
                        break;
                }
                 if ( this._countEventinCell[params.row] == null ) {
                    this._countEventinCell[params.row] = {}
                }
                if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                    this._countEventinCell[params.row][date_test_grid_index] = 0
                }
                correction_y = Math.max( this._countEventinCell[params.row][date_test_grid_index], correction_y )
            }
             // set new position
            correction_y++
             switch ( true ) {
                case /^months?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                    break;
                case /^(|week)days?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                    break;
                case /^hours?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                    break;
            }
            this._countEventinCell[params.row][date_test_grid_index] = correction_y;
             // For all grid between start / end, set new Position Y
            date_test_grid = date_start;
            while ( date_test_grid <= date_end ) {
                switch ( true ) {
                    case /^months?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth() + 1, 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-1`
                        break
                    case /^(|week)days?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} 00:00`
                        break
                    case /^hours?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate(), date_test_grid.getHours() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} ${date_test_grid.getHours()}:00`
                        break
                }
                 if ( this._countEventinCell[params.row] == null ) {
                    this._countEventinCell[params.row] = {}
                }
                if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                    this._countEventinCell[params.row][date_test_grid_index] = 0
                }
                 this._countEventinCell[params.row][date_test_grid_index] = correction_y
            }
             if ( ( correction_y * EventParams.height ) > this._config.rowHeight ) {
                 this._config.rowHeight = correction_y * EventParams.height
                 this.reload( this._config )
            }
            _evt_elem.css( 'top', `${this.numRound( params.y + ( (correction_y - 1) * EventParams.height ), 2 )}px` )
            .css( 'left', `${params.x}px` ).css( 'width', `${params.width}px` ).css( 'border', `1px solid ${EventParams.bdColor}` )
        }
        // add new since v2.0.0 : end
        */

      }

      _evt_elem.attr('data-uid', params.uid);
      /*
      // add new since v2.0.0 : start
      _evt_elem.attr( 'data-category', params.category);
      // add new since v2.0.0 : end
      */


      if (!this.is_empty(params.image)) {
        if (!_is_bar) {
          _evt_elem.css('background-image', "url(".concat(params.image, ")"));
        } else {
          var _imgSize = params.height - params.margin * 2;

          _evt_elem.prepend("<img src=\"".concat(params.image, "\" class=\"").concat(ClassName.TIMELINE_EVENT_THUMBNAIL, "\" width=\"").concat(_imgSize, "\" height=\"").concat(_imgSize, "\" />"));
        }
      }

      if (_is_bar && _opts.eventMeta.display) {
        //console.log( '!_createEventNode:', params )
        params.extend.meta = params.rangeMeta;
      }

      if (!this.is_empty(params.extend)) {
        for (var _i8 = 0, _Object$keys5 = Object.keys(params.extend); _i8 < _Object$keys5.length; _i8++) {
          var _prop = _Object$keys5[_i8];

          _evt_elem.attr("data-".concat(_prop), params.extend[_prop]);

          if (_prop === 'toggle' && ['popover', 'tooltip'].includes(params.extend[_prop])) {
            // for bootstrap's popover or tooltip
            _evt_elem.attr('title', params.label);

            if (!Object.hasOwnProperty.call(params.extend, 'content')) {
              _evt_elem.attr('data-content', params.content);
            }
          }
        }
      }

      if (!this.is_empty(params.callback)) {
        _evt_elem.attr('data-callback', params.callback);
      }

      return _evt_elem;
    }
    /*
     * @private: Retrieve the diameter size (pixel) of pointer (:> ポインタの直径サイズ（ピクセル値）を取得する
     */

  }, {
    key: "_getPointerSize",
    value: function _getPointerSize(key, margin) {
      var _props = this._instanceProps,
          _max = Math.min(_props.scaleSize - margin * 2, _props.rowSize - margin * 2),
          _size = null;

      switch (true) {
        case /^([1-9]\d*|0)$/i.test(key):
          _size = Math.max(parseInt(key, 10), MIN_POINTER_SIZE);
          break;

        case /^small$/i.test(key):
          _size = Math.max(this.numRound(_max / 4, 2), MIN_POINTER_SIZE);
          break;

        case /^large$/i.test(key):
          _size = Math.max(this.numRound(_max * 0.75, 2), MIN_POINTER_SIZE);
          break;

        case /^normal$/i.test(key):
        default:
          _size = Math.max(this.numRound(_max / 2, 2), MIN_POINTER_SIZE);
          break;
      } // console.log( '!_getPointerSize:', _props, key, _max, _size )


      return _size;
    }
    /*
     * @private: Draw the relational lines
     */

  }, {
    key: "_drawRelationLine",
    value: function _drawRelationLine(events) {
      var _this9 = this;

      // let _opts         = this._config,
      var _props = this._instanceProps,
          _canvas = $(this._element).find(Selector.TIMELINE_RELATION_LINES),
          ctx_relations = _canvas[0].getContext('2d'),
          drawLine = function drawLine(_sx, _sy, _ex, _ey, evt, _ba) {
        var _curveType = {},
            _strokeColor = EventParams.bdColor,
            _radius = _this9.numRound(Math.min(_props.scaleSize, _props.rowSize) / 2, 2); //,
        // _subRadius = this.numRound( this._getPointerSize( evt.size, _opts.marginHeight ) / 2, 2 )
        // Defaults


        if (_strokeColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _this9._config.colorScheme.event.border) {
          _strokeColor = _this9._config.colorScheme.event.border;
        }

        ctx_relations.strokeStyle = _strokeColor;
        ctx_relations.lineWidth = 2.5;
        ctx_relations.filter = 'url(#crisp)';

        for (var _i9 = 0, _Object$keys6 = Object.keys(evt.relation); _i9 < _Object$keys6.length; _i9++) {
          var _key = _Object$keys6[_i9];

          switch (true) {
            case /^(|line)color$/i.test(_key):
              ctx_relations.strokeStyle = evt.relation[_key];
              break;

            case /^(|line)size$/i.test(_key):
              ctx_relations.lineWidth = parseInt(evt.relation[_key], 10) || 2.5;
              break;

            case /^curve$/i.test(_key):
              if (/^(r|l)(t|b),?(r|l)?(t|b)?$/i.test(evt.relation[_key])) {
                var _tmp = evt.relation[_key].split(',');

                if (_tmp.length == 2) {
                  _curveType.before = _tmp[0];
                  _curveType.after = _tmp[1];
                } else {
                  _curveType[_ba] = _tmp[0];
                }
              } else if (typeof evt.relation[_key] === 'boolean' && evt.relation[_key] || typeof evt.relation[_key] === 'number' && Boolean(evt.relation[_key])) {
                // Automatically set the necessary linearity type (:> 自動線形判定
                //console.log( _sx, _sy, _ex, _ey, _radius, _ba, _subRadius )
                if (_ba === 'before') {
                  // before: targetEvent[ _ex, _ey ] <---- selfEvent[ _sx, _sy ]
                  if (_sy > _ey) {
                    // 連結点が自分より上にある
                    if (_sx > _ex) {
                      // 連結点が自分より左にある "(_ex,_ey)└(_sx,_sy)" as "lb"
                      _curveType[_ba] = 'lb';
                    } else if (_sx < _ex) {
                      // 連結点が自分より右にある "⊂￣" as "lb+lt"
                      _curveType[_ba] = 'lb+lt';
                    } else {
                      // 連結点が自分の直上 "│" to top
                      _curveType[_ba] = null;
                    }
                  } else if (_sy < _ey) {
                    // 連結点が自分より下にある
                    if (_sx > _ex) {
                      // 連結点が自分より左にある "(_ex,_ey)┌(_sx,_sy)" as "lt"
                      _curveType[_ba] = 'lt';
                    } else if (_sx < _ex) {
                      // 連結点が自分より右にある "⊂_" as "rt+rb"
                      _curveType[_ba] = 'lt+lb';
                    } else {
                      // 連結点が自分の直下 "│" to bottom
                      _curveType[_ba] = null;
                    }
                  } else {
                    // 連結点が自分と同じ水平上にある（左右どちらか） _sy == _ey; "─" to left or right
                    _curveType[_ba] = null;
                  }
                } else if (_ba === 'after') {
                  // after: selfEvent[ _sx, _sy ] ----> targetEvent[ _ex, _ey ]
                  if (_sy < _ey) {
                    // Relational endpoint is located "under" self (:> 連結点が自分の下にある
                    if (_sx < _ex) {
                      // Then relational endpoint is located "right" self (:> 連結点が自分の右にある "(_sx,_sy)┐(_ex,_ey)" as "rt"
                      _curveType[_ba] = 'rt';
                    } else if (_sx > _ex) {
                      // Then relational endpoint is located "left" self (:> 連結点が自分より左にある "_⊃" as "rt+rb"
                      _curveType[_ba] = 'rt+rb';
                    } else {
                      // Relational endpoint is located "just under" self (:> 連結点が自分の直下 "│" to bottom
                      _curveType[_ba] = null;
                    }
                  } else if (_sy > _ey) {
                    // Relational endpoint is located "above" self (:> 連結点が自分より上にある
                    if (_sx < _ex) {
                      // Then relational endpoint is located "right" self (:> 連結点が自分の右にある "┘" as "rb"
                      _curveType[_ba] = 'rb';
                    } else if (_sx > _ex) {
                      // Then relational endpoint is located "left" self (:> 連結点が自分より左にある "￣⊃" as "rb+rt"
                      _curveType[_ba] = 'rb+rt';
                    } else {
                      // Relational endpoint is located "just under" self (:> 連結点が自分の直上 "│" to top
                      _curveType[_ba] = null;
                    }
                  } else {
                    // 連結点が自分と同じ水平上にある（左右どちらか） _sy == _ey; "─" to left or right
                    _curveType[_ba] = null;
                  }
                }
              }

              break;
          }
        }

        if (Math.abs(_ey - _sy) > _props.rowSize) {
          _ey += Math.floor(Math.abs(_ey - _sy) / _props.rowSize);
        }

        ctx_relations.beginPath();

        if (!_this9.is_empty(_curveType)) {
          // console.log( '!_drawLine:', _curveType, _sx, _sy, _ex, _ey, _radius )
          switch (true) {
            case /^lt$/i.test(_curveType[_ba]):
              // "(_ex,_ey)┌(_sx,_sy)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_sx - _ex) > _radius) {
                ctx_relations.lineTo(_ex + _radius, _sy); // "─"
              }

              if (Math.abs(_ey - _sy) > _radius) {
                var _hep = _ey - _sy >= 0 ? _sy + _radius : _sy - _radius;

                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _hep); // "┌"

                ctx_relations.lineTo(_ex, _ey); // "│"
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "┌"
              }

              break;

            case /^lb$/i.test(_curveType[_ba]):
              // "(_ex,_ey)└(_sx,_sy)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_sx - _ex) > _radius) {
                ctx_relations.lineTo(_ex + _radius, _sy); // "─"
              }

              if (Math.abs(_sy - _ey) > _radius) {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _sy - _radius); // "└"

                ctx_relations.lineTo(_ex, _ey); // "│"
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "└"
              }

              break;

            case /^rt$/i.test(_curveType[_ba]):
              // "(_sx,_sy)┐(_ex,_ey)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_ex - _sx) > _radius) {
                ctx_relations.lineTo(_ex - _radius, _sy); // "─"
              }

              if (Math.abs(_ey - _sy) > _radius) {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _sy + _radius); // "┐"

                ctx_relations.lineTo(_ex, _ey);
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "┐"
              }

              break;

            case /^rb$/i.test(_curveType[_ba]):
              // "(_sx,_sy)┘(_ex,_ey)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_ex - _sx) > _radius) {
                ctx_relations.lineTo(_ex - _radius, _sy); // "─"
              }

              if (Math.abs(_sy - _ey) > _radius) {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _sy - _radius); // "┘"

                ctx_relations.lineTo(_ex, _ey);
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "┘"
              }

              break;

            case /^lt\+lb$/i.test(_curveType[_ba]): // "⊂＿"

            case /^lb\+lt$/i.test(_curveType[_ba]):
              // "⊂￣"
              ctx_relations.moveTo(_sx, _sy); //ctx_relations.lineTo( _sx - _subRadius, _sy ) // "─"

              ctx_relations.lineTo(_sx - _radius, _sy); // "─"
              //ctx_relations.bezierCurveTo( _sx - _subRadius - _radius, _sy, _sx - _subRadius - _radius, _ey, _sx - _subRadius, _ey ) // "⊂"

              ctx_relations.bezierCurveTo(_sx - _radius * 2, _sy, _sx - _radius * 2, _ey, _sx - _radius, _ey); // "⊂"

              ctx_relations.lineTo(_ex, _ey); // "─"

              break;

            case /^rt\+rb$/i.test(_curveType[_ba]): // "＿⊃"

            case /^rb\+rt$/i.test(_curveType[_ba]):
              // "￣⊃"
              ctx_relations.moveTo(_sx, _sy); //ctx_relations.lineTo( _sx + _subRadius, _sy ) // "─"

              ctx_relations.lineTo(_sx + _radius, _sy); // "─"
              //ctx_relations.bezierCurveTo( _sx + _subRadius + _radius, _sy, _sx + _subRadius + _radius, _ey, _sx + _subRadius, _ey ) // "⊃"

              ctx_relations.bezierCurveTo(_sx + _radius * 2, _sy, _sx + _radius * 2, _ey, _sx + _radius, _ey); // "⊃"

              ctx_relations.lineTo(_ex, _ey); // "─"

              break;

            default:
              ctx_relations.moveTo(_sx, _sy);
              ctx_relations.lineTo(_ex, _ey);
              break;
          }
        } else {
          ctx_relations.moveTo(_sx, _sy);
          ctx_relations.lineTo(_ex, _ey);
        } //ctx_relations.closePath()


        ctx_relations.stroke();
      };

      ctx_relations.clearRect(0, 0, _canvas[0].width, _canvas[0].height); //console.log( '!_drawRelationLine:', _props, events, _canvas )

      events.forEach(function (evt) {
        //console.log( '!_drawRelationLine:', evt )
        var _rel = evt.relation,
            _sx,
            _sy,
            _ex,
            _ey,
            _targetId,
            _targetEvent;

        if (Object.hasOwnProperty.call(_rel, 'before')) {
          // before: targetEvent[ _ex, _ey ] <---- selfEvent[ _sx, _sy ]
          // (:> before: 自分を起点（ _sx, _sy ）として左方向の連結点（ _ex, _ey ）へ向かう描画方式
          _sx = _rel.x + _this9.numRound(evt.margin / 2, 2);
          _sy = _rel.y + _this9.numRound(evt.margin / 2, 2);
          _targetId = parseInt(_rel.before, 10);

          if (_targetId < 0) {
            _ex = 0;
            _ey = _sy + _this9.numRound(evt.margin / 2, 2);
          } else {
            _targetEvent = events.find(function (_evt) {
              return parseInt(_evt.eventId, 10) == _targetId;
            });

            if (!_this9.is_empty(_targetEvent) && _targetEvent.relation) {
              _ex = _targetEvent.relation.x < 0 ? 0 : _targetEvent.relation.x + _this9.numRound(evt.margin / 2, 2);
              _ey = _targetEvent.relation.y + _this9.numRound(evt.margin / 2, 2);
            }
          }

          if (_sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0) {
            drawLine(_sx, _sy, _ex, _ey, evt, 'before');
          }
        }

        if (Object.hasOwnProperty.call(_rel, 'after')) {
          // after: selfEvent[ _sx, _sy ] ----> targetEvent[ _ex, _ey ]
          // (:> after: 自分を起点（ _sx, _sy ）として右方向の連結点（ _ex, _ey ）へ向かう描画方式
          _sx = _rel.x + _this9.numRound(evt.margin / 2, 2);
          _sy = _rel.y + _this9.numRound(evt.margin / 2, 2);
          _targetId = parseInt(_rel.after, 10);

          if (_targetId < 0) {
            _ex = _props.fullwidth;
            _ey = _sy + _this9.numRound(evt.margin / 2, 2);
          } else {
            _targetEvent = events.find(function (_evt) {
              return parseInt(_evt.eventId, 10) == _targetId;
            });

            if (!_this9.is_empty(_targetEvent) && _targetEvent.relation) {
              _ex = _targetEvent.relation.x > _props.fullwidth ? _props.fullwidth : _targetEvent.relation.x + _this9.numRound(evt.margin / 2, 2);
              _ey = _targetEvent.relation.y + _this9.numRound(evt.margin / 2, 2);
            }
          }

          if (_sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0) {
            drawLine(_sx, _sy, _ex, _ey, evt, 'after');
          }
        }
      });
    }
    /*
     * @private: Output a marker of the present time
     */

  }, {
    key: "_viewPresentTime",
    value: function _viewPresentTime() {
      var _elem = this._element,
          _props = this._instanceProps,
          _nowDt = new Date();

      if (this.diffDate(_props.begin, _nowDt) < 0 || this.diffDate(_nowDt, _props.end) < 0) {
        return;
      }

      var _marker = $('<div></div>', {
        class: ClassName.PRESENT_TIME_MARKER,
        style: "left:".concat(this.numRound(this._getCoordinateX(_nowDt), 2), "px;top:").concat($(_elem).find(Selector.TIMELINE_RULER_TOP).height(), "px;height:").concat($(_elem).find(Selector.TIMELINE_EVENT_CONTAINER).height(), "px;")
      });

      $(_elem).find(Selector.TIMELINE_MAIN).append(_marker);
    }
    /*
     * @private: Retrieve the mapping data that placed current events
     */

  }, {
    key: "_mapPlacedEvents",
    value: function _mapPlacedEvents() {
      var _that = this,
          _tl_events = $(this._element).find(Selector.TIMELINE_EVENTS).children(),
          _cache = this._loadToCache(),
          _events = [];

      if (!this._isCached || this.is_empty(_cache)) {
        return _events;
      }

      _tl_events.each(function () {
        var _uid = $(this).data('uid'),
            _data = null;

        if (_cache) {
          _data = _cache.find(function (_evt) {
            return _evt.uid === _uid;
          }) || null;
        } else {
          _data = $(this).data();
        }

        if (!_that.is_empty(_data)) {
          _events.push(_data);
        }
      }); //console.log( '!_mapPlacedEvents:', _events )


      return _events;
    }
    /*
     * @private: Event when focus or blur
     */

  }, {
    key: "_activeEvent",
    value: function _activeEvent(event) {
      this._debug('_activeEvent@Event');

      var _elem = event.target;

      if ('focusin' === event.type) {
        $(Selector.TIMELINE_EVENT_NODE).removeClass('active');
        $(_elem).addClass('active');
      } else if ('focusout' === event.type) {
        $(_elem).removeClass('active');
      }
    }
    /*
     * @private: Event when scroll timeline
     */

  }, {
    key: "_scrollTimeline",
    value: function _scrollTimeline(event) {
      this._debug('_scrollTimeline@Event');

      var _elem = event.target;

      this._debug(_elem.scrollLeft);
    }
    /*
     * @private: Event when touchstart or mousedown on the timeline container
     */

  }, {
    key: "_swipeStart",
    value: function _swipeStart(event) {
      this._debug('_swipeStart@Event');

      event.preventDefault();
      var _props = this._instanceProps;
      _props.absX = IS_TOUCH ? event.changedTouches[0].pageX : event.pageX;
      _props.moveX = $(event.currentTarget).parent(Selector.TIMELINE_CONTAINER).scrollLeft() * -1;
      this._isTouched = true;
    }
    /*
     * @private: Event when touchmove or mousemove in the timeline container
     */

  }, {
    key: "_swipeMove",
    value: function _swipeMove(event) {
      if (!this._isTouched) {
        return;
      }

      this._debug('_swipeMove@Event');

      event.preventDefault();
      var _props = this._instanceProps;
      _props.moveX -= _props.absX - (IS_TOUCH ? event.changedTouches[0].pageX : event.pageX);
      $(event.currentTarget).parent(Selector.TIMELINE_CONTAINER).scrollLeft(_props.moveX * -1);
      _props.absX = IS_TOUCH ? event.changedTouches[0].pageX : event.pageX;
    }
    /*
     * @private: Event when touchend or mouseup from the timeline container
     */

  }, {
    key: "_swipeEnd",
    value: function _swipeEnd() {
      if (!this._isTouched) {
        return;
      }

      this._debug('_swipeEnd@Event');

      this._isTouched = false;
    }
    /*
     * @private: Event when hover on the pointer type event
     */

  }, {
    key: "_hoverPointer",
    value: function _hoverPointer(event) {
      if (!this._config.effects.hoverEvent) {
        return;
      }

      this._debug('_hoverPointer@Event');

      var _props = this._instanceProps,
          _elem = event.target,
          _base = {
        left: $(_elem).data('baseLeft'),
        top: $(_elem).data('baseTop'),
        width: $(_elem).data('baseSize')
      },
          _x = _base.left,
          _y = _base.top,
          _w = _base.width,
          _z = 5; //this._getPointerSize( new_event.size, new_event.margin )

      if ('mouseenter' === event.type) {
        _w = Math.min(this.numRound(_w * 1.25, 'ceil'), Math.min(_props.rowSize, _props.scaleSize));
        _x = this.numRound(_x - (_w - _base.width) / 2, 2);
        _y = this.numRound(_y - (_w - _base.width) / 2, 2);
        _z = 9;
        $(_elem).trigger(Event.FOCUSIN_EVENT);
      } else {
        $(_elem).trigger(Event.FOCUSOUT_EVENT);
      }

      $(_elem).css('left', "".concat(_x, "px")).css('top', "".concat(_y, "px")).css('width', "".concat(_w, "px")).css('height', "".concat(_w, "px")).css('z-index', _z);
    }
    /*
     * @private: Logger of errors when the method execution
     */

  }, {
    key: "_error",
    value: function _error(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';

      if (message && window.console) {
        type = window.console[type] ? type : 'error';
        console[type](message);
      }
    }
    /*
     * @private: Echo the log of plugin for debugging
     */

  }, {
    key: "_debug",
    value: function _debug(message) {
      var throwType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Notice';

      if (!this._config.debug) {
        return;
      }

      message = this.supplement(null, message);

      if (message) {
        var _msg = typeof $(this._element).data(DATA_KEY)[message] !== 'undefined' ? "Called method \"".concat(message, "\".") : message,
            _sty = /^Called method "/.test(_msg) ? 'font-weight:600;color:blue;' : '',
            _rst = '';

        if (window.console && window.console.log) {
          if (throwType === 'Notice') {
            window.console.log('%c%s%c', _sty, _msg, _rst);
          } else {
            throw new Error("".concat(_msg));
          }
        }
      }
    } // Public

    /*
     * @public: This method is able to call only once after completed an initializing of the plugin
     */

  }, {
    key: "initialized",
    value: function initialized() {
      var _message = this._isInitialized ? 'Skipped because method "initialized" already has been called once' : 'initialized';

      this._debug(_message); //console.log('!this._isInitialized:', this._isInitialized, 'this._isCompleted:', this._isCompleted )


      if (this._isInitialized) {
        return;
      }

      var _elem = this._element,
          _opts = this._config,
          _args = arguments.length <= 0 ? undefined : arguments[0],
          callback = _args.length > 0 && typeof _args[0] === 'function' ? _args[0] : null,
          userdata = _args.length > 1 ? this.getUserArg(_args.slice(1)) : undefined; // console.log( '!initialized:', callback, userdata )


      if (callback && !this._isInitialized) {
        this._debug('Fired your callback function after initializing this plugin.');

        callback(_elem, _opts, userdata);
      }

      this._isInitialized = true;
      return this;
    }
    /*
     * @public: Destroy the object to which the plugin is applied
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._debug('destroy');

      $.removeData(this._element, DATA_KEY);
      $(window, document, this._element).off(EVENT_KEY);
      $(this._element).remove();

      this._removeCache();

      for (var _i10 = 0, _Object$keys7 = Object.keys(this); _i10 < _Object$keys7.length; _i10++) {
        var _prop = _Object$keys7[_i10];
        this[_prop] = null;
        delete this[_prop];
      }
    }
    /*
     * @public: This method has been deprecated since version 2.0.0
     */

  }, {
    key: "render",
    value: function render() {
      throw new ReferenceError('This method named "render" has been deprecated since version 2.0.0');
    }
    /*
     * @public: Show hidden timeline
     */

  }, {
    key: "show",
    value: function show() {
      this._debug('show');

      var _elem = this._element;

      if (!this._isShown) {
        $(_elem).removeClass(ClassName.HIDE);
        this._isShown = true;
      }
    }
    /*
     * @public: Hide shown timeline
     */

  }, {
    key: "hide",
    value: function hide() {
      this._debug('hide');

      var _elem = this._element;

      if (this._isShown) {
        $(_elem).addClass(ClassName.HIDE);
        this._isShown = false;
      }
    }
    /*
     * @public: Move shift or expand the range of timeline container as to past direction (to left)
     */

  }, {
    key: "dateback",
    value: function dateback() {
      this._debug('dateback');

      var _args = arguments.length <= 0 ? undefined : arguments[0],
          _opts = this._config,
          moveOpts = this.supplement(null, _args[0], this.validateObject),
          callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
          userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined,
          newOpts = {},
          begin_date,
          end_date,
          _tmpDate;

      if (this.is_empty(moveOpts)) {
        moveOpts = {
          scale: _opts.scale,
          range: _opts.range,
          shift: true
        };
      } else {
        if (!Object.hasOwnProperty.call(moveOpts, 'shift') || moveOpts.shift !== false) {
          moveOpts.shift = true;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'scale') || !this.verifyScale(moveOpts.scale)) {
          moveOpts.scale = _opts.scale;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'range') || parseInt(moveOpts.range, 10) > LimitScaleGrids[moveOpts.scale]) {
          moveOpts.range = _opts.range;
        }
      }

      _tmpDate = new Date(_opts.startDatetime);

      switch (true) {
        case /^years?$/i.test(moveOpts.scale):
          begin_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() - parseInt(moveOpts.range, 10)));
          break;

        case /^months?$/i.test(moveOpts.scale):
          begin_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() - parseInt(moveOpts.range, 10)));
          break;

        default:
          begin_date = new Date(_tmpDate.getTime() - this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
          break;
      }

      newOpts.startDatetime = begin_date.toString();

      if (moveOpts.shift) {
        _tmpDate = new Date(_opts.endDatetime);

        switch (true) {
          case /^years?$/i.test(moveOpts.scale):
            end_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() - parseInt(moveOpts.range, 10)));
            break;

          case /^months?$/i.test(moveOpts.scale):
            end_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() - parseInt(moveOpts.range, 10)));
            break;

          default:
            end_date = new Date(_tmpDate.getTime() - this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
            break;
        }

        newOpts.endDatetime = end_date.toString();
      }

      if (moveOpts.scale !== _opts.scale) {
        newOpts.moveScale = moveOpts.scale;
      } //console.log( '!dateback::', moveOpts, _opts.startDatetime, _opts.endDatetime, newOpts )


      this.reload([newOpts]);

      if (callback) {
        this._debug('Fired your callback function after datebacking.');

        callback(this._element, _opts, userdata);
      }
    }
    /*
     * @public: Move shift or expand the range of timeline container as to futrue direction (to right)
     */

  }, {
    key: "dateforth",
    value: function dateforth() {
      this._debug('dateforth');

      var _args = arguments.length <= 0 ? undefined : arguments[0],
          _opts = this._config,
          moveOpts = this.supplement(null, _args[0], this.validateObject),
          callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
          userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined,
          newOpts = {},
          begin_date,
          end_date,
          _tmpDate;

      if (this.is_empty(moveOpts)) {
        moveOpts = {
          scale: _opts.scale,
          range: _opts.range,
          shift: true
        };
      } else {
        if (!Object.hasOwnProperty.call(moveOpts, 'shift') || moveOpts.shift !== false) {
          moveOpts.shift = true;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'scale') || !this.verifyScale(moveOpts.scale)) {
          moveOpts.scale = _opts.scale;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'range') || parseInt(moveOpts.range, 10) > LimitScaleGrids[moveOpts.scale]) {
          moveOpts.range = _opts.range;
        }
      }

      _tmpDate = new Date(_opts.endDatetime);

      switch (true) {
        case /^years?$/i.test(moveOpts.scale):
          //console.log(_tmpDate, _tmpDate.getTime(), _tmpDate.getFullYear(), _tmpDate.setFullYear(_tmpDate.getFullYear() + parseInt( moveOpts.range, 10 ) ) )
          end_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() + parseInt(moveOpts.range, 10)));
          break;

        case /^months?$/i.test(moveOpts.scale):
          end_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() + parseInt(moveOpts.range, 10)));
          break;

        default:
          end_date = new Date(_tmpDate.getTime() + this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
          break;
      }

      newOpts.endDatetime = end_date.toString();

      if (moveOpts.shift) {
        _tmpDate = new Date(_opts.startDatetime);

        switch (true) {
          case /^years?$/i.test(moveOpts.scale):
            begin_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() + parseInt(moveOpts.range, 10)));
            break;

          case /^months?$/i.test(moveOpts.scale):
            begin_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() + parseInt(moveOpts.range, 10)));
            break;

          default:
            begin_date = new Date(_tmpDate.getTime() + this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
            break;
        }

        newOpts.startDatetime = begin_date.toString();
      }

      if (moveOpts.scale !== _opts.scale) {
        newOpts.moveScale = moveOpts.scale;
      } //console.log( '!dateforth::', moveOpts, _opts.startDatetime, _opts.endDatetime, newOpts )


      this.reload([newOpts]);

      if (callback) {
        this._debug('Fired your callback function after dateforthing.');

        callback(this._element, this._config, userdata);
      }
    }
    /*
     * @public: Move the display position of the timeline container to the specified position
     */

  }, {
    key: "alignment",
    value: function alignment() {
      this._debug('alignment');

      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _opts = this._config,
          _props = this._instanceProps,
          _elem = this._element,
          _tl_container = $(_elem).find(Selector.TIMELINE_CONTAINER),
          _movX = 0,
          _args = !this.is_empty(args) ? args[0] : [],
          position = _args.length > 0 && typeof _args[0] === 'string' ? _args[0] : _opts.rangeAlign,
          duration = _args.length > 1 && /^(\d{1,}|fast|normal|slow)$/i.test(_args[1]) ? _args[1] : 0; //console.log( args, _args, position, duration )


      if (_props.fullwidth <= _elem.scrollWidth) {
        return;
      }

      switch (true) {
        case /^(left|begin)$/i.test(position):
          _movX = 0;
          break;

        case /^center$/i.test(position):
          _movX = (_tl_container[0].scrollWidth - _elem.scrollWidth) / 2 + 1;
          break;

        case /^(right|end)$/i.test(position):
          _movX = _tl_container[0].scrollWidth - _elem.scrollWidth + 1;
          break;

        case /^latest$/i.test(position):
          {
            var events = this._mapPlacedEvents().sort(this.compareValues('x')),
                lastEvent = events[events.length - 1];

            _movX = !this.is_empty(lastEvent) ? lastEvent.x : 0; // console.log( events, lastEvent, _movX, _elem.scrollWidth / 2 )
            // Centering

            if (_elem.scrollWidth / 2 < _movX) {
              _movX -= Math.ceil(_elem.scrollWidth / 2);
            } else {
              _movX = 0;
            } // Focus target event


            if (!this.is_empty(lastEvent)) {
              $("".concat(Selector.TIMELINE_EVENT_NODE, "[data-uid=\"").concat(lastEvent.uid, "\"]")).trigger(Event.FOCUSIN_EVENT);
            }

            break;
          }

        case /^\d{1,}$/.test(position):
          {
            var _events2 = this._mapPlacedEvents(),
                targetEvent = {};

            if (_events2.length > 0) {
              targetEvent = _events2.find(function (evt) {
                return evt.eventId == parseInt(position, 10);
              });
            }

            _movX = !this.is_empty(targetEvent) ? targetEvent.x : 0; // Centering

            if (Math.ceil(_elem.scrollWidth / 2) < _movX) {
              _movX -= Math.ceil(_elem.scrollWidth / 2);
            } else {
              _movX = 0;
            } // Focus target event


            if (!this.is_empty(targetEvent)) {
              $("".concat(Selector.TIMELINE_EVENT_NODE, "[data-uid=\"").concat(targetEvent.uid, "\"]")).trigger(Event.FOCUSIN_EVENT);
            }

            break;
          }

        case /^current(|ly)|now$/i.test(position):
        default:
          {
            var _now = new Date().toString(),
                _nowX = this.numRound(this._getCoordinateX(_now), 2);

            if (_nowX >= 0) {
              if (_tl_container[0].scrollWidth - _elem.scrollWidth + 1 < _nowX) {
                _movX = _tl_container[0].scrollWidth - _elem.scrollWidth + 1;
              } else {
                _movX = _nowX;
              }
            } else {
              _movX = 0;
            }

            break;
          }
      } //console.log( `!alignment::${position}:`, _props.fullwidth, _props.visibleWidth, _tl_container[0].scrollWidth, _tl_container[0].scrollLeft, _movX )


      if (duration === '0') {
        _tl_container.scrollLeft(_movX);
      } else {
        _tl_container.animate({
          scrollLeft: _movX
        }, duration);
      }
    }
    /*
     * @public: This method has been deprecated since version 2.0.0
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      throw new ReferenceError('This method named "getOptions" has been deprecated since version 2.0.0');
    }
    /*
     * @public: Add new events to the rendered timeline object
     */

  }, {
    key: "addEvent",
    value: function () {
      var _addEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this10 = this;

        var _args,
            events,
            callback,
            userdata,
            _cacheEvents,
            _cacheIds,
            lastEventId,
            addedEvents,
            add_done,
            _args3 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._debug('addEvent');

                _args = _args3.length <= 0 ? undefined : _args3[0], events = this.supplement(null, _args[0], this.validateArray), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _cacheEvents = this._loadToCache(), _cacheIds = _cacheEvents.map(function (evt) {
                  return evt.eventId;
                }), lastEventId = 0, addedEvents = [], add_done = false;

                if (!(this.is_empty(events) || !this._isCompleted)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                if (!this.is_empty(_cacheEvents)) {
                  //_cacheEvents.sort( this.compareValues( 'eventId' ) )
                  //lastEventId = parseInt( _cacheEvents[_cacheEvents.length - 1].eventId, 10 )
                  lastEventId = Math.max.apply(Math, _toConsumableArray(_cacheIds));
                } //console.log( '!_addEvent::before:', _cacheEvents, lastEventId, callback, userdata )
                //events.forEach( ( evt ) => {


                events.some(function (evt) {
                  if (!_this10.is_empty(evt.eventId) && _cacheIds.includes(evt.eventId)) {
                    _this10._error("An event with the same eventID: ".concat(evt.eventId, " already exists."), 'warn');

                    return false;
                  }

                  var _one_event = _this10._registerEventData('<div></div>', evt);

                  if (!_this10.is_empty(_one_event)) {
                    //console.log( '!!_addEvent::before:', _cacheIds, lastEventId, _one_event.eventId )
                    if (_one_event.eventId == 0) {
                      _one_event.eventId = Math.max(lastEventId + 1, parseInt(_one_event.eventId, 10));

                      _cacheEvents.push(_one_event);

                      lastEventId = parseInt(_one_event.eventId, 10);
                    } else {
                      _cacheEvents.push(_one_event);

                      lastEventId = lastEventId < _one_event.eventId ? _one_event.eventId : lastEventId;
                    }

                    addedEvents[_one_event.eventId] = _one_event;

                    _cacheIds.push(_one_event.eventId);

                    add_done = true;
                  }
                }); //console.log( '!!!_addEvent::after:', _cacheEvents, lastEventId, callback, userdata )

                if (add_done) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return");

              case 8:
                this._saveToCache(_cacheEvents); // Prevents flicker when re-placing events; Added since v2.1.0 (#51)


                $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1;
                $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1;
                _context2.next = 13;
                return this._placeEvent();

              case 13:
                if (callback) {
                  this._debug('Fired your callback function after replacing events.');

                  if (userdata) {
                    callback(this._element, this._config, userdata, addedEvents);
                  } else {
                    callback(this._element, this._config, addedEvents);
                  }
                }

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addEvent() {
        return _addEvent.apply(this, arguments);
      }

      return addEvent;
    }()
    /*
     * @public: Remove events from the currently timeline object
     */

  }, {
    key: "removeEvent",
    value: function () {
      var _removeEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this11 = this;

        var _args,
            targets,
            callback,
            userdata,
            _cacheEvents,
            condition,
            removedEvents,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._debug('removeEvent');

                _args = _args4.length <= 0 ? undefined : _args4[0], targets = this.supplement(null, _args[0], this.validateArray), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _cacheEvents = this._loadToCache(), condition = {}, removedEvents = [];

                if (!(this.is_empty(targets) || !this._isCompleted || this.is_empty(_cacheEvents))) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return");

              case 4:
                targets.forEach(function (cond) {
                  switch (true) {
                    case /^\d{1,}$/.test(cond):
                      // By matching event ID
                      condition.type = 'eventId';
                      condition.value = parseInt(cond, 10);
                      break;

                    case /^(|\d{1,}(-|\/)\d{1,2}(-|\/)\d{1,2}(|\s\d{1,2}:\d{1,2}(|:\d{1,2})))(|,\d{1,}(-|\/)\d{1,2}(-|\/)\d{1,2}(|\s\d{1,2}:\d{1,2}(|:\d{1,2})))$/.test(cond):
                      {
                        // By matching range of datetime
                        var _tmp = cond.split(',');

                        condition.type = 'daterange';
                        condition.value = {};
                        condition.value['from'] = _this11.is_empty(_tmp[0]) ? null : new Date(_tmp[0]);
                        condition.value['to'] = _this11.is_empty(_tmp[1]) ? null : new Date(_tmp[1]);
                        break;
                      }

                    default:
                      // By matching regex string
                      condition.type = 'regex';
                      condition.value = new RegExp(cond);
                      break;
                  } //_cacheEvents.forEach( ( evt ) => {


                  _cacheEvents.some(function (evt, idx) {
                    var is_remove = false;

                    switch (condition.type) {
                      case 'eventId':
                        {
                          if (parseInt(evt.eventId, 10) == condition.value) {
                            //console.log( `!removeEvent::${condition.type}:${condition.value}:`, _cacheEvents[_idx] )
                            is_remove = true;
                          }

                          break;
                        }

                      case 'daterange':
                        {
                          var _fromX = condition.value.from ? Math.ceil(_this11._getCoordinateX(condition.value.from.toString())) : 0,
                              _toX = condition.value.to ? Math.floor(_this11._getCoordinateX(condition.value.to.toString())) : _fromX; //console.log( `!removeEvent::${condition.type}:${condition.value.from} ~ ${condition.value.to}:`, `${evt.eventId}: ${_fromX} <= ${evt.x} <= ${_toX} ?`, _fromX <= evt.x && evt.x <= _toX )


                          if (_fromX <= evt.x && evt.x <= _toX) {
                            is_remove = true;
                          }

                          break;
                        }

                      case 'regex':
                        {
                          //console.log( `!removeEvent::${condition.type}:${condition.value}:`, JSON.stringify( evt ) )
                          if (condition.value.test(JSON.stringify(evt))) {
                            is_remove = true;
                          }

                          break;
                        }
                    }

                    if (is_remove) {
                      removedEvents[evt.eventId] = evt;

                      _cacheEvents.splice(idx, 1);
                    }
                  });
                });

                if (!(removedEvents.length == 0)) {
                  _context3.next = 8;
                  break;
                }

                this._error('There is no event that matches the deletion condition.', 'warn');

                return _context3.abrupt("return");

              case 8:
                this._saveToCache(_cacheEvents); // Prevents flicker when re-placing events; Added since v2.1.0 (#51)


                $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1;
                $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1;
                _context3.next = 13;
                return this._placeEvent();

              case 13:
                if (callback) {
                  this._debug('Fired your callback function after placing additional events.');

                  if (userdata) {
                    callback(this._element, this._config, userdata, removedEvents);
                  } else {
                    callback(this._element, this._config, removedEvents);
                  }
                }

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function removeEvent() {
        return _removeEvent.apply(this, arguments);
      }

      return removeEvent;
    }()
    /*
     * @public: Update events on the currently timeline object
     */

  }, {
    key: "updateEvent",
    value: function () {
      var _updateEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this12 = this;

        var _args,
            events,
            callback,
            userdata,
            _cacheEvents,
            _cacheIds,
            updatedEvents,
            update_done,
            _args5 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this._debug('updateEvent');

                _args = _args5.length <= 0 ? undefined : _args5[0], events = this.supplement(null, _args[0], this.validateArray), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _cacheEvents = this._loadToCache(), _cacheIds = _cacheEvents.map(function (evt) {
                  return evt.eventId;
                }), updatedEvents = [], update_done = false;

                if (!(this.is_empty(events) || !this._isCompleted || this.is_empty(_cacheEvents))) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return");

              case 4:
                //events.forEach( ( evt ) => {
                events.some(function (evt) {
                  if (_this12.is_empty(evt.eventId)) {
                    _this12._error('Could not update because the eventID to be updated is not defined.', 'warn');

                    return false;
                  }

                  if (!_cacheIds.includes(evt.eventId)) {
                    _this12._error("The event node with the eventID: ".concat(evt.eventId, " to update does not exist."), 'warn');

                    return false;
                  }

                  var _upc_event = _this12._registerEventData('<div></div>', evt),
                      // Update Candidate
                  _old_index = null,
                      _old_event = _cacheEvents.find(function (_evt, _idx) {
                    _old_index = _idx;
                    return _evt.eventId == _upc_event.eventId;
                  }),
                      _new_event = {};

                  if (!_this12.is_empty(_old_event) && !_this12.is_empty(_upc_event)) {
                    if (Object.hasOwnProperty.call(_upc_event, 'uid')) {
                      delete _upc_event.uid;
                    }

                    _new_event = Object.assign(_new_event, _old_event, _upc_event); //console.log( _new_event, _old_event, _upc_event, _old_index )

                    _cacheEvents[_old_index] = _new_event;
                    updatedEvents[_upc_event.eventId] = _upc_event;

                    _cacheIds.push(_upc_event.eventId);

                    update_done = true;
                  }
                });

                if (update_done) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return");

              case 7:
                this._saveToCache(_cacheEvents); // Prevents flicker when re-placing events; Added since v2.1.0 (#51)


                $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1;
                $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1;
                _context4.next = 12;
                return this._placeEvent();

              case 12:
                if (callback) {
                  this._debug('Fired your callback function after updating events.');

                  if (userdata) {
                    callback(this._element, this._config, userdata, updatedEvents);
                  } else {
                    callback(this._element, this._config, updatedEvents);
                  }
                }

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateEvent() {
        return _updateEvent.apply(this, arguments);
      }

      return updateEvent;
    }()
    /*
     * @public: Reload the timeline with overridable any options
     */

  }, {
    key: "reload",
    value: function () {
      var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this13 = this;

        var _args,
            _upc_options,
            callback,
            userdata,
            _elem,
            $default_evt,
            _old_options,
            _new_options,
            _chk_scale,
            _cacheEvents,
            _renewEvents,
            _args6 = arguments;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this._debug('reload');

                _args = _args6.length <= 0 ? undefined : _args6[0], _upc_options = this.supplement(null, _args[0], this.validateObject), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _elem = this._element, $default_evt = $(_elem).find(Selector.DEFAULT_EVENTS), _old_options = this._config, _new_options = {};

                if (!this.is_empty(_upc_options)) {
                  // _new_options = Object.assign( _new_options, _old_options, _upc_options )
                  _new_options = this.mergeDeep(_old_options, _upc_options);
                  this._config = _new_options;
                }

                this._isInitialized = false;
                this._isCached = false;
                this._isCompleted = false;
                this._instanceProps = {};
                this._countEventinCell = {};
                $(_elem).empty().append($default_evt);

                this._calcVars();

                this.showLoader();

                if (Object.hasOwnProperty.call(this._config, 'moveScale')) {
                  _chk_scale = this._config.moveScale;
                  delete this._config.moveScale;
                } else {
                  _chk_scale = this._config.scale;
                }

                if (this._verifyMaxRenderableRange(_chk_scale)) {
                  _context5.next = 14;
                  break;
                }

                throw new RangeError("Timeline display period exceeds maximum renderable range.");

              case 14:
                if (!this._isInitialized) {
                  this._renderView();

                  this._isInitialized = true;
                }

                if (this._config.reloadCacheKeep) {
                  _cacheEvents = this._loadToCache(), _renewEvents = [];

                  if (!this.is_empty(_cacheEvents)) {
                    _cacheEvents.forEach(function (evt) {
                      delete evt.uid;
                      delete evt.x;
                      delete evt.Y;
                      delete evt.width;
                      delete evt.height;
                      delete evt.relation.x;
                      delete evt.relation.y;

                      _renewEvents.push(_this13._registerEventData('<div></div>', evt));
                    });
                  }

                  this._isCached = this._saveToCache(_renewEvents);
                } else {
                  this._loadEvent();
                }

                _context5.next = 18;
                return this._placeEvent();

              case 18:
                this._isCompleted = true;
                _context5.next = 21;
                return this.hideLoader();

              case 21:
                if (callback) {
                  this._debug('Fired your callback function after reloading timeline.');

                  callback(this._element, this._config, userdata);
                } // Binding bs.popover


                if ($.fn['popover']) {
                  $('[data-toggle="popover"]').popover();
                }

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function reload() {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
    /*
     * @public: The method that fires when an event on the timeline is clicked (:> タイムライン上のイベントがクリックされた時に発火
     *
     * Note: You can hook the custom processing with the callback specified in the event parameter. (:> イベントパラメータに指定したコールバックでカスタム処理をフックできます
     */

  }, {
    key: "openEvent",
    value: function openEvent(event) {
      this._debug('openEvent');

      if (!this.is_empty(event) && !Object.hasOwnProperty.call(event, 'type') && !Object.hasOwnProperty.call(event, 'target')) {
        if (typeof event[0] === 'function') {
          this._beforeOpenEvent = event[0];
        }
      }

      var _self = event.target,
          $viewer = $(document).find(Selector.EVENT_VIEW),
          //eventId    = parseInt( $(_self).attr( 'id' ).replace( 'evt-', '' ), 10 ),
      uid = $(_self).data('uid'),
          //meta       = this.supplement( null, $(_self).data( 'meta' ) ),
      callback = this.supplement(null, $(_self).data('callback')),
          _cacheEvents = this._loadToCache(),
          _eventData = _cacheEvents.find(function (event) {
        return event.uid === uid;
      }),
          _hookedState = true;

      if (this.is_empty(_self)) {
        return;
      } // Generate content for viewer


      var _label = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_TITLE
      }),
          _content = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_CONTENT
      }),
          _meta = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_META
      }),
          _image = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_IMAGE_WRAPPER
      }),
          _viewers = {},
          _order = ['label', 'image', 'content', 'meta'];

      if (!this.is_empty(_eventData.image)) {
        _image.append("<img src=\"".concat(_eventData.image, "\" class=\"").concat(ClassName.VIEWER_EVENT_IMAGE, "\" />")); //_viewers.push( _image.get(0) )


        _viewers.image = _image.get(0);
      }

      if (!this.is_empty(_eventData.label)) {
        _label.html(_eventData.label); //_viewers.push( _label.get(0) )


        _viewers.label = _label.get(0);
      }

      if (!this.is_empty(_eventData.content)) {
        _content.html(_eventData.content); //_viewers.push( _content.get(0) )


        _viewers.content = _content.get(0);
      }

      if (!this.is_empty(_eventData.rangeMeta)) {
        _meta.html(_eventData.rangeMeta); //_viewers.push( _meta.get(0) )


        _viewers.meta = _meta.get(0);
      }

      if (this._beforeOpenEvent) {
        _hookedState = this._beforeOpenEvent(_eventData, _viewers) || true; //_hookedState = _hookedState == undefined ? true : _hookedState
      } //console.log( '!openEvent::', _self, $viewer, uid, callback, _viewers, this._beforeOpenEvent, _hookedState )


      if (!_hookedState) {
        return;
      }

      if ($viewer.length > 0) {
        $viewer.each(function () {
          var _this14 = this;

          $(this).empty(); // Initialize Viewer

          _order.forEach(function (_prop) {
            if (Object.prototype.hasOwnProperty.call(_viewers, _prop)) {
              $(_this14).append(_viewers[_prop].outerHTML);
            }
          });
        });
      }

      if (callback) {
        this._debug("The callback \"".concat(callback, "\" was called by the \"openEvent\" method."));

        try {
          Function.call(null, "return ".concat(callback))();
        } catch (e) {
          throw new TypeError(e);
        }
      }
    }
    /*
     * @public: Be zoomed in scale of the timeline that fires when any scales on the ruler is double clicked (:> ルーラー上の任意スケールをダブルクリック時に発火するスケールズームイベント
     */

  }, {
    key: "zoomScale",
    value: function zoomScale(event) {
      var _this15 = this;

      this._debug('zoomScale'); //console.log( '!zoomScale::', event, $(event.currentTarget) )


      var _elem = event.currentTarget,
          ruler_item = $(_elem).data('ruler-item'),
          scaleMap = {
        millennium: {
          years: 1000,
          lower: 'century',
          minGrids: 10
        },
        century: {
          years: 100,
          lower: 'decade',
          minGrids: 10
        },
        decade: {
          years: 10,
          lower: 'lustrum',
          minGrids: 2
        },
        lustrum: {
          years: 5,
          lower: 'year',
          minGrids: 5
        },
        year: {
          years: 1,
          lower: 'month',
          minGrids: 12
        },
        month: {
          lower: 'day',
          minGrids: 28
        },
        week: {
          lower: 'day',
          minGrids: 7
        },
        day: {
          lower: 'hour',
          minGrids: 24
        },
        weekday: {
          lower: 'hour',
          minGrids: 24
        },
        hour: {
          lower: 'minute',
          minGrids: 60
        },
        minute: {
          lower: 'second',
          minGrids: 60
        },
        second: {
          lower: null,
          minGrids: 60
        },
        millisecond: {
          lower: null,
          minGrids: 1000
        }
      },
          getZoomScale = function getZoomScale(ruler_item) {
        var _ruler_item$split = ruler_item.split('-'),
            _ruler_item$split2 = _slicedToArray(_ruler_item$split, 2),
            _scl = _ruler_item$split2[0],
            date_seed = _ruler_item$split2[1],
            scale = _this15._filterScaleKeyName(_scl),
            min_grids = scaleMap[scale].minGrids,
            begin_date,
            end_date,
            base_year,
            week_num; //console.log( '!zoomScale::getZoomScale:', ruler_item, '->', scale, ', ', date_seed, ', minGrid:', min_grids )


        switch (true) {
          case /^millennium$/i.test(scale):
          case /^century$/i.test(scale):
          case /^decade$/i.test(scale):
          case /^lustrum$/i.test(scale):
            begin_date = "".concat((date_seed - 1) * scaleMap[scale].years + 1, "/1/1 0:00:00");
            end_date = new Date(_this15.modifyDate(begin_date, scaleMap[scale].years, 'year').getTime() - 1).toString();
            break;

          case /^year$/i.test(scale):
            begin_date = "".concat(date_seed, "/1/1 0:00:00");
            end_date = new Date(_this15.modifyDate(begin_date, scaleMap[scale].years, 'year').getTime() - 1).toString();
            break;

          case /^month$/i.test(scale):
            begin_date = _this15.getCorrectDatetime(date_seed).toString();
            end_date = new Date(_this15.modifyDate(begin_date, 1, 'month').getTime() - 1).toString();
            break;

          case /^week$/i.test(scale):
            var _date_seed$split = date_seed.split(',');

            var _date_seed$split2 = _slicedToArray(_date_seed$split, 2);

            base_year = _date_seed$split2[0];
            week_num = _date_seed$split2[1];
            begin_date = _this15.getFirstDayOfWeek(week_num, base_year).toString(), end_date = new Date(_this15.modifyDate(begin_date, 7, 'day').getTime() - 1).toString();
            break;

          case /^day$/i.test(scale):
          case /^weekday$/i.test(scale):
            date_seed = 'weekday' === scale ? date_seed.substring(0, date_seed.indexOf(',')) : date_seed;
            begin_date = _this15.getCorrectDatetime(date_seed).toString();
            end_date = new Date(_this15.modifyDate(begin_date, 1, 'day').getTime() - 1).toString();
            break;

          case /^hour$/i.test(scale):
          case /^minute$/i.test(scale):
          case /^second$/i.test(scale):
          case /^millisecond$/i.test(scale):
          default:
            begin_date = _this15.getCorrectDatetime(date_seed).toString();
            end_date = new Date(_this15.modifyDate(begin_date, 1, scale).getTime() - 1).toString();
            break;
        }

        scale = Object.hasOwnProperty.call(scaleMap, scale) ? scaleMap[scale].lower : scale; //console.log( '!zoomScale::getZoomScale:', date_seed, ', to:', scale, ', beginDate:', begin_date, ', endDate:', end_date, ', minGrids:', min_grids )

        return [scale, begin_date, end_date, min_grids];
      },
          _getZoomScale = getZoomScale(ruler_item),
          _getZoomScale2 = _slicedToArray(_getZoomScale, 4),
          to_scale = _getZoomScale2[0],
          begin_date = _getZoomScale2[1],
          end_date = _getZoomScale2[2],
          min_grids = _getZoomScale2[3],
          zoom_options = {
        startDatetime: begin_date,
        endDatetime: end_date,
        scale: to_scale
      };

      if (this.is_empty(zoom_options.scale)) {
        return;
      }

      if (this._config.wrapScale) {
        var _wrap = Math.ceil(($(this._element).find(Selector.TIMELINE_CONTAINER).width() - $(this._element).find(Selector.TIMELINE_SIDEBAR).width()) / min_grids),
            _originMinGridSize;

        if (!Object.hasOwnProperty.call(this._config, 'originMinGridSize')) {
          // Keep an original minGridSize as cache
          this._config.originMinGridSize = this._config.minGridSize;
        }

        _originMinGridSize = this._config.originMinGridSize;
        zoom_options.minGridSize = Math.max(_wrap, _originMinGridSize);
      } // console.log( ruler_item, zoom_options, this._config.wrapScale, this._config.minGridSize )


      this.reload([zoom_options]);
    }
    /*
     * @public: Show the loader
     */

  }, {
    key: "showLoader",
    value: function showLoader() {
      this._debug('showLoader');

      var $elem = $(this._element),
          _opts = this._config,
          _props = this._instanceProps,
          _container = $elem.find(Selector.TIMELINE_CONTAINER),
          _max_width = _props.scaleSize * _props.grids,
          _min_height = _props.rowSize * _props.rows,
          _loaderContainer = $('<div></div>', {
        class: 'jqtl-loader',
        style: "max-width:".concat(_max_width, "px;min-height:").concat(_min_height, "px;")
      }),
          _loaderContent = null,
          _innerContent = '';

      if (_opts.loader === false) {
        return;
      }

      if (_container.length == 0) {
        // To avoid jquery memory leak
        _container = _container.prevObject;
      }

      if ($elem.find(Selector.LOADER).length == 0) {
        // Generate loader container
        if ($(_opts.loader).length == 0) {
          // Set built-in loader content
          _innerContent = this.is_empty(_opts.loadingMessage) ? '<span></span><span></span><span></span><span></span><span></span>' : _opts.loadingMessage;
          _loaderContent = $('<div></div>', {
            class: ClassName.LOADER_ITEM
          }).html(_innerContent);
        } else {
          // Set custom loader content
          _loaderContent = $(_opts.loader).clone().prop('hidden', false).css('display', 'block');
        }

        _loaderContainer.append(_loaderContent);

        _container.append(_loaderContainer);
      } else {
        $elem.find(Selector.LOADER).css({
          width: '100%',
          height: '100%'
        });
      } // Show loader
      //$elem.find( Selector.LOADER ).show('fast', () => {


      $elem.find(Selector.LOADER).attr('data-state', 'show'); //})
    }
    /*
     * @public:  Hide the loader
     */

  }, {
    key: "hideLoader",
    value: function hideLoader() {
      var _this16 = this;

      return new Promise(function (resolve) {
        _this16._debug('hideLoader');

        var $elem = $(_this16._element),
            _loader = $elem.find(Selector.LOADER); //_loader.hide('fast', () => {


        _loader.attr('data-state', 'hide'); //})


        setTimeout(function () {
          resolve();
        }, 300);
      });
    }
    /* ----------------------------------------------------------------------------------------------------------------
     * Utility Api
     * ----------------------------------------------------------------------------------------------------------------
     */

    /*
     * Determine empty that like PHP
     *
     * @param mixed value (required)
     *
     * @return bool
     */

  }, {
    key: "is_empty",
    value: function is_empty(value) {
      if (value == null) {
        // typeof null -> object : for hack a bug of ECMAScript
        // Refer: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof
        return true;
      }

      switch (_typeof(value)) {
        case 'object':
          if (Array.isArray(value)) {
            // When object is array:
            return value.length === 0;
          } else {
            // When object is not array:
            if (Object.keys(value).length > 0 || Object.getOwnPropertySymbols(value).length > 0) {
              return false;
            } else if (value.valueOf().length !== undefined) {
              return value.valueOf().length === 0;
            } else if (_typeof(value.valueOf()) !== 'object') {
              return this.is_empty(value.valueOf());
            } else {
              return true;
            }
          }

        case 'string':
          return value === '';

        case 'number':
          return value == 0;

        case 'boolean':
          return !value;

        case 'undefined':
        case 'null':
          return true;

        case 'symbol': // Since ECMAScript6

        case 'function':
        default:
          return false;
      }
    }
    /*
     * Determine whether variable is an Object
     *
     * @param mixed item (required)
     *
     * @return bool
     */

  }, {
    key: "is_Object",
    value: function is_Object(item) {
      return item && _typeof(item) === 'object' && !Array.isArray(item);
    }
    /*
     * Merge two objects deeply as polyfill for instead "$.extend(true,target,source)"
     *
     * @param object target (required)
     * @param object source (required)
     *
     * @return object output
     */

  }, {
    key: "mergeDeep",
    value: function mergeDeep(target, source) {
      var output = Object.assign({}, target);

      if (this.is_Object(target) && this.is_Object(source)) {
        for (var _i11 = 0, _Object$keys8 = Object.keys(source); _i11 < _Object$keys8.length; _i11++) {
          var key = _Object$keys8[_i11];

          if (this.is_Object(source[key])) {
            if (!(key in target)) {
              Object.assign(output, _defineProperty({}, key, source[key]));
            } else {
              output[key] = this.mergeDeep(target[key], source[key]);
            }
          } else {
            Object.assign(output, _defineProperty({}, key, source[key]));
          }
        }
      }

      return output;
    }
    /*
     * Determine whether the object is iterable
     *
     * @param object obj (required)
     *
     * @return bool
     */

  }, {
    key: "is_iterable",
    value: function is_iterable(obj) {
      return obj && typeof obj[Symbol.iterator] === 'function';
    }
    /*
     * Add an @@iterator method to non-iterable object
     *
     * @param object obj (required)
     *
     * @return object
     */

  }, {
    key: "toIterableObject",
    value: function toIterableObject(obj) {
      if (this.is_iterable(obj)) {
        return obj;
      }

      obj[Symbol.iterator] = function () {
        var index = 0;
        return {
          next: function next() {
            if (obj.length <= index) {
              return {
                done: true
              };
            } else {
              return {
                value: obj[index++]
              };
            }
          }
        };
      };

      return obj;
    }
    /*
     * Supplemental method for validating arguments in local scope
     *
     * @param mixed default_value (required)
     * @param mixed opt_arg (optional)
     * @param mixed opt_callback (optional; function or string of function to call)
     *
     * @return mixed
     */

  }, {
    key: "supplement",
    value: function supplement(default_value, opt_arg, opt_callback) {
      if (opt_arg === undefined) {
        return default_value;
      }

      if (opt_callback === undefined) {
        return opt_arg;
      }

      return opt_callback(default_value, opt_arg);
    }
    /*
     * Generate the pluggable unique id
     *
     * @param int digit (optional)
     *
     * @return string
     */

  }, {
    key: "generateUniqueID",
    value: function generateUniqueID() {
      var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
      return new Date().getTime().toString(16) + Math.floor(digit * Math.random()).toString(16);
    }
    /*
     * Round a number with specific digit
     *
     * @param numeric number (required)
     * @param int digit (optional)
     * @param string round_type (optional; defaults to "round")
     *
     * @return numeric
     */

  }, {
    key: "numRound",
    value: function numRound(number, digit) {
      var round_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'round';
      digit = this.supplement(0, digit, this.validateNumeric);

      var _pow = Math.pow(10, digit);

      switch (true) {
        case /^ceil$/i.test(round_type):
          return Math.ceil(number * _pow) / _pow;

        case /^floor$/i.test(round_type):
          return Math.floor(number * _pow) / _pow;

        case /^round$/i.test(round_type):
        default:
          return Math.round(number * _pow) / _pow;
      }
    }
    /*
     * Convert hex of color code to rgba
     *
     * @param string hex (required)
     * @param float alpha (optional; defaults to 1)
     *
     * @return string
     */

  }, {
    key: "hexToRgbA",
    value: function hexToRgbA(hex) {
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var _c;

      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        _c = hex.substring(1).split('');

        if (_c.length == 3) {
          _c = [_c[0], _c[0], _c[1], _c[1], _c[2], _c[2]];
        }

        _c = "0x".concat(_c.join(''));
        return "rgba(".concat([_c >> 16 & 255, _c >> 8 & 255, _c & 255].join(','), ",").concat(alpha, ")");
      } // throw new Error( 'Bad Hex' )


      return hex;
    }
    /*
     * This method is able to get the correct datetime instead of built in "new Date" on javascript. (:> JavaScriptビルトインメソッドのnew Dateに代わって正確な日時を取得する
     * That is remapping to correct year if the year is 0 - 99, and supporting years BCE. (:> 0 - 99年の場合に年をリマッピングし、紀元前の年にも対応する
     *
     * @param mixed datetime (required; allowed an integer as milliseconds, a string as like datetime or an object instance of Date)
     * @param boolean adjustTimeZoneDiff (optional; defaults to false)
     *
     * @return Date Object, or null if failed
     */

  }, {
    key: "getCorrectDatetime",
    value: function getCorrectDatetime(datetime) {
      var adjustTimeZoneDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var normalizeDate = function normalizeDate(dateString) {
        var isMinus = /^-/.test(dateString),
            _m = isMinus ? '-' : '',
            _d;

        if (isMinus) {
          dateString = dateString.replace(/^-/, '');
        } // for Safari and Firefox


        _d = dateString.replace(/-/g, '/');

        switch (true) {
          case /^\d{1,4}\/\d{1,2}$/.test(_d):
            return "".concat(_m).concat(_d, "/1");

          case /^.+(\.\d{1,3})$/.test(_d):
            if (isNaN(Date.parse(_d))) {
              _d = _d.replace(RegExp.$1, '');
            }

            return "".concat(_m).concat(_d);

          default:
            return "".concat(_m).concat(_d);
        }
      },
          getDateObject = function getDateObject(datetime) {
        var _chk_str = normalizeDate(datetime),
            _raise = 0,
            _ymd,
            _his,
            _parts,
            _date;

        switch (true) {
          case /^-?\d{1,}\/\d{1,2}(|\/\d{1,2})(| \d{1,2}(|:\d{1,2}(|:\d{1,2})))$/i.test(_chk_str):
            {
              var _chk_str$split = _chk_str.split(' ');

              var _chk_str$split2 = _slicedToArray(_chk_str$split, 2);

              _ymd = _chk_str$split2[0];
              _his = _chk_str$split2[1];
              _parts = _ymd.split('/');

              if (_parts[1]) {
                _raise = Math.floor(_parts[1] / 13);
                _parts[1] = parseInt(_parts[1], 10) - 1; // to month index
              }

              var _his_base = [0, 0, 0];

              if (_his) {
                var _parts2;

                //_parts.push( ..._his.split(':') )
                (_parts2 = _parts).push.apply(_parts2, _toConsumableArray(Object.assign(_his_base, _his.split(':'))));
              } else {
                var _parts3;

                (_parts3 = _parts).push.apply(_parts3, _his_base);
              }

              _date = new Date(_construct(Date, _toConsumableArray(_parts)).setFullYear(parseInt(_parts[0], 10) + _raise));
              break;
            }

          case /^-?\d+$/.test(_chk_str):
            _date = new Date(_chk_str, 0, 1, 0, 0, 0, 0).setFullYear(parseInt(_chk_str, 10));
            break;

          default:
            _date = new Date(_chk_str.toString());
            break;
        }

        return _date;
      },
          _checkDate;

      switch (_typeof(datetime)) {
        case 'number':
          _checkDate = new Date(datetime);
          break;

        case 'string':
          _checkDate = getDateObject(datetime);
          break;

        case 'object':
          if (datetime instanceof Date) {
            _checkDate = datetime;
          }

          break;
      }

      if (isNaN(_checkDate) || !_checkDate) {
        //console.warn( `"${datetime}" Cannot parse date because invalid format.` )
        this._error("\"".concat(datetime, "\" Cannot parse date because invalid format."), 'warn');

        return null;
      }

      if (_checkDate instanceof Date === false) {
        _checkDate = new Date(_checkDate);
      }

      if (adjustTimeZoneDiff) {
        var _utcDate = new Date(_checkDate.getUTCFullYear(), _checkDate.getUTCMonth(), _checkDate.getUTCDate(), _checkDate.getUTCHours(), _checkDate.getUTCMinutes(), _checkDate.getUTCSeconds(), _checkDate.getUTCMilliseconds()),
            _tzDiff = this.diffDate(_checkDate, _utcDate); //console.log('!getCorrectDatetime::', _checkDate.toString(), _utcDate.toString(), _tzDiff )


        if (_tzDiff != 0) {
          _checkDate = this.modifyDate(_tzDiff > 0 ? _utcDate : _checkDate, -1 * _tzDiff, 'millisecond');
        } //console.log('!!getCorrectDatetime::', _checkDate.toString() )

      }

      return _checkDate;
    }
    /*
     * Method to get week number as extension of Date object
     * Note: added support for daylight savings time but needs improvement as performance has dropped
     *
     * @param mixed datetime (required; to be date object filtered by getCorrectDatetime method)
     *
     * @return mixed (return integer as week number when given valid argument, or false if failed)
     */

  }, {
    key: "getWeek",
    value: function getWeek(datetime) {
      if (this.is_empty(datetime)) {
        return false;
      }

      var firstDayIndex = this._config.firstDayOfWeek || 0,
          targetDate = this.getCorrectDatetime(datetime),
          firstDayOfYear = this.getCorrectDatetime("".concat(targetDate.getFullYear(), "/1/1")),
          //firstWeekday   = firstDayOfYear.getDay(),
      targetDateStr = targetDate.toDateString(),
          _weekNumber = 1,
          _checkDate = firstDayOfYear;

      for (var i = 0; i < 367; i++) {
        if (i > 0) {
          _checkDate = this.modifyDate(firstDayOfYear, i, 'day');
        }

        if (_checkDate.getDay() == firstDayIndex) {
          _weekNumber++;
        }

        if (_checkDate.toDateString() === targetDateStr) {
          break;
        }
      }

      return _weekNumber;
    }
    /*
     * Retrieve a first day of the week from week number
     * Note: added support for daylight savings time but needs improvement as performance has dropped
     *
     * @param int week_number (required)
     * @param int year (optional; defaults to current year)
     *
     * @return mixed (return Date object as the first day of week when given valid arguments, or false if failed)
     */

  }, {
    key: "getFirstDayOfWeek",
    value: function getFirstDayOfWeek(week_number, year) {
      if (this.is_empty(week_number)) {
        return false;
      }

      year = this.is_empty(year) ? new Date().getFullYear() : parseInt(year, 10);

      var firstDayIndex = this._config.firstDayOfWeek,
          firstDayOfYear = this.getCorrectDatetime("".concat(year, "/1/1")),
          _weekday = firstDayOfYear.getDay(),
          //_millisecInDay = 24 * 60 * 60 * 1000,
      //_week_time     = (week_number - 1) * _millisecInDay * 7,
      //_day_offset, _tempDt, _time, _retDt
      _keyDayOfWeek = firstDayOfYear,
          _offset = _weekday > firstDayIndex ? _weekday - firstDayIndex : 0,
          _weekNumber = _offset <= 0 ? 0 : 1,
          hitDate; //console.log( `!getFirstDayOfWeek::${year}, ${week_number}:`, _keyDayOfWeek.toDateString(), `(${_weekday}) > ${firstDayIndex} ?`, _offset, _weekNumber )


      if (_weekNumber == week_number && _weekday == firstDayIndex) {
        hitDate = firstDayOfYear;
      } else {
        for (var i = _offset; i < _offset + 7; i++) {
          if (i > _offset) {
            _keyDayOfWeek = this.modifyDate(firstDayOfYear, i, 'day');
          }

          if (_keyDayOfWeek.getDay() == firstDayIndex) {
            _weekNumber++;
            break;
          }
        }

        if (_weekNumber == week_number) {
          hitDate = _keyDayOfWeek;
        } else {
          hitDate = this.modifyDate(_keyDayOfWeek, (week_number - _weekNumber) * 7, 'day');
        }
      } //console.log( `!!getFirstDayOfWeek::${year}, ${week_number}:`, hitDate.toDateString() )


      return hitDate;
      /*
      _weekday = _weekday == 0 ? 7 : _weekday
      _day_offset = 1 - _weekday
      if ( 7 - _weekday + 1 < 4 ) {
          _day_offset += 7
      }
      _tempDt = new Date( firstDayOfYear.getTime() + _day_offset * _millisecInDay )
      _time   = _tempDt.getTime() + _week_time
      _retDt  = new Date( _tempDt.setTime( _time ) )
      console.log( '!!!getFirstDayOfWeek::', week_number, _retDt.toDateString() )
      return _retDt
      */
    }
    /*
     * Get the datetime shifted from the specified datetime by any fluctuation value
     *
     * @param mixed datetime (required; to be date object filtered by getCorrectDatetime method)
     * @param int fluctuation (required; an interval value to shift from given base datetime)
     * @param string scale (required; the scale of an interval value)
     *
     * @return mixed (return modified new Date object when given valid argument, or false if failed)
     */

  }, {
    key: "modifyDate",
    value: function modifyDate(datetime, fluctuation, scale) {
      if (this.is_empty(datetime) || this.is_empty(fluctuation) || this.is_empty(scale) || !this.verifyScale(scale)) {
        return false;
      }

      var baseDate = this.getCorrectDatetime(datetime),
          flct = this.validateNumeric(0, fluctuation),
          dateElms = [baseDate.getFullYear(), // 0: year
      baseDate.getMonth(), // 1: month (index)
      baseDate.getDate(), // 2: day
      baseDate.getHours(), // 3: hour
      baseDate.getMinutes(), // 4: minute
      baseDate.getSeconds(), // 5: second
      baseDate.getMilliseconds() // 6: millisec
      ],
          tmpDate = new Date(_construct(Date, dateElms).setFullYear(dateElms[0])),
          isAdjust = false,
          newDate;

      switch (true) {
        case /^millenniums?|millennia$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 1000));
          break;

        case /^century$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 100));
          break;

        case /^dec(ade|ennium)$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 10));
          break;

        case /^lustrum$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 5));
          break;

        case /^years?$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct));
          break;

        case /^months?$/i.test(scale):
          newDate = new Date(tmpDate.setMonth(tmpDate.getMonth() + flct));
          break;

        case /^weeks?$/i.test(scale):
          newDate = new Date(tmpDate.setDate(tmpDate.getDate() + flct * 7));
          newDate.setHours(dateElms[3]);
          newDate.setMinutes(dateElms[4]);
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]);
          break;

        case /^(|week)days?$/i.test(scale):
          newDate = new Date(tmpDate.setDate(tmpDate.getDate() + flct));
          newDate.setHours(dateElms[3]);
          newDate.setMinutes(dateElms[4]);
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]); //isAdjust = true

          break;

        case /^hours?$/i.test(scale):
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct * 60 * 60 * 1000));
          newDate.setMinutes(dateElms[4]);
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]);
          break;

        case /^minutes?$/i.test(scale):
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct * 60 * 1000));
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]);
          break;

        case /^seconds?$/i.test(scale):
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct * 1000));
          newDate.setMilliseconds(dateElms[6]);
          break;

        default:
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct));
          break;
      }

      if (isAdjust) {
        // Why different time of 1 min 15 sec on 12/01/1847, 0:00:00? (GMT+0001)
        var divide = this.getCorrectDatetime('1847/12/1 0:01:15');

        if (baseDate.getTime() < divide.getTime() && newDate.getTime() >= divide.getTime()) {
          newDate = new Date(newDate.setTime(newDate.getTime() - 60 * 1000));
        } else if (baseDate.getTime() > divide.getTime() && newDate.getTime() <= divide.getTime()) {
          newDate = new Date(newDate.setTime(newDate.getTime() - 75 * 1000));
        }
      } //console.log( 'modifyDate:', baseDate.toString(), '-[', flct, scale, ']->', newDate.toString() )


      return newDate;
    }
    /*
     * Acquire the difference between two dates with the specified scale value (:> 2つの日付の差分を指定したスケール値で取得する
     *
     * @param mixed date1 (required; integer as milliseconds or object instanceof Date)
     * @param mixed date2 (required; integer as milliseconds or object instanceof Date)
     * @param string scale (optional; defaults to 'millisecond')
     * @param bool absval (optional; defaults to false)
     *
     * @return mixed
     */

  }, {
    key: "diffDate",
    value: function diffDate(date1, date2) {
      var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'millisecond';
      var absval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var _dt1 = date1 === undefined ? null : date1,
          _dt2 = date2 === undefined ? null : date2,
          diffMS = 0,
          retval = false,
          lastDayOfMonth = function lastDayOfMonth(dateObj) {
        var _tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);

        _tmp.setTime(_tmp.getTime() - 1);

        return _tmp.getDate();
      },
          isLeapYear = function isLeapYear(dateObj) {
        var _tmp = new Date(dateObj.getFullYear(), 0, 1),
            sum = 0;

        for (var i = 0; i < 12; i++) {
          _tmp.setMonth(i);

          sum += lastDayOfMonth(_tmp);
        }

        return sum == 365 ? false : true;
      };

      if (!_dt1 || !_dt2) {
        //console.warn( 'Cannot parse date to get difference because undefined.' )
        this._error('Cannot parse date to get difference because undefined.', 'warn');

        return false;
      }

      diffMS = _dt2 - _dt1;

      if (isNaN(diffMS)) {
        //console.warn( 'Cannot parse date to get difference because invalid format.' )
        this._error('Cannot parse date to get difference because invalid format.', 'warn');

        return false;
      }

      if (absval) {
        diffMS = Math.abs(diffMS);
      }

      var _bd = _dt1 instanceof Date ? _dt1 : new Date(_dt1),
          _ed = _dt2 instanceof Date ? _dt2 : new Date(_dt2),
          _dy = _ed.getFullYear() - _bd.getFullYear(),
          _m = {};

      switch (true) {
        case /^millenniums?|millennia$/i.test(scale):
          {
            // return { "millennium-number": years,... }
            var _by = _bd.getFullYear(),
                _ey = _ed.getFullYear(),
                _bm = Math.ceil((_by == 0 ? 1 : _by) / 1000),
                // millennium of first ordinal
            _em = Math.ceil((_ey == 0 ? 1 : _ey) / 1000),
                _cm = _bm;

            _m[_bm] = _em - _bm > 0 ? _bm * 1000 - _by : _ey - _by;
            _cm++;

            while (_cm <= _em) {
              _m[_cm] = _em - _cm > 0 ? 1000 : _ey - (_cm - 1) * 1000;
              _cm++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^century$/i.test(scale):
          {
            // return { "century-number": years,... }
            var _by2 = _bd.getFullYear(),
                _ey2 = _ed.getFullYear(),
                _bc = Math.ceil((_by2 == 0 ? 1 : _by2) / 100),
                // century of first ordinal
            _ec = Math.ceil((_ey2 == 0 ? 1 : _ey2) / 100),
                _cc = _bc;

            _m[_bc] = _ec - _bc > 0 ? _bc * 100 - _by2 : _ey2 - _by2;
            _cc++;

            while (_cc <= _ec) {
              _m[_cc] = _ec - _cc > 0 ? 100 : _ey2 - (_cc - 1) * 100;
              _cc++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^dec(ade|ennium)$/i.test(scale):
          {
            // return { "decade-number": days,... }
            var _by3 = _bd.getFullYear(),
                _ey3 = _ed.getFullYear(),
                _cy = _by3 == 0 ? 1 : _by3,
                _cd,
                _days;

            while (_cy <= _ey3) {
              _days = isLeapYear(new Date(_cy, 0, 1)) ? 366 : 365;
              _cd = Math.ceil(_cy / 10); // decade of first ordinal

              if (Object.hasOwnProperty.call(_m, _cd)) {
                _m[_cd] += _days;
              } else {
                _m[_cd] = _days;
              }

              _cy++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^lustrum$/i.test(scale):
          {
            // return { "lustrum-number": days,... }
            var _by4 = _bd.getFullYear(),
                _ey4 = _ed.getFullYear(),
                _cy2 = _by4 == 0 ? 1 : _by4,
                _cl,
                _days2;

            while (_cy2 <= _ey4) {
              _days2 = isLeapYear(new Date(_cy2, 0, 1)) ? 366 : 365;
              _cl = Math.ceil(_cy2 / 5); // lustrum of first ordinal

              if (Object.hasOwnProperty.call(_m, _cl)) {
                _m[_cl] += _days2;
              } else {
                _m[_cl] = _days2;
              }

              _cy2++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^years?$/i.test(scale):
          // return { "year": days,... }
          if (_dy > 0) {
            for (var i = 0; i <= _dy; i++) {
              var _cd2 = new Date(_bd.getFullYear() + i, 0, 1);

              _m["".concat(_bd.getFullYear() + i)] = isLeapYear(_cd2) ? 366 : 365;
            }
          } else {
            _m["".concat(_bd.getFullYear())] = isLeapYear(_bd) ? 366 : 365;
          }

          retval = _m;
          break;

        case /^months?$/i.test(scale):
          // return { "year/month": days,... }
          if (_dy > 0) {
            for (var _i12 = _bd.getMonth(); _i12 < 12; _i12++) {
              var _cd3 = new Date(_bd.getFullYear(), _i12, 1);

              _m["".concat(_bd.getFullYear(), "/").concat(_i12 + 1)] = lastDayOfMonth(_cd3);
            }

            if (_dy > 1) {
              for (var y = 1; y < _dy; y++) {
                for (var _i13 = 0; _i13 < 12; _i13++) {
                  var _cd4 = new Date(_bd.getFullYear() + y, _i13, 1);

                  _m["".concat(_bd.getFullYear() + y, "/").concat(_i13 + 1)] = lastDayOfMonth(_cd4);
                }
              }
            }

            for (var _i14 = 0; _i14 <= _ed.getMonth(); _i14++) {
              var _cd5 = new Date(_ed.getFullYear(), _i14, 1);

              _m["".concat(_ed.getFullYear(), "/").concat(_i14 + 1)] = lastDayOfMonth(_cd5);
            }
          } else {
            for (var _i15 = _bd.getMonth(); _i15 <= _ed.getMonth(); _i15++) {
              var _cd6 = new Date(_bd.getFullYear(), _i15, 1);

              _m["".concat(_bd.getFullYear(), "/").concat(_i15 + 1)] = lastDayOfMonth(_cd6);
            }
          }

          retval = _m;
          break;

        case /^weeks?$/i.test(scale):
          {
            // return { "year,week": hours,... }
            var _cd7 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate()),
                _cw = this.getWeek(_cd7),
                _nd = new Date(_cd7),
                _pd = new Date(_cd7),
                _newWeek = "".concat(_cd7.getFullYear(), ",").concat(_cw);

            _nd.setDate(_nd.getDate() + 1);

            _pd.setDate(_pd.getDate() - 1);

            _m[_newWeek] = (_cd7 - _pd) / (60 * 60 * 1000); // hours of first day

            while (_nd.getTime() <= _ed.getTime()) {
              _nd.setDate(_nd.getDate() + 1);

              _cd7.setDate(_cd7.getDate() + 1);

              _cw = this.getWeek(_cd7);

              var _newWeekKey = "".concat(_cd7.getFullYear(), ",").concat(_cw);

              if (Object.hasOwnProperty.call(_m, _newWeekKey)) {
                _m[_newWeekKey] += (_nd - _cd7) / (60 * 60 * 1000);
              } else {
                _m[_newWeekKey] = (_nd - _cd7) / (60 * 60 * 1000);
              }
            }

            retval = _m;
            break;
          }

        case /^(|week)days?$/i.test(scale):
          {
            // return { "year/month/day": hours,... }
            var _cd8 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate()),
                _nd2 = new Date(_cd8),
                _pd2 = new Date(_cd8);

            _nd2.setDate(_nd2.getDate() + 1);

            _pd2.setDate(_pd2.getDate() - 1);

            _m["".concat(_cd8.getFullYear(), "/").concat(_cd8.getMonth() + 1, "/").concat(_cd8.getDate())] = (_cd8 - _pd2) / (60 * 60 * 1000);

            while (_nd2.getTime() <= _ed.getTime()) {
              _nd2.setDate(_nd2.getDate() + 1);

              _cd8.setDate(_cd8.getDate() + 1);

              _m["".concat(_cd8.getFullYear(), "/").concat(_cd8.getMonth() + 1, "/").concat(_cd8.getDate())] = (_nd2 - _cd8) / (60 * 60 * 1000);
            }

            retval = _m;
            break;
          }

        case /^hours?$/i.test(scale):
          {
            // return { "year/month/day hour": minutes,... }
            var _cd9 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours()),
                _nd3 = new Date(_cd9),
                _pd3 = new Date(_cd9);

            _nd3.setHours(_nd3.getHours() + 1);

            _pd3.setHours(_pd3.getHours() - 1);

            _m["".concat(_cd9.getFullYear(), "/").concat(_cd9.getMonth() + 1, "/").concat(_cd9.getDate(), " ").concat(_cd9.getHours())] = (_cd9 - _pd3) / (60 * 1000);

            while (_nd3.getTime() <= _ed.getTime()) {
              _nd3.setHours(_nd3.getHours() + 1);

              _cd9.setHours(_cd9.getHours() + 1);

              _m["".concat(_cd9.getFullYear(), "/").concat(_cd9.getMonth() + 1, "/").concat(_cd9.getDate(), " ").concat(_cd9.getHours())] = (_nd3 - _cd9) / (60 * 1000);
            }

            retval = _m;
            break;
          }

        case /^minutes?$/i.test(scale):
          {
            // return { "year/month/day hour:minute": seconds,... }
            var _cd10 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours(), _bd.getMinutes()),
                _nd4 = new Date(_cd10),
                _pd4 = new Date(_cd10);

            _nd4.setMinutes(_nd4.getMinutes() + 1);

            _pd4.setMinutes(_pd4.getMinutes() - 1);

            _m["".concat(_cd10.getFullYear(), "/").concat(_cd10.getMonth() + 1, "/").concat(_cd10.getDate(), " ").concat(_cd10.getHours(), ":").concat(_cd10.getMinutes())] = (_cd10 - _pd4) / 1000;

            while (_nd4.getTime() <= _ed.getTime()) {
              _nd4.setMinutes(_nd4.getMinutes() + 1);

              _cd10.setMinutes(_cd10.getMinutes() + 1);

              _m["".concat(_cd10.getFullYear(), "/").concat(_cd10.getMonth() + 1, "/").concat(_cd10.getDate(), " ").concat(_cd10.getHours(), ":").concat(_cd10.getMinutes())] = (_nd4 - _cd10) / 1000;
            }

            retval = _m;
            break;
          }

        case /^seconds?$/i.test(scale):
          {
            // return { "year/month/day hour:minute:second": milliseconds,... }
            var _cd11 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours(), _bd.getMinutes(), _bd.getSeconds()),
                _nd5 = new Date(_cd11),
                _pd5 = new Date(_cd11);

            _nd5.setSeconds(_nd5.getSeconds() + 1);

            _pd5.setSeconds(_pd5.getSeconds() - 1);

            _m["".concat(_cd11.getFullYear(), "/").concat(_cd11.getMonth() + 1, "/").concat(_cd11.getDate(), " ").concat(_cd11.getHours(), ":").concat(_cd11.getMinutes(), ":").concat(_cd11.getSeconds())] = _cd11 - _pd5;

            while (_nd5.getTime() <= _ed.getTime()) {
              _nd5.setSeconds(_nd5.getSeconds() + 1);

              _cd11.setSeconds(_cd11.getSeconds() + 1);

              _m["".concat(_cd11.getFullYear(), "/").concat(_cd11.getMonth() + 1, "/").concat(_cd11.getDate(), " ").concat(_cd11.getHours(), ":").concat(_cd11.getMinutes(), ":").concat(_cd11.getSeconds())] = _nd5 - _cd11;
            }

            retval = _m;
            break;
          }

        default:
          // return number of milliseconds
          retval = diffMS;
          break;
      }

      return retval;
    }
    /*
     * Verify whether is allowed scale in the plugin. (:> 許容スケールかを確認します。
     * Then retrieves that values of intervals on the scale if the scale is available and given arguments of date range. (:> 有効スケールかつ日付範囲引数が与えられた場合、対象スケールの間隔値を取得します
     * And return the base millisecond of scale if it is not the variable length scale (isVLS to false) (:> 可変長スケールでない場合はスケールの基本ミリ秒を返します
     *
     * @param string scale (required)
     * @param int begin (optional; begin of range as unit millisecs that got by `Date.getTime()`)
     * @param int end (optional; end of range as unit millisecs that got by `Date.getTime()`)
     * @param bool isVLS (optional; whether is variable length scale, defaults to false)
     *
     * @return mixed (boolean if no arguments are given after the first argument)
     */

  }, {
    key: "verifyScale",
    value: function verifyScale(scale) {
      var begin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var isVLS = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var _ms = -1,
          isBool = this.is_empty(begin) || this.is_empty(end),
          retval = isVLS ? this.diffDate(begin, end, scale) : false;

      if (typeof scale === 'undefined' || typeof scale !== 'string') {
        return false;
      }

      switch (true) {
        case /^millisec(|ond)s?$/i.test(scale):
          // Millisecond (:> ミリ秒
          _ms = 1;
          break;

        case /^seconds?$/i.test(scale):
          // Second (:> 秒
          _ms = 1000;
          break;

        case /^minutes?$/i.test(scale):
          // Minute (:> 分
          _ms = 60 * 1000;
          break;

        case /^quarter-?(|hour)$/i.test(scale):
          // Quarter of an hour (:> 15分
          _ms = 15 * 60 * 1000;
          break;

        case /^half-?(|hour)$/i.test(scale):
          // Half an hour (:> 30分
          _ms = 30 * 60 * 1000;
          break;

        case /^hours?$/i.test(scale):
          // Hour (:> 時（時間）
          _ms = 60 * 60 * 1000;
          break;

        case /^(|week)days?$/i.test(scale):
          // Day (is the variable length scale by DST) (:> 日 (サマータイムによる可変長スケール)
          _ms = 24 * 60 * 60 * 1000;
          break;

        case /^weeks?$/i.test(scale):
          // Week (is the variable length scale by DST) (:> 週 (サマータイムによる可変長スケール)
          _ms = 7 * 24 * 60 * 60 * 1000;
          break;

        case /^months?$/i.test(scale):
          // Month (is the variable length scale) (:> 月（可変長スケール）
          _ms = 30.44 * 24 * 60 * 60 * 1000;
          break;

        case /^years?$/i.test(scale):
          // Year (is the variable length scale) (:> 年（可変長スケール）
          _ms = 365.25 * 24 * 60 * 60 * 1000;
          break;

        case /^lustrum$/i.test(scale):
          // Lustrum (is the variable length scale, but currently does not support) (:> 五年紀 (可変長スケールだが現在サポートしてない)
          // 5y = 1826 or 1827; 1826 * 24 * 60 * 60 = 15766400, 1827 * 24 * 60 * 60 = 157852800 | avg.= 157788000
          //_ms = ( ( 3.1536 * Math.pow( 10, 8 ) ) / 2 ) * 1000 // <--- Useless by info of wikipedia
          _ms = 157788000 * 1000;
          break;

        case /^dec(ade|ennium)$/i.test(scale):
          // Decade (is the variable length scale, but currently does not support) (:> 十年紀 (可変長スケールだが現在サポートしてない)
          // 10y = 3652 or 3653; 3652 * 24 * 60 * 60 = 315532800, 3653 * 24 * 60 * 60 = 157852800 | avg. = 315576000
          // _ms = ( 3.1536 * Math.pow( 10, 8 ) ) * 1000 // <--- Useless by info of wikipedia
          _ms = 315576000 * 1000;
          break;

        case /^century$/i.test(scale):
          // Century (:> 世紀（百年紀）
          // 100y = 36525; 36525 * 24 * 60 * 60 = 3155760000
          _ms = 3155760000 * 1000;
          break;

        case /^millenniums?|millennia$/i.test(scale):
          // Millennium (:> 千年紀
          // 100y = 365250
          //_ms = ( 3.1536 * Math.pow( 10, 10 ) ) * 1000
          _ms = 3155760000 * 10 * 1000;
          break;

        default:
          //console.warn( `Specified an invalid "${scale}" scale.` )
          this._error("Specified an invalid \"".concat(scale, "\" scale."), 'warn');

          _ms = -1;
      }

      if (isBool) {
        return _ms > 0;
      } else {
        return isVLS ? retval : _ms;
      }
    }
    /*
     * Retrieve one higher scale
     *
     * @param string scale (required)
     *
     * @return string as higher scale
     */

  }, {
    key: "getHigherScale",
    value: function getHigherScale(scale) {
      return this.findScale(scale, 'higher');
    }
    /*
     * Retrieve one lower scale
     *
     * @param string scale (required)
     *
     * @return string as lower scale
     */

  }, {
    key: "getLowerScale",
    value: function getLowerScale(scale) {
      return this.findScale(scale, 'lower');
    }
    /*
     * Find scale matched the specified condition
     *
     * @param string base_scale (required)
     * @param string condition (required)
     *
     * @return mixed matched scale(s)
     */

  }, {
    key: "findScale",
    value: function findScale(base_scale, condition) {
      var scalePatternMap = [['millisecond', '^millisec(|ond)s?$'], ['second', '^seconds?$'], ['minute', '^minutes?$'], ['hour', '^(|half|quarter)-?(|hour)s?$'], ['day', '^(|week)days?$'], ['week', '^weeks?$'], ['month', '^months?$'], ['year', '^years?$'], ['lustrum', '^lustrum$'], ['decade', '^dec(ade|ennium)$'], ['century', '^century$'], ['millennium', '^millenniums?|millennia$']],
          _idx = scalePatternMap.findIndex(function (elm) {
        return new RegExp("".concat(elm[1]), 'i').test(base_scale);
      }),
          _narrows;

      switch (true) {
        case /^higher$/i.test(condition):
          _idx = scalePatternMap[_idx + 1] ? _idx + 1 : _idx;
          return scalePatternMap[_idx][0];

        case /^higher\s?all$/i.test(condition):
          _narrows = scalePatternMap.slice(_idx + 1);
          _narrows = _narrows.reduce(function (acc, cur) {
            return acc.concat(cur[0]);
          }, []);

          if (_narrows.includes('day')) {
            _narrows.push('weekday');
          }

          return _narrows;

        case /^lower$/i.test(condition):
          _idx = scalePatternMap[_idx - 1] ? _idx - 1 : _idx;
          return scalePatternMap[_idx][0];

        case /^lower\s?all$/i.test(condition):
          _narrows = scalePatternMap.slice(0, _idx);
          _narrows = _narrows.reduce(function (acc, cur) {
            return acc.concat(cur[0]);
          }, []);

          if (_narrows.includes('day')) {
            _narrows.push('weekday');
          }

          return _narrows;

        default:
          return scalePatternMap[_idx][0];
      }
    }
    /*
     * Retrieve the date string of specified locale (:> 指定されたロケールの日付文字列を取得する
     *
     * @param string date_seed (required)
     * @param string scale (optional; defalts to '')
     * @param string locales (optional and omittable; defaults to 'en-US')
     * @param object options (optional; defaults to empty object)
     *
     * @return mixed locale_string (return false if failure)
     */

  }, {
    key: "getLocaleString",
    value: function getLocaleString(date_seed) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var locales = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      function toLocaleStringSupportsLocales() {
        try {
          new Date().toLocaleString('i');
        } catch (e) {
          return e.name === "RangeError";
        }

        return false;
      }

      var is_toLocalString = toLocaleStringSupportsLocales(),
          locale_string = '',
          _options = {},
          // options for built-in method only
      //_ext_opts        = {}, // options extended for this plugin
      _has_options = false,
          getOrdinal = function getOrdinal(n) {
        var s = ['th', 'st', 'nd', 'rd'],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
      },
          getZerofill = function getZerofill(num) {
        var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

        var strDuplicate = function strDuplicate(n, str) {
          return Array(n + 1).join(str);
        },
            zero = strDuplicate(digit - String(num).length, '0');

        return String(num).length == digit ? String(num) : (zero + num).substr(num * -1);
      },
          _prop,
          _temp,
          _str,
          _num,
          _year,
          _month,
          _week;

      if (this.is_empty(date_seed)) {
        return false;
      }

      locales = this.supplement('en-US', locales, this.validateString);
      options = this.supplement({}, options, this.validateObject);

      for (_prop in options) {
        if (/^(localeMatcher|timeZone|hour12|formatMatcher|era|timeZoneName)$/.test(_prop)) {
          _options[_prop] = options[_prop];
        }
      }

      if (Object.keys(_options).length > 0) {
        _has_options = true;
      } //console.log( `!getLocaleString::${scale}:`, date_seed, locales, options[scale], is_toLocalString )


      switch (true) {
        case /^millenniums?|millennia$/i.test(scale):
        case /^century$/i.test(scale):
        case /^dec(ade|ennium)$/i.test(scale):
        case /^lustrum$/i.test(scale):
          // Allowed value as format: 'numeric', 'ordinal'
          _year = this.getCorrectDatetime(date_seed).getFullYear();

          if (/^millenniums?|millennia$/i.test(scale)) {
            _temp = 1000;
          } else if (/^century$/i.test(scale)) {
            _temp = 100;
          } else if (/^dec(ade|ennium)$/i.test(scale)) {
            _temp = 10;
          } else {
            _temp = 5;
          }

          _num = this.numRound(_year / _temp, 0, 'ceil');

          if (Object.hasOwnProperty.call(options, scale) && options[scale] === 'ordinal') {
            locale_string = getOrdinal(_num);
          } else {
            locale_string = _num;
          }

          break;

        case /^years?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'zerofill'
          _temp = this.getCorrectDatetime(date_seed);
          _year = _temp.getFullYear();

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.year = options[scale]; //locale_string = _temp.toLocaleString( locales, _options )

                locale_string = _temp.toLocaleDateString(locales, _options);
              } else if (/^zerofill$/i.test(options[scale])) {
                locale_string = _year.toString().length > 3 ? _year : getZerofill(_year, 4);

                if (_has_options) {
                  locale_string = _temp.toLocaleDateString(locales, _options).replace(_year, locale_string);
                }
              } else {
                locale_string = _year;
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _year : locale_string; //console.log(`!getLocaleString::${scale}:`, date_seed, _temp, _year, is_toLocalString, options[scale], locale_string )

          break;

        case /^months?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'narrow', 'short', 'long'
          _temp = this.getCorrectDatetime(date_seed, true);
          _month = _temp.getMonth() + 1; //console.log(`!getLocaleString::${scale}:`, date_seed, _temp, _month, is_toLocalString, options[scale], _options )

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit|narrow|short|long)$/i.test(options[scale])) {
                _options.month = options[scale];
                locale_string = _temp.toLocaleString(locales, _options);
              } else {
                locale_string = _month;
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _month : locale_string; //console.log(`!!getLocaleString::${scale}:`, locale_string )

          break;

        case /^weeks?$/i.test(scale):
          // Allowed value as format: 'numeric', 'ordinal'
          if (typeof date_seed === 'string' && /^(.*)+,\d{1,2}$/.test(date_seed)) {
            var _date_seed$split3 = date_seed.split(',');

            var _date_seed$split4 = _slicedToArray(_date_seed$split3, 2);

            _str = _date_seed$split4[0];
            _num = _date_seed$split4[1];
            _week = parseInt(_num, 10);
          } else {
            _week = this.getWeek(this.getCorrectDatetime(date_seed));
          }

          if (Object.hasOwnProperty.call(options, scale) && options[scale] === 'ordinal') {
            locale_string = getOrdinal(_week);
          } else {
            locale_string = _week;
          }

          break;

        case /^weekdays?$/i.test(scale):
          // Allowed value as format: 'narrow', 'short', 'long'
          if (typeof date_seed === 'string' && /^(.*)+,\d{1}$/.test(date_seed)) {
            var _date_seed$split5 = date_seed.split(',');

            var _date_seed$split6 = _slicedToArray(_date_seed$split5, 2);

            _str = _date_seed$split6[0];
            _num = _date_seed$split6[1];
            _temp = this.getCorrectDatetime(_str, true);
            _num = parseInt(_num, 10);
          } else {
            _temp = this.getCorrectDatetime(date_seed, true);
          }

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(narrow|short|long)$/i.test(options[scale])) {
                _options.weekday = options[scale];
                locale_string = _temp.toLocaleString(locales, _options);
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          if (this.is_empty(locale_string)) {
            _str = _temp.toLocaleDateString(locales, {
              weekday: 'long'
            });

            if (/^short$/i.test(options[scale])) {
              locale_string = _str.substring(0, 3);
            } else if (/^long$/i.test(options[scale])) {
              locale_string = _str;
            } else {
              locale_string = _str.substring(0, 1);
            }
          }

          break;

        case /^days?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'ordinal'
          _temp = this.getCorrectDatetime(date_seed, true);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.day = options[scale];
                locale_string = _temp.toLocaleString(locales, _options);
              } else if (/^ordinal$/i.test(options[scale])) {
                locale_string = getOrdinal(parseInt(_temp.getDate(), 10));
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getDate() : locale_string;
          break;

        case /^hours?$/i.test(scale):
        case /^(half|quarter)-?hours?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'fulltime'
          _temp = this.getCorrectDatetime(date_seed);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.hour = options[scale];
              } else if (/^fulltime$/i.test(options[scale])) {
                _options.hour = 'numeric';
                _options.minute = 'numeric';
              }

              locale_string = _temp.toLocaleString(locales, _options);
            } else if (_has_options) {
              locale_string = _temp.toLocaleString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getHours() : locale_string;
          break;

        case /^minutes?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'fulltime'
          _temp = this.getCorrectDatetime(date_seed);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.minute = options[scale];
              } else if (/^fulltime$/i.test(options[scale])) {
                _options.hour = 'numeric';
                _options.minute = 'numeric';
              }

              locale_string = _temp.toLocaleString(locales, _options);
            } else if (_has_options) {
              locale_string = _temp.toLocaleString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getMinutes() : locale_string;
          break;

        case /^seconds?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'fulltime'
          _temp = this.getCorrectDatetime(date_seed);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.second = options[scale];
              } else if (/^fulltime$/i.test(options[scale])) {
                _options.hour = 'numeric';
                _options.minute = 'numeric';
                _options.second = 'numeric';
              }

              locale_string = _temp.toLocaleString(locales, _options);
            } else if (_has_options) {
              locale_string = _temp.toLocaleString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getSeconds() : locale_string;
          break;

        case /^millisec(|ond)s?$/i.test(scale):
          // Allowed value as format: 'narrow', 'numeric'
          _temp = this.getCorrectDatetime(date_seed);

          if (Object.hasOwnProperty.call(options, scale)) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (/^numeric$/i.test(options[scale])) {
              locale_string = parseInt(_temp.getMilliseconds(), 10);
            } else {
              locale_string = getZerofill(parseInt(_temp.getMilliseconds(), 10), 3);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getMilliseconds() : locale_string;
          break;

        case /^custom$/i.test(scale):
          //console.log( `!getLocaleString::${scale}:`, date_seed, locales, options, _options, _has_options )
          // Custom format
          _temp = this.getCorrectDatetime(date_seed);

          if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
            _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
          }

          if (Object.hasOwnProperty.call(options, scale)) {
            locale_string = this.datetimeFormat(_temp, options[scale], locales);
          }

          locale_string = this.is_empty(locale_string) ? _temp.toString() : locale_string;
          break;

        default:
          // Allowed value as format: 'narrow'
          _temp = this.getCorrectDatetime(date_seed);

          if (_has_options) {
            locale_string = _temp.toLocaleString(locales, _options);
          } else {
            locale_string = _temp.toString();
          }

          break;
      } //console.log( '!getLocaleString:', date_seed, scale, locales, options[scale], locale_string )


      return locale_string.toString();
    }
    /*
     * Convert the date-time to custom formatting strings, as like ruby
     *
     * @param mixed baseDate (required; should be a Date object)
     * @param string format (optional; defaults to '')
     * @param string locales (optional; defaults to 'en-US')
     *
     * @return string
     */

  }, {
    key: "datetimeFormat",
    value: function datetimeFormat(baseDate) {
      var _this17 = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var locales = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';

      // let _baseDt = Object.prototype.toString.call( baseDate ) === '[object Date]' ? baseDate : this.getCorrectDatetime( baseDate ),
      var _baseDt = baseDate instanceof Date ? baseDate : this.getCorrectDatetime(baseDate),
          _fmt = format.toString().split(''),
          _ptn = 'YyZmBbdwWAaIHMSj'.split(''),
          _cnvStr = '',
          lastDayOfMonth = function lastDayOfMonth(dateObj) {
        var _tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);

        _tmp.setTime(_tmp.getTime() - 1);

        return _tmp.getDate();
      };

      if (this.is_empty(_fmt)) {
        return _baseDt.toString();
      }

      _fmt.forEach(function (_str, _i, _orig) {
        var _match = false,
            _repStr = '';

        if (_ptn.includes(_str) && !_this17.is_empty(_orig[_i - 1]) && _orig[_i - 1] === '%') {
          _match = _this17.is_empty(_orig[_i - 2]) || _orig[_i - 2] !== '\\';
        }

        if (_match) {
          switch (_str) {
            case 'Y':
            case 'y':
            case 'Z':
              {
                // year
                var _year = _baseDt.getFullYear();

                if (_str === 'Z') {
                  _repStr = _year < 10 ? "000".concat(_year) : _year < 100 ? "00".concat(_year) : _year < 1000 ? "0".concat(_year) : _year;
                } else {
                  _repStr = _str === 'Y' ? _year : _year.toString().slice(-2);
                }

                break;
              }

            case 'm':
            case 'B':
            case 'b':
              {
                // month
                if (_str === 'm') {
                  var _month = _baseDt.getMonth() + 1;

                  _repStr = _month < 10 ? "0".concat(_month) : _month;
                } else {
                  var _opts = {
                    month: _str === 'B' ? 'long' : 'short'
                  };
                  _repStr = _baseDt.toLocaleDateString(locales, _opts);
                }

                break;
              }

            case 'd':
              {
                // day
                var _day = _baseDt.getDate();

                _repStr = _day < 10 ? "0".concat(_day) : _day;
                break;
              }

            case 'w':
            case 'A':
            case 'a':
              {
                // weekday
                if (_str === 'w') {
                  var _wday = _baseDt.getDay();

                  _repStr = _wday;
                } else {
                  var _opts2 = {
                    weekday: _str === 'A' ? 'long' : 'short'
                  };
                  _repStr = _baseDt.toLocaleDateString(locales, _opts2);
                }

                break;
              }

            case 'W':
              {
                // week
                _repStr = _this17.getWeek(_baseDt);
                break;
              }

            case 'I':
            case 'H':
              {
                // hour
                var _opts3 = {
                  hour12: _str === 'I',
                  hour: 'numeric'
                };
                _repStr = _baseDt.toLocaleTimeString(locales, _opts3);
                break;
              }

            case 'M':
              {
                // minute
                _repStr = _baseDt.toLocaleTimeString(locales, {
                  minute: 'numeric'
                });
                break;
              }

            case 'S':
              {
                // second
                _repStr = _baseDt.toLocaleTimeString(locales, {
                  second: 'numeric'
                });
                break;
              }

            case 'j':
              {
                // day of year
                var _fdy = new Date(_baseDt.getFullYear(), 0, 1),
                    _month2 = _baseDt.getMonth(),
                    _days = 0,
                    _m;

                for (_m = 0; _m < _month2; _m++) {
                  _fdy.setMonth(_m);

                  _days += lastDayOfMonth(_fdy);
                }

                _repStr = _days + _baseDt.getDate();
                _repStr = _repStr < 10 ? "00".concat(_repStr) : _repStr < 100 ? "0".concat(_repStr) : _repStr;
                break;
              }
          }

          _cnvStr = _cnvStr.substring(0, _cnvStr.length - 1) + _repStr.toString();
        } else {
          _cnvStr += _str;
        }
      }, _cnvStr);

      _cnvStr = _cnvStr.toString().replace(/\\/g, '');
      return _cnvStr;
    }
    /*
     * Get the rendering width of the given string
     *
     * @param string str (required)
     *
     * @return int
     */

  }, {
    key: "strWidth",
    value: function strWidth(str) {
      var _str_ruler = $('<span id="jqtl-str-ruler"></span>'),
          _width = 0;

      if ($('#jqtl-str-ruler').length == 0) {
        $('body').append(_str_ruler);
      }

      _width = $('#jqtl-str-ruler').text(str).get(0).offsetWidth;
      $('#jqtl-str-ruler').empty();
      return _width;
    }
    /*
     * Sort an array by value of specific property (Note: destructive method)
     * Usage: Object.sort( this.compareValues( property, order ) )
     *
     * @param string key (required)
     * @param string order (optional; defaults to 'asc')
     *
     * @return object
     */

  }, {
    key: "compareValues",
    value: function compareValues(key) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
      return function (a, b) {
        if (!Object.hasOwnProperty.call(a, key) || !Object.hasOwnProperty.call(b, key)) {
          return 0;
        }

        var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
        var comparison = 0;

        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }

        return order === 'desc' ? comparison * -1 : comparison;
      };
    }
    /*
     * Getter argument as user data
     *
     * @since v2.1.0
     *
     * @param array userdata (required)
     *
     * @return mixed
     */

  }, {
    key: "getUserArg",
    value: function getUserArg(userdata) {
      //console.log( '!_getUserArg:', userdata, typeof userdata, typeof userdata[0], this.is_Object( userdata[0] ) )
      switch (_typeof(userdata[0])) {
        case 'string':
        case 'number':
          userdata = [userdata[0]];
          break;

        case 'object':
          if (this.is_Object(userdata[0])) {
            // Object
            if (this.is_empty(userdata[0])) {
              userdata = {};
            } else {
              userdata = this.mergeDeep({}, userdata[0]);
            }
          } else {
            // Array
            if (this.is_empty(userdata[0])) {
              userdata = [];
            } else {
              userdata = userdata[0];
            }
          }

          break;

        default:
          userdata = userdata[0];
          break;
      }

      return userdata;
    }
    /*
     * Apply custom theme styles
     *
     * @since v2.1.0
     *
     * @return void
     */

  }, {
    key: "applyThemeStyle",
    value: function applyThemeStyle() {
      var theme = this._config.colorScheme.theme,
          selector = this._selector,
          styleId = "".concat(PREFIX, "-theme-").concat(selector.replace(/[.#_]/g, '-')),
          styleTag = $('<style></style>', {
        id: styleId
      }),
          _is = {},
          _os = {},
          cssText = '';

      if ($("style#".concat(styleId)).length > 0) {
        $("style#".concat(styleId)).remove();
      }

      if ('default' === theme.name) {
        return;
      }

      _is[Selector.TIMELINE_CONTAINER] = "border:solid 1px ".concat(theme.offline, "; background:").concat(theme.background);
      _is[Selector.HEADLINE_TITLE] = "color:".concat(theme.text);
      _is[Selector.RANGE_META] = "color:".concat(theme.subtext);
      _is[Selector.TIMELINE_RULER_TOP] = "outline:solid 1px ".concat(theme.offline);
      _is[Selector.TIMELINE_RULER_BOTTOM] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_RULER_LINES, ":nth-child(even)")] = "background-color:".concat(this.hexToRgbA(theme.striped1, 0.25));
      _is[Selector.TIMELINE_RULER_ITEM] = "color:".concat(theme.subtext);
      _is["".concat(Selector.TIMELINE_RULER_ITEM, ":nth-child(even)")] = "background-color:".concat(this.hexToRgbA(theme.striped2, 0.25));
      _is[Selector.TIMELINE_EVENT_CONTAINER] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_EVENT_NODE, ":not(.jqtl-event-type-pointer).active")] = "color:".concat(theme.background, ";background-color:").concat(theme.active);
      _is["".concat(Selector.TIMELINE_EVENT_NODE, ":hover")] = "color:".concat(theme.background, ";background-color:").concat(theme.active);
      _is["".concat(Selector.TIMELINE_EVENT_NODE, ":hover::after")] = "background-color:".concat(this.hexToRgbA(theme.invertbg, 0.1));
      _is["".concat(Selector.TIMELINE_EVENT_NODE, "::before")] = "color:".concat(theme.modesttext);
      _is["".concat(Selector.TIMELINE_EVENT_NODE).concat(Selector.VIEWER_EVENT_TYPE_POINTER)] = "border:solid 3px ".concat(theme.line);
      _is["".concat(Selector.TIMELINE_EVENT_NODE).concat(Selector.VIEWER_EVENT_TYPE_POINTER, ".active")] = "border-color:".concat(theme.activeline);
      _is["".concat(Selector.TIMELINE_EVENT_NODE).concat(Selector.VIEWER_EVENT_TYPE_POINTER, ":hover")] = "border-color:".concat(theme.activeline);
      _is[Selector.TIMELINE_SIDEBAR] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_SIDEBAR, "> [class^=\"jqtl-side-index-\"]")] = "border-bottom:dotted 1px ".concat(theme.offline, ";background-color:").concat(theme.background, ";color:").concat(theme.text);
      _is["".concat(Selector.TIMELINE_SIDEBAR, " ").concat(Selector.TIMELINE_SIDEBAR_ITEM, ":nth-child(odd)")] = "background-color:".concat(theme.striped1);
      _is["".concat(Selector.TIMELINE_SIDEBAR, " ").concat(Selector.TIMELINE_SIDEBAR_ITEM, ":first-child")] = "border-top:solid 1px ".concat(theme.offline);
      _is[Selector.TIMELINE_SIDEBAR_MARGIN] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_SIDEBAR_MARGIN, ":first-child")] = "border-bottom:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_SIDEBAR_MARGIN, ":last-child")] = "border-top:solid 1px ".concat(theme.offline);
      _is[Selector.OVERLAY] = "background-color:".concat(this.hexToRgbA(theme.background, 0.65), " !important");
      _is["".concat(Selector.OVERLAY, ":nth-child(odd)")] = "background-color:".concat(this.hexToRgbA(theme.striped1, 0.45), " !important");
      _os["".concat(Selector.VIEWER_EVENT_TITLE, ",").concat(Selector.VIEWER_EVENT_CONTENT)] = "color:".concat(theme.text);
      _os["".concat(Selector.VIEWER_EVENT_TITLE, "> .event-content")] = "color:".concat(theme.offtext);
      _os[Selector.VIEWER_EVENT_META] = "color:".concat(theme.offtext);
      _is[Selector.PRESENT_TIME_MARKER] = "border-left:dotted 1px ".concat(theme.marker);
      _is["".concat(Selector.PRESENT_TIME_MARKER, "::before,").concat(Selector.PRESENT_TIME_MARKER, "::after")] = "background-color:".concat(theme.marker);
      _is["".concat(Selector.LOADER_ITEM, " span")] = "background:".concat(this.hexToRgbA(theme.text, 0.15));
      _os['@keyframes loader'] = "0%{background:".concat(this.hexToRgbA(theme.text, 0.15), "}25%{background:").concat(this.hexToRgbA(theme.text, 0.15), "}50%{background:").concat(this.hexToRgbA(theme.text, 0.15), "}100%{background:").concat(this.hexToRgbA(theme.text, 0.15), "}");

      for (var _i16 = 0, _Object$keys9 = Object.keys(_is); _i16 < _Object$keys9.length; _i16++) {
        var _prop = _Object$keys9[_i16];
        cssText += "".concat(selector, " ").concat(_prop, "{").concat(_is[_prop], "}");
      }

      for (var _i17 = 0, _Object$keys10 = Object.keys(_os); _i17 < _Object$keys10.length; _i17++) {
        var _prop2 = _Object$keys10[_i17];
        cssText += "".concat(_prop2, "{").concat(_os[_prop2], "}");
      }

      $('head').append(styleTag.text(cssText));
    }
    /*
     * Validators
     */

  }, {
    key: "validateString",
    value: function validateString(def, val) {
      return typeof val === 'string' && val !== '' ? val : def;
    }
  }, {
    key: "validateNumeric",
    value: function validateNumeric(def, val) {
      return typeof val === 'number' ? Number(val) : def;
    }
  }, {
    key: "validateBoolean",
    value: function validateBoolean(def, val) {
      return typeof val === 'boolean' || _typeof(val) === 'object' && val !== null && typeof val.valueOf() === 'boolean' ? val : def;
    }
  }, {
    key: "validateObject",
    value: function validateObject(def, val) {
      return _typeof(val) === 'object' ? val : def;
    }
  }, {
    key: "validateArray",
    value: function validateArray(def, val) {
      return Object.prototype.toString.call(val) === '[object Array]' ? val : def;
    } // Static

  }], [{
    key: "_jQueryInterface",
    value: function _jQueryInterface(config) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _objectSpread(_objectSpread(_objectSpread({}, Default), $(this).data()), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          // Apply the plugin and store the instance in data
          data = new Timeline(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string' && config.charAt(0) != '_') {
          if (typeof data[config] === 'undefined') {
            // Call no method
            throw new ReferenceError("No method named \"".concat(config, "\""));
          } // Call public method


          data[config](args);
        } else {
          if (!data._isInitialized || !data._isCompleted) {
            data._init();
          }
        }
      });
    }
  }, {
    key: "_getInstance",
    value: function _getInstance(element) {
      return Data.getData(element, DATA_KEY);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }]);

  return Timeline;
}(); // class end

/* ----------------------------------------------------------------------------------------------------------------
 * For jQuery
 * ----------------------------------------------------------------------------------------------------------------
 */


$.fn[NAME] = Timeline._jQueryInterface;
$.fn[NAME].Constructor = Timeline;

$.fn[NAME].noConflict = function () {
  $.fn[NAME] = JQUERY_NO_CONFLICT;
  return Timeline._jQueryInterface;
};

/***/ })

/******/ });
//# sourceMappingURL=jquery.timeline.js.map