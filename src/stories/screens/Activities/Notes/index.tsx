import React, { PureComponent, ReactElement } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

class Notes extends PureComponent<Props> {
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
