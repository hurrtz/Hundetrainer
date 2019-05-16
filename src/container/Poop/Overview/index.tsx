import React, { ReactElement, FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { Poop } from 'container/Poop/types';
import { itemsGroupedAndSortedByDateSelector } from '../selectors';
import { setPoopToDetails, migratePoop } from '../actions';

interface Props {
  navigation: Navigation;
  poops: { [date: string]: Poop[] };
  setPoopToDetails: Function;
  migratePoop: Function;
}

const PoopOverviewContainer: FunctionComponent<Props> = ({
  navigation,
  poops,
  setPoopToDetails: onShowDetails,
  migratePoop: migrate,
}: Props): ReactElement => {
  useEffect(() => {
    migrate();
  }, []);

  return (
    <PoopOverview
      navigation={navigation}
      poops={poops}
      onShowDetails={onShowDetails}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  poops: itemsGroupedAndSortedByDateSelector,
});

const mapDispatchToProps = { setPoopToDetails, migratePoop };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopOverviewContainer);
