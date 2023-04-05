import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Navbar from '../components/navbar'
import {useState, useEffect, useRef, SetStateAction} from 'react'
import {serverSignIn} from '../api/http'
import { useLocation, useNavigate } from 'react-router-dom';



export default function Account (props:{credentials?:{id:number, token:string}}){
    const navigate = useNavigate()
    const location = useLocation()
    const [id, setId] = useState<number>()
    const [userData, setUserData] = useState<string | number[]>()

    useEffect(()=>{
        if (!props.credentials?.id){
            //return navigate('/sign-in')
        }
        setId(props.credentials!.id)

        fetch("http://localhost:8000/customers/" + props.credentials?.id).then(response=> response.json()
        ).then((data:any) => {
        setUserData(data);
        console.log(data);
        }).catch((err)=>console.log(err.message))
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
