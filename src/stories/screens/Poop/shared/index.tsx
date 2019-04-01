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

import { QUALITY, CONSISTENCY, COLOR } from 'apptypes/poop';

interface IListItem {
  item: QUALITY | CONSISTENCY | COLOR;
  itemSelected: QUALITY | CONSISTENCY | COLOR;
  label: string;
  noBorder?: boolean;
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

const _createListItem = ({
  item,
  itemSelected,
  label,
  noBorder,
  handleChangeQuality,
}: IListItem) => (
  <ListItem
    selected={itemSelected === item}
    onPress={() => {
      handleChangeQuality(item);
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
    <Label>Qualität:</Label>
    <Content>
      {_createListItem({
        item: QUALITY.GOOD,
        itemSelected: qualitySelected,
        label: 'gut',
        handleChangeQuality,
      })}
      {_createListItem({
        item: QUALITY.MEDIUM,
        itemSelected: qualitySelected,
        label: 'mäßig',
        handleChangeQuality,
      })}
      {_createListItem({
        item: QUALITY.BAD,
        itemSelected: qualitySelected,
        label: 'schlecht',
        noBorder: true,
        handleChangeQuality,
      })}
    </Content>
  </Item>
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
