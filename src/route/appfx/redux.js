import { createAction } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Record } from 'immutable';
import { login, logout } from '../../api/AppFx';

// --- Action

const REQUEST_LOADING = 'AppFx/REQUEST_LOADING';
const FINISH_LOADING = 'AppFx/FINISH_LOADING';
const REQUEST_LOGIN = 'AppFx/REQUEST_LOGIN';
const FINISH_LOGIN = 'AppFx/FINISH_LOGIN';
const REQUEST_LOGOUT = 'AppFx/REQUEST_LOGOUT';
const FINISH_LOGOUT = 'AppFx/FINISH_LOGOUT';

export const actionRequestLoading = createAction(REQUEST_LOADING);
export const actionFinishLoading = createAction(FINISH_LOADING);
export const actionRequestLogin = createAction(REQUEST_LOGIN);
export const actionFinishLogin = createAction(FINISH_LOGIN);
export const actionRequestLogout = createAction(REQUEST_LOGOUT);
export const actionFinishLogout = createAction(FINISH_LOGOUT);


// --- Saga

function* sagaLogin(action) {
  yield put(actionRequestLoading());
  let payload = action.payload;
  let res = yield call(login, payload);
  yield put(actionFinishLogin({loggedIn: res.loggedIn}));
  yield put(actionFinishLoading());
}

function* sagaLogout(action) {
  let payload = action.payload;
  let res = yield call(logout, payload);
  yield put(actionFinishLogout({loggedIn: res.loggedIn}));
}

export const saga = [
  takeLatest(REQUEST_LOGIN, sagaLogin),
  takeLatest(REQUEST_LOGOUT, sagaLogout)
];

// --- Reducer

const reduceLoading = (state, action) => {
  state = action.type === REQUEST_LOADING ? state.set('loading', true)
    : state.set('loading', false);
  return state;
};

const reduceLogin = (state, action) => {
  const loggedIn = action.payload.loggedIn;
  state = state.set('loggedIn', loggedIn);
  return state;
};

const reduceLogout = (state, action) => {
  const loggedIn = action.payload.loggedIn;
  state = state.set('loggedIn', loggedIn);
  return state;
};

export const reducer = (state=AppFxState(), action) => {
  switch (action.type) {
    case REQUEST_LOADING:
    case FINISH_LOADING:
      return reduceLoading(state, action);
    case FINISH_LOGIN:
      return reduceLogin(state, action);
    case FINISH_LOGOUT:
      return reduceLogout(state, action);
    default:
      return state;
  }
};

// --- State

const AppFxState = Record({
  loading: false,
  loggedIn: false,


}, "AppFxState");

// --- Selector

export function selectLoading(appState) {
  let appfx = appState.appfx;
  return appfx.loading;
}

export function selectLoggingIn(appState) {
  let appfx = appState.appfx;
  return appfx.loggingIn;
}

export function selectLoggedIn(appState) {
  let appfx = appState.appfx;
  return appfx.loggedIn;
}
