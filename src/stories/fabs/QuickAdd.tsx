import React, { PureComponent } from 'react';
import ActionButton from 'react-native-action-button';
import { StyleSheet } from 'react-native';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: Navigation;
}

interface State {}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

class QuickAdd extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;
    const { Item } = ActionButton;

    return (
      <ActionButton buttonColor="rgba(244, 226, 66,0.25)">
        <Item buttonColor="#3498db" onPress={() => ({})}>
          <IconComponent name="bone" style={styles.actionButtonIcon} />
        </Item>
        <Item
          buttonColor="#1abc9c"
          onPress={() => navigation.navigate('PoopAdd')}
        >
          <IconComponent name="emoticon-poop" style={styles.actionButtonIcon} />
        </Item>
      </ActionButton>
    );
  }
}

export default QuickAdd;
