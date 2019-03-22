import { createDrawerNavigator } from 'react-navigation';

import ActivitiesNavigator from 'navigation/activities';

import Dashboard from 'container/Dashboard';
import AddressBook from 'container/AddressBook';
import Health from 'container/Health';
import Calendar from 'container/Calendar';
import Poop from 'container/Poop';
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
    Health: {
      screen: Health,
    },
    Calendar: {
      screen: Calendar,
    },
    Poop: {
      screen: Poop,
    },
    AddressBook: {
      screen: AddressBook,
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
    defaultNavigationOptions: ({ navigation }) => ({
      title: (() => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Activities':
            return 'Beschäftigung';

          case 'Poop':
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

export default DrawerNavigator;
