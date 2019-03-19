import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import { Root } from 'native-base';
import { Dimensions, StatusBar } from 'react-native';

import Login from 'container/LoginContainer';
import Home from 'container/HomeContainer';
import BlankPage from 'container/BlankPageContainer';
import Sidebar from 'container/SidebarContainer';

const deviceWidth = Dimensions.get('window').width;

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: (props: any) => <Sidebar {...props} />,
  },
);

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'Login',
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
