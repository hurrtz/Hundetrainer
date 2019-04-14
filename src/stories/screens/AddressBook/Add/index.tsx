import React, { Component } from 'react';
import { Screen, NavigationBar, Icon } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import {
  createSelectName,
  createSelectType,
  createSelectAddress,
  createSelectAdditionalInformation,
} from '../shared';

import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookAdd extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="back" onPress={() => navigation.goBack()} />
          }
          title="neue Adresse"
          styleName="inline"
        />

        <StandardView>
          {createSelectName()}
          {createSelectType()}
          {createSelectAddress()}
          {createSelectAdditionalInformation({
            additionalInformation: '',
            handleAdditionalInformationChange: () => ({}),
          })}
        </StandardView>
      </Screen>
    );
  }
}

export default AddressBookAdd;
