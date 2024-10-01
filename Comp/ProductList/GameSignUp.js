import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../Theme/ThemeContext';
const SignProduct = ({ id, imageSource, productName, productPrice, imageBigg }) => {
    const navigation = useNavigation()
    const { theme, toggleTheme } = useTheme();
    const handleProductPress = () => {
        // Chuyển đến màn hình chi tiết sản phẩm hoặc màn hình mong muốn
        // Ví dụ: Chuyển đến màn hình có tên 'Details_Product'
        navigation.navigate('Detail', {id});
        
    };
    return(
        <TouchableOpacity onPress={handleProductPress} style={{ position: 'relative', marginLeft: 5, marginRight: 5, marginTop: 1, marginBottom: 1 , }}>
            <View>
                <Image source={imageBigg} style={{width: 200, height: 100, borderRadius: 10}}/>
            </View>
            <View style={{elevation:5, width: 98, height: 98, borderRadius: 24}}>
                <Image source={imageSource} style={{ width: 98, height: 98, borderRadius: 24 }} />
            </View>
            <Text style={{color: theme.textColor, marginTop: 5 }}>{productName}</Text>
            
            <View style={{flexDirection: 'row'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2893/2893811.png'}} style={{ width: 10, height: 10 }} />
            </View>
            <Text style={{   flex:1, color: theme.textColor }}>{productPrice} vnd</Text>
            </View>
        </TouchableOpacity>
    )
};

const GameSignUp = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://192.168.232.72:3000/products?type=sign')
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
                    <SignProduct
                        key={index}
                        id={food.id}
                        imageSource={{ uri: food.image }}
                        productName={food.name}
                        productNum={food.num}
                        productPrice={food.price}
                        productReview={food.review}
                        imageBigg={{uri: food.imageArr[0]}}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default GameSignUp;
