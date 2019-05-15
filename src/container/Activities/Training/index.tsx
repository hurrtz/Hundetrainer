import React, { ReactElement } from 'react';
import { NavigationScreenComponent } from 'react-navigation';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Training from 'stories/screens/Activities/Training';

interface Props {
  navigation: Navigation;
}

const TrainingContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <Training navigation={navigation} />;

TrainingContainer.navigationOptions = {
  drawerLabel: 'trophy',
  drawerIcon: (): ReactElement => (
    <IconComponent name="view-dashboard" size={25} />
  ),
};

export default TrainingContainer;
