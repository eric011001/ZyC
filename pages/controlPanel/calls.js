import React, { useEffect, useContext } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router';
import MenuBack from '../../Components/controlPanel/MenuBack';

import { FirebaseContext } from '../../firebase';
import TablaPosts from '../../Components/controlPanel/TablaPosts';
import TablaSolicitudes from '../../Components/controlPanel/TablaSolicitudes';

const calls = () => {
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
                        <div className='flex justify-center text-center'>
                            <div>
                                <span className='mb-2'>Administrador de solicitudes</span><br/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <TablaSolicitudes/>
            </div>
            <MenuBack/>
        </div>
    )
}

export default calls;
