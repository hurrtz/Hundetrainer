import React, { Fragment, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import Dashboard from 'stories/screens/Dashboard';
import QuickAdd from 'stories/fabs/QuickAdd';

interface Props {
  navigation: Navigation;
}

const DashboardContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => (
  <Fragment>
    <Dashboard navigation={navigation} />
    <QuickAdd navigation={navigation} />
  </Fragment>
);

DashboardContainer.navigationOptions = {
  drawerIcon: (): ReactElement => (
    <IconComponent name="view-dashboard" size={25} />
  ),
};

export default DashboardContainer;
