import React, { PureComponent, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { AddressBookEntry } from 'container/AddressBook/types';
import AddressBookAdd from 'stories/screens/AddressBook/Add';
import { addAddress } from '../actions';

interface Props {
  navigation: Navigation;
  addAddress: Function;
}

class AddressBookAddContainer extends PureComponent<Props> {
  static navigationOptions = {
    drawerIcon: (): ReactElement => <IconComponent name="notebook" size={25} />,
  };

  constructor(props: Props) {
    super(props);

    this.onHandleSave = this.onHandleSave.bind(this);
  }

  onHandleSave(address: AddressBookEntry): void {
    const { addAddress: save, navigation } = this.props;

    save(address);

    navigation.goBack();
  }

  render(): ReactElement {
    const { navigation } = this.props;

    return (
      <AddressBookAdd onSave={this.onHandleSave} navigation={navigation} />
    );
  }
}

const mapDispatchToProps = { addAddress };

export default connect(
  undefined,
  mapDispatchToProps,
)(AddressBookAddContainer);
