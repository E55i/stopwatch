import { Button, View } from 'react-native';
import React, { useState } from 'react';

export default function Toggle() {
    const [isOn, setIsOn] = useState(false)
    return(
        <View>
            <Button title={ isOn ? 'Reset' : 'Start'} onPress={() =>setIsOn(!isOn)} />
        </View>
    )

}