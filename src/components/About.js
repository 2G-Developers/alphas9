import React from 'react'

const About = ({data}) => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__wrapper about__wrapper--order">
                        <img src={data?.value?.image[0]} alt="About" className="about__image"/>
                    </div>
                    <div className="about__wrapper">
                        <div className="about__heading">
                            <h3 className="about__heading-text">{data?.value?.header[0]}</h3>
                        </div>

                        <div className="about__paragraph">
                            <p className="about__paragraph-text">
                            {/* We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily. */}
                            {data?.value?.paragraph[0]}
                            </p>
                        </div>

                        <hr/>

                        <div className="about__speciality">
                            <h3 className="about__speciality-heading">{data?.value?.subheading[0]}</h3>

                            <div className="about__list-wrapper">
                                <ul className="about__list">
                                    {
                                        data?.value?.list.slice(0, data?.value?.list.length/2).map((item, idx) => <li key={idx} className="about__item"><span>{item}</span></li>)
                                    }
                                </ul>

                                <ul className="about__list">
                                    {
                                        data?.value?.list.slice(data?.value?.list.length/2).map((item, idx) => <li key={idx} className="about__item"><span>{item}</span></li>)
                                    }
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
