import React, { PureComponent, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Calendar from 'stories/screens/Calendar';

interface Props {
  navigation: Navigation;
}

class CalendarContainer extends PureComponent<Props> {
  static navigationOptions = {
    drawerIcon: (): ReactElement => <IconComponent name="calendar" size={25} />,
  };

  render(): ReactElement {
    const { navigation } = this.props;

    return <Calendar navigation={navigation} />;
  }
}

export default CalendarContainer;
