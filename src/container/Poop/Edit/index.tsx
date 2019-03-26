import React, { Component } from 'react';
import { Toast } from 'native-base';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { TNavigation } from 'apptypes/base';
import { IPoop } from 'apptypes/poop';
import { Delete } from 'ui/HeaderButtons';
import PoopEdit from 'stories/screens/Poop/Edit';
import { removePoop, updatePoop } from '../actions';

interface Props {
  navigation: TNavigation;
  removePoop: Function;
  updatePoop: Function;
}

interface State {}

class PoopEditContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Bearbeiten',
    headerRight: (
      <Delete
        style={{ marginRight: 10 }}
        onPress={navigation.getParam('onDelete')}
      />
    ),
  });

  constructor(props: Props) {
    super(props);

    this.onDeleteConfirmation = this.onDeleteConfirmation.bind(this);
    this.onHandleSave = this.onHandleSave.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setParams({
      onDelete: this.onDeleteConfirmation,
    });
  }

  onDeleteConfirmation() {
    Alert.alert(
      'Löschen',
      'Soll dieser Stuhlgang wirklich gelöscht werden?',
      [
        { text: 'Ja', onPress: () => this.onDelete() },
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  onHandleSave(poop: IPoop) {
    const { updatePoop: update, navigation } = this.props;

    update({ currentPoop: navigation.getParam('poop'), newPoop: poop });

    Toast.show({
      type: 'success',
      text: 'Stuhlgang gespeichert!',
    });

    navigation.pop(2);
  }

  onDelete() {
    const { navigation, removePoop: remove } = this.props;
    const poopToDelete = navigation.getParam('poop') as IPoop;

    remove(poopToDelete);

    Toast.show({
      type: 'success',
      text: 'Stuhlgang gelöscht!',
    });

    navigation.pop(2);
  }

  render() {
    const { navigation } = this.props;

    return <PoopEdit navigation={navigation} onSave={this.onHandleSave} />;
  }
}

const mapDispatchToProps = { removePoop, updatePoop };

export default connect(
  undefined,
  mapDispatchToProps,
)(PoopEditContainer);
