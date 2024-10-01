import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
function Login() {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [hasErrorUserName, setHasErrorUserName] = useState(false);
    const [hasErrorPassword, setHasErrorPassword] = useState(false);
    const [error, setError] = useState('');

    const doLogin = async () => {
        // kiểm tra hợp lệ dữ liệu
        if (userName.length == 0) {
            alert("Chưa nhập Username");
            return;
        }
        if (password.length == 0) {
            alert("Chưa nhập Password");
            return;
        }

        // thực hiên fetch để lấy dữ liệu về
        let url_check_login = "http://192.168.81.72:3000/users?userName=" + userName;

        try {
            const response = await fetch(url_check_login);
            const res_login = await response.json();

            if (res_login.length != 1) {
                alert("Kiểm tra lại username");
                return;
            } else {
                // số lượng lấy được 1 bản ghi ==> kiểm tra password
                let objU = res_login[0];
                if (objU.password != password) {
                    alert("Sai password");
                    return;
                } else {
                    ToastAndroid.show("dang nhap thanh cong", ToastAndroid.SHORT)
                    // đúng password: lưu thông tin vào storage
                    await AsyncStorage.setItem('loginInfo', JSON.stringify(objU));
                    navigation.navigate('MainActivity');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const signUpPress = () => {
        navigation.navigate('SignUp');
    }

    const onFocusHandlerUserName = () => {
        setHasErrorUserName(false);
        setError('');
    }

    const onFocusHandlerPassword = () => {
        setHasErrorPassword(false);
        setError('');
    }

    const [savePassword, setSavePassword] = useState(false); // Thêm state để theo dõi trạng thái lưu mật khẩu

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loginInfo = await AsyncStorage.getItem('loginInfo');
                if (loginInfo !== null) {
                    const { userName, password, savePassword } = JSON.parse(loginInfo);
                    setUserName(userName);
                    setPassword(password);
                    setSavePassword(savePassword); // Cập nhật trạng thái lưu mật khẩu từ storage
                }
            } catch (error) {
                console.error('Error fetching login info from AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);

    const Login = () => {
        if (userName.length === 0) {
            alert("Chưa nhập Username");
            return;
        }
        if (password.length === 0) {
            alert("Chưa nhập Password");
            return;
        }

        if (userName === 'A' && password === 'A') {
            navigation.navigate('Main')
        }

        // Thêm vào đây logic để lưu thông tin đăng nhập nếu cần
    }

    const SignUp = () => {
        navigation.navigate('SignUp')
    }

    const handleSavePass = async () => {
        setSavePassword(!savePassword);
        
        if (savePassword) {
            

            try {
                // Xóa thông tin user khỏi AsyncStorage
                await AsyncStorage.removeItem('loginInfo');
                console.log(savePassword);
            } catch (error) {
                console.error('Error removing user info from AsyncStorage:', error);
            }
    
            
        } else {
            const user = {
                userName: userName,
                password: password,
                savePassword: !savePassword // Lưu trạng thái lưu mật khẩu vào storage
            };
            try {
                // Lưu đối tượng user vào AsyncStorage
                await AsyncStorage.setItem('loginInfo', JSON.stringify(user));
                console.log(savePassword);
            } catch (error) {
                console.error('Error saving user info to AsyncStorage:', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.title}> Chào mừng đến với </Text>
                
                <Text style={{ color: '#38b101', fontSize: 18 }}> CH Play Clone </Text>
                <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/6124/6124997.png"}} style={{width: 60, height: 60, marginTop: 10}}/>
            </View>
            

            <View style={styles.view2}>
                <Text style={{ marginBottom: 20 }}> Vui lòng đăng nhập tài khoản của bạn </Text>
                <Text style={styles.errorText}>{error}</Text>
                <TextInput
                    style={[styles.textInput, hasErrorUserName && { borderColor: 'red' }]}
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                    onFocus={onFocusHandlerUserName}
                    placeholder='Nhập tên đăng nhập'
                />
                <TextInput
                    style={[styles.textInput, hasErrorPassword && { borderColor: 'red' }]}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onFocus={onFocusHandlerPassword}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonLogin} onPress={Login}>
                    <Text style={styles.buttonText}>Đăng Nhập</Text>
                </TouchableOpacity>

                <View style={styles.pass}>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity style={[styles.checkbox, savePassword ? styles.checkboxChecked : styles.checkboxUnchecked]} onPress={handleSavePass}></TouchableOpacity>
                        <Text>save your password</Text>
                    </View>
                    <Text>forgot password</Text>
                </View>
                <View style={styles.or}>
                    <View style={styles.line} />
                    <Text style={styles.text}>hoặc</Text>
                    <View style={styles.line} />
                </View>
            </View>

            <View style={styles.view3}>
                <TouchableOpacity style={styles.buttonKhac}>
                    <Image style={styles.logoSmall} source={{uri: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png"}} />
                    <Text>Đăng Nhập bằng Facebook</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonKhac}>
                    <Image style={styles.logoSmall} source={{uri: "https://cdn-icons-png.flaticon.com/128/300/300221.png"}} />
                    <Text>Đăng Nhập bằng Google </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Bạn chưa có tài khoản?</Text>
                    <Text style={{ color: '#38b101', marginLeft: 5 }} onPress={signUpPress}>Đăng ký</Text>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    view1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },

    view2: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30
    },

    textInput: {
        height: 60,
        width: '90%',

        borderRadius: 15,
        
        marginBottom: 10,
        backgroundColor: '#f4f7fe',
        padding: 18,
    },

    checkbox: {
        width: 18,
        height: 18,
        borderColor: '#38b101',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5
    },

    buttonLogin: {
        marginTop: 10,
        width: '90%',
        backgroundColor: '#38b101',
        color: '#fff',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center'
    },

    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
    },

    or: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginTop: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#d5d5d5', // Màu của dòng ngang
        marginHorizontal: 10, // Khoảng cách giữa dòng ngang và văn bản
    },
    text: {
        fontSize: 16,
        color: '#000', // Màu của văn bản
    },

    view3: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    buttonKhac: {
        height: 50,
        width: '90%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#d5d5d5',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    logoSmall: {
        height: 35,
        width: 35,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    logo: {
        width: 180,
        height: 120,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },

    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 5,
      marginRight: 5,
      borderWidth: 1,
      borderColor: '#38b101',
      borderWidth: 3
  },
  checkboxChecked: {
      backgroundColor: '#38b101' // Màu nền khi đã chọn
  },
  pass: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10
},
});

export default Login;
Login.navigationOptions
