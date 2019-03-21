import React, { Component, Fragment } from 'react';
import { Fab, Button, Toast } from 'native-base';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { retrieveData, storeData } from 'storage';
import ModalPoopAdd from 'stories/modals/Poop/add';
import { IPoop } from 'apptypes/poop';

interface Props {}

interface State {
  isActive: boolean;
  isModalPoopAddVisible: boolean;
}

class QuickAdd extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isActive: false,
      isModalPoopAddVisible: false,
    };

    this.onShowAddPoop = this.onShowAddPoop.bind(this);
  }

  onHandleOpen() {
    this.setState(prevState => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  onShowAddPoop() {
    this.setState(prevState => ({
      ...prevState,
      isModalPoopAddVisible: !prevState.isModalPoopAddVisible,
    }));
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

    this.onShowAddPoop();
  }

  render() {
    const { isActive, isModalPoopAddVisible } = this.state;

    return (
      <Fragment>
        <Fab
          active={isActive}
          direction="up"
          style={{ backgroundColor: '#34A34F' }}
          position="bottomRight"
          onPress={() => this.onHandleOpen()}
        >
          <IconComponent name="plus" />

          <Button
            onPress={() => this.onShowAddPoop()}
            style={{ backgroundColor: '#34A34F' }}
          >
            <IconComponent name="emoticon-poop" size={25} />
          </Button>

          <Button disabled style={{ backgroundColor: 'grey' }}>
            <IconComponent name="bone" size={25} />
          </Button>
        </Fab>

        <ModalPoopAdd
          isVisible={isModalPoopAddVisible}
          onClickCancel={this.onShowAddPoop}
          onClose={(poop: IPoop) => this.onSaveAddPoop(poop)}
        />
      </Fragment>
    );
  }
}

export default QuickAdd;
