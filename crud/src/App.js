import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native-elements'
// import {IconButton} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
// import { Pressable, Button, View } from 'react-native';

const Stack = createNativeStackNavigator()

import UserList from '../src/views/UserList'
import UserForm from '../src/views/Userform'


export default props => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: 'Lista de Usuários',
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate('UserForm')}
                                    type='clear'
                                    icon={<AntDesign name='plus' size={24} color='white'/>}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: 'Formulário de Usuários'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

