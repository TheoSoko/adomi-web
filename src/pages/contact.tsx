import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import contact from "../css/Contact.module.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { User } from "../types/types";
import TestCustomer from "../components/userData";


    const ContactPage = ()=>{

        const [formHide, setFormHide] = useState<boolean>();
        const [messValidation, setMessValidation] = useState<string>();
        const [messOk, setMessOk] = useState<boolean>()
        const [email, setEmail] = useState<string>();
        const [messBody, setMessBody] = useState<string>();

        const customer = axios.create({
            baseURL: "http://localhost:8000/customers/8"
        });
        const url = "http://localhost:8000/customers/8"
    
        const [userinfo, getUserInfo] = useState('');

        useEffect(()=>{

            fetchCustomer();
        }, [])
    
        const fetchCustomer = ()=>{
    
            customer.get(url)
            .then((response) => {
                const userData = response.data
                getUserInfo(userData);
            })
            .catch(error => console.log(error))
        }
        
        const showForm = (event:any)=>{

            event.preventDefault();

            setFormHide(!formHide);
            setMessValidation('');
            setEmail('');
            setMessBody('');

        }

        const onChangeEmail = (event:any)=>{

            setMessValidation('')
            setEmail(event.target.value);

        }

        const onChangeMess = (event:any)=>{

            setMessValidation('')
            setMessBody(event.target.value);

        }

        const submitForm = (e:any)=>{

            e.preventDefault();

            if(email && messBody){

                setMessOk(true);

                showForm(e);

                setEmail('');
                setMessBody('');
                
                setMessValidation('Votre message a bien été pris en compte ! (not)')
            }
            else{
                
                setMessOk(false);

                setMessValidation('Veuillez renseigner tous les champs obligatoires !')
            }


        }

        // useEffect(()=>{
        //     fetch("http://localhost:8000/customers").then((response) => response.json()).then((data) => {

        //         // console.log(data);

        //         setCustomers(data);

        //     }).catch((err)=>

        //         console.log(err.message)

        //     )
        // }, []);

    return (
        <div>
            <Navbar/>
            <div className={contact.backgroundHeader}>

                <h2 style={{textAlign: "end"}}>ADoMi à votre service...</h2>

            </div>
        
            <div className={contact.conteneur}>

                <div className={contact.imageContact}>
                </div>

                <div className={contact.conteneurCoordonnees}>
                    
                    <h2 style={{textAlign: "center"}}>Nos coordonnées</h2>

                    <p><a href="#" className={contact.bouttonShowForm}><FontAwesomeIcon icon={faEnvelopeOpenText} onClick={(event)=>showForm(event)}/></a>&nbsp;&nbsp;adomi@greve_sncf.com</p>

                    <small className={(messOk)? contact.validationMess : contact.errMess}>{messValidation}</small>
                   
                    <form className={formHide? contact.formMessage : contact.formMessage2 } onSubmit={(e)=>submitForm(e)}hidden>

                        <label>
                            E-mail :&nbsp;&nbsp;
                        </label> <input type="text" name="email" value={email? email : ''} onChange={(event)=>onChangeEmail(event)}></input>


                        <label>
                            Votre message :&nbsp;&nbsp;
                        </label>
                        <textarea value={messBody} onChange={(event)=>onChangeMess(event)}/>
                        
                        <button>Envoyer</button>

                    </form>

                    <p><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;0102030405</p>
                    <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Adomi, 2 rue de la forêt 78200</p>
                    
                </div>
                
            </div>

            <TestCustomer userinfo={userinfo}/>

        </div>
    )
    }

    export default ContactPage
// }

