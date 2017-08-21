import { call, put, takeEvery } from 'redux-saga/effects';
import * as configActionTypes from './constant';
import {finishFetchDomain, finishFetchLocation} from './action';
import { fetchDomain, fetchLocation } from '../../api/config';

export const configSaga = [
  takeEvery(configActionTypes.REQUEST_FETCH_DOMAIN, requestFetchDomain),
  takeEvery(configActionTypes.REQUEST_FETCH_LOCATION, requestFetchLocation)
];

function* requestFetchDomain(action) {
  let payload = action.payload;
  let domain = yield call(fetchDomain, payload);
  yield put(finishFetchDomain({domain}));
}

function* requestFetchLocation(action) {
  let payload = action.payload;
  let location = yield call(fetchLocation, payload);
  // TODO: normalize location record from payload
  yield put(finishFetchLocation({location}));
}

