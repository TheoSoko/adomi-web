
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

export type User = {
	id?: number 
  firstName: string	
  lastName: string	
  email: string	
  phone: string	
  street_name: string
  street_number: string	
  post_code: string
  city: string
  role: {
    label: string
  }
  agency: {
    name: string
    adress: string
  }
}

export type Error = {
  general: string | null
  username: string | null 
  password: string | null 
}
