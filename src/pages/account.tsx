import Navbar from '../components/navbar'
import Footer from '../components/footer';
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Credentials, User } from '../types/types'
import axios from 'axios';
import { JsxElement } from 'typescript';
import UserData from '../components/userData';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import AccountStyle from '../css/AccountStyle.module.css'


export default function Account (props: {credentials:Credentials}){
    const [cred, setCred] = useState<Credentials>()
    const [user, setUser] = useState<User>()
    const [error, setError] = useState<string>()
    const [first, setFirst] = useState<boolean>(true)

    useEffect(() => {
        return setCred(props.credentials)
    }, [])

    const url = "http://localhost:8000/users/" + props.credentials.id

    const [userinfo, setUserInfo] = useState<User>();

    useEffect(()=>{

        fetchUserInfo();
    }, [])

    const fetchUserInfo = ()=>{

        axios.get(url)
        .then((response) => {
            console.log(response)
            const userData = response.data
            setUserInfo(userData);
        })
        .catch(error => console.log(error))
    }

    return (
        <div >
            <Navbar/>

            <div className={AccountStyle.container}>
                <h1 className={AccountStyle.title}>Vos informations personnelles: </h1>
                <div className={AccountStyle.conteneurInfos}>
                    {
                        (!userinfo)?  null : <UserData {...userinfo}/>

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
