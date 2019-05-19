import React, {
  ReactElement,
  FunctionComponent,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  EffectCallback,
} from 'react';
import { Alert } from 'react-native';
import {
  Screen,
  NavigationBar,
  Icon,
  Divider,
  Caption,
  View,
  Text,
  Button,
  Image,
} from '@shoutem/ui';
import ImagePicker, {
  Image as ImageType,
} from 'react-native-image-crop-picker';

import { StandardView } from 'ui/Layout';
import { AddressBookEntry } from 'container/AddressBook/types';
import { FoodOption } from 'container/Food/Options/types';
import { TYPES, VENDORS } from 'container/Food/Options/constants';
import {
  createSelectName,
  createSelectDate,
  createSelectDropdown,
} from '../shared';

interface Props {
  navigation: Navigation;
  option: FoodOption;
  addresses: AddressBookEntry[];
  onSave: Function;
  onDelete: Function;
  onEdit: Function;
}

interface State extends FoodOption {
  vendorId: FoodOption['id'];
}

const OptionsEdit: FunctionComponent<Props> = ({
  navigation,
  option,
  addresses,
  onSave,
  onDelete,
  onEdit,
}: Props): ReactElement => {
  useEffect(
    (): EffectCallback => (): void => {
      onEdit(undefined);
    },
    [],
  );

  const [name, setName]: [
    FoodOption['name'],
    Dispatch<SetStateAction<State['name']>>
  ] = useState(option.name);
  const [picture, setPicture]: [
    FoodOption['picture'],
    Dispatch<SetStateAction<State['picture']>>
  ] = useState(option.picture);
  const [date, setDate]: [
    FoodOption['date'],
    Dispatch<SetStateAction<State['date']>>
  ] = useState(new Date(option.date));
  const [type, setType]: [
    FoodOption['type'],
    Dispatch<SetStateAction<State['type']>>
  ] = useState(option.type);
  const [vendor, setVendor]: [
    FoodOption['vendor'],
    Dispatch<SetStateAction<State['vendor']>>
  ] = useState(option.vendor);
  const [vendorId, setVendorId]: [
    FoodOption['vendorId'],
    Dispatch<SetStateAction<State['vendorId']>>
  ] = useState(option.vendorId);

  const handleChangeName = (value: State['name']): void => setName(value);
  const handleChangeDate = (value: State['date']): void => setDate(value);
  const handleChangeType = (value: State['type']): void => setType(value);
  const handleChangeVendor = (value: State['vendor']): void => {
    setVendor(value);
    setVendorId(value === 'SELF_MADE' ? undefined : vendorId);
  };
  const handleSave = (): void => {
    onSave(option, {
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
  const handleDelete = (): void => {
    onDelete(option.id);

    navigation.popToTop();
  };

  const confirmDelete = (): void => {
    Alert.alert(
      'Löschen',
      'Soll dieses Nahrungsmittel wirklich gelöscht werden?',
      [
        { text: 'Ja', onPress: (): void => handleDelete() },
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
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
      return (
        <Image
          styleName="large"
          style={{ maxWidth: '100%' }}
          source={{ uri: picture }}
        />
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
        rightComponent={
          // @ts-ignore
          <Icon name="close" onPress={confirmDelete} />
        }
        title="bearbeiten"
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
          onPress={(): void => handleSave()}
        >
          <Text>Speichern</Text>
        </Button>
      </StandardView>
    </Screen>
  );
};

export default OptionsEdit;
