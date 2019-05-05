import React, { PureComponent, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Settings from 'stories/screens/Settings';

interface Props {
  navigation: Navigation;
}

class SettingsContainer extends PureComponent<Props> {
  static navigationOptions = {
    drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
  };

  render(): ReactElement {
    const { navigation } = this.props;

    return <Settings navigation={navigation} />;
  }
}

export default SettingsContainer;
