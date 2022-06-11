// O objetivo deste UserContext é que 
// possamos acessar a lista de usuários a partir 
// desse arquivo. Dessa forma vamos apagar a lista de 
// usuário de UserList e iremos trabalhar com ela 
// dentro desse arquivo. Então a partir do 
// Context API podemos compartilhar os nossos dados 
// por toda a arvore de componentes 

import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({})

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user]
        }
    },
    updateUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === user.id ? user : u)
        }
    },
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {

    //Aqui eu consigo deletar os elementos por meio do useReducer.
    // Foi criada uma função genérica para que fosse possível 
    // reaproveitar todos os métodos dentro de actions
    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <UsersContext.Provider value={{state, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext


