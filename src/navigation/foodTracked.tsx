import React, { ReactElement } from 'react';
import { createStackNavigator } from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import TrackedAdd from 'container/Food/Tracked/Add';
import TrackedDetails from 'container/Food/Tracked/Details';
import TrackedEdit from 'container/Food/Tracked/Edit';
import TrackedOverview from 'container/Food/Tracked/Overview';

const FoodTrackedNavigator = createStackNavigator(
  {
    FoodTrackedOverview: { screen: TrackedOverview },
    FoodTrackedAdd: { screen: TrackedAdd },
    FoodTrackedEdit: { screen: TrackedEdit },
    FoodTrackedDetails: { screen: TrackedDetails },
  },
  {
    initialRouteName: 'FoodTrackedOverview',
    headerMode: 'none',
  },
);

FoodTrackedNavigator.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="trophy" size={25} />,
};

export default FoodTrackedNavigator;
