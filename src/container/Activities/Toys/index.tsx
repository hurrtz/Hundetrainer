import React, { Component } from 'react';

import { TNavigation } from 'apptypes/base';
import Toys from 'stories/screens/Activities/Toys';

interface Props {
  navigation: TNavigation;
}

interface State {}

class ToysContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Toys navigation={navigation} />;
  }
}

export default ToysContainer;
