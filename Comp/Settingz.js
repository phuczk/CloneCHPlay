import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Rating from './Rateting/Rating';
import { useTheme } from './Theme/ThemeContext';

const Settingz = () => {
    const { theme, toggleTheme } = useTheme();
    const number = [5,3,3,4,2,5,5,4,3,3,1,2,2,5,5,5,5,5,5,5];
    
    // Đếm số lượng các số từ 1 đến 5
    const count = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    // Đếm số lượng các số
    number.forEach(num => {
        count[num]++;
    });

    // Tính tổng số lượng các số
    const total = number.length;

    return (
        <View style={{backgroundColor: theme.backgroundColor}}>
            <Text>Setting</Text>
            <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
                <Text style={{ color: theme.textColor }}>Toggle Theme</Text>
            </TouchableOpacity>
            
            {/* Hiển thị số lượng và view phản ánh tỷ lệ */}
            <View style={styles.container}>
                {[5, 4, 3, 2, 1].map(num => (
                    <View style={styles.row} key={num}>
                        <Text>{num}</Text>
                        <View style={styles.barContainer}>
                            <View style={[styles.bar, { width: `${(count[num] / total) * 100}%` }]} />
                        </View>
                    </View>
                ))}
            </View>

            <Rating numberData={[5,3,5,5,5]}/>
        </View>
    );
};

export default Settingz;

const styles = StyleSheet.create({
    container: {
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
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    themeButton: {
        marginTop: 10,
        backgroundColor: '#38b101',
        color: '#fff',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
