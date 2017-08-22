import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { routerHistory } from '../redux/store'
import FrameWork from './framework/'
import Home from './home/'
import { view as About } from './about/'

const RootRouter = () => {
  return (
    <ConnectedRouter history={routerHistory}>
      <FrameWork>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </FrameWork>
    </ConnectedRouter>
  );
};

export default RootRouter;