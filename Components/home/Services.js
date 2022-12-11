import React from 'react'

const Services = ({lenguage}) => {

    return(
        <section className="services center section-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-subtitle" id="subtitleServices">
                  What We Do
                </div>
                <div className="section-title" id="titleServices">
                  Our <span>Services</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 owl-carousel owl-theme">
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
                        Construction
                      </a>
                    </h5>
                    <p id="constructionDescription">
                      Quisque imperdie miss sapien porttiton the bibendum.
                      Pellentesque accumsa amet tincidunt risus nesuen.
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
                        Service route
                      </a>
                    </h5>
                    <p id="serviceRouteDescription">
                      Quisque imperdie miss sapien porttiton the bibendum.
                      Pellentesque accumsa amet tincidunt risus nesuen.
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
                        Repairs
                      </a>
                    </h5>
                    <p id="repairsDescription">
                      Quisque imperdie miss sapien porttiton the bibendum.
                      Pellentesque accumsa amet tincidunt risus nesuen.
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
                        Renovation
                      </a>
                    </h5>
                    <p id="renovationDescription">
                      Quisque imperdie miss sapien porttiton the bibendum.
                      Pellentesque accumsa amet tincidunt risus nesuen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Services;