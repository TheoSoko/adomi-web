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

//Regtheman404*

export default function SignIn(props: {updateCredentials?: any}){

    const [errorList, setErrorList] = useState<Error>({general:null, username:null, password:null})
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleConnection = () => {
        serverSignIn({username: username, password: password}, (res) => {
            if (typeof res == 'object'){
                props.updateCredentials(res)
            }
            if (typeof res == 'string'){
                setErrorList({...errorList, general: res})
            }
        })
    }


    return(
        <div style={styles.container}>

            <Navbar/>

                <div style={styles.conteneurInfos}>
                    <h1 style={styles.title}>Se connecter</h1>
                    <form>
                        <div style={styles.formField}>
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
                        <div style={styles.formField}>
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
                            <FormHelperText style={styles.standardError}>{errorList.general}</FormHelperText>
                        </div>
                        {
                            (Boolean(username.length) && Boolean(password.length))
                            ? <Button variant="contained" style={styles.button} onClick={() => handleConnection()}>Connexion</Button>
                            : <p>{null}</p>
                        }
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
    title : {
        marginBlockStart: 40,
        marginBlockEnd: 50
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
    },
    conteneurInfos : {
        minHeight: "70.6vh"
    },

}
