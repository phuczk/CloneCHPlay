import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Introduce01 = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate("Introduce01")
  }

  const next = () => {
    navigation.navigate("Introduce02")
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={back}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/2732/2732652.png"}} style={styles.iconBack}/>
        </TouchableOpacity>
        <Text> Introduce 1 </Text>
      </View>
      <View style={styles.content}>
        <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}} style={{width: 200, height: 200}}/>
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold', color: 'green', fontSize: 25}}> Ho Va Ten Nguyen Van Phuc</Text>
          <Text style={{fontWeight: 'bold', color: 'green', fontSize: 25}}> MSSV: PH35252</Text>
          <Text style={{fontWeight: 'bold', color: 'green', fontSize: 25}}> Lop: CRO102: MD18306</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnNext} onPress={next}>
        <Text style={{color: '#fff'}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Introduce01

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