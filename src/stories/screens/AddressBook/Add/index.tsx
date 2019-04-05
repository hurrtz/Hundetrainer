import React, { Component } from 'react';
import { Container, Content, Form } from 'native-base';

import {
  createSelectName,
  createSelectType,
  createSelectAddress,
  createSelectAdditionalInformation,
} from '../shared';

import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {}

class AddressBookAdd extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            {createSelectName()}
            {createSelectType()}
            {createSelectAddress()}
            {createSelectAdditionalInformation({
              additionalInformation: '',
              handleAdditionalInformationChange: () => {},
            })}
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AddressBookAdd;
