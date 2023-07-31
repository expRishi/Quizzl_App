import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.qusView}>
        <Text>Imagine it's a question</Text>
      </View>
      <View style={styles.optView}>
        <TouchableOpacity>
            <Text>Option1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Option2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Option3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Option4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity>
            <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        //borderWidth: 1,
        //borderColor: "red",
        height: '100%'
    },
    qusView: {
        margin: 30,
        alignItems: "center",
        //borderWidth: 1,
        //borderColor: "red",
    },
    optView: {
        padding: 5,
        alignItems: "center",
        //borderWidth: 1,
        //borderColor: "red",
        height: 300,
        justifyContent: "space-evenly",
    },
    btnView: {
        padding: 100,
        marginHorizontal: -50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    }

})