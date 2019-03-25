import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import DrawerNavigator from 'navigation/drawer';

const App = createAppContainer(DrawerNavigator);

interface Props {}

interface State {}

const store = createStore(rootReducer);

class AppRoot extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <StatusBar hidden />
          <App />
        </Root>
      </Provider>
    );
  }
}

export default AppRoot;
