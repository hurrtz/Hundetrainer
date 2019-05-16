import React, { ReactElement, FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AddressBookEntry } from 'container/AddressBook/types';
import AddressBookOverview from 'stories/screens/AddressBook/Overview';
import { itemsSelector } from '../selectors';
import {
  setAddressToDetails,
  setAddressToEdit,
  migrateAddressBook,
} from '../actions';

interface Props {
  navigation: Navigation;
  addresses: AddressBookEntry[];
  removeAddress: Function;
  setAddressToDetails: Function;
  setAddressToEdit: Function;
  migrateAddressBook: Function;
}

const AddressBookOverviewContainer: FunctionComponent<Props> = ({
  navigation,
  addresses,
  setAddressToDetails: onShowDetails,
  setAddressToEdit: onEditPoop,
  migrateAddressBook: migrate,
}: Props): ReactElement => {
  useEffect(() => {
    migrate();
  }, []);

  return (
    <AddressBookOverview
      addresses={addresses}
      navigation={navigation}
      onShowDetails={onShowDetails}
      onEditPoop={onEditPoop}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  addresses: itemsSelector,
});

const mapDispatchToProps = {
  setAddressToDetails,
  setAddressToEdit,
  migrateAddressBook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookOverviewContainer);
