import React, { PureComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

interface State {}

class Calendar extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          title="Kalender"
          styleName="inline"
        />
        <StandardView>
          <Title>Kalender</Title>
        </StandardView>
      </Screen>
    );
  }
}

export default Calendar;
