import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { IPoop } from 'apptypes/poop';
import { Drawer, Add } from 'ui/HeaderButtons';
import { TNavigation, INavigation } from 'apptypes/base';
import { itemsGroupedAndSortedByDateSelector } from '../selectors';

interface Props {
  navigation: TNavigation;
  poops: { [date: string]: IPoop[] };
}

interface State {
  modalPoopAddVisible: boolean;
}

class PoopOverviewContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }: INavigation) => ({
    title: 'Stuhlgang',
    headerLeft: (
      <Drawer
        style={{ marginLeft: 10 }}
        onPress={() => navigation.openDrawer()}
      />
    ),
    headerRight: (
      <Add
        style={{ marginRight: 10 }}
        onPress={() => navigation.push('PoopAdd')}
      />
    ),
  });

  constructor(props: Props) {
    super(props);

    this.state = {
      modalPoopAddVisible: false,
    };
  }

  render() {
    const { navigation, poops } = this.props;

    return <PoopOverview navigation={navigation} poops={poops} />;
  }
}

const mapStateToProps = createStructuredSelector({
  poops: itemsGroupedAndSortedByDateSelector,
});

export default connect(mapStateToProps)(PoopOverviewContainer);
