import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';

import Cart from './Cart';
import Contact from './Contact';
import Favorite from './Favorite';
import Home from './Home';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <View>

            </View>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? {uri: ""} : {uri: ""}
                        } else if (route.name === 'Cart') {
                            iconName = focused ? {uri: ""} : {uri: ""}
                        } else if (route.name === 'Favorite') {
                            iconName = focused ? {uri: ""} : {uri: ""}
                        } else if (route.name === 'Contact') {
                            iconName = focused ? {uri: "https://cdn-icons-png.flaticon.com/128/7269/7269995.png"} : {uri: "https://cdn-icons-png.flaticon.com/128/7269/7269995.png"};
                        }

                        // Trả về biểu tượng (hình ảnh) cho từng tab
                        return <Image source={iconName} style={{ width: 30, height: 30, tintColor: color }} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#4EC581', // Màu sắc khi được chọn
                    inactiveTintColor: '#a7a7a7', // Màu sắc khi không được chọn
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
                <Tab.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
            </Tab.Navigator>
        </View>
    )
}

export default App