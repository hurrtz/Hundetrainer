import { takeLatest, all, put, takeEvery, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { IPoop } from 'apptypes/poop';
import { retrieveData, storeData } from 'storage';
import { itemsSelector } from 'container/Poop/selectors';
import {
  FETCH,
  SET_POOP_IN_DB,
  UPDATE_POOP_IN_DB,
  REMOVE_POOP_FROM_DB,
  setPoops,
  isLoading,
} from './actions';

function* fetchPoops() {
  let poops: IPoop[];

  yield retrieveData({
    key: 'poops',
    callback: (data: IPoop[]) => {
      poops = data;
    },
  });

  if (poops && poops.length > 0) {
    yield put(setPoops(poops));
  }

  yield put(isLoading(false));
}

function* setPoopInDB({ poop }: AnyAction) {
  retrieveData({
    key: 'poops',
    callback: (currentPoops: IPoop[]) => {
      const newPoop = { ...poop };
      const poops = [...(currentPoops || [])];

      storeData({
        key: 'poops',
        value: [...poops, newPoop],
      });
    },
  });
}

function* updatePoopInDB() {
  const poops: IPoop[] = yield select(itemsSelector);

  storeData({
    key: 'poops',
    value: poops,
  });
}

function* removePoopFromDB({ poop: poopToDelete }: AnyAction) {
  retrieveData({
    key: 'poops',
    callback: (poops: IPoop[]) =>
      storeData({
        key: 'poops',
        value: poops.filter(poop => poop.date !== poopToDelete.date),
      }),
  });
}

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH, fetchPoops),
    takeEvery(SET_POOP_IN_DB, setPoopInDB),
    takeEvery(UPDATE_POOP_IN_DB, updatePoopInDB),
    takeEvery(REMOVE_POOP_FROM_DB, removePoopFromDB),
  ]);
}
