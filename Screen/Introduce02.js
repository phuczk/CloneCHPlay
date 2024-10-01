import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Introduce02 = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate("Introduce01")
  }

  const next = () => {
    navigation.navigate("Introduce03")
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={back}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/2732/2732652.png"}} style={styles.iconBack}/>
        </TouchableOpacity>
        <Text> Introduce 2 </Text>
      </View>
      <View style={styles.content}>
        <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/6124/6124997.png"}} style={{width: 200, height: 200, marginTop: 20}}/>
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold', color: 'green', fontSize: 25}}> day la app clone CH PLAY</Text>
          <Text style={{fontWeight: 'bold', color: 'green', fontSize: 25}}> noi day de demo tai game</Text>
          <Text style={{fontWeight: 'bold', color: 'green', fontSize: 25}}> cong nghe su dung : react native, json-server, redux, ..</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnNext} onPress={next}>
        <Text style={{color: '#fff'}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Introduce02

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
    alignItems: 'center'
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