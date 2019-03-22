import React, { Component, Fragment } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from 'stories/screens/Dashboard';
import QuickAdd from 'stories/fabs/QuickAdd';

interface Props {
  navigation: any;
}

interface State {}

class DashboardContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="view-dashboard" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return (
      <Fragment>
        <Dashboard navigation={navigation} />
        <QuickAdd />
      </Fragment>
    );
  }
}

export default DashboardContainer;
