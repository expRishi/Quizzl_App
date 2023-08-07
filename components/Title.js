import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>Quizzl</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "900",
    paddingBottom: 20,
  },
  titleView: {
    alignItems: "center",
  }
})