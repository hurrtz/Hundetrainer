import React, { PureComponent, ReactElement } from 'react';

import Toys from 'stories/screens/Activities/Toys';

interface Props {
  navigation: Navigation;
}

class ToysContainer extends PureComponent<Props> {
  render(): ReactElement {
    const { navigation } = this.props;

    return <Toys navigation={navigation} />;
  }
}

export default ToysContainer;
