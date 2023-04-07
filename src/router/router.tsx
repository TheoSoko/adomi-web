import { useContext } from 'react';
import HomePageTest from '../pages/homePageTest'
import HomePage from '../pages/homePage'
import SignIn from '../pages/signIn'
import Account from '../pages/account'
import Contact from '../pages/contact'
import { UserContext } from '../index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
    

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

          <Route
            path="contact"
            element={<Contact/>}
          />
        </Routes>
      </BrowserRouter>
    )
}
