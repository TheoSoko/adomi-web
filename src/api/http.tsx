import axios, {isCancel, AxiosError} from 'axios';

type Login = {
    username:string, 
    password:string
}
type responseData = {
    error: string
    message: string
    statusCode: number
}

export function serverSignIn(login:Login, callback:(payloadOrErr:{id:number,token:string}|string) => void){
    
    axios.post('http://localhost:8000/sign-in', login)
        .then((response) => {
            callback(response.data)
        })
        .catch((err?:AxiosError) => {
            if (err?.response){
                console.log(err)
                let errorData = err?.response?.data as responseData
                callback(errorData.message)
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

