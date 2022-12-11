import React from 'react';

const FirstAbout = ({lenguage}) => {

    return(
        <section class="about section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-30">
                        <h5 id="aboutTitle">
                            {
                                lenguage == 'EN' ? 
                                'Pool construction quality guaranteed!'
                                :
                                '¡Calidad en la construcción de albercas garantizada!'
                            }
                        </h5>
                        <p id="about1P">
                            {
                                lenguage == 'EN' ? 
                                'Our company is committed to its clients in delivering quality construction and services. '
                                :
                                'Nuestra compañía se encuentra comprometida con sus clientes en entregarles  construcciones y servicios de calidad. '
                            }
                        </p>
                        <p id="about2P">
                            {
                                lenguage == 'EN' ? 
                                'We seek to have the best quality following the best standards so that our customers are satisfied with our service.'
                                :
                                'Buscamos tener la mejor calidad siguiendo los mejores estándares para que nuestros clientes estén satisfechos con nuestro servicio.'
                            }    
                         </p>
                        <ul class="listext list-unstyled mb-30">
                            <li>
                                <div class="listext-icon"> <i class="norc-d-check"></i> </div>
                                <div class="listext-text">
                                    <p id="subtitle1Property">
                                        {
                                            lenguage == 'EN' ? 
                                            'Over 3 years of experience'
                                            :
                                            'Más de3 Años de experiencia'
                                        }
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="listext-icon"> <i class="norc-d-check"></i> </div>
                                <div class="listext-text">
                                    <p id="subtitle2Property">
                                        {
                                            lenguage == 'EN' ? 
                                            '20+ Projects successfully delivered'
                                            :
                                            '20+ Proyectos entregados con exito'
                                        }
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="listext-icon"> <i class="norc-d-check"></i> </div>
                                <div class="listext-text">
                                    <p id="subtitle3Property">
                                        {
                                            lenguage == 'EN' ? 
                                            'Excellent quality work'
                                            :
                                            'Exelente calidad de trabajo'
                                        }
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div class="line-dec"></div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-img fl-wrap">
                            <img src="img/about4.jpeg" class="img-fluid" alt=""/>
                            <div class="about-img-hotifer color-bg">
                                <p id="dialogInnerImage">
                                    {
                                        lenguage == 'EN' ? 
                                        'Our 3 years of experience make for quality work.'
                                        :
                                        'Nuestros 3 años de experiencia hacen un trabajo de calidad.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstAbout;