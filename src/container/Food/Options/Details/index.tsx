import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import OptionsDetails from 'stories/screens/Food/Options/Details';
import {
  currentDetailItemSelector,
  currentVendorSelector,
} from 'container/Food/Options/selectors';
import { FoodOption } from 'container/Food/Options/types';
import { AddressBookEntry } from 'container/AddressBook/types';

interface Props {
  navigation: Navigation;
  option: FoodOption;
  vendor: AddressBookEntry;
}

const OptionsDetailsContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  option,
  vendor,
}: Props): ReactElement => (
  <OptionsDetails navigation={navigation} option={option} vendor={vendor} />
);

OptionsDetailsContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

const mapStateToProps = createStructuredSelector({
  option: currentDetailItemSelector,
  vendor: currentVendorSelector,
});

export default connect(mapStateToProps)(OptionsDetailsContainer);
