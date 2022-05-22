import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native'

export default props => {
    return (
        <>
            {/* <Button
                type="clear"
                icon={<AntDesign name='plus' size={24} color='white'/>}
            /> */}
            <Pressable>
                <AntDesign name='plus' size={24} color='black'/>
            </Pressable>
            
            <Text>Use List</Text>
        </>
    )
}