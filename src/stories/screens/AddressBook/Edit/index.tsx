import React, {
  ReactElement,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
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
  AddressBookEntry,
  ADDRESS_TYPES as TYPES,
} from 'container/AddressBook/types';
import { AddressType, ADDRESS_TYPES } from 'container/AddressBook/constants';

interface Props {
  navigation: Navigation;
  onSave: Function;
  address: AddressBookEntry;
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

const AddressBookEdit: FunctionComponent<Props> = ({
  address,
  onEditAddress,
  onSave,
}: Props): ReactElement => {
  const [name, setName] = useState(address.name);
  const [type, setType] = useState(address.type);
  const [address, setAddress] = useState(address.address);
  const [contact, setContact] = useState(address.contact);
  const [additionalInformation, setAdditionalInformation] = useState(
    address.additionalInformation,
  );

  useEffect(
    (): Function => {
      return (): void => {
        onEditAddress({ id: undefined });
      };
    },
  );

  const handleNameChange = ({ name: value }): void => setName(value);

  const handleTypeChange = ({ type: value }): void => {
    setType(value);
  };

  const handleAddressChange = ({ street, zip, city, country }): void => {
    setAddress({
      street: street === undefined ? address.street : street,
      zip: zip === undefined ? address.zip : zip,
      city: city === undefined ? address.city : city,
      country: country === undefined ? address.country : country,
    });
  };

  const handleContactChange = ({
    telephone,
    mobile,
    email,
    homepage,
  }): void => {
    setContact({
      telephone: telephone === undefined ? contact.telephone : telephone,
      mobile: mobile === undefined ? contact.mobile : mobile,
      email: email === undefined ? contact.email : email,
      homepage: homepage === undefined ? contact.homepage : homepage,
    });
  };

  const handleAdditionalInformationChange = ({ text: value }): void => {
    setAdditionalInformation(value);
  };

  const handleClose = (): void => {
    if (onSave) {
      onSave({
        name,
        type,
        address,
        contact,
        additionalInformation,
      });
    }
  };

  return (
    <View>
      <NavigationBar
        leftComponent={
          <Icon name="back" onPress={(): boolean => navigation.goBack()} />
        }
        title="neue Adresse"
        styleName="inline"
      />

      <StandardView noPaddingTop>
        <View styleName="md-gutter-top">
          {createSelectName({
            name,
            handleNameChange,
          })}
        </View>

        <View styleName="md-gutter-top">
          <Text styleName="sm-gutter-bottom">Typ:</Text>
          {createSelectType({
            type: ADDRESS_TYPES.find(
              ({ value }: AddressType): boolean => value === type,
            ),
            handleTypeChange,
          })}
        </View>

        <View styleName="md-gutter-top">
          {createSelectAddress({
            address,
            handleAddressChange,
          })}
        </View>

        <View styleName="md-gutter-top">
          {createSelectContact({
            contact,
            handleContactChange,
          })}
        </View>

        <View styleName="lg-gutter-top">
          {createSelectAdditionalInformation({
            additionalInformation,
            handleAdditionalInformationChange,
          })}
        </View>

        <Button
          styleName="secondary lg-gutter-top xl-gutter-bottom"
          onPress={(): void => handleClose()}
        >
          <Text>Speichern</Text>
        </Button>
      </StandardView>
    </View>
  );
};

export default AddressBookEdit;
