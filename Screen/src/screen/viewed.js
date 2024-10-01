import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoApi, fetchTodos } from '../redux/action/viewdAction';
const ProductScreen = () => {
    
    const [showDialog, setshowDialog] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const listPro = useSelector(state => state.listView.listView);
    const dispatch = useDispatch();

    const currentDAte = new Date();

    const handleDelete = (id) => {
        dispatch(deleteTodoApi(id))
            .then((result) => {
                console.log('Todo deleted successfully!');
            })
            .catch((error) => {
                console.error('Error deleting todo:', error);
            });
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);



    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            
            
            {
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 200 }}>
                        {
                            listPro.map((row, index) => (
                                <View key={row.id}
                                    style={{ padding: 10, margin: 10, elevation: 5, backgroundColor: 'white', borderRadius: 15, }}>
                                    {
                                        
                                            
                                            (
                                                <>
                                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Image source={{uri: row.image.uri}} style={{width: 60, height:60, marginRight: 10}}/>
                                                    <Text style={{ color: 'black', flex:1 }}>{row.productName}</Text>
                                                    <TouchableOpacity onPress={() => handleDelete(row.id)} style={{ backgroundColor: 'pink', borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: 40, marginTop: 10, width: 100}}>
                                                            <Text style={{ color: 'red' }}>Xóa</Text>
                                                        </TouchableOpacity>
                                                </View>
                                                    
                                                    


                                                </>


                                            )

                                    }
                                </View>
                            ))
                        }
                    </ScrollView>
                </SafeAreaView>
            }
            

            {/* <Modal
                visible={showDialog}
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '90%', borderRadius: 24, padding: 10, backgroundColor: '#fff', }}>
                        <TextInput placeholderTextColor={"#d6d6d6"} placeholder='nhap ten hang nhe ' onChangeText={setTitle} style={{ borderRadius: 24, paddingLeft: 20, marginTop: 10, color: '#000', backgroundColor: '#f2f2f2' }} />


                        <TextInput placeholderTextColor={"#d6d6d6"} placeholder='nhap rate hang nhe ' onChangeText={setRate} style={{ borderRadius: 24, paddingLeft: 20, marginTop: 10, color: '#000', backgroundColor: '#f2f2f2' }} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleSelectThu} style={{ flex: 1, alignItems: 'center' }}><Text style={{ color: 'green' }}>Thu</Text></TouchableOpacity>
                            <TouchableOpacity onPress={handleSelectChi} style={{ flex: 1, alignItems: 'center' }}><Text style={{ color: 'red' }}>Chi</Text></TouchableOpacity>
                        </View>
                        {isThu ? (
                            <TextInput
                                placeholderTextColor={"#d6d6d6"}
                                placeholder='Nhập tiền thu'
                                onChangeText={setTienThu}
                                style={{ borderRadius: 24, paddingLeft: 20, marginTop: 10, color: '#000', backgroundColor: '#f2f2f2' }}
                            />
                        ) : (
                            <TextInput
                                placeholderTextColor={"#d6d6d6"}
                                placeholder='Nhập tiền chi'
                                onChangeText={setTienChi}
                                style={{ borderRadius: 24, paddingLeft: 20, marginTop: 10, color: '#000', backgroundColor: '#f2f2f2' }}
                            />
                        )}
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable onPress={() => { setshowDialog(false) }} style={{ backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', marginTop: 20, height: 50, flex: 1 }}>
                                <Text style={{ textAlign: 'center', color: '#fff', }}> cancel</Text>
                            </Pressable>
                            <Pressable onPress={() => { handleAddPro(); setshowDialog(false) }} style={{ backgroundColor: 'skyblue', borderRadius: 10, justifyContent: 'center', marginTop: 20, height: 50, flex: 1, marginLeft: 10 }}>
                                <Text style={{ textAlign: 'center', color: '#fff', }}> them san pham</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal> */}
        </View>
    )
}

export default ProductScreen;
