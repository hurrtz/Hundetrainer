import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

import DashboardContainer from 'container/DashboardContainer';
import ActivitiesContainer from 'container/ActivitiesContainer';
import AddressBookContainer from 'container/AddressBookContainer';
import HealthContainer from 'container/HealthContainer';
import CalendarContainer from 'container/CalendarContainer';
import PoopsContainer from 'container/PoopsContainer';
import MyDogContainer from 'container/MyDogContainer';
import SettingsContainer from 'container/SettingsContainer';

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardContainer,
    },
    Activities: {
      screen: ActivitiesContainer,
    },
    Health: {
      screen: HealthContainer,
    },
    Calendar: {
      screen: CalendarContainer,
    },
    Poops: {
      screen: PoopsContainer,
    },
    AddressBook: {
      screen: AddressBookContainer,
    },
    MyDog: {
      screen: MyDogContainer,
    },
    Settings: {
      screen: SettingsContainer,
    },
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: ({ navigation }) => ({
      title: (() => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Activities':
            return 'Beschäftigung';

          case 'Poops':
            return 'Stuhlgang';

          case 'MyDog':
            return 'Mein Hund';

          case 'Calendar':
            return 'Kalender';

          case 'Health':
            return 'Gesundheit';

          case 'AddressBook':
            return 'Adressen';

          case 'Settings':
            return 'Einstellungen';

          default:
            return routeName;
        }
      })(),
    }),
  },
);

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
