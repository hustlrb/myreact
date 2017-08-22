import { all } from 'redux-saga/effects'
import { aboutSaga } from '../route/About/saga'

export default function* rootSaga() {
  yield all([
    ...aboutSaga,
  ])
}