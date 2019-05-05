import React, { PureComponent, ReactElement } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

class Places extends PureComponent<Props> {
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
          title="Orte"
          styleName="inline"
        />
        <StandardView>
          <Title>Orte</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default Places;
