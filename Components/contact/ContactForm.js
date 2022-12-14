import React, {useContext} from 'react'
import { useFormik  } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { FirebaseContext } from '../../firebase';

const ContactForm = ({lenguage}) => {
    const {firebase} = useContext(FirebaseContext);
    const formikContact = useFormik({
        initialValues: {
            name: '',
            email: '',
            numero: '',
            sujeto: '',
            mensaje: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required(`${lenguage == 'EN' ? 'Name is required' : 'El nombre es obligariorio'}`),
            email: Yup.string().email(`${lenguage == 'EN' ? 'We need an email' : 'Introduce un email'}`).required(`${lenguage == 'EN' ? 'Email is required' : 'El email es requerido'}`),
            numero: Yup.string().required(`${lenguage == 'EN' ? 'Number is required' : 'El numero es requerido'}`),
            sujeto: Yup.string().required(`${lenguage == 'EN' ? 'Subject is required' : 'El sujeto es obligatorio'}`),
            mensaje: Yup.string().required(`${lenguage == 'EN' ? 'Message is required' : 'El mensaje es requerido'}`)
        }),
        onSubmit: async valores => {
            console.log(valores);
            await firebase.firestore.collection('calls').add({nombre: valores.name,email: valores.email,numero: valores.numero,sujeto: valores.sujeto,mensaje: valores.mensaje, tipo:'Contact'});
            Swal.fire({
                icon: 'success',
                title: 'Creado',
                text: 'Nota enviada correctamente'
            });
        }
    })
    return(
        <div class="col-md-5 offset-md-2">
            <div class="form-wrap">
                <div class="form-box">
                    <h5 id="titlecontact">{lenguage == 'EN' ? 'Get in touch' : 'Escribenos'}</h5>
                    <form onSubmit={formikContact.handleSubmit} class="contact__form">
                        <div class="row">
                            <div class="col-12">
                                <div class="alert alert-success contact__msg" style={{display: "none"}} role="alert"> Your message was sent successfully. </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <input id="name" name="name" type="text" placeholder={lenguage == 'EN' ? "Your Name *" : 'Nombre *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.name}/>
                                {formikContact.touched.name && formikContact.errors.name ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.name}</span>
                                ): null}
                            </div>
                            <div class="col-md-6 form-group">
                                <input id="email" name="email" type="email" placeholder={lenguage == 'EN' ? "Your Email *"  : 'Email *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.email}/>
                                {formikContact.touched.email && formikContact.errors.email ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.email}</span>
                                ): null}
                            </div>
                            <div class="col-md-6 form-group">
                                <input id="numero" name="numero" type="text" placeholder={lenguage == 'EN' ? "Your Number *" : 'Numero *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.numero}/>
                                {formikContact.touched.numero && formikContact.errors.numero ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.numero}</span>
                                ): null}
                            </div>
                            <div class="col-md-12 form-group">
                                <input id="sujeto" name="sujeto" type="text" placeholder={lenguage == 'EN' ? "Subject *" : 'Sujeto *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.sujeto}/>
                                {formikContact.touched.sujeto && formikContact.errors.sujeto ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.sujeto}</span>
                                ): null}
                            </div>
                            <div class="col-md-12 form-group">
                                <textarea id="mensaje" name="mensaje"  cols="30" rows="4" placeholder={lenguage == 'EN' ? "Message *" : 'Mensaje *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.mensaje}></textarea>
                                {formikContact.touched.mensaje && formikContact.errors.mensaje ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.mensaje}</span>
                                ): null}
                            </div>
                            <div class="col-md-12">
                                <button type='submit' class="button-secondary mt-15"><a href="#0"><span id="buttonSend">{lenguage == 'EN' ? 'Send message' : 'Enviar mensaje'}</span></a></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm