import React, { PureComponent, ReactElement } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

class Food extends PureComponent<Props> {
  render(): ReactElement {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon
              name="sidebar"
              onPress={(): void => navigation.toggleDrawer()}
            />
          }
          title="Ernährung"
          styleName="inline"
        />
        <StandardView>
          <Title>Ernährung</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default Food;
