import React, { PureComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { Poop } from 'container/Poop/types';
import { itemsGroupedAndSortedByDateSelector } from '../selectors';
import { setPoopToDetails, setPoopToEdit } from '../actions';

interface Props {
  navigation: Navigation;
  poops: { [date: string]: Poop[] };
  setPoopToDetails: Function;
  setPoopToEdit: Function;
}

class PoopOverviewContainer extends PureComponent<Props> {
  render(): ReactElement {
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
