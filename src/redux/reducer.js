import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as aboutReducer } from '../view/about/';

const rootReducer = combineReducers({
  router: routerReducer,
  about: aboutReducer,
});

export default rootReducer;
