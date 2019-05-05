import React, { PureComponent, ReactElement } from 'react';
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

class AddressBookEditContainer extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onDeleteConfirmation = this.onDeleteConfirmation.bind(this);
    this.onHandleSave = this.onHandleSave.bind(this);
  }

  componentDidMount(): void {
    const { navigation } = this.props;

    navigation.setParams({
      onDelete: this.onDeleteConfirmation,
    });
  }

  onDeleteConfirmation(): void {
    Alert.alert(
      'Löschen',
      'Soll diese Adresse wirklich gelöscht werden?',
      [
        { text: 'Ja', onPress: (): void => this.onDelete() },
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  onHandleSave(address: AddressBookEntry): void {
    const {
      address: currentAddress,
      updateAddress: update,
      navigation,
    } = this.props;

    update({
      currentAddress,
      newAddress: address,
    });

    navigation.goBack();
  }

  onDelete(): void {
    const { address, navigation, removeAddress: remove } = this.props;

    remove(address);

    navigation.popToTop();
  }

  render(): ReactElement {
    const { navigation, address, setAddressToEdit: onEditAddress } = this.props;

    return (
      <AddressBookEdit
        address={address}
        navigation={navigation}
        onSave={this.onHandleSave}
        onEditAddress={onEditAddress}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  address: currentEditItemSelector,
});

const mapDispatchToProps = { removeAddress, updateAddress, setAddressToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookEditContainer);
