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

interface Props {
  navigation: NavigationComponent;
}

interface State {}

class Training extends Component<Props, State> {
  static navigationOptions = {
    drawerLabel: 'trophy',
    drawerIcon: () => <IconComponent name="view-dashboard" size={25} />,
  };

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
            <Title>Übungen</Title>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

export default Training;
