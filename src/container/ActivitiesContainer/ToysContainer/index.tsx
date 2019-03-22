import React, { Component } from 'react';

import Toys from 'stories/screens/Activities/Toys';

interface Props {
  navigation: any;
}

interface State {}

class ToysContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Toys navigation={navigation} />;
  }
}

export default ToysContainer;
