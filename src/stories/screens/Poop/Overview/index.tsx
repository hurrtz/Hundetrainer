import React, { Component, Fragment } from 'react';
import {
  NavigationBar,
  Header,
  Text,
  Icon,
  Divider,
  View,
  Screen,
} from '@shoutem/ui';

import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import { StandardView } from 'ui/Layout';
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
        <Header>Keine Daten vorhanden</Header>
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
      <Fragment key={date}>
        <PoopList poops={poops[date]} navigation={navigation} />
        <Divider styleName="line" style={{ marginTop: 5, marginBottom: 5 }} />
      </Fragment>
    ));
  }

  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          rightComponent={
            <Icon
              name="plus-button"
              onPress={() => navigation.push('PoopAdd')}
            />
          }
          title="Stuhlgang"
          styleName="inline"
        />
        <StandardView>{this.createPoopLists()}</StandardView>
      </Screen>
    );
  }
}

export default PoopOverview;
