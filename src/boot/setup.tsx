import React, { FunctionComponent, useState, ReactElement } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './configureStore';
import App from '../App';

interface State {
  storeConfiguration: {
    store: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    persistor: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  isLoading: boolean;
}

const Setup: FunctionComponent<{}> = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeConfiguration] = useState(
    configureStore((): void => setIsLoading(false)),
  );
  const {
    store,
    persistor,
  } = storeConfiguration as State['storeConfiguration'];

  return (
    <StoreProvider store={store}>
      <PersistGate loading={isLoading} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
};

export default Setup;
