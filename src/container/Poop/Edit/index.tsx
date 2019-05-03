import React, { PureComponent } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { IPoop } from 'container/Poop/types';
import PoopEdit from 'stories/screens/Poop/Edit';
import { currentEditItemSelector } from '../selectors';
import { removePoop, updatePoop, setPoopToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  poop: IPoop;
  removePoop: Function;
  updatePoop: Function;
  setPoopToEdit: Function;
}

interface State {}

class PoopEditContainer extends PureComponent<Props, State> {
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
    const { poop: currentPoop, updatePoop: update, navigation } = this.props;

    update({ currentPoop, newPoop: poop });

    navigation.goBack();
  }

  onDelete() {
    const { poop, navigation, removePoop: remove } = this.props;

    remove(poop);

    navigation.popToTop();
  }

  render() {
    const { navigation, poop, setPoopToEdit: onEditPoop } = this.props;

    return (
      <PoopEdit
        navigation={navigation}
        poop={poop}
        onSave={this.onHandleSave}
        onEditPoop={onEditPoop}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  poop: currentEditItemSelector,
});

const mapDispatchToProps = { removePoop, updatePoop, setPoopToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopEditContainer);
