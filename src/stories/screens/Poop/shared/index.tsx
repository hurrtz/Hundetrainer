import React, { Fragment } from 'react';
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
} from 'native-base';
import DatePicker from 'react-native-datepicker';

import { QUALITY } from 'apptypes/poop';

interface IListQualityItem {
  quality: QUALITY;
  qualitySelected: QUALITY;
  label: string;
  noBorder?: boolean;
  handleChangeQuality: Function;
}

interface IListQuality {
  qualitySelected: QUALITY;
  handleChangeQuality: Function;
}

interface ISelectQuality {
  qualitySelected: QUALITY;
  handleChangeQuality: Function;
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

function _createListQualityItem({
  quality,
  qualitySelected,
  label,
  noBorder,
  handleChangeQuality,
}: IListQualityItem) {
  return (
    <ListItem
      selected={qualitySelected === quality}
      onPress={() => {
        handleChangeQuality(quality);
      }}
      noBorder={noBorder}
    >
      <Left>
        <Text>{label}</Text>
      </Left>
      <Right>
        <Radio
          selectedColor={'#5cb85c'}
          selected={qualitySelected === quality}
        />
      </Right>
    </ListItem>
  );
}

function _createListQuality({
  qualitySelected,
  handleChangeQuality,
}: IListQuality) {
  return (
    <Fragment>
      {_createListQualityItem({
        quality: QUALITY.GOOD,
        qualitySelected,
        label: 'gut',
        handleChangeQuality,
      })}
      {_createListQualityItem({
        quality: QUALITY.MEDIUM,
        qualitySelected,
        label: 'mäßig',
        handleChangeQuality,
      })}
      {_createListQualityItem({
        quality: QUALITY.BAD,
        qualitySelected,
        label: 'schlecht',
        noBorder: true,
        handleChangeQuality,
      })}
    </Fragment>
  );
}

export function createSelectQuality({
  qualitySelected,
  handleChangeQuality,
}: ISelectQuality) {
  return (
    <Item>
      <Label>Qualität:</Label>
      <Content>
        {_createListQuality({ qualitySelected, handleChangeQuality })}
      </Content>
    </Item>
  );
}

export function createSelectDate({ date, handleChangeDate }: ISelectDate) {
  return (
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
}

export function createSelectTime({ time, handleChangeTime }: ISelectTime) {
  return (
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
}

export function createSelectAdditionalInformation({
  additionalInformation,
  handleAdditionalInformationChange,
}: ISelectAdditionalInformation) {
  return (
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
}
