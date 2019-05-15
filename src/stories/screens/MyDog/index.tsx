import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const MyDog: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="sidebar" onPress={(): void => navigation.toggleDrawer()} />
      }
      title="Mein Hund"
      styleName="inline"
    />
    <StandardView>
      <Title>Mein Hund</Title>
    </StandardView>
  </Screen>
);

export default MyDog;
