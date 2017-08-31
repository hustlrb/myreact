import { REHYDRATE } from 'redux-persist/constants';
import * as ActionType from './actionType';
import ExampleModel from './model';

const initialState = ExampleModel();

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return finishRehydrate(state, action);
    case ActionType.FINISH_FETCH_DOMAIN:
      return finishFetchDomain(state, action);
    case ActionType.FINISH_FETCH_POSITION:
      return finishFetchLocation(state, action);
    default:
      return state;
  }
};

export default reducer;

const finishRehydrate = (state, action) => {
  const config = action.payload.config;
  if (!config)
    return state;

  const domain = config.domain;
  if (domain) {
    state = state.set('domain', domain);
  }

  const position = config.location;
  if (position) {
    state = state.set('location', position);
  }

  return state;
};

const finishFetchDomain = (state, action) => {
  const domain = action.payload.domain;
  state = state.set('domain', domain);
  return state;
};

const finishFetchLocation = (state, action) => {
  const position = action.payload.position;
  state = state.set('position', position);
  return state;
};
