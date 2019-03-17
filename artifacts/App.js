import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer, } from 'react-navigation';
import { Root } from 'native-base';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
import Login from './container/LoginContainer';
import Home from './container/HomeContainer';
import BlankPage from './container/BlankPageContainer';
import Sidebar from './container/SidebarContainer';
const Drawer = createDrawerNavigator({
    Home: { screen: Home },
}, {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: (props) => React.createElement(Sidebar, Object.assign({}, props)),
});
const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer },
}, {
    initialRouteName: 'Login',
    headerMode: 'none',
});
const App = createAppContainer(AppNavigator);
export default () => (React.createElement(Root, null,
    React.createElement(App, null)));
//# sourceMappingURL=App.js.map