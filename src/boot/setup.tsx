import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './configureStore';
import App from '../App';

export interface Props {}

export interface State {
  storeConfiguration: {
    store: any;
    persistor: any;
  };
  isLoading: boolean;
}

export default class Setup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true,
      storeConfiguration: configureStore(() =>
        this.setState(prevState => ({ ...prevState, isLoading: false })),
      ),
    };
  }

  render() {
    const {
      isLoading,
      storeConfiguration: { store, persistor },
    } = this.state;

    return (
      <StoreProvider store={store}>
        <PersistGate loading={isLoading} persistor={persistor}>
          <App />
        </PersistGate>
      </StoreProvider>
    );
  }
}
