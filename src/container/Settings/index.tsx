import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';
import Settings from 'stories/screens/Settings';

interface Props {
  navigation: TNavigation;
}

interface State {}

class SettingsContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="settings" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <Settings navigation={navigation} />;
  }
}

export default SettingsContainer;
