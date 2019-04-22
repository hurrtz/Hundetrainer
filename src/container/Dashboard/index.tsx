import React, { PureComponent, Fragment } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from 'stories/screens/Dashboard';
import QuickAdd from 'stories/fabs/QuickAdd';
import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {}

class DashboardContainer extends PureComponent<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="view-dashboard" size={25} />,
  };

  render() {
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
