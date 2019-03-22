import React, { Component, Fragment } from 'react';

import Dashboard from 'stories/screens/Dashboard';
import QuickAdd from 'stories/fabs/QuickAdd';

export interface Props {
  navigation: any;
}

export interface State {}

class DashboardContainer extends Component<Props, State> {
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
