import React, { Component } from 'react';

import MyDog from 'stories/screens/MyDog';

export interface Props {
  navigation: any;
}

export interface State {}

class MyDogContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <MyDog navigation={navigation} />;
  }
}

export default MyDogContainer;
