import Link from 'next/link';
import React from 'react'
import OwlCarousel from 'react-owl-carousel2';

const Services = ({lenguage}) => {

    const options = {
      loop: true,
      margin: 30,
      mouseDrag: true,
      autoplay: false,
      dots: true,
      autoplayHoverPause: true,
      responsive: {
			0: {
				items: 1
			, }
			, 600: {
				items: 2
			}
			, 1000: {
				items: 3
			}
		}
    }

    return(
        <section className="services center section-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-subtitle" id="subtitleServices">
                  How We Work
                </div>
                <div className="section-title" id="titleServices">
                  Our <span>Services</span>
                </div>
              </div>
            </div>
            <div className="row">
              <OwlCarousel className="col-md-12 owl-carousel owl-theme" options={options}>
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
                      <Link href="/services" id="constructionTitle">
                        Construction
                      </Link>
                    </h5>
                    <p id="constructionDescription">
                      Construction of pools and Jacuzzis.
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
                      <Link href="/services" id="serviceRouteTitle">
                        Service route
                      </Link>
                    </h5>
                    <p id="serviceRouteDescription">
                      We make a service route to support all the pools and hot tubs of our customers.
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
                      <Link href="/services" id="repairsTitle">
                        Repair and maintenance
                      </Link>
                    </h5>
                    <p id="repairsDescription">
                      We take care of any problem or malfunction with your pool or jacuzzi, always looking for the best quality.
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
                      <Link href="/services" id="renovationTitle">
                        Renovation
                      </Link>
                    </h5>
                    <p id="renovationDescription">
                      We improve or upgrade your pool or jacuzzi facilities for your community.
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
    )
}

export default Services;