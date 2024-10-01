import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
const Banner = () => {

    const scrollRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const imageRefs = useRef([]);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const image = [
        'https://play-lh.googleusercontent.com/5KfP7qzTA5alFaXNBKE2U_Bq7F0xgHWi0zQ96NAVQMVEVoMcfskJM1d8V7kMQi698eA=w526-h296-rw',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/2439510/header.jpg?t=1704274945',
        'https://play-lh.googleusercontent.com/F6bVY_G74QUTDC5lUsULt8ElCLxl_IE8sIOqM2vQOlKk5KAqdgNtRsh24JiTNxLw7A=w526-h296-rw'
    ]

    const WIDTH = Dimensions.get('window').width - 20;
    const HEIGHT = Dimensions.get('window').height;

    const handleScroll = (event) => {
        const slideWidth = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.floor(contentOffset / slideWidth);
        setSelectedIndex(currentIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % image.length;
            setCurrentImageIndex(nextIndex);
            scrollRef.current.scrollTo({
                animated: true,
                x: nextIndex * Dimensions.get('window').width - 20,
                y: 0,
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    onchange = (nativeEvent) => {

    }
    return (
        <SafeAreaView style={{ marginLeft: 10, marginTop: 30}}>
            <View style={{ width: WIDTH, height: HEIGHT * 0.25, elevation: 5 }}>
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onMomentumScrollEnd={handleScroll}
                    style={{}}
                >
                    {image.map((e, index) =>
                        <Image
                            key={e}
                            resizeMode='stretch'
                            style={{ width: WIDTH, height: HEIGHT * 0.25, borderRadius: 24, }}
                            source={{ uri: e }}
                        />
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default Banner

const styles = StyleSheet.create({})