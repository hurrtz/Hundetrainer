import React, { PureComponent } from 'react';

import { TNavigation } from 'apptypes/base';
import Toys from 'stories/screens/Activities/Toys';

interface Props {
  navigation: TNavigation;
}

interface State {}

class ToysContainer extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Toys navigation={navigation} />;
  }
}

export default ToysContainer;
