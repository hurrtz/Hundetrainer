import React, { Component } from 'react';

import Calendar from 'stories/screens/Calendar';

export interface Props {
  navigation: any;
}

export interface State {}

class CalendarContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Calendar navigation={navigation} />;
  }
}

export default CalendarContainer;
