import axios, {isCancel, AxiosError} from 'axios';

type Login = {
    username:string, 
    password:string
}

export function serverSignIn(login:Login, callback:(payloadOrErr:{id:number,token:string}|string) => void){
    
    axios.post('http://localhost:8000/sign-in', login)
        .then((response) => {
            //console.log(response)
            callback(response.data)
        })
        .catch((err:AxiosError) => {
            if (err.message == 'Request failed with status code 401'){
                callback('401')
            }
            if (err.message == 'Request failed with status code 503'){
                callback('503')
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

