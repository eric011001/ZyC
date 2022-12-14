import React, {useState} from 'react';
import Head from 'next/head';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import HeaderBanner from '../Components/projects/HeaderBanner';
import Projects from '../Components/projects/Projects';

const projects = () => {
    const [lenguage, setLenguage] = useState('EN')

    return(
        <div>
            <Head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <title>ZyC pool Spa</title>
                <link rel="shortcut icon" href="img/favicon.png" />
                <link 
                    rel="stylesheet" 
                    href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Syne:wght@400;500;600;700;800&display=swap"
                />
            </Head>
            <div>
                <div className="progress-wrap">
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>   
                <Menu lenguage={lenguage} setLenguage={setLenguage}/>
                <HeaderBanner lenguage={lenguage}/>
                <Projects lenguage={lenguage}/>
                <Footer lenguage={lenguage}/>
            </div>
        </div>
    )
}

export default projects;