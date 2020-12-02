import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text, ScrollView, Dimensions, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import md5 from "md5";
import CookieManager from '@react-native-community/cookies';

const _storeData = async (username, password) => {
    try {
        const account = JSON.stringify({ username: username, password: password });
        await AsyncStorage.setItem('account', account);
    } catch (error) {
        console.log(error);
    }
};

export default function LoginScreen({ navigation }) {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    const [username, onChangeUsername] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [isHidden, setIsHidden] = useState(true)
    const doLogin = () => {
        fetch(`https://mlms-vnpt.vnedu.edu.vn/module/api/service/Security/login?email=${username}&password=${md5(password)}`)
            .then((respone) => respone.json())
            .then((responeJson) => {
                if (responeJson.success) {
                    console.log(responeJson);
                    CookieManager.clearAll()
                    CookieManager.setFromResponse("https://mlms-vnpt.vnedu.edu.vn/",
                        "app_token=" + encodeURIComponent(responeJson.token))
                    _storeData(username, password)
                    navigation.navigate("MainTabs")
                }
                else {
                    alert(responeJson.msg)
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
    return (
        <ScrollView style={{ backgroundColor: "#1443D4", height: '100%', width: '100%' }}>
            <ImageBackground source={require('../media/VectorLogin.png')} style={{ width: screenWidth, height: screenHeight }}>

                <View style={{ width: screenWidth, height: screenWidth, padding: 16, alignItems: "center", flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Image source={require('../media/Group2364.png')} style={{}}></Image>
                    <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold', fontSize: 24, lineHeight: 32 }, { color: '#fff' }]}>Đăng nhập</Text>
                </View>

                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#fff', position: 'absolute', top: screenWidth, right: 0, bottom: 0, left: 0, padding: 16 }}>
                    <View style={{ margin: 8 }}>
                        <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 22 }, { color: '#595959' }]}>Tên đăng nhập</Text>

                        <View style={{ width: '100%', height: 50, borderWidth: 1, borderRadius: 6, borderColor: '#005ED3', padding: 8, flexDirection: 'row' }}>
                            <Icon name="user" size={16} color="#005ED3" style={{ margin: 8 }}></Icon>
                            <TextInput
                                style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }, { color: "#005ED3", position: 'absolute', top: 0, right: 0, bottom: 0, left: 48 }]}
                                onChangeText={text => onChangeUsername(text)}
                                value={username}
                            />
                        </View>

                    </View>
                    <View style={{ margin: 8 }}>
                        <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 22 }, { color: '#595959' }]}>Mật khẩu</Text>

                        <View style={{ width: '100%', height: 50, borderWidth: 1, borderRadius: 6, borderColor: '#005ED3', padding: 8, flexDirection: 'row' }}>
                            <Icon name="lock" size={16} color="#005ED3" style={{ margin: 8 }}></Icon>
                            <TextInput
                                style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }, { position: 'absolute', top: 0, right: password == '' ? 0 : 48, bottom: 0, left: 48 }, { color: "#005ED3" }]}
                                secureTextEntry={isHidden}
                                onChangeText={text => onChangePassword(text)}
                                value={password}
                            />
                            <TouchableOpacity onPress={() => setIsHidden(!isHidden)} style={{ width: 48, height: 48, position: 'absolute', top: 0, right: 0, bottom: 0 }}><Icon name={isHidden ? "eye" : "eye-off"} size={16} color="#005ED3" style={{ margin: 16, opacity: password == '' ? 0 : 1 }} ></Icon></TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ margin: 8 }}>
                        <TouchableOpacity onPress={() => { doLogin() }} style={{ width: '100%', height: 48, backgroundColor: "#005ED3", borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }, { color: '#fff' }]}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
