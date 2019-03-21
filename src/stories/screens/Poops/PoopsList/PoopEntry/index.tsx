import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Body, Card, CardItem, Text, Right } from 'native-base';

import { IPoop, QUALITY } from 'apptypes/poop';

export interface Props {
  poop: IPoop;
}

export interface State {}

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

  formatDate(_date: string) {
    const date = new Date(_date);

    return `${date.getDate()}.${date.getMonth() +
      1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  }

  render() {
    const { poop } = this.props;

    return (
      <Card>
        <CardItem>
          <Body>
            <Text>{this.formatDate(poop.date)}</Text>
          </Body>

          <Right>{this.createEmoticon(poop.quality)}</Right>
        </CardItem>
      </Card>
    );
  }
}

export default PoopEntry;
