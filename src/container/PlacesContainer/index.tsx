import React, { Component } from 'react';

import Places from 'stories/screens/Places';

export interface Props {
  navigation: any;
}

export interface State {}

class PlacesContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Places navigation={navigation} />;
  }
}

export default PlacesContainer;
