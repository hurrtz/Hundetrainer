import React, { Component } from 'react';

import Settings from 'stories/screens/Settings';

export interface Props {
  navigation: any;
}

export interface State {}

class SettingsContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Settings navigation={navigation} />;
  }
}

export default SettingsContainer;
