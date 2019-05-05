import React, { PureComponent, ReactElement } from 'react';
import { connect } from 'react-redux';

import PoopAdd from 'stories/screens/Poop/Add';
import { Poop } from 'container/Poop/types';
import { addPoop } from '../actions';

interface Props {
  navigation: Navigation;
  addPoop: Function;
}

class PoopAddContainer extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onHandleSave = this.onHandleSave.bind(this);
  }

  onHandleSave(poop: Poop): void {
    const { addPoop: save, navigation } = this.props;

    save(poop);

    navigation.goBack();
  }

  render(): ReactElement {
    const { navigation } = this.props;

    return <PoopAdd navigation={navigation} onSave={this.onHandleSave} />;
  }
}

const mapDispatchToProps = { addPoop };

export default connect(
  undefined,
  mapDispatchToProps,
)(PoopAddContainer);
