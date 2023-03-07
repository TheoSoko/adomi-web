import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Navbar from '../components/navbar'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button'
import {useState, useEffect, useRef} from 'react'

const errorMessages = {
    standard : 'Le nom d\'utilisateur ou le mot de passe est incorrect',
    username: 'Le nom d\'utilisateur est incorrect',
    password: 'Le mot de passe est incorrect'
}

type ValueOf<T> = T[keyof T]
type Error = {
    username?: ValueOf<typeof errorMessages>  // "string" pour les intimes 
    password?: ValueOf<typeof errorMessages>
}



export default function SignIn(){

    const [errorList, setErrorList] = useState<Error>({})
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
 
    const serverSignIn = () => {
        


        //setErrorList({...errorList, username: errorMessages.username})
    }


    return(
        <div style={styles.container}>
            <Navbar/>
            <h1 style={styles.title}>Se connecter</h1>
            <form>
                <div style={styles.formField}>
                    <FormControl error={Boolean(errorList.username)} variant="standard">
                        <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
                        <Input
                            id="username"
                            aria-describedby="component-error-text"
                            onBlur = {(event) => {
                                event.target.value 
                                    ? setErrorList({...errorList, username: errorMessages.username}) 
                                    : setErrorList({}) 
                            }}
                            onChange = {(event) => setUsername(event.target.value)}
                        />
                        <FormHelperText id="component-error-text">{errorList.username}</FormHelperText>
                    </FormControl>
                </div>
                <div style={styles.formField}>
                    <FormControl error={Boolean(errorList.password)} variant="standard">
                        <InputLabel htmlFor="password">Mot de passe</InputLabel>
                        <Input
                            id="password"
                            aria-describedby="component-error-text"
                            onBlur = {(event) => {
                                event.target.value 
                                    ? setErrorList({... errorList, password: errorMessages.password}) 
                                    : setErrorList({}) 
                            }} 
                            onChange = {(event) => setPassword(event.target.value)}
                        />
                        <FormHelperText id="component-error-text">{errorList.password}</FormHelperText>
                    </FormControl>
                </div>
                {
                    (Boolean(username.length) && Boolean(password.length))
                        ?
                        <Button variant="contained" style={styles.button} onClick={() => serverSignIn()}>Connexion</Button>
                        :
                        <p>{null}</p>
                }
            </form>

        </div>
    )
}

const styles = {
    container : {
        textAlign: 'center' as const
    },
    title : {
        marginBlockStart: 40,
        marginBlockEnd: 50
    },
    formField: {
        display:'block',
        marginBlockEnd: 20,
    },
    button: {
        marginBlockStart: 15,
    }
}
