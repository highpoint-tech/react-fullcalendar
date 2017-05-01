'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

require('fullcalendar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactFullCalendar = function (_Component) {
  _inherits(ReactFullCalendar, _Component);

  function ReactFullCalendar() {
    _classCallCheck(this, ReactFullCalendar);

    return _possibleConstructorReturn(this, (ReactFullCalendar.__proto__ || Object.getPrototypeOf(ReactFullCalendar)).apply(this, arguments));
  }

  _createClass(ReactFullCalendar, [{
    key: 'init',
    value: function init() {
      this.$calendar.fullCalendar(this.props);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.$calendar.fullCalendar('destroy');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.destroy();
      this.init();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _react.createElement)('div', {
        ref: function ref(root) {
          return _this2.$calendar = (0, _jquery2.default)(root);
        }
      });
    }
  }]);

  return ReactFullCalendar;
}(_react.Component);

exports.default = ReactFullCalendar;
