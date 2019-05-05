import React, { ReactElement } from 'react';
import { createStackNavigator } from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import PoopOverview from 'container/Poop/Overview';
import PoopAdd from 'container/Poop/Add';
import PoopEdit from 'container/Poop/Edit';
import PoopDetails from 'container/Poop/Details';

const PoopNavigator = createStackNavigator(
  {
    PoopOverview: { screen: PoopOverview },
    PoopAdd: { screen: PoopAdd },
    PoopEdit: { screen: PoopEdit },
    PoopDetails: { screen: PoopDetails },
  },
  {
    initialRouteName: 'PoopOverview',
    headerMode: 'none',
  },
);

PoopNavigator.navigationOptions = {
  drawerIcon: (): ReactElement => (
    <IconComponent name="emoticon-poop" size={25} />
  ),
};

export default PoopNavigator;
