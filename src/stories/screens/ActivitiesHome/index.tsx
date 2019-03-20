import React, { Component } from 'react';
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

class ActivitiesHome extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Daheim</Title>
            <Subtitle>Übungen</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

export default ActivitiesHome;