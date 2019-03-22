import React, { Component } from 'react';

import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import PoopEntry from './PoopEntry';

interface Props {
  navigation: TNavigation;
  poops: IPoop[];
}

interface State {}

class PoopList extends Component<Props, State> {
  render() {
    const { poops, navigation } = this.props;

    return poops.map(poop => (
      <PoopEntry key={poop.date} poop={poop} navigation={navigation} />
    ));
  }
}

export default PoopList;
