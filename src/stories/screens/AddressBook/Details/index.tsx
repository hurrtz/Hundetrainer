import React, {
  ReactElement,
  FunctionComponent,
  useEffect,
  EffectCallback,
} from 'react';
import { View, NavigationBar, Icon, Title, Subtitle, Text } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { AddressBookEntry } from 'container/AddressBook/types';
import { AddressType, ADDRESS_TYPES } from 'container/AddressBook/constants';

interface Props {
  navigation: Navigation;
  address: AddressBookEntry;
  onDetailsAddress: Function;
  onEditAddress: Function;
}

const AddressBookDetails: FunctionComponent<Props> = ({
  navigation,
  address,
  onEditAddress,
  onDetailsAddress,
}: Props): ReactElement => {
  useEffect(
    (): EffectCallback => (): void => {
      onDetailsAddress({ id: undefined });
    },
    [],
  );

  const onGoingBack = (): void => {
    navigation.goBack();
  };

  return (
    <View>
      <NavigationBar
        leftComponent={<Icon name="back" onPress={onGoingBack} />}
        rightComponent={
          <Icon
            name="edit"
            onPress={(): void => {
              onEditAddress({ id: address.id });
              navigation.navigate('AddressBookEdit');
            }}
          />
        }
        title={address.name}
        styleName="inline"
      />
      <StandardView>
        <Title>{address.name}</Title>
        <Subtitle>
          {
            ADDRESS_TYPES.find(
              ({ value }: AddressType): boolean => value === address.type,
            ).title
          }
        </Subtitle>

        <Text styleName="lg-gutter-top">Straße: {address.address.street}</Text>
        <Text styleName="md-gutter-top">
          Postleitzahl: {address.address.zip}
        </Text>
        <Text styleName="md-gutter-top">Stadt: {address.address.city}</Text>
        <Text styleName="md-gutter-top">Land: {address.address.country}</Text>

        <Text styleName="lg-gutter-top">
          Telefon: {address.contact.telephone}
        </Text>
        <Text styleName="md-gutter-top">Mobil: {address.contact.mobile}</Text>
        <Text styleName="md-gutter-top">E-Mail: {address.contact.email}</Text>
        <Text styleName="md-gutter-top">
          Homepage: {address.contact.homepage}
        </Text>
      </StandardView>
    </View>
  );
};

export default AddressBookDetails;
