import React from 'react';
import logo from './react/logo.svg'; //Logo react
import './App.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router'


createRoot(document.getElementById('root'))
.render(<RouterProvider router={router} />)

export default function App(){
  return(
    <div id={"root"}></div>
  )
}


