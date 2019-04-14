import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import { itemsGroupedAndSortedByDateSelector } from '../selectors';

interface Props {
  navigation: TNavigation;
  poops: { [date: string]: IPoop[] };
}

interface State {}

class PoopOverviewContainer extends Component<Props, State> {
  render() {
    const { navigation, poops } = this.props;

    return <PoopOverview navigation={navigation} poops={poops} />;
  }
}

const mapStateToProps = createStructuredSelector({
  poops: itemsGroupedAndSortedByDateSelector,
});

export default connect(mapStateToProps)(PoopOverviewContainer);
