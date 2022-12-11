import React from 'react'


const AboutValues = ({lenguage}) => {

    return(
        <section className="values section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-subtitle" id="valuesTitle">
                            {
                                lenguage == 'EN'?
                                'Our values'
                                :
                                'Nuestros valores.'
                            }
                        </div>
                        <div className="section-title" id="valuesDescription">
                            {
                                lenguage == 'EN'?
                                (<>Core <span>Values</span></>)
                                :
                                (<>Valores <span>fundamentales</span></>)
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="norc-construction-sign"></span>
                            <h5 id="saeftyTitle">
                                {
                                    lenguage == 'EN'?
                                    'Saefty'
                                    :
                                    'Seguridad'
                                }
                            </h5>
                            <p id="saeftyDescription">
                                {
                                    lenguage == 'EN'?
                                    'Safety will always come first as we strive for accident-free projects.'
                                    :
                                    'Nos esforzamos por realizar proyectos sin accidentes.'
                                }
                            </p>
                            <div className="facility-shape"> <span className="norc-construction-sign"></span> </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="norc-bulb-63"></span>
                            <h5 id="innovationTitle">
                                {
                                    lenguage == 'EN'?
                                    'Innovation'
                                    :
                                    'Innovación'
                                }
                            </h5>
                            <p id="innovartionDescription">
                                {
                                    lenguage == 'EN'?
                                    'We innovate using the latest machinery and techniques.'
                                    :
                                    'Innovamos usando maquinaria y las tecnicas mas recientes.'
                                }
                            </p>
                            <div className="facility-shape"> <span className="norc-bulb-63"></span> </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="norc-paper-diploma"></span>
                            <h5 id="qualityTitle">
                                {
                                    lenguage == 'EN'?
                                    'Quality'
                                    :
                                    'Calidad'
                                }
                            </h5>
                            <p id="qualityDescription">
                                {
                                    lenguage == 'EN'?
                                    'Guaranteed quality in all our work.'
                                    :
                                    'Calidad garantizada en todos nuestros trabajos.'
                                }
                            </p>
                            <div className="facility-shape"> <span className="norc-paper-diploma"></span> </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="norc-chess-knight"></span>
                            <h5 id="integrityTitle">
                                {
                                    lenguage == 'EN'?
                                    'Integrity'
                                    :
                                    'Integridad'
                                }
                            </h5>
                            <p id="integrityDescription">
                                {
                                    lenguage == 'EN'?
                                    (<><br/></>)
                                    :
                                    (<><br/></>)
                                }
                            </p>
                            <div className="facility-shape"> <span className="norc-chess-knight"></span> </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="norc-strategy"></span>
                            <h5 id="strategyTitle">
                                {
                                    lenguage == 'EN'?
                                    'Strategy'
                                    :
                                    'Estrategia'
                                }
                            </h5>
                            <p id="strategyDescription">
                                {
                                    lenguage == 'EN'?
                                    (<><br/></>)
                                    :
                                    (<><br/></>)
                                }
                            </p>
                            <div className="facility-shape"> <span className="norc-strategy"></span> </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-facility">
                            <span className="norc-flag-points-32"></span>
                            <h5 id="inclusionTitle">
                                {
                                    lenguage == 'EN'?
                                    'Inclusion'
                                    :
                                    'Inclusión'
                                }
                            </h5>
                            <p id="inclusionDescription">
                                {
                                    lenguage == 'EN'?
                                    (<><br/></>)
                                    :
                                    (<><br/></>)
                                }
                            </p>
                            <div className="facility-shape"> <span className="norc-flag-points-32"></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutValues