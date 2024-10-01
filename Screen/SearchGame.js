import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../Comp/Theme/ThemeContext';
import { API_URL } from '../confis';
const SearchGame = () => {
    const navigation = useNavigation();
    const { theme, toggleTheme } = useTheme();
    const [appName, setAppName] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Hàm tìm kiếm sản phẩm theo tên ứng dụng trên API
    const searchAppByName = async () => {
        try {
            const response = await fetch(`${API_URL}/products?name=${appName}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const goToDetail = (id, productName, imageSource, productPrice, imageArr) => {
        navigation.navigate('Detail', { id, productName, imageSource, productPrice, imageArr });
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: theme.textColor }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' }} style={{ width: 20, height: 20, marginRight: 10 }} />
                <TextInput
                    style={{ height: 50, marginLeft: 20, flex: 1,  color: theme.textColor}}
                    placeholder='search app'
                    placeholderTextColor={theme.textColor}
                    value={appName}
                    onChangeText={setAppName}
                />
                <TouchableOpacity>
                    <Image
                        source={theme.microIcon}
                        style={{ width: 20, height: 20, marginRight: 10}}

                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={searchAppByName}>
                    <Image
                        source={theme.searchIcon}
                        style={{ width: 20, height: 20, }}

                    />
                </TouchableOpacity>
            </View>

            {/* Hiển thị kết quả tìm kiếm */}
            <ScrollView style={{ flex: 1 }}>
                {searchResults.map((product, index) => (
                    <TouchableOpacity onPress={()=>{goToDetail(product.id, product.name, product.image, product.price, product.imageArr)}} key={index} style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 0.5 }}>
                        <Image source={{ uri: product.image }} style={{ width: 50, height: 50, marginRight: 10, borderRadius: 10 }} />
                        <Text style={{color: theme.textColor}}>{product.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

export default SearchGame;

const styles = StyleSheet.create({});
