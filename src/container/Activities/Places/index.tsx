import React, { PureComponent } from 'react';

import Places from 'stories/screens/Activities/Places';

interface Props {
  navigation: Navigation;
}

interface State {}

class PlacesContainer extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Places navigation={navigation} />;
  }
}

export default PlacesContainer;
