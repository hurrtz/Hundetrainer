import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const TrackedEdit: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="back" onPress={(): boolean => navigation.goBack()} />
      }
      title="Bearbeiten"
      styleName="inline"
    />
    <StandardView>
      <Title>Getracktes Nahrungsmittel bearbeiten</Title>
    </StandardView>
  </Screen>
);

export default TrackedEdit;
