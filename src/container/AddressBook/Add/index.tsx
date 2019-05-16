import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { NavigationScreenComponent } from 'react-navigation';

import { AddressBookEntry } from 'container/AddressBook/types';
import AddressBookAdd from 'stories/screens/AddressBook/Add';
import { addAddress } from '../actions';

interface Props {
  navigation: Navigation;
  addAddress: Function;
}

const AddressBookAddContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  addAddress: add,
}: Props): ReactElement => {
  const onHandleSave = (address: AddressBookEntry): void => {
    add(address);
    navigation.goBack();
  };

  return <AddressBookAdd onSave={onHandleSave} navigation={navigation} />;
};

AddressBookAddContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="notebook" size={25} />,
};

const mapDispatchToProps = { addAddress };

export default connect(
  undefined,
  mapDispatchToProps,
)(AddressBookAddContainer);
