import React, { PureComponent } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { IAddressBookEntry } from 'container/AddressBook/types';
import AddressBookEdit from 'stories/screens/AddressBook/Edit';
import { currentEditItemSelector } from '../selectors';
import { removeAddress, updateAddress, setAddressToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  address: IAddressBookEntry;
  removeAddress: Function;
  updateAddress: Function;
  setAddressToEdit: Function;
}

interface State {}

class AddressBookEditContainer extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onDeleteConfirmation = this.onDeleteConfirmation.bind(this);
    this.onHandleSave = this.onHandleSave.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setParams({
      onDelete: this.onDeleteConfirmation,
    });
  }

  onDeleteConfirmation() {
    Alert.alert(
      'Löschen',
      'Soll diese Adresse wirklich gelöscht werden?',
      [
        { text: 'Ja', onPress: () => this.onDelete() },
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  onHandleSave(address: IAddressBookEntry) {
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

  onDelete() {
    const { address, navigation, removeAddress: remove } = this.props;

    remove(address);

    navigation.popToTop();
  }

  render() {
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
