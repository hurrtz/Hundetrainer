import React, { ReactElement, FunctionComponent } from 'react';
import ActionButton from 'react-native-action-button';
import { StyleSheet } from 'react-native';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: Navigation;
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const QuickAdd: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => {
  const { Item } = ActionButton;

  return (
    <ActionButton buttonColor="rgba(244, 226, 66,0.25)">
      <Item
        buttonColor="#3498db"
        onPress={(): boolean => navigation.navigate('FoodTrackedAdd')}
      >
        <IconComponent name="bone" style={styles.actionButtonIcon} />
      </Item>
      <Item
        buttonColor="#1abc9c"
        onPress={(): boolean => navigation.navigate('PoopAdd')}
      >
        <IconComponent name="emoticon-poop" style={styles.actionButtonIcon} />
      </Item>
    </ActionButton>
  );
};

export default QuickAdd;
