import React, { PureComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

interface State {}

class MyDog extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          title="Mein Hund"
          styleName="inline"
        />
        <StandardView>
          <Title>Mein Hund</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default MyDog;
