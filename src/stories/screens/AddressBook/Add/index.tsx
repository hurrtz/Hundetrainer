import React, { Component } from 'react';
import {
  Screen,
  NavigationBar,
  Icon,
  Divider,
  Button,
  Text,
  Caption,
} from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import {
  createSelectName,
  createSelectType,
  createSelectAddress,
  createSelectContact,
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

        <StandardView noPaddingTop>
          <Divider styleName="section-header">
            <Caption>Titel</Caption>
          </Divider>

          {createSelectName()}

          <Divider styleName="section-header">
            <Caption>Typ</Caption>
          </Divider>

          {createSelectType()}

          <Divider styleName="section-header">
            <Caption>Adresse</Caption>
          </Divider>

          {createSelectAddress()}

          <Divider styleName="section-header">
            <Caption>Kontakt</Caption>
          </Divider>

          {createSelectContact()}

          <Divider />

          {createSelectAdditionalInformation({
            additionalInformation: '',
            handleAdditionalInformationChange: () => ({}),
          })}

          <Divider />

          <Button styleName="full-width" onPress={() => ({})}>
            <Text>Speichern</Text>
          </Button>
        </StandardView>
      </Screen>
    );
  }
}

export default AddressBookAdd;
