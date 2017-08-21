import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import configReducer from '../route/Home/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  CONFIG: configReducer,
});

export default rootReducer;
