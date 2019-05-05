import React, { ReactElement, FunctionComponent } from 'react';

import Toys from 'stories/screens/Activities/Toys';

interface Props {
  navigation: Navigation;
}

const ToysContainer: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => <Toys navigation={navigation} />;

export default ToysContainer;
