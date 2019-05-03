import React, { PureComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Calendar from 'stories/screens/Calendar';

interface Props {
  navigation: Navigation;
}

interface State {}

class CalendarContainer extends PureComponent<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="calendar" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <Calendar navigation={navigation} />;
  }
}

export default CalendarContainer;
