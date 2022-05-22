import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements'

import users from '../data/users'


export default props => {

    function getUserItem({item: user}) {
        return (
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subTitle={user.email}
                bottomDivider
            />
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}