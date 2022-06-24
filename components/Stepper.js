import React, {useState} from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

export default function Stepper({initial = 0}) {
    const [count, setCounter] = useState(initial)

    return (
        <View>
            <Button onPress={() => setCounter(count + 1)}>-</Button>
            {count}
            <Button onPress={() => setCounter(count + 1)}>+</Button>
        </View>
    )

}