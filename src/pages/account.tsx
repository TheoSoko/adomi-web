import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Navbar from '../components/navbar'
import {useState, useEffect, useRef, SetStateAction} from 'react'
import {serverSignIn} from '../api/http'
import { useLocation, useNavigate } from 'react-router-dom';



export default function Account (props:{id?:number, token?:string}){
    const navigate = useNavigate()
    const location = useLocation()
    const [id, setId] = useState<number>()

    useEffect(()=>{
        if (!location?.state?.id){
            return navigate('/sign-in')
        }
        setId(location.state.id)
    }, [])

    return (
        <div style={styles.container}>
            <Navbar/>
            <p style={styles.paragraph}>Ceci est votre page personnelle, vous pouvez y consulter vos informations</p>
            <p style={styles.paragraph}>Votre identifiant est : {id}</p>

        </div>
    )
}


const styles = {
    container : {
        textAlign: 'center' as const
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
