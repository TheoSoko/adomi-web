import React from 'react';
import HomePageTest from '../pages/homePageTest'
import HomePage from '../pages/homePage'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageTest/>
  },
  {
    path: "home",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "about",
    element: (
      <div></div>
    ),
  },
]);

export default router
