import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/HomeScreen';
import DailyPicScreen from './Screens/DailyPic';
import SpaceCraftScreen from './Screens/SpaceCraft';
import StraMapScreen from './Screens/StraMap';

const Stack = createStackNavigator();

export default function App(){
  return(
    <View style={styles.Main}>
     <NavigationContainer>
       
       <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
         
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="DailyPic" component={DailyPicScreen} />
         <Stack.Screen name="StraMap" component={StraMapScreen} />
         <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />

      </Stack.Navigator>

       </NavigationContainer>   
    </View>
  )
}

const styles = StyleSheet.create({
  Main:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  }
})