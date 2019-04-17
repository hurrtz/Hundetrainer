import React, { Component, Fragment } from 'react';
import { Screen, NavigationBar, Icon, Title, Text, View } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import { ADDRESS_TYPES } from 'container/AddressBook/reducers';

interface Props {
  navigation: TNavigation;
  addresses: IAddressBookEntry[];
}

interface State {}

class AddressBookDetails extends Component<Props, State> {
  createDefault() {
    return (
      <Fragment>
        <Title>Keine Daten vorhanden</Title>
        <Text styleName="md-gutter-top">
          Bitte hinterlegen Sie Adressen, um einen Überblick über alle
          relevanten Orte zu schaffen, die Ihren Hund betreffen.
        </Text>
      </Fragment>
    );
  }

  createAddressesList() {
    const { addresses } = this.props;

    if (addresses.length === 0) {
      return this.createDefault();
    }

    return addresses.map((address: IAddressBookEntry) => (
      <View key={address.id} styleName="md-gutter-top">
        <Text>{address.name}</Text>
        <Text>
          {ADDRESS_TYPES.find(({ value }) => value === address.type).title}
        </Text>
      </View>
    ));
  }

  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          rightComponent={
            <Icon
              name="plus-button"
              onPress={() => navigation.push('AddressBookAdd')}
            />
          }
          title="Adressen"
          styleName="inline"
        />
        <StandardView>{this.createAddressesList()}</StandardView>
      </Screen>
    );
  }
}

export default AddressBookDetails;
