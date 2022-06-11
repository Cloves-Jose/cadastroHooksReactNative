import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/UserContext'

export default ({route, navigation}) => {

    //Aqui eu estou gerenciando o estado da página
    //Caso props.route.params exista eu vou puxar as 
    //informações relacionadas a ele. Caso não exista 
    //será retornado um objeto vazio.
    //As variáveis de useState serão as respostas de 
    //useState, sendo user a variável que receberá a 
    //resposta (return) e setUser o nome da função.
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            {/* Aqui eu estou vinculando um novo nome de usuário
            ao usuário selecionado. Faço isso por meio do 
            spread de user  */}
            <TextInput
                style={styles.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>Avatar</Text>
            <TextInput 
                style={styles.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do seu avatar"
                value={user.avatarUrl}
            />
            <Button 
                title='Salvar'
                onPress={() => {
                    //Essa função é responsável por voltar a página inicial de listagem
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10
    }
})