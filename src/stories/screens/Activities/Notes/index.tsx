import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const Notes: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon
          name="sidebar"
          onPress={(): boolean => navigation.toggleDrawer()}
        />
      }
      title="Hinweise"
      styleName="inline"
    />
    <StandardView>
      <Title>Hinweise</Title>
    </StandardView>
  </Screen>
);

export default Notes;
