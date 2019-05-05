import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import { AddressBookEntry } from 'container/AddressBook/types';
import { currentDetailItemSelector } from 'container/AddressBook/selectors';
import AddressBookDetails from 'stories/screens/AddressBook/Details';
import { setAddressToDetails, setAddressToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  address: AddressBookEntry;
  setAddressToDetails: Function;
  setAddressToEdit: Function;
}

const AddressBookDetailsContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  address,
  setAddressToDetails: onDetailsAddress,
  setAddressToEdit: onEditAddress,
}: Props): ReactElement =>
  address && (
    <AddressBookDetails
      navigation={navigation}
      address={address}
      onDetailsAddress={onDetailsAddress}
      onEditAddress={onEditAddress}
    />
  );

AddressBookDetailsContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="notebook" size={25} />,
};

const mapStateToProps = createStructuredSelector({
  address: currentDetailItemSelector,
});

const mapDispatchToProps = { setAddressToDetails, setAddressToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookDetailsContainer);
