import React, { ReactElement, FunctionComponent, useEffect } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AddressBookEntry } from 'container/AddressBook/types';
import AddressBookEdit from 'stories/screens/AddressBook/Edit';
import { currentEditItemSelector } from '../selectors';
import { removeAddress, updateAddress, setAddressToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  address: AddressBookEntry;
  removeAddress: Function;
  updateAddress: Function;
  setAddressToEdit: Function;
}

const AddressBookEditContainer: FunctionComponent<Props> = ({
  navigation,
  address,
  setAddressToEdit: onEditAddress,
  removeAddress: remove,
}: Props): ReactElement => {
  const onDelete = (): void => {
    remove(address);

    navigation.popToTop();
  };

  const onDeleteConfirmation = (): void => {
    Alert.alert(
      'Löschen',
      'Soll diese Adresse wirklich gelöscht werden?',
      [
        { text: 'Ja', onPress: (): void => onDelete() },
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };

  const onHandleSave = (newAddress: AddressBookEntry): void => {
    updateAddress({
      currentAddress: address,
      newAddress,
    });

    navigation.goBack();
  };

  useEffect((): void => {
    navigation.setParams({
      onDelete: onDeleteConfirmation,
    });
  }, []);

  return (
    <AddressBookEdit
      address={address}
      navigation={navigation}
      onSave={onHandleSave}
      onEditAddress={onEditAddress}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  address: currentEditItemSelector,
});

const mapDispatchToProps = { removeAddress, updateAddress, setAddressToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookEditContainer);
