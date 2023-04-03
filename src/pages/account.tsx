import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Navbar from '../components/navbar'
import {useState, useEffect, useRef, SetStateAction} from 'react'
import {serverSignIn} from '../api/http'
import { useLocation, useNavigate } from 'react-router-dom';
import { Credentials } from '../types/types'


export default function Account (props: {credentials:Credentials}){
    const navigate = useNavigate()
    const [cred, setCred] = useState<Credentials>()
    
    useEffect(() => {
        setCred(props.credentials)
    })
    
    return (
        <div style={styles.container}>
            <Navbar/>
            <p style={styles.paragraph}>Ceci est votre page personnelle, vous pouvez y consulter vos informations</p>
            <p style={styles.paragraph}>Votre identifiant est : {props.credentials?.id}</p>
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
        marginInline: 260,
        fontSize: 20, 
    },
}
