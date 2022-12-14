import React from 'react'
import h1 from '../../public/img/slider/1.jpg'

const HeaderBanner = ({lenguage}) => {

    return(
        <section className="banner-header banner-img-top section-padding valign bg-img bg-fixed" data-overlay-dark="4" style={{backgroundImage: `url(${h1.src})`}} >
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h6 id="principalSubtitle">
                            { lenguage == 'EN'?
                                'What we do?'
                                :
                                '¿Qué hacemos?'
                            }
                        </h6>
                        <h1 id="principalTitle">
                            {
                                lenguage == 'EN'?
                                (<>Our <span>Services</span></>)
                                :
                                (<>Nuestros <span>Servicios</span></>)
                            }
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderBanner;