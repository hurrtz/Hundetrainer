import React, { PureComponent } from 'react';
import {
  View,
  Screen,
  Button,
  Text,
  NavigationBar,
  Icon,
  Divider,
  Caption,
} from '@shoutem/ui';

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
import { TNavigation } from 'apptypes/base';
import { IPoop, QUALITY, CONSISTENCY, COLOR } from 'apptypes/poop';
import { StandardView } from 'ui/Layout';

interface Props {
  navigation: TNavigation;
  poop: IPoop;
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

class PoopEdit extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...props.poop,
      date: new Date(props.poop.date),
      time: new Date(props.poop.date),
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

  componentWillUnmount() {
    const { onEditPoop } = this.props;

    onEditPoop({ id: undefined });
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

  handleChangeQuality({ value: quality }: { value: QUALITY }) {
    this.setState(prevState => ({ ...prevState, quality }));
  }

  handleChangeConsistency({ value: consistency }: { value: CONSISTENCY }) {
    this.setState(prevState => ({ ...prevState, consistency }));
  }

  handleChangeColor({ value: color }: { value: COLOR }) {
    this.setState(prevState => ({ ...prevState, color }));
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
          rightComponent={
            <Icon name="error" onPress={navigation.getParam('onDelete')} />
          }
          title="Bearbeiten"
          styleName="inline"
        />

        <StandardView noPaddingTop>
          <Divider styleName="section-header">
            <Caption>Zeitpunkt</Caption>
          </Divider>

          <View styleName="md-gutter-top">
            {createSelectDate({
              date,
              handleChangeDate: this.handleChangeDate,
            })}

            {createSelectTime({
              time,
              handleChangeTime: this.handleChangeTime,
            })}
          </View>

          <Divider styleName="section-header lg-gutter-top">
            <Caption>Eigenschaften</Caption>
          </Divider>

          <View styleName="horizontal v-center md-gutter-top">
            <Text>Qualität:</Text>

            {createSelectQuality({
              qualities: QUALITIES,
              qualitySelected: QUALITIES.find(({ value }) => value === quality),
              handleChangeQuality: this.handleChangeQuality,
            })}
          </View>

          <View styleName="horizontal v-center md-gutter-top">
            <Text>Konsistenz:</Text>

            {createSelectConsistency({
              consistencies: CONSISTENCIES,
              consistencySelected: CONSISTENCIES.find(
                ({ value }) => value === consistency,
              ),
              handleChangeConsistency: this.handleChangeConsistency,
            })}
          </View>

          <View styleName="horizontal v-center md-gutter-top">
            <Text>Farbe:</Text>

            {createSelectColor({
              colors: COLORS,
              colorSelected: COLORS.find(({ value }) => value === color),
              handleChangeColor: this.handleChangeColor,
            })}
          </View>

          <Divider styleName="section-header lg-gutter-top">
            <Caption>Sonstige Merkmale</Caption>
          </Divider>

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
            styleName="full-width lg-gutter-top"
            onPress={() => this.handleClose()}
          >
            <Text>Speichern</Text>
          </Button>
        </StandardView>
      </Screen>
    );
  }
}

export default PoopEdit;
