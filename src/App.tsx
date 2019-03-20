import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

import TrainingContainer from 'container/TrainingContainer';
import ActivitiesHomeContainer from 'container/ActivitiesHomeContainer';
import ActivitiesOutsideContainer from 'container/ActivitiesOutsideContainer';
import CalendarContainer from 'container/CalendarContainer';
import PlacesContainer from 'container/PlacesContainer';

const TabNavigator = createBottomTabNavigator(
  {
    Training: { screen: TrainingContainer },
    ActivitiesHome: { screen: ActivitiesHomeContainer },
    ActivitiesOutside: { screen: ActivitiesOutsideContainer },
    Calendar: { screen: CalendarContainer },
    Places: { screen: PlacesContainer },
  },
  {
    initialRouteName: 'Training',
    defaultNavigationOptions: ({ navigation }) => ({
      title: (() => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'ActivitiesHome':
            return 'daheim';

          case 'ActivitiesOutside':
            return 'im Freien';

          case 'Calendar':
            return 'Kalender';

          case 'Places':
            return 'Orte';

          default:
            return routeName;
        }
      })(),
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = MaterialCommunityIcons;

        let iconName;

        switch (routeName) {
          case 'Training':
            iconName = 'trophy';
            break;

          case 'ActivitiesHome':
            iconName = 'home';
            break;

          case 'ActivitiesOutside':
            iconName = 'tree';
            break;

          case 'Calendar':
            iconName = 'calendar';
            break;

          case 'Places':
            iconName = 'map';
            break;

          default:
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const App = createAppContainer(TabNavigator);

export default () => (
  <Root>
    <StatusBar hidden />
    <App />
  </Root>
);
