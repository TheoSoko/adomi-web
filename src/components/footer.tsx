import React from 'react'

function Footer() {

    const style = {
        conteneurFooter : {
            backgroundColor: "#1976D2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        },

        textFooter : {
            color: "white",
            fontSize: "1.3rem"
        }
    }
  return (
    <div style={style.conteneurFooter}>
        <p style={style.textFooter}>&copy;A Do Mi - 2023 - Tous droits réservés</p>
      
    </div>
  )
}

export default Footer
