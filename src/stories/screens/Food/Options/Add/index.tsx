import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const OptionsAdd: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="back" onPress={(): boolean => navigation.goBack()} />
      }
      title="anlegen"
      styleName="inline"
    />
    <StandardView>
      <Title>Neues Nahrungsmittel anlegen</Title>
    </StandardView>
  </Screen>
);

export default OptionsAdd;
