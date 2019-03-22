import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import AddressBook from 'stories/screens/AddressBook';

interface Props {
  navigation: any;
}

interface State {}

class AddressBookContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="notebook" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <AddressBook navigation={navigation} />;
  }
}

export default AddressBookContainer;
