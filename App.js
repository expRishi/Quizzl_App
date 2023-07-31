import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Quiz from './screens/Quiz'
import Result from './screens/Result'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <Result />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
  }
})