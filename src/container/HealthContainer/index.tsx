import React, { Component } from 'react';

import Health from 'stories/screens/Health';

export interface Props {
  navigation: any;
}

export interface State {}

class HealthContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Health navigation={navigation} />;
  }
}

export default HealthContainer;
