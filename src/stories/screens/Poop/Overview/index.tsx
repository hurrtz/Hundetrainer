import React, { Component, Fragment } from 'react';
import { Container, Content, H1, Text } from 'native-base';

import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import PoopList from './PoopList';

interface Props {
  navigation: TNavigation;
  poops: { [date: string]: IPoop[] };
}

interface State {}

class PoopOverview extends Component<Props, State> {
  createDefault() {
    return (
      <Fragment>
        <H1>Keine Daten vorhanden</H1>
        <Text>
          Bitte hinterlegen Sie Stuhlgänge, um einen Überblick über einen
          wichtigen Aspekt der Gesundheit Ihres Hundes zu erhalten.
        </Text>
      </Fragment>
    );
  }

  createPoopLists() {
    const { poops, navigation } = this.props;
    const dates = Object.keys(poops);

    if (dates.length === 0) {
      return this.createDefault();
    }

    const datesSorted = [...dates].sort((dateA, dateB) => {
      if (dateA > dateB) {
        return -1;
      }

      if (dateB > dateA) {
        return 1;
      }

      return 0;
    });

    return datesSorted.map(date => (
      <PoopList key={date} poops={poops[date]} navigation={navigation} />
    ));
  }

  render() {
    return (
      <Container>
        <Content padder>{this.createPoopLists()}</Content>
      </Container>
    );
  }
}

export default PoopOverview;
