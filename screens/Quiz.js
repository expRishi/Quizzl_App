import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

const Quiz = ({navigation}) => {

  const [questions, setQuestions] = useState();

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    // console.log(data);
  };

  useEffect(()=> {
    getQuiz();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.qusView}>
        <Text style={styles.qusText}>Q. Imagine it's a question</Text>
      </View>
      <View style={styles.optView}>
        <TouchableOpacity style={styles.optBtn}>
            <Text style={styles.optText}>Option1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optBtn}>
            <Text style={styles.optText}>Option2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optBtn}>
            <Text style={styles.optText}>Option3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optBtn}>
            <Text style={styles.optText}>Option4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Result")} style={styles.btn}>
          <Text style={styles.btnText}>END</Text>
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
        height: '100%',
        paddingBottom: 230,
    },
    qusView: {
        margin: 30,
        alignItems: "center",
        //borderWidth: 1,
        //borderColor: "red",
    },
    qusText: {
      fontSize: 30,
      fontWeight: "900",
    },
    optBtn: {
      backgroundColor: "#FFE17B",
      width: 300,
      padding: 30,
      borderRadius: 80,
      marginTop: 70,
    },
    optText: {
      fontSize: 16,
      textAlign: "center",
      fontWeight: "900",
      color: "black"
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
        height: '100%',
    },
    btn: {
      backgroundColor: "#CBFFA9",
      width: 100,
      padding: 30,
      borderRadius: 100,
      marginTop: 70,
    },
    btnText: {
      fontSize: 15,
      textAlign: "center",
      fontWeight: "900",
      color: "black"
    },

})