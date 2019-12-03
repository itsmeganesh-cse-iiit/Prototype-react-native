import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export class CirucularProgressC extends Component {
    render() {
        return (
            <View>
                <AnimatedCircularProgress
                    size={120}
                    width={25}
                    fill={80}
                    tintColor="red"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" >
                        {
                            (fill) => (
                            <Text>
                            9 Hrs of 10h
                            </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                                </View>
                            )
                        }
}

export default CirucularProgressC
