import { useContext } from 'react';
import HomePageTest from '../pages/homePageTest'
import HomePage from '../pages/homePage'
import SignIn from '../pages/signIn'
import Account from '../pages/account'
import Carers from '../pages/carers'
import Contact from '../pages/contact'
import { UserContext } from '../index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerCalendar from '../pages/customerCalendar';

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
            element= {<SignIn updateCredentials={updateCredentials}/>}
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
          path="my-carers"
          element={
            credentials?.id && credentials.token
            ? <Carers credentials={credentials}/>
            : <SignIn updateCredentials={updateCredentials}/>
          }
          />
          <Route
            path="about"
            element= {<div></div>}
          />
          <Route
            path="calendar"
            element= {<CustomerCalendar/>}
          />
          <Route
            path="contact"
            element={<Contact/>}
          />
        </Routes>
      </BrowserRouter>
    )
}
