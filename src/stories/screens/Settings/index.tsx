import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const Settings: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="sidebar" onPress={(): void => navigation.toggleDrawer()} />
      }
      title="Einstellungen"
      styleName="inline"
    />
    <StandardView>
      <Title>Einstellungen</Title>
    </StandardView>
  </Screen>
);

export default Settings;
