import { call, put, takeEvery } from 'redux-saga/effects';
import * as ActionType from './actionType';
import { finishFetchDomain, finishFetchPosition } from './action';
import { fetchDomain, fetchPosition } from '../../../api/example';

const saga = [
  takeEvery(ActionType.REQUEST_FETCH_POSITION, requestFetchPosition),
  takeEvery(ActionType.REQUEST_FETCH_DOMAIN, requestFetchDomain)
];

export default saga;

function* requestFetchDomain(action) {
  let payload = action.payload;
  let domain = yield call(fetchDomain, payload);
  yield put(finishFetchDomain({domain}));
}

function* requestFetchPosition(action) {
  let payload = action.payload;
  let position = yield call(fetchPosition, payload);
  // TODO: normalize position record from payload
  yield put(finishFetchPosition({position}));
}

