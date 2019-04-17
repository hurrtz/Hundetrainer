import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import {
  itemsGroupedAndSortedByDateSelector,
  itemsSelector,
} from '../selectors';
import { updatePoopToHaveIds } from '../actions';

interface Props {
  navigation: TNavigation;
  poops: { [date: string]: IPoop[] };
  allPoopsAsList: IPoop[];
  updatePoopToHaveIds: Function;
}

interface State {}

class PoopOverviewContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    props.updatePoopToHaveIds();
  }

  render() {
    const { navigation, poops } = this.props;

    return <PoopOverview navigation={navigation} poops={poops} />;
  }
}

const mapStateToProps = createStructuredSelector({
  allPoopsAsList: itemsSelector,
  poops: itemsGroupedAndSortedByDateSelector,
});

const mapDispatchToProps = { updatePoopToHaveIds };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopOverviewContainer);
