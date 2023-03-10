import { useState, useEffect } from 'react';
import HomePageTest from '../pages/homePageTest'
import HomePage from '../pages/homePage'
import SignIn from '../pages/signIn'
import Account from '../pages/account'

import { createBrowserRouter, Route, Link } from 'react-router-dom';

type Credentials = {
  id:number,
  token:string
}

function ClientRoot (props?:{credentials?: Credentials }){
  const [credentials, setCredentials] = useState<Credentials>()

  useEffect(()=>{
    if (props?.credentials){
      setCredentials(props?.credentials)
    }
  })

  if (credentials){
    return <Account credentials={credentials}/>
  }
  return <SignIn clientNav={(cred:Credentials) => cred && setCredentials(cred)}/>
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageTest/>
  },
  {
    path: "home",
    element: <HomePage/>
  },
  {
    path: 'client',
    element: <ClientRoot/>,
    children: [
      {
        path: "sign-in",
        element: <SignIn/>
      },
      {
        path: "account",
        element: <Account/>,
      },
    ],
  },
  {
    path: "about",
    element: <div></div>,
  },
])

export default router
