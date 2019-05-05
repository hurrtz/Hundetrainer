import React, { PureComponent, Fragment, ReactElement, ReactNode } from 'react';
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
import { AddressBookEntry } from 'container/AddressBook/types';
import { ADDRESS_TYPE, ADDRESS_TYPES } from 'container/AddressBook/constants';

interface Props {
  navigation: Navigation;
  addresses: AddressBookEntry[];
  onShowDetails: Function;
  onEditPoop: Function;
}

class AddressBookDetails extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onShowDetails = this.onShowDetails.bind(this);
  }

  createDefault(): ReactElement {
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

  onShowDetails({ id }: { id: string }): void {
    const { navigation, onShowDetails } = this.props;

    onShowDetails({ id });
    navigation.push('AddressBookDetails');
  }

  createAddressesList(): ReactNode {
    const { addresses } = this.props;

    if (addresses.length === 0) {
      return this.createDefault();
    }

    return addresses.map(
      (address: AddressBookEntry): ReactElement => (
        <TouchableOpacity
          key={address.id}
          onPress={(): void => this.onShowDetails({ id: address.id })}
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
                {
                  ADDRESS_TYPES.find(
                    ({ value }: ADDRESS_TYPE): boolean =>
                      value === address.type,
                  ).title
                }
              </Text>
            </Card>
          </View>
        </TouchableOpacity>
      ),
    );
  }

  render(): ReactElement {
    const { navigation } = this.props;

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon
              name="sidebar"
              onPress={(): boolean => navigation.toggleDrawer()}
            />
          }
          rightComponent={
            <Icon
              name="plus-button"
              onPress={(): boolean => navigation.push('AddressBookAdd')}
            />
          }
          title="Adressen"
          styleName="inline"
        />
        <StandardView noPaddingTop>{this.createAddressesList()}</StandardView>
      </Screen>
    );
  }
}

export default AddressBookDetails;
