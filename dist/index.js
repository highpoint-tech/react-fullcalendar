'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

require('fullcalendar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactFullCalendar = (0, _react.createClass)({
  init: function init() {
    this.$calendar.fullCalendar(this.props);
  },
  destroy: function destroy() {
    this.$calendar.fullCalendar('destroy');
  },
  componentDidMount: function componentDidMount() {
    this.init();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.destroy();
    this.init();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.destroy();
  },
  render: function render() {
    var _this = this;

    return (0, _react.createElement)('div', {
      ref: function ref(root) {
        return _this.$calendar = (0, _jquery2.default)(root);
      }
    });
  }
});

exports.default = ReactFullCalendar;
