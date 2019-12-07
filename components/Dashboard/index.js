import React, { Component } from 'react'
import {View,Text, Alert,TouchableOpacity,StyleSheet,Image} from 'react-native'
import Colors from '../../Themes/Colors'
import { Icon,Badge,Avatar,Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import { Title } from 'react-native-paper';
import GIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
const ls =require('local-storage')
import LocalizedStrings from 'react-localization';
// const stringsList = require( '../../locales/strings')
import stringsList from '../../locales'
import NativeBase from '../NativeBase'
import Svg, {
    Circle,
    Ellipse,
    G,
    // Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    // Image,
    Symbol,
    Defs,
    // LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    SvgUri,
    SvgXml
  } from 'react-native-svg';
import { string } from 'prop-types';
const strings = new LocalizedStrings(stringsList)
export class Dashboard extends Component {
  state={
    imageIsFetched:false,
  }
  
  changeLang=()=>{
    // Get language
    console.warn(strings.getLanguage());
    // console.log(stringsList)
    // Current Interface language
    console.warn(strings.getInterfaceLanguage());
    //Setting Language and force update the component
    // Need to set language in local storage if present we need to apply that language to user
    // same for theme and font size also
    if(strings.getLanguage()==="tel")
      strings.setLanguage('en')
    else
      strings.setLanguage('tel');
    this.forceUpdate();
  }
    render() { 
        const xml = `
  <svg width="32" height="32" viewBox="0 0 32 32">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill="url(#gradient)"
      d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17 6C17 5.44772 17.4477 5 18 5H20C20.5523 5 21 5.44772 21 6V25C21 25.5523 20.5523 26 20 26H18C17.4477 26 17 25.5523 17 25V6ZM12 11C11.4477 11 11 11.4477 11 12V25C11 25.5523 11.4477 26 12 26H14C14.5523 26 15 25.5523 15 25V12C15 11.4477 14.5523 11 14 11H12ZM6 18C5.44772 18 5 18.4477 5 19V25C5 25.5523 5.44772 26 6 26H8C8.55228 26 9 25.5523 9 25V19C9 18.4477 8.55228 18 8 18H6ZM24 14C23.4477 14 23 14.4477 23 15V25C23 25.5523 23.4477 26 24 26H26C26.5523 26 27 25.5523 27 25V15C27 14.4477 26.5523 14 26 14H24Z"
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="0"
        y1="0"
        x2="8.46631"
        y2="37.3364"
        gradient-units="userSpaceOnUse">
        <stop offset="0" stop-color="#FEA267" />
        <stop offset="1" stop-color="#E75A4C" />
      </linearGradient>
    </defs>
  </svg>
`;


const xml2=`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 828.2 827.8" style="enable-background:new 0 0 828.2 827.8;" xml:space="preserve"><path d="M762.2,189.9c-17.4-27.1-38.1-52.2-61.3-74.5c-23.9-22.9-50.8-43.1-79.8-59.8C528.3,2,419.9-13.5,315.9,11.9 c-50.6,12.4-97.8,33.8-140.2,63.6C131.9,106.3,95,144.9,65.9,190.1c-0.1,0.2-0.2,0.3-0.3,0.5c-3.4,5.8-1.4,13,4.4,16.4l308.3,178 c8.4-10.4,21.3-17.1,35.8-17.1c14.4,0,27.2,6.6,35.6,16.9l308.4-178c1.9-1.1,3.4-2.6,4.5-4.4C764.8,198.5,764.7,193.7,762.2,189.9z"/></svg>`
        return (
            <View style={{flex:1}}>
              <View style={{flex:4,backgroundColor:Colors.primary,borderBottomLeftRadius:150}}>
              
                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginLeft:25,marginTop:25}}>
                      <View>
                          <TouchableOpacity>
                            <Icon
                            name='menu' 
                            color='white'
                            onPress={()=>this.props.navigation.openDrawer()}
                            />
                            </TouchableOpacity>
                      </View>
                      <View style={{marginRight:25}}>
                            <Icon
                            name='notifications' 
                            color='white'/>
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                            />
                      </View>
                  </View>
                  {
                    ls.set('ganesh','bannu')
                    
                  }
                  {
                    console.warn(ls.get('ganesh'))
                  }


                  <View style={{flex:5}}>
                      <View style={{flex:1,alignItems:'center'}}>
                      <ShimmerPlaceHolder autoRun={true}
                  
                  style={{ width: 200, height: 200, borderRadius: 100 }}
                  width={200}
                  height={200}
                  backgroundColorBehindBorder={'white'}

                  visible={this.state.imageIsFetched}  duration={100000}/>

                      {/* <Avatar 
                            size="xlarge"
                            rounded
                            // icon={{ name: 'account-circle' }}
                            // title="GK"
                            source={require('../../assets/gani.png')}
                            activeOpacity={0.7}
                            containerStyle={{ marginTop:-60,marginRight: 0}}
                            onLoad={() => { this.setState({ imageIsFetched: true }) }}
                            
                            
                        />
                         */}
                         <Image
                            style={{ width: 200, height: 200, borderRadius: 100 }}
                            source={require('../../assets/gani.png')}

                            onLoad={() => { 
                              this.setState({ imageIsFetched: true }) 
                            
                            }}

                          />



                      </View>
{/* 
                      <View style={{flex:1,marginTop:40,alignItems:'center'}}>
                          
                            <Title style={{fontWeight:'bold',color:'white',fontSize:31}}>Ganesh Koilada</Title>
                            <Text style={{color:'white',fontSize:15}}>Software Engineer</Text>
                      </View> */}

                      <View style={{flex:3,alignItems:'flex-end'}}>
                            <View>
                                <Title style={{color:'white',fontSize:30,fontWeight:'bold'}}>01:20:30</Title>
                            </View>
                            <View>
                                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>HRS:MIN:SEC</Text>
                            </View>
                          
                      </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View>
                <GIcon.Button name="play" backgroundColor="#19A86F" borderRadius={15}>
                    <Text style={{ color:'white',fontFamily: 'Arial', fontSize: 18 }}>
    {strings.startShift}&nbsp;   &nbsp; 
                    </Text>
                </GIcon.Button>
                </View>
                <View></View>
              
                </View>
                       
                                
                </View>
        </View>
              <View style={{flex:6,zIndex:0}}>

              <View style={{flex:0.4}}>
    <Title style={{marginLeft:20}}>{strings.today}</Title>
                    
               </View>

               <View style={{flex:5}}>
                    {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                       
                    </LinearGradient> */}
                    {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
                        <Circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="blue"
                            strokeWidth="2.5"
                            fill="green"
                        />
                        <Rect
                            x="15"
                            y="15"
                            width="70"
                            height="70"
                            stroke="red"
                            strokeWidth="2"
                            fill="yellow"
                        />
                        </Svg> */}
{/* 
                        <SvgUri
                        width="100%"
                        height="100%"
                        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                    /> */}
{/* 
                    <Svg height="50%" width="50%" viewBox="0 0 100 100">
                     
                      <Polygon
                        points="40,5 70,80 25,95,30 0"
                        fill="lime"
                        stroke="purple"
                        strokeWidth="1"
                      />
                    </Svg> */}

                  {/* <NativeBase/> */}
                  <ShimmerPlaceHolder autoRun={true}
                  backgroundColorBehindBorder="red"
                  style={{ marginBottom: 7 ,borderRadius:50,height:100,width:100}} />
                  
                  <Text style={styles.title}>
                  {strings.how}
                </Text>


                <Button title={strings.changeLanguage} onPress={this.changeLang}></Button>

               </View>
              </View>

            </View>
        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

export default withNavigation(Dashboard)
