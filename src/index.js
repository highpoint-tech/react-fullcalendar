const $ = require('jquery');
const { createElement: t, createClass } = require('react');
require('fullcalendar');

const ReactFullCalendar = createClass({
  init() {
    this.$calendar.fullCalendar(this.props);
  },
  destroy() {
    this.$calendar.fullCalendar('destroy');
  },
  componentDidMount() {
    this.init();
  },
  componentDidUpdate() {
    this.destroy();
    this.init();
  },
  componentWillUnmount() {
    this.destroy();
  },
  render() {
    return (
      t('div', {
        ref: root => (this.$calendar = $(root))
      })
    );
  }
});

module.exports = ReactFullCalendar;
