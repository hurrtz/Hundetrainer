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
  Image,
} from '@shoutem/ui';
import ImagePicker, {
  Image as ImageType,
} from 'react-native-image-crop-picker';

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
  vendorId: FoodOption['id'];
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
  const [picture, setPicture]: [
    FoodOption['picture'],
    Dispatch<SetStateAction<State['picture']>>
  ] = useState(undefined);
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
  const [vendorId, setVendorId]: [
    FoodOption['vendorId'],
    Dispatch<SetStateAction<State['vendorId']>>
  ] = useState((addresses[0] || { id: undefined }).id);

  const handleChangeName = (value: State['name']): void => setName(value);
  const handleChangeDate = (value: State['date']): void => setDate(value);
  const handleChangeType = (value: State['type']): void => setType(value);
  const handleChangeVendor = (value: State['vendor']): void => setVendor(value);
  const handleClose = (): void => {
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
      vendorId,
      picture,
    });
    navigation.goBack();
  };
  const handleChangeSelectedOptionId = (value: State['vendorId']): void =>
    setVendorId(value);

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
        <View styleName="md-gutter-top content horizontal v-center space-between">
          {createSelectDropdown(
            addressesForDropdown,
            addressesForDropdown.find(
              ({ value }): boolean => value === vendorId,
            ) || addressesForDropdown[0],
            handleChangeSelectedOptionId,
          )}
        </View>
      );
    }

    return undefined;
  };

  const selectPicturesFromCameraRoll = () =>
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image: ImageType): void => setPicture(image.path));

  const renderImage = (): ReactElement => {
    if (picture) {
      return <Image styleName="large" source={{ uri: picture }} />;
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

        {renderImage()}

        <Button onPress={selectPicturesFromCameraRoll}>
          <Text>Foto auswählen</Text>
        </Button>

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
