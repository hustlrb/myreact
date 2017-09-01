import { all } from 'redux-saga/effects';
import { saga as exampleSaga } from '../route/example/redux';

export default function* rootSaga() {
  yield all([
    ...exampleSaga,
  ])
}