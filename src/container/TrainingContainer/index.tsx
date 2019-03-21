import React, { Component, Fragment } from 'react';

import Training from 'stories/screens/Training';
import { IPoop } from 'apptypes/poop';
import QuickAdd from 'stories/fabs/QuickAdd';

export interface Props {
  navigation: any;
}

export interface State {
  poops: IPoop[];
}

class TrainingContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <Fragment>
        <Training navigation={navigation} />
        <QuickAdd />
      </Fragment>
    );
  }
}

export default TrainingContainer;
