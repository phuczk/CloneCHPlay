import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Introduce03 = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate("Introduce02")
  }

  const next = () => {
    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={back}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/2732/2732652.png"}} style={styles.iconBack}/>
        </TouchableOpacity>
        <Text> Introduce 3 </Text>
      </View>
      <View style={styles.content}></View>
      <TouchableOpacity style={styles.btnNext} onPress={next}>
        <Text style={{color: '#fff'}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Introduce03

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 30,
  },
  title:{
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  },
  iconBack:{
    height: 30,
    width: 30,
  },
  content:{
    flex:1,
    backgroundColor: 'red'
  },
  btnNext:{
    backgroundColor: '#38b101',
    
    height: 60,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  }
})