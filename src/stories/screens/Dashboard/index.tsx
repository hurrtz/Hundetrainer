import React, { Component } from 'react';
import { Image } from 'react-native';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Body,
  Right,
  H1,
  Subtitle,
} from 'native-base';

// @ts-ignore
import { version } from '../../../../package.json';

import { TNavigation } from 'apptypes/base';
import BoGamePicture from 'assets/images/bo/game.png';

interface Props {
  navigation: TNavigation;
}

interface State {}

class Dashboard extends Component<Props, State> {
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
            <Title>Dashboard</Title>
          </Body>

          <Right />
        </Header>
        <Content>
          <Image
            source={BoGamePicture}
            style={{
              width: 2000,
              maxWidth: '100%',
              maxHeight: '100%',
              resizeMode: 'cover',
            }}
          />

          <H1
            style={{
              position: 'absolute',
              top: 0,
              width: '100%',
              textAlign: 'center',
              marginTop: 25,
            }}
          >
            Hundetrainer
          </H1>
          <Subtitle
            style={{
              position: 'absolute',
              top: 50,
              width: '100%',
              textAlign: 'center',
              marginTop: 25,
              color: '#000',
            }}
          >
            {version}
          </Subtitle>
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
