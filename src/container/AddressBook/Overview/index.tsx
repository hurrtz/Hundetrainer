import React, { Component } from 'react';

import { TNavigation } from 'apptypes/base';
import AddressBookOverview from 'stories/screens/AddressBook/Overview';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookOverviewContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <AddressBookOverview navigation={navigation} />;
  }
}

export default AddressBookOverviewContainer;
