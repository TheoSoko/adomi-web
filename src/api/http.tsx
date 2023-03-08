import axios, {isCancel, AxiosError} from 'axios';

type Login = {
    username:string, 
    password:string
}

export function serverSignIn(login:Login, callback:(payload:{}) => void){
    
    axios.post('http://localhost:8000/sign-in', login)
        .then((response) => {
            console.log(response)
            callback(response)
        })
        .catch((err:AxiosError) => console.log(err))

}

export function serverTest(callback:(payload:{}) => void){
    
    axios.get('http://localhost:8000/test')
    .then((response) => {
        console.log(response)
        callback(response)
    })
    .catch((err:AxiosError) => console.log(err))
}

