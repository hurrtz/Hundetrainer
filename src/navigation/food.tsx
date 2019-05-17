import React, { ReactElement } from 'react';
import {
  createBottomTabNavigator,
  NavigationBottomTabScreenOptions,
} from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodOptionsNavigator from 'navigation/foodOptions';
import FoodTrackedNavigator from 'navigation/foodTracked';

const FoodNavigator = createBottomTabNavigator(
  {
    Tracked: { screen: FoodTrackedNavigator },
    Options: { screen: FoodOptionsNavigator },
  },
  {
    initialRouteName: 'Tracked',
    defaultNavigationOptions: ({
      navigation,
    }): NavigationBottomTabScreenOptions => ({
      title: ((): string => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Tracked':
            return 'Tracking';

          case 'Options':
            return 'Nahrungsmittel';

          default:
            return routeName;
        }
      })(),
      tabBarIcon: ({ tintColor }: { tintColor: string }): ReactElement => {
        const { routeName } = navigation.state;

        let iconName: string;

        switch (routeName) {
          case 'Tracked':
            iconName = 'playlist-plus';
            break;

          case 'Options':
            iconName = 'bone';
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

FoodNavigator.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="bone" size={25} />,
};

export default FoodNavigator;
