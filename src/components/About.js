import React from 'react'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__wrapper about__wrapper--order">
                        <img src="https://res.cloudinary.com/gopal1996/image/upload/v1611500356/Alphas9/Photo_kpohti.png" alt="About" className="about__image"/>
                    </div>
                    <div className="about__wrapper">
                        <div className="about__heading">
                            <h3 className="about__heading-text">What are we?!</h3>
                        </div>

                        <div className="about__paragraph">
                            <p className="about__paragraph-text">
                            We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                            </p>
                        </div>

                        <hr/>

                        <div className="about__speciality">
                            <h3 className="about__speciality-heading">Speciality</h3>

                            <div className="about__list-wrapper">
                                <ul className="about__list">
                                    <li className="about__item"><span>Knowledgeable team of professionals</span></li>
                                    <li className="about__item"><span>Complete client satisfaction</span></li>
                                    <li className="about__item"><span>Ethical business policies</span></li>
                                    <li className="about__item"><span>Affordable pricing</span></li>
                                    <li className="about__item"><span>On-time deliver/ execution</span></li>
                                </ul>

                                <ul className="about__list">
                                    <li className="about__item"><span>Reliable services</span></li>
                                    <li className="about__item"><span>Transparent dealings</span></li>
                                    <li className="about__item"><span>Best Consultancy</span></li>
                                    <li className="about__item"><span>Wide connectivity</span></li>
                                    <li className="about__item"><span>Use of advanced technology</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
