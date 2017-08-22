import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import aboutReducer from '../route/About/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  about: aboutReducer,
});

export default rootReducer;
