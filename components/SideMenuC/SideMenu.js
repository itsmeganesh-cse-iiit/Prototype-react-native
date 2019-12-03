import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,Alert} from 'react-native';
import { Subheading } from 'react-native-paper';
import { Icon,ListItem } from 'react-native-elements'


//latest imports
import { Avatar } from 'react-native-paper';
import { yellow } from 'ansi-colors';


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    const TopNavItems = [
        {
          name: 'Home',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        },
        {
          name: 'Notifications',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        },
        {
            name: 'Settings',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        },
        {
            name: 'Help',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        },
        {
            name: 'About',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        },
      ]

      const BottomNavItems = [
        {
          name: 'Logout',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        },
    ]
    return (
      <View style={{flex:1}}>
          <View style={{flex:2.5,backgroundColor:'green'}}>

          </View>
          <View style={{flex:6,backgroundColor:'white'}}>
          {
                TopNavItems.map((l, i) => (
                <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    // bottomDivider
                />
                ))
            }
          </View>
        <View style={{flex:1.5,backgroundColor:'white'}}>
        {
            BottomNavItems.map((l, i) => (
                <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    // bottomDivider
                    topDivider
                />
                ))
            }
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;