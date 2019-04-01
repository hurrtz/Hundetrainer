import React, { Component, Fragment } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIconComponent from 'react-native-vector-icons/Entypo';
import MaterialIconComponent from 'react-native-vector-icons/MaterialIcons';
import { Body, CardItem, Text, Right, Left } from 'native-base';

import { TNavigation } from 'apptypes/base';
import { IPoop, QUALITY } from 'apptypes/poop';

interface Props {
  navigation: TNavigation;
  poop: IPoop;
}

interface State {}

class PoopEntry extends Component<Props, State> {
  createEmoticon(poop: IPoop) {
    const { quality, isConspicuous } = poop;

    if (isConspicuous) {
      return (
        <MaterialIconComponent name="error-outline" size={25} color="red" />
      );
    }

    if (quality === QUALITY.GOOD) {
      return <IconComponent name="thumb-up" size={25} color="green" />;
    }

    if (quality === QUALITY.MEDIUM) {
      return <IconComponent name="thumbs-up-down" size={25} color="orange" />;
    }

    return <IconComponent name="thumb-down" size={25} color="red" />;
  }

  createHasBloodIcon(hasBlood: boolean) {
    if (hasBlood) {
      return <EntypoIconComponent name="drop" size={20} color="red" />;
    }

    return false;
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
      <Fragment>
        <CardItem
          button
          onPress={() => navigation.push('PoopDetails', { poop })}
          style={{
            position: 'relative',
            zIndex: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Body style={{ minWidth: 150 }}>
            <Text>{this.formatDate(poop.date)}</Text>
          </Body>

          <Right>{this.createEmoticon(poop)}</Right>
        </CardItem>

        <CardItem
          button
          onPress={() => navigation.push('PoopDetails', { poop })}
          style={{ position: 'relative', zIndex: 1, marginTop: -25 }}
        >
          <Left>
            {this.createIconAdditionalInformations()}
            {this.createHasBloodIcon(poop.hasBlood)}
          </Left>
        </CardItem>
      </Fragment>
    );
  }
}

export default PoopEntry;
