import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import AddressBookEdit from 'stories/screens/AddressBook/Edit';
import { removeAddress, updateAddress } from '../actions';

interface Props {
  navigation: TNavigation;
  removeAddress: Function;
  updateAddress: Function;
}

interface State {}

class AddressBookEditContainer extends Component<Props, State> {
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
    const { updateAddress: update, navigation } = this.props;

    update({
      currentAddress: navigation.getParam('address'),
      newAddress: address,
    });

    navigation.pop(2);
  }

  onDelete() {
    const { navigation, removeAddress: remove } = this.props;
    const addressToDelete = navigation.getParam('address') as IAddressBookEntry;

    remove(addressToDelete);

    navigation.pop(2);
  }

  render() {
    const { navigation } = this.props;
    const address = navigation.getParam('address') as IAddressBookEntry;

    return (
      <AddressBookEdit
        address={address}
        navigation={navigation}
        onSave={this.onHandleSave}
      />
    );
  }
}

const mapDispatchToProps = { removeAddress, updateAddress };

export default connect(
  undefined,
  mapDispatchToProps,
)(AddressBookEditContainer);
