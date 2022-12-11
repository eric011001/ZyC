import React from 'react'


const HeaderBanner = ({lenguage}) => {

    return(
        <section class="banner-header banner-img-top section-padding valign bg-img bg-fixed" data-overlay-dark="4" data-background="img/slider/1.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h6 id="principalSubtitle">
                            {
                                lenguage == 'EN'?
                                'Get in touch'
                                :
                                'A un toque de distancia'
                            }
                        </h6>
                        <h1 id="pricipalTitle">
                            {
                                lenguage == 'EN'?
                                (<>Contact <span>Us</span></>)
                                :
                                'Contactanos'
                            }
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderBanner;