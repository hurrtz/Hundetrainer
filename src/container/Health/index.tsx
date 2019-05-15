import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import Health from 'stories/screens/Health';

interface Props {
  navigation: Navigation;
}

const HealthContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <Health navigation={navigation} />;

HealthContainer.navigationOptions = {
  drawerIcon: (): ReactElement => (
    <IconComponent name="medical-bag" size={25} />
  ),
};

export default HealthContainer;
