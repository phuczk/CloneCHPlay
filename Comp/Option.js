import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from './Theme/ThemeContext';
const Option = () => {
    const {theme, toggleTheme} = useTheme();
    const navigation = useNavigation();
    return (
        <View>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" }} style={{ width: 100, height: 100 }} />
            <Text style={{color: theme.textColor}}> Nguyen van A </Text>
            <TouchableOpacity style={{width: '100%', height: 50, alignItems: 'center', paddingLeft: 10, flexDirection: 'row',}} onPress={() => navigation.navigate("Phone")}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2040/2040504.png" }} style={{ width: 30, height: 30, marginRight: 10 }} />
                <Text style={{color: theme.textColor}}> setting </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '100%', height: 50, alignItems: 'center', paddingLeft: 10, flexDirection: 'row',}} onPress={toggleTheme}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/456/456250.png" }} style={{ width: 30, height: 30, marginRight: 10 }} />
                <Text style={{color: theme.textColor}}> doi theme </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '100%', height: 40, justifyContent: 'center', paddingLeft: 10}} onPress={() => navigation.navigate("Viewed")}>
                <Text style={{color: theme.textColor}}> Lich su da xem </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Option

const styles = StyleSheet.create({})