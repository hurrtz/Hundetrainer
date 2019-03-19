import React, { Component } from 'react';
import BlankPage from 'stories/screens/BlankPage';

export interface Props {
  navigation: any;
}

export interface State {}

export default class BlankPageContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <BlankPage navigation={navigation} />;
  }
}
