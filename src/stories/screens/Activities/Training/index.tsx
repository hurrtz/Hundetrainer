import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Screen, NavigationBar, Icon } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {}

class Training extends Component<Props, State> {
  static navigationOptions = {
    drawerLabel: 'trophy',
    drawerIcon: () => <IconComponent name="view-dashboard" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          title="Übungen"
          styleName="inline"
        />
        <StandardView />
      </Screen>
    );
  }
}

export default Training;
