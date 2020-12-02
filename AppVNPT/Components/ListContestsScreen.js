import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


const renderlayoutWrap = (name, color, prop) => {
    return (
        <View style={styles.layoutWrap}>
            <Icon name={name} color={color} size={16} />
            <Text style={styles.titledes}>{prop}</Text>
        </View>
    )
}

export default function ListContestsScreen({ navigation }) {
    const [contestsList, setContestsList] = useState([])
    const [params, setParams] = useState({ limit: 5, start: 0 })
    async function getContestsList() {
        fetch(`http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Cuocthi/listCuocthi?limit=${params['limit']}&start=${params['start']}`)
            .then((respone) => respone.json())
            .then((responeJson) => {
                setContestsList(contestsList.concat(responeJson.data.data))
            })
            .catch((error) => {
                alert(error)
            })
    }
    useEffect(() => {
        getContestsList();
    }, [params])

    const RenderContestItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("ContestDetail", { id: item.id })} style={{ backgroundColor: 'white', margin: 8, padding: 4, borderRadius: 4, height: 280 }}>
                <View style={{ borderBottomWidth: 0.5, paddingBottom: 8, marginBottom: 4, borderColor: '#CDD7E7' }}>
                    <Image style={styles.image} source={{ uri: item.image_id }}></Image>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail' >{item.name}</Text>
                </View>
                <View style={styles.layoutRow}>
                    <View style={styles.layoutColumn}>
                        {renderlayoutWrap("book", "black", item.amount)}
                        {renderlayoutWrap("calendar", "black", item.open_time)}
                    </View>
                    <View style={styles.layoutColumn}>
                        {renderlayoutWrap("clock", "black", item.oclock)}
                        {renderlayoutWrap("flag", "black", item.close_time)}
                    </View>
                    <View>
                        <ImageBackground source={require('../media/Vector.png')} style={styles.backgroundStaus} resizeMode='contain'>
                            <Text style={styles.status}>{item.status_cuocthi}</Text>
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', padding: 8 }}>
                <FlatList
                    data={contestsList}
                    renderItem={({ item }) => <RenderContestItem item={item}></RenderContestItem>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
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
        maxWidth: '33%'
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
        // lineHeight: 54,
        alignSelf: 'center',
        textAlign: 'center'
    }
});