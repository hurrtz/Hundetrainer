import React, { PureComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

interface State {}

class Health extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          title="Gesundheit"
          styleName="inline"
        />
        <StandardView>
          <Title>Gesundheit</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default Health;
