import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,Alert,TouchableOpacity,StyleSheet} from 'react-native';
import { Subheading,Title,Paragraph } from 'react-native-paper';
import { Icon,ListItem } from 'react-native-elements'
//latest imports
import { Avatar } from 'react-native-paper';
import { yellow } from 'ansi-colors';

import Colors from '../../Themes/Colors'


const TopNavItems = require('../../config/Sidebar.config').TopNavItems;
const BottomNavItems= require('../../config/Sidebar.config').BottomNavItems;
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
          <View style={{flex:2.5,backgroundColor:Colors.primary}}>
        

          <View style={{flex:1,marginTop:40,marginLeft:30}}>
               <Avatar.Image size={100} source={require('../../assets/gani.png')} />
          </View>
          <View style={{flex:1.5,color:'white'}}>
                <Title style={{color:'white',fontWeight:'bold',marginTop:40,marginLeft:20}}>Ganesh Koilada</Title>
                <Text style={{color:'white',fontWeight:'bold',marginLeft:20}}>+91 9500184196</Text>

          </View>
           
          </View>
          <View style={{flex:6,backgroundColor:'white'}}>
            <ScrollView>
          {
                TopNavItems.map((item, index) => (
                <TouchableOpacity key={index}>
                <ListItem
                    key={item}
                    leftIcon={{ name: item.icon }}
                    title={item.name}
                    chevron
                    badge={item.name==='Notifications' && { value: 3, textStyle: { color: 'white' }, containerStyle: { marginTop: 0} }}

                />
                </TouchableOpacity>
                ))
            }
            </ScrollView>
          </View>
        <View style={{flex:1.5,backgroundColor:'white'}}>
        {
            BottomNavItems.map((item, index) => (
              <TouchableOpacity key={index}>
                <ListItem
                    key={item}
                    leftIcon={{ name: item.icon }}
                    title={item.name}
                    topDivider
                    chevron
                />
                </TouchableOpacity>
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