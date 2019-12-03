import React, { Component } from 'react'
import {View} from 'react-native'
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import Colors from '../../Themes/Colors'
export class AppBarHeaderC extends Component {
    _goBack = () => {
        this.props.navigation.navigate(this.props.pressEvent)
    };


    render() {
        return (
            <Appbar.Header style={{backgroundColor:Colors.primary}}>
                <Appbar.BackAction
                // onPress={this._goBack}
                />
                <Appbar.Content
                title={this.props.title || ''}
                />
               
            </Appbar.Header>
        )
    }
}

export default withNavigation(AppBarHeaderC);