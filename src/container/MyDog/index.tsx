import React, { PureComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import MyDog from 'stories/screens/MyDog';

interface Props {
  navigation: Navigation;
}

interface State {}

class MyDogContainer extends PureComponent<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="paw" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <MyDog navigation={navigation} />;
  }
}

export default MyDogContainer;
