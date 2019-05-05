import React, { Component, Fragment, ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';

import DrawerNavigator from 'navigation/drawer';

const Navigation = createAppContainer(DrawerNavigator);

class AppRoot extends Component {
  render(): ReactElement {
    return (
      <Fragment>
        <StatusBar hidden />
        <Navigation />
      </Fragment>
    );
  }
}

export default AppRoot;
