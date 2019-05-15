import React, { ReactElement, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Poop } from 'container/Poop/types';
import { currentDetailItemSelector } from 'container/Poop/selectors';
import PoopDetails from 'stories/screens/Poop/Details';
import { setPoopToDetails, setPoopToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  poop: Poop;
  setPoopToDetails: Function;
  setPoopToEdit: Function;
}

const PoopDetailsContainer: FunctionComponent<Props> = ({
  navigation,
  poop,
  setPoopToDetails: onDetailsPoop,
  setPoopToEdit: onEditPoop,
}: Props): ReactElement => {
  if (!poop) {
    // tslint:disable-next-line no-null-keyword
    return null;
  }

  return (
    <PoopDetails
      navigation={navigation}
      poop={poop}
      onDetailsPoop={onDetailsPoop}
      onEditPoop={onEditPoop}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  poop: currentDetailItemSelector,
});

const mapDispatchToProps = { setPoopToDetails, setPoopToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopDetailsContainer);
