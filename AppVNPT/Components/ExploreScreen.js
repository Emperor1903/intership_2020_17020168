import React, { useState, useEffect } from 'react'
import { View, ImageBackground, TextInput, StyleSheet, Image, Text, ScrollView, SafeAreaView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import LocalImage from './LocalImage'

const RenderCourseItem = ({ item }) => {
    return (
        <View style={{ height: 132, width: 132, backgroundColor: '#FFFFFF', marginTop: 8, marginRight: 8, marginBottom: 8, borderRadius: 4 }}>
            <Image style={{ height: 64, width: '100%' }} source={{ uri: item.image_url.startsWith('http://') ? item.image_url : "http://" + item.image_url }}></Image>
            <Text numberOfLines={2} style={[{ fontFamily: "Open Sans", fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 20 }, { height: 40, marginRight: 8, marginLeft: 8 }]}>{item.name}</Text>
        </View>
    )
}

const RenderFolder = ({ coursesList, color, folderName, icon }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ height: 132, width: 132, backgroundColor: color, marginTop: 8, marginBottom: 8, marginLeft: 8 }}>
                <ImageBackground source={LocalImage.maskgroup} style={{ width: '100%', height: '100%' }}>
                    <View style={{ padding: 8, flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Image source={icon} style={{ height: 42, width: 42 }}></Image>
                        <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 18, lineHeight: 28 }, { color: 'white' }]}>{folderName}</Text>
                    </View>
                </ImageBackground>
            </View>
            <FlatList style={{ marginLeft: 8 }}
                data={coursesList}
                renderItem={({ item }) => <RenderCourseItem item={item}></RenderCourseItem>}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            ></FlatList>
        </View>
    )
}

export default function ExploreScreen() {
    const [coursesList, setCoursesList] = useState([])
    async function getCoursesList() {
        fetch(`http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Course/listCourse`)
            .then((respone) => respone.json())
            .then((responeJson) => {
                setCoursesList(responeJson.data.courses.data)
            })
            .catch((error) => {
                alert(error)
            })
    }
    useEffect(() => {
        getCoursesList();
    }, [])
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <ImageBackground style={{ height: 64, width: '100%' }} source={require('../media/ImageBackground.png')}>
                <View style={{ height: 40, backgroundColor: 'white', marginTop: 4, marginBottom: 12, marginLeft: 16, marginRight: 16, borderRadius: 22, flexDirection: 'row' }}>
                    <Icon name="search1" color="#005ED3" size={24} style={styles.icon} />
                    <TextInput placeholder='Tìm kiếm' style={{ height: '100%', position: 'absolute', top: 0, bottom: 0, right: 0, left: 48, borderTopRightRadius: 22, borderBottomRightRadius: 22 }}></TextInput>
                </View>
            </ImageBackground>
            <ScrollView style={{ position: 'absolute', top: 64, right: 0, bottom: 0, left: 0 }}>

                <RenderFolder coursesList={coursesList} folderName="Năng lực chung" color='#18B8C2' icon={LocalImage.icon1white} />
                <RenderFolder coursesList={coursesList} folderName="Năng lực chuyên môn" color='#20A85A' icon={LocalImage.icon2white} />
                <RenderFolder coursesList={coursesList} folderName="Năng lực bổ trợ" color='#F29810' icon={LocalImage.icon3white} />
                <RenderFolder coursesList={coursesList} folderName="TCT VNPT Vinaphone" color='#00A3FE' icon={LocalImage.icon4white} />
                <RenderFolder coursesList={coursesList} folderName="Sản phẩm dịch vụ VNPT" color='#0360D4' icon={LocalImage.icon5white} />
                <RenderFolder coursesList={coursesList} folderName="Các nội dung khác" color='#9B51E0' icon={LocalImage.icon6white} />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 8,
        marginLeft: 16,
        marginTop: 8,
        marginBottom: 8
    }
});
