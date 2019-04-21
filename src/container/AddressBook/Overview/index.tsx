import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import AddressBookOverview from 'stories/screens/AddressBook/Overview';
import { itemsSelector } from '../selectors';
import { setAddressToDetails, setAddressToEdit } from '../actions';

interface Props {
  navigation: TNavigation;
  addresses: IAddressBookEntry[];
  removeAddress: Function;
  setAddressToDetails: Function;
  setAddressToEdit: Function;
}

interface State {}

class AddressBookOverviewContainer extends Component<Props, State> {
  render() {
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
