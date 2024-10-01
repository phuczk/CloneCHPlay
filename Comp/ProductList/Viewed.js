import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { API_URL } from '../../confis';
import { useTheme } from '../Theme/ThemeContext';
const Viewed = () => {
    const navigation = useNavigation();
    const { theme, toggleTheme } = useTheme();
    const [appName, setAppName] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Hàm tìm kiếm sản phẩm theo tên ứng dụng trên API
    useEffect(() => {
        fetch(`${API_URL}/vieweds`)
            .then(response => response.json())
            .then(data => {

                // Kiểm tra xem data có phải là mảng không
                if (Array.isArray(data)) {
                    setSearchResults(data);
                } else {
                    console.error('Data from API is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const goToDetail = (id, productName, imageSource, productPrice, imageArr) => {
        navigation.navigate('Detail', { id, productName, imageSource, productPrice, imageArr });
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>

            {/* Hiển thị kết quả tìm kiếm */}
            <ScrollView style={{ flex: 1 }}>
                {searchResults.map((product, index) => (
                    <TouchableOpacity onPress={() => { goToDetail(product.id, product.name, product.image, product.price, product.imageArr) }} key={index} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Text style={{ color: theme.textColor, width: 30, marginRight: 10 }}> {index + 1}</Text>
                        <View style={{ width: 50, height: 50, marginRight: 10, borderRadius: 10, elevation: 5 }}>
                            <Image source={{ uri: product.image }} style={{ width: 50, height: 50, marginRight: 10, borderRadius: 10 }} />
                        </View>
                        <Text style={{ color: theme.textColor }}>{product.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

export default Viewed;

const styles = StyleSheet.create({});
