import React, { PureComponent } from 'react';

import Notes from 'stories/screens/Activities/Notes';

interface Props {
  navigation: Navigation;
}

interface State {}

class NotesContainer extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Notes navigation={navigation} />;
  }
}

export default NotesContainer;
