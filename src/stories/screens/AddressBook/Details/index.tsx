import React, { Component } from 'react';
import {
  Screen,
  NavigationBar,
  Icon,
  Title,
  Subtitle,
  Text,
  Divider,
  Caption,
} from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import { ADDRESS_TYPES } from 'container/AddressBook/constants';

interface Props {
  navigation: TNavigation;
  address: IAddressBookEntry;
  onDetailsAddress: Function;
  onEditAddress: Function;
}

interface State {}

class AddressBookDetails extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onGoingBack = this.onGoingBack.bind(this);
  }

  componentWillUnmount() {
    const { onDetailsAddress } = this.props;

    onDetailsAddress({ id: undefined });
  }

  onGoingBack() {
    const { navigation } = this.props;

    navigation.goBack();
  }

  render() {
    const { navigation, address, onEditAddress } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={<Icon name="back" onPress={this.onGoingBack} />}
          rightComponent={
            <Icon
              name="edit"
              onPress={() => {
                onEditAddress({ id: address.id });
                navigation.navigate('AddressBookEdit');
              }}
            />
          }
          title={address.name}
          styleName="inline"
        />
        <StandardView>
          <Title>{address.name}</Title>
          <Subtitle>
            {ADDRESS_TYPES.find(({ value }) => value === address.type).title}
          </Subtitle>

          <Divider styleName="section-header">
            <Caption>Adresse:</Caption>
          </Divider>

          <Text styleName="md-gutter-top">
            Straße: {address.address.street}
          </Text>
          <Text styleName="md-gutter-top">
            Postleitzahl: {address.address.zip}
          </Text>
          <Text styleName="md-gutter-top">Stadt: {address.address.city}</Text>
          <Text styleName="md-gutter-top">Land: {address.address.country}</Text>

          <Divider styleName="section-header">
            <Caption>Kontakt:</Caption>
          </Divider>

          <Text styleName="md-gutter-top">
            Telefon: {address.contact.telephone}
          </Text>
          <Text styleName="md-gutter-top">Mobil: {address.contact.mobile}</Text>
          <Text styleName="md-gutter-top">E-Mail: {address.contact.email}</Text>
          <Text styleName="md-gutter-top">
            Homepage: {address.contact.homepage}
          </Text>
        </StandardView>
      </Screen>
    );
  }
}

export default AddressBookDetails;
