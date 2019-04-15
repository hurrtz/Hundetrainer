import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Screen, Divider } from '@shoutem/ui';

interface Props {
  children: any;
  noPaddingTop?: boolean;
}

const StyledStandardView = styled(ScrollView)<Props>`
  padding: ${props => (props.noPaddingTop ? '0' : '10px')} 10px 0;
`;

export const StandardView = (props: Props) => (
  <StyledStandardView {...props}>
    {props.children}
    <Divider />
  </StyledStandardView>
);

const StyledStandardScreen = styled(Screen)<Props>`
  padding: 10px;
`;

export const StandardScreen = (props: Props) => (
  <StyledStandardScreen {...props}>
    {props.children}
    <Divider />
  </StyledStandardScreen>
);
