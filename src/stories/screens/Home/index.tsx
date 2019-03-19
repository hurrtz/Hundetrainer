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
  Body,
  Right,
  List,
  ListItem,
} from 'native-base';
import { NavigationComponent } from 'react-navigation';

import styles from './styles';

export interface Props {
  navigation: NavigationComponent;
  list: [string];
}

export interface State {}

class Home extends Component<Props, State> {
  render() {
    const { navigation, list } = this.props;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => navigation.navigate('DrawerOpen')}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  navigation.navigate('BlankPage', {
                    name: { item },
                  })
                }
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
