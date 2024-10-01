import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import GameNormalz from '../ProductList/GameNormal';
import { useTheme } from '../Theme/ThemeContext';
const GameNormal = () => {
    const { theme, toggleTheme } = useTheme();
    return (

        <View style={{ marginTop: 20 }}>
            <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: theme.textColor, fontSize: 15, marginLeft: 20 }}>Tro choi pho thong</Text>
                </View>
                <Image source={theme.nextIcon} style={{ width: 20, height: 20, marginRight: 20 }} />
            </View>
            <GameNormalz />
        </View>
    )
}

export default GameNormal

const styles = StyleSheet.create({})