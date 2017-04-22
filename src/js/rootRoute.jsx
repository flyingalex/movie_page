import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from 'components/Home';

export default class AppRouteComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    );
  }
}