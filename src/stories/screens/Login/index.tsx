import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Button, Text, View, Footer } from 'native-base';

import GameImage from 'assets/images/bo/game.png';
import PawImage from 'assets/images/paw.png';

interface Props {
  loginForm: any;
  onLogin: Function;
}

interface State {}

class Login extends Component<Props, State> {
  render() {
    const { loginForm, onLogin } = this.props;

    return (
      <Container>
        <Content>
          <Image source={GameImage} style={{ width: '100%', height: '200%' }} />

          {loginForm}

          <View padder>
            <Button block onPress={() => onLogin()}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>

        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <View
            style={{ alignItems: 'center', opacity: 0.5, flexDirection: 'row' }}
          >
            <View padder>
              <Text style={{ color: '#000' }}>May the dog be wuff you. </Text>
            </View>
            <Image source={PawImage} style={{ width: 25, height: 25 }} />
          </View>
        </Footer>
      </Container>
    );
  }
}

export default Login;
