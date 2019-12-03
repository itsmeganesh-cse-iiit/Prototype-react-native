import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'yellow' }}>
        <Text>Home Screen</Text>
        <Button title="Test Screen" onPress={()=>this.props.navigation.navigate('Test',{
          userName:'Pavani Atchi',
          marks:100
        })}/>

      </View>
    );
  }
}

class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
        <Text>Test Screen</Text>
        <Button title="Home Screen" onPress={()=>this.props.navigation.navigate('Home')}/>
        {/* onPress={() => this.props.navigation.goBack()} */}
  <Text>{JSON.stringify(this.props.navigation.getParam('userName'))}</Text>
      </View>
    );
  }
}

const StackNavigatorC = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Test :{
    screen: TestScreen
  }
});

export default createAppContainer(StackNavigatorC);