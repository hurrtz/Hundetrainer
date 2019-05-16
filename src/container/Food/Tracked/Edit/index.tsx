import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import TrackedEdit from 'stories/screens/Food/Tracked/Edit';

interface Props {
  navigation: Navigation;
}

const TrackedEditContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <TrackedEdit navigation={navigation} />;

TrackedEditContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default TrackedEditContainer;
