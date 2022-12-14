import Link from 'next/link';
import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import h1 from '../../public/img/slider/1.jpeg'
import h2 from '../../public/img/slider/2.jpeg'
import h3 from '../../public/img/slider/3.jpg'

const HeaderEs= ({lenguage}) => {

    const options = {
        items: 1,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        navText: ['<i class="norc-small-left" aria-hidden="true"></i>', '<i class="norc-small-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                dots: true
            },
            600: {
                dots: true
            },
            1000: {
                dots: true
            }
        }
      };

    return(
        <header className="header slider-fade" >
          <OwlCarousel className="owl-carousel owl-theme" options={options}>
            <div
              className="text-left item bg-img"
              style={{backgroundImage: `url(${h1.src})`}}
              data-overlay-dark="4"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 id="slider1Top">
                        Alta calidad garantizada
                        
                      </h4>
                      <h1 id="sliderTitleTop">
                        Bienvenidos a ZyC Pool/Spa
                      </h1>
                      <p id="sliderDescriptionTop">
                        Tenemos experiencia en la construcción, remodelación y reparación de albercas y jacuzzis. Contáctenos y pregunte por nuestros servicios o cotice su proyecto. 
                      </p>{" "}
                      <Link
                        href="/services"
                        className="button-tersiyer"
                        id="sliderTop1Services"
                      >
                        Servicios
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-left item bg-img"
              style={{backgroundImage: `url(${h2.src})`}}
              data-overlay-dark="4"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="Írow">
                    <div className="col-md-7">
                      <h4 id="slider2Top">
                        Grandes diseños
                      </h4>
                      <h1 id="sliderTitle2Top">
                        Tenemos grandes proyectos
                      </h1>
                      <p id="sliderDescription2Top">
                        Tenemos experiencia en la construcción, remodelación y reparación de albercas y jacuzzis. Contáctenos y pregunte por nuestros servicios o cotice su proyecto.
                      </p>{" "}
                      <Link
                        href="/services"
                        className="button-tersiyer"
                        id="sliderTop2Services"
                      >
                        Servicios
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-left item bg-img"
              style={{backgroundImage: `url(${h3.src})`}}
              data-overlay-dark="4"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 id="slider3Top">
                        Equipo profesional
                      </h4>
                      <h1 id="sliderTitle3Top">
                        Construye la piscina de tus sueños
                      </h1>
                      <p id="sliderDescription3Top">
                        Nuestros más de 3 años de experiencia acreditan un proyecto de calidad
                      </p>{" "}
                      <Link
                        href="/services"
                        className="button-tersiyer"
                        id="sliderTop3Services"
                      >
                        Servicios
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </OwlCarousel>
        </header>
    )
}

export default HeaderEs;