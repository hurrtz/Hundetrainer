import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import { currentDetailItemSelector } from 'container/AddressBook/selectors';
import AddressBookDetails from 'stories/screens/AddressBook/Details';
import { setAddressToDetails, setAddressToEdit } from '../actions';

interface Props {
  navigation: TNavigation;
  address: IAddressBookEntry;
  setAddressToDetails: Function;
  setAddressToEdit: Function;
}

interface State {}

class AddressBookDetailsContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="notebook" size={25} />,
  };

  render() {
    const {
      navigation,
      address,
      setAddressToDetails: onDetailsAddress,
      setAddressToEdit: onEditAddress,
    } = this.props;

    if (!address) {
      // tslint:disable-next-line no-null-keyword
      return null;
    }

    return (
      <AddressBookDetails
        navigation={navigation}
        address={address}
        onDetailsAddress={onDetailsAddress}
        onEditAddress={onEditAddress}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  address: currentDetailItemSelector,
});

const mapDispatchToProps = { setAddressToDetails, setAddressToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookDetailsContainer);
