import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import NewProductx from '../ProductList/NewProduct'
import { useTheme } from '../Theme/ThemeContext'
const NewProduct = () => {
    const { theme, toggleTheme } = useTheme();
    return (

        <View style={{ marginTop: 20 }}>
            <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: theme.textColor, fontSize: 15, marginLeft: 20 }}>Ngay trong tam tay</Text>
                    <Text style={{ color: theme.textColor, marginLeft: 20 }}>mua nhung ung dung nay</Text>
                </View>
                <Image source={theme.nextIcon} style={{ width: 20, height: 20, marginRight: 20 }} />
            </View>
            <NewProductx />
        </View>
    )
}

export default NewProduct

const styles = StyleSheet.create({})