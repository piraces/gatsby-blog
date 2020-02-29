'use strict';

require('./src/assets/scss/init.scss');

exports.onClientEntry = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
};
