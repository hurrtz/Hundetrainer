import React, { Component } from 'react';

import { TNavigation } from 'apptypes/base';
import Training from 'stories/screens/Activities/Training';

interface Props {
  navigation: TNavigation;
}

interface State {}

class TrainingContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Training navigation={navigation} />;
  }
}

export default TrainingContainer;
