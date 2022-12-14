import React from 'react'
import OwlCarousel from 'react-owl-carousel2';

const ServicesEs = ({lenguage}) => {

    const options = {
      loop: true,
      margin: 30,
      mouseDrag: true,
      autoplay: false,
      dots: true,
      autoplayHoverPause: true,
      responsive: {
			0: {
				items: 1
			, }
			, 600: {
				items: 2
			}
			, 1000: {
				items: 3
			}
		}
    }

    return(
        <section className="services center section-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-subtitle" id="subtitleServices">
                    ¿Qué hacemos?
                </div>
                <div className="section-title" id="titleServices">
                    Nuestros <span>Servicios</span>
                </div>
              </div>
            </div>
            <div className="row">
              <OwlCarousel className="col-md-12 owl-carousel owl-theme" options={options}>
                <div className="item mb-30">
                  <div className="service-img">
                    <div className="img">
                      {" "}
                      <img src="img/services/1.jpg" alt="" />{" "}
                    </div>
                  </div>
                  <div className="cont">
                    <div className="service-icon">
                      {" "}
                      <i className="norc-new-construction"></i>{" "}
                    </div>
                    <h5>
                      <a href="construction.html" id="constructionTitle">
                        Construcción
                      </a>
                    </h5>
                    <p id="constructionDescription">
                        Construcción de Albercas y Jacuzzis.
                    </p>
                  </div>
                </div>
                <div className="item mb-30">
                  <div className="service-img">
                    <div className="img">
                      {" "}
                      <img src="img/services/2.jpg" alt="" />{" "}
                    </div>
                  </div>
                  <div className="cont">
                    <div className="service-icon">
                      {" "}
                      <i className="norc-construction-sign"></i>{" "}
                    </div>
                    <h5>
                      <a href="serviceroute.html" id="serviceRouteTitle">
                        Ruta de servicio
                      </a>
                    </h5>
                    <p id="serviceRouteDescription">
                        Realizamos una ruta de servicio para dar soporte a todas las albercas y jacuzzis de nuestros clientes.
                    </p>
                  </div>
                </div>
                <div className="item mb-30">
                  <div className="service-img">
                    <div className="img">
                      {" "}
                      <img src="img/services/3.jpg" alt="" />{" "}
                    </div>
                  </div>
                  <div className="cont">
                    <div className="service-icon">
                      {" "}
                      <i className="norc-factory"></i>{" "}
                    </div>
                    <h5>
                      <a href="repairs.html" id="repairsTitle">
                        Reparación y mantenimiento
                      </a>
                    </h5>
                    <p id="repairsDescription">
                        Nos encargamos de cualquier problema o desperfecto con su alberca o jacuzzi, siempre buscando la mejor calidad.
                    </p>
                  </div>
                </div>
                <div className="item mb-30">
                  <div className="service-img">
                    <div className="img">
                      {" "}
                      <img src="img/services/4.jpg" alt="" />{" "}
                    </div>
                  </div>
                  <div className="cont">
                    <div className="service-icon">
                      {" "}
                      <i className="norc-radiation"></i>{" "}
                    </div>
                    <h5>
                        <a href="renovation.html" id="renovationTitle">
                            Remodelación
                        </a>
                    </h5>
                    <p id="renovationDescription">
                        Mejoramos o readaptamos sus instalaciones de alberca o jacuzzi para su comidad.
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
    )
}

export default ServicesEs;