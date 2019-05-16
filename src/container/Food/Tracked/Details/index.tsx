import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import TrackedDetails from 'stories/screens/Food/Tracked/Details';

interface Props {
  navigation: Navigation;
}

const TrackedDetailsContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <TrackedDetails navigation={navigation} />;

TrackedDetailsContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default TrackedDetailsContainer;
