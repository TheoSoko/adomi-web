import React from 'react'

export default function displayUserInfo(props:any) {

        const user = props.userinfo;

        const style = {
            conteneurInfos : {
                backgroundColor : '#ebebeb',
                width: '45%',
                display : 'flex',
                flexFlow : 'column',
                justifyContent : 'space-around',
                alignItems : 'center',
                margin: "0px auto 20px auto"
            }
        }

        if(user){
            console.log(user)

            return (
                <div style={style.conteneurInfos}>

                    <p><b>Nom :</b> {user.firstName}</p>

                    <p><b>Prénom :</b> {user.lastName}</p>

                    <p><b>Nom d'utilisateur :</b> {user.userName}</p>

                    <p><b>E-mail :</b> {user.email}</p>

                    <p><b>Téléphone :</b> {user.phone}</p>

                    <p><b>Adresse :</b> {user.street_number} {user.street_name}</p>

                    <p><b>Code postal :</b> {user.post_code}</p>
                    
                    <p><b>Ville :</b> {user.city}</p>
                </div>
            
            )
        }
        else{
            console.log('nothing');
            return(
                <div>
                    <p>Aucune information disponible pour le moment</p>
                </div>
            )
        }

}


    