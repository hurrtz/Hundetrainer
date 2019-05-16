import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import OptionsEdit from 'stories/screens/Food/Options/Edit';

interface Props {
  navigation: Navigation;
}

const OptionsEditContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <OptionsEdit navigation={navigation} />;

OptionsEditContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default OptionsEditContainer;
