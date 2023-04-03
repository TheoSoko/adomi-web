export type Credentials = {
    id:number,
    token:string
  }

export type UpdateCredentials = (cred:Credentials|null) => void
export type ContextArguments = {
  credentials?: Credentials
  updateCredentials?: (cred: Credentials) => void
}

export type ValueOf<T> = T[keyof T]
