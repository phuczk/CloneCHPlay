import React from 'react';
import { Image, SafeAreaView, ScrollView } from 'react-native';

const ImageScrollView = ({ images }) => {
    return (
        <SafeAreaView style={{ padding: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images && images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={{ width: 350, height: 200, marginRight: 10, borderRadius: 15 }} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default ImageScrollView;
