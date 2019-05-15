import React, {
  ReactElement,
  FunctionComponent,
  useEffect,
  EffectCallback,
  useState,
} from 'react';
import { View, Button, Text, NavigationBar, Icon } from '@shoutem/ui';

import { COLORS, CONSISTENCIES, QUALITIES } from 'container/Poop/constants';
import {
  createSelectDate,
  createSelectTime,
  createSelectQuality,
  createSelectConsistency,
  createSelectColor,
  createSelectHasBlood,
  createSelectIsConspicuous,
  createSelectAdditionalInformation,
} from '../shared';
import { Poop, QUALITY, CONSISTENCY, COLOR } from 'container/Poop/types';
import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
  poop: Poop;
  onSave: Function;
  onEditPoop: Function;
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

const PoopEdit: FunctionComponent<Props> = ({
  navigation,
  poop,
  onSave,
  onEditPoop,
}: Props): ReactElement => {
  const [date, setDate] = useState(new Date(poop.date));
  const [time, setTime] = useState(new Date(poop.date));
  const [quality, setQuality] = useState(poop.quality);
  const [consistency, setConsistency] = useState(poop.consistency);
  const [color, setColor] = useState(poop.color);
  const [hasBlood, setHasBlood] = useState(poop.hasBlood);
  const [isConspicuous, setIsConspicuous] = useState(poop.isConspicuous);
  const [additionalInformation, setAdditionalInformation] = useState(
    poop.additionalInformation,
  );

  useEffect(
    (): EffectCallback => (): void => {
      onEditPoop({ id: undefined });
    },
  );

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
    setIsConspicuous(isConspicuous || value);

  const handleAdditionalInformationChange = (
    value: State['additionalInformation'],
  ): void => setAdditionalInformation(value);

  return (
    <View>
      <NavigationBar
        leftComponent={
          <Icon name="back" onPress={(): boolean => navigation.goBack()} />
        }
        rightComponent={
          // @ts-ignore
          <Icon name="close" onPress={navigation.getParam('onDelete')} />
        }
        title="Bearbeiten"
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

export default PoopEdit;
