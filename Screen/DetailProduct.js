import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageScrollView from '../Comp/ImageScroolView';
import Comment from '../Comp/Rateting/CommentComp';
import { useTheme } from '../Comp/Theme/ThemeContext';
import { API_URL } from '../confis';
const DetailProduct = ({ route }) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const back = () => {
    navigation.goBack();
  }

  const search = () => {
    navigation.navigate("Search")
  }

  const { theme, toggleTheme } = useTheme();
  const { id, productName, imageSource, productPrice, image, imageArr } = route.params;
  useEffect(() => {
    console.log(imageSource)
    fetch(`${API_URL}/products/?id=${id}`) // Thay đổi URL tùy theo cấu hình của JSON Server

      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        // console.log(" type: "+product[0].type)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (product == []) {
    return (
      <View style={styles.container}>
        <Text>No product found. </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
      <ScrollView>
      <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, alignItems: 'center', marginBottom: 20, marginTop: 30 }}>
        <TouchableOpacity onPress={back}>
          <Image source={theme.backIcon} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity onPress={search}>
          <Image source={theme.searchIcon} style={{ width: 20, height: 20, marginRight: 10 }} />
        </TouchableOpacity>
        <Image source={theme.moreIcon} style={{ width: 20, height: 20 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, marginBottom: 20}}>
        <View style={{ width: 80, height: 80, borderRadius: 15, elevation: 6, backgroundColor: '#fff' }}>
          <Image source={{ uri: product[0].image }} style={{ width: 80, height: 80, borderRadius: 15 }} />
        </View>
        <View>
          <Text style={{ color: theme.textColor, fontSize: 24, marginLeft: 10 }}>{product[0].name}</Text>
          <Text style={{ marginLeft: 10, color: theme.textColor }}>{product[0].type}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around'}}>
        <View>
          <Text style={{color: theme.textColor, textAlign: 'center'}}>so sao ★</Text>
          <Text style={{color: theme.textColor}}>so luot danh gia</Text>
        </View>
        <View>
        <Text style={{color: theme.textColor, textAlign: 'center'}}>so sao ★</Text>
          <Text style={{color: theme.textColor}}>so luot tai</Text>
        </View>
        <View>
          <Text style={{color: theme.textColor, textAlign: 'center'}}>so sao ★</Text>
          <Text style={{color: theme.textColor}}>132 MB</Text>
        </View>
      </View>
      <TouchableOpacity style={{ height: 50, borderRadius: 35, backgroundColor: '#38b101', justifyContent: 'center', alignItems: 'center', margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.colorr }}> {product[0].price}</Text>
      </TouchableOpacity>
      <ImageScrollView images={product[0].imageArr} />

      <Comment idApp={id} />
      </ScrollView>
      {/* Hiển thị các thông tin khác của sản phẩm */}
    </SafeAreaView>
  );
}

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
