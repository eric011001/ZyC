import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head';
import { useFormik  } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import MenuBack from '../../../Components/controlPanel/MenuBack';
import { FirebaseContext } from '../../../firebase';
import FileUploader from 'react-firebase-file-uploader'
const editaPost = () => {
    const router = useRouter();
    
    const {query: {pid: id}} = router;

    const {firebase} = useContext(FirebaseContext);
    const [post, setPost] = useState(null);
    const [subiendo, setSubiendo] = useState(false);
    const [progreso, setProgreso] = useState(0);
    const [urlImage, setUrlImage] = useState('')


    const formikPost = useFormik({
        initialValues: {
            title: post ? post.title : '',
            type: post ? post.type : '',
            comment: post ? post.comment : ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('El titulo es obligatorio'),
            type: Yup.string().required('el tipo es obligatorio'),
            comment: Yup.string().required('El comentario es obligatorio')
        }),
        onSubmit: async valores => {
            console.log(valores);
            if(urlImage !== '' && !subiendo){
                await firebase.firestore.collection('posts').doc(id).update({title: valores.title,type:  valores.type, comment: valores.comment, img: urlImage});
                Swal.fire({
                    icon: 'success',
                    title: 'Creado',
                    text: 'Se actualizó el post exitosamente'
                });
                router.push('/controlPanel/posts')
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    text: 'Favor de subir una imagen y esperar a que el proceso termine',
                    confirmButtonColor: '#ef4444'
                });
            }
        }
        
    })

    useEffect(() => {
        console.log(id);
        firebase.firestore.collection("posts").doc(id).get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setPost({
                    comment: doc.data().comment,
                    img: doc.data().img,
                    title: doc.data().title,
                    type: doc.data().type
                })
                formikPost.values.title = doc.data().title
                formikPost.values.comment = doc.data().comment
                formikPost.values.type = doc.data().type
                setUrlImage(doc.data().img)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            
            router.push('/controlPanel/calls')
        });
    }, [id])




    //todo sobre las images
  const handleUploadStart = () => {
    setProgreso(0);
    setSubiendo(true);
  } 

  const handleUploadError = error => {
    setSubiendo(false);
    console.log(error);
  }

  const handleUploadSuccess = async nombre => {
    setProgreso(100);
    setSubiendo(false);

    const url = await firebase.storage.ref('posts').child(nombre).getDownloadURL();
    setUrlImage(url)


  }

  const handleProgress = progresoActual => {
    console.log(progresoActual);
    setProgreso(progresoActual)
  }


    return(
        <div>
            <Head>
                <title>ZyC pool Spa</title>
                <link rel="shortcut icon" href="../img/favicon.png" />
            </Head>
            <div className='p-5'>
                <div className='text-xl font-bold'>
                    <h1>Agregar post</h1>
                </div>
                <form onSubmit={formikPost.handleSubmit} className='mt-5'>
                    <div className='lg:flex xl:flex'>
                        <div className='mr-2 lg:w-1/2 md:w-1/2'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="title">Titulo:</label>
                            <input  id="title" name="title"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikPost.handleChange} onBlur={formikPost.handleBlur} value={formikPost.values.title}/>
                            {formikPost.touched.title && formikPost.errors.title ? (
                                <span className="bg-white justify-center flex text-red-500">{formikPost.errors.title}</span>
                            ): null}
                        </div>
                        <div className='mr-2 lg:w-1/2 md:w-1/2'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="type">Tipo:</label>
                            <input  id="type" name="type"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikPost.handleChange} onBlur={formikPost.handleBlur} value={formikPost.values.type}/>
                            {formikPost.touched.type && formikPost.errors.type ? (
                                <span className="bg-white justify-center flex text-red-500">{formikPost.errors.type}</span>
                            ): null}
                        </div>     
                        
                    </div>
                    <div className='lg:flex xl:flex'>
                        <div className='mr-2 w-full'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="comment">Comentario:</label>
                            <textarea  id="comment" name="comment"  className='p-2 m-2 w-full h-10 block bg-gray-200 focus:bg-gray-300 outline-none transition-all rounded-xl'  type="text"  onChange={formikPost.handleChange} onBlur={formikPost.handleBlur} value={formikPost.values.comment}></textarea>
                            {formikPost.touched.comment && formikPost.errors.comment ? (
                                <span className="bg-white justify-center flex text-red-500">{formikPost.errors.comment}</span>
                            ): null}
                        </div>
                    </div>
                    <div className='lg:flex xl:flex'>
                        <div className='mr-2 w-full'>
                            <label className="font-semibold mt-2 mb-2 ml-4 mr-2 " htmlFor="comment">Imagen:</label>
                            <FileUploader
                                accept="image/*"
                                id="imagen"
                                name="image"
                                randomizeFilename
                                storageRef={firebase.storage.ref('posts')}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                            />
                        </div>
                        
                    </div>
                    {subiendo && ( 
                        <div class="w-full bg-gray-200 rounded-full mt-5 h-2.5 dark:bg-gray-700">
                            <div class="bg-red-600 h-2.5 rounded-full" style={{width: `${progreso}%`}}></div>
                        </div>
                    )}
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex-shrink-0 flex flex-col">
                        {
                        urlImage !== '' ? (
                            <img src={urlImage}/>
                        ) : null
                        }
                        
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <button type="submit" className="m-2 block h-10 w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 h-10 bg-naranja hover:bg-stone-300 rounded-xl text-white font-semibold transition-all">Actualizar post</button>
                    </div>
                </form>
            </div>
            <MenuBack/>
        </div>
    )
}

export default editaPost;