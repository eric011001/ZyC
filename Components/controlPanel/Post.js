import React, {useContext} from 'react'
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { FaPen, FaTrash } from "react-icons/fa";
import { FirebaseContext } from '../../firebase';

const Post = ({post}) => {
    const {id} = post;
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
        router.push({
          pathname:"/controlPanel/editaPost/[id]",
          query: {id}
        })
    }

    const eliminaElUsuario = () => {
        Swal.fire({
          title: '¿Deseas elimiar a este post?',
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
                await firebase.storage.refFromURL(post.img).delete();
                await firebase.firestore.collection('posts').doc(post.id).delete();
              /*const { data } = await eliminarUsuario({
                variables: {
                  id
                }
              });*/
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                    text: 'El post se ha eliminado',
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
            <th className=" px-4 py-2"><img style={{height: '100px', width: '150px'}} src={post.img}/></th>
            <th className=" px-4 py-2">{post.title}</th>
            <th className=" px-4 py-2">{post.type}</th>
            <th className=" px-4 py-2"><button className='mx-2' onClick={() => editaUsuario()}><FaPen/></button><button className='mx-2' onClick={() => eliminaElUsuario()}><FaTrash/></button></th>
        </tr>
    )
}

export default Post;