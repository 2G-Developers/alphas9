import React from 'react'

// icons
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container" style={{height: "100%"}}>
                <div className="row" style={{height: "100%"}}>
                    <div className="banner__wrapper">
                        <div className="banner__heading">
                            <h3 className="banner__heading-text">Alphas9.com</h3>
                        </div>

                        <div className="banner__paragraph">
                            <p className="banner__paragraph-text">
                            We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                            </p>
                        </div>

                        <div className="banner__user">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Founder" className="banner__user-image"/>

                            <div className="banner__user-details">
                                <p className="banner__user-name">Babu Sesh</p>
                                <span className="banner__user-role">Founder</span>
                            </div>
                        </div>

                        <button className="banner__button">Get Started for Free</button>

                        <ul className="banner__social-media">
                            <li className="banner__social-media__item banner__social-media__item--facebook"><FaFacebookF className="banner__social-media__icon" /></li>
                            <li className="banner__social-media__item banner__social-media__item--instagram"><FaInstagram className="banner__social-media__icon" /></li>
                            <li className="banner__social-media__item banner__social-media__item--twitter"><AiOutlineTwitter className="banner__social-media__icon" /></li>
                            <li className="banner__social-media__item banner__social-media__item--linkedin"><FaLinkedinIn className="banner__social-media__icon" /></li>
                        </ul>
                    </div>

                    <div className="banner__content">
                        <img src="https://res.cloudinary.com/gopal1996/image/upload/v1611500355/Alphas9/Macbook_Pro_ns7yir.png" className="banner__float-image" alt="Laptop"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
