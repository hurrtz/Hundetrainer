import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

import TrainingContainer from 'container/TrainingContainer';
import ActivitiesHomeContainer from 'container/ActivitiesHomeContainer';
import ActivitiesOutsideContainer from 'container/ActivitiesOutsideContainer';
import CalendarContainer from 'container/CalendarContainer';
import PlacesContainer from 'container/PlacesContainer';
import PoopsContainer from 'container/PoopsContainer';

// const TabNavigator = createBottomTabNavigator(
//   {
//     Training: { screen: TrainingContainer },
//     ActivitiesHome: { screen: ActivitiesHomeContainer },
//     ActivitiesOutside: { screen: ActivitiesOutsideContainer },
//     Calendar: { screen: CalendarContainer },
//     Places: { screen: PlacesContainer },
//   },
//   {
//     initialRouteName: 'Training',
//     defaultNavigationOptions: ({ navigation }) => ({
//       title: (() => {
//         const { routeName } = navigation.state;

//         switch (routeName) {
//           case 'ActivitiesHome':
//             return 'daheim';

//           case 'ActivitiesOutside':
//             return 'im Freien';

//           case 'Calendar':
//             return 'Kalender';

//           case 'Places':
//             return 'Orte';

//           default:
//             return routeName;
//         }
//       })(),
//       tabBarIcon: ({ tintColor }) => {
//         const { routeName } = navigation.state;

//         let iconName: string;

//         switch (routeName) {
//           case 'Training':
//             iconName = 'trophy';
//             break;

//           case 'ActivitiesHome':
//             iconName = 'home';
//             break;

//           case 'ActivitiesOutside':
//             iconName = 'tree';
//             break;

//           case 'Calendar':
//             iconName = 'calendar';
//             break;

//           case 'Places':
//             iconName = 'map';
//             break;

//           default:
//         }

//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   },
// );

const DrawerNavigator = createDrawerNavigator({
  Trainings: {
    screen: TrainingContainer,
  },
  ActivitiesHome: {
    screen: ActivitiesHomeContainer,
  },
  ActivitiesOutside: {
    screen: ActivitiesOutsideContainer,
  },
  Calendar: {
    screen: CalendarContainer,
  },
  Places: {
    screen: PlacesContainer,
  },
  Poops: {
    screen: PoopsContainer,
  },
});

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
