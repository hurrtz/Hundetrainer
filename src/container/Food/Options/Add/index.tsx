import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import OptionsAdd from 'stories/screens/Food/Options/Add';

interface Props {
  navigation: Navigation;
}

const OptionsAddContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <OptionsAdd navigation={navigation} />;

OptionsAddContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default OptionsAddContainer;
