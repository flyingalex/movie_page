import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/app';
import AppRoute from './rootRoute';

import '../assets/scss/main.scss';

ReactDOM.render(
  <Root>
    <AppRoute />
  </Root>,
  document.getElementById('app'),
);
