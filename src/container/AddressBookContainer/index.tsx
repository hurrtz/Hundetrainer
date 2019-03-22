import React, { Component } from 'react';

import AddressBook from 'stories/screens/AddressBook';

export interface Props {
  navigation: any;
}

export interface State {}

class AddressBookContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <AddressBook navigation={navigation} />;
  }
}

export default AddressBookContainer;
