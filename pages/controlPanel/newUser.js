import React, {useContext} from 'react'
import Head from 'next/head'
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import MenuBack from '../../Components/controlPanel/MenuBack';
import { FirebaseContext } from '../../firebase';
const newUser = () => {
    const router = useRouter();

    const {firebase} = useContext(FirebaseContext);
    

    /*const [CrearNuevoUsuario] = useMutation(CREAR_NUEVO_USUARIO, {
        update(cache, { data: { crearNuevoUsuario } }) {
          const { obtenerUsuarios } = cache.readQuery({ query: OBTENER_USUARIOS });
          cache.writeQuery({
            query: OBTENER_USUARIOS,
            data: {
              obtenerUsuarios: [...obtenerUsuarios, crearNuevoUsuario]
            }
          })
        }
      });
      */
    const formikUser = useFormik({
        initialValues: {
            nameInput: '',
            lastNamesInput: '',
            passwordInput: '',
            confirmPasswordInput: '',
            emailInput: ''
        },
        validationSchema: Yup.object({
            nameInput: Yup.string().required('El nombre es obligatorio.'),
            lastNamesInput: Yup.string().required('Minimo un apellido es requerido.'),
            passwordInput: Yup.string().required('La contraseña es obligatorio.'),
            confirmPasswordInput: Yup.string().oneOf([Yup.ref('passwordInput'), null], "Las claves deben coincidir.").required('La confimación es necesaria.'),
            emailInput: Yup.string().required('El email es obligatorio.')
        }),
        onSubmit: async valores => { 
            const {nameInput, lastNamesInput, passwordInput, confirmPasswordInput, emailInput} = valores;
            try {
                const user = await firebase.auth.createUserWithEmailAndPassword(emailInput, passwordInput);

                firebase.firestore.collection('usuarios').doc(user.user.uid).set({name: nameInput,lastName: lastNamesInput, email: emailInput})
            
                /*const {data} = await CrearNuevoUsuario({
                    variables: {
                        input: {
                            nombre: nameInput,
                            apellidos: lastNamesInput,
                            password: passwordInput,
                            user: emailInput
                        }
                    }
                })*/
                Swal.fire({
                    icon: 'success',
                    title: 'Creado',
                    text: 'Se creó el usuario exitosamente'
                });
                router.push('/controlPanel/users')
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    text: error.message.replace('GraphQL error: ', ''),
                    confirmButtonColor: '#ef4444'
                  });
            }
        }
    })

    return(
        <div>
            <Head>
                <title>ZyC pool Spa</title>
                <link rel="shortcut icon" href="../img/favicon.png" />
            </Head>
            <div className='p-5'>
                <div className='text-xl font-bold'>
                    <h1>Agregar usuario</h1>
                </div>
                <form onSubmit={formikUser.handleSubmit} className='mt-5'>
                    <div className='lg:flex xl:flex'>
                        <div className='mr-2 lg:w-1/3 md:w-1/3'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="nameInput">Nombre:</label>
                            <input  id="nameInput" name="nameInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikUser.handleChange} onBlur={formikUser.handleBlur} value={formikUser.values.nameInput}/>
                            {formikUser.touched.nameInput && formikUser.errors.nameInput ? (
                                <span className="bg-white justify-center flex text-red-500">{formikUser.errors.nameInput}</span>
                            ): null}
                        </div>

                        <div className='mr-2 lg:w-1/3 md:w-1/3'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="lastNamesInput">Apellido:</label>
                            <input  id="lastNamesInput" name="lastNamesInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikUser.handleChange} onBlur={formikUser.handleBlur} value={formikUser.values.lastNamesInput}/>
                            {formikUser.touched.lastNamesInput && formikUser.errors.lastNamesInput ? (
                                <span className="bg-white justify-center flex text-red-500">{formikUser.errors.lastNamesInput}</span>
                            ): null}
                        </div>

                        <div className='mr-2 lg:w-1/3 md:w-1/3'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="emailInput">Email:</label>
                            <input  id="emailInput" name="emailInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikUser.handleChange} onBlur={formikUser.handleBlur} value={formikUser.values.emailInput}/>
                            {formikUser.touched.emailInput && formikUser.errors.emailInput ? (
                                <span className="bg-white justify-center flex text-red-500">{formikUser.errors.emailInput}</span>
                            ): null}
                        </div>
                    </div>
                    <div className='lg:flex xl:flex'>
                        <div className='mr-2 lg:w-1/2 md:w-1/2'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="passwordInput">Clave:</label>
                            <input  id="passwordInput" name="passwordInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="password"  onChange={formikUser.handleChange} onBlur={formikUser.handleBlur} value={formikUser.values.passwordInput}/>
                            {formikUser.touched.passwordInput && formikUser.errors.passwordInput ? (
                                <span className="bg-white justify-center flex text-red-500">{formikUser.errors.passwordInput}</span>
                            ): null}
                        </div>

                        <div className='mr-2 lg:w-1/2 md:w-1/2'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="confirmPasswordInput">Confirmar clave:</label>
                            <input  id="confirmPasswordInput" name="confirmPasswordInput"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="password"  onChange={formikUser.handleChange} onBlur={formikUser.handleBlur} value={formikUser.values.confirmPasswordInput}/>
                            {formikUser.touched.confirmPasswordInput && formikUser.errors.confirmPasswordInput ? (
                                <span className="bg-white justify-center flex text-red-500">{formikUser.errors.confirmPasswordInput}</span>
                            ): null}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <button type="submit" className="m-2 block h-10 w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 h-10 bg-naranja hover:bg-stone-300 rounded-xl text-white font-semibold transition-all">Registrar usuario</button>
                    </div>
                </form>
            </div>
            <MenuBack/>
        </div>
    )
}

export default newUser;