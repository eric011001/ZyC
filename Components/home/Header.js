import React from 'react'

const Header = ({lenguage}) => {

    return(
        <header className="header slider-fade">
          <div className="owl-carousel owl-theme">
            <div
              className="text-left item bg-img"
              data-overlay-dark="4"
              data-background="img/slider/1.jpeg"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 id="slider1Top">Guaranteed High Quality</h4>
                      <h1 id="sliderTitleTop">Welcome to ZyC Pool/Spa</h1>
                      <p id="sliderDescriptionTop">
                        We have experience in the construction, renovations and
                        repair of swimming pools and jacuzzis. Contact us and
                        ask about our services or quote your project.
                      </p>{" "}
                      <a
                        href="services.html"
                        className="button-tersiyer"
                        id="sliderTop1Services"
                      >
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-left item bg-img"
              data-overlay-dark="4"
              data-background="img/slider/2.jpeg"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="Írow">
                    <div className="col-md-7">
                      <h4 id="slider2Top">Architecture Designs</h4>
                      <h1 id="sliderTitle2Top">We Great Projects</h1>
                      <p id="sliderDescription2Top">
                        We have experience in the construction, renovations and
                        repair of swimming pools and jacuzzis. Contact us and
                        ask about our services or quote your project.
                      </p>{" "}
                      <a
                        href="services.html"
                        className="button-tersiyer"
                        id="sliderTop2Services"
                      >
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-left item bg-img"
              data-overlay-dark="4"
              data-background="img/slider/3.jpg"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 id="slider3Top">Professional Team</h4>
                      <h1 id="sliderTitle3Top">Build Your Dream House</h1>
                      <p id="sliderDescription3Top">
                        Our 25 years working experience make a different
                        construction building. Viverra tristique usto duis vitae
                        diam neque nivamus estan the atin viverra nectow drana
                        setlie.
                      </p>{" "}
                      <a
                        href="services.html"
                        className="button-tersiyer"
                        id="sliderTop3Services"
                      >
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}

export default Header;