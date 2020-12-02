import React from 'react'
import { ScrollView, Text } from 'react-native'

export default function DetailNoticeScreen({ navigation, route }) {

    return (
        <ScrollView style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
            <Text style={[{ fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 22 }, { color: '#081233', margin: 16 }]}>
                {route.params.detail}
            </Text>
        </ScrollView>
    )
}
