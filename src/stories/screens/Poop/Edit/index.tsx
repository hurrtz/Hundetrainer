import React, { Component } from 'react';
import { Container, Content, Button, Text, Form } from 'native-base';

import {
  createSelectDate,
  createSelectTime,
  createSelectQuality,
  createSelectAdditionalInformation,
} from '../shared';
import { TNavigation } from 'apptypes/base';
import { IPoop, QUALITY } from 'apptypes/poop';

interface Props {
  navigation: TNavigation;
  onSave: Function;
}

interface State {
  date: Date;
  time: Date;
  quality: QUALITY;
  additionalInformation: string;
}

class PoopEdit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const poop: IPoop = props.navigation.getParam('poop');

    this.state = {
      ...poop,
      date: new Date(poop.date),
      time: new Date(poop.date),
    };

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeQuality = this.handleChangeQuality.bind(this);
    this.handleAdditionalInformationChange = this.handleAdditionalInformationChange.bind(
      this,
    );
  }

  handleClose() {
    const { onSave } = this.props;
    const { date, time, quality, additionalInformation } = this.state;

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

  handleAdditionalInformationChange(text: string) {
    this.setState(prevState => ({ ...prevState, additionalInformation: text }));
  }

  render() {
    const { date, time, additionalInformation, quality } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            {createSelectDate({
              date,
              handleChangeDate: this.handleChangeDate,
            })}

            {createSelectTime({
              time,
              handleChangeTime: this.handleChangeTime,
            })}

            {createSelectQuality({
              qualitySelected: quality,
              handleChangeQuality: this.handleChangeQuality,
            })}

            {createSelectAdditionalInformation({
              additionalInformation,
              handleAdditionalInformationChange: this
                .handleAdditionalInformationChange,
            })}
          </Form>

          <Button
            primary
            block
            style={{ marginLeft: 15, marginRight: 15 }}
            onPress={() => this.handleClose()}
          >
            <Text style={{ color: '#FFF' }}>Speichern</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default PoopEdit;
