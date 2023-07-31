import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image 
            source={{
                uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/quiz-4105652-3404371.png'
            }}
            style={styles.banner}
            resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity>
            <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    imgContainer: {
        alignItems: "center",
    }
})