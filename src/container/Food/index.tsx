import React, { PureComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Food from 'stories/screens/Food';

interface Props {
  navigation: Navigation;
}

interface State {}

class FoodContainer extends PureComponent<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="bone" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <Food navigation={navigation} />;
  }
}

export default FoodContainer;
