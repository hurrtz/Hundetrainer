import React, { Component, Fragment } from 'react';
import { Content, H1, Text } from 'native-base';

import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import PoopList from './PoopList';

interface Props {
  navigation: TNavigation;
  poops: IPoop[];
}

interface State {}

class PoopOverview extends Component<Props, State> {
  createDefault() {
    return (
      <Fragment>
        <H1>Keine Daten vorhanden</H1>
        <Text>
          Bitte hinterlegen Sie Stuhlgänge, um einen Überblick über die
          Gesundheit Ihres Hundes zu erhalten.
        </Text>
      </Fragment>
    );
  }

  render() {
    const { poops, navigation } = this.props;

    return (
      <Content padder>
        {poops && poops.length > 0 ? (
          <PoopList poops={poops} navigation={navigation} />
        ) : (
          this.createDefault()
        )}
      </Content>
    );
  }
}

export default PoopOverview;
