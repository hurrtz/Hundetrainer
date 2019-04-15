import React from 'react';
import {
  View,
  Screen,
  TextInput,
  DropDownMenu,
  Divider,
  Icon,
} from '@shoutem/ui';

import { ADDRESS_TYPES } from 'container/AddressBook/reducers';

interface ISelectAdditionalInformation {
  additionalInformation: string;
  handleAdditionalInformationChange: Function;
}

export const createSelectName = () => <TextInput onChangeText={() => ({})} />;

export const createSelectType = () => (
  <DropDownMenu
    options={ADDRESS_TYPES}
    selectedOption={ADDRESS_TYPES[0]}
    onOptionSelected={() => ({})}
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
  />
);

export const createSelectAddress = () => (
  <View>
    <TextInput placeholder="Straße:" onChangeText={() => ({})} />
    <Divider styleName="line" style={{ marginTop: 5, marginBottom: 5 }} />
    <View styleName="horizontal space-between">
      <TextInput placeholder="Postleitzahl:" onChangeText={() => ({})} />
      <TextInput
        placeholder="Stadt/Ort:"
        onChangeText={() => ({})}
        style={{
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
      />
    </View>
    <Divider styleName="line" style={{ marginTop: 5, marginBottom: 5 }} />
    <TextInput placeholder="Land:" onChangeText={() => ({})} />
  </View>
);

export const createSelectContact = () => (
  <View>
    <View styleName="horizontal v-center">
      <Icon name="call" />
      <TextInput
        style={{
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        placeholder="Telefon:"
        onChangeText={() => ({})}
      />
    </View>
    <Divider styleName="line" style={{ marginTop: 5, marginBottom: 5 }} />
    <View styleName="horizontal v-center">
      <Icon name="social-wall" />
      <TextInput
        style={{
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        placeholder="Mobil:"
        onChangeText={() => ({})}
      />
    </View>
    <Divider styleName="line" style={{ marginTop: 5, marginBottom: 5 }} />
    <View styleName="horizontal v-center">
      <Icon name="email" />
      <TextInput
        style={{
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        placeholder="E-Mail:"
        onChangeText={() => ({})}
      />
    </View>
    <Divider styleName="line" style={{ marginTop: 5, marginBottom: 5 }} />
    <View styleName="horizontal v-center">
      <Icon name="web" />
      <TextInput
        style={{
          marginLeft: 10,
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
        }}
        placeholder="Homepage:"
        onChangeText={() => ({})}
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
      multiline
      numberOfLines={5}
      placeholder="Sonstige Informationen"
      defaultValue={additionalInformation}
      onChangeText={(text: string) => handleAdditionalInformationChange(text)}
    />
  </Screen>
);
