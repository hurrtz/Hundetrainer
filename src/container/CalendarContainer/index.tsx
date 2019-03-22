import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Calendar from 'stories/screens/Calendar';

interface Props {
  navigation: any;
}

interface State {}

class CalendarContainer extends Component<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="calendar" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <Calendar navigation={navigation} />;
  }
}

export default CalendarContainer;
