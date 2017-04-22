import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './rootRoute';
import Root from 'containers/app';

import "../assets/scss/main";

ReactDOM.render(
  <Root>
    <AppRoute />
  </Root>,
  document.getElementById('app')
);
