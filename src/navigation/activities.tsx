import React, { ReactElement } from 'react';
import {
  createBottomTabNavigator,
  NavigationBottomTabScreenOptions,
} from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Training from 'container/Activities/Training';
import Places from 'container/Activities/Places';
import Toys from 'container/Activities/Toys';
import Notes from 'container/Activities/Notes';

const ActivitiesNavigator = createBottomTabNavigator(
  {
    Training: { screen: Training },
    Places: { screen: Places },
    Toys: { screen: Toys },
    Notes: { screen: Notes },
  },
  {
    initialRouteName: 'Training',
    defaultNavigationOptions: ({
      navigation,
    }): NavigationBottomTabScreenOptions => ({
      title: ((): string => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Training':
            return 'Übungen';

          case 'Places':
            return 'Orte';

          case 'Toys':
            return 'Spielzeug';

          case 'Notes':
            return 'Hinweise';

          default:
            return routeName;
        }
      })(),
      tabBarIcon: ({ tintColor }: { tintColor: string }): ReactElement => {
        const { routeName } = navigation.state;

        let iconName: string;

        switch (routeName) {
          case 'Training':
            iconName = 'trophy';
            break;

          case 'Places':
            iconName = 'map';
            break;

          case 'Toys':
            iconName = 'tennis-ball';
            break;

          case 'Notes':
            iconName = 'notebook';
            break;

          default:
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

ActivitiesNavigator.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="trophy" size={25} />,
};

export default ActivitiesNavigator;
