import React, { Component } from 'react';
import { Content, H1, H2, H3, Text } from 'native-base';

import { TNavigation } from 'apptypes/base';
import { IPoop, QUALITY, CONSISTENCY, COLOR } from 'apptypes/poop';

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
        <H3 key="isConspicuous" style={{ marginTop: 25 }}>
          Auffälliger Stuhl!
        </H3>,
      );
    }

    if (poop.hasBlood) {
      out.push(
        <H3 key="hasBlood" style={{ marginTop: 25 }}>
          Blut im Stuhl!
        </H3>,
      );
    }

    if (poop.additionalInformation) {
      out.push(
        <H3 key="additionalInformation-headline" style={{ marginTop: 25 }}>
          zusätzliche Informationen
        </H3>,
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
    const { poop } = this.navigationProps;
    const date = new Date(poop.date);

    return (
      <Content padder>
        <H1>{this.formatDate(date)}</H1>
        <H2>{this.formatTime(date)}</H2>
        <H3 style={{ marginTop: 25 }}>Qualität</H3>
        <Text>{this.createQuality()}</Text>
        <H3 style={{ marginTop: 25 }}>Konsistenz</H3>
        <Text>{this.createConsistency()}</Text>
        <H3 style={{ marginTop: 25 }}>Farbe</H3>
        <Text>{this.createColor()}</Text>

        {this.createSecondaryInformations()}
      </Content>
    );
  }
}

export default PoopDetails;
