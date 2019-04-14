import React, { Component } from 'react';
import { connect } from 'react-redux';

import PoopAdd from 'stories/screens/Poop/Add';
import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import { addPoop } from '../actions';

interface Props {
  navigation: TNavigation;
  addPoop: Function;
}

interface State {}

class PoopAddContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onHandleSave = this.onHandleSave.bind(this);
  }

  onHandleSave(poop: IPoop) {
    const { addPoop: save, navigation } = this.props;

    save(poop);

    navigation.goBack();
  }

  render() {
    const { navigation } = this.props;

    return <PoopAdd navigation={navigation} onSave={this.onHandleSave} />;
  }
}

const mapDispatchToProps = { addPoop };

export default connect(
  undefined,
  mapDispatchToProps,
)(PoopAddContainer);
