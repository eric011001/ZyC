import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../../firebase';
import Project1 from './Project1';
import Project2 from './Project2';

const Projects = ({lenguage}) => {

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
    

    return(
        <section class="projects section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-subtitle">
                        {
                            lenguage == 'EN'?
                            'Latest Works'
                            :
                            'Nuestros últimos trabajos'
                        }
                    </div>
                    <div class="section-title">
                        {
                            lenguage == 'EN'?
                            (<>Our <span>Projects</span></>)
                            :
                            (<>Nuestros <span>Proyectos</span></>)
                        }
                        
                    </div>
                </div>
            </div>
            <div class="row">
                {
                    posts.map((item,index) => (
                        
                            index % 2 == 0 ?
                            (<Project2 project={item} />):
                            (<Project1 project={item} />)
                        
                    ))
                }
                
                
                
                
            </div>
        </div>
    </section>
    )
}

export default Projects;