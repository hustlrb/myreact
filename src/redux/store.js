import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import Perf from 'react-addons-perf';
import rootReducer from './reducer';
import rootSaga from './saga';

const win = window;
win.Perf = Perf;

const createAppStore = (initialState = {}) => {
  const router = routerMiddleware(browserHistory);
  const saga = createSagaMiddleware();
  const logger = createLogger();

  const middlewares = [router, saga, logger];

  const enhancers = [];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );

  saga.run(rootSaga);

  return store
};

const appStore = createAppStore(window.__INITIAL_STATE__);
const persistor = persistStore(appStore, {
  whitelist: [],
  blacklist: ['routing', 'appfx']
});

export { persistor };
export default appStore;
