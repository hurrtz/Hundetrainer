import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';
import AddressBookDetails from 'stories/screens/AddressBook/Details';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookDetailsContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="notebook" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <AddressBookDetails navigation={navigation} />;
  }
}

export default AddressBookDetailsContainer;
