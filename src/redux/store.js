import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import { persistStore } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';

import rootReducer from './reducer';
import rootSaga from './saga';

const routerHistory = createHistory();

const createAppStore = (initialState = {}) => {
  const router = routerMiddleware(routerHistory);
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
  store.close = () => store.dispatch(END);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
};

const store = createAppStore(window.__INITIAL_STATE__);

const configFilter = createFilter('CONFIG', []);
persistStore(store, {
  whitelist: ['CONFIG'],
  transforms: [configFilter]
});

export { routerHistory };
export default store;
