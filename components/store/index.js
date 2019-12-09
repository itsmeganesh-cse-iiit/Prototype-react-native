import {Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export const setItem = (key,val) => {
    AsyncStorage.setItem(key,val)  
}

export const getItem = async(val) => {
    let locale = await AsyncStorage.getItem(val)
    return locale      
}
