import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import Food from 'stories/screens/Food';

interface Props {
  navigation: Navigation;
}

const FoodContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <Food navigation={navigation} />;

FoodContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="bone" size={25} />,
};

export default FoodContainer;
