import React, { ReactElement, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { Poop } from 'container/Poop/types';
import { itemsGroupedAndSortedByDateSelector } from '../selectors';
import { setPoopToDetails } from '../actions';

interface Props {
  navigation: Navigation;
  poops: { [date: string]: Poop[] };
  setPoopToDetails: Function;
}

const PoopOverviewContainer: FunctionComponent<Props> = ({
  navigation,
  poops,
  setPoopToDetails: onShowDetails,
}: Props): ReactElement => (
  <PoopOverview
    navigation={navigation}
    poops={poops}
    onShowDetails={onShowDetails}
  />
);

const mapStateToProps = createStructuredSelector({
  poops: itemsGroupedAndSortedByDateSelector,
});

const mapDispatchToProps = { setPoopToDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopOverviewContainer);
