import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const OptionsEdit: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="back" onPress={(): boolean => navigation.goBack()} />
      }
      title="bearbeiten"
      styleName="inline"
    />
    <StandardView>
      <Title>Nahrungsmittel bearbeiten</Title>
    </StandardView>
  </Screen>
);

export default OptionsEdit;
