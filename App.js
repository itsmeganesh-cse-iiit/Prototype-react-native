import React, { Component } from 'react'
import {View,Text,Button,Alert, Dimensions} from 'react-native'
import TabMenu from './components/TabMenuC/'
import BottomNavigation from './components/BottomNavigationC'
import Calender from './components/CalenderC'
import CircularProgressBar from './components/CircularProgressC'
import StackNavigator from './components/StackNavigatorC'
// import SideDrawer from './components/SideDrawerC'
import HomeScreen from './components/BottomNavigationC'
import Dashboard from './components/Profile'
import ReportsScreen from './components/TabMenuC'
import SettingsScreen from './screens/SettingsScreen'
import { createAppContainer, DrawerNavigator } from "react-navigation";
import {createDrawerNavigator} from 'react-navigation-drawer'


// export class App extends Component {
  
//   render() {
//     return (
//       <View style={{flex:1,backgroundColor:'white'}}>
//         {/* <TabMenu/> */}
//         {/* <Calender/> */}
//         {/* <CircularProgressBar/> */}
//         {/* <StackNavigator/> */}
//         {/* <SideDrawer/> */}
       
//         <BottomNavigation/>
        
//       </View>
//     )
//   }
// }


// const AppNavigator = DrawerNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Settings: {
//     screen: SettingsScreen
//   }
// }, {
//   contentComponent: props =>
//   <ScrollView>
//     <DrawerItems {...props} />
//     <Text>Your Own Footer Area After</Text>
//   </ScrollView>
// });
// export default createAppContainer(AppNavigator);
// export default App


import SideMenu from './components/SideMenuC/SideMenu';
// import {DrawerNavigator} from 'react-navigation';


const AppNav = createDrawerNavigator({
  Home: {
        screen: HomeScreen
      },
  Settings: {
        screen: SettingsScreen
      },
  Dashboard:{
      screen: Dashboard
  },
  Reports:{
    screen: ReportsScreen
  }

  
}, {
  contentComponent: SideMenu,
  width: Dimensions.get('window').width * .75,
 
},
)


export default createAppContainer(AppNav)