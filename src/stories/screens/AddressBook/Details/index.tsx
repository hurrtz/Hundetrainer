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
import { ADDRESS_TYPES } from 'container/AddressBook/reducers';

interface Props {
  navigation: TNavigation;
}

interface State {}

interface INavigationProps {
  address: IAddressBookEntry;
}

class AddressBookDetails extends Component<Props, State> {
  navigationProps: INavigationProps;

  constructor(props: Props) {
    super(props);

    this.navigationProps = {
      address: props.navigation.getParam('address', undefined),
    };
  }

  render() {
    const { navigation } = this.props;
    const { address } = this.navigationProps;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="back" onPress={() => navigation.goBack()} />
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

          <Text styleName="sm-gutter-top">
            Straße: {address.address.street}
          </Text>
          <Text styleName="sm-gutter-top">
            Postleitzahl: {address.address.zip}
          </Text>
          <Text styleName="sm-gutter-top">Stadt: {address.address.city}</Text>
          <Text styleName="sm-gutter-top">Land: {address.address.country}</Text>

          <Divider styleName="section-header">
            <Caption>Kontakt:</Caption>
          </Divider>

          <Text styleName="sm-gutter-top">
            Telefon: {address.contact.telephone}
          </Text>
          <Text styleName="sm-gutter-top">Mobil: {address.contact.mobile}</Text>
          <Text styleName="sm-gutter-top">E-Mail: {address.contact.email}</Text>
          <Text styleName="sm-gutter-top">
            Homepage: {address.contact.homepage}
          </Text>
        </StandardView>
      </Screen>
    );
  }
}

export default AddressBookDetails;
