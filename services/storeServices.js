// @ Team : RhinoTeam
//! Store Service layers input validations and other alien things can be done here

import {setItem,getItem} from '../store/'

export const setItemService = (key,val) => {
    console.warn("Set Item Passed through service layer ")
    setItem(key,val)
}


export const getItemService = (val) => {
    console.warn("Get Item Passed through service layer "+val)
    let returnVal=null
    getItem(val).then(getVal=>{
        console.warn(getVal)
    })
    
}