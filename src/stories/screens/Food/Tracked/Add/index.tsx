import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const TrackedAdd: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="sidebar" onPress={(): void => navigation.toggleDrawer()} />
      }
      title="tracken"
      styleName="inline"
    />
    <StandardView>
      <Title>Nahrung tracken</Title>
    </StandardView>
  </Screen>
);

export default TrackedAdd;
