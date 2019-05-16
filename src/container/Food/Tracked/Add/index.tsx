import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import TrackedAdd from 'stories/screens/Food/Tracked/Add';

interface Props {
  navigation: Navigation;
}

const TrackedAddContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <TrackedAdd navigation={navigation} />;

TrackedAddContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default TrackedAddContainer;
