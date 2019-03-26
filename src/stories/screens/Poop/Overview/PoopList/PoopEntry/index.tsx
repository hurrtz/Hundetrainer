import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Body, CardItem, Text, Right } from 'native-base';

import { TNavigation } from 'apptypes/base';
import { IPoop, QUALITY } from 'apptypes/poop';

interface Props {
  navigation: TNavigation;
  poop: IPoop;
}

interface State {}

class PoopEntry extends Component<Props, State> {
  createEmoticon(type: QUALITY) {
    if (type === QUALITY.GOOD) {
      return <IconComponent name="emoticon-outline" size={25} />;
    }

    if (type === QUALITY.MEDIUM) {
      return <IconComponent name="emoticon-neutral-outline" size={25} />;
    }

    return <IconComponent name="emoticon-sad-outline" size={25} />;
  }

  createIconAdditionalInformations() {
    const { poop } = this.props;

    if (poop.additionalInformation) {
      return <IconComponent name="note" size={25} />;
    }

    return undefined;
  }

  getTwoDigitNumber(value: number): string {
    return value < 10 ? `0${value}` : String(value);
  }

  formatDate(_date: string) {
    const date = new Date(_date);

    return `${this.getTwoDigitNumber(date.getDate())}.${this.getTwoDigitNumber(
      date.getMonth() + 1,
    )}.${date.getFullYear()}, ${this.getTwoDigitNumber(
      date.getHours(),
    )}:${this.getTwoDigitNumber(date.getMinutes())} Uhr`;
  }

  render() {
    const { poop, navigation } = this.props;

    return (
      <CardItem button onPress={() => navigation.push('PoopDetails', { poop })}>
        <Body style={{ minWidth: 150 }}>
          <Text>{this.formatDate(poop.date)}</Text>
        </Body>

        <Right>{this.createIconAdditionalInformations()}</Right>
        <Right>{this.createEmoticon(poop.quality)}</Right>
      </CardItem>
    );
  }
}

export default PoopEntry;
