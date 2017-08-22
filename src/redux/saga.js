import { all } from 'redux-saga/effects'
import { saga as aboutSaga } from '../view/about/'

export default function* rootSaga() {
  yield all([
    ...aboutSaga,
  ])
}