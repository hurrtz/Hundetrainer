import {
  createDrawerNavigator,
  NavigationDrawerScreenOptions,
} from 'react-navigation';

import ActivitiesNavigator from 'navigation/activities';
import PoopNavigator from 'navigation/poop';
import AdressBookNavigator from 'navigation/adressBook';
import FoodNavigator from 'navigation/food';

import Dashboard from 'container/Dashboard';
import Health from 'container/Health';
import Calendar from 'container/Calendar';
import MyDog from 'container/MyDog';
import Settings from 'container/Settings';

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    Activities: {
      screen: ActivitiesNavigator,
    },
    Food: {
      screen: FoodNavigator,
    },
    Health: {
      screen: Health,
    },
    Calendar: {
      screen: Calendar,
    },
    Poop: {
      screen: PoopNavigator,
    },
    AddressBook: {
      screen: AdressBookNavigator,
    },
    MyDog: {
      screen: MyDog,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: ({
      navigation,
    }): NavigationDrawerScreenOptions => ({
      title: ((): string => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Activities':
            return 'Beschäftigung';

          case 'Poop':
            return 'Stuhlgang';

          case 'Food':
            return 'Ernährung';

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

export default DrawerNavigator;
