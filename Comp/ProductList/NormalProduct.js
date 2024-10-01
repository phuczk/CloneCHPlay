import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { API_URL } from '../../confis';
import { useTheme } from '../Theme/ThemeContext';
const NormalItem = ({ id, imageSource, productName, productPrice, image, imageArr}) => {
    const navigation = useNavigation()
    const { theme, toggleTheme } = useTheme();
    const handleProductPress = () => {
        
        navigation.navigate('Detail', { id, productName, imageSource, productPrice, image, imageArr });

    };
    return (
        <TouchableOpacity onPress={handleProductPress} style={{ position: 'relative', marginLeft: 5, marginRight: 5, marginTop: 1, marginBottom: 1, }}>
            <Image source={image} style={{ width: 300, height: 160, borderRadius: 15 }} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{ elevation: 5, width: 60, height: 60, borderRadius: 24 , marginTop: 10, marginRight: 10}}>
                    <Image source={imageSource} style={{ width: 60, height: 60, borderRadius: 15,  }} />
                </View>
                <View>
                    <Text style={{ color: theme.textColor, marginTop: 5 }}>{productName}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ color: theme.textColor }}>★</Text>
                        </View>
                        <Text style={{ flex: 1, color: theme.textColor }}>{productPrice} vnd</Text>
                    </View>
                    <Text style={{ color: theme.textColor }}>Game</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const NormalProductz = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/products?type=normal`)
            .then(response => response.json())
            .then(data => {

                // Kiểm tra xem data có phải là mảng không
                if (Array.isArray(data)) {
                    setFoods(data);
                } else {
                    console.error('Data from API is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <SafeAreaView style={{ padding: 10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {foods && foods.map((food, index) => (
                    <NormalItem
                        key={index}
                        id={food.id}
                        image={{ uri: food.imageArr[0] }}
                        imageArr={food.imageArr}
                        imageSource={{ uri: food.image }}
                        productName={food.name}
                        productNum={food.num}
                        productPrice={food.price}
                        productReview={food.review}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default NormalProductz;
