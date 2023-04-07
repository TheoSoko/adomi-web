import Navbar from '../components/navbar'
import {useState, useEffect } from 'react'
import { Credentials, User, ApiErrorResponse } from '../types/types'
import UserData from '../components/userData';
import { fetchUserInfo } from '../api/http'


export default function Account (props: {credentials:Credentials}){
    const [credentials, setCredentials] = useState<Credentials>()
    const [error, setError] = useState<string>()
    const [userinfo, setUserInfo] = useState<User>();


    useEffect(() => {
        fetchUserInfo(props.credentials.id, 
            (user) => user && setUserInfo(user), 
            (error) => error && setError(error)
        )
    }, [])



    return (
        <div style={styles.container}>
            <Navbar/>
            <h1 style={styles.h1}>Ceci est votre page personnelle, vous pouvez y consulter vos informations.</h1>
            {
                error ? <p style={styles.error}>{error} </p>
                :
                    <div>
                        <h2 style={styles.h2}>Vos informations personnelles: </h2>
                        <ul style={styles.infoList}>
                            {
                                userinfo ? <UserData userinfo={userinfo}/> : null
                            }
                        </ul>

                    </div>
            }
        </div>
    )
}


const styles = {
    container : {
        textAlign: "center" as const
    },
    h1 : {
        marginBlockStart: 75,
        marginBlockEnd: 50,
        marginInline: 'auto',
        fontSize: 27, 
    },
    h2 : {
        marginBlockStart: 58,
        marginBlockEnd: 54,
        fontSize: 22, 
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
    error: {
        marginBlockStart: 80,
        color: 'red',
        fontWeight: '600',
        fontSize: 19,
    }
}
