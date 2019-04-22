import React, { PureComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { TNavigation } from 'apptypes/base';
import { IAddressBookEntry } from 'apptypes/addressBook';
import AddressBookAdd from 'stories/screens/AddressBook/Add';
import { addAddress } from '../actions';

interface Props {
  navigation: TNavigation;
  addAddress: Function;
}

interface State {}

class AddressBookAddContainer extends PureComponent<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="notebook" size={25} />,
  };

  constructor(props: Props) {
    super(props);

    this.onHandleSave = this.onHandleSave.bind(this);
  }

  onHandleSave(address: IAddressBookEntry) {
    const { addAddress: save, navigation } = this.props;

    save(address);

    navigation.goBack();
  }

  render() {
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
