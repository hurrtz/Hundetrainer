import React, { Component, Fragment } from 'react';
import { Content, H1, H2, H3, Text } from 'native-base';

import { TNavigation } from 'apptypes/base';
import { IPoop, QUALITY } from 'apptypes/poop';

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
    let textOut = '';

    switch (poop.quality) {
      case QUALITY.GOOD:
        textOut += 'gut';
        break;

      case QUALITY.MEDIUM:
        textOut += 'mäßig';
        break;

      default:
        textOut += 'schlecht';
    }

    return <Text>{textOut}</Text>;
  }

  createAdditionalInformations() {
    const { poop } = this.navigationProps;
    const defaultOut = '- nicht angegeben -';

    return <Text>{poop.additionalInformation || defaultOut}</Text>;
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
        <H3 style={{ marginTop: 25 }}>zusätzliche Informationen</H3>
        <Text>{this.createAdditionalInformations()}</Text>
      </Content>
    );
  }
}

export default PoopDetails;
