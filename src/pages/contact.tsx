import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import contact from "../css/Contact.module.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faMap, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { User } from "../types/types";
import TestCustomer from "../components/userData";


    const ContactPage = ()=>{

        const [messValidation, setMessValidation] = useState<string>();
        const [messOk, setMessOk] = useState<boolean>();

        const [nom, setNom] = useState<string>();
        const [errNom, setErrNom] = useState<boolean>(false);

        const [prenom, setPrenom] = useState<string>();
        const [errPrenom, setErrPrenom] = useState<boolean>(false);

        const [email, setEmail] = useState<string>();
        const [errEmail, setErremail] = useState<boolean>(false);

        const [messBody, setMessBody] = useState<string>();
        const [errMessBody, setErrMessBody] = useState<boolean>(false);

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

        const onChangeNom = (event:any) =>{

            setMessValidation('');
            setNom(event.target.value);
        }

        const nomCheck = (event:any)=>{

            if(!nom){

                setErrNom(true);
                setMessOk(false);

            }
            else{

                setErrNom(false);
                setMessOk(true);
            }

        }


        const onChangePrenom = (event:any) =>{

            setMessValidation('');
            setPrenom(event.target.value);
        }

        const prenomCheck = (event:any)=>{

            if(!prenom){

                setErrPrenom(true);
                setMessOk(false);

            }
            else{

                setErrPrenom(false);
                setMessOk(true);
            }

        }

        const onChangeEmail = (event:any)=>{

            setMessValidation('')
            setEmail(event.target.value);

        }

        const emailCheck = (event:any)=>{

            if(email){

                if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){

                    setErremail(false);
                    setMessOk(true);
                }
                else{

                    setErremail(true);
                    setMessOk(false);
                }
            }
            else{
                setErremail(true);
                setMessOk(false);
            }
        }

        const onChangeMess = (event:any)=>{

            setMessValidation('')
            setMessBody(event.target.value);

        }

        const messBodyCheck = (event:any)=>{

            if(!messBody){
                
                setErrMessBody(true);
                setMessOk(false);
            }
            else{

                setErrMessBody(false);
                setMessOk(true);
            }
        }

        const submitForm = (e:any)=>{

            // console.log("validation form")

            e.preventDefault();

            nomCheck(e);

            prenomCheck(e);

            emailCheck(e);

            messBodyCheck(e);

            if(messOk){
                
                setMessValidation('Votre message a bien été pris en compte ! (not)')
            }
            else{

                setMessValidation("Votre message n'a pas été soumis !");
            }

        }

    return (
        <div>
            <Navbar/>
            <div className={contact.backgroundHeader}>

                {/* <h2 className={contact.headerTitle}>Contact</h2> */}

            </div>                
            

        
            <div className={contact.conteneur}>

            <div className={contact.title}>
                    
                <h2>Une question ? Contactez-nous :)</h2>
                <p>Vous pouvez contacter Adomi à l'aide du formulaire de contact, par téléphone ou par voie postale.</p>
            </div>

                <div className={contact.subConteneur1}> 

                    
                   
                    <form className={contact.formMessage } onSubmit={(e)=>submitForm(e)}>

                        <div>
                            <label htmlFor="nom">
                                Nom :
                            </label>
                            <input type="text" name="nom" id="nom" className={errNom? contact.errInput : ""} maxLength={30} onChange={(event)=>onChangeNom(event)}></input>
                            <small className={errNom? contact.errMessInput : contact.errMessOff}>Veuillez entrer un nom valide !</small>
                        </div>

                        <div>
                            <label>
                                Prénom :
                            </label>
                            <input type="text" name="nom" maxLength={30} onChange={(event)=>onChangePrenom(event)}></input>
                            <small className={errPrenom? contact.errMessInput : contact.errMessOff}>Veuillez entrer un prénom valide !</small>
                            
                        </div>
                        
                        <div>
                            <label>
                                E-mail :&nbsp;&nbsp;
                            </label> 
                            <input type="email" name="email" value={email? email : ''} onChange={(event)=>onChangeEmail(event)} ></input>
                            <small className={errEmail? contact.errMessInput : contact.errMessOff}>Veuillez entrer un email valide !</small>
                        </div>

                        <div>
                            <label>
                                Objet :
                            </label>
                            <input type="text" name="nom" maxLength={100}></input>
                        </div>

                        <div className={contact.messText}>
                            <label>
                                Votre message :&nbsp;&nbsp;
                            </label>
                            <textarea value={messBody} onChange={(event)=>onChangeMess(event)} maxLength={400}/>
                            <small className={errMessBody? contact.errMessInput : contact.errMessOff}>Veuillez entrer un corps de message !</small>
                        </div>
                        
                        <div>

                            <button onClick={(e)=>submitForm(e)}>Envoyer</button>
                            <small className={(messOk)? contact.validationMess : contact.errMess}>{messValidation}</small>

                            

                        </div>

                    </form>
                    
                </div>

                <div className={contact.subConteneur2}>

                    <div>
                        <p><FontAwesomeIcon icon={ faPhone}/>&nbsp;&nbsp;&nbsp;Standard téléphonique : 01.02.03.04.05</p>
                    </div>

                    <div>
                        <p><FontAwesomeIcon icon={ faMap}/>&nbsp;&nbsp;&nbsp;Adresse : 4 rue des alternants 78200 Mantes-la-ville</p>
                    </div>

                    <div>
                        <p><FontAwesomeIcon icon={ faEnvelopeOpenText}/>&nbsp;&nbsp;&nbsp;Email : adomi@versailles.com</p>
                    </div>

                </div>
                
            </div>

            <Footer/>
        </div>
    )
    }

    export default ContactPage
// }

