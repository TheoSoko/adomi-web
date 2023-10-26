import Navbar from '../components/navbar'
import Footer from '../components/footer';
import {useState, useEffect } from 'react'
import { Credentials, User, ApiErrorResponse } from '../types/types'
import UserData from '../components/userData';
import { fetchUserInfo } from '../api/http'
import AccountStyle from '../css/AccountStyle.module.css'


export default function Account (props: {credentials:Credentials}){
    const [credentials, setCredentials] = useState<Credentials>()
    const [error, setError] = useState<string>()
    const [userinfo, setUserInfo] = useState<User>()

    useEffect(() => {
        fetchUserInfo(props.credentials.id, props.credentials.token,
            (user) => user && setUserInfo(user), 
            (error) => error && setError(error)
        )
    }, [])

    return (
        <div >
            <Navbar/>

            <div className={AccountStyle.container}>
                <h1 className={AccountStyle.title}>Vos informations personnelles: </h1>
                <div className={AccountStyle.conteneurInfos}>
                    {
                        (!userinfo)?  null : <UserData user={userinfo}/>
                    }
                </div>

            </div>
            
            <Footer/>
        </div>
    )
}


const styles = {
    container : {
        textAlign: "center" as const
    },
    conteneurInfos : {
        minHeight: "70.6vh"
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