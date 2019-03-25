import React, { Component } from 'react';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';

import DrawerNavigator from 'navigation/drawer';

interface Props {}

interface State {}

const Navigation = createAppContainer(DrawerNavigator);

class AppRoot extends Component<Props, State> {
  render() {
    return (
      <Root>
        <StatusBar hidden />
        <Navigation />
      </Root>
    );
  }
}

export default AppRoot;
