import React, {useContext} from 'react'
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { FaInfo, FaTrash } from "react-icons/fa";
import { FirebaseContext } from '../../firebase';

const Solicitud = ({call}) => {
    console.log(call);
    const {id} = call;
    const router = useRouter();
    const {firebase} = useContext(FirebaseContext);
    
    /*const [eliminarUsuario] = useMutation(ELIMINA_USUARIO,{
        update(cache) {
            const { obtenerUsuarios } = cache.readQuery({ query: OBTENER_USUARIOS });
            cache.writeQuery({
                query: OBTENER_USUARIOS,
                data: {
                    obtenerUsuarios: obtenerUsuarios.filter((usuarioActual) => usuarioActual.id !== id)
                }
            });
        }
    })*/

    const editaUsuario = () => {
      console.log(call);
      Swal.fire({
        title: 'Detalles de la llamada',
        confirmButtonText: 'Hecho',
        confirmButtonColor: '#ed5520',
        html: call.tipo == 'Date' ?  
        `
          <div>
          <p>Nombre: <span>${call.nombre}</span></p>
          <p>Numero: <span>${call.numero}</span></p>
          <p>Servicio: <span>${call.servicio}</span></p>
          <p>Fecha: <span>${call.fecha}</span></p>
          <p>Descripción: <span>${call.descripcion}</span></p>
          </div>
        ` 
        :
        `
          <div>
            <p>Nombre: <span>${call.nombre}</span></p>
            <p>Numero: <span>${call.numero}</span></p>
            <p>Sujeto: <span>${call.sujeto}</span></p>
            <p>Correo: <span>${call.email}</span></p>
            <p>Mensaje: <span>${call.mensaje}</span></p>
          </div>
        `
      });
  
        /*router.push({
          pathname:"/controlPanel/editarUsuario/[id]",
          query: {id}
        })*/
    }

    const eliminaElUsuario = () => {
        Swal.fire({
          title: '¿Deseas elimiar a este call?',
          text: 'Esta acción no se peude deshacer',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ef4444',
          cancelButtonColor: '#6b7280',
          reverseButtons: true,
          confirmButtonText: 'Si, eliminar',
          cancelButtonText: 'No, cancelar'
        }).then(async (result) => {
          if (result.value) {
            try {
                await firebase.firestore.collection('calls').doc(call.id).delete();
              /*const { data } = await eliminarUsuario({
                variables: {
                  id
                }
              });*/
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                    text: 'La solicitud se ha eliminado',
                    confirmButtonColor: '#ef4444'
                })
            } catch (error) {
              console.log(error);
            }
          }
        });
      }


    return(
        <tr className='border-b-2 border-blac'> 
            <th className=" px-4 py-2">{call.nombre}</th>
            <th className=" px-4 py-2">{call.tipo}</th>
            <th className=" px-4 py-2"><button className='mx-2' onClick={() => editaUsuario()}><FaInfo/></button><button className='mx-2' onClick={() => eliminaElUsuario()}><FaTrash/></button></th>
        </tr>
    )
}

export default Solicitud;