import React, { Component } from 'react';

import ActivitiesOutside from 'stories/screens/ActivitiesOutside';

export interface Props {
  navigation: any;
}

export interface State {}

class ActivitiesOutsideContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <ActivitiesOutside navigation={navigation} />;
  }
}

export default ActivitiesOutsideContainer;
