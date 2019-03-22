import React, { Component } from 'react';

import { TNavigation } from 'apptypes/base';
import Places from 'stories/screens/Activities/Places';

interface Props {
  navigation: TNavigation;
}

interface State {}

class PlacesContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Places navigation={navigation} />;
  }
}

export default PlacesContainer;