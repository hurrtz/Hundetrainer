import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import getTheme from 'theme/components';
import variables from 'theme/variables/platform';

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
      <StyleProvider style={getTheme(variables)}>
        <StoreProvider store={store}>
          <PersistGate loading={isLoading} persistor={persistor}>
            <App />
          </PersistGate>
        </StoreProvider>
      </StyleProvider>
    );
  }
}
