import React, { ReactElement } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const Places = ({ navigation }: Props): ReactElement => (
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

export default Places;
