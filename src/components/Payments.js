import React from 'react'

const Payments = () => {
    return (
        <section className="payments">
            <div className="container">
                <div className="row">
                <div className="payments__heading">
                        <h2 className="payments__heading-text">PAYMENT</h2>
                    </div>
                    <div className="payments__wrapper">
                        <div className="payments__list">
                            <div className="payments__item">
                                <div className="payments__circle"></div>
                                <div className="payments__details">
                                    <p className="payments__vendor">Paytm</p>
                                    <p className="payments__text">8767805809</p>
                                </div>
                            </div>
                            <div className="payments__item">
                                <div className="payments__circle"></div>
                                <div className="payments__details">
                                    <p className="payments__vendor">GPay</p>
                                    <p className="payments__text">8767805809</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payments__wrapper">
                        <div className="payments__list">
                            <div className="payments__item payments__item--column">
                                <div className="payments__details--secondary">
                                    <div className="payments__circle"></div>
                                    <p className="payments__vendor">Account Details</p>
                                </div>

                                <div className="payments__grid">
                                    <div className="payments__details">
                                        <p className="payments__vendor">Bank name</p>
                                        <p className="payments__text">ICICI BANK LTD</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">IFSC Code</p>
                                        <p className="payments__text">ICICI0009866</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">Account type</p>
                                        <p className="payments__text">CURRENT</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">Account HOLDER NAME</p>
                                        <p className="payments__text">What are we?!</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">Account Number</p>
                                        <p className="payments__text">00000000000000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payments
