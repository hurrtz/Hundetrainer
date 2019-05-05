import React, { PureComponent, ReactElement } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

class Calendar extends PureComponent<Props> {
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
