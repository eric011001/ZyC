import React from 'react'

const About = ({lenguage}) => {

    return(
        <section className="about section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="section-subtitle" id="sectionSubCon">
                            {
                                lenguage == 'EN'? 
                                'Pool construction.'
                                :
                                'Construcción de albercas y jacuzzis'
                            }
                        </div>
                        <div className="section-title" id="sectionTitleAbNor">
                            {
                                lenguage == 'EN'? 
                                (<>About <span>ZyC</span></>)
                                :
                                (<>Sobre <span>ZyC</span></>)
                            }
                        </div>
                        <p id="pSection1">
                            {
                                lenguage == 'EN'? 
                                'Our company is committed to its clients in delivering quality construction and services.'
                                :
                                'Nuestra compañía se encuentra comprometida con sus clientes en entregarles  construcciones y servicios de calidad.'
                            }
                        </p>
                        <p id="pSection2">
                            {
                                lenguage == 'EN'? 
                                'We seek to have the best quality following the best standards so that our customers are satisfied with our service.'
                                :
                                'Buscamos tener la mejor calidad siguiendo los mejores estándares para que nuestros clientes estén satisfechos con nuestro servicio.'
                            }    
                        </p>
                        <ul className="listext list-unstyled mb-30">
                            <li>
                                <div className="listext-icon">
                                    {" "}
                                    <i className="norc-d-check"></i>{" "}
                                </div>
                                <div className="listext-text">
                                    <p id="lista1Top">
                                        {
                                            lenguage == 'EN'? 
                                            'Over 3 years of experience'
                                            :
                                            'Más de 3 Años de experiencia'
                                        }
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="listext-icon">
                                    {" "}
                                    <i className="norc-d-check"></i>{" "}
                                </div>
                                <div className="listext-text">
                                    <p id="lista2Top">
                                        {
                                            lenguage == 'EN'? 
                                            '20+ successfully executed projects'
                                            :
                                            '20+ Proyectos entregados con exito'
                                        }
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="listext-icon">
                                    {" "}
                                    <i className="norc-d-check"></i>{" "}
                                </div>
                                <div className="listext-text">
                                    <p id="lista3Top">
                                        {
                                            lenguage == 'EN'? 
                                            'Exceptional work quality'
                                            :
                                            'Exelente calidad de trabajo'
                                        }
                                    </p>
                                </div>
                             </li>
                        </ul>
                        <div className="line-dec"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-img">
                            {" "}
                            <img src="img/about.jpeg" alt="" />
                            <div className="about-img-hotifer">
                                <p id="subtitleTop1">
                                    {
                                        lenguage == 'EN'? 
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

export default About