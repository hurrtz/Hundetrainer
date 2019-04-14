import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';
import AddressBookAdd from 'stories/screens/AddressBook/Add';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookAddContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="notebook" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <AddressBookAdd navigation={navigation} />;
  }
}

export default AddressBookAddContainer;
