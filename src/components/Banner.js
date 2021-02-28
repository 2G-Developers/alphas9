import React from 'react'

// icons
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

const Banner = ({data, social}) => {
    return (
        <section className="banner">
            <div className="container" style={{height: "100%"}}>
                <div className="row" style={{height: "100%"}}>
                    <div className="banner__wrapper">
                        <div className="banner__heading">
                            <h3 className="banner__heading-text">{data?.value?.header[0]}</h3>
                        </div>

                        <div className="banner__paragraph">
                            <p className="banner__paragraph-text">
                            {data?.value?.paragraph[0]}
                            </p>
                        </div>

                        <div className="banner__user">
                            <img src={data?.value?.founderimg[0]} alt="Founder" className="banner__user-image"/>

                            <div className="banner__user-details">
                                <p className="banner__user-name">{data?.value?.foundername[0]}</p>
                                <span className="banner__user-role">{data?.value?.founderrole[0]}</span>
                            </div>
                        </div>

                        <button className="banner__button">Get Started for Free</button>

                        <ul className="banner__social-media">
                            <li className="banner__social-media__item banner__social-media__item--facebook"><a href={social?.value?.facebook[0]}><FaFacebookF aria-label="Icon" className="banner__social-media__icon" /></a></li>
                            <li className="banner__social-media__item banner__social-media__item--instagram"><a href={social?.value?.instagram[0]}><FaInstagram aria-label="Icon" className="banner__social-media__icon" /></a></li>
                            <li className="banner__social-media__item banner__social-media__item--twitter"><a href={social?.value?.twitter[0]}><AiOutlineTwitter aria-label="Icon" className="banner__social-media__icon" /></a></li>
                            <li className="banner__social-media__item banner__social-media__item--linkedin"><a href={social?.value?.linkdin[0]}><FaLinkedinIn aria-label="Icon" className="banner__social-media__icon" /></a></li>
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
