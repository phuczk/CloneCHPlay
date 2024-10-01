import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Star = () => {
    const [stars, setStars] = useState([false, false, false, false, false]); // Mảng để theo dõi trạng thái của từng sao

    const handleStarPress = (index) => {
        const updatedStars = stars.map((star, i) => (i <= index)); // Đánh dấu sao được chọn và tất cả các sao trước nó
        setStars(updatedStars);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rate this app:</Text>
            <View style={styles.starsContainer}>
                {stars.map((star, index) => (
                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                        <Text style={[styles.star, { color: star ? 'red' : 'gray' }]}>★</Text> {/* Thay đổi màu sắc của sao dựa trên trạng thái */}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 30,
    },
});

export default Star;
