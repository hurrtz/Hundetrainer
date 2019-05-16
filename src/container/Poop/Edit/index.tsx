import React, { ReactElement, FunctionComponent, useEffect } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Poop } from 'container/Poop/types';
import PoopEdit from 'stories/screens/Poop/Edit';
import { currentEditItemSelector } from '../selectors';
import { removePoop, updatePoop, setPoopToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  poop: Poop;
  removePoop: Function;
  updatePoop: Function;
  setPoopToEdit: Function;
}

const PoopEditContainer: FunctionComponent<Props> = ({
  navigation,
  poop,
  removePoop: remove,
  updatePoop: update,
  setPoopToEdit: edit,
}: Props): ReactElement => {
  const onHandleSave = (newPoop: Poop): void => {
    update({ currentPoop: poop, newPoop });

    navigation.goBack();
  };

  const onDelete = (): void => {
    remove(poop);

    navigation.popToTop();
  };

  const onDeleteConfirmation = (): void => {
    Alert.alert(
      'Löschen',
      'Soll dieser Stuhlgang wirklich gelöscht werden?',
      [
        { text: 'Ja', onPress: (): void => onDelete() },
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };

  useEffect((): void => {
    navigation.setParams({
      onDelete: onDeleteConfirmation,
    });
  }, []);

  return (
    <PoopEdit
      navigation={navigation}
      poop={poop}
      onSave={onHandleSave}
      onEditPoop={edit}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  poop: currentEditItemSelector,
});

const mapDispatchToProps = { removePoop, updatePoop, setPoopToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopEditContainer);
