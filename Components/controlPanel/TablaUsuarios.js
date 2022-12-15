import React, { useState, useContext, useEffect } from 'react'
import Usuario from './Usuario';
import { FirebaseContext } from '../../firebase';

const TablaUsuarios = () => {
    const [users, setUsers] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        firebase.firestore.collection("usuarios").get().then(async (querySnapshot) => {
            const arrayTemp = [];
            await querySnapshot.forEach((doc) => {
                arrayTemp.push({id:doc.id, name: `${doc.data().name} ${doc.data().lastName}`, email: doc.data().email})
                // doc.data() is never undefined for query doc snapshots
                
            });
            setUsers(arrayTemp)
        });
    }, [])
    
    

    return(
        <table className="table-auto w-full overflow-y-auto my-5">
            <thead>
                <tr className="border-b-2 border-black">
                    <th className=" px-4 py-2">Nombre</th>
                    <th className=" px-4 py-2">Email</th>
                    <th className=" px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody className=''>
                {users.map(item => (
                    <Usuario id={item.id} usuario={item}/>
                ))}
            </tbody>
        </table>
    )
}

export default TablaUsuarios;