import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as appfxReducer } from '../route/appfx/redux';

import { reducer as exampleReducer } from '../route/example/redux';

const rootReducer = combineReducers({
  example: exampleReducer,
  routing: routerReducer,
  appfx: appfxReducer
});

export default rootReducer;
