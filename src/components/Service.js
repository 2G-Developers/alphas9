import React from 'react'

const Service = ({data}) => {
    return (
        <section id="Services" className="service">
            <div className="container">
                <div className="row">
                    <div className="service__heading">
                        <h6 className="service__heading-subheading">Feature Happiness</h6>
                        <h2 className="service__heading-text">{data?.value?.header[0]}</h2>
                    </div>
                    <div className="service__wrapper">
                        {
                            data?.value?.icon.slice(0, data?.value?.icon.length / 2).map((item, idx) => (
                                <div className="service__item" key={idx}>
                                    <div className="service__card gradient--one">
                                        <i className={`fa ${item.className} service__icon`} />
                                    </div>
                                    <p className="service__text">
                                        {item.value}
                                    </p>
                                </div>
                            ))
                        }
                        {/* <div className="service__item">
                            <div className="service__card gradient--one">
                                <FiTv className="service__icon" />
                            </div>
                            <p className="service__text">
                                Click, Call and Business!
                            </p>
                        </div>
                        <div className="service__item">
                            <div className="service__card gradient--two">
                                <FiGift className="service__icon" />
                            </div>
                            <p className="service__text">
                                People can Share or forward your Business Card.
                            </p>
                        </div>
                        <div className="service__item">
                            <div className="service__card gradient--three">
                                <FiKey className="service__icon" />
                            </div>
                            <p className="service__text">
                                Gallery (25 photos)
                            </p>
                        </div> */}
                    </div>
                    <div className="service__wrapper">
                        {
                            data?.value?.icon.slice(data?.value?.icon.length / 2).map((item, idx) => (
                                <div className="service__item" key={idx}>
                                    <div className="service__card gradient--one">
                                        <i className={`fa ${item.className} service__icon`} />
                                    </div>
                                    <p className="service__text">
                                        {item.value}
                                    </p>
                                </div>
                            ))
                        }
                        {/* <div className="service__item">
                            <div className="service__card gradient--four">
                                <FiLayout className="service__icon" />
                            </div>
                            <p className="service__text">
                                You can whatsapp to anyone without saving number.
                            </p>
                        </div>
                        <div className="service__item">
                            <div className="service__card gradient--five">
                                <FiServer className="service__icon" />
                            </div>
                            <p className="service__text">
                                About Us Display
                            </p>
                        </div>
                        <div className="service__item">
                            <div className="service__card gradient--six">
                                <FiSunrise className="service__icon" />
                            </div>
                            <p className="service__text">
                                Upload Pdf (5 no)
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
