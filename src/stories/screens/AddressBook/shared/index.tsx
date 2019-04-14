import React from 'react';
import { View, Screen, TextInput, DropDownMenu } from '@shoutem/ui';

import { ADDRESS_TYPES } from 'container/AddressBook/reducers';

interface ISelectAdditionalInformation {
  additionalInformation: string;
  handleAdditionalInformationChange: Function;
}

export const createSelectName = () => (
  <TextInput placeholder="Name:" onChangeText={() => ({})} />
);

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

export const createSelectAddress = () => [
  <View key="street" styleName="horizontal">
    <TextInput placeholder="Straße:" onChangeText={() => ({})} />
  </View>,
  <View key="zip" styleName="horizontal">
    <TextInput placeholder="Postleitzahl:" onChangeText={() => ({})} />
  </View>,
  <View key="place" styleName="horizontal">
    <TextInput placeholder="Stadt/Ort:" onChangeText={() => ({})} />
  </View>,
  <View key="country" styleName="horizontal">
    <TextInput placeholder="Land:" onChangeText={() => ({})} />
  </View>,
];

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
