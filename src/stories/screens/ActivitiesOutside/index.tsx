import React, { Component } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Left,
  Body,
  Right,
} from 'native-base';
import { NavigationComponent } from 'react-navigation';

export interface Props {
  navigation: NavigationComponent;
}

export interface State {}

class ActivitiesOutside extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

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
            <Title>Im Freien</Title>
            <Subtitle>Übungen</Subtitle>
          </Body>

          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

export default ActivitiesOutside;
