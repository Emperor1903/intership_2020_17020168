import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import LocalImage from './LocalImage'

const renderlayoutWrap = (name, color, prop) => {
    return (
        <View style={styles.layoutWrap}>
            <Icon name={name} color={color} size={16} />
            <Text style={styles.titledes}>{prop}</Text>
        </View>
    )
}

export default function CoursesScreen({ navigation }) {
    const [params, setParams] = useState({ limit: 5, start: 0 })
    const [coursesList, setCoursesList] = useState([])
    async function getCoursesList() {
        fetch(`http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Course/listCourse?limit=${params['limit']}&start=${params['start']}`)
            .then((respone) => respone.json())
            .then((responeJson) => {
                setCoursesList(coursesList.concat(responeJson.data.courses.data))
            })
            .catch((error) => {
                alert(error)
            })
    }
    useEffect(() => {
        getCoursesList();
    }, [params])

    const RenderCourseItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { id: item.id })} style={{ backgroundColor: 'white', margin: 8, padding: 4, borderRadius: 4, height: 280 }}>
                <View style={{ borderBottomWidth: 0.5, paddingBottom: 8, marginBottom: 4, borderColor: '#CDD7E7' }}>
                    <View style={{ height: 140, width: '100%' }}>
                        <Image style={styles.image} source={{ uri: item.image_url }}></Image>
                        <View style={{ position: 'absolute', top: 16, right: 0, height: 32, backgroundColor: '#F9483D', padding: 4, flexDirection: 'row' }}>
                            <Image source={LocalImage.moneyIcon} style={{ marginRight: 4, marginLeft: 4 }}></Image>
                            <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 24 }, { color: 'white', marginRight: 4, marginLeft: 4 }]}>{item.price_vnd == 0 ? "Miễn phí" : "VNĐ " + item.price_vnd}</Text>
                        </View>
                    </View>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail' >{item.name}</Text>
                </View>
                <View style={styles.layoutRow}>
                    <View style={styles.layoutColumn}>
                        {renderlayoutWrap("book", "#75818F", item.so_chu_de)}
                        {renderlayoutWrap("calendar", "#75818F", item.start_date.substring(0, 10))}
                    </View>
                    <View style={styles.layoutColumn}>
                        {renderlayoutWrap("star", "#F9AD3D", item.average_rating)}
                        {renderlayoutWrap("flag", "#75818F", item.end_date.substring(0, 10))}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{ width: '100%', padding: 8 }}>
                <FlatList
                    data={coursesList}
                    renderItem={({ item }) => <RenderCourseItem item={item}></RenderCourseItem>}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    onEndReached={() => { setParams({ limit: params['limit'], start: params['start'] + params['limit'] }) }}
                    onEndReachedThreshold={0.5}
                ></FlatList>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F6FF',
        width: '100%'
    },
    image: {
        height: 140, width: '100%', borderRadius: 4
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4
    },
    layoutRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    layoutColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '50%'
    },
    layoutWrap: {
        height: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titledes: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 22
    },
    icon: {
        width: 20,
        height: 20
    },
    backgroundStaus: {
        width: 51,
        height: 54
    },
    status: {
        color: 'white',
        lineHeight: 54,
        alignSelf: 'center'
    }
});