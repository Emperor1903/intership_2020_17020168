import React from 'react'
import { FlatList } from 'react-native'

export default function renderFlastList(data, renderItem, horizontal, showsHorizontalScrollIndicator) {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={horizontal}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        ></FlatList>
    )
}
