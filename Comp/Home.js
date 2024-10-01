
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Button, DrawerLayoutAndroid, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider } from 'react-redux';
import storez from '../Screen/src/redux/store';
import store from '../Screen/src/redux/store/viewed';
import ProductScreen from '../Screen/src/screen/viewed';
import FilterProduct from './FilterProduct';
import GameNormal from './List/GameNormal';
import NewProduct from './List/NewProduct';
import NormalProduct from './List/NormalProduct';
import Option from './Option';
import HotGame from './ProductList/HotProduct';
import Banner from './Slide_Banner/SlideShow';
import { useTheme } from './Theme/ThemeContext';
const Home = () => {

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');
  const [selectedFilter, setSelectedFilter] = useState("For you");
  const [isDarkMode, setIsDarkMode] = useState(false); // State để lưu trạng thái chủ đề
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation();

  const renderNavigationView = () => (
    <View style={[styles.container, styles.navigationContainer, {backgroundColor: theme.backgroundColor}]}>
      <Option/>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  const navigationView = () => (
    <DrawerLayoutAndroid style={[styles.container, styles.navigationContainer]}
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      
      
    </DrawerLayoutAndroid>
  );

  return (
    <DrawerLayoutAndroid style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={renderNavigationView}>
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity style={[styles.inputSearch, { backgroundColor: theme.inputColor }]} onPress={() => navigation.navigate("Search")}>
            <Image
              source={theme.searchIcon}
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
            <Text style={{ flex: 1, color: theme.textSearch }}> Search App... </Text>
            <Image
              source={theme.microIcon}
              style={{ width: 20, height: 20, }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleTheme}>
            <Image
              source={theme.bellIcon}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => drawer.current && drawer.current.openDrawer()}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' }} style={{ width: 40, height: 40, marginRight: 10 }} />
          </TouchableOpacity>
        </View>
        <FilterProduct selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

        <SafeAreaView style={{ flex: 1, paddingBottom: 20 }}>
          <ScrollView >

            {selectedFilter == 'For you' ?
              <SafeAreaView style={{ flex: 1 }}>
                <Banner />
                <Provider store={storez}>
                <NewProduct />
                </Provider>
                
                <NormalProduct />
                <GameNormal />
              </SafeAreaView>
              : selectedFilter == "Top" ?
                <HotGame />
                : selectedFilter == 'Book'
                  ? <ActivityIndicator/>
                  : selectedFilter == "Hot"
                    ? <ActivityIndicator/>
                    : <Provider store={store}>
                      <ProductScreen/>
                      </Provider>}

          </ScrollView>
        </SafeAreaView>

        {/* Nút chuyển đổi chủ đề */}

      </View>
    </DrawerLayoutAndroid>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Các thuộc tính kiểu dáng khác...
  },
  inputSearch: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    height: 50,
    borderRadius: 24,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10
  },
  themeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  }
});
