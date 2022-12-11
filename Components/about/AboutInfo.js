import React from 'react'


const AboutInfo = ({lenguage}) => {

    return(
        <section class="about-info section-padding bg-gray">
            <div class="container">
                <div class="about-info">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="about-info-img mb-60">
                                <div class="img "> <img src="img/about2.jpeg" class="img-fluid img-add" alt=""/> </div>
                            </div>
                            <div class="section-title2" id="section1Title">
                                {
                                    lenguage == 'EN'?
                                    ('Who are we?')
                                    :
                                    ('¿Quienes somos?')
                                }
                            
                            </div>
                            <p id="section1Description">
                                {
                                    lenguage == 'EN'?
                                    'We are a company located in Edwars with 3 years of experience that guarantees a quality delivery of your pool.'
                                    :
                                    'Somos una empresa ubicada en Edwars con 3 años de experiencia que garantiza una entrega de calidad en su piscina.'
                                }
                            </p>
                        </div>
                        <div class="col-md-6 offset-md-1 pt-60">
                            <div class="section-title2" id="section2Title">
                                {
                                    lenguage == 'EN'?
                                    (<>Quality construction and <span>services</span></>)
                                    :
                                    (<>Construcción y servicios de <span>calidad</span></>)
                                }
                            </div>
                            <p id="section2Description">
                                {
                                    lenguage == 'EN'?
                                    'At ZyC Pool/spa we want our clients to have the best service when it comes to the maintenance or construction of their pools.'
                                    :
                                    'En ZyC Pool/spa buscamos que nuestros clientes tengan el mejor servicio a la hora del mantenimiento o construcción de sus picisnas.'
                                }
                            </p>
                            <div class="about-info-img pt-60">
                                <div class="img"> <img src="img/about3.jpeg" class="img-fluid" alt=""/> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutInfo;