
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import TabMenu from '../TabMenuC'
import ProfilePage from '../Profile'
import Colors from '../../Themes/Colors'
import {Alert} from 'react-native'
import Dashboard from '../Dashboard'
import { compose } from 'recompose'
import withLocales from '../Hoc'
import {setItem,getItem} from '../store'
const HomeRoute = () => <Dashboard/>;

const ReportsRoute = () => <TabMenu/>;

const ProfileRoute = () => <ProfilePage/>;

 class BottomNavigationC extends React.Component {
  
 constructor(props) {   
   super(props)
  
   const {strings} = this.props
   this.state = {
    index: 0,
    routes: [
      { key: 'home', title:strings.bottomNavBar.Home, icon: 'home' },
      { key: 'reports', title:strings.bottomNavBar.Reports, icon: 'chart-areaspline' },
      { key: 'profile', title:strings.bottomNavBar.Profile, icon: 'account-circle' },
    ],
    bottomRender:true,
   }
 }
 


  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    reports: ReportsRoute,
    profile: ProfileRoute,
  });

  componentDidUpdate(prevProps) {
    console.warn('Rerendered')
  }
  componentDidMount(){
    // Setting the app language
    getItem('appLanguage').then(lang=>{
      this.props.strings.setLanguage(lang);
      const {strings} = this.props
      this.setState({
        routes:[
          { key: 'home', title:strings.bottomNavBar.Home, icon: 'home' },
          { key: 'reports', title:strings.bottomNavBar.Reports, icon: 'chart-areaspline' },
          { key: 'profile', title:strings.bottomNavBar.Profile, icon: 'account-circle' },
        ]
      })
    })
  }

  componentDidUpdate(prevProps){
      console.warn("Did Update Called")
  }
  render() {

    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle={{backgroundColor:Colors.primary,color:'white'}}
     
      />
    );
  }
}

export default compose(
  withLocales
)(BottomNavigationC)
