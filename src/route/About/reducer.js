import { REHYDRATE } from 'redux-persist/constants';
import * as ActionTypes from './constant';
import AboutModel from './model';

const initialState = AboutModel();

const aboutReducer = (state=initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return finishRehydrate(state, action);
    case ActionTypes.FINISH_FETCH_DOMAIN:
      return finishFetchDomain(state, action);
    case ActionTypes.FINISH_FETCH_LOCATION:
      return finishFetchLocation(state, action);
    default:
      return state;
  }
};

export default aboutReducer;

const finishRehydrate = (state, action) => {
  const config = action.payload.config;
  if (!config)
    return state;

  const domain = config.domain;
  if (domain) {
    state = state.set('domain', domain);
  }

  const location = config.location;
  if (location) {
    state = state.set('location', location);
  }

  return state;
};

const finishFetchDomain = (state, action) => {
  const domain = action.payload.domain;
  state = state.set('domain', domain);
  return state;
};

const finishFetchLocation = (state, action) => {
  const location = action.payload.location;
  state = state.set('location', location);
  return state;
};
