import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(onCompletion: () => void): {} {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [thunkMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(persistedReducer, {}, composedEnhancers);
  const persistor = persistStore(store, {}, onCompletion);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
