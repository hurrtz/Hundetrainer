import React, { PureComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

interface State {}

class Notes extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          title="Hinweise"
          styleName="inline"
        />
        <StandardView>
          <Title>Hinweise</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default Notes;
