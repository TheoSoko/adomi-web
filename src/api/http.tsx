import axios, {isCancel, AxiosError} from 'axios';
import { User, ApiErrorResponse } from '../types/types'

type Login = {
    username:string, 
    password:string
}

export function serverSignIn(login:Login, callback:(payloadOrErr:{id:number,token:string}|string) => void){
    axios.post('http://localhost:8000/sign-in', login)
        .then((response) => {
            callback(response.data)
        })
        .catch((err?:AxiosError) => {
            if (err?.response){
                console.log(err)
                let errorData = err?.response?.data as ApiErrorResponse
                callback(errorData.message)
            } else {
                callback('Une erreur de réseau est survenue')
            }
        })
}


export function serverTest(callback:(payload:{}) => void){
    
    axios.get('http://localhost:8000/test')
    .then((response) => {
        console.log(response)
        callback(response)
    })
    .catch((err:AxiosError) => console.log(err))

}



export async function fetchUserInfo (userId:number, onSuccess:(user: User) => void, onError:(err: string) => void) {

    axios.get("http://localhost:8000/users/" + userId)
    .then(response => {
        const userData = response.data
        onSuccess(userData);
    })
    .catch((error) => {
        let data = error?.response?.data as ApiErrorResponse
        onError((data) ? data.message : 'Désolé, une erreur inconnue est servenue')
    })

}

