import React, {useContext, useState} from 'react'
import { useFormik  } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { FirebaseContext } from '../../firebase';
import ContactForm from './ContactForm';
import DateForm from './DateForm';

const Contact = ({lenguage}) => {
    const [contact, setContact] = useState(true)
    

    return(
        <section class="contact section-padding">
        <div class="container">
            <div class="row mb-90">
                <div className='col-md-12  mb-5'>
                    <div className='flex justify-center '>
                        <div className='rounded-lg overflow-hidden text-xl'>
                            <button onClick={() => setContact(true)} className={` p-2 ${contact? 'bg-naranja text-white' : ''}`}>{lenguage == 'EN' ? 'Message' : 'Mensaje'}</button>
                            <button onClick={() => setContact(false)} className={` p-2 ${!contact? 'bg-naranja text-white' : ''}`}>{lenguage == 'EN' ? 'Date' : 'Cita'}</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mb-60 ">
                    <h5 id="containerTitle">
                        {
                            lenguage == 'EN'?
                            'Contact Information'
                            :
                            'Información de contacto'
                        }
                    </h5>
                    <p class="mb-30" id="containerDescription">
                        {
                            lenguage == 'EN'?
                            'Contact us and ask any question or clarification.'
                            :
                            'Contactanos y realiza cualquier pregunta o aclaración.'
                        }
                    </p>
                    <div class="contact-link">
                        <div class="contact-link-icon"><span class="norc-phone"></span></div>
                        <div class="contact-link-content">
                            <div class="contact-link-title" id="callUsContainer">
                                {
                                    lenguage == 'EN'?
                                    'Call us'
                                    :
                                    'Llámanos'
                                }
                            </div>
                            <div class="contact-link-text" id="phoneContainer">+1 (970) 470-9245</div>
                        </div>
                    </div>
                    <div class="contact-link">
                        <div class="contact-link-icon"><span class="norc-mail"></span></div>
                        <div class="contact-link-content">
                            <div class="contact-link-title" id="emailContainer">
                                {
                                    lenguage == 'EN'?
                                    'Send us an email'
                                    :
                                    'Escríbenos'
                                }
                            </div>
                            <div class="contact-link-text" id="contEmailContainer">carloscalzadillas22@gmail.com</div>
                        </div>
                    </div>
                    <div class="contact-link">
                        <div class="contact-link-icon"><span class="norc-square-pin"></span></div>
                        <div class="contact-link-content">
                            <div class="contact-link-title" id="address">
                                {
                                    lenguage == 'EN'?
                                    'Visit our office'
                                    :
                                    'Dirección'
                                }
                            </div>
                            <div class="contact-link-text" id="conAddressContainer">04 Edwards, CO 81632 US</div>
                        </div>
                    </div>
                </div>
                {
                    contact ?
                    (<ContactForm lenguage={lenguage}/>)
                    :
                    (<DateForm lenguage={lenguage}/>)
                }
            </div>
            
        </div>
    </section>
    )
}

export default Contact