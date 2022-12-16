import React from 'react'
import h1 from '../../public/img/banner2.jpg'

const Process = ({lenguage}) => {

    return(
        <section className="process">
            <div
                className="section-padding bg-img bg-fixed section-padding"
                style={{backgroundImage: `url(${h1.src})`}}
                data-overlay-dark="6"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 mb-45 text-center">
                            <h5 id="processSubtitle">
                                {
                                    lenguage == 'EN'?
                                    'How we work?'
                                    :
                                    '¿Cómo trabajamos?'
                                }
                            </h5>
                            <h2 id="processTitle">
                                {
                                    lenguage == 'EN'?
                                    'Our process'
                                    :
                                    'Nuestro proceso'
                                }
                            </h2>
                            <p id="processDescription">
                                {
                                    lenguage == 'EN'?
                                    'Discover our process to deliver you a quality service'
                                    :
                                    'Descuebre nuestro proceso para entregarte un servicio de calidad'
                                }
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 padding">
                            <div className="item text-center">
                                {" "}
                                <img src="img/arrow1.png" className="tobotm" alt="" />{" "}
                                <span className="icon norc-paper"></span>
                                <h6 id="process1">
                                    {
                                        lenguage == 'EN'?
                                        (<><span>01.</span>planning</>)
                                        :
                                        (<><span>01.</span>planeación</>)
                                    }
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-3 padding">
                            <div className="item text-center">
                                {" "}
                                <img src="img/arrow1.png" alt="" />{" "}
                                <span className="icon norc-pen-tool-2"></span>
                                <h6 id="process2">
                                    {
                                        lenguage == 'EN'?
                                        (<><span>02.</span>Design</>)
                                        :
                                        (<><span>02.</span>Diseño</>)
                                    }
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-3 padding">
                            <div className="item text-center">
                                {" "}
                                <img src="img/arrow1.png" className="tobotm" alt="" />{" "}
                                <span className="icon norc-new-construction"></span>
                                <h6 id="process3">
                                    {
                                        lenguage == 'EN'?
                                        (<><span>03.</span>Construction</>)
                                        :
                                        (<><span>03.</span>Construcción</>)
                                    }
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-3 padding">
                            <div className="item text-center">
                                {" "}
                                <span className="icon norc-trophy"></span>
                                <h6 id="process4">
                                    {
                                        lenguage == 'EN'?
                                        (<><span>04.</span>Finishing</>)
                                        :
                                        (<><span>04.</span>Entrega</>)
                                    }
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process;