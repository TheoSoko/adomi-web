import React, { useState, useEffect, createContext } from 'react';
import Router from './router/router'
import { Credentials, ContextArguments } from './types/types'


export const UserContext = createContext<ContextArguments>({})

const initState = () => {
    let id = sessionStorage.getItem('id')
    let token = sessionStorage.getItem('token')
    if (id && token){
        return { 
                 id: parseInt(id), 
                 token: token 
               }
    }
}

export default function App(){

    //A chaque chargement du composant, 
    //on initialize le state "credentials" avec les élément du localstorage.
    //Ou pas si y'a rien.
    const [credentials, updateCredentials] = useState<Credentials|undefined>(initState())

    //A chaque fois que credentials est updaté :
    useEffect(() => {
        credentials?.id && sessionStorage.setItem('id', String(credentials.id))
        credentials?.token && sessionStorage.setItem('token', credentials.token)
    }, [credentials])

    return (
        <React.StrictMode>
            <UserContext.Provider value={{credentials, updateCredentials}}>
                <Router/>
            </UserContext.Provider>
        </React.StrictMode>
    )

  }
