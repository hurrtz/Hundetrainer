import React, { Component, Fragment } from 'react';
import { H1, Text } from 'native-base';

import { TNavigation } from 'apptypes/base';
import { IPoop } from 'apptypes/poop';

interface Props {
  navigation: TNavigation;
}

interface State {}

interface INavigationProps {
  poop: IPoop;
}

class PoopEdit extends Component<Props, State> {
  navigationProps: INavigationProps;

  constructor(props: Props) {
    super(props);

    this.navigationProps = {
      poop: props.navigation.getParam('poop', undefined),
    };
  }

  render() {
    const { poop } = this.navigationProps;

    return (
      <Fragment>
        <H1>Edit le poop</H1>
        <Text>{poop.date}</Text>
      </Fragment>
    );
  }
}

export default PoopEdit;
