import React, { PureComponent, ReactElement } from 'react';

import Places from 'stories/screens/Activities/Places';

interface Props {
  navigation: Navigation;
}

class PlacesContainer extends PureComponent<Props> {
  render(): ReactElement {
    const { navigation } = this.props;

    return <Places navigation={navigation} />;
  }
}

export default PlacesContainer;
