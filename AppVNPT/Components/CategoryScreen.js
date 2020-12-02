import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import CookieManager from '@react-native-community/cookies'
import AsyncStorage from '@react-native-community/async-storage'

const RenderCategoryItem = ({ name, content }) => {
    return (
        <View style={{ margin: 8, height: 44, flexDirection: 'row' }}>
            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 44, backgroundColor: '#005ED3', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={name} size={24} color="white"></Icon>
            </View>
            <View style={{ position: 'absolute', top: 0, right: 44, bottom: 0, left: 44, backgroundColor: '#FFFFFF', justifyContent: 'center', paddingLeft: 16 }}>
                <Text style={{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 14, lineHeight: 22 }}>{content}</Text>
            </View>
            <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 44, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="right" size={16} color="#75818F"></Icon>
            </View>
        </View>
    )
}

export default function CategoryScreen({ navigation }) {
    return (
        <SafeAreaView>
            <SafeAreaView style={{ padding: 8, height: '100%', width: '100%', backgroundColor: '#F3F6FF' }}>
                <RenderCategoryItem name="user" content="Thông tin tài khoản" />
                <RenderCategoryItem name="file1" content="Tài liệu" />
                <RenderCategoryItem name="notification" content="Giới thiệu" />
                <RenderCategoryItem name="contacts" content="Liên hệ" />
                <RenderCategoryItem name="customerservice" content="Hỗ trợ" />
                <RenderCategoryItem name="message1" content="Hỏi đáp" />
            </SafeAreaView>
            <View style={{ width: '100%', height: 72, backgroundColor: '#ffffff', position: 'absolute', right: 0, bottom: 0, left: 0, padding: 16 }}>
                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: '#ff0000', borderRadius: 4, justifyContent: 'space-around' }}
                    onPress={() => { CookieManager.clearAll(); AsyncStorage.removeItem('account')  ; navigation.navigate('Login') }}
                >
                    <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 14, lineHeight: 22 }, { color: '#fff', textAlign: 'center' }]}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
