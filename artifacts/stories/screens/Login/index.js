import * as React from 'react';
import { Image } from 'react-native';
import { Container, Content, Header, Button, Text, View, Footer, } from 'native-base';
import GameImage from 'assets/images/bo/game.png';
import PawImage from 'assets/images/paw.png';
class Login extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { transparent: true, noLeft: true, noShadow: true, style: {
                    height: 200,
                    padding: 10,
                    paddingBottom: 0,
                    backgroundColor: '#FFF',
                    marginLeft: -10,
                    marginTop: -15,
                    marginRight: -10,
                } },
                React.createElement(Image, { source: GameImage, style: { width: '100%', height: '100%' } })),
            React.createElement(Content, null,
                this.props.loginForm,
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onLogin() },
                        React.createElement(Text, null, "Login")))),
            React.createElement(Footer, { style: { backgroundColor: '#F8F8F8' } },
                React.createElement(View, { style: { alignItems: 'center', opacity: 0.5, flexDirection: 'row' } },
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: '#000' } }, "May the dog be wuff you. ")),
                    React.createElement(Image, { source: PawImage, style: { width: 25, height: 25 } })))));
    }
}
export default Login;
//# sourceMappingURL=index.js.map