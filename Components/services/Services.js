import Link from 'next/link';
import React from 'react'
Link
const Services = ({lenguage}) => {

    return(
        <section className="services center section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="item mb-30">
                            <div className="service-img">
                                <div className="img"> <img src="img/services/1.jpg" alt=""/> </div>
                            </div>
                            <div className="cont">
                                <div className="service-icon"> <i className="norc-new-construction"></i> </div>
                                <h5>
                                    <Link href="/services" id="constructionTitle">
                                        {
                                            lenguage == 'EN'?
                                            'Construction'
                                            :
                                            'Construcción'
                                        }
                                    </Link>
                                </h5>
                                <p id="constructionDescription">
                                    {
                                        lenguage == 'EN'?
                                        'Construction of pools and Jacuzzis.'
                                        :
                                        'Construcción de Albercas y Jacuzzis.'
                                    }
                                </p>{/* <a href="construction.html" className="link-btn" tabindex="0" id="viewService0">View service</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item mb-30">
                            <div className="service-img">
                                <div className="img"> <img src="img/services/2.jpg" alt=""/> </div>
                            </div>
                            <div className="cont">
                                <div className="service-icon"> <i className="norc-construction-sign"></i> </div>
                                <h5>
                                    <a href="construction.html" id="serviceRouteTitle">
                                        {
                                            lenguage == 'EN'?
                                            'Service route'
                                            :
                                            'Ruta de servicio'
                                        }
                                    </a>
                                </h5>
                                <p id="serviceRouteDescription">
                                    {
                                        lenguage == 'EN'?
                                        'We make a service route to support all the pools and hot tubs of our customers.'
                                        :
                                        'Realizamos una ruta de servicio para dar soporte a todas las albercas y jacuzzis de nuestros clientes.'
                                    }
                                </p>{/* <a href="services-page.html" className="link-btn" tabindex="0" id="viewService1">View service</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item mb-30">
                            <div className="service-img">
                                <div className="img"> <img src="img/services/3.jpg" alt=""/> </div>
                            </div>
                            <div className="cont">
                                <div className="service-icon"> <i className="norc-factory"></i> </div>
                                <h5>
                                    <a href="services-page.html" id="repairTitle">
                                        {
                                            lenguage == 'EN'?
                                            'Repair and maintenance'
                                            :
                                            'Reparación y mantenimiento'
                                        }
                                    </a>
                                </h5>
                                <p id="repairDescription">
                                    {
                                        lenguage == 'EN'?
                                        'We take care of any problem or malfunction with your pool or jacuzzi, always looking for the best quality.'
                                        :
                                        'Nos encargamos de cualquier problema o desperfecto con su alberca o jacuzzi, siempre buscando la mejor calidad.'
                                    }
                                </p>{/* <a href="services-page.html" className="link-btn" tabindex="0" id="viewService2">View service</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item mb-30">
                            <div className="service-img">
                                <div className="img"> <img src="img/services/4.jpg" alt=""/> </div>
                            </div>
                            <div className="cont">
                                <div className="service-icon"> <i className="norc-radiation"></i> </div>
                                <h5>
                                    <a href="services-page.html" id="renovationTitle">
                                        {
                                            lenguage == 'EN'?
                                            'Renovation'
                                            :
                                            'Remodelación'
                                        }
                                    </a>
                                </h5>
                                <p id="renovationDescription"> 
                                    {
                                        lenguage == 'EN'?
                                        'We improve or upgrade your pool or jacuzzi facilities for your community.'
                                        :
                                        'Mejoramos o readaptamos sus instalaciones de alberca o jacuzzi para su comidad.'
                                    }
                                </p>{/* <a href="services-page.html" className="link-btn" tabindex="0" id="viewService3">View service</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;