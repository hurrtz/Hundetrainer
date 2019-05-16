import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import TrackedOverview from 'stories/screens/Food/Tracked/Overview';

interface Props {
  navigation: Navigation;
}

const TrackedOverviewContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <TrackedOverview navigation={navigation} />;

TrackedOverviewContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default TrackedOverviewContainer;
