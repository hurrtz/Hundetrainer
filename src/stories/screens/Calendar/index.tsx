import React, { Component } from 'react';
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

export interface Props {
  navigation: NavigationComponent;
}

export interface State {}

class Calendar extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Kalender</Title>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

export default Calendar;
