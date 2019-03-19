import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

import LoginContainer from 'container/LoginContainer';
import HomeContainer from 'container/HomeContainer';
import BlankPageContainer from 'container/BlankPageContainer';

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeContainer },
    Login: { screen: LoginContainer },
    BlankPage: { screen: BlankPageContainer },
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(TabNavigator);

export default () => (
  <Root>
    <StatusBar hidden />
    <App />
  </Root>
);
