import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PoopOverview from 'stories/screens/Poop/Overview';
import { IPoop } from 'apptypes/poop';
import { Drawer, Add } from 'ui/HeaderButtons';
import { TNavigation, INavigation } from 'apptypes/base';
import { load } from '../actions';
import { itemsSortedByDateSelector } from '../selectors';

interface Props {
  navigation: TNavigation;
  loadPoops: Function;
  poops: IPoop[];
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

    const { loadPoops } = props;

    this.state = {
      modalPoopAddVisible: false,
    };

    loadPoops();
  }

  render() {
    const { navigation, poops } = this.props;

    return (
      <Container>
        <PoopOverview navigation={navigation} poops={poops} />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  poops: itemsSortedByDateSelector,
});

const mapDispatchToProps = { loadPoops: load };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PoopOverviewContainer);
