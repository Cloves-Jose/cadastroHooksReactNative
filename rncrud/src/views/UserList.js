import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed'
import { Button, Icon } from '@rneui/base'
import UsersContext from '../context/UserContext'

export default props => {

    //A partir daqui eu puxo os dados a partir de Users Context
    //Com o useContext eu consigo disponibilizar os dados da 
    //minha aplicação para todos os componentes.
    //Dessa forma eu não preciso mais importar os dados 
    //diretamente no meu componente.
    const { state, dispatch } = useContext(UsersContext)

    //Essa função recebe um usuário como parâmetro porque eu 
    //preciso excluir os dados daquele usuário
    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    //Função que cria os botões de edição e exclusão 
    function getActions(user) {
        return(
            <>
                <Button 
                    //Neste botão de edição eu navego até a página de formulário 
                    // e pego as informações do meu usuário por meio do atributo
                    //user
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name='edit' size={25} color="orange"/>}
                />
                <Button
                    //No caso de deletar um contato eu quero que o usuário realize uma 
                    //confirmaçõa antes da deleção por isso será chamada a função 
                    // confirmUserDeletion()
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color="red"/>}
                />
            </>
        )
    }

    //Nesta função estou usando o destructuring
    //para capturar o item e uso o componente 
    //ListItem para formatar meus elementos 
    function getUserItem({ item: user }) {
        return (
            <ListItem 
                key={user.id}
                bottomDivider
                //Aqui eu estou fazendo que cada item da lista, quando clicado,
                //me direcione para a página UserForm
                onPress={() => props.navigation.navigate('UserForm', user)}
                //Aqui eu estou chamando a função getActions()
                //onde estarão os botões de exclusão e edição
                >
                <Avatar source={{uri: user.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem>
                    {getActions(user)}
                </ListItem>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                //Eu não chamo a função, apenas passo uma referência
                renderItem={getUserItem}
            />
        </View>
    )
}