
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Music</Text>;

const ReportsRoute = () => <Text>Albums</Text>;

const ProfileRoute = () => <Text>Recents</Text>;

export default class BottomNavigationC extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'reports', title: 'Reports', icon: 'chart-areaspline' },
      { key: 'profile', title: 'Profile', icon: 'account-circle' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    reports: ReportsRoute,
    profile: ProfileRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}