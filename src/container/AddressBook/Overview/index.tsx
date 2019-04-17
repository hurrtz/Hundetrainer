import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import AddressBookOverview from 'stories/screens/AddressBook/Overview';
import { itemsSelector } from '../selectors';

interface Props {
  navigation: TNavigation;
  addresses: IAddressBookEntry[];
  removeAddress: Function;
}

interface State {}

class AddressBookOverviewContainer extends Component<Props, State> {
  render() {
    const { navigation, addresses } = this.props;

    return (
      <AddressBookOverview addresses={addresses} navigation={navigation} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addresses: itemsSelector,
});

export default connect(mapStateToProps)(AddressBookOverviewContainer);
