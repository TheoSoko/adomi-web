
export type ValueOf<T> = T[keyof T]

export type Credentials = {
    id:number,
    token:string
  }

export type UpdateCredentials = (cred:Credentials|null) => void

export type ContextArguments = {
  credentials?: Credentials
  updateCredentials?: (cred: Credentials) => void
}


export type Error = {
  general: string | null
  username: string | null 
  password: string | null 
}
