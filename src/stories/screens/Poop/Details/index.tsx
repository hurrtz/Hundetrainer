import React, {
  ReactElement,
  ReactNode,
  FunctionComponent,
  useEffect,
  EffectCallback,
} from 'react';
import {
  View,
  Heading,
  Title,
  Subtitle,
  Text,
  NavigationBar,
  Icon,
} from '@shoutem/ui';

import { Poop } from 'container/Poop/types';
import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
  poop: Poop;
  onDetailsPoop: Function;
  onEditPoop: Function;
}

const PoopDetails: FunctionComponent<Props> = ({
  navigation,
  poop,
  onDetailsPoop,
  onEditPoop,
}: Props): ReactElement => {
  const date = new Date(poop.date);

  useEffect(
    (): EffectCallback => (): void => {
      onDetailsPoop({ id: undefined });
    },
    [],
  );

  const formatDate = (): string => {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getDate())}.${enforceTwoDigits(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  };

  const formatTime = (): string => {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getHours())}:${enforceTwoDigits(
      date.getMinutes(),
    )} Uhr`;
  };

  const createQuality = (): ReactElement => {
    switch (poop.quality) {
      case 'BAD':
        return <Text>schlecht</Text>;

      case 'MEDIUM':
        return <Text>mäßig</Text>;

      default:
        return <Text>normal</Text>;
    }
  };

  const createConsistency = (): ReactElement => {
    switch (poop.consistency) {
      case 'LIQUID':
        return <Text>flüssig</Text>;

      case 'SOFT':
        return <Text>weich</Text>;

      case 'HARD':
        return <Text>hart</Text>;

      default:
        return <Text>normal</Text>;
    }
  };

  const createColor = (): ReactElement => {
    switch (poop.color) {
      case 'LIGHT':
        return <Text>hell</Text>;

      case 'OTHER':
        return <Text>sonstige Farbe</Text>;

      case 'DARK':
        return <Text>dunkel</Text>;

      case 'BLACK':
        return <Text>schwarz</Text>;

      default:
        return <Text>normal</Text>;
    }
  };

  const createSecondaryInformations = (): ReactNode => {
    const out = [];

    if (poop.isConspicuous) {
      out.push(
        <Subtitle key="isConspicuous" style={{ marginTop: 25 }}>
          Auffälliger Stuhl!
        </Subtitle>,
      );
    }

    if (poop.hasBlood) {
      out.push(
        <Subtitle key="hasBlood" style={{ marginTop: 25 }}>
          Blut im Stuhl!
        </Subtitle>,
      );
    }

    if (poop.additionalInformation) {
      out.push(
        <Subtitle
          key="additionalInformation-headline"
          style={{ marginTop: 25 }}
        >
          zusätzliche Informationen
        </Subtitle>,
      );
      out.push(
        <Text key="additionalInformation-value">
          {poop.additionalInformation}
        </Text>,
      );
    }

    return out;
  };

  const onGoingBack = (): void => {
    navigation.goBack();
  };

  return (
    <View>
      <NavigationBar
        leftComponent={<Icon name="back" onPress={onGoingBack} />}
        rightComponent={
          <Icon
            name="edit"
            onPress={(): void => {
              onEditPoop({ id: poop.id });
              navigation.navigate('PoopEdit');
            }}
          />
        }
        title="Stuhlgang"
        styleName="inline"
      />
      <StandardView>
        <Heading>{formatDate()}</Heading>
        <Title>{formatTime()}</Title>
        <Subtitle style={{ marginTop: 25 }}>Qualität</Subtitle>
        <Text>{createQuality()}</Text>
        <Subtitle style={{ marginTop: 25 }}>Konsistenz</Subtitle>
        <Text>{createConsistency()}</Text>
        <Subtitle style={{ marginTop: 25 }}>Farbe</Subtitle>
        <Text>{createColor()}</Text>
        {createSecondaryInformations()}
      </StandardView>
    </View>
  );
};

export default PoopDetails;
