import React from 'react';
import logo from '../react/logo.svg'; //Logo react
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';


//Fonction qui retourne plusieurs éléments JSX 
const renderLogos = (pinkBg:boolean):Array<ReactJSXElement> => {
    let jsxArray:Array<ReactJSXElement> = []
    for (let i = 1; i <= 5; i++){
      jsxArray.push(<img 
        src={logo} 
        className={"rotating-logo " + (pinkBg && "App-logo")} //nom de classe conditionnel
        width={65 * i} 
        height={65 * i} 
        style={i == 1 ? {marginBlock: 10} : {marginBlock:-15}}/>)
    }
    return jsxArray
  }


//Composant principal du fichier
export default function HomePage() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"./logo512.png"} className="App-logo" alt="logo" width={270} />
          {
            /* ^ Au dessus, même logo react, mais localisé dans public ^ */
            //ceci est un commentaire dans du JSX
          }
          <p>
            Bonjour, et bienvenue sur le site net interWeb d'ADoMi !
          </p>
          {
            renderLogos(false)
          }
          <p style={{marginInline: 260, fontWeight: "600", paddingBlockEnd: 40, marginBlockStart: 15}}>
            Vous souhaitez surfer sur la toile de notre site? Veuillez patientez quelques temps, 
            que nous mettions en place react-router. A bientôt !
          </p>
          {
            renderLogos(true)
          }
        </header>
      </div>
    );
  }
  