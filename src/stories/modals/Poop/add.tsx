import React, { Component, Fragment } from 'react';
import { Modal } from 'react-native';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
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

import { QUALITY, IPoop } from 'apptypes/poop';

interface Props {
  isVisible: boolean;
  onClose: Function;
  onClickCancel: Function;
}

interface State extends IPoop {}

class PoopAddModal extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toISOString(),
      quality: QUALITY.GOOD,
      additionalInformation: '',
    };
  }

  handleClose() {
    const { onClose } = this.props;
    const { quality, additionalInformation } = this.state;

    if (onClose) {
      onClose({
        date: new Date().toISOString(),
        quality,
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
    const { isVisible, onClickCancel } = this.props;
    const { date, additionalInformation } = this.state;

    return (
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <Container>
          <Header>
            <Left>
              <IconComponent
                name="cancel"
                size={25}
                onPress={() => onClickCancel()}
              />
            </Left>
            <Body>
              <Text>Neuer Stuhlgang</Text>
            </Body>
            <Right />
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
              <Button primary full onPress={() => this.handleClose()}>
                <Text style={{ color: '#FFF' }}>Speichern</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Modal>
    );
  }
}

export default PoopAddModal;
