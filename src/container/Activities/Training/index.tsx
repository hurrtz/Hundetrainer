import React, { PureComponent } from 'react';

import { TNavigation } from 'apptypes/base';
import Training from 'stories/screens/Activities/Training';

interface Props {
  navigation: TNavigation;
}

interface State {}

class TrainingContainer extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Training navigation={navigation} />;
  }
}

export default TrainingContainer;
