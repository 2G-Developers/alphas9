import React from 'react'
import {FiBriefcase} from 'react-icons/fi'

const WhyUs = ({data}) => {
    return (
        <section className="whyus">
            <div className="container">
                <div className="row">
                    <div className="whyus__wrapper">
                        <div className="whyus__heading">
                            <h3 className="whyus__heading-text">{data?.value?.header[0]}</h3>
                        </div>
                        <div className="whyus__paragraph">
                            <p className="whyus__paragraph-text">
                                {data?.value?.paragraph[0]}
                            </p>
                        </div>

                        <div className="whyus__list">
                            {data?.value?.value.map((item, idx) => (
                                <div className="whyus__item" key={idx}>
                                    <FiBriefcase className="whyus__item-icon" />
                                    <p className="whyus__item-text">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="whyus__wrapper whyus__wrapper--center">
                        <img src={data?.value?.image[0]} alt="WhyUs" className="whyus__image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
