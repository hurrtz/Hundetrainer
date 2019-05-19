import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';
import { createStructuredSelector } from 'reselect';

import OptionsEdit from 'stories/screens/Food/Options/Edit';
import {
  setOptionToEdit,
  removeOption,
  updateOption,
} from 'container/Food/Options/actions';
import { itemsByTypeSelector as addressBookSelector } from 'container/AddressBook/selectors';
import { currentEditItemSelector } from 'container/Food/Options/selectors';
import { FoodOption } from 'container/Food/Options/types';
import { AddressBookEntry } from 'container/AddressBook/types';

interface Props {
  navigation: Navigation;
  onEditOption: Function;
  onDeleteOption: Function;
  onSaveOption: Function;
  option: FoodOption;
  addresses: AddressBookEntry[];
}

const OptionsEditContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  onEditOption,
  onDeleteOption,
  onSaveOption,
  option,
  addresses,
}: Props): ReactElement => (
  <OptionsEdit
    navigation={navigation}
    onEdit={onEditOption}
    onDelete={onDeleteOption}
    onSave={onSaveOption}
    option={option}
    addresses={addresses}
  />
);

OptionsEditContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

const mapStateToProps = createStructuredSelector({
  option: currentEditItemSelector,
  addresses: addressBookSelector('DIET'),
});

const mapStateToDispatch = {
  onEditOption: setOptionToEdit,
  onDeleteOption: removeOption,
  onSaveOption: updateOption,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(OptionsEditContainer);
