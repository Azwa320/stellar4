import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPicScreen from './Screens/DailyPic';
import SpaceCraftsScreen from './Screens/SpaceCrafts';
import StarMapScreen from './Screens/StarMap';
import HomeScreen from './Screens/Home'

const Stack =createStackNavigator()


export default function App() {
  return (

    <NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{
   headerShown:false
}}>

  <Stack.Screen name="Home" component={HomeScreen}/>
  <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
  <Stack.Screen name="StarMap" component={StarMapScreen}/>
  <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
</Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});