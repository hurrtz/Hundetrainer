import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import OptionsDetails from 'stories/screens/Food/Options/Details';

interface Props {
  navigation: Navigation;
}

const OptionsDetailsContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <OptionsDetails navigation={navigation} />;

OptionsDetailsContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default OptionsDetailsContainer;
