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
import { setOptionToEdit } from 'container/Food/Options/actions';
import { FoodOption } from 'container/Food/Options/types';
import { AddressBookEntry } from 'container/AddressBook/types';

interface Props {
  navigation: Navigation;
  option: FoodOption;
  vendor: AddressBookEntry;
  onEditOption: Function;
}

const OptionsDetailsContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  option,
  vendor,
  onEditOption: onEdit,
}: Props): ReactElement => (
  <OptionsDetails
    navigation={navigation}
    option={option}
    vendor={vendor}
    onEdit={onEdit}
  />
);

OptionsDetailsContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

const mapStateToProps = createStructuredSelector({
  option: currentDetailItemSelector,
  vendor: currentVendorSelector,
});

const mapStateToDispatch = {
  onEditOption: setOptionToEdit,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(OptionsDetailsContainer);
