import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIconComponent from 'react-native-vector-icons/Entypo';
import MaterialIconComponent from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'native-base';

import { IPoop, QUALITY } from 'apptypes/poop';

import { StyledBody, StyledLeft, StyledRight } from './styles';

interface Props {
  poop: IPoop;
}

interface State {}

class PoopDetails extends Component<Props, State> {
  createEmoticon(poop: IPoop) {
    const { quality, isConspicuous } = poop;

    if (isConspicuous) {
      return (
        <MaterialIconComponent name="error-outline" size={20} color="red" />
      );
    }

    if (quality === QUALITY.GOOD) {
      return <IconComponent name="thumb-up" size={20} color="green" />;
    }

    if (quality === QUALITY.MEDIUM) {
      return <IconComponent name="thumbs-up-down" size={20} color="orange" />;
    }

    return <IconComponent name="thumb-down" size={20} color="red" />;
  }

  createHasBloodIcon(hasBlood: boolean) {
    if (hasBlood) {
      return (
        <StyledRight key="blood">
          <EntypoIconComponent name="drop" size={20} color="red" />
        </StyledRight>
      );
    }

    return undefined;
  }

  createIconAdditionalInformations() {
    const { poop } = this.props;

    if (poop.additionalInformation) {
      return (
        <StyledRight key="additional-information">
          <IconComponent name="note" size={20} />
        </StyledRight>
      );
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

    return [
      <StyledLeft key="emoticon">{this.createEmoticon(poop)}</StyledLeft>,

      <StyledBody key="date">
        <Text>{this.formatTime(poop.date)}</Text>
      </StyledBody>,

      this.createIconAdditionalInformations(),

      this.createHasBloodIcon(poop.hasBlood),
    ];
  }
}

export default PoopDetails;
