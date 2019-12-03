import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import { Subheading } from 'react-native-paper';


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
    return (
      <View style={{flex:1}}>
          <View style={{flex:2.5,backgroundColor:'green'}}>

          </View>
          <View style={{flex:6,backgroundColor:'yellow'}}>
               <View style={{flex:1}}><Text>Home</Text></View>
               <View style={{flex:1}}><Text>Reports</Text></View>
               <View style={{flex:1}}><Text>Notifications</Text></View>
               <View style={{flex:1}}><Text>Settings</Text></View>
               <View style={{flex:1}}><Text>About</Text></View>
               <View style={{flex:1}}><Text>Help</Text></View>
          </View>
        <View style={{flex:1.5,backgroundColor:'red'}}>
        <View style={{flex:1}}><Text>Logout</Text></View>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;