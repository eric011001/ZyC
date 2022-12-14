import React, { useEffect, useContext } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router';
import MenuBack from '../../Components/controlPanel/MenuBack';
import TablaUsuarios from '../../Components/controlPanel/TablaUsuarios';

import { FirebaseContext } from '../../firebase';
const users = () => {

    const router = useRouter();
    const {firebase} = useContext(FirebaseContext);
    
    useEffect(() => {
        firebase.auth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              var uid = user.uid;
              // ...
            } else {
              router.push('/controlPanel')
            }
          });
    }, [])
    
    return(
        <div>
            <Head>
                <title>ZyC pool Spa</title>
                <link rel="shortcut icon" href="../img/favicon.png" />
            </Head>
            
            <div className='p-2'>
                <div className='flex justify-center p-5 text-2xl color-black  align-items justify-center'>
                    <div className=''>
                        <img src='../img/logo.png' className='mb-2'/>
                        <div className='flex justify-center'>
                            <div className='text-center'>
                                <span className='mb-2'>Administrador de usuarios</span><br/>
                                <button onClick={() => router.push('/controlPanel/newUser')} className='p-2 px-5 bg-naranja rounded-xl text-white'>Agregar usuario</button>
                            </div>
                        </div>
                    </div>
                </div>
                <TablaUsuarios/>
            </div>
            <MenuBack/>
        </div>
    )
}

export default users;