import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';
import MyDog from 'stories/screens/MyDog';

interface Props {
  navigation: TNavigation;
}

interface State {}

class MyDogContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="paw" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <MyDog navigation={navigation} />;
  }
}

export default MyDogContainer;
