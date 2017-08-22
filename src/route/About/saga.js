import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as ActionTypes from './constant';
import {finishFetchDomain, finishFetchLocation} from './action';
import { fetchDomain, fetchLocation } from '../../api/config';

export const aboutSaga = [
  takeEvery(ActionTypes.REQUEST_FETCH_LOCATION, requestFetchLocation),
  takeEvery(ActionTypes.REQUEST_FETCH_DOMAIN, requestFetchDomain)
];

function* requestFetchDomain(action) {
  let payload = action.payload;
  yield delay(10000);
  let domain = yield call(fetchDomain, payload);
  yield put(finishFetchDomain({domain}));
}

function* requestFetchLocation(action) {
  let payload = action.payload;
  yield delay(1000);
  let location = yield call(fetchLocation, payload);
  // TODO: normalize location record from payload
  yield put(finishFetchLocation({location}));
}

