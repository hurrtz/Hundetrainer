import React, { ReactElement, FunctionComponent } from 'react';

import Places from 'stories/screens/Activities/Places';

interface Props {
  navigation: Navigation;
}

const PlacesContainer: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => <Places navigation={navigation} />;

export default PlacesContainer;
