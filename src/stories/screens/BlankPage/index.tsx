import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';
import { NavigationComponent } from 'react-navigation';

import styles from './styles';

export interface Props {
  navigation: NavigationComponent;
}

export interface State {}

class BlankPage extends Component<Props, State> {
  render() {
    const {
      navigation: {
        state: { params: navigationParams },
      },
    } = this.props;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>
              {navigationParams ? navigationParams.name.item : 'Blank Page'}
            </Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          <Text>
            {navigationParams !== undefined
              ? navigationParams.name.item
              : 'Create Something Awesome . . .'}
          </Text>
        </Content>
      </Container>
    );
  }
}

export default BlankPage;
