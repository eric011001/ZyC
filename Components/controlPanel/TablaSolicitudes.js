import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../../firebase';
import Post from './Post';
import Solicitud from './Solicitud';

const TablaSolicitudes = () => {
    const [posts, setPosts] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        firebase.firestore.collection("calls").onSnapshot(async (querySnapshot) => {
            const arrayTemp = [];
            await querySnapshot.forEach((doc) => {
                arrayTemp.push({
                    id:doc.id,
                    nombre: doc.data().nombre,
                    tipo: doc.data().tipo, 
                    mensaje: doc.data().mensaje,
                    sujeto: doc.data().sujeto,
                    numero: doc.data().numero,
                    email: doc.data().email,
                    descripcion: doc.data().descripcion,
                    servicio: doc.data().servicio,
                    fecha: doc.data().fecha
                })
                // doc.data() is never undefined for query doc snapshots
            });
            setPosts(arrayTemp)
        });
    }, [])
    
    

    return(
        <table className="table-auto w-full overflow-y-auto my-2">
            <thead>
                <tr className="border-b-2 border-black">
                    <th className=" px-4 py-2">Nombre</th>
                    <th className=" px-4 py-2">Tipo</th>
                    <th className=" px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody className=''>
                {posts.map(item => (
                    <Solicitud id={item.id} call={item}/>
                ))}
            </tbody>
        </table>
    )
}

export default TablaSolicitudes;