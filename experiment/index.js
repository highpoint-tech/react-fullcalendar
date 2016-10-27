const Calendar = require('..');
const { createElement: t } = require('react');
const { render } = require('react-dom');

const el = t(Calendar);

render(el, document.querySelector('.app-container'));
