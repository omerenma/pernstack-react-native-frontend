import React, {useState} from 'react'
import { View, Text, FlatList } from 'react-native'

export const List = () => {
    const [todo, setTodos] =useState([
        {text:'buy coffee', key:'1'},
        {text:'go to school', key:'2'},
        {text:'play the painoe', key:'3'},
    ])
  return (
    <View>
        <FlatList 
        data={todo}
        renderItem={({item}) => (
            <Text>{item.text}</Text>
        )}
         />
    </View>
  )
}
