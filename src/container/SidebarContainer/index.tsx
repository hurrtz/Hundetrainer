import React, { Component } from 'react';
import { NavigationComponent } from 'react-navigation';

import Sidebar from 'stories/screens/Sidebar';

export interface Props {
  navigation: NavigationComponent;
}

export interface State {}

export default class SidebarContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Sidebar navigation={navigation} />;
  }
}
