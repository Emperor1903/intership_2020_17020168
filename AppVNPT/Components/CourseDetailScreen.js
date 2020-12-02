import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, ImageBackground, SafeAreaView, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import LocalImage from './LocalImage'
import renderFlastList from './renderFlastList'
import Icon from 'react-native-vector-icons/Feather'

const resultItems = [
    {
        id: '1',
        text: "Xây dựng năng lực QTRR cà nâng cao văn hóa QT RR qua các hoạt động trao đổi và đào tạo."
    },
    {
        id: '2',
        text: "Thay đổi nhận thức của tất cả CBCNV trong Tập đoàn đóng vai trò quang trọng trong bối cảnh thị trường Viễn thông ngày càng cạnh tranh khốc liệt."
    }, {
        id: '3',
        text: "Để ứng phó với các rủi ro tiềm ẩn có thể xảy ra và đảm bảo mục tiêu phát triển bền vững."
    }
]

const weekItems = [
    {
        id: '1',
        week: '1',
        time: '3',
        videos: '5',
        readings: '4',
        test: '2'
    },
    {
        id: '2',
        week: '2',
        time: '3',
        videos: '5',
        readings: '4',
        test: '2'
    },
    {
        id: '3',
        week: '3',
        time: '3',
        videos: '5',
        readings: '4',
        test: '2'
    },
    {
        id: '4',
        week: '4',
        time: '3',
        videos: '5',
        readings: '4',
        test: '2'
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

const renderResultItem = ({ item }) => {
    return (
        <View style={{ margin: 8, flexDirection: 'row' }}>
            <Ionicons name="checkbox" color="green" size={16} />
            <Text style={[styles.textNorNor1422, { marginLeft: 16 }]}>{item.text}</Text>
        </View>
    )
}

const RenderWeekItem = ({ item }) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => { setIsShow(!isShow) }} style={{ width: '100%', height: 38, borderBottomWidth: 0.5, borderColor: '#CDD7E7', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, lineHeight: 20 }, { color: '#595959' }]}>Tuần {item.week}</Text>
                    <Text style={[styles.textNor6001422, { color: '#000C24', marginLeft: 16 }]}>Tổng quan về khóa học</Text>
                </View>

                <MaterialIcons name={isShow ? "keyboard-arrow-up" : "keyboard-arrow-down"} color="grey" size={16} />
            </TouchableOpacity>

            {
                isShow && <View>
                    <Text style={[styles.textNorNor1422, { marginTop: 4, marginBottom: 4 }]}>1. Giới thiệu tổng quát</Text>
                    <Text style={[styles.textNorNor1422, { marginTop: 4, marginBottom: 4 }]}>2. Bố cục các bước</Text>
                    <Text style={[styles.textNorNor1422, { marginTop: 4, marginBottom: 4 }]}>3. Học thế nào áp dụng hiệu quả</Text>
                    <View style={[{ flexDirection: 'row' }, { marginTop: 4, marginBottom: 4 }, { alignItems: 'center' }]}>
                        <Feather name="clock" color="grey" size={16} />
                        <Text style={{ marginLeft: 8, color: '#595959' }}>3 giờ để hoàn thành</Text>
                    </View>
                    <View style={[{ flexDirection: 'row' }, { marginTop: 4, marginBottom: 4 }, { alignItems: 'center' }]}>
                        <Feather name="book" color="grey" size={16} />
                        <Text style={{ marginLeft: 8, color: '#595959' }}>5 video, 4 bài đọc, 2 bài kiểm tra</Text>
                    </View>
                </View>
            }
        </View>
    )
}

const renderRateItem = (num, rate) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.textNor6001222, { color: '#005ED3', width: 12 }]}>{num}</Text>
            <Ionicons name="star" color="#005ED3" size={12} />
            <View style={{ position: 'absolute', top: 0, right: 36, bottom: 0, left: 32 }}>
                <View style={{ position: 'absolute', bottom: 6, left: 0, width: '100%', height: 8, backgroundColor: '#CDD7E7', borderRadius: 8 }}></View>
                <View style={{ position: 'absolute', bottom: 6, left: 0, width: rate, height: 8, backgroundColor: '#005ED3', borderRadius: 8 }}></View>
            </View>
            <Text style={[styles.textNor6001222, { color: '#75818F', width: 30, position: 'absolute', right: 0, textAlign: 'right' }]}>{rate}</Text>
        </View>
    )
}

const RenderTeacherItem = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: "data:image/jpeg;base64,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" }} style={{ width: 56, height: 56, borderRadius: 56 }}></Image>
            <View style={{ marginLeft: 16 }}>
                <Text style={[styles.textNor6001422, { color: '#000C24' }]}>
                    {item.full_name}
                </Text>
                <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, lineHeight: 20 }, { color: '#75818F' }]}>
                    Giảng viên, diễn giả
                                </Text>
                <Text style={[styles.textNorNor1422, { color: '#000C24', marginTop: 8 }]}>
                    Đại học kinh tế quốc dân
                                </Text>
            </View>
        </View>
    )
}

const cardProp = (name, color, prop) => {
    return (
        <View style={styles.cardProp}>
            <Icon name={name} color={color} size={16} />
            <Text>{prop}</Text>
        </View>
    )
}

export default function CourseDetailScreen({ navigation, route }) {

    const [courseDetail, setCourseDetail] = useState({})
    const [courseTeacher, setCourseTeacher] = useState({})
    const [courseFolder, setCourseFolder] = useState({})
    const [countStudent, setCountStudent] = useState(0)
    const [relatedCourses, setRRelatedCourses] = useState([])
    const [metadata, setMetadata] = useState({})
    useEffect(() => {
        async function getCourseDetail() {
            fetch("http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Course/getCourseDetail?id=" + route.params.id)
                .then((respone) => respone.json())
                .then((responeJson) => {
                    setCourseDetail(responeJson.data.course)
                    setCourseTeacher(responeJson.data.courseTeachers)
                    setCourseFolder(responeJson.data.courseFolder)
                    setCountStudent(responeJson.data.countStudent)
                    setRRelatedCourses(responeJson.data.relatedCoursesWidthNhomChucDanh)
                    setMetadata(responeJson.data.metadata)
                })
                .catch((error) => {
                    alert(error)
                })
        }
        getCourseDetail();
    }, [])

    const RenderCourse = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.push("CourseDetail", { id: item.id })}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image style={styles.cardImage} source={{ uri: item.image_url }} ></Image>
                        <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail' >{item.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View style={styles.flexRow}>
                            {cardProp("book", "black", item.so_chu_de)}
                            {cardProp("star", "#F9AD3D", item.average_rating)}
                        </View>
                        <View style={styles.flexRow}>
                            {cardProp("calendar", "black", item.start_date.substring(0, 10))}
                            {cardProp("flag", "black", item.end_date.substring(0, 10))}

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ position: 'absolute', top: 0, right: 0, bottom: 72, left: 0 }}>
                <ImageBackground source={require('../media/Group2693.png')} style={{ with: '100%', height: 168, paddingTop: 10, paddingRight: 16, paddingBottom: 16, paddingLeft: 16, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" color="white" size={24} />
                    </TouchableOpacity>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 20, lineHeight: 28 }, { color: 'white', width: '100%', height: 52 }]}>{courseDetail.name}</Text>
                    <View style={{ height: 32, width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: 32, height: 32, backgroundColor: '#ffffff', padding: 4 }}>
                            <Image source={LocalImage.icon1} style={{ width: 24, height: 24, backgroundColor: '#ffffff' }}></Image>
                        </View>
                        <Text style={[styles.textNorNor1422, { color: 'white', marginLeft: 8, height: 22, alignSelf: 'flex-end' }]}>{courseFolder.name}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.wrap}>
                    {renderTitle('Thông tin')}
                    {renderInformation("Niềm nở, thân thiện, nhiệt tình tư vấn, giới thiệu khi khách đến, cúi chào, nói lời cảm ơn khi khách rời đi.Hình ảnh người chiến binh xanh VNPT nghiêng mình thực hiện hành động cúi chào với bàn tay đặt trên trái tim, kèm theo nụ cười trên môi đã mang đến nhiều điều bất ngờ thú vị dành cho khách hàng. Trước sự nhiệt tình kèm theo phong cách tiếp xúc khách hàng đầy tính nhân văn của những chiến binh xanh, những ánh mắt đầy thiện cảm từ phía khách hàng đã góp phần thu hẹp khoảng cách và tăng cường mối quan hệ ngày càng khăng khít giữa khách hàng với người VNPT.")}
                    <View>
                        <RenderInformationItem name="today" title="Bắt đầu học: " value={courseDetail.start_date} />
                        <RenderInformationItem name="flag" title="Kết thúc học: " value={courseDetail.end_date} />
                        <RenderInformationItem name="format-list-bulleted" title="Bài học: " value={courseDetail.so_chu_de} />
                        <RenderInformationItem name="person" title="Giảng viên: " value={courseTeacher.full_name} />
                        <RenderInformationItem name="people" title="Số học viên đã học: " value={countStudent} />
                    </View>
                </View>

                <View style={styles.wrap}>
                    {renderTitle('Kết quả đạt được')}
                    <View style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}>
                        {renderFlastList(resultItems, renderResultItem, false, false)}
                    </View>


                </View>

                <View style={styles.wrap}>
                    {renderTitle('Khóa học')}
                    <View style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}>

                        <View>
                            <FlatList
                                data={weekItems}
                                renderItem={({ item }) => <RenderWeekItem item={item}></RenderWeekItem>}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.wrap}>
                    {renderTitle('Đánh giá')}
                    <View style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}>
                        <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#CDD7E7', paddingBottom: 16, height: 128 }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ height: 72, width: 72, backgroundColor: '#005ED3', opacity: 0.9, borderRadius: 10, alignItems: 'center' }}>
                                    <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 38, lineHeight: 46 }, { color: '#ffffff' }]}>{courseDetail.average_rating}</Text>
                                    <Text style={[styles.textNorNor1422, { color: '#ffffff' }]}>(185)</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <Ionicons name="star" color="#005ED3" size={12} />
                                    <Ionicons name="star" color="#005ED3" size={12} />
                                    <Ionicons name="star" color="#005ED3" size={12} />
                                    <Ionicons name="star" color="#005ED3" size={12} />
                                    <Ionicons name="star-half-sharp" color="#005ED3" size={12} />
                                </View>
                            </View>
                            <View style={{ position: 'absolute', top: 0, right: 0, bottom: 16, left: 88, flexDirection: 'column', justifyContent: 'space-between' }}>

                                {renderRateItem(5, '60%')}
                                {renderRateItem(4, '20%')}
                                {renderRateItem(3, '10%')}
                                {renderRateItem(2, '5%')}
                                {renderRateItem(1, '5%')}

                            </View>
                        </View>
                        <View>

                            <View style={{ flexDirection: 'row', marginTop: 8, height: 104 }}>
                                <Image source={require('../media/avatar.jpg')} style={{ width: 32, height: 32, borderRadius: 32 }}></Image>
                                <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 48, borderBottomWidth: 0.5, borderColor: '#CDD7E7' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={[styles.textNor6001422, { color: '#000C24' }]}>Pham Tuan Anh</Text>
                                        <Text style={[styles.textNorNor1422, { color: '#75818F' }]}>21:12 21/12/2012</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }, { color: '#005ED3' }]}>4/5</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#75818F" size={16} />
                                        </View>
                                    </View>
                                    <View><Text style={[styles.textNorNor1422, { color: '#000C24' }]} numberOfLines={2} ellipsizeMode='tail'>Bài giảng rất hay, giảng viên dạy dễ hiểu. Khóa học cung cấp đầy đủ kiến thức vêf nghệ thuật giao tiếp với khách hàng</Text></View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 8, height: 104 }}>
                                <Image source={require('../media/avatar.jpg')} style={{ width: 32, height: 32, borderRadius: 32 }}></Image>
                                <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 48, borderBottomWidth: 0.5, borderColor: '#CDD7E7' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={[styles.textNor6001422, { color: '#000C24' }]}>Pham Tuan Anh</Text>
                                        <Text style={[styles.textNorNor1422, { color: '#75818F' }]}>21:12 21/12/2012</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }, { color: '#005ED3' }]}>4/5</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#005ED3" size={16} />
                                            <Ionicons name="star" color="#75818F" size={16} />
                                        </View>
                                    </View>
                                    <View><Text style={[styles.textNorNor1422, { color: '#000C24' }]} numberOfLines={2} ellipsizeMode='tail'>Bài giảng rất hay, giảng viên dạy dễ hiểu. Khóa học cung cấp đầy đủ kiến thức vêf nghệ thuật giao tiếp với khách hàng</Text></View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.wrap}>
                    {renderTitle('Giảng viên')}
                    <View style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}>

                        <FlatList
                            data={courseTeacher}
                            renderItem={({ item }) => <RenderTeacherItem item={item} ></RenderTeacherItem>}
                            keyExtractor={item => item.id}
                        ></FlatList>

                    </View>
                </View>

                <View>
                    <View style={{ padding: 8, width: '100%' }}>
                        <View style={styles.flexRow}>
                            <Text style={[{ margin: 8, height: 24 }, { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }]}>Khóa học tương tự</Text>
                            <TouchableOpacity onPress={() => { navigation.push("ListCourses") }}><Text style={[{ margin: 8, color: 'blue' }, styles.textNorNor1422]}>Xem tất cả</Text></TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={relatedCourses}
                        renderItem={({ item }) => <RenderCourse item={item}></RenderCourse>}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView >
            <View style={{ width: '100%', height: 72, backgroundColor: '#ffffff', position: 'absolute', right: 0, bottom: 0, left: 0, padding: 16 }}>
                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: '#005ED3', borderRadius: 4, justifyContent: 'space-around' }}>
                    <Text style={[styles.textNor6001422, { color: '#fff', textAlign: 'center' }]}>BẮT ĐẦU HỌC</Text>
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
        lineHeight: 22,
        height: 44
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
