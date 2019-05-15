import React, { ReactElement, FunctionComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIconComponent from 'react-native-vector-icons/Entypo';
import MaterialIconComponent from 'react-native-vector-icons/MaterialIcons';
import { View, Subtitle } from '@shoutem/ui';

import { Poop } from 'container/Poop/types';

interface Props {
  poop: Poop;
}

const PoopDetails: FunctionComponent<Props> = ({
  poop,
}: Props): ReactElement => {
  const createEmoticon = (): ReactElement => {
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
  };

  const createHasBloodIcon = (): ReactElement => {
    const { hasBlood } = poop;

    if (hasBlood) {
      return <EntypoIconComponent name="drop" size={20} color="red" />;
    }

    return undefined;
  };

  const createIconAdditionalInformations = (): ReactElement => {
    const { additionalInformation } = poop;

    if (additionalInformation) {
      return <IconComponent name="note" size={20} />;
    }

    return undefined;
  };

  const getTwoDigitNumber = (value: number): string =>
    value < 10 ? `0${value}` : String(value);

  const formatTime = (): string => {
    const date = new Date(poop.date);

    return `${getTwoDigitNumber(date.getHours())}:${getTwoDigitNumber(
      date.getMinutes(),
    )} Uhr`;
  };

  return (
    <View styleName="space-between horizontal" style={{ width: '100%' }}>
      <View styleName="horizontal">
        {createEmoticon()}
        <Subtitle style={{ marginLeft: 10 }}>{formatTime()}</Subtitle>
      </View>
      <View styleName="horizontal">
        {createIconAdditionalInformations()}
        {createHasBloodIcon()}
      </View>
    </View>
  );
};

export default PoopDetails;
