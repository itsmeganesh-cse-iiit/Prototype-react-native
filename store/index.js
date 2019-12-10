import {Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async(key,val) => {
    try {
        await AsyncStorage.setItem(key,val)  
        Alert.alert('Value set')
      } catch (e) {
        Alert.alert("OPPS... App not working properly .")
      }
}

export const getItem = async(val) => {
    let locale=null
    try {
        locale = await AsyncStorage.getItem(val)
        Alert.alert('Value retrieved')
      } catch (e) {
        Alert.alert("OPPS... App not working properly .")
      }
    // returns promise , we will get response in then condition
    return locale      
}

export const removeItem = async (val) => {
  try {
    await AsyncStorage.removeItem(val)
  } catch(e) {
    Alert.alert("OPPS... App not working properly .")
  }
}



export const getAllItems = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch(e) {
    Alert.alert("OPPS... App not working properly .")
  }
  //returns array of keys
  return keys

}


// Half implemented
export const setMultipleItems = async (array) => {
  const firstPair = ["@MyApp_user", "value_1"]
  const secondPair = ["@MyApp_key", "value_2"]

  try {
    await AsyncStorage.multiSet([firstPair, secondPair])
  } catch(e) {
    Alert.alert("OPPS... App not working properly .")
  }

}

// Half implemented
export const removeMultipleItems = async () => {
  const keys = ['@MyApp_USER_1', '@MyApp_USER_2']
  try {
    await AsyncStorage.multiRemove(keys)
  } catch(e) {
    Alert.alert("OPPS... App not working properly .")
  }
}



