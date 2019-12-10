import React, { Component } from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
// Getting App intro constants and store methods
import {APPINTRO} from '../../constants/storeConstants'
import {setItem} from '../../store'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import App from '../../App'
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
});
const slides = [
    {
      key: 'somethun',
      title: 'Application Intro 1',
      text: 'Description1.\nDescription1',
      image: '',
      textStyle:'',
      titleStyle:'',
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Application Intro 2',
      text: 'Description1.\nDescription1',
      image: '',
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Application Intro 3',
      text: 'Description1.\nDescription1',
      image: '',
      backgroundColor: '#22bcb5',
    }
  ];
export class Intro extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showRealApp: false

        }
    }
    
    mainScreenLoad=()=>{
        setItem(APPINTRO,APPINTRO)
    }
    _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            {/* <Ionicons
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              
              
            /> */}

            <Icon name='arrow-back'
            size={24}
            style={{ color:'white',backgroundColor: 'transparent' }}
/>
          </View>
        );
      };
      _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle} >

                      
            <Icon name='apps'
            size={24}
            onPress={()=>this.setState({showRealApp:true})}
            style={{color:'white', backgroundColor: 'transparent' }}
            />
          </View>
        );
      };

      _renderSkipButton = () => {
        return (
          <View style={styles.buttonCircle}>

                      
            <Icon name='navigate'
            size={24}
            style={{color:'white', backgroundColor: 'transparent' }}
            />
          </View>
        );
      };

      _renderPrevButton = () => {
        return (
          <View style={styles.buttonCircle} >

                      
            <Icon name='camera'
            size={24}
            style={{color:'white', backgroundColor: 'transparent' }}
            />
          </View>
        );
      };
    
    
    render() {
        if(!this.state.showRealApp)
            return (
            
            <AppIntroSlider
                showSkipButton={true}
                slides={slides}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                renderSkipButton={this._renderSkipButton}
                renderPrevButton={this._renderPrevButton}
                showPrevButton={true}
                // bottomButton
                skipLabel={"Skip"}
                doneLabel={"Done"}
                nextLabel={"Next"}
                prevLabel={"Back"}
                buttonStyle={""}
                buttonTextStyle={''}
                // dotStyle={''}
                // activeDotStyle={''}
                // paginationStyle={''}
                renderItem={''} // Renders default slide
                
                
            />
            );
        else{
            return <App/>
        }
      }
    }

//     <FlatList
//   ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
//     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
//   )}
//   data={[{title: 'Title Text', key: 'item1'}]}
//   renderItem={({item, index, separators}) => (
//     <TouchableHighlight
//       onPress={() => this._onPress(item)}
//       onShowUnderlay={separators.highlight}
//       onHideUnderlay={separators.unhighlight}>
//       <View style={{backgroundColor: 'white'}}>
//         <Text>{item.title}</Text>
//       </View>
//     </TouchableHighlight>
//   )}
// />
export default Intro
