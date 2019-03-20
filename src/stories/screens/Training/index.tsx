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
} from 'native-base';
import { NavigationComponent } from 'react-navigation';

import { storeData, retrieveData } from 'storage';
import PoopAddModal from 'stories/modals/Poop/add';

export interface Props {
  navigation: NavigationComponent;
}

export interface State {
  addPoopModalVisible: boolean;
}

class Training extends Component<Props, State> {
  constructor(props) {
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
    retrieveData('poops', currentPoops => {
      const poops = [...(currentPoops || [])];

      storeData({
        key: 'poops',
        value: [...poops, { ...dataFromModal }],
        callback: () => {
          Toast.show({
            type: 'success',
            text: 'Stuhlgang gespeichert!',
          });
        },
      });
    });

    this.showModalAddPoop(false);
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
        <Content />

        <PoopAddModal
          isVisible={addPoopModalVisible}
          onClose={this.onSaveAddPoop}
        />
      </Container>
    );
  }
}

export default Training;
