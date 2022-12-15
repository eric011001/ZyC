import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../../firebase';
import Post from './Post';

const TablaPosts = () => {
    const [posts, setPosts] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        firebase.firestore.collection("posts").get().then(async (querySnapshot) => {
            const arrayTemp = [];
            await querySnapshot.forEach((doc) => {
                arrayTemp.push({id:doc.id, title: doc.data().title, comment: doc.data().comment,type: doc.data().type, img: doc.data().img})
                // doc.data() is never undefined for query doc snapshots
                
            });
            setPosts(arrayTemp)
        });
    }, [])
    //comment
    

    return(
        <table className="table-auto w-full overflow-y-auto my-2">
            <thead>
                <tr className="border-b-2 border-black">
                    <th className=" px-4 py-2"></th>
                    <th className=" px-4 py-2">Titulo</th>
                    <th className=" px-4 py-2">Tipo</th>
                    <th className=" px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody className=''>
                {posts.map(item => (
                    <Post id={item.id} post={item}/>
                ))}
            </tbody>
        </table>
    )
}

export default TablaPosts;