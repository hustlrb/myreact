import { all } from 'redux-saga/effects';
import { saga as appfxSaga } from '../route/appfx/redux';

import { saga as exampleSaga } from '../route/example/redux';

export default function* rootSaga() {
  yield all([
    ...appfxSaga,
    ...exampleSaga
  ])
}