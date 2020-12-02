import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, ImageBackground, SafeAreaView, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LocalImage from './LocalImage'
import renderFlastList from './renderFlastList'

const objectItems = [
    {
        id: '1',
        text: "Mọi học viên trong Elearnning VNPT đều có thể tham dự."
    },
    {
        id: '2',
        text: "Phải hoàn thành 50% khóa học."
    }, {
        id: '3',
        text: "Thành viên ban tổ chức, ban giám khảo không được phép dự thi."
    }
]

const renderTitle = (title) => {
    return (
        <View style={styles.headerTitle}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

const renderInformation = (text) => {
    const [isShowAll, setIsShowAll] = useState(false);
    return (
        <View style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}>
            <Text style={styles.textNorNor1422} numberOfLines={isShowAll ? null : 2} ellipsizeMode='tail'>{text}</Text>
            <TouchableOpacity onPress={() => { setIsShowAll(!isShowAll) }}>
                <Text style={[styles.textNor6001222, { color: '#005ED3' }]}>{isShowAll ? "Ẩn bớt" : "Xem thêm"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const RenderInformationItem = ({ name, title, value }) => {
    return (
        <View style={{ margin: 8, flexDirection: 'row' }}>
            <MaterialIcons name={name} color="grey" size={16} style={{ width: 24, height: 24, padding: 4 }} />
            <Text style={[styles.textNorNor1422, { alignSelf: 'center', marginLeft: 8 }]}>{title}{value}</Text>
        </View>
    )
}

const renderObjectItem = ({ item }) => {
    return (
        <View style={{ margin: 8, flexDirection: 'row' }}>
            <Ionicons name="checkbox" color="green" size={16} />
            <Text style={[styles.textNorNor1422, { marginLeft: 16 }]}>{item.text}</Text>
        </View>
    )
}

export default function ContestDetailScreen({ navigation, route }) {

    const [contestDetail, setContestDetail] = useState({})
    const [relatedContests, setRRelatedContests] = useState([])
    useEffect(() => {
        async function getContestDetail() {
            fetch("http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Cuocthi/detailCuocThi?id=" + route.params.id)
                .then((respone) => respone.json())
                .then((responeJson) => {
                    setContestDetail(responeJson.data.detailCuocThi)
                    setRRelatedContests(responeJson.data.detailCuocThi)
                })
                .catch((error) => {
                    alert(error)
                })
        }
        getContestDetail();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ position: 'absolute', top: 0, right: 0, bottom: 72, left: 0 }}>
                <ImageBackground source={require('../media/Group2693.png')} style={{ with: '100%', height: 168, paddingTop: 10, paddingRight: 16, paddingBottom: 16, paddingLeft: 16, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" color="white" size={24} />
                    </TouchableOpacity>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 20, lineHeight: 28 }, { color: 'white', width: '100%', height: 52 }]}>{contestDetail.name}</Text>
                    <View style={{ height: 32, width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: 32, height: 32, backgroundColor: '#ffffff', padding: 4 }}>
                            <Image source={LocalImage.icon1} style={{ width: 24, height: 24, backgroundColor: '#ffffff' }}></Image>
                        </View>
                        <Text style={[styles.textNorNor1422, { color: 'white', marginLeft: 8, height: 22, alignSelf: 'flex-end' }]}>{contestDetail.folder_id}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.wrap}>
                    {renderTitle('Mô tả cuộc thi')}
                    {renderInformation("Niềm nở, thân thiện, nhiệt tình tư vấn, giới thiệu khi khách đến, cúi chào, nói lời cảm ơn khi khách rời đi.Hình ảnh người chiến binh xanh VNPT nghiêng mình thực hiện hành động cúi chào với bàn tay đặt trên trái tim, kèm theo nụ cười trên môi đã mang đến nhiều điều bất ngờ thú vị dành cho khách hàng. Trước sự nhiệt tình kèm theo phong cách tiếp xúc khách hàng đầy tính nhân văn của những chiến binh xanh, những ánh mắt đầy thiện cảm từ phía khách hàng đã góp phần thu hẹp khoảng cách và tăng cường mối quan hệ ngày càng khăng khít giữa khách hàng với người VNPT.")}
                </View>

                <View style={styles.wrap}>
                    {renderTitle('Đối tượng tham gia')}
                    <View style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}>
                        {renderFlastList(objectItems, renderObjectItem, false, false)}
                    </View>
                </View>

                <View style={styles.wrap}>
                    {renderTitle('Thông tin chi tiết')}

                    <View>
                        <RenderInformationItem name="today" title="Bắt đầu thi: " value={contestDetail.open_time} />
                        <RenderInformationItem name="flag" title="Kết thúc thi: " value={contestDetail.close_time} />
                        <RenderInformationItem name="question-answer" title="Câu hỏi: " value={contestDetail.so_chu_de} />
                        <RenderInformationItem name="access-time" title="Thời gian: " value={contestDetail.limit_time} />
                        <RenderInformationItem name="people" title="Số học viên đã thi: " value={contestDetail.member} />
                    </View>
                </View>
            </ScrollView >
            <View style={{ width: '100%', height: 72, backgroundColor: '#ffffff', position: 'absolute', right: 0, bottom: 0, left: 0, padding: 16 }}>
                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: '#005ED3', borderRadius: 4, justifyContent: 'space-around' }}>
                    <Text style={[styles.textNor6001422, { color: '#fff', textAlign: 'center' }]}>BẮT ĐẦU THI</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F6FF',
        width: '100%',
        height: '100%'
    },
    textNorNor1422: { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 22 }
    ,
    textNor6001222: { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 12, lineHeight: 20 }
    ,
    textNor6001422: { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 14, lineHeight: 22 },
    wrap: {
        width: '100%',
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 8
    },
    headerTitle: {
        margin: 8,
        borderBottomWidth: 0.5,
        borderColor: '#CDD7E7'
    },
    titleText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        height: 24,
        marginBottom: 12
    },
    card: {
        width: 248,
        backgroundColor: 'white',
        margin: 8,
        padding: 4,
        borderRadius: 4,
    },
    cardHeader: {
        borderBottomWidth: 0.5,
        borderColor: '#CDD7E7',
        paddingBottom: 8,
        marginBottom: 4,
    },
    cardImage: {
        height: 110,
        width: 240,
        borderRadius: 4
    },
    cardTitle: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22
    },
    cardProp: {
        margin: 4,
        height: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

