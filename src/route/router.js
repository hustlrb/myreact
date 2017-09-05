import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import appStore from '../redux/store';
import AppFx from './appfx/AppFx';
import Example from './example/Example';
import CabinetList from "./cabinet/CabinetList";

const history = syncHistoryWithStore(browserHistory, appStore);

const Welcome = (props) => {
  console.log('[DEBUG] ---> Welcome props: ', props);
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};

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

const Xxx = () => (
  <div>
    <h2>xxx</h2>
  </div>
);

const Routes = () => (
  <Router history={history}>
    <Route path="/" breadcrumbName="首页" component={AppFx}> {/* route matched component will be passed as a child of AppFx */}
      <IndexRoute component={Welcome}/>
      <Route path="/cabinet" breadcrumbName="干衣柜综合管理" component={CabinetList}/>
      <Route path="other" breadcrumbName="其它" component={Other} />
      <Route path="another" breadcrumbName="另外" component={Another} />
      <Route path="example" breadcrumbName="示例" component={Example}>
        <IndexRoute component={Welcome}/>
        <Route path="xxx" breadcrumbName="示例xxxx" component={Xxx}/>
      </Route>
    </Route>
  </Router>
);

export default Routes;