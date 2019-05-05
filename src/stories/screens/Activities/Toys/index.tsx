import React, { ReactElement } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const Toys = ({ navigation }: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon
          name="sidebar"
          onPress={(): boolean => navigation.toggleDrawer()}
        />
      }
      title="Spielzeug"
      styleName="inline"
    />
    <StandardView>
      <Title>Spielzeug</Title>
    </StandardView>
  </Screen>
);

export default Toys;
