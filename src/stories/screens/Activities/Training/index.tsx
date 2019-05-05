import React, { PureComponent, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

class Training extends PureComponent<Props> {
  static navigationOptions = {
    drawerLabel: 'trophy',
    drawerIcon: (): ReactElement => (
      <IconComponent name="view-dashboard" size={25} />
    ),
  };

  render(): ReactElement {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon
              name="sidebar"
              onPress={(): boolean => navigation.toggleDrawer()}
            />
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
