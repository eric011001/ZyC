import React, {useState, useContext} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';


const index = () => {
    const router = useRouter();
    const [mensaje,guardarMensaje] = useState(null);
    const {firebase} = useContext(FirebaseContext);
    


    const formikLogin = useFormik({
        initialValues: {
            user: '',
            password: ''
        },
        validationSchema: Yup.object({
            user: Yup.string().email('Se requiere de un email').required('El usuario es necesario'),
            password: Yup.string().required('La contraseña es necesaria')
        }),
        onSubmit: async valores => {
            const{user,password} = valores;
      try {
        

        guardarMensaje('Procesando...');
        const userCredential = await firebase.auth.signInWithEmailAndPassword(user, password)
        
        
        

        setTimeout(() => {
          guardarMensaje(null);
          router.push('/controlPanel/users');
        }, 1500);
        
      } catch (error) {
        guardarMensaje(error.message)
        setTimeout(() => {
          guardarMensaje(null);
        }, 3000);
      }
        }
    })

    const mostrarMensaje = () => {

        const spinner = <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-100" cx="12" cy="12" r="10" stroke="gray" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>;
        return (
          <span className="block w-full flex justify-center items-center p-2 m-2 bg-gray-200 text-gray-600 font-semibold rounded-xl">
            
            {mensaje === 'Procesando...' ? (spinner) : null}
            {mensaje}
            
          </span>
        )
    }

    return(
        <div className='w-full min-h-screen bg-gray-200 flex items-center justify-center'>
            <div className='flex bg-white p-10 drop-shadow-lg rounded-lg'>
                
                <div className='flex items-center'>
                    <form onSubmit={formikLogin.handleSubmit}>
                        <div className='mr-2 lg:w-full md:w-full'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="user">Usuario:</label>
                            <input  id="user" name="user"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} value={formikLogin.values.user}/>
                            {formikLogin.touched.user && formikLogin.errors.user ? (
                                <span className="bg-white justify-center flex text-red-500">{formikLogin.errors.user}</span>
                            ): null}
                        </div>

                        <div className='mr-2 lg:w-full md:w-full'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="password">Contraseña:</label>
                            <input  id="password" name="password"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="password"  onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} value={formikLogin.values.password}/>
                            {formikLogin.touched.password && formikLogin.errors.password ? (
                                <span className="bg-white justify-center flex text-red-500">{formikLogin.errors.password}</span>
                            ): null}
                        </div>

                        <div className="flex flex-wrap justify-center">
                                <button type="submit" className="m-2 block h-10 w-full sm:w-full md:w-full lg:w-full xl:w-full h-10 bg-naranja hover:bg-stone-300 rounded-xl text-white font-semibold transition-all">Iniciar sesión</button>
                        </div>

                    {mensaje && mostrarMensaje()}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index;