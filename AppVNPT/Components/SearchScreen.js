import React from 'react'
import { SafeAreaView, ScrollView, TextInput, ImageBackground, View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import LocalImage from './LocalImage'

var historyList = [
    {
        id: '1',
        tittle: 'Công nghệ thông tin'
    },
    {
        id: '2',
        tittle: 'Kế toán - Tài chính'
    },
    {
        id: '3',
        tittle: 'Kỹ thuật viên 4.0'
    },
    {
        id: '4',
        tittle: 'Kỹ năng bán hàng, chăm sóc khách hàng'
    }
]

const renderHistoryItem = ({ item }) => {
    return (
        <Text style={styles.historyItem}>{item.tittle}</Text>
    )
}

const renderCategoryItem = (source, title, name) => {
    return (
        <View style={styles.categoryItem}>
            <View style={styles.categoryItemWrap}>
                <Image source={source} style={styles.categoryItemImage}></Image>
                <Text style={styles.categoryItemText}>{title}</Text>
            </View>
            <Icon name={name} color="#005ED3" size={16} style={styles.icon} />
        </View>
    )
}

const renderCategory = () => {
    return (
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            {renderCategoryItem(LocalImage.icon1, "Năng lực chung", "right")}
            {renderCategoryItem(LocalImage.icon2, "Năng lực chuyên môn", "right")}
            {renderCategoryItem(LocalImage.icon3, "Năng lực bổ trợ", "right")}
            {renderCategoryItem(LocalImage.icon4, "TCT VNPT Vinaphone", "right")}
            {renderCategoryItem(LocalImage.icon5, "Sản phẩm dịch vụ VNPT", null)}
            {renderCategoryItem(LocalImage.icon6, "Các nội dung khác", null)}
        </View>
    )
}

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ImageBackground style={{ height: 64, width: '100%' }} source={require('../media/ImageBackground.png')}>
                        <View style={{ height: 40, backgroundColor: 'white', marginTop: 4, marginBottom: 12, marginLeft: 16, marginRight: 16, borderRadius: 22, flexDirection: 'row' }}>
                            <Icon name="search1" color="#005ED3" size={24} style={styles.icon} />
                            <TextInput placeholder='Tìm kiếm' style={{ height: '100%', position: 'absolute', top: 0, bottom: 0, right: 0, left: 48, borderTopRightRadius: 22, borderBottomRightRadius: 22 }}></TextInput>
                        </View>
                    </ImageBackground>
                    <View>
                        <View style={styles.tittleWrap}>
                            <Text style={styles.tittleText}>Lịch sử tìm kiếm</Text>
                            <Icon style={{ lineHeight: 24 }} name="delete" color="grey" size={16} />
                        </View>
                        <View style={styles.historyItemsWrap}>
                            <FlatList
                                data={historyList}
                                renderItem={renderHistoryItem}
                                keyExtractor={item => item.id}
                                numColumns={2}
                            ></FlatList>
                        </View>
                    </View>
                    <View>
                        <View style={styles.tittleWrap}>
                            <Text style={styles.tittleText} >Danh mục</Text>
                        </View>
                        {renderCategory(true)}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', backgroundColor: '#FFFFFF', height: '100%'
    },
    tittleWrap: {
        height: 48,
        width: '100%',
        backgroundColor: '#F3F6FF',
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tittleText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600', fontSize: 16,
        lineHeight: 24
    },
    historyItemsWrap: {
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 8,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12
    },
    historyItem: {
        height: 32,
        margin: 4,
        backgroundColor: '#F3F6FF',
        lineHeight: 32,
        borderRadius: 50,
        paddingLeft: 8,
        paddingRight: 8,
        alignSelf: 'flex-start'
    },
    categoryItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        height: 48,
        justifyContent: 'space-between',
        paddingTop: 16,
        borderColor: '#CDD7E7'
    },
    categoryItemWrap: {
        flexDirection: 'row', height: 24
    },
    categoryItemImage: {
        height: 24,
        width: 24
    },
    categoryItemText: {
        height: 24,
        lineHeight: 24,
        marginLeft: 16
    },
    icon: {
        marginRight: 8,
        marginLeft: 16,
        marginTop: 8,
        marginBottom: 8
    }
});