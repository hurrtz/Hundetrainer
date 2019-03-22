import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import TrainingContainer from 'container/Activities/TrainingContainer';
import PlacesContainer from 'container/Activities/PlacesContainer';
import ToysContainer from 'container/Activities/ToysContainer';
import NotesContainer from 'container/Activities/NotesContainer';

const ActivitiesNavigator = createBottomTabNavigator(
  {
    Training: { screen: TrainingContainer },
    Places: { screen: PlacesContainer },
    Toys: { screen: ToysContainer },
    Notes: { screen: NotesContainer },
  },
  {
    initialRouteName: 'Training',
    defaultNavigationOptions: ({ navigation }) => ({
      title: (() => {
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
      tabBarIcon: ({ tintColor }) => {
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
  drawerIcon: () => <IconComponent name="trophy" size={25} />,
};

export default ActivitiesNavigator;
