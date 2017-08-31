import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import appStore from '../redux/store';
import { view as AppFx } from './appfx/';
import { view as About } from './example/';

const history = syncHistoryWithStore(browserHistory, appStore);

const Welcome = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Other = () => (
  <div>
    <h2>Other</h2>
  </div>
);

const Another = () => (
  <div>
    <h2>Another</h2>
  </div>
);

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={AppFx}>
      <IndexRoute component={Welcome}/>
      <Route path="other" component={Other} />
      <Route path="another" component={Another} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

export default Routes;