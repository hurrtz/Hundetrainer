import React, { FunctionComponent, Fragment, ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';

import DrawerNavigator from 'navigation/drawer';

const Navigation = createAppContainer(DrawerNavigator);

const AppRoot: FunctionComponent<{}> = (): ReactElement => (
  <Fragment>
    <StatusBar hidden />
    <Navigation />
  </Fragment>
);

export default AppRoot;
