import React, { PureComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIconComponent from 'react-native-vector-icons/Entypo';
import MaterialIconComponent from 'react-native-vector-icons/MaterialIcons';
import { View, Subtitle } from '@shoutem/ui';

import { IPoop } from 'container/Poop/types';

interface Props {
  poop: IPoop;
}

interface State {}

class PoopDetails extends PureComponent<Props, State> {
  createEmoticon(poop: IPoop) {
    const { quality, isConspicuous } = poop;

    if (isConspicuous) {
      return (
        <MaterialIconComponent name="error-outline" size={20} color="red" />
      );
    }

    if (quality === 'GOOD') {
      return <IconComponent name="thumb-up" size={20} color="green" />;
    }

    if (quality === 'MEDIUM') {
      return <IconComponent name="thumbs-up-down" size={20} color="orange" />;
    }

    return <IconComponent name="thumb-down" size={20} color="red" />;
  }

  createHasBloodIcon(hasBlood: boolean) {
    if (hasBlood) {
      return <EntypoIconComponent name="drop" size={20} color="red" />;
    }

    return undefined;
  }

  createIconAdditionalInformations() {
    const { poop } = this.props;

    if (poop.additionalInformation) {
      return <IconComponent name="note" size={20} />;
    }

    return undefined;
  }

  getTwoDigitNumber(value: number): string {
    return value < 10 ? `0${value}` : String(value);
  }

  formatTime(_date: string) {
    const date = new Date(_date);

    return `${this.getTwoDigitNumber(date.getHours())}:${this.getTwoDigitNumber(
      date.getMinutes(),
    )} Uhr`;
  }

  render() {
    const { poop } = this.props;

    return (
      <View styleName="space-between horizontal" style={{ width: '100%' }}>
        <View styleName="horizontal">
          {this.createEmoticon(poop)}
          <Subtitle style={{ marginLeft: 10 }}>
            {this.formatTime(poop.date)}
          </Subtitle>
        </View>
        <View styleName="horizontal">
          {this.createIconAdditionalInformations()}
          {this.createHasBloodIcon(poop.hasBlood)}
        </View>
      </View>
    );
  }
}

export default PoopDetails;
