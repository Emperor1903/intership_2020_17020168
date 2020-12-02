import React from 'react'
import { View, SafeAreaView, Image, Text } from 'react-native'
import LocalImage from './LocalImage'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const ReenderFilterItem = ({ source, title }) => {
    return (
        <View style={{ height: 48, borderBottomWidth: 0.5, borderColor: '#CDD7E7', justifyContent: 'center' }}>
            <View style={{ width: '100%', height: 24, marginTop: 16, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={source} style={{ height: 24, width: 24, marginRight: 16 }}></Image>
                    <Text style={{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 16, lineHeight: 24 }}>
                        {title}
                    </Text>
                </View>
                <Icon name='arrow-right' size={12} style={{ alignSelf: 'center' }}></Icon>
            </View>
        </View>
    )
}

export default function FilterScreen() {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff', paddingRight: 16, paddingLeft: 16, width: '100%', height: '100%' }}>
            <ReenderFilterItem source={LocalImage.icon1} title="Năng lực chung" />
            <ReenderFilterItem source={LocalImage.icon2} title="Năng lực chuyên môn" />
            <ReenderFilterItem source={LocalImage.icon3} title="Năng lực bổ trợ" />
            <ReenderFilterItem source={LocalImage.icon4} title="TCT VNPT Vinaphone" />
            <ReenderFilterItem source={LocalImage.icon5} title="Sản phẩm dịch vụ VNPT" />
            <ReenderFilterItem source={LocalImage.icon6} title="Các nội dung khác" />
        </SafeAreaView>
    )
}
