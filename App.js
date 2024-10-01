import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from './Comp/Theme/ThemeContext';
import CommentListz from './Screen/CommentList';
import DetailProduct from './Screen/DetailProduct';
import Introduce01 from './Screen/Introduce01';
import Introduce02 from './Screen/Introduce02';
import Introduce03 from './Screen/Introduce03';
import Login from './Screen/Login';
import Main from './Screen/Main';
import MyPhone from './Screen/MyPhone';
import SearchGame from './Screen/SearchGame';
import Setting from './Screen/Setting';
import SignUp from './Screen/SignUp';
import ViewedProduct from './Screen/ViewedProduct';
const Stack = createStackNavigator();
const Welcome = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Chuyển sang màn hình Login sau 3 giây
      navigation.replace('Introduce01');
    }, 3000);

    // Hủy bỏ hàm setTimeout nếu component unmount
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:"center"}}>

    </View>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen component={Welcome} name='Welcome'/>
        <Stack.Screen component={Introduce01} name='Introduce01' options={{headerShown: false}}/>
        <Stack.Screen component={Introduce02} name='Introduce02' options={{headerShown: false}}/>
        <Stack.Screen component={Introduce03} name='Introduce03' options={{headerShown: false}}/>
        <Stack.Screen component={Login} name='Login' options={{headerShown: false}}/>
        <Stack.Screen component={SignUp} name='SignUp' options={{headerShown: false}}/>
        <Stack.Screen component={Main} name='Main' options={{headerShown: false}}/>
        <Stack.Screen component={Setting} name='Setting' options={{headerShown: false}}/>
        <Stack.Screen component={DetailProduct} name='Detail' options={{headerShown: false}}/>
        <Stack.Screen component={SearchGame} name='Search' options={{headerShown: false}}/>
        <Stack.Screen component={CommentListz} name='Comment' options={{headerShown: false}}/>
        <Stack.Screen component={MyPhone} name='Phone' options={{headerShown: false}}/>
        <Stack.Screen component={ViewedProduct} name='Viewed' options={{headerShown: false}}/>
        
      </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
