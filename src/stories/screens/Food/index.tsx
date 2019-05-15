import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const Food: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="sidebar" onPress={(): void => navigation.toggleDrawer()} />
      }
      title="Ernährung"
      styleName="inline"
    />
    <StandardView>
      <Title>Ernährung</Title>
    </StandardView>
  </Screen>
);

export default Food;
