import React, { PureComponent, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Food from 'stories/screens/Food';

interface Props {
  navigation: Navigation;
}

class FoodContainer extends PureComponent<Props> {
  static navigationOptions = {
    drawerIcon: (): ReactElement => <IconComponent name="bone" size={25} />,
  };

  render(): ReactElement {
    const { navigation } = this.props;

    return <Food navigation={navigation} />;
  }
}

export default FoodContainer;
