import React, {
  ReactElement,
  FunctionComponent,
  Fragment,
  ReactNode,
} from 'react';
import { Screen, NavigationBar, Icon, Title, Text, View } from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { FoodOption } from 'container/Food/Options/types';

interface Props {
  navigation: Navigation;
  options: FoodOption[];
}

const OptionsOverview: FunctionComponent<Props> = ({
  navigation,
  options,
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
    if (options.length === 0) {
      return createDefault();
    }

    return options.map(
      (option): ReactElement => (
        <View key={option.id} styleName="md-gutter-top">
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
        rightComponent={
          <Icon
            name="plus-button"
            onPress={(): boolean => navigation.push('FoodOptionsAdd')}
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
