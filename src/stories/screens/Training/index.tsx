import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Body,
  Right,
  Toast,
  Card,
  CardItem,
  Text,
} from 'native-base';
import { NavigationComponent } from 'react-navigation';

import { storeData, retrieveData } from 'storage';
import { IPoop, SMELL, QUALITY } from 'apptypes/poop';
import PoopAddModal from 'stories/modals/Poop/add';

export interface Props {
  navigation: NavigationComponent;
  onAddPoop: Function;
  poops: IPoop[];
}

export interface State {
  addPoopModalVisible: boolean;
}

class Training extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      addPoopModalVisible: false,
    };

    this.showModalAddPoop = this.showModalAddPoop.bind(this);
    this.onSaveAddPoop = this.onSaveAddPoop.bind(this);
  }

  showModalAddPoop(state: boolean) {
    this.setState(prevState => ({
      ...prevState,
      addPoopModalVisible: state,
    }));
  }

  onSaveAddPoop(dataFromModal: { [prop: string]: any }) {
    retrieveData('poops', (currentPoops: IPoop[]) => {
      const { onAddPoop } = this.props;
      const newPoop = { ...dataFromModal };
      const poops = [...(currentPoops || [])];

      storeData({
        key: 'poops',
        value: [...poops, newPoop],
        callback: () => {
          onAddPoop(newPoop);

          Toast.show({
            type: 'success',
            text: 'Stuhlgang gespeichert!',
          });
        },
      });
    });

    this.showModalAddPoop(false);
  }

  createPoops() {
    const { poops } = this.props;

    return poops.map((poop: IPoop) => (
      <Card key={poop.date}>
        <CardItem>
          <Body>
            <Text>{poop.date}</Text>
          </Body>
        </CardItem>
      </Card>
    ));
  }

  render() {
    const { addPoopModalVisible } = this.state;

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Training</Title>
          </Body>
          <Right>
            <IconComponent
              name="emoticon-poop"
              size={25}
              onPress={() => this.showModalAddPoop(true)}
            />
          </Right>
        </Header>
        <Content>{this.createPoops()}</Content>

        <PoopAddModal
          isVisible={addPoopModalVisible}
          onClose={this.onSaveAddPoop}
        />
      </Container>
    );
  }
}

export default Training;
