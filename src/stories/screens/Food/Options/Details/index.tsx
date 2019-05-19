import React, { ReactElement, FunctionComponent } from 'react';
import {
  Screen,
  NavigationBar,
  Icon,
  Title,
  Image,
  View,
  Heading,
  Subtitle,
  Text,
} from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { FoodOption } from 'container/Food/Options/types';
import { AddressBookEntry } from 'container/AddressBook/types';
import { TYPES, VENDORS } from 'container/Food/Options/constants';

interface Props {
  navigation: Navigation;
  option: FoodOption;
  vendor: AddressBookEntry;
  onEdit: Function;
}

const OptionsDetails: FunctionComponent<Props> = ({
  navigation,
  option,
  vendor: vendorFromAddressBook,
  onEdit,
}: Props): ReactElement => {
  const { picture, name, type, date, vendor, vendorId } = option;

  const renderPicture = () =>
    picture ? (
      <View styleName="md-gutter-top">
        <Image
          styleName="large"
          style={{ maxWidth: '100%' }}
          source={{ uri: picture }}
        />
      </View>
    ) : (
      undefined
    );

  const getFormattedDate = (): string => {
    const dateObject = new Date(date);
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(dateObject.getDate())}.${enforceTwoDigits(
      dateObject.getMonth() + 1,
    )}.${dateObject.getFullYear()}`;
  };

  const getVendor = (): string =>
    vendor !== 'SELF_MADE' && vendorId
      ? vendorFromAddressBook.name
      : VENDORS.find(currentVendor => currentVendor.value === vendor).title;

  return (
    <Screen>
      <NavigationBar
        leftComponent={
          <Icon name="back" onPress={(): boolean => navigation.goBack()} />
        }
        rightComponent={
          <Icon
            name="edit"
            onPress={(): void => {
              onEdit(option.id);
              navigation.navigate('FoodOptionsEdit');
            }}
          />
        }
        title="Details"
        styleName="inline"
      />
      <StandardView>
        <Heading>{name}</Heading>
        <Title>
          {TYPES.find(currentType => currentType.value === type).title}
        </Title>

        <Subtitle styleName="md-gutter-top">Datum</Subtitle>
        <Text>{getFormattedDate()}</Text>

        <Subtitle styleName="md-gutter-top">Hersteller/Verkäufer</Subtitle>
        <Text>{getVendor()}</Text>

        {renderPicture()}
      </StandardView>
    </Screen>
  );
};

export default OptionsDetails;
