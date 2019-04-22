import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { TNavigation } from 'apptypes/base';
import { IPoop } from 'apptypes/poop';
import { currentDetailItemSelector } from 'container/Poop/selectors';
import PoopDetails from 'stories/screens/Poop/Details';
import { setPoopToDetails, setPoopToEdit } from '../actions';

interface Props {
  navigation: TNavigation;
  poop: IPoop;
  setPoopToDetails: Function;
  setPoopToEdit: Function;
}

interface State {}

class PoopDetailsContainer extends PureComponent<Props, State> {
  render() {
    const {
      navigation,
      poop,
      setPoopToDetails: onDetailsPoop,
      setPoopToEdit: onEditPoop,
    } = this.props;

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
  }
}

const mapStateToProps = createStructuredSelector({
  poop: currentDetailItemSelector,
});

const mapDispatchToProps = { setPoopToDetails, setPoopToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopDetailsContainer);
