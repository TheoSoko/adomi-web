import axios, {isCancel, AxiosError} from 'axios';
import { User, ApiErrorResponse } from '../types/types'
import { error } from 'console';

const API_LOCAL_ = "http://localhost:8000"
const API_SERVER = "https://adomi-api.onrender.com"

type Login = {
    username:string, 
    password:string
}

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;


export function serverSignIn(login:Login, callback:(payloadOrErr:{id:number,token:string}|string) => void){
    axios.post(`${API_SERVER}/sign-in`, login)
        .then((response) => {
            callback(response.data)
        })
        .catch((err?:AxiosError) => {
            if (err?.response){
                console.log(err)
                let errorData = err?.response?.data as ApiErrorResponse
                callback(errorData.message)
            } else {
                console.log(err)
                callback('Une erreur de réseau est survenue')
            }
        })
}


export function serverTest(callback:(payload:{}) => void){
    
    axios.get(`${API_SERVER}/test`)
    .then((response) => {
        console.log(response)
        callback(response)
    })
    .catch((err:AxiosError) => console.log(err))

}

export async function getUserProfile(idUser: number, callback: (user:any)=>void) {
    // console.log("id = "+idUser)
    const data = await axios.get(`${API_SERVER}/customers/`+idUser)
    .then((res) => callback(res))
    .catch((err) => {
        console.log(err)
    })

    return data

}



export async function fetchUserInfo (userId:number, token: string, onSuccess:(user: User) => void, onError:(err: string) => void) {
    console.log("TOKEN IS ", token + '\n')
    // Update: On utilise le token passé par paramètre, pasquee cette fonction est
    // appelée juste après le login, et que le localStorage met du temps à s'updater.

    axios.get(`${API_SERVER}/users/` + userId, {
        headers: {'Authorization': `Bearer ${token}`} 
    })
    .then(response => {
        const userData = response.data
        onSuccess(userData);
    })
    .catch((error) => {
        let data = error?.response?.data as ApiErrorResponse
        onError((data) ? data.message : 'Désolé, une erreur inconnue est servenue')
    })

}

