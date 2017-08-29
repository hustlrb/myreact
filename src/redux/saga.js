import { all } from 'redux-saga/effects';
import { saga as exampleSaga } from '../view/example/';

export default function* rootSaga() {
  yield all([
    ...exampleSaga,
  ])
}