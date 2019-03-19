import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

import Login from 'container/LoginContainer';
import Home from 'container/HomeContainer';
import BlankPage from 'container/BlankPageContainer';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const App = createAppContainer(AppNavigator);

export default () => (
  <Root>
    <StatusBar hidden />
    <App />
  </Root>
);
