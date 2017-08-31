import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as exampleReducer } from '../route/example/';

const rootReducer = combineReducers({
  routing: routerReducer,
  example: exampleReducer,
});

export default rootReducer;
