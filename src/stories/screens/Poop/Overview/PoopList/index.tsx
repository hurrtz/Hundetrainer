import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';

import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import PoopDetails from './PoopDetails';

interface Props {
  navigation: TNavigation;
  poops: IPoop[];
}

interface State {}

class PoopList extends Component<Props, State> {
  getTwoDigitNumber(value: number): string {
    return value < 10 ? `0${value}` : String(value);
  }

  formatDate(_date: string) {
    const date = new Date(_date);

    return `${this.getTwoDigitNumber(date.getDate())}.${this.getTwoDigitNumber(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  }

  render() {
    const { poops, navigation } = this.props;

    return (
      <Card key={poops[0].date} transparent>
        <CardItem
          key={`headline-${poops[0].date}`}
          header
          style={{ marginBottom: -5 }}
        >
          <Text>{this.formatDate(poops[0].date)}</Text>
        </CardItem>
        {poops.map(poop => (
          <CardItem
            key={`entry-${poop.date}`}
            button
            onPress={() => navigation.push('PoopDetails', { poop })}
            style={{ marginTop: -10 }}
          >
            <PoopDetails poop={poop} />
          </CardItem>
        ))}
      </Card>
    );
  }
}

export default PoopList;
