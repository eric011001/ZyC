import React from 'react'

const Numbers = ({lenguage}) => {

    return(
        <section className="numbers">
            <div className="section-padding bg-img bg-fixed section-padding" data-background="img/banner2.jpg" data-overlay-dark="6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item text-center"> <span className="icon">
                                    <i className="front norc-design"></i>
                                    <i className="back norc-design"></i>
                                </span>
                                <h3 className="count" id="countProjects">25</h3>
                                <h6 id="countTitle">
                                    {
                                        lenguage == 'EN'?
                                        (<><span>01.</span> Projects Design</>)
                                        :
                                        (<><span>01.</span> Proyectos diseñados</>)
                                    }
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item text-center"> <span className="icon">
                                    <i className="font norc-b-meeting"></i>
                                    <i className="back norc-b-meeting"></i>
                                </span>
                                <h3 className="count" id="countHappyClients">100</h3>
                                <h6 id="happyClientsTitle">
                                    {
                                        lenguage == 'EN'?
                                        (<><span>02.</span> Happy Clients</>)
                                        :
                                        (<><span>02.</span> Clientes satisfechos</>)
                                    }
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item text-center"> <span className="icon">
                                    <i className="front norc-paper-diploma"></i>
                                    <i className="back norc-paper-diploma"></i>
                                </span>
                                <h3 className="count" id="countComProj">15</h3>
                                <h6 id="comProjTitle">
                                    {
                                        lenguage == 'EN'?
                                        (<><span>03.</span> Completed Projects</>)
                                        :
                                        (<><span>03.</span> Proyectos completos</>)
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

export default Numbers;