import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const Training: FunctionComponent<Props> = ({
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
      title="Übungen"
      styleName="inline"
    />
    <StandardView>
      <Title>Übungen</Title>
    </StandardView>
  </Screen>
);

export default Training;
