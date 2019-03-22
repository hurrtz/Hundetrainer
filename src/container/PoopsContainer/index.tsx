import React, { Component, Fragment } from 'react';
import { Toast } from 'native-base';

import { retrieveData, storeData } from 'storage';
import Poops from 'stories/screens/Poops';
import ModalPoopAdd from 'stories/modals/Poop/add';
import { IPoop } from 'apptypes/poop';

export interface Props {
  navigation: any;
}

export interface State {
  poops: IPoop[];
  modalPoopAddVisible: boolean;
}

class PoopsContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      poops: [],
      modalPoopAddVisible: false,
    };

    this.fetchPoops();

    this.toggleModalPoopAddShow = this.toggleModalPoopAddShow.bind(this);
    this.onSaveAddPoop = this.onSaveAddPoop.bind(this);
  }

  toggleModalPoopAddShow() {
    this.setState(prevState => ({
      ...prevState,
      modalPoopAddVisible: !prevState.modalPoopAddVisible,
    }));
  }

  fetchPoops() {
    retrieveData('poops', (poops: IPoop[]) => {
      if (poops && poops.length) {
        this.setState(prevState => ({
          ...prevState,
          poops,
        }));
      }
    });
  }

  onSaveAddPoop(poop: IPoop) {
    retrieveData('poops', (currentPoops: IPoop[]) => {
      const newPoop = { ...poop };
      const poops = [...(currentPoops || [])];

      storeData({
        key: 'poops',
        value: [...poops, newPoop],
        callback: () => {
          Toast.show({
            type: 'success',
            text: 'Stuhlgang gespeichert!',
          });
        },
      });
    });

    this.toggleModalPoopAddShow();
  }

  render() {
    const { navigation } = this.props;
    const { poops, modalPoopAddVisible } = this.state;

    return (
      <Fragment>
        <Poops
          navigation={navigation}
          poops={poops}
          toggleAddPoop={this.toggleModalPoopAddShow}
        />
        <ModalPoopAdd
          isVisible={modalPoopAddVisible}
          onClickCancel={this.toggleModalPoopAddShow}
          onClose={this.onSaveAddPoop}
        />
      </Fragment>
    );
  }
}

export default PoopsContainer;
