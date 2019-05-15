import React, { ReactElement, FunctionComponent } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseHeaderButtons, {
  HeaderButton as BaseHeaderButton,
} from 'react-navigation-header-buttons';

interface Props {
  title: string;
}

const HeaderButton: FunctionComponent<Props> = (props: Props): ReactElement => (
  <BaseHeaderButton {...props} IconComponent={MaterialIcons} iconSize={25} />
);

export const HeaderButtons: FunctionComponent<Props> = (
  props: Props,
): ReactElement => (
  <BaseHeaderButtons
    HeaderButtonComponent={HeaderButton}
    OverflowIcon={<MaterialIcons name="more-vert" size={25} />}
    {...props}
  />
);

export const { Item } = BaseHeaderButtons;

export const Drawer: FunctionComponent<Props> = (
  props: Props,
): ReactElement => <MaterialIcons name="menu" size={25} {...props} />;

export const Add: FunctionComponent<Props> = (props: Props): ReactElement => (
  <MaterialCommunityIcons name="plus" size={25} {...props} />
);

export const Delete: FunctionComponent<Props> = (
  props: Props,
): ReactElement => (
  <MaterialCommunityIcons name="delete" size={25} {...props} />
);
