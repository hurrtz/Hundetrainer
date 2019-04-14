import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import AddressBookOverview from 'container/AddressBook/Overview';
import AddressBookAdd from 'container/AddressBook/Add';
import AddressBookEdit from 'container/AddressBook/Edit';
import AddressBookDetails from 'container/AddressBook/Details';

const AddressBookNavigator = createStackNavigator(
  {
    AddressBookOverview: { screen: AddressBookOverview },
    AddressBookAdd: { screen: AddressBookAdd },
    AddressBookEdit: { screen: AddressBookEdit },
    AddressBookDetails: { screen: AddressBookDetails },
  },
  {
    initialRouteName: 'AddressBookOverview',
    headerMode: 'none',
  },
);

AddressBookNavigator.navigationOptions = {
  drawerIcon: () => <IconComponent name="notebook" size={25} />,
};

export default AddressBookNavigator;
