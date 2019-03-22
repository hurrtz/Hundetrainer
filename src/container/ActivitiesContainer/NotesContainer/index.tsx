import React, { Component } from 'react';

import Notes from 'stories/screens/Activities/Notes';

export interface Props {
  navigation: any;
}

export interface State {}

class NotesContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Notes navigation={navigation} />;
  }
}

export default NotesContainer;
