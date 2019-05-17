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

import { AddressBookEntry } from 'container/AddressBook/types';
import { FoodOption } from 'container/Food/Options/types';
import { TYPES, VENDORS } from 'container/Food/Options/constants';
import { StandardView } from 'ui/Layout';
import {
  createSelectName,
  createSelectDate,
  createSelectDropdown,
} from '../shared';

interface Props {
  navigation: Navigation;
  createOption: Function;
  addresses: AddressBookEntry[];
}

interface State extends FoodOption {
  selectedOptionId: FoodOption['id'];
}

const OptionsAdd: FunctionComponent<Props> = ({
  navigation,
  createOption: onSave,
  addresses,
}: Props): ReactElement => {
  const now = new Date();

  const [name, setName]: [
    FoodOption['name'],
    Dispatch<SetStateAction<State['name']>>
  ] = useState('');
  const [date, setDate]: [
    FoodOption['date'],
    Dispatch<SetStateAction<State['date']>>
  ] = useState(now);
  const [type, setType]: [
    FoodOption['type'],
    Dispatch<SetStateAction<State['type']>>
  ] = useState('BARF');
  const [vendor, setVendor]: [
    FoodOption['vendor'],
    Dispatch<SetStateAction<State['vendor']>>
  ] = useState('FROM_ADDRESS_BOOK');
  const [selectedOptionId, setSelectedOptionId]: [
    FoodOption['selectedOptionId'],
    Dispatch<SetStateAction<State['selectedOptionId']>>
  ] = useState(undefined);

  const handleChangeName = (value: State['name']): void => setName(value);
  const handleChangeDate = (value: State['date']): void => setDate(value);
  const handleChangeType = (value: State['type']): void => setType(value);
  const handleChangeVendor = (value: State['vendor']): void => setVendor(value);
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
  const handleChangeSelectedOptionId = (
    value: State['selectedOptionId'],
  ): void => setSelectedOptionId(value);

  const renderSelectFromAddressBook = (): ReactElement => {
    if (vendor === 'FROM_ADDRESS_BOOK') {
      const addressesForDropdown = addresses.map(
        (address): { title: string; value: string } => ({
          title: address.name,
          value: address.id,
        }),
      );

      if (addresses.length === 0) {
        return (
          <View styleName="content horizontal v-center space-between">
            <Text>Noch keine Adressen angelegt.</Text>
            <Icon
              name="plus-button"
              onPress={(): boolean => navigation.push('AddressBookAdd')}
            />
          </View>
        );
      }

      return (
        <View styleName="md-gutter-top">
          {createSelectDropdown(
            addressesForDropdown,
            addressesForDropdown.find(
              ({ value }): boolean => value === selectedOptionId,
            ) || addressesForDropdown[0],
            handleChangeSelectedOptionId,
          )}
        </View>
      );
    }

    return undefined;
  };

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
          {createSelectDropdown(
            TYPES,
            TYPES.find(({ value }): boolean => value === type),
            handleChangeType,
          )}
        </View>

        <Divider styleName="section-header">
          <Caption>Hersteller/Verkäufer</Caption>
        </Divider>

        <View styleName="md-gutter-top">
          {createSelectDropdown(
            VENDORS,
            VENDORS.find(({ value }): boolean => value === vendor),
            handleChangeVendor,
          )}
        </View>

        {renderSelectFromAddressBook()}

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
