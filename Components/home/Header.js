import Link from 'next/link';
import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import h1 from '../../public/img/slider/1.jpeg'
import h2 from '../../public/img/slider/2.jpeg'
import h3 from '../../public/img/slider/3.jpg'

const Header = ({lenguage}) => {

    const options = {
        items: 1,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        navText: ['<i class="norc-small-left" aria-hidden="true"></i>', '<i class="norc-small-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                dots: true
            },
            600: {
                dots: true
            },
            1000: {
                dots: true
            }
        }
      };

    return(
        <header className="header slider-fade" >
          <OwlCarousel className="owl-carousel owl-theme" options={options}>
            <div
              className="text-left item bg-img"
              style={{backgroundImage: `url(${h1.src})`}}
              data-overlay-dark="4"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 id="slider1Top">
                        Guaranteed High Qualitylidad garantizada'
                        
                      </h4>
                      <h1 id="sliderTitleTop">
                        Welcome to ZyC Pool/Spa
                      </h1>
                      <p id="sliderDescriptionTop">
                        We have experience in the construction, renovations and repair of swimming pools and jacuzzis. Contact us and ask about our services or quote your project.
                      </p>{" "}
                      <Link
                        href="/services"
                        className="button-tersiyer"
                        id="sliderTop1Services"
                      >
                        Our services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-left item bg-img"
              style={{backgroundImage: `url(${h2.src})`}}
              data-overlay-dark="4"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="Írow">
                    <div className="col-md-7">
                      <h4 id="slider2Top">
                        Great designs
                      </h4>
                      <h1 id="sliderTitle2Top">
                        We have great projects
                      </h1>
                      <p id="sliderDescription2Top">
                        We have experience in the construction, remodeling and repair of swimming pools and jacuzzis. Contact us and ask about our services or quote your project.
                      </p>{" "}
                      <Link
                        href="/services"
                        className="button-tersiyer"
                        id="sliderTop2Services"
                      >
                        Our services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-left item bg-img"
              style={{backgroundImage: `url(${h3.src})`}}
              data-overlay-dark="4"
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 id="slider3Top">
                        Professional team
                      </h4>
                      <h1 id="sliderTitle3Top">
                        Build your dream pool
                      </h1>
                      <p id="sliderDescription3Top">
                        Our more than 3 years of experience are proof of a quality project.
                      </p>{" "}
                      <Link
                        href="/services"
                        className="button-tersiyer"
                        id="sliderTop3Services"
                      >
                        Our services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </OwlCarousel>
        </header>
    )
}

export default Header;