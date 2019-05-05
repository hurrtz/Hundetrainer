import React, {
  Fragment,
  ReactElement,
  ReactNode,
  FunctionComponent,
} from 'react';
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
import { AddressType, ADDRESS_TYPES } from 'container/AddressBook/constants';

interface Props {
  navigation: Navigation;
  addresses: AddressBookEntry[];
  onShowDetails: Function;
  onEditPoop: Function;
}

const AddressBookDetails: FunctionComponent<Props> = ({
  navigation,
  onShowDetails,
  addresses,
}: Props): ReactElement => {
  const createDefault = (): ReactElement => (
    <Fragment>
      <Title>Keine Daten vorhanden</Title>
      <Text styleName="md-gutter-top">
        Bitte hinterlegen Sie Adressen, um einen Überblick über alle relevanten
        Orte zu schaffen, die Ihren Hund betreffen.
      </Text>
    </Fragment>
  );

  const onShowDetails = ({ id }: { id: string }): void => {
    onShowDetails({ id });
    navigation.push('AddressBookDetails');
  };

  const createAddressesList = (): ReactNode => {
    if (addresses.length === 0) {
      return createDefault();
    }

    return addresses.map(
      (address: AddressBookEntry): ReactElement => (
        <TouchableOpacity
          key={address.id}
          onPress={(): void => onShowDetails({ id: address.id })}
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
                    ({ value }: AddressType): boolean => value === address.type,
                  ).title
                }
              </Text>
            </Card>
          </View>
        </TouchableOpacity>
      ),
    );
  };

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
      <StandardView noPaddingTop>{createAddressesList()}</StandardView>
    </Screen>
  );
};

export default AddressBookDetails;
