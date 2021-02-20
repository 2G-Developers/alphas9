import React from 'react'

const Payments = ({data}) => {
    return (
        <section className="payments">
            <div className="container">
                <div className="row">
                <div className="payments__heading">
                        <h2 className="payments__heading-text">{data?.value?.header[0]}</h2>
                    </div>
                    <div className="payments__wrapper">
                        <div className="payments__list">
                            <div className="payments__item">
                                <div className="payments__circle"></div>
                                <div className="payments__details">
                                    <p className="payments__vendor">Paytm</p>
                                    <p className="payments__text">{data?.value?.upi[0]?.Paytm}</p>
                                </div>
                            </div>
                            <div className="payments__item">
                                <div className="payments__circle"></div>
                                <div className="payments__details">
                                    <p className="payments__vendor">GPay</p>
                                    <p className="payments__text">{data?.value?.upi[0]?.GPay}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payments__wrapper">
                        <div className="payments__list">
                            <div className="payments__item payments__item--column">
                                <div className="payments__details--secondary">
                                    <div className="payments__circle"></div>
                                    <p className="payments__vendor">{data?.value?.accountheader[0]}</p>
                                </div>

                                <div className="payments__grid">
                                    <div className="payments__details">
                                        <p className="payments__vendor">Bank name</p>
                                        <p className="payments__text">{data?.value?.account[0]?.Bankname}</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">IFSC Code</p>
                                        <p className="payments__text">{data?.value?.account[0]?.IFSCCode}</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">Account type</p>
                                        <p className="payments__text">{data?.value?.account[0]?.AccountType}</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">Account HOLDER NAME</p>
                                        <p className="payments__text">{data?.value?.account[0]?.AccountHOLDERNAME}</p>
                                    </div>
                                    <div className="payments__details">
                                        <p className="payments__vendor">Account Number</p>
                                        <p className="payments__text">{data?.value?.account[0]?.AccountNumber}</p>
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
