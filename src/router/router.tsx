import React from 'react';
import HomePageTest from '../pages/homePageTest'
import HomePage from '../pages/homePage'
import SignIn from '../pages/signIn'
import Account from '../pages/account'

import { createBrowserRouter, Route, Link } from 'react-router-dom';


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
    path: "sign-in",
    element: <SignIn/>
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "about",
    element: <div></div>,
  },
])

export default router
