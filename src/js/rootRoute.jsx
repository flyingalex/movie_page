import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Home from './components/Home';
import Part from './components/Part';
import { history } from './store/config-store';

export default class AppRouteComponent extends Component {
  componentDidMount() {
    console.log(1111);
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/part" component={Part} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
