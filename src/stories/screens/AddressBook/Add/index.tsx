import React, { ReactElement, FunctionComponent, useState } from 'react';
import { View, NavigationBar, Icon, Button, Text } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import {
  createSelectName,
  createSelectType,
  createSelectAddress,
  createSelectContact,
  createSelectAdditionalInformation,
} from '../shared';

import { AddressType, ADDRESS_TYPES } from 'container/AddressBook/constants';
import ADDRESS_BOOK from 'container/AddressBook/types';

interface Props {
  navigation: Navigation;
  onSave: Function;
}

interface State {
  name: string;
  type: ADDRESS_BOOK.ADDRESS_TYPES;
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

const AddressBookAdd: FunctionComponent<Props> = ({
  navigation,
  onSave,
}: Props): ReactElement => {
  const [name, setName] = useState('');
  const [type, setType] = useState(ADDRESS_TYPES[0].value);
  const [address, setAddress] = useState({
    street: '',
    zip: '',
    city: '',
    country: '',
  });
  const [contact, setContact] = useState({
    telephone: '',
    mobile: '',
    email: '',
    homepage: '',
  });
  const [additionalInformation, setAdditionalInformation] = useState('');

  const handleNameChange = ({ name: value }: State): void => setName(value);

  const handleTypeChange = ({ type: value }: State): void => setType(value);

  const handleAddressChange = ({
    street,
    zip,
    city,
    country,
  }: State['address']): void =>
    setAddress({
      street: street === undefined ? address.street : street,
      zip: zip === undefined ? address.zip : zip,
      city: city === undefined ? address.city : city,
      country: country === undefined ? address.country : country,
    });

  const handleContactChange = ({
    telephone,
    mobile,
    email,
    homepage,
  }: State['contact']): void =>
    setContact({
      telephone: telephone === undefined ? contact.telephone : telephone,
      mobile: mobile === undefined ? contact.mobile : mobile,
      email: email === undefined ? contact.email : email,
      homepage: homepage === undefined ? contact.homepage : homepage,
    });

  const handleAdditionalInformationChange = ({
    text: value,
  }: {
    text: State['additionalInformation'];
  }): void => setAdditionalInformation(value);

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

export default AddressBookAdd;
