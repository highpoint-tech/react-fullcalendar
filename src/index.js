const $ = require('jquery');
const { createElement: t, createClass } = require('react');
require('fullcalendar');

const ReactFullCalendar = createClass({
  componentDidMount() {
    this.$calendar.fullCalendar(this.props);
  },
  componentWillUnmount() {
    this.$calendar.fullCalendar('destroy');
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
