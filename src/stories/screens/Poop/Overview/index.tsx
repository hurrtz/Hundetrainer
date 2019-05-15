import React, {
  Fragment,
  ReactElement,
  ReactNode,
  FunctionComponent,
} from 'react';
import { NavigationBar, Title, Text, Icon, Screen, View } from '@shoutem/ui';

import { Poop } from 'container/Poop/types';
import { StandardView } from 'ui/Layout';
import PoopList from './PoopList';

interface Props {
  navigation: Navigation;
  poops: { [date: string]: Poop[] };
  onShowDetails: Function;
}

const PoopOverview: FunctionComponent<Props> = ({
  navigation,
  poops,
  onShowDetails,
}: Props): ReactElement => {
  const createDefault = (): ReactElement => (
    <Fragment>
      <Title>Keine Daten vorhanden</Title>
      <Text styleName="md-gutter-top">
        Bitte hinterlegen Sie Stuhlgänge, um einen Überblick über einen
        wichtigen Aspekt der Gesundheit Ihres Hundes zu erhalten.
      </Text>
    </Fragment>
  );

  const createPoopLists = (): ReactNode => {
    const dates = Object.keys(poops);

    if (dates.length === 0) {
      return createDefault();
    }

    const datesSorted = [...dates].sort(
      (dateA, dateB): number => {
        if (dateA > dateB) {
          return -1;
        }

        if (dateB > dateA) {
          return 1;
        }

        return 0;
      },
    );

    return datesSorted.map(
      (date): ReactElement => (
        <View key={date} styleName="md-gutter-top">
          <PoopList
            poops={poops[date]}
            navigation={navigation}
            onShowDetails={onShowDetails}
          />
        </View>
      ),
    );
  };

  return (
    <Screen>
      <NavigationBar
        leftComponent={
          <Icon
            name="sidebar"
            onPress={(): void => navigation.toggleDrawer()}
          />
        }
        rightComponent={
          <Icon
            name="plus-button"
            onPress={(): boolean => navigation.push('PoopAdd')}
          />
        }
        title="Stuhlgang"
        styleName="inline"
      />
      <StandardView noPaddingTop>{createPoopLists()}</StandardView>
    </Screen>
  );
};

export default PoopOverview;
