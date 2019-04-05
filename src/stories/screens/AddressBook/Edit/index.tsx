import React, { Component } from 'react';
import { Container, Content, H1 } from 'native-base';

import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookEdit extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Content padder>
          <H1>Adresse ändern</H1>
        </Content>
      </Container>
    );
  }
}

export default AddressBookEdit;
