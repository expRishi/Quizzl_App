import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import { TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.homeView}>
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
      <TouchableOpacity onPress={()=> navigation.navigate("Quiz")} style={styles.btn}>
        <Text style={styles.btnText}>Start</Text>
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
        paddingTop: 40,
    },
    homeView: {
      paddingTop: 120,
      paddingHorizontal: 20,
    },
    btn: {
      backgroundColor: "#FF8989",
      width: '100%',
      padding: 30,
      borderRadius: 100,
      marginTop: 150,
    },
    btnText: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "900",
    }
})