import React, { ReactElement, FunctionComponent } from 'react';

import Notes from 'stories/screens/Activities/Notes';

interface Props {
  navigation: Navigation;
}

const NotesContainer: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => <Notes navigation={navigation} />;

export default NotesContainer;
