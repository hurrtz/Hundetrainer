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

const OptionsOverview: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => {
  const createDefault = (): ReactElement => (
    <Fragment>
      <Title>Keine Daten vorhanden</Title>
      <Text styleName="md-gutter-top">
        Hier können Sie konkrete Nahrungsmittel hinterlegen, die Ihr Hund häufig
        isst. Auf diese Weise können Sie sowohl konkreter tracken, was Ihr Hund
        gerade zu sich genommen hat, als auch genauere Informationen zu
        einzelnen Nahrungsmitteln festhalten, wie beispiesweise Inhaltsstoffe
        oder Bezugsort.
      </Text>
    </Fragment>
  );

  const createFoodOptionsLists = (): ReactNode => {
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
      <StandardView>{createFoodOptionsLists()}</StandardView>
    </Screen>
  );
};

export default OptionsOverview;
