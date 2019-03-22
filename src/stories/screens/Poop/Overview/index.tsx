import React, { Component } from 'react';
import { Container, Content } from 'native-base';

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
      <Container>
        <Content>
          <PoopList poops={poops} navigation={navigation} />
        </Content>
      </Container>
    );
  }
}

export default PoopOverview;
