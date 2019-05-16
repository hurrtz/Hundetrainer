import React, { ReactElement } from 'react';
import { createStackNavigator } from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import OptionsAdd from 'container/Food/Options/Add';
import OptionsDetails from 'container/Food/Options/Details';
import OptionsEdit from 'container/Food/Options/Edit';
import OptionsOverview from 'container/Food/Options/Overview';

const FoodOptionsNavigator = createStackNavigator(
  {
    FoodOptionsOverview: { screen: OptionsOverview },
    FoodOptionsAdd: { screen: OptionsAdd },
    FoodOptionsEdit: { screen: OptionsEdit },
    FoodOptionsDetails: { screen: OptionsDetails },
  },
  {
    initialRouteName: 'FoodOptionsOverview',
    headerMode: 'none',
  },
);

FoodOptionsNavigator.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="trophy" size={25} />,
};

export default FoodOptionsNavigator;
