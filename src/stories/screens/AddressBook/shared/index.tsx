import React, { ReactElement } from 'react';
import { View, Screen, TextInput, DropDownMenu, Icon } from '@shoutem/ui';

import { ADDRESS_TYPES } from 'container/AddressBook/constants';
import { ADDRESS_TYPES as TYPES } from 'container/AddressBook/types';

interface SelectAdditionalInformation {
  additionalInformation: string;
  handleAdditionalInformationChange: Function;
}

interface SelectContact {
  contact: {
    telephone: string;
    mobile: string;
    email: string;
    homepage: string;
  };
  handleContactChange: Function;
}

interface SelectAddress {
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  handleAddressChange: Function;
}

interface Type {
  title: string;
  value: TYPES;
}

interface SelectType {
  type: Type;
  handleTypeChange: Function;
}

interface SelectName {
  name: string;
  handleNameChange: Function;
}

export const createSelectName = ({
  name,
  handleNameChange,
}: SelectName): ReactElement => (
  <TextInput
    style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
    placeholder="Name"
    value={name}
    onChangeText={(value: string): void => handleNameChange({ name: value })}
  />
);

export const createSelectType = ({
  type,
  handleTypeChange,
}: SelectType): ReactElement => (
  <DropDownMenu
    options={ADDRESS_TYPES}
    selectedOption={type}
    onOptionSelected={(option: Type): void =>
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
}: SelectAddress): ReactElement => (
  <View>
    <TextInput
      style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
      value={street}
      placeholder="Straße:"
      onChangeText={(value: string): void =>
        handleAddressChange({ street: value })
      }
    />

    <View styleName="horizontal space-between md-gutter-top">
      <TextInput
        value={zip}
        placeholder="Postleitzahl:"
        onChangeText={(value: string): void =>
          handleAddressChange({ zip: value })
        }
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
        onChangeText={(value: string): void =>
          handleAddressChange({ city: value })
        }
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
      onChangeText={(value: string): void =>
        handleAddressChange({ country: value })
      }
      styleName="md-gutter-top"
    />
  </View>
);

export const createSelectContact = ({
  contact: { telephone, mobile, email, homepage },
  handleContactChange,
}: SelectContact): ReactElement => (
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
        onChangeText={(value: string): void =>
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
        onChangeText={(value: string): void =>
          handleContactChange({ mobile: value })
        }
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
        onChangeText={(value: string): void =>
          handleContactChange({ email: value })
        }
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
        onChangeText={(value: string): void =>
          handleContactChange({ homepage: value })
        }
      />
    </View>
  </View>
);

export const createSelectAdditionalInformation = ({
  additionalInformation,
  handleAdditionalInformationChange,
}: SelectAdditionalInformation): ReactElement => (
  <Screen>
    <TextInput
      style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
      multiline
      numberOfLines={5}
      placeholder="Sonstige Informationen"
      defaultValue={additionalInformation}
      onChangeText={(text: string): void =>
        handleAdditionalInformationChange({ text })
      }
    />
  </Screen>
);
