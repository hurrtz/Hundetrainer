import React, { Component } from 'react';
import { Card, Subtitle, TouchableOpacity, Divider, View } from '@shoutem/ui';

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
      <Card
        style={{
          width: '100%',
          padding: 10,
        }}
      >
        <Subtitle>{this.formatDate(poops[0].date)}</Subtitle>

        {poops.map(poop => (
          <TouchableOpacity
            key={`entry-${poop.date}`}
            onPress={() => navigation.push('PoopDetails', { poop })}
          >
            <PoopDetails poop={poop} />
          </TouchableOpacity>
        ))}
      </Card>
    );
  }
}

export default PoopList;
