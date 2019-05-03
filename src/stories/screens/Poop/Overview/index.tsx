import React, { PureComponent, Fragment } from 'react';
import { NavigationBar, Title, Text, Icon, Screen, View } from '@shoutem/ui';

import { IPoop } from 'container/Poop/types';
import { StandardView } from 'ui/Layout';
import PoopList from './PoopList';

interface Props {
  navigation: Navigation;
  poops: { [date: string]: IPoop[] };
  onShowDetails: Function;
  onEditPoop: Function;
}

interface State {}

class PoopOverview extends PureComponent<Props, State> {
  createDefault() {
    return (
      <Fragment>
        <Title>Keine Daten vorhanden</Title>
        <Text styleName="md-gutter-top">
          Bitte hinterlegen Sie Stuhlgänge, um einen Überblick über einen
          wichtigen Aspekt der Gesundheit Ihres Hundes zu erhalten.
        </Text>
      </Fragment>
    );
  }

  createPoopLists() {
    const { poops, navigation, onShowDetails, onEditPoop } = this.props;
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
      <View key={date} styleName="md-gutter-top">
        <PoopList
          poops={poops[date]}
          navigation={navigation}
          onShowDetails={onShowDetails}
          onEditPoop={onEditPoop}
        />
      </View>
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
        <StandardView noPaddingTop>{this.createPoopLists()}</StandardView>
      </Screen>
    );
  }
}

export default PoopOverview;
