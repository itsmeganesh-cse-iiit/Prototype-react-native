import React, { Component } from 'react'
import {View,Text, Alert,TouchableOpacity} from 'react-native'
import Colors from '../../Themes/Colors'
import { Icon,Badge,Avatar,Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import { Title } from 'react-native-paper';
import GIcon from 'react-native-vector-icons/FontAwesome';
export class Dashboard extends Component {
    render() {
        return (
            <View style={{flex:1}}>
              <View style={{flex:4,backgroundColor:Colors.primary}}>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginLeft:25,marginTop:25}}>
                      <View>
                          <TouchableOpacity>
                            <Icon
                            name='menu' 
                            color='white'
                            onPress={()=>this.props.navigation.openDrawer()}
                            />
                            </TouchableOpacity>
                      </View>
                      <View style={{marginRight:25}}>
                            <Icon
                            name='notifications' 
                            color='white'/>
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                            />
                      </View>
                  </View>


                  <View style={{flex:3}}>
                      <View style={{flex:1,alignItems:'center'}}>
                      <Avatar 
                            size="xlarge"
                            rounded
                            // icon={{ name: 'account-circle' }}
                            title="GK"
                            source={require('../../assets/gani.png')}
                            activeOpacity={0.7}
                            containerStyle={{ marginTop:-60,marginRight: 0}}
                            
                        />
                      </View>

                      <View style={{flex:1,marginTop:40,alignItems:'center'}}>
                          
                            <Title style={{fontWeight:'bold',color:'white',fontSize:31}}>Ganesh Koilada</Title>
                            <Text style={{color:'white',fontSize:15}}>Software Engineer</Text>
                      </View>

                      <View style={{flex:1,alignItems:'flex-end'}}>
                            <View>
                                <Title style={{color:'white',fontSize:30,fontWeight:'bold'}}>01:20:30</Title>
                            </View>
                            <View>
                                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>HRS:MIN:SEC</Text>
                            </View>
                          
                      </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View>
                <GIcon.Button name="play" backgroundColor="red" borderRadius={15}>
                    <Text style={{ color:'white',fontFamily: 'Arial', fontSize: 18 }}>
                    Start Shift&nbsp;   &nbsp; 
                    </Text>
                </GIcon.Button>
                </View>
                <View></View>
              
                </View>
                       
                                
                </View>
        </View>
              <View style={{flex:6,backgroundColor:'white',zIndex:0}}>

              <View style={{flex:0.4}}>
                    <Title style={{marginLeft:20}}>Today</Title>
               </View>

               <View style={{flex:5}}>

               </View>
              </View>

            </View>
        )
    }
}

export default withNavigation(Dashboard)