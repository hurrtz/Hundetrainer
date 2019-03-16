import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Welcome</Title>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 40,
            paddingHorizontal: 10
          }}
        >
          <Card>
            <CardItem>
              <Text>Welcome to Candy Land Folks ;)</Text>
            </CardItem>
            <CardItem>
              <Text>Press Button to fetch Github Repos</Text>
            </CardItem>
          </Card>
          <Button dark block onPress={() => {}} style={{ marginTop: 40 }}>
            <Text> Fetch Github Repos </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
