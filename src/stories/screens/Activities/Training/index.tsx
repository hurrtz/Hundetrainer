import React, { PureComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

interface State {}

class Training extends PureComponent<Props, State> {
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
        <StandardView>
          <Title>Übungen</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default Training;
