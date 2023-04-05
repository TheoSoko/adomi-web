import Navbar from '../components/navbar'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Credentials, User } from '../types/types'
import { fetchCustomer } from '../api/http'
import { JsxElement } from 'typescript';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';




export default function Account (props: {credentials:Credentials}){
    const [cred, setCred] = useState<Credentials>()
    const [user, setUser] = useState<User>()
    const [error, setError] = useState<string>()
    const [first, setFirst] = useState<boolean>(true)

    useEffect(() => {
        return setCred(props.credentials)
    }, [])

    useEffect(() => {
        fetchCustomer(2, (response) => {
            if (typeof response == 'string'){
                console.log('erreur')
                return setError(response)
            } else {
                console.log(response)
                return setUser(response)
            }
        })
    }, [])
    
    const displayUserInfo = (): ReactJSXElement[]|null => {
        if (user){
            let jsxArray = []
            let reactKey = 0
            for (const key in user){
                let value = user[key as keyof typeof user]
                if (typeof value !== 'object'){
                    jsxArray.push(<li style={styles.infoListItem} key={reactKey ++}>
                                    <span style={styles.listProperty}>{key} : </span><span>{value as string}</span>
                                  </li>)
                }
            }
            return jsxArray
        }
        return null
    }

    return (
        <div style={styles.container}>
            <Navbar/>
            <p style={styles.paragraph}>Ceci est votre page personnelle, vous pouvez y consulter vos informations.</p>
            <h1 style={styles.paragraph}>Vos informations personnelles: </h1>
            <ul style={styles.infoList}>
                {
                    displayUserInfo()
                }
            </ul>
        </div>
    )
}


const styles = {
    container : {
        textAlign: "center" as const
    },
    title : {
        marginBlockStart: 60,
        marginBlockEnd: 50,
        fontSize: 37, 
    },
    paragraph : {
        marginBlockStart: 75,
        marginBlockEnd: 50,
        marginInline: 'auto',
        fontSize: 20, 
    },
    infoList: {
        display: 'flex', 
        flexDirection: 'column' as any, 
        justifyContent: 'left', 
        margin:'auto'
    },
    infoListItem: {
        listStyleType: 'none', 
        marginBlock: 2.5,
        fontSize: 19,
    },
    listProperty: {
        fontWeight: '600', 
        paddingRight: 5
    },
    listValue: {
    }
}
