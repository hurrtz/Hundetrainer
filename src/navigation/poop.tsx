import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import PoopOverview from 'container/Poop/Overview';
import PoopAdd from 'container/Poop/Add';
import PoopEdit from 'container/Poop/Edit';

const PoopNavigator = createStackNavigator(
  {
    PoopOverview: { screen: PoopOverview },
    PoopAdd: { screen: PoopAdd },
    PoopEdit: { screen: PoopEdit },
  },
  {
    initialRouteName: 'PoopOverview',
  },
);

PoopNavigator.navigationOptions = {
  drawerIcon: () => <IconComponent name="emoticon-poop" size={25} />,
};

export default PoopNavigator;
