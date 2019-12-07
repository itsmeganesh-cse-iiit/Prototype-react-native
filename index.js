/**
 * @format
 */
import 'react-native-gesture-handler'
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import {Text,View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import AppIntro from './components/Intro'
// React Native Localization
import LocalizedStrings from 'react-localization';
import stringsList from './locales'
const strings = new LocalizedStrings(stringsList);

export class Main extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showMainApp:false,
    }
  }

  changeHandler=()=>{
    this.setState({showMainApp:true})
  }
  
  switchScreens=()=>{
 
    if(true) {
      
      return <App strings={strings} />;
    }
    else {
      return <AppIntro changeHandler={this.changeHandler}/>
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
