import React, { useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './react/reportWebVitals';
import Router from './router/router'
import { Credentials, ContextArguments } from './types/types'


export const UserContext = createContext<ContextArguments>({})

const initState = () => {
    let id = localStorage.getItem('id')
    let token = localStorage.getItem('token')
    if (id && token){
        return { 
                 id: parseInt(id), 
                 token: token 
               }
    }
}

/** Point d'entrée de l'application */
function App(){
    //A chaque chargement du composant, 
    //on initialize le state "credentials" avec les élément du localstorage.
    //Ou pas si y'a rien.
    const [credentials, updateCredentials] = useState<Credentials|undefined>(initState())

    //A chaque fois que credentials est updaté :
    useEffect(() => {
        credentials?.id && localStorage.setItem('id', String(credentials.id))
        credentials?.token && localStorage.setItem('token', credentials.token)
    }, [credentials])

    return (
        <UserContext.Provider value={{credentials, updateCredentials}}>
            <Router/>
        </UserContext.Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
