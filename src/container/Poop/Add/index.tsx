import React, { ReactElement, FunctionComponent } from 'react';
import { connect } from 'react-redux';

import PoopAdd from 'stories/screens/Poop/Add';
import { Poop } from 'container/Poop/types';
import { addPoop } from '../actions';

interface Props {
  navigation: Navigation;
  addPoop: Function;
}

const PoopAddContainer: FunctionComponent<Props> = ({
  navigation,
  addPoop: save,
}: Props): ReactElement => {
  const onHandleSave = (poop: Poop): void => {
    save(poop);
    navigation.goBack();
  };

  return <PoopAdd navigation={navigation} onSave={onHandleSave} />;
};

const mapDispatchToProps = { addPoop };

export default connect(
  undefined,
  mapDispatchToProps,
)(PoopAddContainer);
