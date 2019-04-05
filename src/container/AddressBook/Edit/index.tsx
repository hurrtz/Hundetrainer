import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';
import AddressBookEdit from 'stories/screens/AddressBook/Edit';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookEditContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="notebook" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <AddressBookEdit navigation={navigation} />;
  }
}

export default AddressBookEditContainer;
