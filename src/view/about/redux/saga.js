import { call, put, takeEvery } from 'redux-saga/effects';
import * as ActionType from './actionType';
import { finishFetchDomain, finishFetchLocation } from './action';
import { fetchDomain, fetchLocation } from '../../../api/about';

const saga = [
  takeEvery(ActionType.REQUEST_FETCH_LOCATION, requestFetchLocation),
  takeEvery(ActionType.REQUEST_FETCH_DOMAIN, requestFetchDomain)
];

export default saga;

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

