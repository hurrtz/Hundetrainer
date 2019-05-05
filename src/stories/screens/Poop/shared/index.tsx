import React, { ReactElement } from 'react';
import {
  Screen,
  Text,
  TextInput,
  Switch,
  View,
  DropDownMenu,
} from '@shoutem/ui';
import DatePicker from 'react-native-datepicker';

import { QUALITY, CONSISTENCY, COLOR } from 'container/Poop/types';

interface Quality {
  title: string;
  value: QUALITY;
}

interface SelectQuality {
  qualities: Quality[];
  qualitySelected: Quality;
  handleChangeQuality: Function;
}

interface Consistency {
  title: string;
  value: CONSISTENCY;
}

interface SelectConsistency {
  consistencies: Consistency[];
  consistencySelected: Consistency;
  handleChangeConsistency: Function;
}

interface Color {
  title: string;
  value: COLOR;
}

interface SelectColor {
  colors: Color[];
  colorSelected: Color;
  handleChangeColor: Function;
}

interface SelectHasBlood {
  hasBlood: boolean;
  handleChangeHasBlood: Function;
}

interface SelectIsConspicuous {
  isConspicuous: boolean;
  handleChangeIsConspicuous: Function;
}

interface SelectDate {
  date: Date;
  handleChangeDate: Function;
}

interface SelectTime {
  time: Date;
  handleChangeTime: Function;
}

interface SelectAdditionalInformation {
  additionalInformation: string;
  handleAdditionalInformationChange: Function;
}

export const createSelectQuality = ({
  qualities,
  qualitySelected,
  handleChangeQuality,
}: SelectQuality): ReactElement => (
  <DropDownMenu
    options={qualities}
    selectedOption={qualitySelected}
    onOptionSelected={(option: Quality): void => handleChangeQuality(option)}
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
    style={{ selectedOption: { height: 100 } }}
  />
);

export const createSelectConsistency = ({
  consistencies,
  consistencySelected,
  handleChangeConsistency,
}: SelectConsistency): ReactElement => (
  <DropDownMenu
    options={consistencies}
    selectedOption={consistencySelected}
    onOptionSelected={(option: Consistency): void =>
      handleChangeConsistency(option)
    }
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
    style={{ selectedOption: { height: 100 } }}
  />
);

export const createSelectColor = ({
  colors,
  colorSelected,
  handleChangeColor,
}: SelectColor): ReactElement => (
  <DropDownMenu
    options={colors}
    selectedOption={colorSelected}
    onOptionSelected={(option: Color): void => handleChangeColor(option)}
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
    style={{ selectedOption: { height: 100 } }}
  />
);

export const createSelectHasBlood = ({
  hasBlood,
  handleChangeHasBlood,
}: SelectHasBlood): ReactElement => (
  <View styleName="content horizontal v-center">
    <Switch
      value={hasBlood}
      onValueChange={(value: boolean): void => handleChangeHasBlood(value)}
    />
    <Text style={{ marginLeft: 10 }}>Blut im Stuhl</Text>
  </View>
);

export const createSelectIsConspicuous = ({
  isConspicuous,
  handleChangeIsConspicuous,
}: SelectIsConspicuous): ReactElement => (
  <View styleName="content horizontal v-center">
    <Switch
      value={isConspicuous}
      onValueChange={(value: boolean): void => handleChangeIsConspicuous(value)}
    />
    <Text style={{ marginLeft: 10 }}>Stuhl ist auffällig</Text>
  </View>
);

export const createSelectDate = ({
  date,
  handleChangeDate,
}: SelectDate): ReactElement => (
  <View styleName="content horizontal v-center">
    <Text>Tag:</Text>
    <DatePicker
      mode="date"
      format="DD.MM.YYYY"
      confirmBtnText="OK"
      cancelBtnText="Abbrechen"
      date={date}
      onDateChange={(_dateString, changedDate: Date): void =>
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

export const createSelectTime = ({
  time,
  handleChangeTime,
}: SelectTime): ReactElement => (
  <View styleName="content horizontal v-center">
    <Text>Uhrzeit:</Text>
    <DatePicker
      mode="time"
      format="HH:mm \U\h\r"
      confirmBtnText="OK"
      cancelBtnText="Abbrechen"
      date={time}
      onDateChange={(_dateString, changedDate: Date): void =>
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
}: SelectAdditionalInformation): ReactElement => (
  <Screen>
    <TextInput
      multiline
      numberOfLines={5}
      placeholder="Sonstige Informationen"
      defaultValue={additionalInformation}
      onChangeText={(text: string): void =>
        handleAdditionalInformationChange(text)
      }
      style={{ borderColor: '#888', borderWidth: 1, borderStyle: 'solid' }}
    />
  </Screen>
);
