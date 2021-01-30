import React from 'react'
import {FiBriefcase} from 'react-icons/fi'
import {VscSmiley} from 'react-icons/vsc'

const WhyUs = () => {
    return (
        <section className="whyus">
            <div className="container">
                <div className="row">
                    <div className="whyus__wrapper">
                        <div className="whyus__heading">
                            <h3 className="whyus__heading-text">whatarewe.in/</h3>
                        </div>
                        <div className="whyus__paragraph">
                            <p className="whyus__paragraph-text">
                                Sample text just for demoSample text just for demoSample text just for demoSample text just for demoSample text just for demo.
                                We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                            </p>
                        </div>

                        <div className="whyus__list">
                            <div className="whyus__item">
                                <FiBriefcase className="whyus__item-icon" />
                                <p className="whyus__item-text">No need to worry about your paper visiting card.</p>
                            </div>
                            <div className="whyus__item">
                                <VscSmiley className="whyus__item-icon" />
                                <p className="whyus__item-text">Your card will now always be available with your client.</p>
                            </div>
                        </div>
                    </div>
                    <div className="whyus__wrapper whyus__wrapper--center">
                        <img src="https://res.cloudinary.com/gopal1996/image/upload/v1612007977/Alphas9/Mockups_da6rp7.png" alt="WhyUs" className="whyus__image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
