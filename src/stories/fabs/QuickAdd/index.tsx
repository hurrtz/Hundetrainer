import React, { Component, Fragment } from 'react';
import { Fab, Button } from 'native-base';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {
  isActive: boolean;
}

class QuickAdd extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  toggleFAB() {
    this.setState(prevState => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  render() {
    const { navigation } = this.props;
    const { isActive } = this.state;

    return (
      <Fragment>
        <Fab
          active={isActive}
          direction="up"
          style={{ backgroundColor: '#34A34F' }}
          position="bottomRight"
          onPress={() => this.toggleFAB()}
        >
          <IconComponent name="plus" />

          <Button
            onPress={() => navigation.navigate('PoopAdd')}
            style={{ backgroundColor: '#34A34F' }}
          >
            <IconComponent name="emoticon-poop" size={25} />
          </Button>

          <Button disabled style={{ backgroundColor: 'grey' }}>
            <IconComponent name="bone" size={25} />
          </Button>
        </Fab>
      </Fragment>
    );
  }
}

export default QuickAdd;
