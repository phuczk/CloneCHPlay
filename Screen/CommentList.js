import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import CommentList from '../Comp/Rateting/CommentList';
import { useTheme } from '../Comp/Theme/ThemeContext';
import { API_URL } from '../confis';
const CommentListz = ({ route }) => {
    const { id } = route.params;
    const [searchResults, setsearchResults] = useState([])
    const {theme, toggleTheme} = useTheme();
    const navigation = useNavigation();
    const back = () => {
        navigation.goBack();
    }

    
    useEffect(() => {
        console.log(id)
        fetch(`${API_URL}/comments/?idGame=${id}`)
            .then(response => response.json())
            .then(data => {

                // Kiểm tra xem data có phải là mảng không
                if (Array.isArray(data)) {
                    setsearchResults(data);
                } else {
                    console.error('Data from API is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: theme.backgroundColor}}>
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
            <ScrollView>
                <CommentList comments={searchResults} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CommentListz

const styles = StyleSheet.create({})