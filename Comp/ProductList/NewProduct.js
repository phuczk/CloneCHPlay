import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../confis';
import { useTheme } from '../Theme/ThemeContext';

import { addTodoAPI } from "../../Screen/src/redux/action/viewdAction";
const NewProduct = ({ id, imageSource, productName, productPrice, imageArr }) => {
    const navigation = useNavigation()
    const { theme, toggleTheme } = useTheme();
    const dispatch = useDispatch();

    const handleAddPro = () => {
        const dulieu = {image: imageSource, productName: productName, productPrice: productPrice}
        dispatch(addTodoAPI(dulieu))
            .then((result) => {
                console.log(result)
                console.log('Todo add successfully!');
            })
            .catch((error) => {
                console.error('Error add todo:', error);
            });

    }
    const handleProductPress = () => {
        // Chuyển đến màn hình chi tiết sản phẩm hoặc màn hình mong muốn
        // Ví dụ: Chuyển đến màn hình có tên 'Details_Product'
        navigation.navigate('Detail', { id, imageSource, productName, productPrice, imageArr });
        handleAddPro();

    };
    return (
        <TouchableOpacity onPress={handleProductPress} style={{ position: 'relative', marginLeft: 5, marginRight: 5, marginTop: 1, marginBottom: 1, width: 100 }}>
            <View style={{ elevation: 5, width: 98, height: 98, borderRadius: 24 }}>
                <Image source={imageSource} style={{ width: 98, height: 98, borderRadius: 24 }} />
            </View>
            <Text style={{ color: theme.textColor, marginTop: 5 }}>{productName}</Text>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ color: theme.textColor }}>★</Text>
                </View>
                <Text style={{ flex: 1, color: theme.textColor }}>{productPrice} vnd</Text>
            </View>
        </TouchableOpacity>
    )
};

const NewProductx = () => {
    const [foods, setFoods] = useState([]);
    // const listPro = useSelector(state => state.listNew.listNew);
    // const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(fetchNew())
    //         .then((data) => {
    //             // Sau khi nhận được dữ liệu từ API, gọi action addNew để cập nhật trạng thái Redux
    //             dispatch(setFoods(data));
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, [dispatch]);
    useEffect(() => {
        // dispatch(fetchNew());
        // if(Array.isArray(dispatch)){
        //     setFoods(dispatch);
        // }else{
        //     alert("khong phai")
        // }
        fetch(`${API_URL}/products?type=new`)
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

    // useEffect(() => {
    //     dispatch(fetchNew())
    //         .then((response) => {
    //             if (Array.isArray(response.json())) {
    //                 setFoods(response.json());
    //             } else {
    //                 alert("Không thể tải dữ liệu");
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //             alert("Đã xảy ra lỗi khi tải dữ liệu");
    //         });
    // }, [dispatch]);



    return (
        <SafeAreaView style={{ padding: 10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {foods && foods.map((food, index) => (
                    <NewProduct
                        key={index}
                        id={food.id}
                        imageSource={{ uri: food.image }}
                        imageArr={food.imageArr}
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

export default NewProductx;
