import React, {
  ReactElement,
  FunctionComponent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  Screen,
  NavigationBar,
  Icon,
  Caption,
  Divider,
  View,
  Text,
  Button,
} from '@shoutem/ui';

import { FoodOption } from 'container/Food/Options/types';
import { TYPES, VENDORS } from 'container/Food/Options/constants';
import { StandardView } from 'ui/Layout';
import {
  createSelectName,
  createSelectDate,
  createSelectType,
  createSelectVendor,
} from '../shared';

interface Props {
  navigation: Navigation;
  createOption: Function;
}

const OptionsAdd: FunctionComponent<Props> = ({
  navigation,
  createOption: onSave,
}: Props): ReactElement => {
  const now = new Date();

  const [name, setName]: [
    FoodOption['name'],
    Dispatch<SetStateAction<FoodOption['name']>>
  ] = useState('');
  const [date, setDate]: [
    FoodOption['date'],
    Dispatch<SetStateAction<FoodOption['date']>>
  ] = useState(now);
  const [type, setType]: [
    FoodOption['type'],
    Dispatch<SetStateAction<FoodOption['type']>>
  ] = useState('BARF');
  const [vendor, setVendor]: [
    FoodOption['vendor'],
    Dispatch<SetStateAction<FoodOption['vendor']>>
  ] = useState('FROM_ADDRESS_BOOK');

  const handleChangeName = (value: FoodOption['name']): void => setName(value);
  const handleChangeDate = (value: FoodOption['date']): void => setDate(value);
  const handleChangeType = (value: FoodOption['type']): void => setType(value);
  const handleChangeVendor = (value: FoodOption['vendor']): void =>
    setVendor(value);
  const handleClose = (): void =>
    onSave({
      date: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0,
        0,
        0,
        0,
      ).toISOString(),
      name,
      type,
      vendor,
    });

  return (
    <Screen>
      <NavigationBar
        leftComponent={
          <Icon name="back" onPress={(): boolean => navigation.goBack()} />
        }
        title="anlegen"
        styleName="inline"
      />
      <StandardView>
        {createSelectName(name, handleChangeName)}

        <Divider styleName="section-header">
          <Caption>Foto</Caption>
        </Divider>

        <Divider styleName="section-header">
          <Caption>Kauf- / Herstellungsdatum</Caption>
        </Divider>

        {createSelectDate(date, handleChangeDate)}

        <Divider styleName="section-header">
          <Caption>Typ</Caption>
        </Divider>

        <View styleName="md-gutter-top">
          {createSelectType(
            TYPES,
            TYPES.find(({ value }): boolean => value === type),
            handleChangeType,
          )}
        </View>

        <Divider styleName="section-header">
          <Caption>Hersteller/Verkäufer</Caption>
        </Divider>

        <View styleName="md-gutter-top">
          {createSelectVendor(
            VENDORS,
            VENDORS.find(({ value }): boolean => value === vendor),
            handleChangeVendor,
          )}
        </View>

        <Button
          styleName="secondary lg-gutter-top xl-gutter-bottom"
          onPress={(): void => handleClose()}
        >
          <Text>Speichern</Text>
        </Button>
      </StandardView>
    </Screen>
  );
};

export default OptionsAdd;
