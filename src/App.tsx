import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';

import DrawerNavigator from 'navigation/drawer';

interface Props {}

interface State {}

const Navigation = createAppContainer(DrawerNavigator);

class AppRoot extends Component<Props, State> {
  render() {
    return (
      <Fragment>
        <StatusBar hidden />
        <Navigation />
      </Fragment>
    );
  }
}

export default AppRoot;
