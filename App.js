/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import SecondScreen from './SecondScreen';
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={()=> this.props.navigation.openDrawer()} title='DrawerOpen'/>
      </View>
    );
  }

static navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({tintColor})=> (
      <Image
          source={require('./imgs/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />),

};
}


export default DrawerNavigator({
  Home: {
    screen: App,
  },
  SecondScreen: {
    screen: SecondScreen,
  }
},
{
  drawerPosition: 'left', 
  initialRouteName: 'Home',
  drawerWidth: 200
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
