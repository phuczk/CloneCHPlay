import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { API_URL } from '../../confis';
import { useDispatch, useSelector } from 'react-redux';
import NewProduct from '../List/NewProduct';
import { useTheme } from '../Theme/ThemeContext';
import CommentList from './CommentList';

import { addTodoAPI } from "../../Screen/src/redux/action/proAction";

const Rating = ({ numberData, countComment, id, setRatingData, data }) => {
    const [star, setStar] = useState(0)
    const [content, setContent] = useState("")
    const { theme, toggleTheme } = useTheme();
    const navigation = useNavigation();

    const listPro = useSelector(state => state.listComment.listComment);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(star);
    }, [star]);

    const SaveProduct = () => {
        if (star > 0) {
            let objSP = { content: content, star: star, idGame: id };

            dispatch(addTodoAPI(objSP))
            .then((result) => {
                console.log(result)
                setRatingData(prevData => [...prevData, star]);
                        // Gọi callback khi thêm đánh giá thành công
                        if (typeof onAddCommentSuccess === 'function') {
                            onAddCommentSuccess();
                        }
                console.log('Todo add successfully!');
            })
            .catch((error) => {
                console.error('Error add todo:', error);
            });
            // let link_appi = `${API_URL}/comments`;
            // fetch(link_appi, {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(objSP)
            // })
            //     .then((res) => {
            //         if (res.status == 201) {
            //             alert("danh gia thanh cong");
            //             // Cập nhật dữ liệu đánh giá sau khi thêm mới thành công
            //             setRatingData(prevData => [...prevData, star]);
            //             // Gọi callback khi thêm đánh giá thành công
            //             if (typeof onAddCommentSuccess === 'function') {
            //                 onAddCommentSuccess();
            //             }
            //         }
            //     })
            //     .catch((ex) => {
            //         console.log(ex);
            //     });


        }else{
            alert("vui long chon sao")
        }
    };



    const handleStarPress = (index) => {
        setStar(index); // Chọn sao bằng cách đặt giá trị star tương ứng
    };

    // Kiểm tra xem numberData có tồn tại và là một mảng không trước khi sử dụng nó
    if (!Array.isArray(numberData)) {
        return null; // Trả về null nếu numberData không tồn tại hoặc không phải là một mảng
    }

    // Đếm số lượng các số từ 1 đến 5
    const count = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    // Đếm số lượng các số
    numberData.forEach(num => {
        count[num]++;
    });

    // Tính tổng số lượng các số
    const total = numberData.length;

    // Tính tổng số của tất cả các số
    const sum = Object.keys(count).reduce((acc, num) => acc + count[num] * parseInt(num), 0);

    // Tính trung bình cộng
    const average = total > 0 ? sum / total : 0;

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingBottom: 20 }}>
            <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
                <Text style={{ color: theme.textColor, fontSize: 24 }}>Xep hang ung dung nay</Text>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
                <Text style={{ color: theme.textColor }}>hay danh nhung dieu tot dep</Text>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                        <Text style={{ color: index <= star ? '#38b101' : '#d5d5d5', fontSize: 60 }}>★</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/* <Star/> */}
            <TextInput onChangeText={(txt) => setContent(txt)} style={{ color: theme.textColor, width: 370, height: 50, paddingLeft: 10, backgroundColor: theme.inputColor, borderRadius: 10, marginTop: 20 }} placeholder=' viet danh gia' placeholderTextColor={'#38b101'} />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
                <Text style={{ flex: 1, color: theme.textColor }}> ban co chac muon danh gia ?</Text>
                <TouchableOpacity onPress={SaveProduct} style={{ backgroundColor: '#38b101', borderRadius: 27, height: 50, width: 90, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: theme.colorr }}>Comment</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <View>
                    <Text style={[styles.averageText, { color: theme.textColor }]}>{average.toFixed(2)}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ color: theme.textColor }}>★</Text>
                        <Text style={{ color: theme.textColor }}>★</Text>
                        <Text style={{ color: theme.textColor }}>★</Text>
                        <Text style={{ color: theme.textColor }}>★</Text>
                        <Text style={{ color: theme.textColor }}>★</Text>
                    </View>

                    <Text style={{ marginLeft: 35, color: theme.textColor }}>{countComment} luot danh gia</Text>
                </View>
                <View style={styles.container}>
                    {[5, 4, 3, 2, 1].map(num => (
                        <View style={styles.row} key={num}>
                            <Text style={{ color: theme.textColor }}>{num}</Text>
                            <View style={styles.barContainer}>
                                <View style={[styles.bar, { width: `${(count[num] / total) * 100}%` }]} />
                            </View>
                        </View>
                    ))}
                </View>


            </View>
            <View style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 30 }}>
                <Text style={{ color: theme.textColor, flex: 1, marginLeft: 20 }}>xem tat ca cac luot danh gia </Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Comment", { data, id }) }}>
                    <Image source={theme.nextIcon} style={{ width: 20, height: 20, marginRight: 20 }} />
                </TouchableOpacity>
            </View>

            {/* <NewProductx/> */}
            <CommentList comments={data.slice(0, 3)} />
            <NewProduct />

        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row', // Hiển thị phần tử con theo chiều ngang
        alignItems: 'center', // Canh chỉnh phần tử con theo trục thẳng đứng
    },
    container: {
        flex: 1,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    barContainer: {
        flex: 1,
        marginLeft: 10,
        height: 10,
        backgroundColor: '#d5d5d5',
        borderRadius: 5,
    },
    bar: {
        height: 10,
        backgroundColor: '#38b101',
        borderRadius: 5,
    },
    averageText: {

        fontSize: 50,

        flex: 0.4,
        marginLeft: 20,
        marginRight: 10,
        textAlign: 'center',

    },
});

export default Rating;
