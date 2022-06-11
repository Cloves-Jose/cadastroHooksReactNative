// O objetivo deste UserContext é que 
// possamos acessar a lista de usuários a partir 
// desse arquivo. Dessa forma vamos apagar a lista de 
// usuário de UserList e iremos trabalhar com ela 
// dentro desse arquivo. Então a partir do 
// Context API podemos compartilhar os nossos dados 
// por toda a arvore de componentes 

import React, { createContext } from 'react'
import users from '../data/users'

const UsersContext = createContext({})

export const UsersProvider = props => {
    return(
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext


