import 'fullcalendar';
import $ from 'jquery';
import { createElement as t, Component } from 'react';

class ReactFullCalendar extends Component {
  init() {
    this.$calendar.fullCalendar(this.props);
  }
  destroy() {
    this.$calendar.fullCalendar('destroy');
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.destroy();
    this.init();
  }
  componentWillUnmount() {
    this.destroy();
  }
  render() {
    return t('div', {
      ref: root => {
        this.$calendar = $(root);
      }
    });
  }
}

export default ReactFullCalendar;
