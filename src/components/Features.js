import React from 'react'

const Features = ({data}) => {
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    <div className="features__heading">
                        <h2 className="features__heading-text">{data?.value?.header[0]}</h2>
                    </div>

                    <div className="features__wrapper">
                        {data?.value?.icon.map((item, idx) => (
                            <div className="features__item" key={idx}>
                                <div className="features__card gradient--one">
                                    <i className={`fa ${item.className} features__icon`} />
                                </div>
                                <p className="features__text">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                        {/* <div className="features__item">
                            <div className="features__card gradient--two">
                                <FiGift className="features__icon" />
                            </div>
                            <p className="features__text">
                                Click To WhatsApp
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--three">
                                <FiKey className="features__icon" />
                            </div>
                            <p className="features__text">
                                Click to Email
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--four">
                                <FiLayout className="features__icon" />
                            </div>
                            <p className="features__text">
                                Click to Navigate
                            </p>
                        </div>

                        <div className="features__item">
                            <div className="features__card gradient--five">
                                <FiServer className="features__icon" />
                            </div>
                            <p className="features__text">
                                Add to Contacts
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--six">
                                <FiSunrise className="features__icon" />
                            </div>
                            <p className="features__text">
                                Website & Social Links
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--seven">
                                <FiStar className="features__icon" />
                            </div>
                            <p className="features__text">
                                Share Unlimited
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--eight">
                                <FiShield className="features__icon" />
                            </div>
                            <p className="features__text">
                                Easy To Update
                            </p>
                        </div>

                        <div className="features__item">
                            <div className="features__card gradient--nine">
                                <FiRadio className="features__icon" />
                            </div>
                            <p className="features__text">
                                Photo Gallery
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--ten">
                                <FiSettings className="features__icon" />
                            </div>
                            <p className="features__text">
                                Youtube Video
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--thirteen">
                                <FiSliders className="features__icon" />
                            </div>
                            <p className="features__text">
                                Payment Section
                            </p>
                        </div>
                        <div className="features__item">
                            <div className="features__card gradient--fourteen">
                                <FiTwitter className="features__icon" />
                            </div>
                            <p className="features__text">
                                Enquiry Form
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
