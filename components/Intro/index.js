import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'
// Getting App intro constants and store methods
import {APPINTRO} from '../../constants/storeConstants'
import {setItem} from '../../store'
export class Intro extends Component {

    changeHandler=()=>{
         setItem(APPINTRO,APPINTRO)
    }
    render() {
        return (
            <View>
                <Text>Application Intro</Text>
                <Button title="Start Explore" onPress={this.changeHandler}></Button>
            </View>
        )
    }
}

export default Intro
