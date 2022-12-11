import Head from "next/head";
import Image from "next/image";
import Menu from "../Components/Menu";

export default function Home() {
  
  return (
    <div>
      <Head>
        <meta charset="utf-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>ZyC pool Spa</title>
        <link rel="shortcut icon" href="img/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Syne:wght@400;500;600;700;800&display=swap"
        />
      </Head>
      <div>
        <div className="preloader-bg"></div>
        <div id="preloader">
          <div id="preloader-status">
            <div className="preloader-position loader">
              <span></span>
            </div>
          </div>
        </div>
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        <Menu/>
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
        Í
        <section className="about section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-30">
                <div className="section-subtitle" id="sectionSubCon">
                  Pool construction
                </div>
                <div className="section-title" id="sectionTitleAbNor">
                  About <span>norc</span>
                </div>
                <p id="pSection1">
                  Our company at libero tristique mattis. Suspendisse potenti
                  sed leonra main dignissim justo porta eget. Curabitur luctus
                  magna numsaton vivention esellentesue the miss tenis vitae
                  mollie.
                </p>
                <p id="pSection2">
                  Curabitur luctus magna numsaton vivention esellentesue the mis
                  awa vitan sedeonra magnain dignissim porta.
                </p>
                <ul className="listext list-unstyled mb-30">
                  <li>
                    <div className="listext-icon">
                      {" "}
                      <i className="norc-d-check"></i>{" "}
                    </div>
                    <div className="listext-text">
                      <p id="lista1Top">Over 25 years of experience</p>
                    </div>
                  </li>
                  <li>
                    <div className="listext-icon">
                      {" "}
                      <i className="norc-d-check"></i>{" "}
                    </div>
                    <div className="listext-text">
                      <p id="lista2Top">100+ successfully executed projects</p>
                    </div>
                  </li>
                  <li>
                    <div className="listext-icon">
                      {" "}
                      <i className="norc-d-check"></i>{" "}
                    </div>
                    <div className="listext-text">
                      <p id="lista3Top">Exceptional work quality</p>
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
                      Our 25 years working experience make a different
                      construction building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="process">
          <div
            className="section-padding bg-img bg-fixed section-padding"
            data-background="img/banner2.jpg"
            data-overlay-dark="6"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 mb-45 text-center">
                  <h5 id="processSubtitle">How We Work</h5>
                  <h2 id="processTitle">Our Process</h2>
                  <p id="processDescription">
                    Suspendisse potenti sed laoen ultra magna in dignissim justo
                    porta miss acurabitur luctus magna numsation elentesue the
                    miss vitae moie.
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
                      <span>01.</span>Planing
                    </h6>
                  </div>
                </div>
                <div className="col-md-3 padding">
                  <div className="item text-center">
                    {" "}
                    <img src="img/arrow1.png" alt="" />{" "}
                    <span className="icon norc-pen-tool-2"></span>
                    <h6 id="process2">
                      <span>02.</span>Design
                    </h6>
                  </div>
                </div>
                <div className="col-md-3 padding">
                  <div className="item text-center">
                    {" "}
                    <img src="img/arrow1.png" className="tobotm" alt="" />{" "}
                    <span className="icon norc-new-construction"></span>
                    <h6 id="process3">
                      <span>03.</span>Construct
                    </h6>
                  </div>
                </div>
                <div className="col-md-3 padding">
                  <div className="item text-center">
                    {" "}
                    <span className="icon norc-trophy"></span>
                    <h6 id="process4">
                      <span>04.</span>Finishing
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="values section-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-subtitle" id="valuesTitle">
                  Our Values
                </div>
                <div className="section-title" id="valuesDescription">
                  Core <span>Values</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-facility">
                  <span className="norc-construction-sign"></span>
                  <h5 id="saeftyTitle">Safety</h5>
                  <p id="saeftyDescription">
                    Safety will always come first as we strive for accident-free
                    projects. Fusce tincidunt nis ace park norttito amet space.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="norc-construction-sign"></span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-facility">
                  <span className="norc-bulb-63"></span>
                  <h5 id="innovationTitle">Innovation</h5>
                  <p id="innovartionDescription">
                    Nulla quis effi vivento acus suvina sene in atue eduis euro
                    vesatien arcum the onte nisl auctor a menas vitae.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="norc-bulb-63"></span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-facility">
                  <span className="norc-paper-diploma"></span>
                  <h5 id="qualityTitle">Quality</h5>
                  <p id="qualityDescription">
                    Nulla quis effi vivento acus suvina sene in atue eduis euro
                    vesatien arcum the onte nisl auctor a menas vitae.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="norc-paper-diploma"></span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-facility">
                  <span className="norc-chess-knight"></span>
                  <h5 id="integrityTitle">Integrity</h5>
                  <p id="integrityDescription">
                    Nulla quis effi vivento acus suvina sene in atue eduis euro
                    vesatien arcum the onte nisl auctor a menas vitae.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="norc-chess-knight"></span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-facility">
                  <span className="norc-strategy"></span>
                  <h5 id="strategyTitle">Strategy</h5>
                  <p id="strategyDescription">
                    Nulla quis effi vivento acus suvina sene in atue eduis euro
                    vesatien arcum the onte nisl auctor a menas vitae.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="norc-strategy"></span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-facility">
                  <span className="norc-flag-points-32"></span>
                  <h5 id="inclusionTitle">Inclusion</h5>
                  <p id="inclusionDescription">
                    Nulla quis effi vivento acus suvina sene in atue eduis euro
                    vesatien arcum the onte nisl auctor a menas vitae.
                  </p>
                  <div className="facility-shape">
                    {" "}
                    <span className="norc-flag-points-32"></span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer clearfix">
          <div className="container">
            <div className="first-footer">
              <div className="row">
                <div className="col-md-12">
                  <div className="links dark footer-contact-links">
                    <div className="footer-contact-links-wrapper">
                      <div className="footer-contact-link-wrapper">
                        <div className="image-wrapper footer-contact-link-icon">
                          <div className="icon-footer">
                            {" "}
                            <i className="norc-phone"></i>{" "}
                          </div>
                        </div>
                        <div className="footer-contact-link-content">
                          <h6 id="callus">Call us</h6>
                          <p id="phone">+1 (970) 470-9245</p>
                        </div>
                      </div>
                      <div className="footer-contact-links-divider"></div>
                      <div className="footer-contact-link-wrapper">
                        <div className="image-wrapper footer-contact-link-icon">
                          <div className="icon-footer">
                            {" "}
                            <i className="norc-mail"></i>{" "}
                          </div>
                        </div>
                        <div className="footer-contact-link-content">
                          <h6 id="writeUs">Write to us</h6>
                          <p id="email">info@construction.com</p>
                        </div>
                      </div>
                      <div className="footer-contact-links-divider"></div>
                      <div className="footer-contact-link-wrapper">
                        <div className="image-wrapper footer-contact-link-icon">
                          <div className="icon-footer">
                            {" "}
                            <i className="norc-property-location"></i>{" "}
                          </div>
                        </div>
                        <div className="footer-contact-link-content">
                          <h6 id="address">Address</h6>
                          <p id="ubi">24 King St, SC 29401 USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-footer">
              <div className="row">
                <div className="col-md-1 offset-md-1 widget-area"></div>
                <div className="col-md-4 widget-area">
                  <div className="widget clearfix">
                    <h3 className="widget-title" id="widgetTitle">
                      About ZyC.
                    </h3>
                    <div className="widget-text">
                      <p id="widgetTextDescription">
                        Quisque imperdiet sapien porttito the bibendum
                        sellentesque the commodo erat acar accumsa lobortis,
                        enim diam the nesuen.
                      </p>
                      <div className="social-icons">
                        <ul className="list-inline">
                          <li>
                            <a href="#">
                              <i className="fa fa-whatsapp"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-youtube-play"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 offset-md-1 widget-area"></div>
                <div className="col-md-3 offset-md-1 widget-area">
                  <div className="widget clearfix usful-links">
                    <h3 className="widget-title" id="quickLinks">
                      Quick Links
                    </h3>
                    <ul>
                      <li>
                        <a href="about.html" id="footerAcercaDe">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="services.html" id="footerServicios">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="contact.html" id="footerContacto">
                          Projects
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-1 offset-md-1 widget-area"></div>
              </div>
            </div>
            <div className="bottom-footer-text">
              <div className="row copyright">
                <div className="col-md-12">
                  <p className="mb-0">
                    ©2022 <a href="#">ZyC Pool/Spa</a>. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="./js/jquery-3.6.0.min.js"></script>
        <script src="./js/jquery-migrate-3.0.0.min.js"></script>
        <script src="./js/modernizr-2.6.2.min.js"></script>
        <script src="./js/imagesloaded.pkgd.min.js"></script>
        <script src="./js/jquery.isotope.v3.0.2.js"></script>
        <script src="./js/popper.min.js"></script>
        <script src="./js/bootstrap.min.js"></script>
        <script src="./js/scrollIt.min.js"></script>
        <script src="./js/jquery.waypoints.min.js"></script>
        <script src="./js/jquery.stellar.min.js"></script>
        <script src="./js/jquery.magnific-popup.js"></script>
        <script src="./js/jquery.counterup.min.js"></script>
        <script src="./js/YouTubePopUp.js"></script>
        <script src="./js/custom.js"></script>
        <script src="./js/actions.js"></script>
      </div>
    </div>
  );
}
