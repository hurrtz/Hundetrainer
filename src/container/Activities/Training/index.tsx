import React, { ReactElement, FunctionComponent } from 'react';

import Training from 'stories/screens/Activities/Training';

interface Props {
  navigation: Navigation;
}

const TrainingContainer: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => <Training navigation={navigation} />;

export default TrainingContainer;
