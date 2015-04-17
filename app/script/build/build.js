(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _foo = require('./foo');

var _View2 = require('./mvc/View');

var _View3 = _interopRequireWildcard(_View2);

var Nav = (function (_View) {
	function Nav(id) {
		_classCallCheck(this, Nav);

		_get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this);

		this.events = {
			foo: 'bar'
		};
	}

	_inherits(Nav, _View);

	return Nav;
})(_View3['default']);

var nav = new Nav('#js-nav');
console.log(nav);
nav.subMethod();

// let arr = ['blue', 'green']
// let res = foo(...arr)
// console.log(res, '!!!!');
// console.log('alt', foo(1));

console.log('everything went better than expected :)');

},{"./foo":2,"./mvc/View":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.foo = foo;

function foo(bar) {
	var baz = arguments[1] === undefined ? 17 : arguments[1];

	console.log('foo called');
	return 'hello ' + bar + ' and ' + baz;
}

},{}],3:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});

var Event = (function () {
	function Event() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_classCallCheck(this, Event);

		console.log.apply(console, ['init event class', this].concat(args));
	}

	_createClass(Event, [{
		key: 'events',
		set: function (eventList) {
			console.log('eventList', eventList);
		}
		// events: []

	}]);

	return Event;
})();

exports['default'] = Event;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _EventClass2 = require('./EventedClass');

var _EventClass3 = _interopRequireWildcard(_EventClass2);

var _default = (function (_EventClass) {
	var _class =
	// class View extends Object {
	function _default() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_classCallCheck(this, _class);

		console.log('args', args);
		_get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, args);

		this.events = {
			superfoo: 'superbar'
		};
	};

	_inherits(_class, _EventClass);

	_createClass(_class, [{
		key: 'subMethod',
		value: function subMethod() {
			console.log('view subMethod');
		}
	}]);

	return _class;
})(_EventClass3['default']);

exports['default'] = _default;
module.exports = exports['default'];

// let View = {}

// export { View }

},{"./EventedClass":3}]},{},[1])


//# sourceMappingURL=build.js.map