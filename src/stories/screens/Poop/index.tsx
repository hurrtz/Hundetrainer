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
} from 'native-base';
import { NavigationComponent } from 'react-navigation';

import { IPoop } from 'apptypes/poop';
import PoopList from './PoopList';

interface Props {
  navigation: NavigationComponent;
  poops: IPoop[];
  toggleAddPoop: Function;
}

interface State {}

class Poop extends Component<Props, State> {
  showPoopModal() {
    const { toggleAddPoop } = this.props;

    toggleAddPoop();
  }

  render() {
    const { poops, navigation } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <IconComponent
              onPress={() => navigation.toggleDrawer()}
              name="menu"
              size={25}
            />
          </Left>

          <Body>
            <Title>Stuhlgang</Title>
          </Body>

          <Right>
            <IconComponent
              onPress={() => this.showPoopModal()}
              name="plus"
              size={25}
            />
          </Right>
        </Header>

        <Content>
          <PoopList poops={poops} />
        </Content>
      </Container>
    );
  }
}

export default Poop;
