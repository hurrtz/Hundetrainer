import React, { Component } from 'react';

import ActivitiesHome from 'stories/screens/ActivitiesHome';

export interface Props {
  navigation: any;
}

export interface State {}

class ActivitiesHomeContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <ActivitiesHome navigation={navigation} />;
  }
}

export default ActivitiesHomeContainer;
