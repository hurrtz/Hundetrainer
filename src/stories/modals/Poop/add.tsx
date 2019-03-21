import React, { Component, Fragment } from 'react';
import { Modal } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  DatePicker,
  Header,
  Body,
  Footer,
  FooterTab,
  Form,
  Item,
  Label,
  Textarea,
  ListItem,
  Radio,
  Left,
  Right,
} from 'native-base';

import { QUALITY, SMELL, IPoop } from 'apptypes/poop';

export interface Props {
  isVisible: boolean;
  onClose: Function;
}

export interface State extends IPoop {}

class PoopAddModal extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toISOString(),
      quality: QUALITY.SOLID,
      smell: SMELL.NORMAL,
      additionalInformation: '',
    };
  }

  handleClose() {
    const { onClose } = this.props;
    const { quality, smell, additionalInformation } = this.state;

    if (onClose) {
      onClose({
        date: new Date().toISOString(),
        quality,
        smell,
        additionalInformation,
      });
    }
  }

  handleChangeDate(date: Date) {
    this.setState(prevState => ({ ...prevState, date: date.toISOString() }));
  }

  handleChangeQuality(value: QUALITY) {
    this.setState(prevState => ({ ...prevState, quality: value }));
  }

  handleChangeSmell(value: SMELL) {
    this.setState(prevState => ({ ...prevState, smell: value }));
  }

  handleAdditionalInformationChange(text: string) {
    this.setState(prevState => ({ ...prevState, additionalInformation: text }));
  }

  formatDate() {
    const { date: _date } = this.state;
    const date = new Date(_date);

    return `${date.getDate()}.${date.getMonth() +
      1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} Uhr`;
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
        {this.createListQualityItem({ quality: QUALITY.SOLID, label: 'fest' })}
        {this.createListQualityItem({ quality: QUALITY.SOFT, label: 'weich' })}
        {this.createListQualityItem({
          quality: QUALITY.LIQUID,
          label: 'flüssig',
          noBorder: true,
        })}
      </Fragment>
    );
  }

  createListSmellItem({
    smell,
    label,
    noBorder,
  }: {
    smell: SMELL;
    label: string;
    noBorder?: boolean;
  }) {
    const { smell: selectedSmell } = this.state;

    return (
      <ListItem
        selected={selectedSmell === smell}
        onPress={() => {
          this.handleChangeSmell(smell);
        }}
        noBorder={noBorder}
      >
        <Left>
          <Text>{label}</Text>
        </Left>
        <Right>
          <Radio selectedColor={'#5cb85c'} selected={selectedSmell === smell} />
        </Right>
      </ListItem>
    );
  }

  createListSmell() {
    return (
      <Fragment>
        {this.createListSmellItem({ smell: SMELL.LITTLE, label: 'kaum' })}
        {this.createListSmellItem({ smell: SMELL.NORMAL, label: 'normal' })}
        {this.createListSmellItem({
          smell: SMELL.STRONG,
          label: 'streng',
          noBorder: true,
        })}
      </Fragment>
    );
  }

  render() {
    const { isVisible } = this.props;
    const { date, additionalInformation } = this.state;

    return (
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <Container>
          <Header>
            <Body>
              <Text>Neuer Stuhlgang</Text>
            </Body>
          </Header>

          <Content>
            <Form>
              <Item>
                <Label>Zeitpunkt:</Label>
                <DatePicker
                  defaultDate={new Date(date)}
                  locale={'DE-de'}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType="fade"
                  androidMode="default"
                  placeHolderText={this.formatDate()}
                  textStyle={{ color: 'green' }}
                  placeHolderTextStyle={{ color: '#d3d3d3' }}
                  onDateChange={(changedDate: Date) =>
                    this.handleChangeDate(changedDate)
                  }
                  disabled={false}
                />
              </Item>

              <Item>
                <Label>Qualität:</Label>
                <Content>{this.createListQuality()}</Content>
              </Item>

              <Item>
                <Label>Geruch:</Label>
                <Content>{this.createListSmell()}</Content>
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
          </Content>

          <Footer>
            <FooterTab>
              <Button full onPress={() => this.handleClose()}>
                <Text>Speichern</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Modal>
    );
  }
}

export default PoopAddModal;
