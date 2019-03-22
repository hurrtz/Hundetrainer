import React, { Component } from 'react';

import { IPoop } from 'apptypes/poop';
import PoopEntry from './PoopEntry';

interface Props {
  poops: IPoop[];
}

interface State {}

class PoopList extends Component<Props, State> {
  render() {
    const { poops } = this.props;

    return poops.map(poop => <PoopEntry key={poop.date} poop={poop} />);
  }
}

export default PoopList;
