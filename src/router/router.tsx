import { useState, useEffect, useContext } from 'react';
import HomePageTest from '../pages/homePageTest'
import HomePage from '../pages/homePage'
import SignIn from '../pages/signIn'
import Account from '../pages/account'
import { UserContext } from '../App'
import { Credentials, ContextArguments } from '../types/types'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/*
function ClientRoot (){
  return (
      <UserContext.Consumer>
        {
          ({credentials, updateCredentials}) =>  {
            let cred = credentials as Credentials
            return (
              cred.id && cred.token
              ? <Account credentials={cred} />
              : <SignIn updateCredentials={updateCredentials}/>   
            )
        }
        }
      </UserContext.Consumer>
    )
}
*/

    

export default function Router (){
  const { credentials, updateCredentials } = useContext(UserContext);
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="rigolo" 
            element= {<HomePageTest/>}
          />
          <Route
            path="/"
            element= {<HomePage/>}
          />
          <Route
            path="sign-in"
            element= {<SignIn/>}
          />
          <Route
            path="account"
            element= {
                      credentials?.id && credentials.token
                      ? <Account credentials={credentials}/>
                      : <SignIn updateCredentials={updateCredentials}/>
                    }
          />
          <Route
            path="about"
            element= {<div></div>}
          />
        </Routes>
      </BrowserRouter>
    )
}


/*
export default function Router (){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element= {<HomePage/>}>
            <Route path="rigolo" element= {<HomePageTest/>}/>
              <Route
                path="sign-in"
                element= {<SignIn/>}
              />
              <Route
                path="account"
                element= {<Account/>}
              />
              <Route
                path="about"
                element= {<div></div>}
              />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
*/