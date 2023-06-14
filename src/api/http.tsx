import axios, {isCancel, AxiosError} from 'axios';
import { User, ApiErrorResponse } from '../types/types'

type Login = {
    username:string, 
    password:string
}

export function serverSignIn(login:Login, callback:(payloadOrErr:{id:number,token:string}|string) => void){
    axios.post('http://localhost:8000/sign-in', login)
        .then((response) => {
            // console.log(response.data);
            callback(response.data);
            window.location.href = "/account";
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

export function signOutTest(){

    try{

        window.localStorage.clear();

        window.location.href = "/sign-in";
    }
    catch(err){
        console.warn(err);
    }

}


export function serverTest(callback:(payload:{}) => void){
    
    axios.get('http://localhost:8000/test')
    .then((response) => {
        console.log(response)
        callback(response)
    })
    .catch((err:AxiosError) => console.log(err))

}

export async function getUserProfile(idUser: number, callback: (user:any)=>void) {
    // console.log("id = "+idUser)
    const data = await axios.get('http://localhost:8000/customers/'+idUser)
    .then((res) => callback(res))
    .catch((err) => {
        console.log(err)
    })

    return data

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

