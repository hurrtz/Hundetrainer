import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseHeaderButtons, {
  HeaderButton as BaseHeaderButton,
} from 'react-navigation-header-buttons';

const HeaderButton = (props: any) => (
  <BaseHeaderButton {...props} IconComponent={MaterialIcons} iconSize={25} />
);

export const HeaderButtons = (props: any) => (
  <BaseHeaderButtons
    HeaderButtonComponent={HeaderButton}
    OverflowIcon={<MaterialIcons name="more-vert" size={25} />}
    {...props}
  />
);

export const { Item } = BaseHeaderButtons;

export const Drawer = (props: any) => (
  <MaterialIcons name="menu" size={25} {...props} />
);

export const Add = (props: any) => (
  <MaterialCommunityIcons name="plus" size={25} {...props} />
);
