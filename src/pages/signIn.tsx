import Navbar from '../components/navbar';
import Footer from '../components/footer';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button'
import {useState} from 'react'
import inputValidation from '../utils/validation'
import {serverSignIn} from '../api/http'
import { Error } from '../types/types'
import { Credentials } from '../types/types';
import SignInStyle from '../css/SignInStyle.module.css'

export default function SignIn(props: {updateCredentials: ((cred: Credentials) => void) | undefined}){

    const [errorList, setErrorList] = useState<Error>({general:null, username:null, password:null})
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleConnection = () => {
        serverSignIn({username: username, password: password}, (res) => {
            if (typeof res == 'object' && typeof props.updateCredentials != 'undefined'){
                props.updateCredentials(res)
            }
            if (typeof res == 'string'){
                setErrorList({...errorList, general: res})
            }
        })
    }

    return(
        <div className={SignInStyle.container}>

            <Navbar/>
        <div className={SignInStyle.subContainer}>

            <h1 className={SignInStyle.title}>Se connecter</h1>

            <form className={SignInStyle.formContainer}>

                <div className={SignInStyle.formField}>
                    <FormControl error={Boolean(errorList.username)} variant="standard">
                        <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
                        <Input
                            id="username"
                            aria-describedby="component-error-text"
                            onBlur = {(event) => {
                                event.target.value.length == 0
                                ? setErrorList({...errorList, username: null})
                                : inputValidation('username', event.target.value)
                            }}
                            onChange = {(event) => setUsername(event.target.value)}
                        />
                        <FormHelperText id="component-error-text">{errorList.username}</FormHelperText>
                    </FormControl>
                </div>

                <div className={SignInStyle.formField}>
                    <FormControl error={Boolean(errorList.password)} variant="standard">
                        <InputLabel htmlFor="password">Mot de passe</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            aria-describedby="component-error-text"
                            onBlur = {(event) => {
                                event.target.value.length == 0
                                ? setErrorList({...errorList, password: null})
                                : inputValidation('password', event.target.value)
                            }}
                            onChange = {(event) => setPassword(event.target.value)}
                        />
                    </FormControl>
                    <FormHelperText className={SignInStyle.standardError}>{errorList.general}</FormHelperText>
                </div>

                    <Button variant="contained" className={SignInStyle.button} onClick={() => handleConnection()}>Connexion</Button>

            </form>
    </div>
            <Footer/>
            
        </div>
    )
}

const styles = {
    container : {
        textAlign: "center" as const
    },
    subContainer:{
        display:'flex',
        flexDirection: "column" as any,
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",

    },
    title : {
        marginTop:"2rem",
        marginBottom:"2rem",

    },
    formContainer:{
        backgroundColor: "#f5f8fa",
        padding: "50px",
        width: "35%",
        boxShadow:"5px 5px 5px #dedede"

    },
    formField: {
        display:"block",
        marginBlockEnd: 20,
    },
    standardError: {
        fontSize: 15,
        color: "red",
        textAlign: "center" as const,
        marginBlockStart: 25
    },
    button: {
        marginBlockStart: 10,
    }
}
