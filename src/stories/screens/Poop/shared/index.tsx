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

type TQuality = {
  title: string;
  value: QUALITY;
};

interface ISelectQuality {
  qualities: TQuality[];
  qualitySelected: TQuality;
  handleChangeQuality: Function;
}

type TConsistency = {
  title: string;
  value: CONSISTENCY;
};

interface ISelectConsistency {
  consistencies: TConsistency[];
  consistencySelected: TConsistency;
  handleChangeConsistency: Function;
}

type TColor = {
  title: string;
  value: COLOR;
};

interface ISelectColor {
  colors: TColor[];
  colorSelected: TColor;
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

export const createSelectQuality = ({
  qualities,
  qualitySelected,
  handleChangeQuality,
}: ISelectQuality) => (
  <DropDownMenu
    options={qualities}
    selectedOption={qualitySelected}
    onOptionSelected={option => handleChangeQuality(option)}
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
  />
);

export const createSelectConsistency = ({
  consistencies,
  consistencySelected,
  handleChangeConsistency,
}: ISelectConsistency) => (
  <DropDownMenu
    options={consistencies}
    selectedOption={consistencySelected}
    onOptionSelected={option => handleChangeConsistency(option)}
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
  />
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
