import React from 'react';
import {
  Content,
  Text,
  Item,
  Label,
  Textarea,
  Input,
  Picker,
  Icon,
  ListItem,
  Radio,
  Left,
  Right,
  CheckBox,
  Body,
} from 'native-base';

import { ADDRESS_TYPES } from 'apptypes/addressBook';

interface ISelectAdditionalInformation {
  additionalInformation: string;
  handleAdditionalInformationChange: Function;
}

export const createSelectName = () => (
  <Item underline>
    <Label>Name:</Label>
    <Input />
  </Item>
);

export const createSelectType = () => (
  <Item picker>
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="arrow-down" />}
      style={{ backgroundColor: 'transparent' }}
      placeholder="Addresstyp:"
      onValueChange={() => {}}
      placeholderStyle={{
        backgroundColor: 'transparent',
        marginLeft: -15,
        color: '#575757',
      }}
    >
      <Picker.Item label="Ernährung" value={ADDRESS_TYPES.DIET} />
      <Picker.Item label="Gesundheit" value={ADDRESS_TYPES.HEALTH} />
      <Picker.Item label="Training" value={ADDRESS_TYPES.TRAINING} />
      <Picker.Item label="Auslauf" value={ADDRESS_TYPES.EXCERCISE} />
      <Picker.Item label="Hundeauslaufgebiet" value={ADDRESS_TYPES.DOG_PARK} />
      <Picker.Item label="Hundebetreuung" value={ADDRESS_TYPES.DOG_SITTING} />
      <Picker.Item label="Hunde-Pension" value={ADDRESS_TYPES.DOG_PENSION} />
      <Picker.Item label="sonstige" value={ADDRESS_TYPES.OTHER} />
    </Picker>
  </Item>
);

export const createSelectAddress = () => [
  <Item key="street" underline>
    <Label>Straße:</Label>
    <Input />
  </Item>,
  <Item key="zip" underline>
    <Label>Postleitzahl:</Label>
    <Input />
  </Item>,
  <Item key="place" underline>
    <Label>Stadt/Ort:</Label>
    <Input />
  </Item>,
  <Item key="country" underline>
    <Label>Land:</Label>
    <Input />
  </Item>,
];

export const createSelectAdditionalInformation = ({
  additionalInformation,
  handleAdditionalInformationChange,
}: ISelectAdditionalInformation) => (
  <Content padder>
    <Textarea
      rowSpan={5}
      placeholder="Sonstige Informationen"
      style={{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#CCC',
        marginLeft: -5,
        marginRight: -5,
        marginTop: -5,
      }}
      defaultValue={additionalInformation}
      onChangeText={(text: string) => handleAdditionalInformationChange(text)}
    />
  </Content>
);
