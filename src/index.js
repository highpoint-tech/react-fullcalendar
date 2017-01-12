import $ from 'jquery';
import { createElement as t, createClass } from 'react';
import 'fullcalendar';

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

export default ReactFullCalendar;
