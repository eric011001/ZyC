import Head from "next/head";
import Image from "next/image";
import Menu from "../Components/Menu";
import React, {useState} from 'react'
import About from "../Components/home/About";
import AboutValues from "../Components/about/AboutValues";
import Footer from "../Components/Footer";
import Process from "../Components/home/Process";
export default function Home() {
  const [lenguage, setLenguage] = useState('EN')
  return (
    <div>
      <Head>
        <meta charset="utf-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>ZyC pool Spa</title>
        <link rel="shortcut icon" href="img/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Syne:wght@400;500;600;700;800&display=swap"
        />
      </Head>
      <div>
        
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        <Menu lenguage={lenguage} setLenguage={setLenguage}/>
        <About lenguage={lenguage}/>
        
        Í
        
        
        <Process lenguage={lenguage}/>
        <AboutValues lenguage={lenguage}/>
        <Footer lenguage={lenguage}/>
        <script src="./js/jquery-3.6.0.min.js"></script>
        <script src="./js/jquery-migrate-3.0.0.min.js"></script>
        <script src="./js/modernizr-2.6.2.min.js"></script>
        <script src="./js/imagesloaded.pkgd.min.js"></script>
        <script src="./js/jquery.isotope.v3.0.2.js"></script>
        <script src="./js/popper.min.js"></script>
        <script src="./js/bootstrap.min.js"></script>
        <script src="./js/scrollIt.min.js"></script>
        <script src="./js/jquery.waypoints.min.js"></script>
        <script src="./js/jquery.stellar.min.js"></script>
        <script src="./js/jquery.magnific-popup.js"></script>
        <script src="./js/jquery.counterup.min.js"></script>
        <script src="./js/YouTubePopUp.js"></script>
        <script src="./js/custom.js"></script>
        <script src="./js/actions.js"></script>
      </div>
    </div>
  );
}
