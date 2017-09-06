import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import appStore, {routerHistory} from './redux/store';
import AppFx from './route/appfx/AppFx';
import Login from './route/login/Login';

const App = () => {
  return (
    <Provider store={appStore}>
      <ConnectedRouter history={routerHistory}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={AppFx} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
