import { createAction } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/constants';
import { Record } from 'immutable';
import { fetchDomain, fetchPosition } from '../../api/example';

// --- Model

const ExampleModel = Record({
  domain: undefined,
  position: undefined,
}, "ExampleModel");

// --- Selector

export function selectDomain(appState) {
  let example = appState.example;
  return example.domain;
}

export function selectPosition(appState) {
  let example = appState.example;
  return example.position;
}

// --- Action

const REQUEST_FETCH_DOMAIN = 'REQUEST_FETCH_DOMAIN';
const FINISH_FETCH_DOMAIN = 'FINISH_FETCH_DOMAIN';
const REQUEST_FETCH_POSITION = 'REQUEST_FETCH_POSITION';
const FINISH_FETCH_POSITION = 'FINISH_FETCH_POSITION';

export const actionRequestFetchDomain = createAction(REQUEST_FETCH_DOMAIN);
export const actionFinishFetchDomain = createAction(FINISH_FETCH_DOMAIN);
export const actionRequestFetchPosition = createAction(REQUEST_FETCH_POSITION);
export const actionFinishFetchPosition = createAction(FINISH_FETCH_POSITION);

// --- Saga

function* sagaFetchDomain(action) {
  let payload = action.payload;
  let domain = yield call(fetchDomain, payload);
  yield put(actionFinishFetchDomain({domain}));
}

function* sagaFetchPosition(action) {
  let payload = action.payload;
  let position = yield call(fetchPosition, payload);
  // TODO: normalize position record from payload
  yield put(actionFinishFetchPosition({position}));
}

export const saga = [
  takeLatest(REQUEST_FETCH_POSITION, sagaFetchPosition),
  takeLatest(REQUEST_FETCH_DOMAIN, sagaFetchDomain)
];

// --- Reducer

const reduceRehydrate = (state, action) => {
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

const reduceFetchDomain = (state, action) => {
  const domain = action.payload.domain;
  state = state.set('domain', domain);
  return state;
};

const reduceFetchLocation = (state, action) => {
  const position = action.payload.position;
  state = state.set('position', position);
  return state;
};

export const reducer = (state=ExampleModel(), action) => {
  switch (action.type) {
    case REHYDRATE:
      return reduceRehydrate(state, action);
    case FINISH_FETCH_DOMAIN:
      return reduceFetchDomain(state, action);
    case FINISH_FETCH_POSITION:
      return reduceFetchLocation(state, action);
    default:
      return state;
  }
};
