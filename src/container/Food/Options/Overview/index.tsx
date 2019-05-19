import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import { FoodOption } from 'container/Food/Options/types';
import OptionsOverview from 'stories/screens/Food/Options/Overview';
import { itemsSelector } from '../selectors';
import { setOptionToDetails } from '../actions';

interface Props {
  navigation: Navigation;
  options: FoodOption[];
  setOptionToDetails: Function;
}

const OptionsOverviewContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
  options,
  setOptionToDetails: onShowDetails,
}: Props): ReactElement => {
  return (
    <OptionsOverview
      navigation={navigation}
      options={options}
      onShowDetails={onShowDetails}
    />
  );
};

OptionsOverviewContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="settings" size={25} />,
};

const mapStateToProps = createStructuredSelector({
  options: itemsSelector,
});

const mapDispatchToProps = {
  setOptionToDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionsOverviewContainer);
