import React, { PureComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AddressBookEntry } from 'container/AddressBook/types';
import AddressBookOverview from 'stories/screens/AddressBook/Overview';
import { itemsSelector } from '../selectors';
import { setAddressToDetails, setAddressToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  addresses: AddressBookEntry[];
  removeAddress: Function;
  setAddressToDetails: Function;
  setAddressToEdit: Function;
}

class AddressBookOverviewContainer extends PureComponent<Props> {
  render(): ReactElement {
    const {
      navigation,
      addresses,
      setAddressToDetails: onShowDetails,
      setAddressToEdit: onEditPoop,
    } = this.props;

    return (
      <AddressBookOverview
        addresses={addresses}
        navigation={navigation}
        onShowDetails={onShowDetails}
        onEditPoop={onEditPoop}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addresses: itemsSelector,
});

const mapDispatchToProps = { setAddressToDetails, setAddressToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookOverviewContainer);
