import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';
import Health from 'stories/screens/Health';

interface Props {
  navigation: TNavigation;
}

interface State {}

class HealthContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="medical-bag" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <Health navigation={navigation} />;
  }
}

export default HealthContainer;
