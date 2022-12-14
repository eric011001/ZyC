import Link from 'next/link';
import React from 'react'

const Footer = ({lenguage}) => {

    return(
        <footer className="footer clearfix">
        <div className="container">
            <div className="first-footer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="links dark footer-contact-links">
                            <div className="footer-contact-links-wrapper">
                                <div className="footer-contact-link-wrapper">
                                    <div className="image-wrapper footer-contact-link-icon">
                                        <div className="icon-footer"> <i className="norc-phone"></i> </div>
                                    </div>
                                    <div className="footer-contact-link-content">
                                        <h6 id="callus">{lenguage == 'EN' ? 'Call us' : 'Llámanos'}</h6>
                                        <p id="phone">+1 (970) 470-9245</p>
                                    </div>
                                </div>
                                <div className="footer-contact-links-divider"></div>
                                <div className="footer-contact-link-wrapper">
                                    <div className="image-wrapper footer-contact-link-icon">
                                        <div className="icon-footer"> <i className="norc-mail"></i> </div>
                                    </div>
                                    <div className="footer-contact-link-content">
                                        <h6 id="writeUs">{lenguage == 'EN' ? 'Write us' : 'Escríbenos'}</h6>
                                        <p id="email">info@construction.com</p>
                                    </div>
                                </div>
                                <div className="footer-contact-links-divider"></div>
                                <div className="footer-contact-link-wrapper">
                                    <div className="image-wrapper footer-contact-link-icon">
                                        <div className="icon-footer"> <i className="norc-property-location"></i> </div>
                                    </div>
                                    <div className="footer-contact-link-content">
                                        <h6 id="address">{lenguage == 'EN' ? 'Address' : 'Dirección'}</h6>
                                        <p id="ubi">04 Edwards, CO 81632 US</p>
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
                            <h3 className="widget-title" id="widgetTitle">{lenguage == 'EN' ? 'About ZyC.' : 'Sobre ZyC.'}</h3>
                            <div className="widget-text">
                                <p id="widgetTextDescription">
                                    {lenguage == 'EN' ? 
                                        'We have experience in the construction, renovations and repair of swimming pools and jacuzzis. Contact us and ask about our services or quote your project.'
                                        :
                                        'Tenemos experiencia en la construcción, remodelación y reparación de albercas y jacuzzis. Contáctenos y pregunte por nuestros servicios o cotice su proyecto.'
                                    }
                                </p>
                                <div className="social-icons">
                                    <ul className="list-inline">
                                        <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 offset-md-1 widget-area">

                    </div>
                    <div className="col-md-3 offset-md-1 widget-area">
                        <div className="widget clearfix usful-links">
                            <h3 className="widget-title" id="quickLinks">{lenguage == 'EN' ? 'Quick Links' : 'Páginas'}</h3>
                            <ul>
                                <li><Link href="/about" id="footerAcercaDe">{lenguage == 'EN' ? 'About' : 'Acerca de'}</Link></li>
                                <li><Link href="/services" id="footerServicios">{lenguage == 'EN' ? 'Services' : 'Servicios'}</Link></li>
                                <li><Link href="/contact" id="footerContacto">{lenguage == 'EN' ? 'Contact' : 'Contacto'}</Link></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-1 offset-md-1 widget-area"></div>
                </div>
            </div>
            <div className="bottom-footer-text">
                <div className="row copyright">
                    <div className="col-md-12">
                        <p className="mb-0">©2022 <a href="#">ZyC Pool/Spa</a>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;