/**
 * @format
 */
import 'react-native-gesture-handler'
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import {Text,View,Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import AppIntro from './components/Intro'

// Getting App intro constants and store methods
import {APPINTRO} from './constants/storeConstants'
// import {getItemService} from './services/storeServices'
import {getItem} from './store'
export class Main extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showMainApp:false,
       storeVal:null,
       appLoading:true,
    }
  }

  changeHandler=()=>{
    this.setState({showMainApp:true})
  }
  

  componentDidMount(){
    getItem(APPINTRO).then(intro=>{
      this.setState({storeVal:intro,appLoading:false})
    })
    // let intro =getItemService(APPINTRO)
    // this.setState({storeVal:intro,appLoading:false})
  }
  switchScreens=()=>{
    const {storeVal,appLoading} = this.state
    if(storeVal) {
      return <App />;
    }
    else if(!storeVal && !appLoading) {
      return <AppIntro changeHandler={this.changeHandler}/>
    }
    else {
      return <Text style={{marginTop:300,fontSize:30,marginLeft:160,color:'green'}}>App Loading</Text>
    }
  }
  render() {
    
    return (
      <PaperProvider>
       {this.switchScreens()}

       {/* <App /> */}
     </PaperProvider>
    )
  }
}


AppRegistry.registerComponent(appName,()=> Main);
