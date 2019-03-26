import React, { Component } from 'react';
import { Item, Input, Icon, Form, Toast } from 'native-base';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { TNavigation } from 'apptypes/base';
import Login from 'stories/screens/Login';

import { required, email } from 'validators';

interface Props extends InjectedFormProps {
  navigation: TNavigation;
  valid: boolean;
}

interface State {}

class LoginForm extends Component<Props, State> {
  textInput: Input;

  renderInput({ input, meta: { touched, error } }) {
    return (
      <Item error={error && touched}>
        <Icon active name={input.name === 'email' ? 'person' : 'unlock'} />
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === 'email' ? 'E-Mail' : 'Passwort'}
          secureTextEntry={input.name === 'password' ? true : false}
          {...input}
        />
      </Item>
    );
  }

  login() {
    const { valid, navigation } = this.props;

    if (valid) {
      navigation.navigate('Drawer');
    } else {
      Toast.show({
        text: 'Enter Valid Username & password!',
        duration: 2000,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  }

  render() {
    const form = (
      <Form>
        <Field
          name="email"
          component={this.renderInput}
          validate={[email, required]}
        />
        <Field
          name="password"
          component={this.renderInput}
          validate={[required]}
        />
      </Form>
    );

    return <Login loginForm={form} onLogin={() => this.login()} />;
  }
}

const LoginContainer = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginContainer;
