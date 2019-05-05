import React, { PureComponent, ReactElement } from 'react';

import Training from 'stories/screens/Activities/Training';

interface Props {
  navigation: Navigation;
}

class TrainingContainer extends PureComponent<Props> {
  render(): ReactElement {
    const { navigation } = this.props;

    return <Training navigation={navigation} />;
  }
}

export default TrainingContainer;
