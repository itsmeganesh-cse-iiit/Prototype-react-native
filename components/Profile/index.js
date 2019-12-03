import React, { Component } from 'react'
import {View,Text,TouchableOpacity,ScrollView} from 'react-native'
import { Appbar,Title } from 'react-native-paper';
import { ListItem } from 'react-native-elements'

const generalItems = require('../../config/Profile.config').generalItems;
const otherItems = require('../../config/Profile.config').otherItems;
import Colors from '../../Themes/Colors'

export class Profile extends Component {
    
    render() {
        
        return (
            <View style={{flex:1}}>
                
               <View style={{flex:3,backgroundColor:Colors.primary}}>
                <View style={{flex:0.3}}></View>
                <View style={{flex:1}}>
                    <Appbar.BackAction
                        color="white"
                    />
                </View>
                <View style={{flex:1.7,backgroundColor:Colors.primary}}>
                    <View style={{flex:0.7}}>
                    <Title style={{color:'white',fontWeight:'bold',fontSize:30,marginTop:10,marginLeft:20}}>Atchi Pavani</Title>

                    </View>
                    <View style={{flex:1}}>
                    <Title style={{color:'white',fontWeight:'bold',fontSize:20,marginLeft:20}}>+91 7397338366</Title>
                    </View>
                </View>
              
               </View>
               <View style={{flex:0.4}}>
               <Title style={{marginLeft:20}}>General</Title>
               </View>
               <View style={{flex:4,backgroundColor:'white'}}>
               
                    <ScrollView>
                    {
                        generalItems.map((item, index) => (
                        <TouchableOpacity key={index}>
                        <ListItem
                            key={item}
                            leftIcon={{ name: item.icon }}
                            subtitle={item.subtitle}
                            title={item.name}
                            chevron
                            bottomDivider
                        />
                        </TouchableOpacity>
                        ))
                    }
                    </ScrollView>

               </View>
               <View style={{flex:0.3}}>
               <Title style={{marginLeft:20}}>Other</Title>
               </View>
               <View style={{flex:1.7,backgroundColor:'white',marginTop:10}}>
               <ScrollView>
                    {
                        otherItems.map((item, index) => (
                        <TouchableOpacity key={index}>
                        <ListItem
                            key={item}
                            leftIcon={{ name: item.icon }}
                            title={item.name}
                            chevron
                            topDivider
                        />
                        </TouchableOpacity>
                        ))
                    }
                    </ScrollView>
              

                 </View>

            </View>
        )
    }
}

export default Profile
