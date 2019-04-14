import React, { Component } from 'react';
import {
  View,
  Screen,
  Heading,
  Title,
  Subtitle,
  Text,
  NavigationBar,
  Icon,
} from '@shoutem/ui';

import { TNavigation } from 'apptypes/base';
import { IPoop, QUALITY, CONSISTENCY, COLOR } from 'apptypes/poop';
import { StandardView } from 'ui/Layout';

interface Props {
  navigation: TNavigation;
}

interface State {}

interface INavigationProps {
  poop: IPoop;
}

class PoopDetails extends Component<Props, State> {
  navigationProps: INavigationProps;

  constructor(props: Props) {
    super(props);

    this.navigationProps = {
      poop: props.navigation.getParam('poop', undefined),
    };
  }

  formatDate(date: Date) {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getDate())}.${enforceTwoDigits(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  }

  formatTime(date: Date) {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getHours())}:${enforceTwoDigits(
      date.getMinutes(),
    )} Uhr`;
  }

  createQuality() {
    const { poop } = this.navigationProps;

    switch (poop.quality) {
      case QUALITY.BAD:
        return <Text>schlecht</Text>;

      case QUALITY.MEDIUM:
        return <Text>mäßig</Text>;

      default:
        return <Text>normal</Text>;
    }
  }

  createConsistency() {
    const { poop } = this.navigationProps;

    switch (poop.consistency) {
      case CONSISTENCY.LIQUID:
        return <Text>flüssig</Text>;

      case CONSISTENCY.SOFT:
        return <Text>weich</Text>;

      case CONSISTENCY.HARD:
        return <Text>hart</Text>;

      default:
        return <Text>normal</Text>;
    }
  }

  createColor() {
    const { poop } = this.navigationProps;

    switch (poop.color) {
      case COLOR.LIGHT:
        return <Text>hell</Text>;

      case COLOR.OTHER:
        return <Text>sonstige Farbe</Text>;

      case COLOR.DARK:
        return <Text>dunkel</Text>;

      case COLOR.BLACK:
        return <Text>schwarz</Text>;

      default:
        return <Text>normal</Text>;
    }
  }

  createSecondaryInformations() {
    const { poop } = this.navigationProps;
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
  }

  render() {
    const { navigation } = this.props;

    const { poop } = this.navigationProps;
    const date = new Date(poop.date);

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="back" onPress={() => navigation.goBack()} />
          }
          rightComponent={
            <Icon
              name="edit"
              onPress={() =>
                navigation.navigate('PoopEdit', {
                  poop: navigation.getParam('poop'),
                })
              }
            />
          }
          title="Stuhlgang"
          styleName="inline"
        />
        <StandardView>
          <Heading>{this.formatDate(date)}</Heading>
          <Title>{this.formatTime(date)}</Title>
          <Subtitle style={{ marginTop: 25 }}>Qualität</Subtitle>
          <Text>{this.createQuality()}</Text>
          <Subtitle style={{ marginTop: 25 }}>Konsistenz</Subtitle>
          <Text>{this.createConsistency()}</Text>
          <Subtitle style={{ marginTop: 25 }}>Farbe</Subtitle>
          <Text>{this.createColor()}</Text>
          {this.createSecondaryInformations()}
        </StandardView>
      </Screen>
    );
  }
}

export default PoopDetails;
