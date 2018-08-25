import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Enable your routes .
import { createStackNavigator } from 'react-navigation';
//IMport components for routes 
import HomeScreen from './components/container/HomeScreen';
import DetailsScreen from './components/container/DetailsScreen';

//Define your navigator root stack
//Which create a Routes Component
const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: 'Home',
  //Navigation holds mostly styles for that route.
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
