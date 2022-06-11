import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Icon } from '@rneui/base'

import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { UsersProvider } from './context/UserContext'


//A partir da chamada dessa função eu consigo realizar a navegação
const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
            {/* //Dentro do NavigationContainer eu consigo definir o tipo de navegação */}
            <NavigationContainer>
                <Stack.Navigator
                    //Aqui eu defino a minha rota inicial. Então a partir da lista 
                    //eu consigo usar minha forma de navegação do tipo Stack (pilha)
                    initialRouteName='UserList'
                    //Aqui eu posso definir toda a parte de stilo da barra superior
                    screenOptions={screenOptions}
                >
                    {/* Essa será minha primeira tela  */}
                    <Stack.Screen 
                        name='UserList'
                        component={UserList}
                        // Dentro de options eu coloca uma função para 
                        // carregar assim que options for acionada.
                        // Estou fazendo isso por meio de um destructuring
                        // para acessar o navigation
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de Usuários',
                                //Aqui estou criando um botão com um ícode para a navegação entre as 
                                //telas 
                                headerRight: () => (
                                    <Button
                                        // Aqui estou fazendo a navegação entre as telas por meio 
                                        // do elemento onPress. A navegação é feita por meio do acesso
                                        // a função navigate em navigation.navigate('UserForm')
                                        onPress={() => navigation.navigate('UserForm')}
                                        type='clear'
                                        icon={<Icon name='add' size={24} color='white'/>}
                                    />
                                )
                            }
                        }}
                    />
                    {/* Essa será minha segunda tela */}
                    <Stack.Screen
                        name='UserForm'
                        component={UserForm}
                        options={{
                            title: 'Formulário de usuários'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
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

