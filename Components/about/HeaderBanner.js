import React from 'react'
import h1 from '../../public/img/header2.jpeg'
const HeaderBanner = ({lenguage}) => {


    return(
        <section class="banner-header banner-img-top section-padding valign bg-img bg-fixed" data-overlay-dark="4" style={{backgroundImage: `url(${h1.src})`}}  >
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h6 id="principalSubtitle">
                            {
                                lenguage == 'EN' ? 
                                'Pool construction'
                                :
                                'Construcción de albercas'
                            }
                        </h6>
                        <h1 id="principalTitle">
                            {
                                lenguage == 'EN' ? 
                                (<>About <span>ZyC</span> </>)
                                :
                                (<>Sobre <span>ZyC</span></>)
                            }
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderBanner;