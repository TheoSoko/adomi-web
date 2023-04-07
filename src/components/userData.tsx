import React from 'react'
import { User, UserProp} from '../types/types';


export default function displayUserInfo(props:UserProp) {

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

            return (
                <div style={style.conteneurInfos}>

                    <p><b>Nom :</b> {user.first_name}</p>

                    <p><b>Prénom :</b> {user.last_name}</p>

                    <p><b>Nom d'utilisateur :</b> {user.user_name}</p>

                    <p><b>E-mail :</b> {user.email}</p>

                    <p><b>Téléphone :</b> {user.phone}</p>

                    <p><b>Adresse :</b> {user.street_number} {user.street_name}</p>

                    <p><b>Code postal :</b> {user.post_code}</p>
                    
                    <p><b>Ville :</b> {user.city}</p>
                </div>
            
            )
        }
        else{
            return(
                <div>
                    <p>Aucune information disponible pour le moment</p>
                </div>
            )
        }

}


    