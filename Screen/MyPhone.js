import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../Comp/Theme/ThemeContext';
const MyPhone = () => {
    const navigation = useNavigation();

    const back = () => {
        navigation.goBack();
    }
    const { theme, toggleTheme } = useTheme();
    return (
        <View style={{backgroundColor: theme.backgroundColor, flex:1}}>
            
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, alignItems: 'center', marginBottom: 20, marginTop: 30 }}>
                <TouchableOpacity onPress={back}>
                    <Image source={theme.backIcon} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity>
                    <Image source={theme.searchIcon} style={{ width: 20, height: 20, marginRight: 10 }} />
                </TouchableOpacity>
                <Image source={theme.moreIcon} style={{ width: 20, height: 20 }} />
            </View>

            <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/6276/6276026.png"}} style={{width: 300, height: 300, marginLeft: 'auto', marginRight: 'auto'}}/>


            <View style={{ flexDirection: 'row' , marginTop: 20}}>
                <View style={[styles.block, {backgroundColor: theme.inputColor}]}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/689/689297.png" }} style={styles.image} />
                    <Text style={{color: theme.textColor}}>bo xu ly</Text>
                    <Text style={{color: theme.textColor}}>2,0 GHz loi tam</Text>
                </View>
                <View style={[styles.block, {backgroundColor: theme.inputColor}]}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3097/3097099.png" }} style={styles.image} />
                    <Text style={{color: theme.textColor}}>Ram</Text>
                    <Text style={{color: theme.textColor}}>8,00+4,00 GB</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.block, {backgroundColor: theme.inputColor}]}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/11378/11378763.png" }} style={styles.image} />
                    <Text style={{color: theme.textColor}}>phien ban android</Text>
                    <Text style={{color: theme.textColor}} >12</Text>
                </View>
                <View style={[styles.block, {backgroundColor: theme.inputColor}]}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/907/907027.png" }} style={styles.image} />
                    <Text style={{color: theme.textColor}}>bo nho dien thoai</Text>
                    <Text style={{color: theme.textColor}}>128 GB</Text>
                </View>
            </View>
        </View>
    )
}

export default MyPhone

const styles = StyleSheet.create({
    block: {
        borderRadius: 15,
        padding: 10,
        margin: 10,
        flex: 1,
        elevation: 5,
        backgroundColor: '#fff',
        height: 100
    },
    image: {
        width: 30,
        height: 30,
        marginBottom: 10
    }
})