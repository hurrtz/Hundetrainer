import React, { Component } from 'react';
import { Screen, NavigationBar, Icon } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {}

class Notes extends Component<Props, State> {
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
        <StandardView />
      </Screen>
    );
  }
}

export default Notes;
