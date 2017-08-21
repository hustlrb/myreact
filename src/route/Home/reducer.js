/**
 * Created by yangyang on 2017/6/28.
 */
import {Map, List} from 'immutable'
import {REHYDRATE} from 'redux-persist/constants'
import {ConfigRecord} from './model'
import * as configActionTypes from './constant'

const initialState = ConfigRecord();

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case configActionTypes.FINISH_FETCH_DOMAIN:
      return onFetchDomain(state, action);
    case configActionTypes.FINISH_FETCH_POSITION:
      return onFetchLocation(state, action);
    case REHYDRATE:
      return onRehydrate(state, action);
    default:
      return state;
  }
};

export default configReducer;

const onFetchDomain = (state, action) => {
  let domain = action.payload.domain;
  state = state.set('domain', domain);
  return state;
};

const onFetchLocation = (state, action) => {
  let location = action.payload.location;
  state = state.set('location', location);
  return state;
};

const onRehydrate = (state, action) => {
  const config = action.payload.CONFIG;
  if (!config)
    return state;

  const domain = config.domain;
  if (domain) {
    state = state.set('domain', domain);
  }

  return state;
};