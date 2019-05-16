import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import OptionsOverview from 'stories/screens/Food/Options/Overview';

interface Props {
  navigation: Navigation;
}

const OptionsOverviewContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <OptionsOverview navigation={navigation} />;

OptionsOverviewContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

export default OptionsOverviewContainer;
