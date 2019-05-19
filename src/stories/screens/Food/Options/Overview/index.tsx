import React, {
  ReactElement,
  FunctionComponent,
  Fragment,
  ReactNode,
} from 'react';
import {
  Screen,
  NavigationBar,
  Icon,
  Title,
  Text,
  View,
  Card,
  Subtitle,
  Image,
  TouchableOpacity,
} from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { FoodOption } from 'container/Food/Options/types';
import { TYPES, TYPE } from 'container/Food/Options/constants';

interface Props {
  navigation: Navigation;
  options: FoodOption[];
  onShowDetails: Function;
}

const OptionsOverview: FunctionComponent<Props> = ({
  navigation,
  options,
  onShowDetails,
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

  const renderPicture = (option: FoodOption): ReactElement =>
    option.picture ? (
      <Image styleName="medium-square" source={{ uri: option.picture }} />
    ) : (
      undefined
    );

  const onOptionRequestDetails = (id: string): void => {
    onShowDetails(id);
    navigation.push('FoodOptionsDetails');
  };

  const createFoodOptionsLists = (): ReactNode => {
    if (options.length === 0) {
      return createDefault();
    }

    return options.map(
      (option): ReactElement => (
        <TouchableOpacity
          key={option.id}
          onPress={(): void => onOptionRequestDetails(option.id)}
        >
          <View key={option.id} styleName="md-gutter-top">
            <Card
              style={{
                width: '100%',
              }}
            >
              <View key={option.id} styleName="horizontal h-start v-start">
                {renderPicture(option)}

                <View style={{ marginLeft: option.picture ? 10 : 0 }}>
                  <Subtitle>{option.name}</Subtitle>
                  <Text>
                    {
                      TYPES.find(
                        ({ value }: TYPE): boolean => value === option.type,
                      ).title
                    }
                  </Text>
                </View>
              </View>
            </Card>
          </View>
        </TouchableOpacity>
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
