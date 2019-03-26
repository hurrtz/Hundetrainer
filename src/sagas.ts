import { spawn, all } from 'redux-saga/effects';
import poopSagas from 'container/Poop/sagas';

export default function* rootSaga() {
  yield all([spawn(poopSagas)]);
}
