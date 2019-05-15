import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import MyDog from 'stories/screens/MyDog';

interface Props {
  navigation: Navigation;
}

const MyDogContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <MyDog navigation={navigation} />;

MyDogContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="paw" size={25} />,
};

export default MyDogContainer;
