import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import { TouchableOpacity } from 'react-native'

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.imgContainer}>
        <Image 
            source={{
                uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/quiz-4105652-3404371.png'
            }}
            style={styles.banner}
            resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    imgContainer: {
        alignItems: "center",
    }
})