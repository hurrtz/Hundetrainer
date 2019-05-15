import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import Settings from 'stories/screens/Settings';

interface Props {
  navigation: Navigation;
}

const SettingsContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <Settings navigation={navigation} />;

SettingsContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default SettingsContainer;
