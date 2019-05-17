import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';
import { createStructuredSelector } from 'reselect';

import { itemsByTypeSelector as addressBookSelector } from 'container/AddressBook/selectors';
import { AddressBookEntry } from 'container/AddressBook/types';
import OptionsAdd from 'stories/screens/Food/Options/Add';
import { createOption } from '../actions';

interface Props {
  navigation: Navigation;
  createOption: Function;
  addresses: AddressBookEntry[];
}

const OptionsAddContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  createOption: create,
  addresses,
}: Props): ReactElement => (
  <OptionsAdd
    navigation={navigation}
    createOption={create}
    addresses={addresses}
  />
);

OptionsAddContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

const mapStateToProps = createStructuredSelector({
  addresses: addressBookSelector('DIET'),
});

const mapDispatchToProps = { createOption };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionsAddContainer);
