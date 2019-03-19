import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Text, Container, ListItem, Content } from 'native-base';
import {
  NavigationActions,
  StackActions,
  NavigationComponent,
} from 'react-navigation';

const routes = [
  {
    route: 'Home',
    caption: 'Home',
  },
  {
    route: 'BlankPage',
    caption: 'Blank Page',
  },
  {
    route: 'Login',
    caption: 'Logout',
  },
];

export interface Props {
  navigation: NavigationComponent;
}

export interface State {}

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

class Sidebar extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content>
          <FlatList
            data={routes}
            renderItem={({ item }) => (
              <ListItem
                button
                onPress={() => {
                  item.route === 'Login'
                    ? navigation.dispatch(resetAction)
                    : navigation.navigate(item.route);
                }}
              >
                <Text>{item.caption}</Text>
              </ListItem>
            )}
            keyExtractor={({ route }) => route}
          />
        </Content>
      </Container>
    );
  }
}

export default Sidebar;
