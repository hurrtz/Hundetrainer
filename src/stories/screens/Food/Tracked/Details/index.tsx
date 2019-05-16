import React, { ReactElement, FunctionComponent } from 'react';
import { Screen, NavigationBar, Icon, Title } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const TrackedDetails: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => (
  <Screen>
    <NavigationBar
      leftComponent={
        <Icon name="back" onPress={(): boolean => navigation.goBack()} />
      }
      title="Details"
      styleName="inline"
    />
    <StandardView>
      <Title>Details eines getrackten Nahrungsmittels</Title>
    </StandardView>
  </Screen>
);

export default TrackedDetails;
