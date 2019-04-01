import React from 'react';
import {
  Content,
  Text,
  Item,
  Label,
  Textarea,
  ListItem,
  Radio,
  Left,
  Right,
  CheckBox,
  Body,
} from 'native-base';
import DatePicker from 'react-native-datepicker';

import { QUALITY, CONSISTENCY, COLOR } from 'apptypes/poop';

interface IListItem {
  item: QUALITY | CONSISTENCY | COLOR;
  itemSelected: QUALITY | CONSISTENCY | COLOR;
  label: string;
  noBorder?: boolean;
  handleChange: Function;
}

interface ISelectQuality {
  qualitySelected: QUALITY;
  handleChangeQuality: Function;
}

interface ISelectConsistency {
  consistencySelected: CONSISTENCY;
  handleChangeConsistency: Function;
}

interface ISelectColor {
  colorSelected: COLOR;
  handleChangeColor: Function;
}

interface ISelectHasBlood {
  hasBlood: boolean;
  handleChangeHasBlood: Function;
}

interface ISelectIsConspicuous {
  isConspicuous: boolean;
  handleChangeIsConspicuous: Function;
}

interface ISelectDate {
  date: Date;
  handleChangeDate: Function;
}

interface ISelectTime {
  time: Date;
  handleChangeTime: Function;
}

interface ISelectAdditionalInformation {
  additionalInformation: string;
  handleAdditionalInformationChange: Function;
}

const _createListItem = ({
  item,
  itemSelected,
  label,
  noBorder,
  handleChange,
}: IListItem) => (
  <ListItem
    selected={itemSelected === item}
    onPress={() => {
      handleChange(item);
    }}
    noBorder={noBorder}
  >
    <Left>
      <Text>{label}</Text>
    </Left>
    <Right>
      <Radio selectedColor={'#5cb85c'} selected={itemSelected === item} />
    </Right>
  </ListItem>
);

export const createSelectQuality = ({
  qualitySelected,
  handleChangeQuality,
}: ISelectQuality) => (
  <Item>
    <Label style={{ minWidth: 100 }}>Qualität:</Label>
    <Content>
      {_createListItem({
        item: QUALITY.GOOD,
        itemSelected: qualitySelected,
        label: 'gut',
        handleChange: handleChangeQuality,
      })}
      {_createListItem({
        item: QUALITY.MEDIUM,
        itemSelected: qualitySelected,
        label: 'mäßig',
        handleChange: handleChangeQuality,
      })}
      {_createListItem({
        item: QUALITY.BAD,
        itemSelected: qualitySelected,
        label: 'schlecht',
        noBorder: true,
        handleChange: handleChangeQuality,
      })}
    </Content>
  </Item>
);

export const createSelectConsistency = ({
  consistencySelected,
  handleChangeConsistency,
}: ISelectConsistency) => (
  <Item>
    <Label style={{ minWidth: 100 }}>Konsistenz:</Label>
    <Content>
      {_createListItem({
        item: CONSISTENCY.LIQUID,
        itemSelected: consistencySelected,
        label: 'flüssig',
        handleChange: handleChangeConsistency,
      })}
      {_createListItem({
        item: CONSISTENCY.SOFT,
        itemSelected: consistencySelected,
        label: 'weich',
        handleChange: handleChangeConsistency,
      })}
      {_createListItem({
        item: CONSISTENCY.NORMAL,
        itemSelected: consistencySelected,
        label: 'normal',
        handleChange: handleChangeConsistency,
      })}
      {_createListItem({
        item: CONSISTENCY.HARD,
        itemSelected: consistencySelected,
        label: 'hart',
        handleChange: handleChangeConsistency,
      })}
    </Content>
  </Item>
);

export const createSelectColor = ({
  colorSelected,
  handleChangeColor,
}: ISelectColor) => (
  <Item>
    <Label style={{ minWidth: 100 }}>Farbe:</Label>
    <Content>
      {_createListItem({
        item: COLOR.LIGHT,
        itemSelected: colorSelected,
        label: 'hell',
        handleChange: handleChangeColor,
      })}
      {_createListItem({
        item: COLOR.MEDIUM,
        itemSelected: colorSelected,
        label: 'normal',
        handleChange: handleChangeColor,
      })}
      {_createListItem({
        item: COLOR.DARK,
        itemSelected: colorSelected,
        label: 'dunkel',
        handleChange: handleChangeColor,
      })}
      {_createListItem({
        item: COLOR.BLACK,
        itemSelected: colorSelected,
        label: 'schwarz',
        handleChange: handleChangeColor,
      })}
      {_createListItem({
        item: COLOR.OTHER,
        itemSelected: colorSelected,
        label: 'andere Farbe',
        handleChange: handleChangeColor,
      })}
    </Content>
  </Item>
);

export const createSelectHasBlood = ({
  hasBlood,
  handleChangeHasBlood,
}: ISelectHasBlood) => (
  <Content>
    <ListItem>
      <CheckBox
        checked={hasBlood}
        onPress={() => handleChangeHasBlood(!hasBlood)}
      />
      <Body style={{ alignItems: 'flex-start' }}>
        <Text>Blut im Stuhl</Text>
      </Body>
    </ListItem>
  </Content>
);

export const createSelectIsConspicuous = ({
  isConspicuous,
  handleChangeIsConspicuous,
}: ISelectIsConspicuous) => (
  <Content>
    <ListItem>
      <CheckBox
        checked={isConspicuous}
        onPress={() => handleChangeIsConspicuous(!isConspicuous)}
      />
      <Body style={{ alignItems: 'flex-start' }}>
        <Text>Stuhl ist auffällig</Text>
      </Body>
    </ListItem>
  </Content>
);

export const createSelectDate = ({ date, handleChangeDate }: ISelectDate) => (
  <Item>
    <Label>Tag:</Label>
    <DatePicker
      mode="date"
      format="DD.MM.YYYY"
      confirmBtnText="OK"
      cancelBtnText="Abbrechen"
      date={date}
      onDateChange={(_dateString, changedDate: Date) =>
        handleChangeDate(changedDate)
      }
      showIcon={false}
      customStyles={{
        dateInput: {
          borderWidth: 0,
          padding: 5,
          alignItems: 'flex-start',
        },
      }}
    />
  </Item>
);

export const createSelectTime = ({ time, handleChangeTime }: ISelectTime) => (
  <Item>
    <Label>Uhrzeit:</Label>
    <DatePicker
      mode="time"
      format="HH:mm \U\h\r"
      confirmBtnText="OK"
      cancelBtnText="Abbrechen"
      date={time}
      onDateChange={(_dateString, changedDate: Date) =>
        handleChangeTime(changedDate)
      }
      showIcon={false}
      customStyles={{
        dateInput: {
          borderWidth: 0,
          padding: 5,
          alignItems: 'flex-start',
        },
      }}
      is24Hour
    />
  </Item>
);

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
