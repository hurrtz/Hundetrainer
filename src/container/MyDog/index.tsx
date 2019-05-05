import React, { PureComponent, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import MyDog from 'stories/screens/MyDog';

interface Props {
  navigation: Navigation;
}

class MyDogContainer extends PureComponent<Props> {
  static navigationOptions = {
    drawerIcon: (): ReactElement => <IconComponent name="paw" size={25} />,
  };

  render(): ReactElement {
    const { navigation } = this.props;

    return <MyDog navigation={navigation} />;
  }
}

export default MyDogContainer;
