import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { routerHistory } from '../redux/store'
import MainFrame from './MainFrame/index'
import Home from './Home/index'
import About from './About/index'

const RootRouter = () => {
  return (
    <ConnectedRouter history={routerHistory}>
      <MainFrame>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </MainFrame>
    </ConnectedRouter>
  );
};

export default RootRouter;