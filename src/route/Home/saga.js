import { call, put, takeEvery } from 'redux-saga/effects';
import * as configActionTypes from './constant';
import { finishFetchDomain, finishFetchPosition } from './action';
import { fetchDomain, fetchPosition } from '../../api/config';
import { Location } from './model';

export const configSaga = [
  takeEvery(configActionTypes.REQUEST_FETCH_DOMAIN, handleFetchDomain),
  takeEvery(configActionTypes.REQUEST_FETCH_POSITION, handleFetchPosition)
];

function* handleFetchDomain(action) {
  let payload = action.payload;
  let domain = yield call(fetchDomain, payload);
  yield put(finishFetchDomain({domain}));
}

function* handleFetchPosition(action) {
  let payload = action.payload;
  let position = yield call(fetchPosition, payload);
  yield put(finishFetchPosition({location: Location.fromApi(position)}));
}

