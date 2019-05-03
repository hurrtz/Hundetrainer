import React, { PureComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

interface State {}

class Toys extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          title="Spielzeug"
          styleName="inline"
        />
        <StandardView>
          <Title>Spielzeug</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default Toys;
