import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { IPoop } from 'container/Poop/types';
import { itemsGroupedAndSortedByDateSelector } from '../selectors';
import { setPoopToDetails, setPoopToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  poops: { [date: string]: IPoop[] };
  setPoopToDetails: Function;
  setPoopToEdit: Function;
}

interface State {}

class PoopOverviewContainer extends PureComponent<Props, State> {
  render() {
    const {
      navigation,
      poops,
      setPoopToDetails: onShowDetails,
      setPoopToEdit: onEditPoop,
    } = this.props;

    return (
      <PoopOverview
        navigation={navigation}
        poops={poops}
        onShowDetails={onShowDetails}
        onEditPoop={onEditPoop}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  poops: itemsGroupedAndSortedByDateSelector,
});

const mapDispatchToProps = { setPoopToDetails, setPoopToEdit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopOverviewContainer);
