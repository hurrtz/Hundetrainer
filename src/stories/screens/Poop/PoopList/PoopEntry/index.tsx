import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Body, Card, CardItem, Text, Right } from 'native-base';

import { IPoop, QUALITY } from 'apptypes/poop';

interface Props {
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

  getTwoDigitNumber(value: number): string {
    if (String(value).length === 1) {
      return `0${value}`;
    }

    return String(value);
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
    const { poop } = this.props;

    return (
      <Card>
        <CardItem>
          <Body style={{ minWidth: 200 }}>
            <Text>{this.formatDate(poop.date)}</Text>
          </Body>

          <Right>{this.createEmoticon(poop.quality)}</Right>
        </CardItem>
      </Card>
    );
  }
}

export default PoopEntry;
