import React, { PureComponent } from 'react';
import { NavigationBar, Icon, View, Text, Button } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import {
  createSelectName,
  createSelectType,
  createSelectAddress,
  createSelectContact,
  createSelectAdditionalInformation,
} from '../shared';
import {
  IAddressBookEntry,
  ADDRESS_TYPES as TYPES,
} from 'container/AddressBook/types';
import { ADDRESS_TYPES } from 'container/AddressBook/constants';

interface Props {
  navigation: Navigation;
  onSave: Function;
  address: IAddressBookEntry;
  onEditAddress: Function;
}

interface State {
  name: string;
  type: TYPES;
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  contact: {
    telephone: string;
    mobile: string;
    email: string;
    homepage: string;
  };
  additionalInformation: string;
}

class AddressBookEdit extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: props.address.name,
      type: props.address.type,
      address: props.address.address,
      contact: props.address.contact,
      additionalInformation: props.address.additionalInformation,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleAdditionalInformationChange = this.handleAdditionalInformationChange.bind(
      this,
    );
  }

  componentWillUnmount() {
    const { onEditAddress } = this.props;

    onEditAddress({ id: undefined });
  }

  handleNameChange({ name }) {
    this.setState(prevState => ({ ...prevState, name }));
  }

  handleTypeChange({ type }) {
    this.setState(prevState => ({ ...prevState, type }));
  }

  handleAddressChange({ street, zip, city, country }) {
    this.setState(prevState => ({
      ...prevState,
      address: {
        street: street === undefined ? prevState.address.street : street,
        zip: zip === undefined ? prevState.address.zip : zip,
        city: city === undefined ? prevState.address.city : city,
        country: country === undefined ? prevState.address.country : country,
      },
    }));
  }

  handleContactChange({ telephone, mobile, email, homepage }) {
    this.setState(prevState => ({
      ...prevState,
      contact: {
        telephone:
          telephone === undefined ? prevState.contact.telephone : telephone,
        mobile: mobile === undefined ? prevState.contact.mobile : mobile,
        email: email === undefined ? prevState.contact.email : email,
        homepage:
          homepage === undefined ? prevState.contact.homepage : homepage,
      },
    }));
  }

  handleAdditionalInformationChange({ text: additionalInformation }) {
    this.setState(prevState => ({ ...prevState, additionalInformation }));
  }

  handleClose() {
    const { onSave } = this.props;
    const { name, type, address, contact, additionalInformation } = this.state;

    if (onSave) {
      onSave({
        name,
        type,
        address,
        contact,
        additionalInformation,
      });
    }
  }

  render() {
    const { navigation } = this.props;
    const { name, type, contact, address, additionalInformation } = this.state;

    return (
      <View>
        <NavigationBar
          leftComponent={
            <Icon name="back" onPress={() => navigation.goBack()} />
          }
          title="neue Adresse"
          styleName="inline"
        />

        <StandardView noPaddingTop>
          <View styleName="md-gutter-top">
            {createSelectName({
              name,
              handleNameChange: this.handleNameChange,
            })}
          </View>

          <View styleName="md-gutter-top">
            <Text styleName="sm-gutter-bottom">Typ:</Text>
            {createSelectType({
              type: ADDRESS_TYPES.find(({ value }) => value === type),
              handleTypeChange: this.handleTypeChange,
            })}
          </View>

          <View styleName="md-gutter-top">
            {createSelectAddress({
              address,
              handleAddressChange: this.handleAddressChange,
            })}
          </View>

          <View styleName="md-gutter-top">
            {createSelectContact({
              contact,
              handleContactChange: this.handleContactChange,
            })}
          </View>

          <View styleName="lg-gutter-top">
            {createSelectAdditionalInformation({
              additionalInformation,
              handleAdditionalInformationChange: this
                .handleAdditionalInformationChange,
            })}
          </View>

          <Button
            styleName="secondary lg-gutter-top xl-gutter-bottom"
            onPress={() => this.handleClose()}
          >
            <Text>Speichern</Text>
          </Button>
        </StandardView>
      </View>
    );
  }
}

export default AddressBookEdit;
