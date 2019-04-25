import React from 'react';
import { View, Screen, TextInput, DropDownMenu, Icon } from '@shoutem/ui';

import { ADDRESS_TYPES } from 'container/AddressBook/constants';
import { ADDRESS_TYPES as TYPES } from 'apptypes/addressBook';

interface ISelectAdditionalInformation {
  additionalInformation: string;
  handleAdditionalInformationChange: Function;
}

interface ISelectContact {
  contact: {
    telephone: string;
    mobile: string;
    email: string;
    homepage: string;
  };
  handleContactChange: Function;
}

interface ISelectAddress {
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  handleAddressChange: Function;
}

type TType = {
  title: string;
  value: TYPES;
};

interface ISelectType {
  type: TType;
  handleTypeChange: Function;
}

interface ISelectName {
  name: string;
  handleNameChange: Function;
}

export const createSelectName = ({ name, handleNameChange }: ISelectName) => (
  <TextInput
    style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
    placeholder="Name"
    value={name}
    onChangeText={(value: string) => handleNameChange({ name: value })}
  />
);

export const createSelectType = ({ type, handleTypeChange }: ISelectType) => (
  <DropDownMenu
    options={ADDRESS_TYPES}
    selectedOption={type}
    onOptionSelected={(option: TType) =>
      handleTypeChange({ type: option.value })
    }
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
    style={{ selectedOption: { height: 100 } }}
  />
);

export const createSelectAddress = ({
  address: { street, zip, city, country },
  handleAddressChange,
}: ISelectAddress) => (
  <View>
    <TextInput
      style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
      value={street}
      placeholder="Straße:"
      onChangeText={(value: string) => handleAddressChange({ street: value })}
    />

    <View styleName="horizontal space-between md-gutter-top">
      <TextInput
        value={zip}
        placeholder="Postleitzahl:"
        onChangeText={(value: string) => handleAddressChange({ zip: value })}
        style={{
          borderColor: '#888',
          borderWidth: 1,
          borderStyle: 'solid',
          minWidth: 100,
        }}
      />

      <TextInput
        value={city}
        placeholder="Stadt/Ort:"
        onChangeText={(value: string) => handleAddressChange({ city: value })}
        style={{
          borderColor: '#888',
          borderWidth: 1,
          borderStyle: 'solid',
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
      />
    </View>

    <TextInput
      style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
      value={country}
      placeholder="Land:"
      onChangeText={(value: string) => handleAddressChange({ country: value })}
      styleName="md-gutter-top"
    />
  </View>
);

export const createSelectContact = ({
  contact: { telephone, mobile, email, homepage },
  handleContactChange,
}: ISelectContact) => (
  <View>
    <View styleName="horizontal v-center">
      <Icon name="call" />
      <TextInput
        style={{
          borderColor: '#888',
          borderWidth: 1,
          borderStyle: 'solid',
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        value={telephone}
        placeholder="Telefon:"
        onChangeText={(value: string) =>
          handleContactChange({ telephone: value })
        }
      />
    </View>

    <View styleName="horizontal v-center md-gutter-top">
      <Icon name="social-wall" />
      <TextInput
        style={{
          borderColor: '#888',
          borderWidth: 1,
          borderStyle: 'solid',
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        value={mobile}
        placeholder="Mobil:"
        onChangeText={(value: string) => handleContactChange({ mobile: value })}
      />
    </View>

    <View styleName="horizontal v-center md-gutter-top">
      <Icon name="email" />
      <TextInput
        style={{
          borderColor: '#888',
          borderWidth: 1,
          borderStyle: 'solid',
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        value={email}
        placeholder="E-Mail:"
        onChangeText={(value: string) => handleContactChange({ email: value })}
      />
    </View>

    <View styleName="horizontal v-center md-gutter-top">
      <Icon name="web" />
      <TextInput
        style={{
          borderColor: '#888',
          borderWidth: 1,
          borderStyle: 'solid',
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        value={homepage}
        placeholder="Homepage:"
        onChangeText={(value: string) =>
          handleContactChange({ homepage: value })
        }
      />
    </View>
  </View>
);

export const createSelectAdditionalInformation = ({
  additionalInformation,
  handleAdditionalInformationChange,
}: ISelectAdditionalInformation) => (
  <Screen>
    <TextInput
      style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
      multiline
      numberOfLines={5}
      placeholder="Sonstige Informationen"
      defaultValue={additionalInformation}
      onChangeText={(text: string) =>
        handleAdditionalInformationChange({ text })
      }
    />
  </Screen>
);
