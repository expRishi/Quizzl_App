import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Quiz from './screens/Quiz'
import Result from './screens/Result'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';

const App = () => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
  }
})