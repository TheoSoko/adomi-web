import React from 'react';
import { createRoot } from 'react-dom/client';
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
