import React, { PureComponent, ReactElement } from 'react';

import Notes from 'stories/screens/Activities/Notes';

interface Props {
  navigation: Navigation;
}

class NotesContainer extends PureComponent<Props> {
  render(): ReactElement {
    const { navigation } = this.props;

    return <Notes navigation={navigation} />;
  }
}

export default NotesContainer;
