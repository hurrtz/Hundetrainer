import * as React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Header,
  Button,
  Text,
  View,
  Footer,
} from 'native-base';

import GameImage from 'assets/images/bo/game.png';
import PawImage from 'assets/images/paw.png';

export interface Props {
  loginForm: any;
  onLogin: Function;
}

export interface State {}

class Login extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Header
          transparent
          noLeft
          noShadow
          style={{
            height: 200,
            padding: 10,
            paddingBottom: 0,
            backgroundColor: '#FFF',
            marginLeft: -10,
            marginTop: -15,
            marginRight: -10,
          }}
        >
          <Image source={GameImage} style={{ width: '100%', height: '100%' }} />
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder>
            <Button block onPress={() => this.props.onLogin()}>
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
