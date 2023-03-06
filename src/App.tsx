import React from 'react';
import logo from './logo.svg';
import './App.css';

const renderLogos = () => {
  let jsxArray:any[] = []
  for (let i = 0; i < 3; i++){
    jsxArray.push(<img src="/logo192.png" />)
  }
  return jsxArray
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bonjour, et bienvenue sur le site net interweb d'A Do Mi!
        </p>
        {
          renderLogos()
        }
      </header>
    </div>
  );
}
