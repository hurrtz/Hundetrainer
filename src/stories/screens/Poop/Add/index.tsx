import React, { Component, Fragment } from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Label,
  Textarea,
  ListItem,
  Radio,
  Left,
  Right,
} from 'native-base';
import DatePicker from 'react-native-datepicker';

import { TNavigation } from 'apptypes/base';
import { QUALITY } from 'apptypes/poop';

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

class PoopAdd extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const now = new Date();

    this.state = {
      date: now,
      time: now,
      quality: QUALITY.GOOD,
      additionalInformation: '',
    };
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

  createListQualityItem({
    quality,
    label,
    noBorder,
  }: {
    quality: QUALITY;
    label: string;
    noBorder?: boolean;
  }) {
    const { quality: selectedQuality } = this.state;

    return (
      <ListItem
        selected={selectedQuality === quality}
        onPress={() => {
          this.handleChangeQuality(quality);
        }}
        noBorder={noBorder}
      >
        <Left>
          <Text>{label}</Text>
        </Left>
        <Right>
          <Radio
            selectedColor={'#5cb85c'}
            selected={selectedQuality === quality}
          />
        </Right>
      </ListItem>
    );
  }

  createListQuality() {
    return (
      <Fragment>
        {this.createListQualityItem({ quality: QUALITY.GOOD, label: 'gut' })}
        {this.createListQualityItem({
          quality: QUALITY.MEDIUM,
          label: 'mäßig',
        })}
        {this.createListQualityItem({
          quality: QUALITY.BAD,
          label: 'schlecht',
          noBorder: true,
        })}
      </Fragment>
    );
  }

  render() {
    const { date, time, additionalInformation } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Tag:</Label>
              <DatePicker
                mode="date"
                format="DD.MM.YYYY"
                confirmBtnText="OK"
                cancelBtnText="Abbrechen"
                date={date}
                onDateChange={(_dateString, changedDate: Date) =>
                  this.handleChangeDate(changedDate)
                }
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    padding: 5,
                    alignItems: 'flex-start',
                  },
                }}
              />
            </Item>

            <Item>
              <Label>Uhrzeit:</Label>
              <DatePicker
                mode="time"
                format="HH:mm \U\h\r"
                confirmBtnText="OK"
                cancelBtnText="Abbrechen"
                date={time}
                onDateChange={(_dateString, changedDate: Date) =>
                  this.handleChangeTime(changedDate)
                }
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    padding: 5,
                    alignItems: 'flex-start',
                  },
                }}
                is24Hour
              />
            </Item>

            <Item>
              <Label>Qualität:</Label>
              <Content>{this.createListQuality()}</Content>
            </Item>

            <Content padder>
              <Textarea
                rowSpan={5}
                placeholder="Sonstige Informationen"
                style={{
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: '#CCC',
                  marginLeft: -5,
                  marginRight: -5,
                  marginTop: -5,
                }}
                defaultValue={additionalInformation}
                onChangeText={(text: string) =>
                  this.handleAdditionalInformationChange(text)
                }
              />
            </Content>
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

export default PoopAdd;
