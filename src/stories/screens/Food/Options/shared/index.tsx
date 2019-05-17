import React, { ReactElement } from 'react';
import { Screen, TextInput, View, DropDownMenu } from '@shoutem/ui';
import DatePicker from 'react-native-datepicker';

export const createSelectName = (
  value: String,
  onChange: Function,
): ReactElement => (
  <Screen>
    <TextInput
      placeholder="Name"
      defaultValue={value}
      onChangeText={(text: string): void => onChange(text)}
    />
  </Screen>
);

export const createSelectDate = (
  value: Date,
  onChange: Function,
): ReactElement => (
  <View styleName="content horizontal v-center">
    <DatePicker
      mode="date"
      format="DD.MM.YYYY"
      confirmBtnText="OK"
      cancelBtnText="Abbrechen"
      date={value}
      onDateChange={(_dateString, changedDate: Date): void =>
        onChange(changedDate)
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

export const createSelectDropdown = (
  values: any[],
  valueSelected: any,
  onChange: Function,
): ReactElement => (
  <DropDownMenu
    options={values}
    selectedOption={valueSelected}
    onOptionSelected={({ value }: any): void => onChange(value)}
    titleProperty="title"
    valueProperty="value"
    styleName="horizontal"
    style={{ selectedOption: { height: 100 } }}
  />
);
