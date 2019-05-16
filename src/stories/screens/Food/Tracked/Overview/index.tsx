import React, {
  ReactElement,
  FunctionComponent,
  Fragment,
  ReactNode,
} from 'react';
import { Screen, NavigationBar, Icon, Title, Text, View } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
}

const TrackedOverview: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => {
  const createDefault = (): ReactElement => (
    <Fragment>
      <Title>Keine Daten vorhanden</Title>
      <Text styleName="md-gutter-top">
        Hier können Sie tracken, was Ihr Hund isst und zu sich nimmt. Wenn Ihr
        Hund oft die gleichen Nahrungsmittel isst, hinterlegen Sie diese bitte
        im nächsten Tab, um schnell Zugriff darauf zu haben.
      </Text>
    </Fragment>
  );

  const createTrackedFoodsLists = (): ReactNode => {
    const dates = Object.keys({});

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
          <Text>ein getracktes Nahrungsmittel</Text>
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
        title="Übersicht"
        styleName="inline"
      />
      <StandardView>{createTrackedFoodsLists()}</StandardView>
    </Screen>
  );
};

export default TrackedOverview;
