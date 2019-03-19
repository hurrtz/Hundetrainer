import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import getTheme from 'theme/components';
import variables from 'theme/variables/platform';

import configureStore from './configureStore';
import App from '../App';

export interface Props {}

export interface State {
  store: any;
  isLoading: boolean;
}

export default class Setup extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      store: configureStore(() =>
        this.setState(prevState => ({ ...prevState, isLoading: false })),
      ),
    };
  }

  render() {
    const { store } = this.state;

    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
