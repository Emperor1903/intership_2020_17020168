import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

const NoticesList = [
    {
        id: '1',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: true
    },
    {
        id: '2',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: false
    }, {
        id: '3',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: false
    }
    , {
        id: '4',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: true
    },
    {
        id: '5',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: false
    }, {
        id: '6',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: true
    },
    {
        id: '7',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: true
    },
    {
        id: '8',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: true
    },
    {
        id: '9',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: false
    },
    {
        id: '10',
        content: 'Thông báo hệ thống',
        detail: 'Dịch vụ Quản lý thu phí nhà trường còn 25 ngày là đến hạn thanh toán',
        isRead: true
    }
]
const RenderNoticeItem = ({ item, navigation }) => {
    const [isRead, setIsRead] = useState(item.isRead)
    return (
        <TouchableOpacity onPress={() => { setIsRead(true); navigation.navigate("DetailNotice", { detail: item.detail }) }} style={{ width: "100%", height: 82, padding: 16, backgroundColor: isRead ? "#FFFFFF" : "#E5EFFB" }}>
            <View style={{ width: "100%", height: "100%", flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={{ width: "100%", height: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }, { color: "#081233", width: "80%" }]} numberOfLines={1} ellipsizeMode={"tail"}>{item.id} {item.content}</Text>
                    <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, lineHeight: 20 }, { color: "#81888F" }]}>12:59 AM</Text>
                </View>
                <View style={{ width: "100%", height: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 22 }, { color: "#81888F" }]} numberOfLines={1} ellipsizeMode={"tail"}>{item.detail}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function NoticeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatList
                    data={NoticesList}
                    renderItem={({ item }) => <RenderNoticeItem item={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})