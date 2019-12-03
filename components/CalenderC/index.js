import React, { Component } from 'react'
import {View} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export class CalenderC extends Component {
    render() {
        return (
            <View>
               <Calendar
                    // Initially visible month. Default = Date()
                    current={'2012-03-01'} /> 
            </View>
        )
    }
}

export default CalenderC
