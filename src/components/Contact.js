import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {HiMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'

const Contact = ({data}) => {
    return (
        <section id="Contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="contact__wrapper">
                        <div className="contact__container">
                            <div className="contact__heading" style={{alignItems: "flex-start"}}>
                                <div className="contact__heading-text">
                                    <h1>Get in Touch</h1>
                                </div>
                            </div>
                            <div className="contact__top">
                                <div className="contact__paragraph">
                                    <p>
                                        {data?.value?.desc[0]}
                                    </p>
                                </div>

                                <div className="contact__details">
                                    <a href="mailto:info@alphas9.com" className="contact__link"><IoIosCall className="contact__icons" color="#25DAC5" />{data?.value?.phone[0]}</a>
                                    <a href="mailto:info@alphas9.com" className="contact__link"><HiMail className="contact__icons" color="#25DAC5" />{data?.value?.email[0]}</a>
                                    <a href="mailto:info@alphas9.com" className="contact__link"><ImWhatsapp className="contact__icons" color="#25DAC5" />{data?.value?.whatsapp[0]}</a>
                                </div>
                            </div>

                            <div className="contact__bottom">
                                <div className="contact__secondary-heading">
                                    <h3>Find Us on Map</h3>
                                </div>

                                <div className="contact__paragraph" style={{marginBottom: 0}}>
                                    <p>Via {data?.value?.maplocation[0]}</p>
                                </div>

                                <div className="contact__map">
                                    <iframe style={{pointerEvents: 'none'}} width="100%" height="100%" title="map" src={data?.value?.mapurl[0]} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact__wrapper contact__wrapper--secondary">
                        <div className="contact__container">
                            <div className="contact__heading">
                                <div className="contact__heading-text">
                                    <h1>You Can Mail Us</h1>
                                </div>
                            </div>

                            <div className="contact__paragraph">
                                <p>
                                We are always looking for a awesome people.
                                </p>
                            </div>

                            <form className="contact__form">
                                <div className="contact__form-group" style={{paddingTop: "2rem"}}>
                                    <label className="contact__label" htmlFor="name">NAME</label>
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div className="contact__form-group">
                                    <label className="contact__label" htmlFor="name">MOBILE</label>
                                    <input type="text" placeholder="Your mobile" />
                                </div>
                                <div className="contact__form-group">
                                    <label className="contact__label" htmlFor="name">MESAGE</label>
                                    <textarea name="message" id="message" cols="30" rows="3" placeholder="Drop us a line"></textarea>
                                </div>
                                <div className="contact__form-group" style={{paddingBottom: "2rem"}}>
                                    <label className="contact__label" htmlFor="name">EMAIL</label>
                                    <div className="contact__email-wrap">
                                        <input type="email" placeholder="Your email" />
                                        <button className="contact__send">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
