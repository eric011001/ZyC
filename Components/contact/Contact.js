import React from 'react'

const Contact = ({lenguage}) => {

    return(
        <section class="contact section-padding">
        <div class="container">
            <div class="row mb-90">
                <div class="col-md-5 mb-60">
                    <h5 id="containerTitle">
                        {
                            lenguage == 'EN'?
                            'Contact Information'
                            :
                            'Información de contacto'
                        }
                    </h5>
                    <p class="mb-30" id="containerDescription">
                        {
                            lenguage == 'EN'?
                            'Contact us and ask any question or clarification.'
                            :
                            'Contactanos y realiza cualquier pregunta o aclaración.'
                        }
                    </p>
                    <div class="contact-link">
                        <div class="contact-link-icon"><span class="norc-phone"></span></div>
                        <div class="contact-link-content">
                            <div class="contact-link-title" id="callUsContainer">
                                {
                                    lenguage == 'EN'?
                                    'Call us'
                                    :
                                    'Llámanos'
                                }
                            </div>
                            <div class="contact-link-text" id="phoneContainer">+1 (970) 470-9245</div>
                        </div>
                    </div>
                    <div class="contact-link">
                        <div class="contact-link-icon"><span class="norc-mail"></span></div>
                        <div class="contact-link-content">
                            <div class="contact-link-title" id="emailContainer">
                                {
                                    lenguage == 'EN'?
                                    'Send us an email'
                                    :
                                    'Escríbenos'
                                }
                            </div>
                            <div class="contact-link-text" id="contEmailContainer">carloscalzadillas22@gmail.com</div>
                        </div>
                    </div>
                    <div class="contact-link">
                        <div class="contact-link-icon"><span class="norc-square-pin"></span></div>
                        <div class="contact-link-content">
                            <div class="contact-link-title" id="address">
                                {
                                    lenguage == 'EN'?
                                    'Visit our office'
                                    :
                                    'Dirección'
                                }
                            </div>
                            <div class="contact-link-text" id="conAddressContainer">04 Edwards, CO 81632 US</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 offset-md-2">
                    <div class="form-wrap">
                        <div class="form-box">
                            <h5 id="titlecontact">Get in touch</h5>
                            <form method="post" class="contact__form">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="alert alert-success contact__msg" style={{display: "none"}} role="alert"> Your message was sent successfully. </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <input id="nameInput" name="name" type="text" placeholder="Your Name *" required/>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input id="emailInput" name="email" type="email" placeholder="Your Email *" required/>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input id="phoneInput" name="phone" type="text" placeholder="Your Number *" required/>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <input id="subjectInput" name="subject" type="text" placeholder="Subject *" required/>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <textarea id="messageInput" name="message"  cols="30" rows="4" placeholder="Message *" required></textarea>
                                    </div>
                                    <div class="col-md-12">
                                        <button class="button-secondary mt-15"><a href="#0"><span id="buttonSend">Send Message</span></a></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    )
}

export default Contact