import React, { Component } from 'react';
import { Content } from 'native-base';

import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import PoopList from './PoopList';

interface Props {
  navigation: TNavigation;
  poops: IPoop[];
}

interface State {}

class PoopOverview extends Component<Props, State> {
  render() {
    const { poops, navigation } = this.props;

    return (
      <Content padder>
        <PoopList poops={poops} navigation={navigation} />
      </Content>
    );
  }
}

export default PoopOverview;
