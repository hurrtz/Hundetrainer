import React, { PureComponent, Fragment, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from 'stories/screens/Dashboard';
import QuickAdd from 'stories/fabs/QuickAdd';

interface Props {
  navigation: Navigation;
}

class DashboardContainer extends PureComponent<Props> {
  static navigationOptions = {
    drawerIcon: (): ReactElement => (
      <IconComponent name="view-dashboard" size={25} />
    ),
  };

  render(): ReactElement {
    const { navigation } = this.props;

    return (
      <Fragment>
        <Dashboard navigation={navigation} />
        <QuickAdd navigation={navigation} />
      </Fragment>
    );
  }
}

export default DashboardContainer;
