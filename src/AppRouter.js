import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './views/App';
import Home from './views/Home';
import CurrentActivity from './views/CurrentActivity';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={CurrentActivity} />

        <Route component={App}>
          <Route path="/raid" component={Home} />
        </Route>
      </Router>
    );
  }
}