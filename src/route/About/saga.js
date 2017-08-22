import { call, put, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from './constant';
import { finishFetchDomain, finishFetchLocation } from './action';
import { fetchDomain, fetchLocation } from '../../api/about';

export const aboutSaga = [
  takeEvery(ActionTypes.REQUEST_FETCH_LOCATION, requestFetchLocation),
  takeEvery(ActionTypes.REQUEST_FETCH_DOMAIN, requestFetchDomain)
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

