import React, { PureComponent } from 'react';

import Toys from 'stories/screens/Activities/Toys';

interface Props {
  navigation: Navigation;
}

interface State {}

class ToysContainer extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Toys navigation={navigation} />;
  }
}

export default ToysContainer;
