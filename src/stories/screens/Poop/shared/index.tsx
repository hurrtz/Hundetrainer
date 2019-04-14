import React from 'react';
import {
  Screen,
  Text,
  TextInput,
  Switch,
  View,
  DropDownMenu,
} from '@shoutem/ui';
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
  colors: [
    {
      title: string;
      value: COLOR;
    }
  ];
  colorSelected: {
    title: string;
    value: COLOR;
  };
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
  <View
    styleName="content"
    selected={itemSelected === item}
    onPress={() => {
      handleChange(item);
    }}
    noBorder={noBorder}
  >
    <Text>{label}</Text>
    <Switch value={itemSelected === item} />
  </View>
);

export const createSelectQuality = ({
  qualitySelected,
  handleChangeQuality,
}: ISelectQuality) => (
  <View style="content">
    <Text>Qualität:</Text>
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
  </View>
);

export const createSelectConsistency = ({
  consistencySelected,
  handleChangeConsistency,
}: ISelectConsistency) => (
  <View styleName="content">
    <Text>Konsistenz:</Text>
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
  </View>
);

export const createSelectColor = ({
  colors,
  colorSelected,
  handleChangeColor,
}: ISelectColor) => (
  <DropDownMenu
    options={colors}
    selectedOption={colorSelected}
    onOptionSelected={option => handleChangeColor(option)}
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
  />
);

export const createSelectHasBlood = ({
  hasBlood,
  handleChangeHasBlood,
}: ISelectHasBlood) => (
  <View styleName="content horizontal v-center">
    <Switch
      value={hasBlood}
      onValueChange={(value: boolean) => handleChangeHasBlood(value)}
    />
    <Text style={{ marginLeft: 10 }}>Blut im Stuhl</Text>
  </View>
);

export const createSelectIsConspicuous = ({
  isConspicuous,
  handleChangeIsConspicuous,
}: ISelectIsConspicuous) => (
  <View styleName="content horizontal v-center">
    <Switch
      value={isConspicuous}
      onValueChange={(value: boolean) => handleChangeIsConspicuous(value)}
    />
    <Text style={{ marginLeft: 10 }}>Stuhl ist auffällig</Text>
  </View>
);

export const createSelectDate = ({ date, handleChangeDate }: ISelectDate) => (
  <View styleName="content horizontal v-center">
    <Text>Tag:</Text>
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
  </View>
);

export const createSelectTime = ({ time, handleChangeTime }: ISelectTime) => (
  <View styleName="content horizontal v-center">
    <Text>Uhrzeit:</Text>
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
