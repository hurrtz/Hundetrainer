import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import OptionsAdd from 'stories/screens/Food/Options/Add';
import { createOption } from '../actions';

interface Props {
  navigation: Navigation;
  createOption: Function;
}

const OptionsAddContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  createOption: create,
}: Props): ReactElement => (
  <OptionsAdd navigation={navigation} createOption={create} />
);

OptionsAddContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

const mapDispatchToProps = { createOption };

export default connect(
  undefined,
  mapDispatchToProps,
)(OptionsAddContainer);
