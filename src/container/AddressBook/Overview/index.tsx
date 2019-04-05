import React, { Component } from 'react';

import { Drawer, Add } from 'ui/HeaderButtons';
import { TNavigation, INavigation } from 'apptypes/base';
import AddressBookOverview from 'stories/screens/AddressBook/Overview';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookOverviewContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }: INavigation) => ({
    title: 'Adressen',
    headerLeft: (
      <Drawer
        style={{ marginLeft: 10 }}
        onPress={() => navigation.openDrawer()}
      />
    ),
    headerRight: (
      <Add
        style={{ marginRight: 10 }}
        onPress={() => navigation.push('AddressBookAdd')}
      />
    ),
  });

  render() {
    const { navigation } = this.props;

    return <AddressBookOverview navigation={navigation} />;
  }
}

export default AddressBookOverviewContainer;
