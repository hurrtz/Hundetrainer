import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const TrackedOverview: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="sidebar" onPress={(): void => navigation.toggleDrawer()} />
      }
      title="Übersicht"
      styleName="inline"
    />
    <StandardView>
      <Title>Übersicht über alle getrackten Nahrungsmittel</Title>
    </StandardView>
  </Screen>
);

export default TrackedOverview;
