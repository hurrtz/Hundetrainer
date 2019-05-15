import React, { ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenComponent } from 'react-navigation';

import Calendar from 'stories/screens/Calendar';

interface Props {
  navigation: Navigation;
}

const CalendarContainer: NavigationScreenComponent<{}, {}, Props> = ({
  navigation,
}: Props): ReactElement => <Calendar navigation={navigation} />;

CalendarContainer.navigationOptions = {
  drawerIcon: (): ReactElement => <IconComponent name="calendar" size={25} />,
};

export default CalendarContainer;
