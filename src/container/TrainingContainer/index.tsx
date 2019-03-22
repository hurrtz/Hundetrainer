import React, { Component } from 'react';

import Training from 'stories/screens/Training';

export interface Props {
  navigation: any;
}

export interface State {}

class TrainingContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Training navigation={navigation} />;
  }
}

export default TrainingContainer;
