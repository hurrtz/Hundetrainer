import React, { Component } from 'react';
import { Toast } from 'native-base';

import { TNavigation } from 'apptypes/base';
import { IPoop } from 'apptypes/poop';
import { retrieveData, storeData } from 'storage';
import { Delete } from 'ui/HeaderButtons';
import PoopEdit from 'stories/screens/Poop/Edit';

interface Props {
  navigation: TNavigation;
}

interface State {}

class PoopEditContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Bearbeiten',
    headerRight: (
      <Delete
        style={{ marginRight: 10 }}
        onPress={navigation.getParam('onDelete')}
      />
    ),
  });

  constructor(props: Props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setParams({
      onDelete: this.onDelete,
    });
  }

  onDelete() {
    const { navigation } = this.props;
    const poopToDelete = navigation.getParam('poop') as IPoop;

    retrieveData({
      key: 'poops',
      callback: (poops: IPoop[]) =>
        storeData({
          key: 'poops',
          value: poops.filter(poop => poop.date !== poopToDelete.date),
          callback: () => {
            Toast.show({
              type: 'success',
              text: 'Stuhlgang gelöscht!',
            });

            navigation.goBack();
          },
        }),
    });
  }

  render() {
    const { navigation } = this.props;

    return <PoopEdit navigation={navigation} />;
  }
}

export default PoopEditContainer;
