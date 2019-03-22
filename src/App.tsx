import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

import DrawerNavigator from 'navigation/drawer';

const App = createAppContainer(DrawerNavigator);

interface Props {}

interface State {}

class AppRoot extends Component<Props, State> {
  render() {
    return (
      <Root>
        <StatusBar hidden />
        <App />
      </Root>
    );
  }
}

export default AppRoot;
