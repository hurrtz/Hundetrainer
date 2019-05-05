import React, { PureComponent, ReactElement } from 'react';
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

class PoopAdd extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const now = new Date();

    this.state = {
      date: now,
      time: now,
      quality: 'GOOD',
      consistency: 'NORMAL',
      color: 'MEDIUM',
      hasBlood: false,
      isConspicuous: false,
      additionalInformation: '',
    };

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeQuality = this.handleChangeQuality.bind(this);
    this.handleChangeConsistency = this.handleChangeConsistency.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeHasBlood = this.handleChangeHasBlood.bind(this);
    this.handleChangeIsConspicuous = this.handleChangeIsConspicuous.bind(this);
    this.handleAdditionalInformationChange = this.handleAdditionalInformationChange.bind(
      this,
    );
  }

  handleClose(): void {
    const { onSave } = this.props;
    const {
      date,
      time,
      quality,
      consistency,
      color,
      hasBlood,
      isConspicuous,
      additionalInformation,
    } = this.state;

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
  }

  handleChangeDate(date: State['date']): void {
    this.setState((prevState: State): State => ({ ...prevState, date }));
  }

  handleChangeTime(time: State['time']): void {
    this.setState((prevState: State): State => ({ ...prevState, time }));
  }

  handleChangeQuality({ value: quality }: { value: State['quality'] }): void {
    this.setState((prevState: State): State => ({ ...prevState, quality }));
  }

  handleChangeConsistency({
    value: consistency,
  }: {
    value: State['consistency'];
  }): void {
    this.setState((prevState: State): State => ({ ...prevState, consistency }));
  }

  handleChangeColor({ value: color }: { value: State['color'] }): void {
    this.setState((prevState: State): State => ({ ...prevState, color }));
  }

  handleChangeHasBlood(hasBlood: State['hasBlood']): void {
    this.setState(
      (prevState: State): State => ({
        ...prevState,
        hasBlood,
        isConspicuous: prevState.isConspicuous || hasBlood,
      }),
    );
  }

  handleChangeIsConspicuous(isConspicuous: State['isConspicuous']): void {
    this.setState(
      (prevState: State): State => ({
        ...prevState,
        isConspicuous: prevState.hasBlood || isConspicuous,
      }),
    );
  }

  handleAdditionalInformationChange(text: State['additionalInformation']): void {
    this.setState(
      (prevState: State): State => ({
        ...prevState,
        additionalInformation: text,
      }),
    );
  }

  render(): ReactElement {
    const { navigation } = this.props;

    const {
      date,
      time,
      quality,
      consistency,
      color,
      hasBlood,
      isConspicuous,
      additionalInformation,
    } = this.state;

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
              handleChangeDate: this.handleChangeDate,
            })}

            {createSelectTime({
              time,
              handleChangeTime: this.handleChangeTime,
            })}
          </View>

          <View styleName="md-gutter-top">
            <Text styleName="sm-gutter-bottom">Qualität:</Text>

            {createSelectQuality({
              qualities: QUALITIES,
              qualitySelected: QUALITIES.find(
                ({ value }): boolean => value === quality,
              ),
              handleChangeQuality: this.handleChangeQuality,
            })}
          </View>

          <View styleName="md-gutter-top">
            <Text styleName="sm-gutter-bottom">Konsistenz:</Text>

            {createSelectConsistency({
              consistencies: CONSISTENCIES,
              consistencySelected: CONSISTENCIES.find(
                ({ value }): boolean => value === consistency,
              ),
              handleChangeConsistency: this.handleChangeConsistency,
            })}
          </View>

          <View styleName="md-gutter-top md-gutter-bottom">
            <Text styleName="sm-gutter-bottom">Farbe:</Text>

            {createSelectColor({
              colors: COLORS,
              colorSelected: COLORS.find(
                ({ value }): boolean => value === color,
              ),
              handleChangeColor: this.handleChangeColor,
            })}
          </View>

          <View styleName="md-gutter-top">
            {createSelectHasBlood({
              hasBlood,
              handleChangeHasBlood: this.handleChangeHasBlood,
            })}
          </View>

          <View styleName="md-gutter-top">
            {createSelectIsConspicuous({
              isConspicuous,
              handleChangeIsConspicuous: this.handleChangeIsConspicuous,
            })}
          </View>

          <View styleName="lg-gutter-top">
            {createSelectAdditionalInformation({
              additionalInformation,
              handleAdditionalInformationChange: this
                .handleAdditionalInformationChange,
            })}
          </View>

          <Button
            styleName="secondary lg-gutter-top xl-gutter-bottom"
            onPress={(): void => this.handleClose()}
          >
            <Text>Speichern</Text>
          </Button>
        </StandardView>
      </View>
    );
  }
}

export default PoopAdd;
