import React, { Component } from 'react';
import { COLORS } from 'container/Poop/reducers';
import {
  View,
  Screen,
  Text,
  Button,
  NavigationBar,
  Icon,
  Divider,
} from '@shoutem/ui';

import { TNavigation } from 'apptypes/base';
import { QUALITY, CONSISTENCY, COLOR } from 'apptypes/poop';
import { StandardView } from 'ui/Layout';

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

interface Props {
  navigation: TNavigation;
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

class PoopAdd extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const now = new Date();

    this.state = {
      date: now,
      time: now,
      quality: QUALITY.GOOD,
      consistency: CONSISTENCY.NORMAL,
      color: COLOR.MEDIUM,
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

  handleClose() {
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

  handleChangeDate(date: Date) {
    this.setState(prevState => ({ ...prevState, date }));
  }

  handleChangeTime(time: Date) {
    this.setState(prevState => ({ ...prevState, time }));
  }

  handleChangeQuality(value: QUALITY) {
    this.setState(prevState => ({ ...prevState, quality: value }));
  }

  handleChangeConsistency(value: CONSISTENCY) {
    this.setState(prevState => ({ ...prevState, consistency: value }));
  }

  handleChangeColor(value: COLOR) {
    this.setState(prevState => ({ ...prevState, color: value }));
  }

  handleChangeHasBlood(hasBlood: boolean) {
    this.setState(prevState => ({
      ...prevState,
      hasBlood,
      isConspicuous: prevState.isConspicuous || hasBlood,
    }));
  }

  handleChangeIsConspicuous(isConspicuous: boolean) {
    this.setState(prevState => ({
      ...prevState,
      isConspicuous: prevState.hasBlood || isConspicuous,
    }));
  }

  handleAdditionalInformationChange(text: string) {
    this.setState(prevState => ({ ...prevState, additionalInformation: text }));
  }

  render() {
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
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="back" onPress={() => navigation.goBack()} />
          }
          title="Stuhlgang hinzufügen"
          styleName="inline"
        />

        <StandardView>
          {createSelectDate({
            date,
            handleChangeDate: this.handleChangeDate,
          })}

          {createSelectTime({
            time,
            handleChangeTime: this.handleChangeTime,
          })}

          {/* {createSelectQuality({
            qualitySelected: quality,
            handleChangeQuality: this.handleChangeQuality,
          })} */}

          {/* {createSelectConsistency({
            consistencySelected: consistency,
            handleChangeConsistency: this.handleChangeConsistency,
          })} */}

          {createSelectColor({
            colors: COLORS,
            colorSelected: COLORS.find(({ value }) => value === color),
            handleChangeColor: this.handleChangeColor,
          })}

          {createSelectHasBlood({
            hasBlood,
            handleChangeHasBlood: this.handleChangeHasBlood,
          })}

          {createSelectIsConspicuous({
            isConspicuous,
            handleChangeIsConspicuous: this.handleChangeIsConspicuous,
          })}

          <Divider />

          {createSelectAdditionalInformation({
            additionalInformation,
            handleAdditionalInformationChange: this
              .handleAdditionalInformationChange,
          })}

          <Divider />

          <Button styleName="full-width" onPress={() => this.handleClose()}>
            <Text>Speichern</Text>
          </Button>
        </StandardView>
      </Screen>
    );
  }
}

export default PoopAdd;
