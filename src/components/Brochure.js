import React from 'react'

const Brochure = () => {
    return (
        <section className="brochure">
            <div className="container">
                <div className="row">
                    <div className="brochure__wrapper">
                        <p className="brochure__text">Download Brochure</p>
                        <a href="http://www.africau.edu/images/default/sample.pdf" download className="brochure__download">Download</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brochure
