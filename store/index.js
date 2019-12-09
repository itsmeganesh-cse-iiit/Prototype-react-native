import {Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async(key,val) => {
    try {
        await AsyncStorage.setItem(key,val)  
      } catch (e) {
        Alert.alert("OPPS... App not working properly .")
      }
}

export const getItem = async(val) => {
    let locale=null
    try {
        locale = await AsyncStorage.getItem(val)
      } catch (e) {
        Alert.alert("OPPS... App not working properly .")
      }
    return locale      
}

