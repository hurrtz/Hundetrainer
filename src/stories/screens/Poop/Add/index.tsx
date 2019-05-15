import React, { ReactElement, FunctionComponent, useState } from 'react';
import { View, Text, Button, NavigationBar, Icon } from '@shoutem/ui';

import { COLORS, CONSISTENCIES, QUALITIES } from 'container/Poop/constants';
import { QUALITY, CONSISTENCY, COLOR } from 'container/Poop/types';
import { StandardView } from 'ui/Layout';

import {
  createSelectDate,
  createSelectTime,
  createSelectConsistency,
  createSelectQuality,
  createSelectColor,
  createSelectHasBlood,
  createSelectIsConspicuous,
  createSelectAdditionalInformation,
} from '../shared';

interface Props {
  navigation: Navigation;
  onSave: Function;
}

interface State {
  date: Date;
  time: Date;
  quality: QUALITY;
  consistency: CONSISTENCY;
  color: COLOR;
  hasBlood: boolean;
  isConspicuous: boolean;
  additionalInformation: string;
}

const PoopAdd: FunctionComponent<Props> = ({
  navigation,
  onSave,
}: Props): ReactElement => {
  const now = new Date();

  const [date, setDate] = useState(now);
  const [time, setTime] = useState(now);
  const [quality, setQuality] = useState('GOOD');
  const [consistency, setConsistency] = useState('NORMAL');
  const [color, setColor] = useState('MEDIUM');
  const [hasBlood, setHasBlood] = useState(false);
  const [isConspicuous, setIsConspicuous] = useState(false);
  const [additionalInformation, setAdditionalInformation] = useState('');

  const handleClose = (): void => {
    if (onSave) {
      onSave({
        date: new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          time.getHours(),
          time.getMinutes(),
          time.getSeconds(),
          0,
        ).toISOString(),
        quality,
        consistency,
        color,
        hasBlood,
        isConspicuous,
        additionalInformation,
      });
    }
  };

  const handleChangeDate = (value: State['date']): void => setDate(value);

  const handleChangeTime = (value: State['time']): void => setTime(value);

  const handleChangeQuality = ({ value }: { value: State['quality'] }): void =>
    setQuality(value);

  const handleChangeConsistency = ({
    value,
  }: {
    value: State['consistency'];
  }): void => setConsistency(value);

  const handleChangeColor = ({ value }: { value: State['color'] }): void =>
    setColor(value);

  const handleChangeHasBlood = (value: State['hasBlood']): void => {
    setHasBlood(value);
    setIsConspicuous(isConspicuous || value);
  };

  const handleChangeIsConspicuous = (value: State['isConspicuous']): void =>
    setIsConspicuous(hasBlood || value);

  const handleAdditionalInformationChange = (
    value: State['additionalInformation'],
  ): void => setAdditionalInformation(value);

  return (
    <View>
      <NavigationBar
        leftComponent={
          <Icon name="back" onPress={(): boolean => navigation.goBack()} />
        }
        title="Stuhlgang hinzufügen"
        styleName="inline"
      />

      <StandardView noPaddingTop>
        <View>
          {createSelectDate({
            date,
            handleChangeDate,
          })}

          {createSelectTime({
            time,
            handleChangeTime,
          })}
        </View>

        <View styleName="md-gutter-top">
          <Text styleName="sm-gutter-bottom">Qualität:</Text>

          {createSelectQuality({
            qualities: QUALITIES,
            qualitySelected: QUALITIES.find(
              ({ value }): boolean => value === quality,
            ),
            handleChangeQuality,
          })}
        </View>

        <View styleName="md-gutter-top">
          <Text styleName="sm-gutter-bottom">Konsistenz:</Text>

          {createSelectConsistency({
            consistencies: CONSISTENCIES,
            consistencySelected: CONSISTENCIES.find(
              ({ value }): boolean => value === consistency,
            ),
            handleChangeConsistency,
          })}
        </View>

        <View styleName="md-gutter-top md-gutter-bottom">
          <Text styleName="sm-gutter-bottom">Farbe:</Text>

          {createSelectColor({
            colors: COLORS,
            colorSelected: COLORS.find(({ value }): boolean => value === color),
            handleChangeColor,
          })}
        </View>

        <View styleName="md-gutter-top">
          {createSelectHasBlood({
            hasBlood,
            handleChangeHasBlood,
          })}
        </View>

        <View styleName="md-gutter-top">
          {createSelectIsConspicuous({
            isConspicuous,
            handleChangeIsConspicuous,
          })}
        </View>

        <View styleName="lg-gutter-top">
          {createSelectAdditionalInformation({
            additionalInformation,
            handleAdditionalInformationChange,
          })}
        </View>

        <Button
          styleName="secondary lg-gutter-top xl-gutter-bottom"
          onPress={(): void => handleClose()}
        >
          <Text>Speichern</Text>
        </Button>
      </StandardView>
    </View>
  );
};

export default PoopAdd;
