import React from 'react'
import { User, UserProp} from '../types/types';


export default function displayUserInfo(props: {user: User}) {

        const user = props.user;

        const style = {
            listInfo : {
                display : 'flex',
                flexFlow : 'column',
                justifyContent : 'space-around',
                alignItems : 'flex-start',
            }
        }

        if (user) {

            return (
                <ul style={style.listInfo}>

                    <p><b>Nom :</b> {user.first_name}</p>

                    <p><b>Prénom :</b> {user.last_name}</p>

                    <p><b>Nom d'utilisateur :</b> {user.user_name}</p>

                    <p><b>E-mail :</b> {user.email}</p>

                    <p><b>Téléphone :</b> {user.phone}</p>

                    <p><b>Adresse :</b> {user.street_number} {user.street_name}</p>

                    <p><b>Code postal :</b> {user.post_code}</p>
                    
                    <p><b>Ville :</b> {user.city}</p>
                </ul>
            
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


    