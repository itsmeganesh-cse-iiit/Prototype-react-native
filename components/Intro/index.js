import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'
export class Intro extends Component {
    render() {
        return (
            <View>
                <Text>Application Intro</Text>
                <Button title="Start Explore" onPress={this.props.changeHandler}></Button>
            </View>
        )
    }
}

export default Intro
