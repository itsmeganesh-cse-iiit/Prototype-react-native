import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from '../../Themes/Colors'
import {Title} from 'react-native-paper'

export class CirucularProgressC extends Component {
    render() {
        return (
            <View style={{flex:1,marginTop:20}}>
                <View style={{flex:4,alignItems:'center'}}>
                <AnimatedCircularProgress
                    size={this.props.size || 250}
                    width={this.props.width || 35}
                    fill={this.props.fill || 80}
                    tintColor={this.props.color || Colors.primary}
                    // onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor={"lightgray"}
                    >
                        {
                            (fill) => (
                                <View style={{flex:1,justifyContent:'center'}}>
                                    <View style={{flex:0.5,justifyContent:'flex-end',marginLeft:5}}><Title style={{fontSize:30,fontWeight:'bold',color:Colors.primary}}>7h 13m</Title></View>
                                    <View  style={{flex:0.5}}><Text style={{fontSize:19}}>of 9.00 hours</Text></View>
                                    
                                </View>
                           
                            )
                        }
                    </AnimatedCircularProgress>
                    </View>
                    {/* <View style={{flex:0.5,marginLeft:10,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
                        <View >
                            <Title style={{color:'gray',fontWeight:'bold'}}>ClockedIn Time    </Title>
                        </View>
                        <View>
                            <Title style={{color:'gray',fontWeight:'bold'}}>Last ClockedOut Time   </Title>

                        </View>

                    </View> */}
                    {/* <View style={{flex:0.5,marginLeft:10,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{alignItems:'flex-start'}}>
                            <Title>9 AM</Title>
                        </View>
                        <View style={{marginRight:10}}>
                            <Title>6 PM</Title>
                        </View>

                    </View> */}
     
             </View>
                )
                        }
}

export default CirucularProgressC
