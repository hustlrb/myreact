import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as exampleReducer } from '../view/example/';

const rootReducer = combineReducers({
  router: routerReducer,
  example: exampleReducer,
});

export default rootReducer;
