import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import { FoodOption } from 'container/Food/Options/types';
import OptionsOverview from 'stories/screens/Food/Options/Overview';
import { itemsSelector } from '../selectors';

interface Props {
  navigation: Navigation;
  options: FoodOption[];
}

const OptionsOverviewContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  options,
}: Props): ReactElement => {
  return <OptionsOverview navigation={navigation} options={options} />;
};

OptionsOverviewContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

const mapStateToProps = createStructuredSelector({
  options: itemsSelector,
});

export default connect(mapStateToProps)(OptionsOverviewContainer);
