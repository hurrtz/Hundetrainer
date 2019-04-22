import React, { PureComponent, Fragment } from 'react';
import {
  Screen,
  NavigationBar,
  Icon,
  Title,
  Text,
  View,
  Card,
  Subtitle,
  TouchableOpacity,
} from '@shoutem/ui';

import { StandardView } from 'ui/Layout';
import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import { ADDRESS_TYPES } from 'container/AddressBook/constants';

interface Props {
  navigation: TNavigation;
  addresses: IAddressBookEntry[];
  onShowDetails: Function;
  onEditPoop: Function;
}

interface State {}

class AddressBookDetails extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onShowDetails = this.onShowDetails.bind(this);
  }

  createDefault() {
    return (
      <Fragment>
        <Title>Keine Daten vorhanden</Title>
        <Text styleName="md-gutter-top">
          Bitte hinterlegen Sie Adressen, um einen Überblick über alle
          relevanten Orte zu schaffen, die Ihren Hund betreffen.
        </Text>
      </Fragment>
    );
  }

  onShowDetails({ id }: { id: String }) {
    const { navigation, onShowDetails } = this.props;

    onShowDetails({ id });
    navigation.push('AddressBookDetails');
  }

  createAddressesList() {
    const { addresses } = this.props;

    if (addresses.length === 0) {
      return this.createDefault();
    }

    return addresses.map((address: IAddressBookEntry) => (
      <TouchableOpacity
        key={address.id}
        onPress={() => this.onShowDetails({ id: address.id })}
      >
        <View styleName="md-gutter-top">
          <Card
            style={{
              width: '100%',
              padding: 10,
            }}
          >
            <Subtitle>{address.name}</Subtitle>
            <Text>
              {ADDRESS_TYPES.find(({ value }) => value === address.type).title}
            </Text>
          </Card>
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon name="sidebar" onPress={() => navigation.toggleDrawer()} />
          }
          rightComponent={
            <Icon
              name="plus-button"
              onPress={() => navigation.push('AddressBookAdd')}
            />
          }
          title="Adressen"
          styleName="inline"
        />
        <StandardView>{this.createAddressesList()}</StandardView>
      </Screen>
    );
  }
}

export default AddressBookDetails;
