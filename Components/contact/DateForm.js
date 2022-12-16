import React, {useContext} from 'react'
import { useFormik  } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { FirebaseContext } from '../../firebase';

const DateForm = ({lenguage}) => {
    const {firebase} = useContext(FirebaseContext);
    const formikContact = useFormik({
        initialValues: {
            name: '',
            servicio: '',
            numero: '',
            descripcion: '',
            fecha: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required(`${lenguage == 'EN' ? 'Name is required' : 'El nombre es obligariorio'}`),
            servicio: Yup.string().required(`${lenguage == 'EN' ? 'Service is required' : 'El servicio es requerido'}`),
            numero: Yup.string().required(`${lenguage == 'EN' ? 'Number is required' : 'El numero es requerido'}`),
            descripcion: Yup.string().required(`${lenguage == 'EN' ? 'Description is required' : 'La descripcion es requerida'}`),
            fecha: Yup.string().required(`${lenguage == 'EN' ? 'Date is required' : 'La fecha es requerida'}`)            
        }),
        onSubmit: async valores => {
            console.log(valores);
            await firebase.firestore.collection('calls').add({nombre: valores.name,servicio: valores.servicio,numero: valores.numero,descripcion: valores.descripcion,fecha: valores.fecha, tipo:'Date'});
            Swal.fire({
                icon: 'success',
                title: 'Creado',
                text: lenguage == 'EN'? 'Appointment successfully scheduled' : 'Cita agendada correctamente'
            });
        }
    })
    return(
        <div class="col-md-5 offset-md-2">
            <div class="form-wrap">
                <div class="form-box">
                    <h5 id="titlecontact">{lenguage == 'EN' ? 'Make an appointment' : 'Agenda una cita'}</h5>
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
                                <input id="servicio" name="servicio" type="text" placeholder={lenguage == 'EN' ? "Your service *" : 'Servicio *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.servicio}/>
                                {formikContact.touched.servicio && formikContact.errors.servicio ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.servicio}</span>
                                ): null}
                            </div>
                            <div class="col-md-6 form-group">
                                <input id="numero" name="numero" type="text" placeholder={lenguage == 'EN' ? "Your Number *" : 'Numero *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.numero}/>
                                {formikContact.touched.numero && formikContact.errors.numero ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.numero}</span>
                                ): null}
                            </div>
                            <div class="col-md-12 form-group">
                                <input id="fecha" className='bg-white w-full' name="fecha" type="date" placeholder={lenguage == 'EN' ? "Date *" : 'Fecha *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.fecha} min/>
                                {formikContact.touched.fecha && formikContact.errors.fecha ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.fecha}</span>
                                ): null}
                            </div>
                            <div class="col-md-12 form-group">
                                <textarea id="descripcion" name="descripcion"  cols="30" rows="4" placeholder={lenguage == 'EN' ? "Description *" : 'descripción *'} onChange={formikContact.handleChange} onBlur={formikContact.handleBlur} value={formikContact.values.descripcion}></textarea>
                                {formikContact.touched.descripcion && formikContact.errors.descripcion ? (
                                    <span className="bg-white justify-center flex text-red-500">{formikContact.errors.descripcion}</span>
                                ): null}
                            </div>
                            <div class="col-md-12">
                                <button type='submit' class="button-secondary mt-15"><a href="#0"><span id="buttonSend">{lenguage == 'EN' ? 'Schedule an appointment' : 'Agendar cita'}</span></a></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DateForm